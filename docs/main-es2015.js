(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  hide(ArrayPrototype, UNSCOPABLES, create(null));
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  return !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/bind-context.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/bind-context.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      hide(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/function-to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");

module.exports = shared('native-function-to-string', Function.toString);


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var O = 'object';
var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == O && globalThis) ||
  check(typeof window == O && window) ||
  check(typeof self == O && self) ||
  check(typeof global == O && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();


/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/hide.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/hide.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    hide(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var IE_PROTO = sharedKey('IE_PROTO');

var PROTOTYPE = 'prototype';
var Empty = function () { /* empty */ };

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var length = enumBugKeys.length;
  var lt = '<';
  var script = 'script';
  var gt = '>';
  var js = 'java' + script + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = String(js);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
  return createDict();
};

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : defineProperties(result, Properties);
};

hiddenKeys[IE_PROTO] = true;


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var nativeFunctionToString = __webpack_require__(/*! ../internals/function-to-string */ "./node_modules/core-js/internals/function-to-string.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(nativeFunctionToString).split('toString');

shared('inspectSource', function (it) {
  return nativeFunctionToString.call(it);
});

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) hide(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else hide(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var hide = __webpack_require__(/*! ../internals/hide */ "./node_modules/core-js/internals/hide.js");

module.exports = function (key, value) {
  try {
    hide(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.2.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

var Symbol = global.Symbol;
var store = shared('wks');

module.exports = function (name) {
  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name]
    || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('filter') }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('map') }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div id=\"wrapper\">\n    <div *ngIf=\"exampleBar\" id=\"sidebar-wrapper\">\n        <ul class=\"sidebar-nav\">\n            <li><button (click)=\"toggleExampleBar()\" >&lt;-- Hide</button></li>\n            <li class=\"sidebar-brand\"><ul>Dweeve Examples</ul></li>\n            <li><a (click)=\"loadExample('Simple function')\" href=\"#\">Simple function</a></li>\n            <li><a (click)=\"loadExample('Get people')\"href=\"#\">Get people</a></li>\n            <li><a (click)=\"loadExample('All descendents')\"href=\"#\">All descendents</a></li>\n            <li><a (click)=\"loadExample('Mixed matching')\"href=\"#\">Mixed matching</a></li>\n            <li><a (click)=\"loadExample('Simple Lambda')\"href=\"#\">Simple Lambda</a></li>\n            <li><a (click)=\"loadExample('Do scope')\"href=\"#\">Do scope</a></li>\n            <li><a (click)=\"loadExample('Xml input')\"href=\"#\">Xml input</a></li>\n        </ul>\n    </div>\n    <div id=\"page-content-wrapper\">\n        <div class=\"page-content\">\n  \n\n            <div class=\"xxcontainer\" style = \"background-color: lightgrey\">\n\n              \n              \n              <div class=\"content\" style=\"padding-left: 20px; padding-right: 20px\">\n                  <div class=\"col-lg-10\" role=\"banner\">\n                    <h2>d~weeve - a Dataweave(ish) javascript thing.</h2>\n                    <button (click)=\"toggleExampleBar()\"  >--&gt;Examples Bar</button>\n                  </div>\n                    <div class=\"row\">\n                      <div class=\"col-lg-6\">\n                        <p>d~weeve:</p>\n                        <ace-editor #dweditor style=\"height:350px;\">\n                        </ace-editor>\n                      </div>\n                      <div class=\"col-lg-6\">\n                        <p>payload:</p>\n                        <ace-editor #pleditor style=\"height:350px;\">\n                        </ace-editor>\n                      </div>\n                    </div>\n                    <br>\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <p>Result:</p>\n                        <ace-editor #reditor style=\"height:250px;\">\n                        </ace-editor>\n                      </div>\n                    </div>\n                    <br>\n                    <br>\n                </div>\n              \n            </div>  \n\n          </div>\n        </div>\n    </div>\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#wrapper {\r\n    padding-left: 70px;\r\n    padding-right: 70px;\r\n    -webkit-transition: all 0.4s ease 0s;\r\n    transition: all 0.4s ease 0s;\r\n  }\r\n  \r\n  #sidebar-wrapper {\r\n    margin-left: 0px;\r\n    left:70px;\r\n    width: 250px;\r\n    background: #CCC;\r\n    position: fixed;\r\n    height: 100%;\r\n    overflow-y: visible;\r\n    z-index: 1000;\r\n    -webkit-transition: all 0.4s ease 0s;\r\n    transition: all 0.4s ease 0s;\r\n  }\r\n  \r\n  #page-content-wrapper {\r\n    width: 100%;\r\n  }\r\n  \r\n  .sidebar-nav {\r\n    position: absolute;\r\n    background: #CCC;\r\n    color: #333;\r\n    top: 0;\r\n    width: 250px;\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  @media (max-width:767px) {\r\n  \r\n      #wrapper {\r\n        padding-left: 0;\r\n      }\r\n  \r\n      #sidebar-wrapper {\r\n        left: 0;\r\n      }\r\n  \r\n      #wrapper.active {\r\n        position: relative;\r\n        left: 250px;\r\n      }\r\n  \r\n      #wrapper.active #sidebar-wrapper {\r\n        left: 250px;\r\n        width: 250px;\r\n        -webkit-transition: all 0.4s ease 0s;\r\n        transition: all 0.4s ease 0s;\r\n      }\r\n  \r\n  }\r\n  \r\n  #sidebar-wrapper li{\r\n    margin: 10px 10px;\r\n \r\n  }\r\n  \r\n  #sidebar-wrapper li a {\r\n    color: #333;\r\n \r\n  }  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9DQUE0QjtJQUE1Qiw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLG9DQUE0QjtJQUE1Qiw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxNQUFNO0lBQ04sWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsVUFBVTtFQUNaOztFQUVBOztNQUVJO1FBQ0UsZUFBZTtNQUNqQjs7TUFFQTtRQUNFLE9BQU87TUFDVDs7TUFFQTtRQUNFLGtCQUFrQjtRQUNsQixXQUFXO01BQ2I7O01BRUE7UUFDRSxXQUFXO1FBQ1gsWUFBWTtRQUNaLG9DQUE0QjtRQUE1Qiw0QkFBNEI7TUFDOUI7O0VBRUo7O0VBRUE7SUFDRSxpQkFBaUI7O0VBRW5COztFQUVBO0lBQ0UsV0FBVzs7RUFFYiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3dyYXBwZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNzBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XHJcbiAgfVxyXG4gIFxyXG4gICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIGxlZnQ6NzBweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNDQ0M7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy15OiB2aXNpYmxlO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UgMHM7XHJcbiAgfVxyXG4gIFxyXG4gICNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGViYXItbmF2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6ICNDQ0M7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDo3NjdweCkge1xyXG4gIFxyXG4gICAgICAjd3JhcHBlciB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgI3dyYXBwZXIuYWN0aXZlIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbGVmdDogMjUwcHg7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgI3dyYXBwZXIuYWN0aXZlICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgICAgIGxlZnQ6IDI1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlIDBzO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgfVxyXG5cclxuICAjc2lkZWJhci13cmFwcGVyIGxpe1xyXG4gICAgbWFyZ2luOiAxMHB4IDEwcHg7XHJcbiBcclxuICB9ICBcclxuXHJcbiAgI3NpZGViYXItd3JhcHBlciBsaSBhIHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gXHJcbiAgfSAgIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dweeve_src_exe_dweeve_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dweeve/src/exe/dweeve.js */ "./src/app/dweeve/src/exe/dweeve.js");



let AppComponent = class AppComponent {
    constructor() {
        this.title = 'dweeve-ui';
        this.exampleBar = false;
    }
    ngOnInit() {
    }
    toggleExampleBar() {
        this.exampleBar = !this.exampleBar;
    }
    ngAfterViewInit() {
        this.dweditor.getEditor().setOptions({
            showLineNumbers: true,
            tabSize: 2
        });
        this.dweditor.theme = 'clouds';
        this.dweditor.text = `%dw 2.0
    var a = 2 * 3 + 4
    var b = 2 + 3 * 4
    ---
    {a:a, b: b}
    `;
        this.dweditor.registerOnChange(() => {
            this.reDweeve();
        });
        this.pleditor.getEditor().setOptions({
            showLineNumbers: true,
            tabSize: 2
        });
        this.pleditor.theme = 'clouds';
        this.pleditor.text = `<?xml version='1.0' encoding='UTF-8'?>
<prices>
    <basic>9.99</basic>
    <premium>53.01</premium>
    <vip>398.99</vip>
</prices>`;
        this.pleditor.registerOnChange(() => {
            this.reDweeve();
        });
        this.reditor.getEditor().setOptions({
            showLineNumbers: true,
            tabSize: 2
        });
        this.reditor.theme = 'clouds';
        this.reDweeve();
    }
    reDweeve() {
        this.reditor.text = _dweeve_src_exe_dweeve_js__WEBPACK_IMPORTED_MODULE_2__["run"](this.dweditor.text, this.pleditor.text, '', '');
    }
    loadExample(exName) {
        if (exName === 'Simple function') {
            this.dweditor.text = `%dw 2.0
fun toUser(obj) = {
  firstName: obj.field1,
  lastName: obj.field2
}

---
toUser(payload)`;
            this.pleditor.text = `{
  "field1": "Bob",
  "field2": "Jones"
}`;
        }
        if (exName === 'Get people') {
            this.dweditor.text = `%dw 2.0

output application/json
---
payload.people.person.address.street`;
            this.pleditor.text = `{
"people": [
    {
    "person": {
        "name": "Nial",
        "address": {
        "street": {
            "name": "Italia",
            "number": 2164
        },
        "area": {
            "zone": "San Isidro",
            "name": "Martinez"
        }
        }
    }
    },
    {
    "person": {
        "name": "Coty",
        "address": {
        "street": {
            "name": "Monroe",
            "number": 323
        },
        "area": {
            "zone": "BA",
            "name": "Belgrano"
        }
        }
    }
    }
]
}`;
        }
        if (exName === 'All descendents') {
            this.dweditor.text = `%dw 2.0
output application/json
---
payload.users..*name`;
            this.pleditor.text = `{ "users" : {
  "user": {"name":"a"},
  "user": {"name":"b"},
  "user": {"name":"c", "name":"d"}
  }
}`;
        }
        if (exName === 'Mixed matching') {
            this.dweditor.text = `%dw 2.0
---
{
  a: payload.string match {
    case str if str == "Emiliano" -> str ++ " Lesende"
    case myVar if (myVar == "strings") -> ("strings =" ++ myVar)
    case word matches /(hello)\\s\\w+/ ->  word[1]  ++ " was matched"
  },
  b: payload.bool match {
    case num is Boolean -> "could be true or false:" ++ num
    case is Object -> "we got an Object"
    case "bob"  -> "is bob!"
    case word: "bang" ->  word ++ " was matched"
  },
  c: payload.name match {
    case str if str == "Emiliano" -> str ++ " Lesende"
    case myVar if (myVar == "strings") -> ("strings =" ++ myVar)
    case word matches /(hello)\\s\\w+/ ->  word[1]  ++ " was matched"
  },
  d: payload.object match {
    case num is Boolean -> "could be true or false:" ++ num
    case is Object -> "we got an Object"
    case "bob"  -> "is bob!"
    case word: "bang" ->  word ++ " was matched"
  },
  e: payload.strings match {
    case str if str == "Emiliano" -> str ++ " Lesende"
    case myVar if (myVar == "strings") -> ("strings =" ++ myVar)
    case word matches /(hello)\\s\\w+/ ->  word[1]  ++ " was matched"
  },
  f: payload.object.name match {
    case num is Boolean -> "could be true or false:" ++ num
    case is Object -> "we got an Object"
    case "bob"  -> "is bob!"
    case word: "bang" ->  word ++ " was matched"
  },
  g: payload.bangtest match {
    case num is Boolean -> "could be true or false:" ++ num
    case is Object -> "we got an Object"
    case "bob"  -> "is bob!"
    case word: "bang" ->  word ++ " was matched"
  },
  h: payload.number match {
    case num is Boolean -> "could be true or false:" ++ num
    case is Object -> "we got an Object"
    case "bob"  -> "is bob!"
    case word: "bang" ->  word ++ " was matched"
  }
}`;
            this.pleditor.text = `{ "string": "hello fred", "number": 90,
      "object" : {"name" : "bob"}, "bool" : true,
      "name" : "Emiliano", "strings" : "strings", "bangtest" : "bang"}`;
        }
        if (exName === 'Simple Lambda') {
            this.dweditor.text = `%dw 2.0
var myLambda = (a,b)-> { (a) : b}
---
myLambda("key","value")`;
            this.pleditor.text = ``;
        }
        if (exName === 'Do scope') {
            this.dweditor.text = `%dw 2.0
output application/json
fun test(p) = do {
    var a = "Foo" ++ p
    ---
    a
}
---
{ result: test(" Bar") }`;
            this.pleditor.text = ``;
        }
        if (exName === 'Xml input') {
            this.dweditor.text = `%dw 2.0
output application/xml
---
{
    prices: payload.prices mapObject (value, key) -> {
        (key): (value + 5)
    }
}`;
            this.pleditor.text = `<?xml version='1.0' encoding='UTF-8'?>
<prices>
    <basic>14.99</basic>
    <premium>53.01</premium>
    <vip>398.99</vip>
</prices>`;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dweditor', { static: false })
], AppComponent.prototype, "dweditor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pleditor', { static: false })
], AppComponent.prototype, "pleditor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reditor', { static: false })
], AppComponent.prototype, "reditor", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ng2_ace_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-ace-editor */ "./node_modules/ng2-ace-editor/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ],
        imports: [
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            ng2_ace_editor__WEBPACK_IMPORTED_MODULE_4__["AceEditorModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dweeve/src/exe/beautify.js":
/*!********************************************!*\
  !*** ./src/app/dweeve/src/exe/beautify.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// taken from https://github.com/gre/json-beautify/blob/master/index.js

var rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

var gap,
    indent,
    meta = { // table of character substitutions
      '\b': '\\b',
      '\t': '\\t',
      '\n': '\\n',
      '\f': '\\f',
      '\r': '\\r',
      '"': '\\"',
      '\\': '\\\\'
    },
    rep;

function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

    rx_escapable.lastIndex = 0;
    return rx_escapable.test(string)
        ? '"' + string.replace(rx_escapable, function (a) {
            var c = meta[a];
            return typeof c === 'string'
                ? c
                : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"'
        : '"' + string + '"';
}


function str(key, holder, limit) {

// Produce a string from holder[key].

    var i,          // The loop counter.
        k,          // The member key.
        v,          // The member value.
        length,
        mind = gap,
        partial,
        value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

    if (value && typeof value === 'object' &&
            typeof value.toJSON === 'function') {
        value = value.toJSON(key);
    }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

    if (typeof rep === 'function') {
        value = rep.call(holder, key, value);
    }

// What happens next depends on the value's type.

    switch (typeof value) {
    case 'string':
        return quote(value);

    case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

        return isFinite(value)
            ? String( Number(value) === value && value % 1 !== 0 ?  value.toFixed(2): value)
            : 'null';

    case 'boolean':
    case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

        return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

    case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

        if (!value) {
            return 'null';
        }

// Make an array to hold the partial results of stringifying this object value.

        gap += indent;
        partial = [];

// Is the value an array?

        if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

            length = value.length;
            for (i = 0; i < length; i += 1) {
                partial[i] = str(i, value, limit) || 'null';
            }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

            v = partial.length === 0
                ? '[]'
                : gap
                    ? (
                      gap.length + partial.join(', ').length + 4 > limit ?
                      '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
                      '[ ' + partial.join(', ') + ' ]'
                    )
                    : '[' + partial.join(',') + ']';
            gap = mind;
            return v;
        }

// If the replacer is an array, use it to select the members to be stringified.

        if (rep && typeof rep === 'object') {
            length = rep.length;
            for (i = 0; i < length; i += 1) {
                if (typeof rep[i] === 'string') {
                    k = rep[i];
                    v = str(k, value, limit);
                    if (v) {
                        partial.push(quote(k) + (
                            gap
                                ? ': '
                                : ':'
                        ) + v);
                    }
                }
            }
        } else {

// Otherwise, iterate through all of the keys in the object.

//if it is one of dweeve'sspecial extra-wrapped-list, deal with that:
            if (value['__extra-wrapped-list']) {
                for (k in value) {
                    if ( k.startsWith('__key')) {
                        let v2 = value[k];
                        let k2 = Object.keys(v2)[0];

                        if (Object.prototype.hasOwnProperty.call(v2, k2)) {
                            v = str(k2, v2, limit);
                            if (v) {
                                partial.push(quote(k2) + (
                                    gap
                                        ? ': '
                                        : ':'
                                ) + v);
                            }
                        }
                    }
                }
            } else {
                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value, limit);
                        if (v) {
                            partial.push(quote(k) + (
                                gap
                                    ? ': '
                                    : ':'
                            ) + v);
                        }
                    }
                }
            }
        }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

        v = partial.length === 0
            ? '{}'
            : gap
                ? (
                  gap.length + partial.join(', ').length + 4 > limit ?
                  '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
                  '{ ' + partial.join(', ') + ' }'
                )
                : '{' + partial.join(',') + '}';
        gap = mind;
        return v;
    }
}


function beautify (value, replacer, space, limit) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

  var i;
  gap = '';
  indent = '';

  if (!limit) limit = 0;

  if (typeof limit !== "number")
    throw new Error("beaufifier: limit must be a number");

// If the space parameter is a number, make an indent string containing that
// many spaces.

  if (typeof space === 'number') {
      for (i = 0; i < space; i += 1) {
          indent += ' ';
      }

// If the space parameter is a string, it will be used as the indent string.

  } else if (typeof space === 'string') {
      indent = space;
  }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

  rep = replacer;
  if (replacer && typeof replacer !== 'function' &&
          (typeof replacer !== 'object' ||
          typeof replacer.length !== 'number')) {
      throw new Error('beautifier: wrong replacer parameter');
  }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

  return str('', {'': value}, limit);
}

module.exports = beautify;

/***/ }),

/***/ "./src/app/dweeve/src/exe/dweeve.js":
/*!******************************************!*\
  !*** ./src/app/dweeve/src/exe/dweeve.js ***!
  \******************************************/
/*! exports provided: run */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
const nearley = __webpack_require__(/*! ./nearley */ "./src/app/dweeve/src/exe/nearley.js");
const dwgrammer = __webpack_require__(/*! ../parser/dweeve-grammar.js */ "./src/app/dweeve/src/parser/dweeve-grammar.js");
const transpiler = __webpack_require__(/*! ../transpiler/transpiler.js */ "./src/app/dweeve/src/transpiler/transpiler.js");
const beautify = __webpack_require__(/*! ./beautify.js */ "./src/app/dweeve/src/exe/beautify.js");
const vm = __webpack_require__(/*! vm-browserify */ "./node_modules/vm-browserify/index.js");
const xml2js = __webpack_require__(/*! ./xmldom2jsobj */ "./src/app/dweeve/src/exe/xmldom2jsobj.js")
const DOMParser = __webpack_require__(/*! xmldom */ "./node_modules/xmldom/dom-parser.js").DOMParser;
const selectorFunctions = __webpack_require__(/*! ../functions/selectors */ "./src/app/dweeve/src/functions/selectors.js")
const coreFunctions = __webpack_require__(/*! ../functions/core */ "./src/app/dweeve/src/functions/core.js") 
const doScopeFunctions = __webpack_require__(/*! ../functions/doScope */ "./src/app/dweeve/src/functions/doScope.js")  



function run(dwl, payload, vars, attributes) {
    try {
        if (typeof payload === 'string' && payload.trim().startsWith('<') && payload.trim().endsWith('>')) {
            var xml = payload.trim();
            var doc = new DOMParser().parseFromString(xml);
            payload = xml2js.toJsObj(doc);
        } else if (typeof payload === 'string' && payload.trim().startsWith('{') && payload.trim().endsWith('}')) {
            payload = payload.replace(/\r\n/g, '\n');
            payload = runDweeveScript(payload, {})
        }

        let t = typeof payload;
        let result = innerRun (dwl, payload , vars, attributes);
        
        return result;
    }
    catch (err) {
        return "Error parsing input payload:"+err.message
    }
}

function innerRun (dwl, payload, vars, attributes) {
    try {
        
        const args = {
            payload: payload,
            vars: vars,
            attributes:attributes,
            __doDotOp:  selectorFunctions.__doDotOp,
            __doDotStarOp: selectorFunctions.__doDotStarOp,
            __doDotDotStarOp: selectorFunctions.__doDotDotStarOp,
            __doDotDotOp: selectorFunctions.__doDotDotOp,
            __getIdentifierValue: selectorFunctions.__getIdentifierValue,
            __execDoScope: doScopeFunctions.__execDoScope
 
        };

        coreFunctions.addFunctions(args);

        let result = runDweeveScript(dwl, args);

        return beautify(result, null,2,100);
    }
    catch (err) {
        return err.message;
    }
}




function runDweeveScript(dwl, args) {
    const grammar = dwgrammer.getGrammar();
    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
    dwl = dwl.replace(/\r\n/g, '\n');
    parser.feed(dwl.trim());
    if (parser.results.length === 0)
        throw "Dweeve parser found no dweeve!";
    if (parser.results.length > 1)
        throw "Dweeve parser found more than one intepretation of the dweeve!";
    const code = transpiler.transpile(parser.results[0]);
    const script = new vm.Script(code.decs + '\n' + code.text + '\n var result=dweeve()');
    const context = new vm.createContext(args);
    script.runInContext(context);
    let result = context.result;
    return result;
}
// module.exports = { run: run};


/***/ }),

/***/ "./src/app/dweeve/src/exe/nearley.js":
/*!*******************************************!*\
  !*** ./src/app/dweeve/src/exe/nearley.js ***!
  \*******************************************/
/*! exports provided: Parser, Grammar, Rule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parser", function() { return Parser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grammar", function() { return Grammar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rule", function() { return Rule; });
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_2__);









    function Rule(name, symbols, postprocess) {
        this.id = ++Rule.highestId;
        this.name = name;
        this.symbols = symbols;        // a list of literal | regex class | nonterminal
        this.postprocess = postprocess;
        return this;
    }
    Rule.highestId = 0;

    Rule.prototype.toString = function(withCursorAt) {
        function stringifySymbolSequence (e) {
            return e.literal ? JSON.stringify(e.literal) :
                   e.type ? '%' + e.type : e.toString();
        }
        var symbolSequence = (typeof withCursorAt === "undefined")
                             ? this.symbols.map(stringifySymbolSequence).join(' ')
                             : (   this.symbols.slice(0, withCursorAt).map(stringifySymbolSequence).join(' ')
                                 + " ● "
                                 + this.symbols.slice(withCursorAt).map(stringifySymbolSequence).join(' ')     );
        return this.name + " → " + symbolSequence;
    }


    // a State is a rule at a position from a given starting point in the input stream (reference)
    function State(rule, dot, reference, wantedBy) {
        this.rule = rule;
        this.dot = dot;
        this.reference = reference;
        this.data = [];
        this.wantedBy = wantedBy;
        this.isComplete = this.dot === rule.symbols.length;
    }

    State.prototype.toString = function() {
        return "{" + this.rule.toString(this.dot) + "}, from: " + (this.reference || 0);
    };

    State.prototype.nextState = function(child) {
        var state = new State(this.rule, this.dot + 1, this.reference, this.wantedBy);
        state.left = this;
        state.right = child;
        if (state.isComplete) {
            state.data = state.build();
        }
        return state;
    };

    State.prototype.build = function() {
        var children = [];
        var node = this;
        do {
            children.push(node.right.data);
            node = node.left;
        } while (node.left);
        children.reverse();
        return children;
    };

    State.prototype.finish = function() {
        if (this.rule.postprocess) {
            this.data = this.rule.postprocess(this.data, this.reference, Parser.fail);
        }
    };


    function Column(grammar, index) {
        this.grammar = grammar;
        this.index = index;
        this.states = [];
        this.wants = {}; // states indexed by the non-terminal they expect
        this.scannable = []; // list of states that expect a token
        this.completed = {}; // states that are nullable
    }


    Column.prototype.process = function(nextColumn) {
        var states = this.states;
        var wants = this.wants;
        var completed = this.completed;

        for (var w = 0; w < states.length; w++) { // nb. we push() during iteration
            var state = states[w];

            if (state.isComplete) {
                state.finish();
                if (state.data !== Parser.fail) {
                    // complete
                    var wantedBy = state.wantedBy;
                    for (var i = wantedBy.length; i--; ) { // this line is hot
                        var left = wantedBy[i];
                        this.complete(left, state);
                    }

                    // special-case nullables
                    if (state.reference === this.index) {
                        // make sure future predictors of this rule get completed.
                        var exp = state.rule.name;
                        (this.completed[exp] = this.completed[exp] || []).push(state);
                    }
                }

            } else {
                // queue scannable states
                var exp = state.rule.symbols[state.dot];
                if (typeof exp !== 'string') {
                    this.scannable.push(state);
                    continue;
                }

                // predict
                if (wants[exp]) {
                    wants[exp].push(state);

                    if (completed.hasOwnProperty(exp)) {
                        var nulls = completed[exp];
                        for (var i = 0; i < nulls.length; i++) {
                            var right = nulls[i];
                            this.complete(state, right);
                        }
                    }
                } else {
                    wants[exp] = [state];
                    this.predict(exp);
                }
            }
        }
    }

    Column.prototype.predict = function(exp) {
        var rules = this.grammar.byName[exp] || [];

        for (var i = 0; i < rules.length; i++) {
            var r = rules[i];
            var wantedBy = this.wants[exp];
            var s = new State(r, 0, this.index, wantedBy);
            this.states.push(s);
        }
    }

    Column.prototype.complete = function(left, right) {
        var copy = left.nextState(right);
        this.states.push(copy);
    }


    function Grammar(rules, start) {
        this.rules = rules;
        this.start = start || this.rules[0].name;
        var byName = this.byName = {};
        this.rules.forEach(function(rule) {
            if (!byName.hasOwnProperty(rule.name)) {
                byName[rule.name] = [];
            }
            byName[rule.name].push(rule);
        });
    }

    // So we can allow passing (rules, start) directly to Parser for backwards compatibility
    Grammar.fromCompiled = function(rules, start) {
        var lexer = rules.Lexer;
        if (rules.ParserStart) {
          start = rules.ParserStart;
          rules = rules.ParserRules;
        }
        var rules = rules.map(function (r) { return (new Rule(r.name, r.symbols, r.postprocess)); });
        var g = new Grammar(rules, start);
        g.lexer = lexer; // nb. storing lexer on Grammar is iffy, but unavoidable
        return g;
    }


    function StreamLexer() {
      this.reset("");
    }

    StreamLexer.prototype.reset = function(data, state) {
        this.buffer = data;
        this.index = 0;
        this.line = state ? state.line : 1;
        this.lastLineBreak = state ? -state.col : 0;
    }

    StreamLexer.prototype.next = function() {
        if (this.index < this.buffer.length) {
            var ch = this.buffer[this.index++];
            if (ch === '\n') {
              this.line += 1;
              this.lastLineBreak = this.index;
            }
            return {value: ch};
        }
    }

    StreamLexer.prototype.save = function() {
      return {
        line: this.line,
        col: this.index - this.lastLineBreak,
      }
    }

    StreamLexer.prototype.formatError = function(token, message) {
        // nb. this gets called after consuming the offending token,
        // so the culprit is index-1
        var buffer = this.buffer;
        if (typeof buffer === 'string') {
            var nextLineBreak = buffer.indexOf('\n', this.index);
            if (nextLineBreak === -1) nextLineBreak = buffer.length;
            var line = buffer.substring(this.lastLineBreak, nextLineBreak)
            var col = this.index - this.lastLineBreak;
            message += " at line " + this.line + " col " + col + ":\n\n";
            message += "  " + line + "\n"
            message += "  " + Array(col).join(" ") + "^"
            return message;
        } else {
            return message + " at index " + (this.index - 1);
        }
    }


    function Parser(rules, start, options) {
        if (rules instanceof Grammar) {
            var grammar = rules;
            var options = start;
        } else {
            var grammar = Grammar.fromCompiled(rules, start);
        }
        this.grammar = grammar;

        // Read options
        this.options = {
            keepHistory: false,
            lexer: grammar.lexer || new StreamLexer,
        };
        for (var key in (options || {})) {
            this.options[key] = options[key];
        }

        // Setup lexer
        this.lexer = this.options.lexer;
        this.lexerState = undefined;

        // Setup a table
        var column = new Column(grammar, 0);
        var table = this.table = [column];

        // I could be expecting anything.
        column.wants[grammar.start] = [];
        column.predict(grammar.start);
        // TODO what if start rule is nullable?
        column.process();
        this.current = 0; // token index
    }

    // create a reserved token for indicating a parse fail
    Parser.fail = {};

    Parser.prototype.feed = function(chunk) {
        var lexer = this.lexer;
        lexer.reset(chunk, this.lexerState);

        var token;
        while (token = lexer.next()) {
            // We add new states to table[current+1]
            var column = this.table[this.current];

            // GC unused states
            if (!this.options.keepHistory) {
                delete this.table[this.current - 1];
            }

            var n = this.current + 1;
            var nextColumn = new Column(this.grammar, n);
            this.table.push(nextColumn);

            // Advance all tokens that expect the symbol
            var literal = token.text !== undefined ? token.text : token.value;
            var value = lexer.constructor === StreamLexer ? token.value : token;
            var scannable = column.scannable;
            for (var w = scannable.length; w--; ) {
                var state = scannable[w];
                var expect = state.rule.symbols[state.dot];
                // Try to consume the token
                // either regex or literal
                if (expect.test ? expect.test(value) :
                    expect.type ? expect.type === token.type
                                : expect.literal === literal) {
                    // Add it
                    var next = state.nextState({data: value, token: token, isToken: true, reference: n - 1});
                    nextColumn.states.push(next);
                }
            }

            // Next, for each of the rules, we either
            // (a) complete it, and try to see if the reference row expected that
            //     rule
            // (b) predict the next nonterminal it expects by adding that
            //     nonterminal's start state
            // To prevent duplication, we also keep track of rules we have already
            // added

            nextColumn.process();

            // If needed, throw an error:
            if (nextColumn.states.length === 0) {
                // No states at all! This is not good.
                var err = new Error(this.reportError(token));
                err.offset = this.current;
                err.token = token;
                throw err;
            }

            // maybe save lexer state
            if (this.options.keepHistory) {
              column.lexerState = lexer.save()
            }

            this.current++;
        }
        if (column) {
          this.lexerState = lexer.save()
        }

        // Incrementally keep track of results
        this.results = this.finish();

        // Allow chaining, for whatever it's worth
        return this;
    };

    Parser.prototype.reportError = function(token) {
        var lines = [];
        var tokenDisplay = (token.type ? token.type + " token: " : "") + JSON.stringify(token.value !== undefined ? token.value : token);
        lines.push(this.lexer.formatError(token, "Syntax error"));
        lines.push('Unexpected ' + tokenDisplay + '. Instead, I was expecting to see one of the following:\n');
        var lastColumnIndex = this.table.length - 2;
        var lastColumn = this.table[lastColumnIndex];
        var expectantStates = lastColumn.states
            .filter(function(state) {
                var nextSymbol = state.rule.symbols[state.dot];
                return nextSymbol && typeof nextSymbol !== "string";
            });

        // Display a "state stack" for each expectant state
        // - which shows you how this state came to be, step by step.
        // If there is more than one derivation, we only display the first one.
        var stateStacks = expectantStates
            .map(function(state) {
                return this.buildFirstStateStack(state, []);
            }, this);
        // Display each state that is expecting a terminal symbol next.
        stateStacks.forEach(function(stateStack) {
            var state = stateStack[0];
            var nextSymbol = state.rule.symbols[state.dot];
            var symbolDisplay = this.getSymbolDisplay(nextSymbol);
            lines.push('A ' + symbolDisplay + ' based on:');
            this.displayStateStack(stateStack, lines);
        }, this);

        lines.push("");
        return lines.join("\n");
    };

    Parser.prototype.displayStateStack = function(stateStack, lines) {
        var lastDisplay;
        var sameDisplayCount = 0;
        for (var j = 0; j < stateStack.length; j++) {
            var state = stateStack[j];
            var display = state.rule.toString(state.dot);
            if (display === lastDisplay) {
                sameDisplayCount++;
            } else {
                if (sameDisplayCount > 0) {
                    lines.push('    ⬆ ︎' + sameDisplayCount + ' more lines identical to this');
                }
                sameDisplayCount = 0;
                lines.push('    ' + display);
            }
            lastDisplay = display;
        }
    };

    Parser.prototype.getSymbolDisplay = function(symbol) {
        var type = typeof symbol;
        if (type === "string") {
            return symbol;
        } else if (type === "object" && symbol.literal) {
            return JSON.stringify(symbol.literal);
        } else if (type === "object" && symbol instanceof RegExp) {
            return 'character matching ' + symbol;
        } else if (type === "object" && symbol.type) {
            return symbol.type + ' token';
        } else {
            throw new Error('Unknown symbol type: ' + symbol);
        }
    };

    /*
    Builds a the first state stack. You can think of a state stack as the call stack
    of the recursive-descent parser which the Nearley parse algorithm simulates.
    A state stack is represented as an array of state objects. Within a
    state stack, the first item of the array will be the starting
    state, with each successive item in the array going further back into history.

    This function needs to be given a starting state and an empty array representing
    the visited states, and it returns an single state stack.

    */
    Parser.prototype.buildFirstStateStack = function(state, visited) {
        if (visited.indexOf(state) !== -1) {
            // Found cycle, return null
            // to eliminate this path from the results, because
            // we don't know how to display it meaningfully
            return null;
        }
        if (state.wantedBy.length === 0) {
            return [state];
        }
        var prevState = state.wantedBy[0];
        var childVisited = [state].concat(visited);
        var childResult = this.buildFirstStateStack(prevState, childVisited);
        if (childResult === null) {
            return null;
        }
        return [state].concat(childResult);
    };

    Parser.prototype.save = function() {
        var column = this.table[this.current];
        column.lexerState = this.lexerState;
        return column;
    };

    Parser.prototype.restore = function(column) {
        var index = column.index;
        this.current = index;
        this.table[index] = column;
        this.table.splice(index + 1);
        this.lexerState = column.lexerState;

        // Incrementally keep track of results
        this.results = this.finish();
    };

    // nb. deprecated: use save/restore instead!
    Parser.prototype.rewind = function(index) {
        if (!this.options.keepHistory) {
            throw new Error('set option `keepHistory` to enable rewinding')
        }
        // nb. recall column (table) indicies fall between token indicies.
        //        col 0   --   token 0   --   col 1
        this.restore(this.table[index]);
    };

    Parser.prototype.finish = function() {
        // Return the possible parsings
        var considerations = [];
        var start = this.grammar.start;
        var column = this.table[this.table.length - 1]
        column.states.forEach(function (t) {
            if (t.rule.name === start
                    && t.dot === t.rule.symbols.length
                    && t.reference === 0
                    && t.data !== Parser.fail) {
                considerations.push(t);
            }
        });
        return considerations.map(function(c) {return c.data; });
    };

    

/***/ }),

/***/ "./src/app/dweeve/src/exe/xmldom2jsobj.js":
/*!************************************************!*\
  !*** ./src/app/dweeve/src/exe/xmldom2jsobj.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function toJsObj(node){
    let nodeType = getNodeType(node);
    console.log(nodeType);
    if (nodeType==='Document') {
        let nl = { };
        for (let idx=0;idx<node.childNodes.length;idx++){
            let ce = node.childNodes.item(idx);
            if (getNodeType(ce)==='Element') {
                nl = toJsObj(ce);
            }
        }
        return nl;
    }
    if (nodeType==='NodeList') {
        let nl = { '__extra-wrapped-list' : true};
        for (let idx=0;idx<node.length;idx++){
            let ce = node.item(idx);
            if (getNodeType(ce)==='Element') {
                let js = toJsObj(ce);
                nl['__key'+idx]=js
            }
        }
        return nl;
    }
    if (isTextOnlyElement(node)) {
        return ( { [node.nodeName]: numberIfPossible(node.textContent) } );
    }
    if (!hasText(node)) {
        return ({ [node.nodeName]: toJsObj(node.childNodes) });
    } else {
        let inner = toJsObj(node.childNodes);
        let ewl = { '__extra-wrapped-list' : true};
        ewl["__key0"]= { "__text" : nodeOwnText(node) }; 
        for (let idx=1;idx<=Object.values(inner).length;idx++)
            if (Object.keys(inner)[idx-1].startsWith('__key'))
                ewl['__key'+idx]=Object.values(inner)[idx-1]; 
        
            return { [node.nodeName]: ewl };
    }
}

function numberIfPossible(text){
    if (!isNaN(parseFloat(text))) return parseFloat(text);
    if (text==='true') return true;
    if (text==='false') return false;

    return text
}


function getNodeType(node){
    if (node.constructor!=null && (typeof node.constructor.name) === 'string'
        && node.constructor.name.length>1 
        && node.constructor.name!=='Object'){ return node.constructor.name; }
    
    if (node.length && node.item) { return 'NodeList'}
}

function hasText(node) {
    if (node.childNodes===undefined || node.childNodes===null || node.childNodes.length==0) return false;
    for (let idx=0;idx<node.childNodes.length;idx++)
        if (node.childNodes.item(idx).constructor.name==="Text"
            && !(/^\s*$/.test(node.childNodes.item(idx).textContent))) return true;

    return false;
}

function nodeOwnText(node) {
    if (node.childNodes===undefined || node.childNodes===null || node.childNodes.length==0) return "";
    for (let idx=0;idx<node.childNodes.length;idx++)
        if (node.childNodes.item(idx).constructor.name==="Text"
            && !(/^\s*$/.test(node.childNodes.item(idx).textContent)))
             return node.childNodes.item(idx).textContent;

    return "";
}

function isTextOnlyElement(node){
    return (getNodeType(node)==='Element' && node.childNodes.length==1
     && node.firstChild.constructor.name==='Text');
}


module.exports = {toJsObj: toJsObj}

/***/ }),

/***/ "./src/app/dweeve/src/functions/core.js":
/*!**********************************************!*\
  !*** ./src/app/dweeve/src/functions/core.js ***!
  \**********************************************/
/*! exports provided: addFunctions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFunctions", function() { return addFunctions; });

function addFunctions(context) {
    context['isOdd'] = isOdd
    context['concat'] = concat
    context['abs'] = abs
    context['avg'] = avg
    context['ceil'] = ceil
    context['contains'] = contains
    context['daysBetween'] = daysBetween
    context['distinctBy'] = distinctBy
    context['endsWith'] = endsWith
    context['filter'] = filter
    context['filterObject'] = filterObject
    context['find'] = find
    context['flatMap'] = flatMap
    context['flatten'] = flatten
    context['floor'] = floor
    context['startsWith'] = startsWith
    context['map'] = map
    context['mapObject'] = mapObject
}

function isOdd(number) {
    return number % 2 ? true: false;
}

function concat(a,b) {
    return a+b;
}

function abs(num) {
    return Math.abs(num)
}

function avg(list) {
    if (!Array.isArray(list))
        return 0
    try{
        let agg=0;
        list.forEach(m => {
            agg+=m
        });
        return agg/list.length;
    }
    catch {}
    return 0;
}

function ceil(num) {
    return Math.ceil(num)
}

function contains(arr, item) {
    return arr.includes(item)
}

function daysBetween(d1, d2){
    try {
        let time = Date.parse(d2) - Date.parse(d1)
        return time / (1000 * 60 * 60 * 24)
    }
    catch (err) {
        throw "Could not process dates for daysBetween:"+ err.message
    }
}

function distinctBy(items, criteria) {
    let out = []
    let distinctList =[]
    let ewl = (items['__extra-wrapped-list'])
    for(let key in items) {
        if (key!=='__extra-wrapped-list') {
            let k = items
            let v = items[key]
            if (ewl) {
                k = Object.keys(v)[0]
                v = Object.values(v)[0]
            }

            k = isNaN(parseInt(k)) ? k : parseInt(k)
            let candidate = JSON.stringify(criteria(v,k))
            if (!distinctList.includes(candidate)) {
                distinctList.push(candidate)
                out.push(v);
            }
        }
    }

    return out;
}

function endsWith(s1,s2) {
    return String(s1).endsWith(s2)
}

function filter(arr, criteria) {
    let out = []
    let ewl = (arr['__extra-wrapped-list'])
    for(let key in arr) {
        if (key!=='__extra-wrapped-list') {
            let k = key
            let v = arr[key]
            if (ewl) {
                k = Object.keys(v)[0]
                v = Object.values(v)[0]
            }

            k = isNaN(parseInt(k)) ? k : parseInt(k)
            if (criteria(v,k))
                out.push(v);
        }
    }

    return out;
}

function filterObject(source, criteria){
    let out = {'__extra-wrapped-list': true};
    let ewl = (source['__extra-wrapped-list'])
    let idx=0;
    for(let key in source) {
        if (key!=='__extra-wrapped-list') {
            let k = key
            let v = source[key]
            if (ewl) {
                k = Object.keys(v)[0]
                v = Object.values(v)[0]
            }

            k = isNaN(parseInt(k)) ? k : parseInt(k)
            if (criteria(v,k))
            out['__key'+idx++]=({[k]:v});
        }
    }

    return out;
}

function find(arr, matcher){
    if (Array.isArray(arr)){
        let out = [];
        let ewl = (arr['__extra-wrapped-list'])
        let idx=0;
        for(let key in arr) {
            if (key!=='__extra-wrapped-list') {
                let k = key
                let v = arr[key]
                if (ewl) {
                    k = Object.keys(v)[0]
                    v = Object.values(v)[0]
                }

                k = isNaN(parseInt(k)) ? k : parseInt(k)
                if (String(v).match(matcher))
                out.push(k);
            }
        }

        return out;
    } else if (matcher.source!==undefined) {
        let str = String(arr)
        let out = []
        let gmatcher = new RegExp(matcher.source, 'g')
        let ms = String(str).match(gmatcher)
        let lastidx = 0
        if (ms==null) return out
        ms.forEach(m => {
            let idx = str.indexOf(m, lastidx)
            out.push([idx, idx + m.length ])
            lastidx = idx+1
        });
        return out;
    }  else  {
        let str = String(arr)
        let out = [];
        let gmatcher = new RegExp(matcher, 'g')
        let ms = String(str).match(gmatcher)
        let lastidx = 0
        ms.forEach(m => {
            let idx = str.indexOf(m, lastidx)
            out.push(idx)
            lastidx = idx+1
        });
        return out;
    }
}

function flatMap(source, mapFunc){
    return flatten(map(source, mapFunc))
}

function flatten(source){
    if (source==null || !Array.isArray(source)) return source
    let out = []
    source.forEach(m=> {
        if (Array.isArray(m))
            m.forEach(im=>
                    out.push(im))
        else
            out.push(m)
    })
    return out;
}

function floor(num) {
    return Math.floor(num);
}

function startsWith(s1,s2) {
    return String(s1).startsWith(s2)
}

function map(source, mapFunc){
    let out = []
    let ewl = (source['__extra-wrapped-list'])
    for(let key in source) {
        if (key!=='__extra-wrapped-list') {
            let k = key
            let v = source[key]
            if (ewl) {
                k = Object.keys(v)[0]
                v = Object.values(v)[0]
            }

            k = isNaN(parseInt(k)) ? k : parseInt(k)
            out.push(mapFunc(v, k));
        }
    }

    return out;
}

function mapObject(source, mapFunc){
    let out = {'__extra-wrapped-list': true};
    let ewl = (source['__extra-wrapped-list'])
    let idx=0;
    for(let key in source) {
        if (key!=='__extra-wrapped-list') {
            let k = key
            let v = source[key]
            if (ewl) {
                k = Object.keys(v)[0]
                v = Object.values(v)[0]
            }

            k = isNaN(parseInt(k)) ? k : parseInt(k)
            out['__key'+idx++]=(mapFunc(v, k));
        }
    }

    return out;
}



/***/ }),

/***/ "./src/app/dweeve/src/functions/doScope.js":
/*!*************************************************!*\
  !*** ./src/app/dweeve/src/functions/doScope.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const vm = __webpack_require__(/*! vm-browserify */ "./node_modules/vm-browserify/index.js");

function __execDoScope(code, args) {
    const script = new vm.Script(code + '\n var result=doScope()');
    
    const context = new vm.createContext(args);
    script.runInContext(context);

    return context.result
}

module.exports = { __execDoScope: __execDoScope};

/***/ }),

/***/ "./src/app/dweeve/src/functions/selectors.js":
/*!***************************************************!*\
  !*** ./src/app/dweeve/src/functions/selectors.js ***!
  \***************************************************/
/*! exports provided: __doDotOp, __doDotStarOp, __doDotDotStarOp, __doDotDotOp, __getIdentifierValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__doDotOp", function() { return __doDotOp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__doDotStarOp", function() { return __doDotStarOp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__doDotDotStarOp", function() { return __doDotDotStarOp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__doDotDotOp", function() { return __doDotDotOp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__getIdentifierValue", function() { return __getIdentifierValue; });
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1__);



function __getIdentifierValue(identifier){
    return identifier;
}

function __doDotOp(lhs, rhs) {
    try {
        
        if ( !Array.isArray(lhs)) {
            if (lhs['__extra-wrapped-list']){
                let r = Object.values(lhs).filter(v=>(typeof v === 'object')).find(kvp=>kvp[rhs])[rhs]
                return r;
            } else {
                let r = lhs[rhs]; 
                console.log(r);
                return r;
            }
        } else {
            let r = lhs.filter(m=>m['__extra-wrapped-list'] || m[rhs]!==undefined)
                .map(kvps=> {
                    if (kvps['__extra-wrapped-list']) {
                        return Object.values(kvps).filter(v=>(typeof v === 'object')).find(kvp=>kvp[rhs])[rhs];
                    } else {
                        return kvps[rhs];
                    }
                });
            return r;
        }
     } catch (ex) {
         return null; 
     } 
}

function __doDotStarOp(lhs, rhs) {
    lhs = convertJsonObjsToArray(lhs);
    try {
        let r = lhs.filter(m=>m[rhs]!==undefined)
            .map(kvps=> kvps[rhs]);
        return r;
     } catch (ex) {
         return null; 
     } 
}

function __doDotDotStarOp(lhs,rhs) {
//    lhs = convertJsonObjsToArray(lhs);
    try {
        let r = getDescendentValues(lhs, rhs)
        return r;
    } catch (ex) {
        return null; 
    } 
}

function getDescendentValues(obj, key){
    let vs = []
    if (typeof obj !== 'object') return []
    // two loops to go down before in, to match dataweave 2.0 ordering
    for (let k in obj) {
        let kvp = dewrapKeyedObj(obj, k)
        if (kvp.key === key) 
            vs.push(kvp.val)
    }
    for (let k in obj) {
        let kvp = dewrapKeyedObj(obj, k)
        vs = vs.concat(getDescendentValues(kvp.val, key))
    }
    return vs
}

function __doDotDotOp(lhs,rhs) {
//    lhs = convertJsonObjsToArray(lhs);
    try {
        let r = getFirstDescendentValue(lhs, rhs)
        return r;
    } catch (ex) {
        return null; 
    }     
}

function getFirstDescendentValue(obj, key){
    let vs = []
    if (typeof obj !== 'object') return []
    
    for (let k in obj) {
        let kvp = dewrapKeyedObj(obj, k)
        if (kvp.key === key) {
            vs.push(kvp.val)
            break;
        }
    }
    for (let k in obj) {
        let kvp = dewrapKeyedObj(obj, k)
        vs = vs.concat(getFirstDescendentValue(kvp.val, key))
    }
    return vs
}

function dewrapKeyedObj(obj, key) {
    if (!key.startsWith('__key'))
        return {key: key, val: obj[key]}
    else
        return {key : Object.keys(obj[key])[0], val:Object.values(obj[key])[0]}
}

function convertJsonObjsToArray(lhs) {
    if (!Array.isArray(lhs) && lhs['__extra-wrapped-list'])
        lhs = Object.values(lhs);
    else if (!Array.isArray(lhs) && !lhs['__extra-wrapped-list']) {
        arr = [];
        for (let k in lhs)
            arr.push({ [k]: lhs[k] });
        lhs = arr;
    }
    return lhs;
}



//module.exports = {
//    __doDotOp:  __doDotOp,
//    __doDotStarOp: __doDotStarOp,
//    __doDotDotStarOp: __doDotDotStarOp,
//    __doDotDotOp: __doDotDotOp,
//    __getIdentifierValue: __getIdentifierValue}

/***/ }),

/***/ "./src/app/dweeve/src/parser/dweeve-grammar.js":
/*!*****************************************************!*\
  !*** ./src/app/dweeve/src/parser/dweeve-grammar.js ***!
  \*****************************************************/
/*! exports provided: getGrammar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGrammar", function() { return getGrammar; });
/* harmony import */ var core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.flat */ "./node_modules/core-js/modules/es.array.flat.js");
/* harmony import */ var core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__);
// Generated automatically by nearley, version 2.19.0
// http://github.com/Hardmath123/nearley
const moo = __webpack_require__(/*! moo */ "./node_modules/moo/moo.js");






function id(x) { return x[0]; }

function getGrammar() { return grammar; }

const lexer = moo.compile({
            header: /^\%dw [0-9]+\.[0.9]+$/,
            keyword: ['case', 'if', 'default', 'matches', 'match', 'var', 'fun', 'else', 'do'],
            WS:      { match: /[ \t\n]+/, lineBreaks: true },
            headerend : '---',
            comment: /\/\/.*?$/,
            number:  /[\-]?(?:0|[1-9][0-9]*\.?[0-9]*)/,
            regex: /\/(?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+\//,
            bool: /(?:true|false)/,
            null: /null/,
            thinarrow: /->/,
            fatarrow: /=>/,
            dotdotstarbinop: /\.\.\*/,
            dotdotbinop: /\.\./,
            dotstarbinop: /\.\*/,
            dotbinop: /[.]/,
            mathbinop: /==|\+\+|<=|>=|\|\||&&|!=|[><\-+/*|&\^]/,
            assignment: /=/,
            dblstring:  { match : /["](?:\\["\\]|[^\n"\\])*["]/,},
            sglstring:  { match : /['](?:\\['\\]|[^\n'\\])*[']/,},
            keyvalsep: /:/,
            comma: /,/,
            mimetype:  /(?:application|text)\/\w+/,
            word:  { match : /\w[\w0-9_]*/},
            lparen:  '(',
            rparen:  ')',
            lbrace:  '{',
            rbrace:  '}',
            lsquare:  '[',
            rsquare:  ']',
        
    });

    lexer.next = (next => () => {
        let tok;
        while ((tok = next.call(lexer)) && tok.type === "WS") {}
        return tok;
    })(lexer.next);



    const thing = (name, data) => ( { type: name, 
        data: Array.isArray(data) ? data.filter(e => e !== null && (!Array.isArray(e) || e.length > 0)) : data } );
var grammar = {
    Lexer: lexer,
    ParserRules: [
        {"name": "dweeve$ebnf$1", "symbols": ["d_header"], "postprocess": id},
        {"name": "dweeve$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
        {"name": "dweeve", "symbols": ["dweeve$ebnf$1", "d_body"], "postprocess": (data) => ( { type:'dweeve', header: data[0], body: data[1] } )},
        {"name": "d_header$ebnf$1", "symbols": [(lexer.has("header") ? {type: "header"} : header)], "postprocess": id},
        {"name": "d_header$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
        {"name": "d_header$ebnf$2", "symbols": []},
        {"name": "d_header$ebnf$2", "symbols": ["d_header$ebnf$2", "h_declaration"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
        {"name": "d_header", "symbols": ["d_header$ebnf$1", "d_header$ebnf$2", {"literal":"---"}], "postprocess": (data) => ( { type:'dweeve', header: data[0], decs: data[1] } )},
        {"name": "d_body", "symbols": ["expression"], "postprocess": (data) => ( { type:'body', value: data[0] } )},
        {"name": "h_declaration", "symbols": ["h_input_dec"], "postprocess": (data) => (  { type:'head-dec', value: data[0] } )},
        {"name": "h_declaration", "symbols": ["h_output_dec"], "postprocess": (data) => (  { type:'head-dec', value: data[0] } )},
        {"name": "h_declaration", "symbols": ["h_var_dec"], "postprocess": (data) => (  { type:'head-dec', value: data[0] } )},
        {"name": "h_declaration", "symbols": ["h_fun_dec"], "postprocess": (data) => (  { type:'head-dec', value: data[0] } )},
        {"name": "h_input_dec", "symbols": [{"literal":"input"}, (lexer.has("mimetype") ? {type: "mimetype"} : mimetype)], "postprocess": (data) => ( { type: 'input-dec', mimetype: data[1]} )},
        {"name": "h_output_dec", "symbols": [{"literal":"output"}, (lexer.has("mimetype") ? {type: "mimetype"} : mimetype)], "postprocess": (data) => ( { type: 'output-dec', mimetype: data[1]} )},
        {"name": "h_var_dec", "symbols": [{"literal":"var"}, (lexer.has("word") ? {type: "word"} : word), (lexer.has("assignment") ? {type: "assignment"} : assignment), "h_dec_expression"], "postprocess": (data) => ( { type: 'var-dec', varName: data[1], varVal: data[3]} )},
        {"name": "h_fun_dec$ebnf$1", "symbols": [(lexer.has("word") ? {type: "word"} : word)], "postprocess": id},
        {"name": "h_fun_dec$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
        {"name": "h_fun_dec$ebnf$2", "symbols": []},
        {"name": "h_fun_dec$ebnf$2$subexpression$1", "symbols": [(lexer.has("comma") ? {type: "comma"} : comma), (lexer.has("word") ? {type: "word"} : word)]},
        {"name": "h_fun_dec$ebnf$2", "symbols": ["h_fun_dec$ebnf$2", "h_fun_dec$ebnf$2$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
        {"name": "h_fun_dec", "symbols": [{"literal":"fun"}, (lexer.has("word") ? {type: "word"} : word), (lexer.has("lparen") ? {type: "lparen"} : lparen), "h_fun_dec$ebnf$1", "h_fun_dec$ebnf$2", (lexer.has("rparen") ? {type: "rparen"} : rparen), (lexer.has("assignment") ? {type: "assignment"} : assignment), "h_dec_expression"], "postprocess":  (data) => ( { 
            type:"fun-def", func:data[1], args: [data[3], ...(data[4].flat().filter(a=>a.type!=='comma') ) ],
            body: data[7]
            } )},
        {"name": "h_dec_expression", "symbols": ["expression"], "postprocess": (data) => ( { type:'expression', value: data[0] } )},
        {"name": "h_dec_expression", "symbols": [{"literal":"do"}, (lexer.has("lbrace") ? {type: "lbrace"} : lbrace), "dweeve", (lexer.has("rbrace") ? {type: "rbrace"} : rbrace)], "postprocess": (data) => ( { type: 'do-dweeve', dweeve: data[2]} )},
        {"name": "object$ebnf$1", "symbols": []},
        {"name": "object$ebnf$1$subexpression$1", "symbols": [(lexer.has("comma") ? {type: "comma"} : comma), "keyvaluepair"]},
        {"name": "object$ebnf$1", "symbols": ["object$ebnf$1", "object$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
        {"name": "object", "symbols": [(lexer.has("lbrace") ? {type: "lbrace"} : lbrace), "keyvaluepair", "object$ebnf$1", (lexer.has("rbrace") ? {type: "rbrace"} : rbrace)], "postprocess":  (data) => ( { type:"member-list",
            members: [data[1], ...(data[2].flat().filter(a=>a.type!=='comma') ) ] } ) },
        {"name": "keyvaluepair$ebnf$1", "symbols": [(lexer.has("comma") ? {type: "comma"} : comma)], "postprocess": id},
        {"name": "keyvaluepair$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
        {"name": "keyvaluepair", "symbols": ["key", (lexer.has("keyvalsep") ? {type: "keyvalsep"} : keyvalsep), "expression", "keyvaluepair$ebnf$1"], "postprocess": (data) => ( { type: 'member', key: data[0], value: data[2]} )},
        {"name": "key", "symbols": [(lexer.has("word") ? {type: "word"} : word)], "postprocess": (data) => ( { type:'key', value: data[0] } )},
        {"name": "key", "symbols": [(lexer.has("sglstring") ? {type: "sglstring"} : sglstring)], "postprocess": (data) => ( { type:'key', value: data[0] } )},
        {"name": "key", "symbols": [(lexer.has("dblstring") ? {type: "dblstring"} : dblstring)], "postprocess": (data) => ( { type:'key', value: data[0] } )},
        {"name": "key", "symbols": [(lexer.has("lparen") ? {type: "lparen"} : lparen), "expression", (lexer.has("rparen") ? {type: "rparen"} : rparen)], "postprocess": (data) => ( { type:'dynamic-key', value: data[1] } )},
        {"name": "expression", "symbols": ["result"], "postprocess": (data) => ( { type:'expression', value: data[0] } )},
        {"name": "expression", "symbols": ["object"], "postprocess": (data) => ( { type:'expression', value: data[0] } )},
        {"name": "expression", "symbols": ["defaultexp"], "postprocess": (data) => ( { type:'expression', value: data[0] } )},
        {"name": "expression", "symbols": ["ifconditional"], "postprocess": (data) => ( { type:'expression', value: data[0] } )},
        {"name": "expression", "symbols": ["matcher"], "postprocess": (data) => ( { type:'expression', value: data[0] } )},
        {"name": "expression", "symbols": ["expression", (lexer.has("word") ? {type: "word"} : word), "expression"], "postprocess":  (data) => ( { type:'fun-call',  fun:data[1], 
            args: { args: [ data[0], data[2] ] } } ) },
        {"name": "expression$ebnf$1", "symbols": [(lexer.has("word") ? {type: "word"} : word)], "postprocess": id},
        {"name": "expression$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
        {"name": "expression$ebnf$2", "symbols": []},
        {"name": "expression$ebnf$2$subexpression$1", "symbols": [(lexer.has("comma") ? {type: "comma"} : comma), (lexer.has("word") ? {type: "word"} : word)]},
        {"name": "expression$ebnf$2", "symbols": ["expression$ebnf$2", "expression$ebnf$2$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
        {"name": "expression", "symbols": [(lexer.has("lparen") ? {type: "lparen"} : lparen), "expression$ebnf$1", "expression$ebnf$2", (lexer.has("rparen") ? {type: "rparen"} : rparen), (lexer.has("thinarrow") ? {type: "thinarrow"} : thinarrow), "expression"], "postprocess":  (data) => ( { type:'lambda', ident: data[0],func:data[1], 
            args: [data[1], ...(data[2].flat().filter(a=>a.type!=='comma') ) ],
            expression: data[5] } ) },
        {"name": "expression", "symbols": ["array"], "postprocess": (data) => ( { type:'expression', value: data[0] } )},
        {"name": "defaultexp", "symbols": ["expression", {"literal":"default"}, "expression"], "postprocess": (data) => ( { type:'default-expression', value: data[0], default: data[2] } )},
        {"name": "ifconditional", "symbols": [{"literal":"if"}, (lexer.has("lparen") ? {type: "lparen"} : lparen), "expression", (lexer.has("rparen") ? {type: "rparen"} : rparen), "expression", {"literal":"else"}, "expression"], "postprocess":  (data) => ( { type:'if-conditional', 
            condition: data[2], then: data[4],                        
            else: data[6] } ) },
        {"name": "matcher$ebnf$1$subexpression$1", "symbols": [{"literal":"case"}, "matchcond", (lexer.has("thinarrow") ? {type: "thinarrow"} : thinarrow), "expression"]},
        {"name": "matcher$ebnf$1", "symbols": ["matcher$ebnf$1$subexpression$1"]},
        {"name": "matcher$ebnf$1$subexpression$2", "symbols": [{"literal":"case"}, "matchcond", (lexer.has("thinarrow") ? {type: "thinarrow"} : thinarrow), "expression"]},
        {"name": "matcher$ebnf$1", "symbols": ["matcher$ebnf$1", "matcher$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
        {"name": "matcher$ebnf$2$subexpression$1", "symbols": [{"literal":"else"}, {"literal":"->"}, "expression"]},
        {"name": "matcher$ebnf$2", "symbols": ["matcher$ebnf$2$subexpression$1"], "postprocess": id},
        {"name": "matcher$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
        {"name": "matcher", "symbols": ["expression", {"literal":"match"}, (lexer.has("lbrace") ? {type: "lbrace"} : lbrace), "matcher$ebnf$1", "matcher$ebnf$2", (lexer.has("rbrace") ? {type: "rbrace"} : rbrace)], "postprocess":  (data) => ( { type:'pattern-match', 
            input: data[0], then: data[4],                        
            cases: data[3].map (c=>( { match: c[1], result:c[3]}) ),
            else: (data[4])==null ? null : data[4][2] } ) },
        {"name": "matchcond$ebnf$1$subexpression$1", "symbols": [(lexer.has("word") ? {type: "word"} : word), {"literal":":"}]},
        {"name": "matchcond$ebnf$1", "symbols": ["matchcond$ebnf$1$subexpression$1"], "postprocess": id},
        {"name": "matchcond$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
        {"name": "matchcond", "symbols": ["matchcond$ebnf$1", "literal"], "postprocess":  (data) => ( { type:'match-literal', var:(data[0]==null) ? null : data[0][0],
            litMatch:data[1] } ) },
        {"name": "matchcond", "symbols": [(lexer.has("word") ? {type: "word"} : word), {"literal":"if"}, "expression"], "postprocess": (data) => ( { type:'match-if-exp', var:data[0], expMatch:data[2] } )},
        {"name": "matchcond", "symbols": [(lexer.has("word") ? {type: "word"} : word), {"literal":"matches"}, (lexer.has("regex") ? {type: "regex"} : regex)], "postprocess": (data) => ( { type:'match-regex', var:data[0], regex:data[2] } )},
        {"name": "matchcond$ebnf$2$subexpression$1", "symbols": [(lexer.has("word") ? {type: "word"} : word)]},
        {"name": "matchcond$ebnf$2", "symbols": ["matchcond$ebnf$2$subexpression$1"], "postprocess": id},
        {"name": "matchcond$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
        {"name": "matchcond", "symbols": ["matchcond$ebnf$2", {"literal":"is"}, (lexer.has("word") ? {type: "word"} : word)], "postprocess":  (data) => ( { type:'match-type',var:(data[0]==null) ? null : data[0][0],
            typeName:data[2] } ) },
        {"name": "result", "symbols": ["mathresult"], "postprocess": (data) => ( { type:'math-result', value:data[0].value } )},
        {"name": "result", "symbols": ["result", "dotops", "operand"], "postprocess": (data) => ( { type:'dot-op', lhs:data[0], op:data[1], rhs:data[2] } )},
        {"name": "mathresult", "symbols": ["l2ops"], "postprocess": (data) =>( { type:'operand', value : data[0].value } )},
        {"name": "l1ops", "symbols": ["l1ops", "l8operator", "l2ops"], "postprocess": (data) =>( { type:'op', value: { lhs: data[0].value, op: data[1].value, rhs: data[2].value } } )},
        {"name": "l1ops", "symbols": ["l2ops"], "postprocess": (data) =>( { type:'operand', value : data[0].value } )},
        {"name": "l2ops", "symbols": ["l2ops", "l7operator", "l3ops"], "postprocess": (data) =>( { type:'op', value: { lhs: data[0].value, op: data[1].value, rhs: data[2].value } } )},
        {"name": "l2ops", "symbols": ["l3ops"], "postprocess": (data) =>( { type:'operand', value : data[0].value } )},
        {"name": "l3ops", "symbols": ["l3ops", "l6operator", "l4ops"], "postprocess": (data) =>( { type:'op', value: { lhs: data[0].value, op: data[1].value, rhs: data[2].value } } )},
        {"name": "l3ops", "symbols": ["l4ops"], "postprocess": (data) =>( { type:'operand', value : data[0].value } )},
        {"name": "l4ops", "symbols": ["l4ops", "l5operator", "l5ops"], "postprocess": (data) =>( { type:'op', value: { lhs: data[0].value, op: data[1].value, rhs: data[2].value } } )},
        {"name": "l4ops", "symbols": ["l5ops"], "postprocess": (data) =>( { type:'operand', value : data[0].value } )},
        {"name": "l5ops", "symbols": ["l5ops", "l4operator", "l6ops"], "postprocess": (data) =>( { type:'op', value: { lhs: data[0].value, op: data[1].value, rhs: data[2].value } } )},
        {"name": "l5ops", "symbols": ["l6ops"], "postprocess": (data) =>( { type:'operand', value : data[0].value } )},
        {"name": "l6ops", "symbols": ["l6ops", "l3operator", "l7ops"], "postprocess": (data) =>( { type:'op', value: { lhs: data[0].value, op: data[1].value, rhs: data[2].value } } )},
        {"name": "l6ops", "symbols": ["l7ops"], "postprocess": (data) =>( { type:'operand', value : data[0].value } )},
        {"name": "l7ops", "symbols": ["l7ops", "l2operator", "operand"], "postprocess": (data) =>( { type:'op', value: { lhs: data[0].value, op: data[1].value, rhs: data[2].value } } )},
        {"name": "l7ops", "symbols": ["operand"], "postprocess": (data) =>( { type:'operand', value : data[0].value } )},
        {"name": "l2operator", "symbols": [{"literal":"as"}], "postprocess": (data) =>( { type:'operator', value: data[0] } )},
        {"name": "l3operator", "symbols": [{"literal":"*"}], "postprocess": (data) =>( { type:'operator', value: data[0] } )},
        {"name": "l3operator", "symbols": [{"literal":"/"}], "postprocess": (data) =>( { type:'operator', value: data[0] } )},
        {"name": "l4operator", "symbols": [{"literal":"+"}], "postprocess": (data) =>( { type:'operator', value: data[0] } )},
        {"name": "l4operator", "symbols": [{"literal":"++"}], "postprocess": (data) =>( { type:'operator', value: data[0] } )},
        {"name": "l4operator", "symbols": [{"literal":"-"}], "postprocess": (data) =>( { type:'operator', value: data[0] } )},
        {"name": "l4operator", "symbols": [{"literal":">>"}], "postprocess": (data) =>( { type:'operator', value: data[0] } )},
        {"name": "l4operator", "symbols": [{"literal":"<<"}], "postprocess": (data) =>( { type:'operator', value: data[0] } )},
        {"name": "l5operator", "symbols": [{"literal":">"}], "postprocess": (data) =>( { type:'operator', value: data[0] } )},
        {"name": "l5operator", "symbols": [{"literal":"="}], "postprocess": (data) =>( { type:'operator', value: data[0] } )},
        {"name": "l5operator", "symbols": [{"literal":"<"}], "postprocess": (data) =>( { type:'operator', value: data[0] } )},
        {"name": "l5operator", "symbols": [{"literal":">="}], "postprocess": (data) =>( { type:'operator', value: data[0] } )},
        {"name": "l5operator", "symbols": [{"literal":"<="}], "postprocess": (data) =>( { type:'operator', value: data[0] } )},
        {"name": "l5operator", "symbols": [{"literal":"is"}], "postprocess": (data) =>( { type:'operator', value: data[0] } )},
        {"name": "l6operator", "symbols": [{"literal":"!="}], "postprocess": (data) =>( { type:'operator', value: data[0] } )},
        {"name": "l6operator", "symbols": [{"literal":"~="}], "postprocess": (data) =>( { type:'operator', value: data[0] } )},
        {"name": "l6operator", "symbols": [{"literal":"=="}], "postprocess": (data) =>( { type:'operator', value: data[0] } )},
        {"name": "l7operator", "symbols": [{"literal":"and"}], "postprocess": (data) =>( { type:'operator', value: data[0] } )},
        {"name": "l8operator", "symbols": [{"literal":"or"}], "postprocess": (data) =>( { type:'operator', value: data[0] } )},
        {"name": "operand", "symbols": ["identifier"], "postprocess": (data) => ( { type:'identifier-operand', value: data[0] } )},
        {"name": "operand", "symbols": ["literal"], "postprocess": (data) => ( { type:'literal-operand', value: data[0] } )},
        {"name": "operand", "symbols": [(lexer.has("lparen") ? {type: "lparen"} : lparen), "expression", (lexer.has("rparen") ? {type: "rparen"} : rparen)], "postprocess": (data) => ( { type:'bracket-operand', value: data[1] } )},
        {"name": "identifier", "symbols": ["identifier", (lexer.has("lparen") ? {type: "lparen"} : lparen), "arglist", (lexer.has("rparen") ? {type: "rparen"} : rparen)], "postprocess": (data) => ( { type:'fun-call',  fun:data[0], args:data[2] } )},
        {"name": "identifier", "symbols": ["identifier", (lexer.has("lsquare") ? {type: "lsquare"} : lsquare), "expression", (lexer.has("rsquare") ? {type: "rsquare"} : rsquare)], "postprocess": (data) => ( { type:'idx-identifier', ident: data[0], idx: data[2] } )},
        {"name": "identifier", "symbols": [(lexer.has("word") ? {type: "word"} : word)], "postprocess": (data) => ( { type:'identifier', ident: data[0] } )},
        {"name": "array", "symbols": [(lexer.has("lsquare") ? {type: "lsquare"} : lsquare), "arglist", (lexer.has("rsquare") ? {type: "rsquare"} : rsquare)], "postprocess": (data) => ( { type:'array',  members:data[1] } )},
        {"name": "arglist$ebnf$1", "symbols": ["expression"], "postprocess": id},
        {"name": "arglist$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
        {"name": "arglist$ebnf$2", "symbols": []},
        {"name": "arglist$ebnf$2$subexpression$1", "symbols": [(lexer.has("comma") ? {type: "comma"} : comma), "expression"]},
        {"name": "arglist$ebnf$2", "symbols": ["arglist$ebnf$2", "arglist$ebnf$2$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
        {"name": "arglist", "symbols": ["arglist$ebnf$1", "arglist$ebnf$2"], "postprocess":  (data) => ( { type:"arg-list",
            args: [data[0], ...(data[1].flat().filter(a=>a.type!=='comma') ) ] } ) },
        {"name": "literal", "symbols": [(lexer.has("sglstring") ? {type: "sglstring"} : sglstring)], "postprocess": (data) => ( { type:'literal', value: data[0] } )},
        {"name": "literal", "symbols": [(lexer.has("dblstring") ? {type: "dblstring"} : dblstring)], "postprocess": (data) => ( { type:'literal', value: data[0] } )},
        {"name": "literal", "symbols": [(lexer.has("bool") ? {type: "bool"} : bool)], "postprocess": (data) => ( { type:'literal', value: data[0] } )},
        {"name": "literal", "symbols": [(lexer.has("null") ? {type: "null"} : null)], "postprocess": (data) => ( { type:'literal', value: data[0] } )},
        {"name": "literal", "symbols": [(lexer.has("number") ? {type: "number"} : number)], "postprocess": (data) => ( { type:'literal', value: data[0] } )},
        {"name": "literal", "symbols": [(lexer.has("regex") ? {type: "regex"} : regex)], "postprocess": (data) => ( { type:'literal', value: data[0] } )},
        {"name": "literal", "symbols": [(lexer.has("number") ? {type: "number"} : number), (lexer.has("number") ? {type: "number"} : number)], "postprocess": (data) => ( { type:'number', value: data[0]+data[1] } )},
        {"name": "dotops", "symbols": [(lexer.has("dotbinop") ? {type: "dotbinop"} : dotbinop)], "postprocess": (data) => ( { type:'dot', value: data[0] } )},
        {"name": "dotops", "symbols": [(lexer.has("dotstarbinop") ? {type: "dotstarbinop"} : dotstarbinop)], "postprocess": (data) => ( { type:'dotstar', value: data[0] } )},
        {"name": "dotops", "symbols": [(lexer.has("dotdotstarbinop") ? {type: "dotdotstarbinop"} : dotdotstarbinop)], "postprocess": (data) => ( { type:'dotdotstar', value: data[0] } )},
        {"name": "dotops", "symbols": [(lexer.has("dotdotbinop") ? {type: "dotdotbinop"} : dotdotbinop)], "postprocess": (data) => ( { type:'dotdot', value: data[0] } )}
    ]
      , ParserStart: "dweeve"
    }
    

/***/ }),

/***/ "./src/app/dweeve/src/transpiler/transpiler-conditionals.js":
/*!******************************************************************!*\
  !*** ./src/app/dweeve/src/transpiler/transpiler-conditionals.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Dictionary = __webpack_require__(/*! dictionaryjs */ "./node_modules/dictionaryjs/Dictionary.js");

let codeGenFor = new Dictionary.Dictionary();
let codeGenAfter = new Dictionary.Dictionary();

codeGenFor['if-conditional'] = (context, code) => { 
    let op = context.node;
    code.addCode('( () =>  { if (');
    context.compiler({parentType: 'if-conidtion', node: context.node.condition, compiler:context.compiler}, code);
    code.addCode(') { return (');
    context.compiler({parentType: 'if-then', node: context.node.then, compiler:context.compiler}, code);
    code.addCode(');} else { return (');
    context.compiler({parentType: 'if-else', node: context.node.else, compiler:context.compiler}, code);
    code.addCode(');} } ) ()');
    
    return false;
 };

 codeGenFor['pattern-match'] = (context, code) => { 
    let cn = context.node;
    code.addCode('( () => { let $ = (');
    context.compiler({parentType: 'if-condition', node: cn.input, compiler:context.compiler}, code);
    code.addCode('); \n');
    if (Array.isArray(cn.cases)){
        cn.cases.forEach( c => {
            if (c.match.type === 'match-if-exp')
                emitcodeMatchIfExp(code, c, context);
            else if (c.match.type === 'match-regex')
                emitcodeMatchRegex(code, c, context);
            else if (c.match.type === 'match-literal')
                emitcodeMatchLiteral(code, c, context);
            else if (c.match.type === 'match-type')
                emitcodeMatchType(code, c, context);
        });
    };
    if (cn.else !== null) {
        code.addCode('return (');
        context.compiler({parentType: 'if-else', node: cn.else, compiler:context.compiler}, code);
        code.addCode(');');
    }
    code.addCode('} ) ()');
    
    return false;
 };

function emitcodeMatchType(code, c, context) {
    code.addCode('{');
    if (c.match.var !== null)
        code.addCode(' let ' + c.match.var.value + ' = $; ');
    code.addCode(' if ( typeof $ === "' + c.match.typeName.value.toLowerCase() + '") { return (');
    context.compiler({ parentType: 'if-exp-match-result', node: c.result, compiler: context.compiler }, code);
    code.addCode(') } }\n');
}

function emitcodeMatchLiteral(code, c, context) {
    code.addCode('{');
    if (c.match.var !== null)
        code.addCode(' let ' + c.match.var.value + ' = $; ');
    code.addCode(' if ( $ ===' + c.match.litMatch.value.value + ') { return (');
    context.compiler({ parentType: 'if-exp-match-result', node: c.result, compiler: context.compiler }, code);
    code.addCode(') } }\n');
}

function emitcodeMatchRegex(code, c, context) {
    code.addCode('{ try {');
    code.addCode(' let ' + c.match.var.value + ' = $.match(' + c.match.regex + '); ');
    code.addCode(' if (' + c.match.var.value + ' !==null) { return (');
    context.compiler({ parentType: 'if-exp-match-result', node: c.result, compiler: context.compiler }, code);
    code.addCode(') } } catch {} }\n');
}

function emitcodeMatchIfExp(code, c, context) {
    code.addCode('{');
    if (c.match.var !== null)
        code.addCode(' let ' + c.match.var.value + ' = $; ');
    code.addCode(' if (');
    context.compiler({ parentType: 'if-exp-match', node: c.match.expMatch, compiler: context.compiler }, code);
    code.addCode(') { return (');
    context.compiler({ parentType: 'if-exp-match-result', node: c.result, compiler: context.compiler }, code);
    code.addCode(') } }\n');
}

function addTranspilerFeatures(preDict, postDict) {
    for (k in codeGenFor)
        preDict[k]=codeGenFor[k];
    for (k in codeGenAfter)
        postDict[k]=codeGenAfter[k];    
}

module.exports = {addTranspilerFeatures : addTranspilerFeatures}


/***/ }),

/***/ "./src/app/dweeve/src/transpiler/transpiler-do-scope.js":
/*!**************************************************************!*\
  !*** ./src/app/dweeve/src/transpiler/transpiler-do-scope.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Dictionary = __webpack_require__(/*! dictionaryjs */ "./node_modules/dictionaryjs/Dictionary.js");

let codeGenFor = new Dictionary.Dictionary();
let codeGenAfter = new Dictionary.Dictionary();

codeGenFor['do-dweeve'] = (context, code) => { 
    let doDweeve = context.node;
    let doCode = getSubCode(code);
    let doId = '__do'+code.doScopes.length;
    code.doScopes.push( {[doId]: doCode})

    doCode.addCode('let doScope = () => (');
    context.compiler({node: doDweeve.dweeve, compiler:context.compiler}, doCode);
    doCode.addCode(')\n');

    let args=''
    if (context.argList!==undefined && context.argList!=null) {
        context.argList.forEach(arg => {
            if (arg!==null)
                args+=', ' + arg.value + ': '+arg.value;
        });
    }

    code.addCode("__execDoScope(`\n" + doCode.decs + '\n' +doCode.text + '`, {payload: payload' + args + '} )')

    return false;
 };

 
 
 function getSubCode(code)
{
    let subCode = {text: '', decs: '', lines: code.lines, doScopes: code.doScopes}
    subCode.addCode = (text) => {
        subCode.text += text;
        subCode.lines.push(text);
    };
    return subCode;
}

function addTranspilerFeatures(preDict, postDict) {
    for (k in codeGenFor)
        preDict[k]=codeGenFor[k];
    for (k in codeGenAfter)
        postDict[k]=codeGenAfter[k];    
}

module.exports = {addTranspilerFeatures : addTranspilerFeatures}


/***/ }),

/***/ "./src/app/dweeve/src/transpiler/transpiler-expressions.js":
/*!*****************************************************************!*\
  !*** ./src/app/dweeve/src/transpiler/transpiler-expressions.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Dictionary = __webpack_require__(/*! dictionaryjs */ "./node_modules/dictionaryjs/Dictionary.js");

let codeGenFor = new Dictionary.Dictionary();
let codeGenAfter = new Dictionary.Dictionary();

codeGenFor['member-list'] = (context, code) => { 
    if (context.node.members.length > 1) {
        code.addCode('{ "__extra-wrapped-list": true, \n') ; 
        let idx=0;
        context.node.members.forEach(m => {
            code.addCode('"__key' + idx++ + '": {') ; 
            context.compiler({parentType: 'obj-member', node: m, compiler:context.compiler}, code);
            code.addCode('},\n ') ; 
        });
        code.addCode('}\n')
    } else if (context.node.members.length === 1) {
        code.addCode('{')
        context.compiler({parentType: 'obj-member', node: context.node.members[0], compiler:context.compiler}, code);
        code.addCode('}')
    }
    return false; 
};

codeGenFor['array'] = (context, code) => { 
    code.addCode('[') ; 
    context.node.members.args.forEach(m => {
        context.compiler({parentType: 'array-member', node: m, compiler:context.compiler}, code);
        code.addCode(', ') ; 
    });
    code.addCode(']') ; 
    return false; 
};

codeGenFor['default-expression'] = (context, code) => { 
    code.addCode('( () => { let d = (');
    context.compiler({parentType: 'default-expression-default', node: context.node.default, compiler:context.compiler}, code);
    code.addCode('); try { let v = (') ; 
    context.compiler({parentType: 'default-expression-value', node: context.node.value, compiler:context.compiler}, code);
    code.addCode('); if (v!==null && v!==undefined) {return v;} else {return d;} } catch {return d} } )()\n ') 
    return false; 
};

codeGenFor['idx-identifier'] = (context, code) => { 
    let id = context.node;
   
    code.addCode(id.ident.ident.value + '[');
    context.compiler({parentType: 'indexed-identifier', node: id.idx, compiler:context.compiler}, code);
    code.addCode(']') ; 
   
    return false; 
};

codeGenFor['lambda'] = (context, code) => { 
    let lamda = context.node;
   
    code.addCode('(');
    if (lamda.args!==null && Array.isArray(lamda.args)) {
        let idx=1;
        lamda.args.forEach(arg => {
            if (arg!==null) {
                code.addCode(arg.value);
                if (idx++<lamda.args.length)
                    code.addCode(', ');
            }
        });
    }
    code.addCode(') => (');
    context.compiler({parentType: 'lambda', node: lamda.expression, compiler:context.compiler}, code);
    code.addCode(')\n');
    return false; 
};

codeGenFor['dynamic-key'] = (context, code) => { 
    code.addCode('[');
    context.compiler({parentType: 'dynamic-key', node: context.node.value, compiler:context.compiler}, code);
    code.addCode(']: ');
    return false;
};

// ( () => { try { return  key ;} catch { return 'bat'}; })()

//codeGenAfter['member-list'] = (context, code) => { code.addCode('}\n') };

codeGenAfter
['key'] = (context, code) => { code.addCode(': ') };

//codeGenAfter['member'] = (context, code) => { code.addCode(',\n') };

codeGenFor['word'] = (context, code) => { code.addCode(context.node.value ) };
codeGenFor['number'] = (context, code) => { code.addCode(context.node.value) };
codeGenFor['dblstring'] = (context, code) => { code.addCode(context.node.value) };
codeGenFor['sglstring'] = (context, code) => { code.addCode(context.node.value) };
codeGenFor['bool'] = (context, code) => { code.addCode(context.node.value) };
codeGenFor['null'] = (context, code) => { code.addCode(context.node.value) };
codeGenFor['regex'] = (context, code) => { code.addCode(context.node.value) };


function addTranspilerFeatures(preDict, postDict) {
    for (k in codeGenFor)
        preDict[k]=codeGenFor[k];
    for (k in codeGenAfter)
        postDict[k]=codeGenAfter[k];    
}

module.exports = {addTranspilerFeatures : addTranspilerFeatures}


/***/ }),

/***/ "./src/app/dweeve/src/transpiler/transpiler-funcs-and-selectors.js":
/*!*************************************************************************!*\
  !*** ./src/app/dweeve/src/transpiler/transpiler-funcs-and-selectors.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Dictionary = __webpack_require__(/*! dictionaryjs */ "./node_modules/dictionaryjs/Dictionary.js");

let codeGenFor = new Dictionary.Dictionary();
let codeGenAfter = new Dictionary.Dictionary();

codeGenFor['dot-op'] = (context, code) => { 
    let op = context.node;
    switch (op.op.type) {
        case "dot":
            code.addCode('( __doDotOp( (');
            break;
        case "dotstar":
            code.addCode('( __doDotStarOp( (');
            break;
        case "dotdotstar":
            code.addCode('( __doDotDotStarOp( (');
            break;
        case "dotdot":
            code.addCode('( __doDotDotOp( (');
            break;
    }
    context.compiler({parentType: 'dot-op-lhs', node: context.node.lhs, compiler:context.compiler}, code);
    code.addCode('), (\'');
    context.compiler({parentType: 'dot-top-rhs', node: context.node.rhs, compiler:context.compiler}, code);
    code.addCode('\')) )');
    
    return false;
 };

 codeGenFor['bin-op'] = (context, code) => { 
    let op = context.node;
    context.compiler({node: op.lhs, compiler:context.compiler}, code);
    if (op.op.value==='++') // double plus for string concat will be single + for javascript
        code.addCode('+');
    else
        code.addCode(op.op.value);
    context.compiler({node: op.rhs, compiler:context.compiler}, code);
    return false;
 };

 codeGenFor['fun-call'] = (context, code) => { 
    let op = context.node;
    context.compiler({node: op.fun, compiler:context.compiler}, code);
    code.addCode('(');
    if (op.args!==null && Array.isArray(op.args.args)) {
        let idx=0;
        op.args.args.forEach(arg => {
            context.compiler({node: arg, compiler:context.compiler}, code);
            if (++idx<op.args.args.length)
                code.addCode(', ');
        });
    }
    code.addCode(')');
    return false;
 };


function addTranspilerFeatures(preDict, postDict) {
    for (k in codeGenFor)
        preDict[k]=codeGenFor[k];
    for (k in codeGenAfter)
        postDict[k]=codeGenAfter[k];    
}

module.exports = {addTranspilerFeatures : addTranspilerFeatures}


/***/ }),

/***/ "./src/app/dweeve/src/transpiler/transpiler-header-decs.js":
/*!*****************************************************************!*\
  !*** ./src/app/dweeve/src/transpiler/transpiler-header-decs.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Dictionary = __webpack_require__(/*! dictionaryjs */ "./node_modules/dictionaryjs/Dictionary.js");

let codeGenFor = new Dictionary.Dictionary();
let codeGenAfter = new Dictionary.Dictionary();

codeGenFor['var-dec'] = (context, code) => { 
    let op = context.node;
    let decCode = getSubCode(code);
    decCode.addCode('var ' + op.varName + ' = ');
    context.compiler({node: op.varVal, compiler:context.compiler}, decCode);
    decCode.addCode(';\n');
    code.decs+=decCode.text;
    return false;
 };

 codeGenFor['fun-def'] = (context, code) => { 
    let op = context.node;
    let decCode = getSubCode(code);
   
    decCode.addCode('\n function ' + op.func.value +'(');
    if (op.args!==null && Array.isArray(op.args)) {
        let idx=1;
        op.args.forEach(arg => {
            if (arg!==null) {
                decCode.addCode(arg.value);
                if (idx++<op.args.length)
                    decCode.addCode(', ');
            }
        });
    }
    decCode.addCode(') { return ( \n');
    context.compiler({node: op.body, compiler:context.compiler, argList: op.args}, decCode);
    decCode.addCode(' ) }\n');
    code.decs+=decCode.text;
    
    return false;
 };
 
 function getSubCode(code)
{
    let subCode = {text: '', lines: code.lines, doScopes: code.doScopes}
    subCode.addCode = (text) => {
        subCode.text += text;
        subCode.lines.push(text);
    };
    return subCode;
}

function addTranspilerFeatures(preDict, postDict) {
    for (k in codeGenFor)
        preDict[k]=codeGenFor[k];
    for (k in codeGenAfter)
        postDict[k]=codeGenAfter[k];    
}

module.exports = {addTranspilerFeatures : addTranspilerFeatures}


/***/ }),

/***/ "./src/app/dweeve/src/transpiler/transpiler-math-op.js":
/*!*************************************************************!*\
  !*** ./src/app/dweeve/src/transpiler/transpiler-math-op.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Dictionary = __webpack_require__(/*! dictionaryjs */ "./node_modules/dictionaryjs/Dictionary.js");

let codeGenFor = new Dictionary.Dictionary();
let opfuncs = new Dictionary.Dictionary();

opfuncs['++'] = stringConcat

codeGenFor['math-result'] = (context, code) => { 
    let op = context.node;
    if (op.value.op)
        opCodeGen(op.value.lhs, op.value.op, op.value.rhs, context, code)
    else
        context.compiler({parentType: 'math-result', node: op.value, compiler:context.compiler}, code);
};

function opCodeGen(lhs, op, rhs, context,code) {
    code.addCode('(');
    if (opfuncs[op.value]!=undefined)
        opfuncs[op.value](lhs, op, rhs, context, code)
    else
         jsopCodeGen(lhs, op, rhs, context, code)
    code.addCode(')');
}
function jsopCodeGen(lhs, op, rhs, context,code) {
    emitOperand(lhs, context, code)
    code.addCode(op.value);
    emitOperand(rhs, context, code)
}

function stringConcat(lhs, op, rhs, context,code) {
    emitOperand(lhs, context, code)
    code.addCode('+');
    emitOperand(rhs, context, code)
}

function emitOperand(operand, context, code) {
    if (operand.op)
        opCodeGen(operand.lhs, operand.op, operand.rhs, context, code)
    else
        context.compiler({parentType: 'math-result', node: operand, compiler:context.compiler}, code);
}

function addTranspilerFeatures(preDict, postDict) {
    for (k in codeGenFor)
        preDict[k]=codeGenFor[k];
    
        
}

module.exports = {addTranspilerFeatures : addTranspilerFeatures}

/***/ }),

/***/ "./src/app/dweeve/src/transpiler/transpiler.js":
/*!*****************************************************!*\
  !*** ./src/app/dweeve/src/transpiler/transpiler.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Dictionary = __webpack_require__(/*! dictionaryjs */ "./node_modules/dictionaryjs/Dictionary.js");
const HeaderFeatures = __webpack_require__(/*! ./transpiler-header-decs */ "./src/app/dweeve/src/transpiler/transpiler-header-decs.js")
const ConditionalsFeatures = __webpack_require__(/*! ./transpiler-conditionals */ "./src/app/dweeve/src/transpiler/transpiler-conditionals.js")
const FuncAndSelectorFeatures = __webpack_require__(/*! ./transpiler-funcs-and-selectors */ "./src/app/dweeve/src/transpiler/transpiler-funcs-and-selectors.js")
const ExpressionFeatures = __webpack_require__(/*! ./transpiler-expressions */ "./src/app/dweeve/src/transpiler/transpiler-expressions.js")
const DoScopeFeatures = __webpack_require__(/*! ./transpiler-do-scope */ "./src/app/dweeve/src/transpiler/transpiler-do-scope.js")
const MathOpFeatures = __webpack_require__(/*! ./transpiler-math-op */ "./src/app/dweeve/src/transpiler/transpiler-math-op.js")

let codeGenFor = new Dictionary.Dictionary();
let codeGenAfter = new Dictionary.Dictionary();

HeaderFeatures.addTranspilerFeatures(codeGenFor, codeGenAfter);
ConditionalsFeatures.addTranspilerFeatures(codeGenFor, codeGenAfter);
FuncAndSelectorFeatures.addTranspilerFeatures(codeGenFor, codeGenAfter);
ExpressionFeatures.addTranspilerFeatures(codeGenFor, codeGenAfter);
DoScopeFeatures.addTranspilerFeatures(codeGenFor, codeGenAfter);
MathOpFeatures.addTranspilerFeatures(codeGenFor, codeGenAfter);

function transpile(dweeve){

    let code = { text: ("dweeve = () => ( "), decs: '', lines: [], doScopes: [] };
    code.addCode = (text) => {
        code.text += text;
        code.lines.push(text);
    };

    let context = {parentType : 'dweeve', node: dweeve, compiler: recursiveTranspile}
    recursiveTranspile(context, code)
    code.text+="\n);"

    return code;
}

function recursiveTranspile(context, code) {
    let n = context.node;
    if (n===undefined || n===null || n.type===undefined) return;
    
    let goDeep = true;

    let codeGen =codeGenFor[n.type]
    if (codeGen!==undefined) goDeep = codeGen(context, code)
    // if we have a token leaf node, do nothing, otherwise do some compiling!
    if (n.hasOwnProperty('text') && n.hasOwnProperty('value')) {
    } else if (goDeep) {
        for (var key in n) {
            if (key !=='type' && n.hasOwnProperty(key)) {
                let v = n[key];
                if (Array.isArray(v)) {
                    v.forEach(an => context.compiler({parentType: n.type, node: an, compiler:context.compiler}, code))
                } else {
                    context.compiler({parentType: n.type, node: v, compiler:context.compiler}, code)
                }
            }
        }
    }

    let post =codeGenAfter[n.type]
    if (post!==undefined) post(context, code)
};

module.exports = { transpile: transpile};

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ian\source\repos\dweeve-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map