function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/core-js/internals/a-function.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/internals/a-function.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsAFunctionJs(module, exports) {
    module.exports = function (it) {
      if (typeof it != 'function') {
        throw TypeError(String(it) + ' is not a function');
      }

      return it;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/add-to-unscopables.js":
  /*!**************************************************************!*\
    !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsAddToUnscopablesJs(module, exports, __webpack_require__) {
    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js/internals/well-known-symbol.js");

    var create = __webpack_require__(
    /*! ../internals/object-create */
    "./node_modules/core-js/internals/object-create.js");

    var hide = __webpack_require__(
    /*! ../internals/hide */
    "./node_modules/core-js/internals/hide.js");

    var UNSCOPABLES = wellKnownSymbol('unscopables');
    var ArrayPrototype = Array.prototype; // Array.prototype[@@unscopables]
    // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

    if (ArrayPrototype[UNSCOPABLES] == undefined) {
      hide(ArrayPrototype, UNSCOPABLES, create(null));
    } // add a key to Array.prototype[@@unscopables]


    module.exports = function (key) {
      ArrayPrototype[UNSCOPABLES][key] = true;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/an-object.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/internals/an-object.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsAnObjectJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js");

    module.exports = function (it) {
      if (!isObject(it)) {
        throw TypeError(String(it) + ' is not an object');
      }

      return it;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/array-includes.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/internals/array-includes.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsArrayIncludesJs(module, exports, __webpack_require__) {
    var toIndexedObject = __webpack_require__(
    /*! ../internals/to-indexed-object */
    "./node_modules/core-js/internals/to-indexed-object.js");

    var toLength = __webpack_require__(
    /*! ../internals/to-length */
    "./node_modules/core-js/internals/to-length.js");

    var toAbsoluteIndex = __webpack_require__(
    /*! ../internals/to-absolute-index */
    "./node_modules/core-js/internals/to-absolute-index.js"); // `Array.prototype.{ indexOf, includes }` methods implementation


    var createMethod = function createMethod(IS_INCLUDES) {
      return function ($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = toLength(O.length);
        var index = toAbsoluteIndex(fromIndex, length);
        var value; // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare

        if (IS_INCLUDES && el != el) while (length > index) {
          value = O[index++]; // eslint-disable-next-line no-self-compare

          if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
        } else for (; length > index; index++) {
          if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
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
    /***/
  },

  /***/
  "./node_modules/core-js/internals/array-iteration.js":
  /*!***********************************************************!*\
    !*** ./node_modules/core-js/internals/array-iteration.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsArrayIterationJs(module, exports, __webpack_require__) {
    var bind = __webpack_require__(
    /*! ../internals/bind-context */
    "./node_modules/core-js/internals/bind-context.js");

    var IndexedObject = __webpack_require__(
    /*! ../internals/indexed-object */
    "./node_modules/core-js/internals/indexed-object.js");

    var toObject = __webpack_require__(
    /*! ../internals/to-object */
    "./node_modules/core-js/internals/to-object.js");

    var toLength = __webpack_require__(
    /*! ../internals/to-length */
    "./node_modules/core-js/internals/to-length.js");

    var arraySpeciesCreate = __webpack_require__(
    /*! ../internals/array-species-create */
    "./node_modules/core-js/internals/array-species-create.js");

    var push = [].push; // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation

    var createMethod = function createMethod(TYPE) {
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

        for (; length > index; index++) {
          if (NO_HOLES || index in self) {
            value = self[index];
            result = boundFunction(value, index, O);

            if (TYPE) {
              if (IS_MAP) target[index] = result; // map
              else if (result) switch (TYPE) {
                  case 3:
                    return true;
                  // some

                  case 5:
                    return value;
                  // find

                  case 6:
                    return index;
                  // findIndex

                  case 2:
                    push.call(target, value);
                  // filter
                } else if (IS_EVERY) return false; // every
            }
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
    /***/
  },

  /***/
  "./node_modules/core-js/internals/array-method-has-species-support.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsArrayMethodHasSpeciesSupportJs(module, exports, __webpack_require__) {
    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js/internals/well-known-symbol.js");

    var SPECIES = wellKnownSymbol('species');

    module.exports = function (METHOD_NAME) {
      return !fails(function () {
        var array = [];
        var constructor = array.constructor = {};

        constructor[SPECIES] = function () {
          return {
            foo: 1
          };
        };

        return array[METHOD_NAME](Boolean).foo !== 1;
      });
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/array-species-create.js":
  /*!****************************************************************!*\
    !*** ./node_modules/core-js/internals/array-species-create.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsArraySpeciesCreateJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js");

    var isArray = __webpack_require__(
    /*! ../internals/is-array */
    "./node_modules/core-js/internals/is-array.js");

    var wellKnownSymbol = __webpack_require__(
    /*! ../internals/well-known-symbol */
    "./node_modules/core-js/internals/well-known-symbol.js");

    var SPECIES = wellKnownSymbol('species'); // `ArraySpeciesCreate` abstract operation
    // https://tc39.github.io/ecma262/#sec-arrayspeciescreate

    module.exports = function (originalArray, length) {
      var C;

      if (isArray(originalArray)) {
        C = originalArray.constructor; // cross-realm fallback

        if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
          C = C[SPECIES];
          if (C === null) C = undefined;
        }
      }

      return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/bind-context.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/internals/bind-context.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsBindContextJs(module, exports, __webpack_require__) {
    var aFunction = __webpack_require__(
    /*! ../internals/a-function */
    "./node_modules/core-js/internals/a-function.js"); // optional / simple context binding


    module.exports = function (fn, that, length) {
      aFunction(fn);
      if (that === undefined) return fn;

      switch (length) {
        case 0:
          return function () {
            return fn.call(that);
          };

        case 1:
          return function (a) {
            return fn.call(that, a);
          };

        case 2:
          return function (a, b) {
            return fn.call(that, a, b);
          };

        case 3:
          return function (a, b, c) {
            return fn.call(that, a, b, c);
          };
      }

      return function ()
      /* ...args */
      {
        return fn.apply(that, arguments);
      };
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/classof-raw.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/internals/classof-raw.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsClassofRawJs(module, exports) {
    var toString = {}.toString;

    module.exports = function (it) {
      return toString.call(it).slice(8, -1);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/copy-constructor-properties.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
    \***********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsCopyConstructorPropertiesJs(module, exports, __webpack_require__) {
    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var ownKeys = __webpack_require__(
    /*! ../internals/own-keys */
    "./node_modules/core-js/internals/own-keys.js");

    var getOwnPropertyDescriptorModule = __webpack_require__(
    /*! ../internals/object-get-own-property-descriptor */
    "./node_modules/core-js/internals/object-get-own-property-descriptor.js");

    var definePropertyModule = __webpack_require__(
    /*! ../internals/object-define-property */
    "./node_modules/core-js/internals/object-define-property.js");

    module.exports = function (target, source) {
      var keys = ownKeys(source);
      var defineProperty = definePropertyModule.f;
      var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/create-property-descriptor.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
    \**********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsCreatePropertyDescriptorJs(module, exports) {
    module.exports = function (bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
      };
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/descriptors.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/internals/descriptors.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsDescriptorsJs(module, exports, __webpack_require__) {
    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js"); // Thank's IE8 for his funny defineProperty


    module.exports = !fails(function () {
      return Object.defineProperty({}, 'a', {
        get: function get() {
          return 7;
        }
      }).a != 7;
    });
    /***/
  },

  /***/
  "./node_modules/core-js/internals/document-create-element.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/core-js/internals/document-create-element.js ***!
    \*******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsDocumentCreateElementJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js");

    var document = global.document; // typeof document.createElement is 'object' in old IE

    var EXISTS = isObject(document) && isObject(document.createElement);

    module.exports = function (it) {
      return EXISTS ? document.createElement(it) : {};
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/enum-bug-keys.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsEnumBugKeysJs(module, exports) {
    // IE8- don't enum bug keys
    module.exports = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
    /***/
  },

  /***/
  "./node_modules/core-js/internals/export.js":
  /*!**************************************************!*\
    !*** ./node_modules/core-js/internals/export.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsExportJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var getOwnPropertyDescriptor = __webpack_require__(
    /*! ../internals/object-get-own-property-descriptor */
    "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;

    var hide = __webpack_require__(
    /*! ../internals/hide */
    "./node_modules/core-js/internals/hide.js");

    var redefine = __webpack_require__(
    /*! ../internals/redefine */
    "./node_modules/core-js/internals/redefine.js");

    var setGlobal = __webpack_require__(
    /*! ../internals/set-global */
    "./node_modules/core-js/internals/set-global.js");

    var copyConstructorProperties = __webpack_require__(
    /*! ../internals/copy-constructor-properties */
    "./node_modules/core-js/internals/copy-constructor-properties.js");

    var isForced = __webpack_require__(
    /*! ../internals/is-forced */
    "./node_modules/core-js/internals/is-forced.js");
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

        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

        if (!FORCED && targetProperty !== undefined) {
          if (typeof sourceProperty === typeof targetProperty) continue;
          copyConstructorProperties(sourceProperty, targetProperty);
        } // add a flag to not completely full polyfills


        if (options.sham || targetProperty && targetProperty.sham) {
          hide(sourceProperty, 'sham', true);
        } // extend global


        redefine(target, key, sourceProperty, options);
      }
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/fails.js":
  /*!*************************************************!*\
    !*** ./node_modules/core-js/internals/fails.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsFailsJs(module, exports) {
    module.exports = function (exec) {
      try {
        return !!exec();
      } catch (error) {
        return true;
      }
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/function-to-string.js":
  /*!**************************************************************!*\
    !*** ./node_modules/core-js/internals/function-to-string.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsFunctionToStringJs(module, exports, __webpack_require__) {
    var shared = __webpack_require__(
    /*! ../internals/shared */
    "./node_modules/core-js/internals/shared.js");

    module.exports = shared('native-function-to-string', Function.toString);
    /***/
  },

  /***/
  "./node_modules/core-js/internals/get-built-in.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/internals/get-built-in.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsGetBuiltInJs(module, exports, __webpack_require__) {
    var path = __webpack_require__(
    /*! ../internals/path */
    "./node_modules/core-js/internals/path.js");

    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var aFunction = function aFunction(variable) {
      return typeof variable == 'function' ? variable : undefined;
    };

    module.exports = function (namespace, method) {
      return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace]) : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/global.js":
  /*!**************************************************!*\
    !*** ./node_modules/core-js/internals/global.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsGlobalJs(module, exports) {
    var O = 'object';

    var check = function check(it) {
      return it && it.Math == Math && it;
    }; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


    module.exports = // eslint-disable-next-line no-undef
    check(typeof globalThis == O && globalThis) || check(typeof window == O && window) || check(typeof self == O && self) || check(typeof global == O && global) || // eslint-disable-next-line no-new-func
    Function('return this')();
    /***/
  },

  /***/
  "./node_modules/core-js/internals/has.js":
  /*!***********************************************!*\
    !*** ./node_modules/core-js/internals/has.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsHasJs(module, exports) {
    var hasOwnProperty = {}.hasOwnProperty;

    module.exports = function (it, key) {
      return hasOwnProperty.call(it, key);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/hidden-keys.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/internals/hidden-keys.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsHiddenKeysJs(module, exports) {
    module.exports = {};
    /***/
  },

  /***/
  "./node_modules/core-js/internals/hide.js":
  /*!************************************************!*\
    !*** ./node_modules/core-js/internals/hide.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsHideJs(module, exports, __webpack_require__) {
    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js/internals/descriptors.js");

    var definePropertyModule = __webpack_require__(
    /*! ../internals/object-define-property */
    "./node_modules/core-js/internals/object-define-property.js");

    var createPropertyDescriptor = __webpack_require__(
    /*! ../internals/create-property-descriptor */
    "./node_modules/core-js/internals/create-property-descriptor.js");

    module.exports = DESCRIPTORS ? function (object, key, value) {
      return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
    } : function (object, key, value) {
      object[key] = value;
      return object;
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/html.js":
  /*!************************************************!*\
    !*** ./node_modules/core-js/internals/html.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsHtmlJs(module, exports, __webpack_require__) {
    var getBuiltIn = __webpack_require__(
    /*! ../internals/get-built-in */
    "./node_modules/core-js/internals/get-built-in.js");

    module.exports = getBuiltIn('document', 'documentElement');
    /***/
  },

  /***/
  "./node_modules/core-js/internals/ie8-dom-define.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIe8DomDefineJs(module, exports, __webpack_require__) {
    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js/internals/descriptors.js");

    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    var createElement = __webpack_require__(
    /*! ../internals/document-create-element */
    "./node_modules/core-js/internals/document-create-element.js"); // Thank's IE8 for his funny defineProperty


    module.exports = !DESCRIPTORS && !fails(function () {
      return Object.defineProperty(createElement('div'), 'a', {
        get: function get() {
          return 7;
        }
      }).a != 7;
    });
    /***/
  },

  /***/
  "./node_modules/core-js/internals/indexed-object.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/internals/indexed-object.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIndexedObjectJs(module, exports, __webpack_require__) {
    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    var classof = __webpack_require__(
    /*! ../internals/classof-raw */
    "./node_modules/core-js/internals/classof-raw.js");

    var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

    module.exports = fails(function () {
      // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
      // eslint-disable-next-line no-prototype-builtins
      return !Object('z').propertyIsEnumerable(0);
    }) ? function (it) {
      return classof(it) == 'String' ? split.call(it, '') : Object(it);
    } : Object;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/internal-state.js":
  /*!**********************************************************!*\
    !*** ./node_modules/core-js/internals/internal-state.js ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsInternalStateJs(module, exports, __webpack_require__) {
    var NATIVE_WEAK_MAP = __webpack_require__(
    /*! ../internals/native-weak-map */
    "./node_modules/core-js/internals/native-weak-map.js");

    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js");

    var hide = __webpack_require__(
    /*! ../internals/hide */
    "./node_modules/core-js/internals/hide.js");

    var objectHas = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var sharedKey = __webpack_require__(
    /*! ../internals/shared-key */
    "./node_modules/core-js/internals/shared-key.js");

    var hiddenKeys = __webpack_require__(
    /*! ../internals/hidden-keys */
    "./node_modules/core-js/internals/hidden-keys.js");

    var WeakMap = global.WeakMap;
    var set, get, has;

    var enforce = function enforce(it) {
      return has(it) ? get(it) : set(it, {});
    };

    var getterFor = function getterFor(TYPE) {
      return function (it) {
        var state;

        if (!isObject(it) || (state = get(it)).type !== TYPE) {
          throw TypeError('Incompatible receiver, ' + TYPE + ' required');
        }

        return state;
      };
    };

    if (NATIVE_WEAK_MAP) {
      var store = new WeakMap();
      var wmget = store.get;
      var wmhas = store.has;
      var wmset = store.set;

      set = function set(it, metadata) {
        wmset.call(store, it, metadata);
        return metadata;
      };

      get = function get(it) {
        return wmget.call(store, it) || {};
      };

      has = function has(it) {
        return wmhas.call(store, it);
      };
    } else {
      var STATE = sharedKey('state');
      hiddenKeys[STATE] = true;

      set = function set(it, metadata) {
        hide(it, STATE, metadata);
        return metadata;
      };

      get = function get(it) {
        return objectHas(it, STATE) ? it[STATE] : {};
      };

      has = function has(it) {
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
    /***/
  },

  /***/
  "./node_modules/core-js/internals/is-array.js":
  /*!****************************************************!*\
    !*** ./node_modules/core-js/internals/is-array.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIsArrayJs(module, exports, __webpack_require__) {
    var classof = __webpack_require__(
    /*! ../internals/classof-raw */
    "./node_modules/core-js/internals/classof-raw.js"); // `IsArray` abstract operation
    // https://tc39.github.io/ecma262/#sec-isarray


    module.exports = Array.isArray || function isArray(arg) {
      return classof(arg) == 'Array';
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/is-forced.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/internals/is-forced.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIsForcedJs(module, exports, __webpack_require__) {
    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    var replacement = /#|\.prototype\./;

    var isForced = function isForced(feature, detection) {
      var value = data[normalize(feature)];
      return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
    };

    var normalize = isForced.normalize = function (string) {
      return String(string).replace(replacement, '.').toLowerCase();
    };

    var data = isForced.data = {};
    var NATIVE = isForced.NATIVE = 'N';
    var POLYFILL = isForced.POLYFILL = 'P';
    module.exports = isForced;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/is-object.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/internals/is-object.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIsObjectJs(module, exports) {
    module.exports = function (it) {
      return typeof it === 'object' ? it !== null : typeof it === 'function';
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/is-pure.js":
  /*!***************************************************!*\
    !*** ./node_modules/core-js/internals/is-pure.js ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsIsPureJs(module, exports) {
    module.exports = false;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/native-symbol.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/internals/native-symbol.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsNativeSymbolJs(module, exports, __webpack_require__) {
    var fails = __webpack_require__(
    /*! ../internals/fails */
    "./node_modules/core-js/internals/fails.js");

    module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
      // Chrome 38 Symbol has incorrect toString conversion
      // eslint-disable-next-line no-undef
      return !String(Symbol());
    });
    /***/
  },

  /***/
  "./node_modules/core-js/internals/native-weak-map.js":
  /*!***********************************************************!*\
    !*** ./node_modules/core-js/internals/native-weak-map.js ***!
    \***********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsNativeWeakMapJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var nativeFunctionToString = __webpack_require__(
    /*! ../internals/function-to-string */
    "./node_modules/core-js/internals/function-to-string.js");

    var WeakMap = global.WeakMap;
    module.exports = typeof WeakMap === 'function' && /native code/.test(nativeFunctionToString.call(WeakMap));
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-create.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/internals/object-create.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectCreateJs(module, exports, __webpack_require__) {
    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var defineProperties = __webpack_require__(
    /*! ../internals/object-define-properties */
    "./node_modules/core-js/internals/object-define-properties.js");

    var enumBugKeys = __webpack_require__(
    /*! ../internals/enum-bug-keys */
    "./node_modules/core-js/internals/enum-bug-keys.js");

    var hiddenKeys = __webpack_require__(
    /*! ../internals/hidden-keys */
    "./node_modules/core-js/internals/hidden-keys.js");

    var html = __webpack_require__(
    /*! ../internals/html */
    "./node_modules/core-js/internals/html.js");

    var documentCreateElement = __webpack_require__(
    /*! ../internals/document-create-element */
    "./node_modules/core-js/internals/document-create-element.js");

    var sharedKey = __webpack_require__(
    /*! ../internals/shared-key */
    "./node_modules/core-js/internals/shared-key.js");

    var IE_PROTO = sharedKey('IE_PROTO');
    var PROTOTYPE = 'prototype';

    var Empty = function Empty() {
      /* empty */
    }; // Create object with fake `null` prototype: use iframe Object with cleared prototype


    var _createDict = function createDict() {
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
      _createDict = iframeDocument.F;

      while (length--) {
        delete _createDict[PROTOTYPE][enumBugKeys[length]];
      }

      return _createDict();
    }; // `Object.create` method
    // https://tc39.github.io/ecma262/#sec-object.create


    module.exports = Object.create || function create(O, Properties) {
      var result;

      if (O !== null) {
        Empty[PROTOTYPE] = anObject(O);
        result = new Empty();
        Empty[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

        result[IE_PROTO] = O;
      } else result = _createDict();

      return Properties === undefined ? result : defineProperties(result, Properties);
    };

    hiddenKeys[IE_PROTO] = true;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-define-properties.js":
  /*!********************************************************************!*\
    !*** ./node_modules/core-js/internals/object-define-properties.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectDefinePropertiesJs(module, exports, __webpack_require__) {
    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js/internals/descriptors.js");

    var definePropertyModule = __webpack_require__(
    /*! ../internals/object-define-property */
    "./node_modules/core-js/internals/object-define-property.js");

    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var objectKeys = __webpack_require__(
    /*! ../internals/object-keys */
    "./node_modules/core-js/internals/object-keys.js"); // `Object.defineProperties` method
    // https://tc39.github.io/ecma262/#sec-object.defineproperties


    module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
      anObject(O);
      var keys = objectKeys(Properties);
      var length = keys.length;
      var index = 0;
      var key;

      while (length > index) {
        definePropertyModule.f(O, key = keys[index++], Properties[key]);
      }

      return O;
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-define-property.js":
  /*!******************************************************************!*\
    !*** ./node_modules/core-js/internals/object-define-property.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectDefinePropertyJs(module, exports, __webpack_require__) {
    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js/internals/descriptors.js");

    var IE8_DOM_DEFINE = __webpack_require__(
    /*! ../internals/ie8-dom-define */
    "./node_modules/core-js/internals/ie8-dom-define.js");

    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js");

    var toPrimitive = __webpack_require__(
    /*! ../internals/to-primitive */
    "./node_modules/core-js/internals/to-primitive.js");

    var nativeDefineProperty = Object.defineProperty; // `Object.defineProperty` method
    // https://tc39.github.io/ecma262/#sec-object.defineproperty

    exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPrimitive(P, true);
      anObject(Attributes);
      if (IE8_DOM_DEFINE) try {
        return nativeDefineProperty(O, P, Attributes);
      } catch (error) {
        /* empty */
      }
      if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
      if ('value' in Attributes) O[P] = Attributes.value;
      return O;
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
    \******************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectGetOwnPropertyDescriptorJs(module, exports, __webpack_require__) {
    var DESCRIPTORS = __webpack_require__(
    /*! ../internals/descriptors */
    "./node_modules/core-js/internals/descriptors.js");

    var propertyIsEnumerableModule = __webpack_require__(
    /*! ../internals/object-property-is-enumerable */
    "./node_modules/core-js/internals/object-property-is-enumerable.js");

    var createPropertyDescriptor = __webpack_require__(
    /*! ../internals/create-property-descriptor */
    "./node_modules/core-js/internals/create-property-descriptor.js");

    var toIndexedObject = __webpack_require__(
    /*! ../internals/to-indexed-object */
    "./node_modules/core-js/internals/to-indexed-object.js");

    var toPrimitive = __webpack_require__(
    /*! ../internals/to-primitive */
    "./node_modules/core-js/internals/to-primitive.js");

    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var IE8_DOM_DEFINE = __webpack_require__(
    /*! ../internals/ie8-dom-define */
    "./node_modules/core-js/internals/ie8-dom-define.js");

    var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
    // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor

    exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
      O = toIndexedObject(O);
      P = toPrimitive(P, true);
      if (IE8_DOM_DEFINE) try {
        return nativeGetOwnPropertyDescriptor(O, P);
      } catch (error) {
        /* empty */
      }
      if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
    };
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-get-own-property-names.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
    \*************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectGetOwnPropertyNamesJs(module, exports, __webpack_require__) {
    var internalObjectKeys = __webpack_require__(
    /*! ../internals/object-keys-internal */
    "./node_modules/core-js/internals/object-keys-internal.js");

    var enumBugKeys = __webpack_require__(
    /*! ../internals/enum-bug-keys */
    "./node_modules/core-js/internals/enum-bug-keys.js");

    var hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
    // https://tc39.github.io/ecma262/#sec-object.getownpropertynames

    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/object-get-own-property-symbols.js":
  /*!***************************************************************************!*\
    !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
    \***************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectGetOwnPropertySymbolsJs(module, exports) {
    exports.f = Object.getOwnPropertySymbols;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/object-keys-internal.js":
  /*!****************************************************************!*\
    !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectKeysInternalJs(module, exports, __webpack_require__) {
    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var toIndexedObject = __webpack_require__(
    /*! ../internals/to-indexed-object */
    "./node_modules/core-js/internals/to-indexed-object.js");

    var indexOf = __webpack_require__(
    /*! ../internals/array-includes */
    "./node_modules/core-js/internals/array-includes.js").indexOf;

    var hiddenKeys = __webpack_require__(
    /*! ../internals/hidden-keys */
    "./node_modules/core-js/internals/hidden-keys.js");

    module.exports = function (object, names) {
      var O = toIndexedObject(object);
      var i = 0;
      var result = [];
      var key;

      for (key in O) {
        !has(hiddenKeys, key) && has(O, key) && result.push(key);
      } // Don't enum bug & hidden keys


      while (names.length > i) {
        if (has(O, key = names[i++])) {
          ~indexOf(result, key) || result.push(key);
        }
      }

      return result;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/object-keys.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/internals/object-keys.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectKeysJs(module, exports, __webpack_require__) {
    var internalObjectKeys = __webpack_require__(
    /*! ../internals/object-keys-internal */
    "./node_modules/core-js/internals/object-keys-internal.js");

    var enumBugKeys = __webpack_require__(
    /*! ../internals/enum-bug-keys */
    "./node_modules/core-js/internals/enum-bug-keys.js"); // `Object.keys` method
    // https://tc39.github.io/ecma262/#sec-object.keys


    module.exports = Object.keys || function keys(O) {
      return internalObjectKeys(O, enumBugKeys);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/object-property-is-enumerable.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
    \*************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsObjectPropertyIsEnumerableJs(module, exports, __webpack_require__) {
    "use strict";

    var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

    var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
      1: 2
    }, 1); // `Object.prototype.propertyIsEnumerable` method implementation
    // https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable

    exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    } : nativePropertyIsEnumerable;
    /***/
  },

  /***/
  "./node_modules/core-js/internals/own-keys.js":
  /*!****************************************************!*\
    !*** ./node_modules/core-js/internals/own-keys.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsOwnKeysJs(module, exports, __webpack_require__) {
    var getBuiltIn = __webpack_require__(
    /*! ../internals/get-built-in */
    "./node_modules/core-js/internals/get-built-in.js");

    var getOwnPropertyNamesModule = __webpack_require__(
    /*! ../internals/object-get-own-property-names */
    "./node_modules/core-js/internals/object-get-own-property-names.js");

    var getOwnPropertySymbolsModule = __webpack_require__(
    /*! ../internals/object-get-own-property-symbols */
    "./node_modules/core-js/internals/object-get-own-property-symbols.js");

    var anObject = __webpack_require__(
    /*! ../internals/an-object */
    "./node_modules/core-js/internals/an-object.js"); // all object keys, includes non-enumerable and symbols


    module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
      var keys = getOwnPropertyNamesModule.f(anObject(it));
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/path.js":
  /*!************************************************!*\
    !*** ./node_modules/core-js/internals/path.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsPathJs(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");
    /***/
  },

  /***/
  "./node_modules/core-js/internals/redefine.js":
  /*!****************************************************!*\
    !*** ./node_modules/core-js/internals/redefine.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsRedefineJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var shared = __webpack_require__(
    /*! ../internals/shared */
    "./node_modules/core-js/internals/shared.js");

    var hide = __webpack_require__(
    /*! ../internals/hide */
    "./node_modules/core-js/internals/hide.js");

    var has = __webpack_require__(
    /*! ../internals/has */
    "./node_modules/core-js/internals/has.js");

    var setGlobal = __webpack_require__(
    /*! ../internals/set-global */
    "./node_modules/core-js/internals/set-global.js");

    var nativeFunctionToString = __webpack_require__(
    /*! ../internals/function-to-string */
    "./node_modules/core-js/internals/function-to-string.js");

    var InternalStateModule = __webpack_require__(
    /*! ../internals/internal-state */
    "./node_modules/core-js/internals/internal-state.js");

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
        if (simple) O[key] = value;else setGlobal(key, value);
        return;
      } else if (!unsafe) {
        delete O[key];
      } else if (!noTargetGet && O[key]) {
        simple = true;
      }

      if (simple) O[key] = value;else hide(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    })(Function.prototype, 'toString', function toString() {
      return typeof this == 'function' && getInternalState(this).source || nativeFunctionToString.call(this);
    });
    /***/
  },

  /***/
  "./node_modules/core-js/internals/require-object-coercible.js":
  /*!********************************************************************!*\
    !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
    \********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsRequireObjectCoercibleJs(module, exports) {
    // `RequireObjectCoercible` abstract operation
    // https://tc39.github.io/ecma262/#sec-requireobjectcoercible
    module.exports = function (it) {
      if (it == undefined) throw TypeError("Can't call method on " + it);
      return it;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/set-global.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/internals/set-global.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsSetGlobalJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var hide = __webpack_require__(
    /*! ../internals/hide */
    "./node_modules/core-js/internals/hide.js");

    module.exports = function (key, value) {
      try {
        hide(global, key, value);
      } catch (error) {
        global[key] = value;
      }

      return value;
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/shared-key.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/internals/shared-key.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsSharedKeyJs(module, exports, __webpack_require__) {
    var shared = __webpack_require__(
    /*! ../internals/shared */
    "./node_modules/core-js/internals/shared.js");

    var uid = __webpack_require__(
    /*! ../internals/uid */
    "./node_modules/core-js/internals/uid.js");

    var keys = shared('keys');

    module.exports = function (key) {
      return keys[key] || (keys[key] = uid(key));
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/shared.js":
  /*!**************************************************!*\
    !*** ./node_modules/core-js/internals/shared.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsSharedJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var setGlobal = __webpack_require__(
    /*! ../internals/set-global */
    "./node_modules/core-js/internals/set-global.js");

    var IS_PURE = __webpack_require__(
    /*! ../internals/is-pure */
    "./node_modules/core-js/internals/is-pure.js");

    var SHARED = '__core-js_shared__';
    var store = global[SHARED] || setGlobal(SHARED, {});
    (module.exports = function (key, value) {
      return store[key] || (store[key] = value !== undefined ? value : {});
    })('versions', []).push({
      version: '3.2.1',
      mode: IS_PURE ? 'pure' : 'global',
      copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
    });
    /***/
  },

  /***/
  "./node_modules/core-js/internals/to-absolute-index.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsToAbsoluteIndexJs(module, exports, __webpack_require__) {
    var toInteger = __webpack_require__(
    /*! ../internals/to-integer */
    "./node_modules/core-js/internals/to-integer.js");

    var max = Math.max;
    var min = Math.min; // Helper for a popular repeating case of the spec:
    // Let integer be ? ToInteger(index).
    // If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).

    module.exports = function (index, length) {
      var integer = toInteger(index);
      return integer < 0 ? max(integer + length, 0) : min(integer, length);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/to-indexed-object.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsToIndexedObjectJs(module, exports, __webpack_require__) {
    // toObject with fallback for non-array-like ES3 strings
    var IndexedObject = __webpack_require__(
    /*! ../internals/indexed-object */
    "./node_modules/core-js/internals/indexed-object.js");

    var requireObjectCoercible = __webpack_require__(
    /*! ../internals/require-object-coercible */
    "./node_modules/core-js/internals/require-object-coercible.js");

    module.exports = function (it) {
      return IndexedObject(requireObjectCoercible(it));
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/to-integer.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/internals/to-integer.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsToIntegerJs(module, exports) {
    var ceil = Math.ceil;
    var floor = Math.floor; // `ToInteger` abstract operation
    // https://tc39.github.io/ecma262/#sec-tointeger

    module.exports = function (argument) {
      return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/to-length.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/internals/to-length.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsToLengthJs(module, exports, __webpack_require__) {
    var toInteger = __webpack_require__(
    /*! ../internals/to-integer */
    "./node_modules/core-js/internals/to-integer.js");

    var min = Math.min; // `ToLength` abstract operation
    // https://tc39.github.io/ecma262/#sec-tolength

    module.exports = function (argument) {
      return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/to-object.js":
  /*!*****************************************************!*\
    !*** ./node_modules/core-js/internals/to-object.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsToObjectJs(module, exports, __webpack_require__) {
    var requireObjectCoercible = __webpack_require__(
    /*! ../internals/require-object-coercible */
    "./node_modules/core-js/internals/require-object-coercible.js"); // `ToObject` abstract operation
    // https://tc39.github.io/ecma262/#sec-toobject


    module.exports = function (argument) {
      return Object(requireObjectCoercible(argument));
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/to-primitive.js":
  /*!********************************************************!*\
    !*** ./node_modules/core-js/internals/to-primitive.js ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsToPrimitiveJs(module, exports, __webpack_require__) {
    var isObject = __webpack_require__(
    /*! ../internals/is-object */
    "./node_modules/core-js/internals/is-object.js"); // `ToPrimitive` abstract operation
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
    /***/

  },

  /***/
  "./node_modules/core-js/internals/uid.js":
  /*!***********************************************!*\
    !*** ./node_modules/core-js/internals/uid.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsUidJs(module, exports) {
    var id = 0;
    var postfix = Math.random();

    module.exports = function (key) {
      return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
    };
    /***/

  },

  /***/
  "./node_modules/core-js/internals/well-known-symbol.js":
  /*!*************************************************************!*\
    !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsInternalsWellKnownSymbolJs(module, exports, __webpack_require__) {
    var global = __webpack_require__(
    /*! ../internals/global */
    "./node_modules/core-js/internals/global.js");

    var shared = __webpack_require__(
    /*! ../internals/shared */
    "./node_modules/core-js/internals/shared.js");

    var uid = __webpack_require__(
    /*! ../internals/uid */
    "./node_modules/core-js/internals/uid.js");

    var NATIVE_SYMBOL = __webpack_require__(
    /*! ../internals/native-symbol */
    "./node_modules/core-js/internals/native-symbol.js");

    var Symbol = global.Symbol;
    var store = shared('wks');

    module.exports = function (name) {
      return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name] || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));
    };
    /***/

  },

  /***/
  "./node_modules/core-js/modules/es.array.filter.js":
  /*!*********************************************************!*\
    !*** ./node_modules/core-js/modules/es.array.filter.js ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsArrayFilterJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var $filter = __webpack_require__(
    /*! ../internals/array-iteration */
    "./node_modules/core-js/internals/array-iteration.js").filter;

    var arrayMethodHasSpeciesSupport = __webpack_require__(
    /*! ../internals/array-method-has-species-support */
    "./node_modules/core-js/internals/array-method-has-species-support.js"); // `Array.prototype.filter` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.filter
    // with adding support of @@species


    $({
      target: 'Array',
      proto: true,
      forced: !arrayMethodHasSpeciesSupport('filter')
    }, {
      filter: function filter(callbackfn
      /* , thisArg */
      ) {
        return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      }
    });
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.array.find.js":
  /*!*******************************************************!*\
    !*** ./node_modules/core-js/modules/es.array.find.js ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsArrayFindJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var $find = __webpack_require__(
    /*! ../internals/array-iteration */
    "./node_modules/core-js/internals/array-iteration.js").find;

    var addToUnscopables = __webpack_require__(
    /*! ../internals/add-to-unscopables */
    "./node_modules/core-js/internals/add-to-unscopables.js");

    var FIND = 'find';
    var SKIPS_HOLES = true; // Shouldn't skip holes

    if (FIND in []) Array(1)[FIND](function () {
      SKIPS_HOLES = false;
    }); // `Array.prototype.find` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.find

    $({
      target: 'Array',
      proto: true,
      forced: SKIPS_HOLES
    }, {
      find: function find(callbackfn
      /* , that = undefined */
      ) {
        return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      }
    }); // https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables

    addToUnscopables(FIND);
    /***/
  },

  /***/
  "./node_modules/core-js/modules/es.array.map.js":
  /*!******************************************************!*\
    !*** ./node_modules/core-js/modules/es.array.map.js ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCoreJsModulesEsArrayMapJs(module, exports, __webpack_require__) {
    "use strict";

    var $ = __webpack_require__(
    /*! ../internals/export */
    "./node_modules/core-js/internals/export.js");

    var $map = __webpack_require__(
    /*! ../internals/array-iteration */
    "./node_modules/core-js/internals/array-iteration.js").map;

    var arrayMethodHasSpeciesSupport = __webpack_require__(
    /*! ../internals/array-method-has-species-support */
    "./node_modules/core-js/internals/array-method-has-species-support.js"); // `Array.prototype.map` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.map
    // with adding support of @@species


    $({
      target: 'Array',
      proto: true,
      forced: !arrayMethodHasSpeciesSupport('map')
    }, {
      map: function map(callbackfn
      /* , thisArg */
      ) {
        return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      }
    });
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" style = \"background-color: lightgrey\">\n  <div class=\"col-md-8\" role=\"banner\">\n    <h2>d~weeve - a Dataweave(ish) javascript thing.</h2>\n  \n  </div>\n    <div class=\"row\">\n      <div class=\"col-md-1\"></div>\n      <div class=\"col-md-5\">\n        <p>d~weeve:</p>\n        <ace-editor #dweditor style=\"height:350px;\">\n        </ace-editor>\n      </div>\n      <div class=\"col-md-5\">\n        <p>payload:</p>\n        <ace-editor #pleditor style=\"height:350px;\">\n        </ace-editor>\n      </div>\n      <div class=\"col-md-1\"></div>\n    </div>\n    <br>\n    <div class=\"row\">\n      <div class=\"col-md-1\"></div>\n      <div class=\"col-md-10\">\n        <p>Result:</p>\n        <ace-editor #reditor style=\"height:250px;\">\n        </ace-editor>\n      </div>\n      \n      <div class=\"col-md-1\"></div>\n    </div>\n    <br>\n    <br>\n</div>\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _dweeve_src_exe_dweeve_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dweeve/src/exe/dweeve.js */
    "./src/app/dweeve/src/exe/dweeve.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'dweeve-ui';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          this.dweditor.getEditor().setOptions({
            showLineNumbers: true,
            tabSize: 2
          });
          this.dweditor.theme = 'clouds';
          this.dweditor.text = "%dw 2.0\noutput application/xml\n---\n{\n    prices: payload.prices mapObject (value, key) -> {\n        (key): (value + 5)\n    }\n}";
          this.dweditor.registerOnChange(function () {
            _this.reDweeve();
          });
          this.pleditor.getEditor().setOptions({
            showLineNumbers: true,
            tabSize: 2
          });
          this.pleditor.theme = 'clouds';
          this.pleditor.text = "<?xml version='1.0' encoding='UTF-8'?>\n<prices>\n    <basic>9.99</basic>\n    <premium>53.01</premium>\n    <vip>398.99</vip>\n</prices>";
          this.pleditor.registerOnChange(function () {
            _this.reDweeve();
          });
          this.reditor.getEditor().setOptions({
            showLineNumbers: true,
            tabSize: 2
          });
          this.reditor.theme = 'clouds';
          this.reDweeve();
        }
      }, {
        key: "reDweeve",
        value: function reDweeve() {
          this.reditor.text = _dweeve_src_exe_dweeve_js__WEBPACK_IMPORTED_MODULE_2__["run"](this.dweditor.text, this.pleditor.text, '', '');
        }
      }]);

      return AppComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dweditor', {
      static: false
    })], AppComponent.prototype, "dweditor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pleditor', {
      static: false
    })], AppComponent.prototype, "pleditor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reditor', {
      static: false
    })], AppComponent.prototype, "reditor", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var ng2_ace_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng2-ace-editor */
    "./node_modules/ng2-ace-editor/index.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
      imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], ng2_ace_editor__WEBPACK_IMPORTED_MODULE_4__["AceEditorModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/dweeve/src/exe/beautify.js":
  /*!********************************************!*\
    !*** ./src/app/dweeve/src/exe/beautify.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function srcAppDweeveSrcExeBeautifyJs(module, exports) {
    // taken from https://github.com/gre/json-beautify/blob/master/index.js
    var rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    var gap,
        indent,
        meta = {
      // table of character substitutions
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
      return rx_escapable.test(string) ? '"' + string.replace(rx_escapable, function (a) {
        var c = meta[a];
        return typeof c === 'string' ? c : "\\u" + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
      }) + '"' : '"' + string + '"';
    }

    function str(key, holder, limit) {
      // Produce a string from holder[key].
      var i,
          // The loop counter.
      k,
          // The member key.
      v,
          // The member value.
      length,
          mind = gap,
          partial,
          value = holder[key]; // If the value has a toJSON method, call it to obtain a replacement value.

      if (value && typeof value === 'object' && typeof value.toJSON === 'function') {
        value = value.toJSON(key);
      } // If we were called with a replacer function, then call the replacer to
      // obtain a replacement value.


      if (typeof rep === 'function') {
        value = rep.call(holder, key, value);
      } // What happens next depends on the value's type.


      switch (typeof value) {
        case 'string':
          return quote(value);

        case 'number':
          // JSON numbers must be finite. Encode non-finite numbers as null.
          return isFinite(value) ? String(value) : 'null';

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
          } // Make an array to hold the partial results of stringifying this object value.


          gap += indent;
          partial = []; // Is the value an array?

          if (Object.prototype.toString.apply(value) === '[object Array]') {
            // The value is an array. Stringify every element. Use null as a placeholder
            // for non-JSON values.
            length = value.length;

            for (i = 0; i < length; i += 1) {
              partial[i] = str(i, value, limit) || 'null';
            } // Join all of the elements together, separated with commas, and wrap them in
            // brackets.


            v = partial.length === 0 ? '[]' : gap ? gap.length + partial.join(', ').length + 4 > limit ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' : '[ ' + partial.join(', ') + ' ]' : '[' + partial.join(',') + ']';
            gap = mind;
            return v;
          } // If the replacer is an array, use it to select the members to be stringified.


          if (rep && typeof rep === 'object') {
            length = rep.length;

            for (i = 0; i < length; i += 1) {
              if (typeof rep[i] === 'string') {
                k = rep[i];
                v = str(k, value, limit);

                if (v) {
                  partial.push(quote(k) + (gap ? ': ' : ':') + v);
                }
              }
            }
          } else {
            // Otherwise, iterate through all of the keys in the object.
            //if it is one of dweeve'sspecial extra-wrapped-list, deal with that:
            if (value['__extra-wrapped-list']) {
              for (k in value) {
                if (k.startsWith('__key')) {
                  var v2 = value[k];
                  var k2 = Object.keys(v2)[0];

                  if (Object.prototype.hasOwnProperty.call(v2, k2)) {
                    v = str(k2, v2, limit);

                    if (v) {
                      partial.push(quote(k2) + (gap ? ': ' : ':') + v);
                    }
                  }
                }
              }
            } else {
              for (k in value) {
                if (Object.prototype.hasOwnProperty.call(value, k)) {
                  v = str(k, value, limit);

                  if (v) {
                    partial.push(quote(k) + (gap ? ': ' : ':') + v);
                  }
                }
              }
            }
          } // Join all of the member texts together, separated with commas,
          // and wrap them in braces.


          v = partial.length === 0 ? '{}' : gap ? gap.length + partial.join(', ').length + 4 > limit ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' : '{ ' + partial.join(', ') + ' }' : '{' + partial.join(',') + '}';
          gap = mind;
          return v;
      }
    }

    function beautify(value, replacer, space, limit) {
      // The stringify method takes a value and an optional replacer, and an optional
      // space parameter, and returns a JSON text. The replacer can be a function
      // that can replace values, or an array of strings that will select the keys.
      // A default replacer method can be provided. Use of the space parameter can
      // produce text that is more easily readable.
      var i;
      gap = '';
      indent = '';
      if (!limit) limit = 0;
      if (typeof limit !== "number") throw new Error("beaufifier: limit must be a number"); // If the space parameter is a number, make an indent string containing that
      // many spaces.

      if (typeof space === 'number') {
        for (i = 0; i < space; i += 1) {
          indent += ' ';
        } // If the space parameter is a string, it will be used as the indent string.

      } else if (typeof space === 'string') {
        indent = space;
      } // If there is a replacer, it must be a function or an array.
      // Otherwise, throw an error.


      rep = replacer;

      if (replacer && typeof replacer !== 'function' && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
        throw new Error('beautifier: wrong replacer parameter');
      } // Make a fake root object containing our value under the key of ''.
      // Return the result of stringifying the value.


      return str('', {
        '': value
      }, limit);
    }

    module.exports = beautify;
    /***/
  },

  /***/
  "./src/app/dweeve/src/exe/dweeve.js":
  /*!******************************************!*\
    !*** ./src/app/dweeve/src/exe/dweeve.js ***!
    \******************************************/

  /*! exports provided: run */

  /***/
  function srcAppDweeveSrcExeDweeveJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "run", function () {
      return run;
    });
    /* harmony import */


    var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! core-js/modules/es.array.map */
    "./node_modules/core-js/modules/es.array.map.js");
    /* harmony import */


    var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);

    var nearley = __webpack_require__(
    /*! ./nearley */
    "./src/app/dweeve/src/exe/nearley.js");

    var dwgrammer = __webpack_require__(
    /*! ../parser/dweeve-grammar.js */
    "./src/app/dweeve/src/parser/dweeve-grammar.js");

    var transpiler = __webpack_require__(
    /*! ../transpiler/transpiler.js */
    "./src/app/dweeve/src/transpiler/transpiler.js");

    var beautify = __webpack_require__(
    /*! ./beautify.js */
    "./src/app/dweeve/src/exe/beautify.js");

    var vm = __webpack_require__(
    /*! vm-browserify */
    "./node_modules/vm-browserify/index.js");

    var xml2js = __webpack_require__(
    /*! ./xmldom2jsobj */
    "./src/app/dweeve/src/exe/xmldom2jsobj.js");

    var DOMParser = __webpack_require__(
    /*! xmldom */
    "./node_modules/xmldom/dom-parser.js").DOMParser;

    var selectorFunctions = __webpack_require__(
    /*! ../functions/selectors */
    "./src/app/dweeve/src/functions/selectors.js");

    var coreFunctions = __webpack_require__(
    /*! ../functions/core */
    "./src/app/dweeve/src/functions/core.js");

    var doScopeFunctions = __webpack_require__(
    /*! ../functions/doScope */
    "./src/app/dweeve/src/functions/doScope.js");

    function run(dwl, payload, vars, attributes) {
      if (typeof payload === 'string' && payload.trim().startsWith('<') && payload.trim().endsWith('>')) {
        var xml = payload.trim();
        var doc = new DOMParser().parseFromString(xml);
        payload = xml2js.toJsObj(doc);
      }

      var t = typeof payload;
      var result = innerRun(dwl, payload, vars, attributes);
      return result;
    }

    function innerRun(dwl, payload, vars, attributes) {
      try {
        var _args = {
          payload: payload,
          vars: vars,
          attributes: attributes,
          __doDotOp: selectorFunctions.__doDotOp,
          __doDotStarOp: selectorFunctions.__doDotStarOp,
          __doDotDotStarOp: selectorFunctions.__doDotDotStarOp,
          __doDotDotOp: selectorFunctions.__doDotDotOp,
          __getIdentifierValue: selectorFunctions.__getIdentifierValue,
          __execDoScope: doScopeFunctions.__execDoScope,
          isOdd: coreFunctions.isOdd,
          concat: coreFunctions.concat,
          map: coreFunctions.map,
          mapObject: coreFunctions.mapObject
        };
        var grammar = dwgrammer.getGrammar();
        var parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
        dwl = dwl.replace(/\r\n/g, '\n');
        parser.feed(dwl.trim());
        if (parser.results.length === 0) throw "Dweeve parser found no dweeve!";
        if (parser.results.length > 1) throw "Dweeve parser found more than one intepretation of the dweeve!";
        var code = transpiler.transpile(parser.results[0]);
        var script = new vm.Script(code.decs + '\n' + code.text + '\n var result=dweeve()');
        var context = new vm.createContext(_args);
        script.runInContext(context);
        var result = context.result;
        return beautify(result, null, 2, 100);
      } catch (err) {
        return err.message;
      }
    } // module.exports = { run: run};

    /***/

  },

  /***/
  "./src/app/dweeve/src/exe/nearley.js":
  /*!*******************************************!*\
    !*** ./src/app/dweeve/src/exe/nearley.js ***!
    \*******************************************/

  /*! exports provided: Parser, Grammar, Rule */

  /***/
  function srcAppDweeveSrcExeNearleyJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Parser", function () {
      return Parser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Grammar", function () {
      return Grammar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Rule", function () {
      return Rule;
    });
    /* harmony import */


    var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! core-js/modules/es.array.map */
    "./node_modules/core-js/modules/es.array.map.js");
    /* harmony import */


    var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! core-js/modules/es.array.filter */
    "./node_modules/core-js/modules/es.array.filter.js");
    /* harmony import */


    var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! core-js/modules/es.array.find */
    "./node_modules/core-js/modules/es.array.find.js");
    /* harmony import */


    var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_2__);

    function Rule(name, symbols, postprocess) {
      this.id = ++Rule.highestId;
      this.name = name;
      this.symbols = symbols; // a list of literal | regex class | nonterminal

      this.postprocess = postprocess;
      return this;
    }

    Rule.highestId = 0;

    Rule.prototype.toString = function (withCursorAt) {
      function stringifySymbolSequence(e) {
        return e.literal ? JSON.stringify(e.literal) : e.type ? '%' + e.type : e.toString();
      }

      var symbolSequence = typeof withCursorAt === "undefined" ? this.symbols.map(stringifySymbolSequence).join(' ') : this.symbols.slice(0, withCursorAt).map(stringifySymbolSequence).join(' ') + " ● " + this.symbols.slice(withCursorAt).map(stringifySymbolSequence).join(' ');
      return this.name + " → " + symbolSequence;
    }; // a State is a rule at a position from a given starting point in the input stream (reference)


    function State(rule, dot, reference, wantedBy) {
      this.rule = rule;
      this.dot = dot;
      this.reference = reference;
      this.data = [];
      this.wantedBy = wantedBy;
      this.isComplete = this.dot === rule.symbols.length;
    }

    State.prototype.toString = function () {
      return "{" + this.rule.toString(this.dot) + "}, from: " + (this.reference || 0);
    };

    State.prototype.nextState = function (child) {
      var state = new State(this.rule, this.dot + 1, this.reference, this.wantedBy);
      state.left = this;
      state.right = child;

      if (state.isComplete) {
        state.data = state.build();
      }

      return state;
    };

    State.prototype.build = function () {
      var children = [];
      var node = this;

      do {
        children.push(node.right.data);
        node = node.left;
      } while (node.left);

      children.reverse();
      return children;
    };

    State.prototype.finish = function () {
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

    Column.prototype.process = function (nextColumn) {
      var states = this.states;
      var wants = this.wants;
      var completed = this.completed;

      for (var w = 0; w < states.length; w++) {
        // nb. we push() during iteration
        var state = states[w];

        if (state.isComplete) {
          state.finish();

          if (state.data !== Parser.fail) {
            // complete
            var wantedBy = state.wantedBy;

            for (var i = wantedBy.length; i--;) {
              // this line is hot
              var left = wantedBy[i];
              this.complete(left, state);
            } // special-case nullables


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
          } // predict


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
    };

    Column.prototype.predict = function (exp) {
      var rules = this.grammar.byName[exp] || [];

      for (var i = 0; i < rules.length; i++) {
        var r = rules[i];
        var wantedBy = this.wants[exp];
        var s = new State(r, 0, this.index, wantedBy);
        this.states.push(s);
      }
    };

    Column.prototype.complete = function (left, right) {
      var copy = left.nextState(right);
      this.states.push(copy);
    };

    function Grammar(rules, start) {
      this.rules = rules;
      this.start = start || this.rules[0].name;
      var byName = this.byName = {};
      this.rules.forEach(function (rule) {
        if (!byName.hasOwnProperty(rule.name)) {
          byName[rule.name] = [];
        }

        byName[rule.name].push(rule);
      });
    } // So we can allow passing (rules, start) directly to Parser for backwards compatibility


    Grammar.fromCompiled = function (rules, start) {
      var lexer = rules.Lexer;

      if (rules.ParserStart) {
        start = rules.ParserStart;
        rules = rules.ParserRules;
      }

      var rules = rules.map(function (r) {
        return new Rule(r.name, r.symbols, r.postprocess);
      });
      var g = new Grammar(rules, start);
      g.lexer = lexer; // nb. storing lexer on Grammar is iffy, but unavoidable

      return g;
    };

    function StreamLexer() {
      this.reset("");
    }

    StreamLexer.prototype.reset = function (data, state) {
      this.buffer = data;
      this.index = 0;
      this.line = state ? state.line : 1;
      this.lastLineBreak = state ? -state.col : 0;
    };

    StreamLexer.prototype.next = function () {
      if (this.index < this.buffer.length) {
        var ch = this.buffer[this.index++];

        if (ch === '\n') {
          this.line += 1;
          this.lastLineBreak = this.index;
        }

        return {
          value: ch
        };
      }
    };

    StreamLexer.prototype.save = function () {
      return {
        line: this.line,
        col: this.index - this.lastLineBreak
      };
    };

    StreamLexer.prototype.formatError = function (token, message) {
      // nb. this gets called after consuming the offending token,
      // so the culprit is index-1
      var buffer = this.buffer;

      if (typeof buffer === 'string') {
        var nextLineBreak = buffer.indexOf('\n', this.index);
        if (nextLineBreak === -1) nextLineBreak = buffer.length;
        var line = buffer.substring(this.lastLineBreak, nextLineBreak);
        var col = this.index - this.lastLineBreak;
        message += " at line " + this.line + " col " + col + ":\n\n";
        message += "  " + line + "\n";
        message += "  " + Array(col).join(" ") + "^";
        return message;
      } else {
        return message + " at index " + (this.index - 1);
      }
    };

    function Parser(rules, start, options) {
      if (rules instanceof Grammar) {
        var grammar = rules;
        var options = start;
      } else {
        var grammar = Grammar.fromCompiled(rules, start);
      }

      this.grammar = grammar; // Read options

      this.options = {
        keepHistory: false,
        lexer: grammar.lexer || new StreamLexer()
      };

      for (var key in options || {}) {
        this.options[key] = options[key];
      } // Setup lexer


      this.lexer = this.options.lexer;
      this.lexerState = undefined; // Setup a table

      var column = new Column(grammar, 0);
      var table = this.table = [column]; // I could be expecting anything.

      column.wants[grammar.start] = [];
      column.predict(grammar.start); // TODO what if start rule is nullable?

      column.process();
      this.current = 0; // token index
    } // create a reserved token for indicating a parse fail


    Parser.fail = {};

    Parser.prototype.feed = function (chunk) {
      var lexer = this.lexer;
      lexer.reset(chunk, this.lexerState);
      var token;

      while (token = lexer.next()) {
        // We add new states to table[current+1]
        var column = this.table[this.current]; // GC unused states

        if (!this.options.keepHistory) {
          delete this.table[this.current - 1];
        }

        var n = this.current + 1;
        var nextColumn = new Column(this.grammar, n);
        this.table.push(nextColumn); // Advance all tokens that expect the symbol

        var literal = token.text !== undefined ? token.text : token.value;
        var value = lexer.constructor === StreamLexer ? token.value : token;
        var scannable = column.scannable;

        for (var w = scannable.length; w--;) {
          var state = scannable[w];
          var expect = state.rule.symbols[state.dot]; // Try to consume the token
          // either regex or literal

          if (expect.test ? expect.test(value) : expect.type ? expect.type === token.type : expect.literal === literal) {
            // Add it
            var next = state.nextState({
              data: value,
              token: token,
              isToken: true,
              reference: n - 1
            });
            nextColumn.states.push(next);
          }
        } // Next, for each of the rules, we either
        // (a) complete it, and try to see if the reference row expected that
        //     rule
        // (b) predict the next nonterminal it expects by adding that
        //     nonterminal's start state
        // To prevent duplication, we also keep track of rules we have already
        // added


        nextColumn.process(); // If needed, throw an error:

        if (nextColumn.states.length === 0) {
          // No states at all! This is not good.
          var err = new Error(this.reportError(token));
          err.offset = this.current;
          err.token = token;
          throw err;
        } // maybe save lexer state


        if (this.options.keepHistory) {
          column.lexerState = lexer.save();
        }

        this.current++;
      }

      if (column) {
        this.lexerState = lexer.save();
      } // Incrementally keep track of results


      this.results = this.finish(); // Allow chaining, for whatever it's worth

      return this;
    };

    Parser.prototype.reportError = function (token) {
      var lines = [];
      var tokenDisplay = (token.type ? token.type + " token: " : "") + JSON.stringify(token.value !== undefined ? token.value : token);
      lines.push(this.lexer.formatError(token, "Syntax error"));
      lines.push('Unexpected ' + tokenDisplay + '. Instead, I was expecting to see one of the following:\n');
      var lastColumnIndex = this.table.length - 2;
      var lastColumn = this.table[lastColumnIndex];
      var expectantStates = lastColumn.states.filter(function (state) {
        var nextSymbol = state.rule.symbols[state.dot];
        return nextSymbol && typeof nextSymbol !== "string";
      }); // Display a "state stack" for each expectant state
      // - which shows you how this state came to be, step by step.
      // If there is more than one derivation, we only display the first one.

      var stateStacks = expectantStates.map(function (state) {
        return this.buildFirstStateStack(state, []);
      }, this); // Display each state that is expecting a terminal symbol next.

      stateStacks.forEach(function (stateStack) {
        var state = stateStack[0];
        var nextSymbol = state.rule.symbols[state.dot];
        var symbolDisplay = this.getSymbolDisplay(nextSymbol);
        lines.push('A ' + symbolDisplay + ' based on:');
        this.displayStateStack(stateStack, lines);
      }, this);
      lines.push("");
      return lines.join("\n");
    };

    Parser.prototype.displayStateStack = function (stateStack, lines) {
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

    Parser.prototype.getSymbolDisplay = function (symbol) {
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


    Parser.prototype.buildFirstStateStack = function (state, visited) {
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

    Parser.prototype.save = function () {
      var column = this.table[this.current];
      column.lexerState = this.lexerState;
      return column;
    };

    Parser.prototype.restore = function (column) {
      var index = column.index;
      this.current = index;
      this.table[index] = column;
      this.table.splice(index + 1);
      this.lexerState = column.lexerState; // Incrementally keep track of results

      this.results = this.finish();
    }; // nb. deprecated: use save/restore instead!


    Parser.prototype.rewind = function (index) {
      if (!this.options.keepHistory) {
        throw new Error('set option `keepHistory` to enable rewinding');
      } // nb. recall column (table) indicies fall between token indicies.
      //        col 0   --   token 0   --   col 1


      this.restore(this.table[index]);
    };

    Parser.prototype.finish = function () {
      // Return the possible parsings
      var considerations = [];
      var start = this.grammar.start;
      var column = this.table[this.table.length - 1];
      column.states.forEach(function (t) {
        if (t.rule.name === start && t.dot === t.rule.symbols.length && t.reference === 0 && t.data !== Parser.fail) {
          considerations.push(t);
        }
      });
      return considerations.map(function (c) {
        return c.data;
      });
    };
    /***/

  },

  /***/
  "./src/app/dweeve/src/exe/xmldom2jsobj.js":
  /*!************************************************!*\
    !*** ./src/app/dweeve/src/exe/xmldom2jsobj.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function srcAppDweeveSrcExeXmldom2jsobjJs(module, exports) {
    function toJsObj(node) {
      var nodeType = getNodeType(node);
      console.log(nodeType);

      if (nodeType === 'Document') {
        var nl = {};

        for (var idx = 0; idx < node.childNodes.length; idx++) {
          var ce = node.childNodes.item(idx);

          if (getNodeType(ce) === 'Element') {
            nl = toJsObj(ce);
          }
        }

        return nl;
      }

      if (nodeType === 'NodeList') {
        var _nl = {
          '__extra-wrapped-list': true
        };

        for (var _idx = 0; _idx < node.length; _idx++) {
          var _ce = node.item(_idx);

          if (getNodeType(_ce) === 'Element') {
            var js = toJsObj(_ce);
            _nl['__key' + _idx] = js;
          }
        }

        return _nl;
      }

      if (isTextOnlyElement(node)) {
        return _defineProperty({}, node.nodeName, numberIfPossible(node.textContent));
      }

      if (!hasText(node)) {
        return _defineProperty({}, node.nodeName, toJsObj(node.childNodes));
      } else {
        var inner = toJsObj(node.childNodes);
        var ewl = {
          '__extra-wrapped-list': true
        };
        ewl["__key0"] = {
          "__text": nodeOwnText(node)
        };

        for (var _idx2 = 1; _idx2 <= Object.values(inner).length; _idx2++) {
          if (Object.keys(inner)[_idx2 - 1].startsWith('__key')) ewl['__key' + _idx2] = Object.values(inner)[_idx2 - 1];
        }

        return _defineProperty({}, node.nodeName, ewl);
      }
    }

    function numberIfPossible(text) {
      if (!isNaN(parseFloat(text))) return parseFloat(text);
      if (text === 'true') return true;
      if (text === 'false') return false;
      return text;
    }

    function getNodeType(node) {
      if (node.constructor != null && typeof node.constructor.name === 'string' && node.constructor.name.length > 1 && node.constructor.name !== 'Object') {
        return node.constructor.name;
      }

      if (node.length && node.item) {
        return 'NodeList';
      }
    }

    function hasText(node) {
      if (node.childNodes === undefined || node.childNodes === null || node.childNodes.length == 0) return false;

      for (var idx = 0; idx < node.childNodes.length; idx++) {
        if (node.childNodes.item(idx).constructor.name === "Text" && !/^\s*$/.test(node.childNodes.item(idx).textContent)) return true;
      }

      return false;
    }

    function nodeOwnText(node) {
      if (node.childNodes === undefined || node.childNodes === null || node.childNodes.length == 0) return "";

      for (var idx = 0; idx < node.childNodes.length; idx++) {
        if (node.childNodes.item(idx).constructor.name === "Text" && !/^\s*$/.test(node.childNodes.item(idx).textContent)) return node.childNodes.item(idx).textContent;
      }

      return "";
    }

    function isTextOnlyElement(node) {
      return getNodeType(node) === 'Element' && node.childNodes.length == 1 && node.firstChild.constructor.name === 'Text';
    }

    module.exports = {
      toJsObj: toJsObj
    };
    /***/
  },

  /***/
  "./src/app/dweeve/src/functions/core.js":
  /*!**********************************************!*\
    !*** ./src/app/dweeve/src/functions/core.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function srcAppDweeveSrcFunctionsCoreJs(module, exports) {
    function isOdd(number) {
      return number % 2 ? true : false;
    }

    function concat(a, b) {
      return a + b;
    }

    function map(source, mapFunc) {
      var out = [];
      var ewl = source['__extra-wrapped-list'];

      for (var key in source) {
        if (key !== '__extra-wrapped-list') {
          var _k = key;
          var v = source[key];

          if (ewl) {
            _k = Object.keys(v)[0];
            v = Object.values(v)[0];
          }

          _k = isNaN(parseInt(_k)) ? _k : parseInt(_k);
          out.push(mapFunc(v, _k));
        }
      }

      return out;
    }

    function mapObject(source, mapFunc) {
      var out = {
        '__extra-wrapped-list': true
      };
      var ewl = source['__extra-wrapped-list'];
      var idx = 0;

      for (var key in source) {
        if (key !== '__extra-wrapped-list') {
          var _k2 = key;
          var v = source[key];

          if (ewl) {
            _k2 = Object.keys(v)[0];
            v = Object.values(v)[0];
          }

          _k2 = isNaN(parseInt(_k2)) ? _k2 : parseInt(_k2);
          out['__key' + idx++] = mapFunc(v, _k2);
        }
      }

      return out;
    }

    module.exports = {
      isOdd: isOdd,
      concat: concat,
      map: map,
      mapObject: mapObject
    };
    /***/
  },

  /***/
  "./src/app/dweeve/src/functions/doScope.js":
  /*!*************************************************!*\
    !*** ./src/app/dweeve/src/functions/doScope.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function srcAppDweeveSrcFunctionsDoScopeJs(module, exports, __webpack_require__) {
    var vm = __webpack_require__(
    /*! vm-browserify */
    "./node_modules/vm-browserify/index.js");

    function __execDoScope(code, args) {
      var script = new vm.Script(code + '\n var result=doScope()');
      var context = new vm.createContext(args);
      script.runInContext(context);
      return context.result;
    }

    module.exports = {
      __execDoScope: __execDoScope
    };
    /***/
  },

  /***/
  "./src/app/dweeve/src/functions/selectors.js":
  /*!***************************************************!*\
    !*** ./src/app/dweeve/src/functions/selectors.js ***!
    \***************************************************/

  /*! exports provided: __doDotOp, __doDotStarOp, __doDotDotStarOp, __doDotDotOp, __getIdentifierValue */

  /***/
  function srcAppDweeveSrcFunctionsSelectorsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__doDotOp", function () {
      return __doDotOp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__doDotStarOp", function () {
      return __doDotStarOp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__doDotDotStarOp", function () {
      return __doDotDotStarOp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__doDotDotOp", function () {
      return __doDotDotOp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__getIdentifierValue", function () {
      return __getIdentifierValue;
    });
    /* harmony import */


    var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! core-js/modules/es.array.map */
    "./node_modules/core-js/modules/es.array.map.js");
    /* harmony import */


    var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! core-js/modules/es.array.find */
    "./node_modules/core-js/modules/es.array.find.js");
    /* harmony import */


    var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_1__);

    function __getIdentifierValue(identifier) {
      return identifier;
    }

    function __doDotOp(lhs, rhs) {
      try {
        if (!Array.isArray(lhs)) {
          if (lhs['__extra-wrapped-list']) {
            var r = Object.values(lhs).filter(function (v) {
              return typeof v === 'object';
            }).find(function (kvp) {
              return kvp[rhs];
            })[rhs];
            return r;
          } else {
            var _r = lhs[rhs];
            console.log(_r);
            return _r;
          }
        } else {
          var _r2 = lhs.filter(function (m) {
            return m['__extra-wrapped-list'] || m[rhs] !== undefined;
          }).map(function (kvps) {
            if (kvps['__extra-wrapped-list']) {
              return Object.values(kvps).filter(function (v) {
                return typeof v === 'object';
              }).find(function (kvp) {
                return kvp[rhs];
              })[rhs];
            } else {
              return kvps[rhs];
            }
          });

          return _r2;
        }
      } catch (ex) {
        return null;
      }
    }

    function __doDotStarOp(lhs, rhs) {
      lhs = convertJsonObjsToArray(lhs);

      try {
        var r = lhs.filter(function (m) {
          return m[rhs] !== undefined;
        }).map(function (kvps) {
          return kvps[rhs];
        });
        return r;
      } catch (ex) {
        return null;
      }
    }

    function __doDotDotStarOp(lhs, rhs) {
      //    lhs = convertJsonObjsToArray(lhs);
      try {
        var r = getDescendentValues(lhs, rhs);
        return r;
      } catch (ex) {
        return null;
      }
    }

    function getDescendentValues(obj, key) {
      var vs = [];
      if (typeof obj !== 'object') return []; // two loops to go down before in, to match dataweave 2.0 ordering

      for (var _k3 in obj) {
        var kvp = dewrapKeyedObj(obj, _k3);
        if (kvp.key === key) vs.push(kvp.val);
      }

      for (var _k4 in obj) {
        var _kvp = dewrapKeyedObj(obj, _k4);

        vs = vs.concat(getDescendentValues(_kvp.val, key));
      }

      return vs;
    }

    function __doDotDotOp(lhs, rhs) {
      //    lhs = convertJsonObjsToArray(lhs);
      try {
        var r = getFirstDescendentValue(lhs, rhs);
        return r;
      } catch (ex) {
        return null;
      }
    }

    function getFirstDescendentValue(obj, key) {
      var vs = [];
      if (typeof obj !== 'object') return [];

      for (var _k5 in obj) {
        var kvp = dewrapKeyedObj(obj, _k5);

        if (kvp.key === key) {
          vs.push(kvp.val);
          break;
        }
      }

      for (var _k6 in obj) {
        var _kvp2 = dewrapKeyedObj(obj, _k6);

        vs = vs.concat(getFirstDescendentValue(_kvp2.val, key));
      }

      return vs;
    }

    function dewrapKeyedObj(obj, key) {
      if (!key.startsWith('__key')) return {
        key: key,
        val: obj[key]
      };else return {
        key: Object.keys(obj[key])[0],
        val: Object.values(obj[key])[0]
      };
    }

    function convertJsonObjsToArray(lhs) {
      if (!Array.isArray(lhs) && lhs['__extra-wrapped-list']) lhs = Object.values(lhs);else if (!Array.isArray(lhs) && !lhs['__extra-wrapped-list']) {
        arr = [];

        for (var _k7 in lhs) {
          arr.push(_defineProperty({}, _k7, lhs[_k7]));
        }

        lhs = arr;
      }
      return lhs;
    } //module.exports = {
    //    __doDotOp:  __doDotOp,
    //    __doDotStarOp: __doDotStarOp,
    //    __doDotDotStarOp: __doDotDotStarOp,
    //    __doDotDotOp: __doDotDotOp,
    //    __getIdentifierValue: __getIdentifierValue}

    /***/

  },

  /***/
  "./src/app/dweeve/src/parser/dweeve-grammar.js":
  /*!*****************************************************!*\
    !*** ./src/app/dweeve/src/parser/dweeve-grammar.js ***!
    \*****************************************************/

  /*! exports provided: getGrammar */

  /***/
  function srcAppDweeveSrcParserDweeveGrammarJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getGrammar", function () {
      return getGrammar;
    });
    /* harmony import */


    var core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! core-js/modules/es.array.flat */
    "./node_modules/core-js/modules/es.array.flat.js");
    /* harmony import */


    var core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_modules_es_array_flat__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! core-js/modules/es.array.map */
    "./node_modules/core-js/modules/es.array.map.js");
    /* harmony import */


    var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_1__); // Generated automatically by nearley, version 2.19.0
    // http://github.com/Hardmath123/nearley


    var moo = __webpack_require__(
    /*! moo */
    "./node_modules/moo/moo.js");

    function id(x) {
      return x[0];
    }

    function getGrammar() {
      return grammar;
    }

    var lexer = moo.compile({
      header: /^\%dw [0-9]+\.[0.9]+$/,
      keyword: ['case', 'if', 'default', 'matches', 'match', 'var', 'fun', 'else', 'do'],
      WS: {
        match: /[ \t\n]+/,
        lineBreaks: true
      },
      headerend: '---',
      comment: /\/\/.*?$/,
      number: /0|[1-9][0-9]*\.?[0-9]*/,
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
      dblstring: {
        match: /["](?:\\["\\]|[^\n"\\])*["]/
      },
      sglstring: {
        match: /['](?:\\['\\]|[^\n'\\])*[']/
      },
      keyvalsep: /:/,
      comma: /,/,
      mimetype: /(?:application|text)\/\w+/,
      word: {
        match: /\w[\w0-9_]*/
      },
      lparen: '(',
      rparen: ')',
      lbrace: '{',
      rbrace: '}',
      lsquare: '[',
      rsquare: ']'
    });

    lexer.next = function (next) {
      return function () {
        var tok;

        while ((tok = next.call(lexer)) && tok.type === "WS") {}

        return tok;
      };
    }(lexer.next);

    var thing = function thing(name, data) {
      return {
        type: name,
        data: Array.isArray(data) ? data.filter(function (e) {
          return e !== null && (!Array.isArray(e) || e.length > 0);
        }) : data
      };
    };

    var grammar = {
      Lexer: lexer,
      ParserRules: [{
        "name": "dweeve$ebnf$1",
        "symbols": ["d_header"],
        "postprocess": id
      }, {
        "name": "dweeve$ebnf$1",
        "symbols": [],
        "postprocess": function postprocess(d) {
          return null;
        }
      }, {
        "name": "dweeve",
        "symbols": ["dweeve$ebnf$1", "d_body"],
        "postprocess": function postprocess(data) {
          return {
            type: 'dweeve',
            header: data[0],
            body: data[1]
          };
        }
      }, {
        "name": "d_header$ebnf$1",
        "symbols": [lexer.has("header") ? {
          type: "header"
        } : header],
        "postprocess": id
      }, {
        "name": "d_header$ebnf$1",
        "symbols": [],
        "postprocess": function postprocess(d) {
          return null;
        }
      }, {
        "name": "d_header$ebnf$2",
        "symbols": []
      }, {
        "name": "d_header$ebnf$2",
        "symbols": ["d_header$ebnf$2", "h_declaration"],
        "postprocess": function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      }, {
        "name": "d_header",
        "symbols": ["d_header$ebnf$1", "d_header$ebnf$2", {
          "literal": "---"
        }],
        "postprocess": function postprocess(data) {
          return {
            type: 'dweeve',
            header: data[0],
            decs: data[1]
          };
        }
      }, {
        "name": "d_body",
        "symbols": ["expression"],
        "postprocess": function postprocess(data) {
          return {
            type: 'body',
            value: data[0]
          };
        }
      }, {
        "name": "h_declaration",
        "symbols": ["h_input_dec"],
        "postprocess": function postprocess(data) {
          return {
            type: 'head-dec',
            value: data[0]
          };
        }
      }, {
        "name": "h_declaration",
        "symbols": ["h_output_dec"],
        "postprocess": function postprocess(data) {
          return {
            type: 'head-dec',
            value: data[0]
          };
        }
      }, {
        "name": "h_declaration",
        "symbols": ["h_var_dec"],
        "postprocess": function postprocess(data) {
          return {
            type: 'head-dec',
            value: data[0]
          };
        }
      }, {
        "name": "h_declaration",
        "symbols": ["h_fun_dec"],
        "postprocess": function postprocess(data) {
          return {
            type: 'head-dec',
            value: data[0]
          };
        }
      }, {
        "name": "h_input_dec",
        "symbols": [{
          "literal": "input"
        }, lexer.has("mimetype") ? {
          type: "mimetype"
        } : mimetype],
        "postprocess": function postprocess(data) {
          return {
            type: 'input-dec',
            mimetype: data[1]
          };
        }
      }, {
        "name": "h_output_dec",
        "symbols": [{
          "literal": "output"
        }, lexer.has("mimetype") ? {
          type: "mimetype"
        } : mimetype],
        "postprocess": function postprocess(data) {
          return {
            type: 'output-dec',
            mimetype: data[1]
          };
        }
      }, {
        "name": "h_var_dec",
        "symbols": [{
          "literal": "var"
        }, lexer.has("word") ? {
          type: "word"
        } : word, lexer.has("assignment") ? {
          type: "assignment"
        } : assignment, "h_dec_expression"],
        "postprocess": function postprocess(data) {
          return {
            type: 'var-dec',
            varName: data[1],
            varVal: data[3]
          };
        }
      }, {
        "name": "h_fun_dec$ebnf$1",
        "symbols": [lexer.has("word") ? {
          type: "word"
        } : word],
        "postprocess": id
      }, {
        "name": "h_fun_dec$ebnf$1",
        "symbols": [],
        "postprocess": function postprocess(d) {
          return null;
        }
      }, {
        "name": "h_fun_dec$ebnf$2",
        "symbols": []
      }, {
        "name": "h_fun_dec$ebnf$2$subexpression$1",
        "symbols": [lexer.has("comma") ? {
          type: "comma"
        } : comma, lexer.has("word") ? {
          type: "word"
        } : word]
      }, {
        "name": "h_fun_dec$ebnf$2",
        "symbols": ["h_fun_dec$ebnf$2", "h_fun_dec$ebnf$2$subexpression$1"],
        "postprocess": function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      }, {
        "name": "h_fun_dec",
        "symbols": [{
          "literal": "fun"
        }, lexer.has("word") ? {
          type: "word"
        } : word, lexer.has("lparen") ? {
          type: "lparen"
        } : lparen, "h_fun_dec$ebnf$1", "h_fun_dec$ebnf$2", lexer.has("rparen") ? {
          type: "rparen"
        } : rparen, lexer.has("assignment") ? {
          type: "assignment"
        } : assignment, "h_dec_expression"],
        "postprocess": function postprocess(data) {
          return {
            type: "fun-def",
            func: data[1],
            args: [data[3]].concat(_toConsumableArray(data[4].flat().filter(function (a) {
              return a.type !== 'comma';
            }))),
            body: data[7]
          };
        }
      }, {
        "name": "h_dec_expression",
        "symbols": ["expression"],
        "postprocess": function postprocess(data) {
          return {
            type: 'expression',
            value: data[0]
          };
        }
      }, {
        "name": "h_dec_expression",
        "symbols": [{
          "literal": "do"
        }, lexer.has("lbrace") ? {
          type: "lbrace"
        } : lbrace, "dweeve", lexer.has("rbrace") ? {
          type: "rbrace"
        } : rbrace],
        "postprocess": function postprocess(data) {
          return {
            type: 'do-dweeve',
            dweeve: data[2]
          };
        }
      }, {
        "name": "object$ebnf$1",
        "symbols": []
      }, {
        "name": "object$ebnf$1$subexpression$1",
        "symbols": [lexer.has("comma") ? {
          type: "comma"
        } : comma, "keyvaluepair"]
      }, {
        "name": "object$ebnf$1",
        "symbols": ["object$ebnf$1", "object$ebnf$1$subexpression$1"],
        "postprocess": function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      }, {
        "name": "object",
        "symbols": [lexer.has("lbrace") ? {
          type: "lbrace"
        } : lbrace, "keyvaluepair", "object$ebnf$1", lexer.has("rbrace") ? {
          type: "rbrace"
        } : rbrace],
        "postprocess": function postprocess(data) {
          return {
            type: "member-list",
            members: [data[1]].concat(_toConsumableArray(data[2].flat().filter(function (a) {
              return a.type !== 'comma';
            })))
          };
        }
      }, {
        "name": "keyvaluepair$ebnf$1",
        "symbols": [lexer.has("comma") ? {
          type: "comma"
        } : comma],
        "postprocess": id
      }, {
        "name": "keyvaluepair$ebnf$1",
        "symbols": [],
        "postprocess": function postprocess(d) {
          return null;
        }
      }, {
        "name": "keyvaluepair",
        "symbols": ["key", lexer.has("keyvalsep") ? {
          type: "keyvalsep"
        } : keyvalsep, "expression", "keyvaluepair$ebnf$1"],
        "postprocess": function postprocess(data) {
          return {
            type: 'member',
            key: data[0],
            value: data[2]
          };
        }
      }, {
        "name": "key",
        "symbols": [lexer.has("word") ? {
          type: "word"
        } : word],
        "postprocess": function postprocess(data) {
          return {
            type: 'key',
            value: data[0]
          };
        }
      }, {
        "name": "key",
        "symbols": [lexer.has("sglstring") ? {
          type: "sglstring"
        } : sglstring],
        "postprocess": function postprocess(data) {
          return {
            type: 'key',
            value: data[0]
          };
        }
      }, {
        "name": "key",
        "symbols": [lexer.has("dblstring") ? {
          type: "dblstring"
        } : dblstring],
        "postprocess": function postprocess(data) {
          return {
            type: 'key',
            value: data[0]
          };
        }
      }, {
        "name": "key",
        "symbols": [lexer.has("lparen") ? {
          type: "lparen"
        } : lparen, "expression", lexer.has("rparen") ? {
          type: "rparen"
        } : rparen],
        "postprocess": function postprocess(data) {
          return {
            type: 'dynamic-key',
            value: data[1]
          };
        }
      }, {
        "name": "expression",
        "symbols": ["result"],
        "postprocess": function postprocess(data) {
          return {
            type: 'expression',
            value: data[0]
          };
        }
      }, {
        "name": "expression",
        "symbols": ["object"],
        "postprocess": function postprocess(data) {
          return {
            type: 'expression',
            value: data[0]
          };
        }
      }, {
        "name": "expression",
        "symbols": ["defaultexp"],
        "postprocess": function postprocess(data) {
          return {
            type: 'expression',
            value: data[0]
          };
        }
      }, {
        "name": "expression",
        "symbols": ["ifconditional"],
        "postprocess": function postprocess(data) {
          return {
            type: 'expression',
            value: data[0]
          };
        }
      }, {
        "name": "expression",
        "symbols": ["matcher"],
        "postprocess": function postprocess(data) {
          return {
            type: 'expression',
            value: data[0]
          };
        }
      }, {
        "name": "expression",
        "symbols": ["expression", lexer.has("word") ? {
          type: "word"
        } : word, "expression"],
        "postprocess": function postprocess(data) {
          return {
            type: 'fun-call',
            fun: data[1],
            args: {
              args: [data[0], data[2]]
            }
          };
        }
      }, {
        "name": "expression$ebnf$1",
        "symbols": [lexer.has("word") ? {
          type: "word"
        } : word],
        "postprocess": id
      }, {
        "name": "expression$ebnf$1",
        "symbols": [],
        "postprocess": function postprocess(d) {
          return null;
        }
      }, {
        "name": "expression$ebnf$2",
        "symbols": []
      }, {
        "name": "expression$ebnf$2$subexpression$1",
        "symbols": [lexer.has("comma") ? {
          type: "comma"
        } : comma, lexer.has("word") ? {
          type: "word"
        } : word]
      }, {
        "name": "expression$ebnf$2",
        "symbols": ["expression$ebnf$2", "expression$ebnf$2$subexpression$1"],
        "postprocess": function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      }, {
        "name": "expression",
        "symbols": [lexer.has("lparen") ? {
          type: "lparen"
        } : lparen, "expression$ebnf$1", "expression$ebnf$2", lexer.has("rparen") ? {
          type: "rparen"
        } : rparen, lexer.has("thinarrow") ? {
          type: "thinarrow"
        } : thinarrow, "expression"],
        "postprocess": function postprocess(data) {
          return {
            type: 'lambda',
            ident: data[0],
            func: data[1],
            args: [data[1]].concat(_toConsumableArray(data[2].flat().filter(function (a) {
              return a.type !== 'comma';
            }))),
            expression: data[5]
          };
        }
      }, {
        "name": "expression",
        "symbols": ["array"],
        "postprocess": function postprocess(data) {
          return {
            type: 'expression',
            value: data[0]
          };
        }
      }, {
        "name": "defaultexp",
        "symbols": ["expression", {
          "literal": "default"
        }, "expression"],
        "postprocess": function postprocess(data) {
          return {
            type: 'default-expression',
            value: data[0],
            default: data[2]
          };
        }
      }, {
        "name": "ifconditional",
        "symbols": [{
          "literal": "if"
        }, lexer.has("lparen") ? {
          type: "lparen"
        } : lparen, "expression", lexer.has("rparen") ? {
          type: "rparen"
        } : rparen, "expression", {
          "literal": "else"
        }, "expression"],
        "postprocess": function postprocess(data) {
          return {
            type: 'if-conditional',
            condition: data[2],
            then: data[4],
            else: data[6]
          };
        }
      }, {
        "name": "matcher$ebnf$1$subexpression$1",
        "symbols": [{
          "literal": "case"
        }, "matchcond", lexer.has("thinarrow") ? {
          type: "thinarrow"
        } : thinarrow, "expression"]
      }, {
        "name": "matcher$ebnf$1",
        "symbols": ["matcher$ebnf$1$subexpression$1"]
      }, {
        "name": "matcher$ebnf$1$subexpression$2",
        "symbols": [{
          "literal": "case"
        }, "matchcond", lexer.has("thinarrow") ? {
          type: "thinarrow"
        } : thinarrow, "expression"]
      }, {
        "name": "matcher$ebnf$1",
        "symbols": ["matcher$ebnf$1", "matcher$ebnf$1$subexpression$2"],
        "postprocess": function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      }, {
        "name": "matcher$ebnf$2$subexpression$1",
        "symbols": [{
          "literal": "else"
        }, {
          "literal": "->"
        }, "expression"]
      }, {
        "name": "matcher$ebnf$2",
        "symbols": ["matcher$ebnf$2$subexpression$1"],
        "postprocess": id
      }, {
        "name": "matcher$ebnf$2",
        "symbols": [],
        "postprocess": function postprocess(d) {
          return null;
        }
      }, {
        "name": "matcher",
        "symbols": ["expression", {
          "literal": "match"
        }, lexer.has("lbrace") ? {
          type: "lbrace"
        } : lbrace, "matcher$ebnf$1", "matcher$ebnf$2", lexer.has("rbrace") ? {
          type: "rbrace"
        } : rbrace],
        "postprocess": function postprocess(data) {
          return {
            type: 'pattern-match',
            input: data[0],
            then: data[4],
            cases: data[3].map(function (c) {
              return {
                match: c[1],
                result: c[3]
              };
            }),
            else: data[4] == null ? null : data[4][2]
          };
        }
      }, {
        "name": "matchcond$ebnf$1$subexpression$1",
        "symbols": [lexer.has("word") ? {
          type: "word"
        } : word, {
          "literal": ":"
        }]
      }, {
        "name": "matchcond$ebnf$1",
        "symbols": ["matchcond$ebnf$1$subexpression$1"],
        "postprocess": id
      }, {
        "name": "matchcond$ebnf$1",
        "symbols": [],
        "postprocess": function postprocess(d) {
          return null;
        }
      }, {
        "name": "matchcond",
        "symbols": ["matchcond$ebnf$1", "literal"],
        "postprocess": function postprocess(data) {
          return {
            type: 'match-literal',
            var: data[0] == null ? null : data[0][0],
            litMatch: data[1]
          };
        }
      }, {
        "name": "matchcond",
        "symbols": [lexer.has("word") ? {
          type: "word"
        } : word, {
          "literal": "if"
        }, "expression"],
        "postprocess": function postprocess(data) {
          return {
            type: 'match-if-exp',
            var: data[0],
            expMatch: data[2]
          };
        }
      }, {
        "name": "matchcond",
        "symbols": [lexer.has("word") ? {
          type: "word"
        } : word, {
          "literal": "matches"
        }, lexer.has("regex") ? {
          type: "regex"
        } : regex],
        "postprocess": function postprocess(data) {
          return {
            type: 'match-regex',
            var: data[0],
            regex: data[2]
          };
        }
      }, {
        "name": "matchcond$ebnf$2$subexpression$1",
        "symbols": [lexer.has("word") ? {
          type: "word"
        } : word]
      }, {
        "name": "matchcond$ebnf$2",
        "symbols": ["matchcond$ebnf$2$subexpression$1"],
        "postprocess": id
      }, {
        "name": "matchcond$ebnf$2",
        "symbols": [],
        "postprocess": function postprocess(d) {
          return null;
        }
      }, {
        "name": "matchcond",
        "symbols": ["matchcond$ebnf$2", {
          "literal": "is"
        }, lexer.has("word") ? {
          type: "word"
        } : word],
        "postprocess": function postprocess(data) {
          return {
            type: 'match-type',
            var: data[0] == null ? null : data[0][0],
            typeName: data[2]
          };
        }
      }, {
        "name": "result",
        "symbols": ["result", lexer.has("mathbinop") ? {
          type: "mathbinop"
        } : mathbinop, "operand"],
        "postprocess": function postprocess(data) {
          return {
            type: 'bin-op',
            lhs: data[0],
            op: data[1],
            rhs: data[2]
          };
        }
      }, {
        "name": "result",
        "symbols": ["result", "dotops", "operand"],
        "postprocess": function postprocess(data) {
          return {
            type: 'dot-op',
            lhs: data[0],
            op: data[1],
            rhs: data[2]
          };
        }
      }, {
        "name": "result",
        "symbols": ["operand"],
        "postprocess": function postprocess(data) {
          return {
            type: 'some-operand',
            value: data[0]
          };
        }
      }, {
        "name": "operand",
        "symbols": ["identifier"],
        "postprocess": function postprocess(data) {
          return {
            type: 'identifier-operand',
            value: data[0]
          };
        }
      }, {
        "name": "operand",
        "symbols": ["literal"],
        "postprocess": function postprocess(data) {
          return {
            type: 'literal-operand',
            value: data[0]
          };
        }
      }, {
        "name": "operand",
        "symbols": [lexer.has("lparen") ? {
          type: "lparen"
        } : lparen, "expression", lexer.has("rparen") ? {
          type: "rparen"
        } : rparen],
        "postprocess": function postprocess(data) {
          return {
            type: 'bracket-operand',
            value: data[1]
          };
        }
      }, {
        "name": "identifier",
        "symbols": ["identifier", lexer.has("lparen") ? {
          type: "lparen"
        } : lparen, "arglist", lexer.has("rparen") ? {
          type: "rparen"
        } : rparen],
        "postprocess": function postprocess(data) {
          return {
            type: 'fun-call',
            fun: data[0],
            args: data[2]
          };
        }
      }, {
        "name": "identifier",
        "symbols": ["identifier", lexer.has("lsquare") ? {
          type: "lsquare"
        } : lsquare, "expression", lexer.has("rsquare") ? {
          type: "rsquare"
        } : rsquare],
        "postprocess": function postprocess(data) {
          return {
            type: 'idx-identifier',
            ident: data[0],
            idx: data[2]
          };
        }
      }, {
        "name": "identifier",
        "symbols": [lexer.has("word") ? {
          type: "word"
        } : word],
        "postprocess": function postprocess(data) {
          return {
            type: 'identifier',
            ident: data[0]
          };
        }
      }, {
        "name": "array",
        "symbols": [lexer.has("lsquare") ? {
          type: "lsquare"
        } : lsquare, "arglist", lexer.has("rsquare") ? {
          type: "rsquare"
        } : rsquare],
        "postprocess": function postprocess(data) {
          return {
            type: 'array',
            members: data[1]
          };
        }
      }, {
        "name": "arglist$ebnf$1",
        "symbols": ["expression"],
        "postprocess": id
      }, {
        "name": "arglist$ebnf$1",
        "symbols": [],
        "postprocess": function postprocess(d) {
          return null;
        }
      }, {
        "name": "arglist$ebnf$2",
        "symbols": []
      }, {
        "name": "arglist$ebnf$2$subexpression$1",
        "symbols": [lexer.has("comma") ? {
          type: "comma"
        } : comma, "expression"]
      }, {
        "name": "arglist$ebnf$2",
        "symbols": ["arglist$ebnf$2", "arglist$ebnf$2$subexpression$1"],
        "postprocess": function arrpush(d) {
          return d[0].concat([d[1]]);
        }
      }, {
        "name": "arglist",
        "symbols": ["arglist$ebnf$1", "arglist$ebnf$2"],
        "postprocess": function postprocess(data) {
          return {
            type: "arg-list",
            args: [data[0]].concat(_toConsumableArray(data[1].flat().filter(function (a) {
              return a.type !== 'comma';
            })))
          };
        }
      }, {
        "name": "literal",
        "symbols": [lexer.has("sglstring") ? {
          type: "sglstring"
        } : sglstring],
        "postprocess": function postprocess(data) {
          return {
            type: 'literal',
            value: data[0]
          };
        }
      }, {
        "name": "literal",
        "symbols": [lexer.has("dblstring") ? {
          type: "dblstring"
        } : dblstring],
        "postprocess": function postprocess(data) {
          return {
            type: 'literal',
            value: data[0]
          };
        }
      }, {
        "name": "literal",
        "symbols": [lexer.has("bool") ? {
          type: "bool"
        } : bool],
        "postprocess": function postprocess(data) {
          return {
            type: 'literal',
            value: data[0]
          };
        }
      }, {
        "name": "literal",
        "symbols": [lexer.has("null") ? {
          type: "null"
        } : null],
        "postprocess": function postprocess(data) {
          return {
            type: 'literal',
            value: data[0]
          };
        }
      }, {
        "name": "literal",
        "symbols": [lexer.has("number") ? {
          type: "number"
        } : number],
        "postprocess": function postprocess(data) {
          return {
            type: 'literal',
            value: data[0]
          };
        }
      }, {
        "name": "dotops",
        "symbols": [lexer.has("dotbinop") ? {
          type: "dotbinop"
        } : dotbinop],
        "postprocess": function postprocess(data) {
          return {
            type: 'dot',
            value: data[0]
          };
        }
      }, {
        "name": "dotops",
        "symbols": [lexer.has("dotstarbinop") ? {
          type: "dotstarbinop"
        } : dotstarbinop],
        "postprocess": function postprocess(data) {
          return {
            type: 'dotstar',
            value: data[0]
          };
        }
      }, {
        "name": "dotops",
        "symbols": [lexer.has("dotdotstarbinop") ? {
          type: "dotdotstarbinop"
        } : dotdotstarbinop],
        "postprocess": function postprocess(data) {
          return {
            type: 'dotdotstar',
            value: data[0]
          };
        }
      }, {
        "name": "dotops",
        "symbols": [lexer.has("dotdotbinop") ? {
          type: "dotdotbinop"
        } : dotdotbinop],
        "postprocess": function postprocess(data) {
          return {
            type: 'dotdot',
            value: data[0]
          };
        }
      }],
      ParserStart: "dweeve"
    };
    /***/
  },

  /***/
  "./src/app/dweeve/src/transpiler/transpiler-conditionals.js":
  /*!******************************************************************!*\
    !*** ./src/app/dweeve/src/transpiler/transpiler-conditionals.js ***!
    \******************************************************************/

  /*! no static exports found */

  /***/
  function srcAppDweeveSrcTranspilerTranspilerConditionalsJs(module, exports, __webpack_require__) {
    var Dictionary = __webpack_require__(
    /*! dictionaryjs */
    "./node_modules/dictionaryjs/Dictionary.js");

    var codeGenFor = new Dictionary.Dictionary();
    var codeGenAfter = new Dictionary.Dictionary();

    codeGenFor['if-conditional'] = function (context, code) {
      var op = context.node;
      code.addCode('( () =>  { if (');
      context.compiler({
        parentType: 'if-conidtion',
        node: context.node.condition,
        compiler: context.compiler
      }, code);
      code.addCode(') { return (');
      context.compiler({
        parentType: 'if-then',
        node: context.node.then,
        compiler: context.compiler
      }, code);
      code.addCode(');} else { return (');
      context.compiler({
        parentType: 'if-else',
        node: context.node.else,
        compiler: context.compiler
      }, code);
      code.addCode(');} } ) ()');
      return false;
    };

    codeGenFor['pattern-match'] = function (context, code) {
      var cn = context.node;
      code.addCode('( () => { let $ = (');
      context.compiler({
        parentType: 'if-condition',
        node: cn.input,
        compiler: context.compiler
      }, code);
      code.addCode('); \n');

      if (Array.isArray(cn.cases)) {
        cn.cases.forEach(function (c) {
          if (c.match.type === 'match-if-exp') emitcodeMatchIfExp(code, c, context);else if (c.match.type === 'match-regex') emitcodeMatchRegex(code, c, context);else if (c.match.type === 'match-literal') emitcodeMatchLiteral(code, c, context);else if (c.match.type === 'match-type') emitcodeMatchType(code, c, context);
        });
      }

      ;

      if (cn.else !== null) {
        code.addCode('return (');
        context.compiler({
          parentType: 'if-else',
          node: cn.else,
          compiler: context.compiler
        }, code);
        code.addCode(');');
      }

      code.addCode('} ) ()');
      return false;
    };

    function emitcodeMatchType(code, c, context) {
      code.addCode('{');
      if (c.match.var !== null) code.addCode(' let ' + c.match.var.value + ' = $; ');
      code.addCode(' if ( typeof $ === "' + c.match.typeName.value.toLowerCase() + '") { return (');
      context.compiler({
        parentType: 'if-exp-match-result',
        node: c.result,
        compiler: context.compiler
      }, code);
      code.addCode(') } }\n');
    }

    function emitcodeMatchLiteral(code, c, context) {
      code.addCode('{');
      if (c.match.var !== null) code.addCode(' let ' + c.match.var.value + ' = $; ');
      code.addCode(' if ( $ ===' + c.match.litMatch.value.value + ') { return (');
      context.compiler({
        parentType: 'if-exp-match-result',
        node: c.result,
        compiler: context.compiler
      }, code);
      code.addCode(') } }\n');
    }

    function emitcodeMatchRegex(code, c, context) {
      code.addCode('{ try {');
      code.addCode(' let ' + c.match.var.value + ' = $.match(' + c.match.regex + '); ');
      code.addCode(' if (' + c.match.var.value + ' !==null) { return (');
      context.compiler({
        parentType: 'if-exp-match-result',
        node: c.result,
        compiler: context.compiler
      }, code);
      code.addCode(') } } catch {} }\n');
    }

    function emitcodeMatchIfExp(code, c, context) {
      code.addCode('{');
      if (c.match.var !== null) code.addCode(' let ' + c.match.var.value + ' = $; ');
      code.addCode(' if (');
      context.compiler({
        parentType: 'if-exp-match',
        node: c.match.expMatch,
        compiler: context.compiler
      }, code);
      code.addCode(') { return (');
      context.compiler({
        parentType: 'if-exp-match-result',
        node: c.result,
        compiler: context.compiler
      }, code);
      code.addCode(') } }\n');
    }

    function addTranspilerFeatures(preDict, postDict) {
      for (k in codeGenFor) {
        preDict[k] = codeGenFor[k];
      }

      for (k in codeGenAfter) {
        postDict[k] = codeGenAfter[k];
      }
    }

    module.exports = {
      addTranspilerFeatures: addTranspilerFeatures
    };
    /***/
  },

  /***/
  "./src/app/dweeve/src/transpiler/transpiler-do-scope.js":
  /*!**************************************************************!*\
    !*** ./src/app/dweeve/src/transpiler/transpiler-do-scope.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function srcAppDweeveSrcTranspilerTranspilerDoScopeJs(module, exports, __webpack_require__) {
    var Dictionary = __webpack_require__(
    /*! dictionaryjs */
    "./node_modules/dictionaryjs/Dictionary.js");

    var codeGenFor = new Dictionary.Dictionary();
    var codeGenAfter = new Dictionary.Dictionary();

    codeGenFor['do-dweeve'] = function (context, code) {
      var doDweeve = context.node;
      var doCode = getSubCode(code);
      var doId = '__do' + code.doScopes.length;
      code.doScopes.push(_defineProperty({}, doId, doCode));
      doCode.addCode('let doScope = () => (');
      context.compiler({
        node: doDweeve.dweeve,
        compiler: context.compiler
      }, doCode);
      doCode.addCode(')\n');
      args = '';

      if (context.argList !== undefined && context.argList != null) {
        context.argList.forEach(function (arg) {
          if (arg !== null) args += ', ' + arg.value + ': ' + arg.value;
        });
      }

      code.addCode("__execDoScope(`\n" + doCode.decs + '\n' + doCode.text + '`, {payload: payload' + args + '} )');
      return false;
    };

    function getSubCode(code) {
      var subCode = {
        text: '',
        decs: '',
        lines: code.lines,
        doScopes: code.doScopes
      };

      subCode.addCode = function (text) {
        subCode.text += text;
        subCode.lines.push(text);
      };

      return subCode;
    }

    function addTranspilerFeatures(preDict, postDict) {
      for (k in codeGenFor) {
        preDict[k] = codeGenFor[k];
      }

      for (k in codeGenAfter) {
        postDict[k] = codeGenAfter[k];
      }
    }

    module.exports = {
      addTranspilerFeatures: addTranspilerFeatures
    };
    /***/
  },

  /***/
  "./src/app/dweeve/src/transpiler/transpiler-expressions.js":
  /*!*****************************************************************!*\
    !*** ./src/app/dweeve/src/transpiler/transpiler-expressions.js ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function srcAppDweeveSrcTranspilerTranspilerExpressionsJs(module, exports, __webpack_require__) {
    var Dictionary = __webpack_require__(
    /*! dictionaryjs */
    "./node_modules/dictionaryjs/Dictionary.js");

    var codeGenFor = new Dictionary.Dictionary();
    var codeGenAfter = new Dictionary.Dictionary();

    codeGenFor['member-list'] = function (context, code) {
      if (context.node.members.length > 1) {
        code.addCode('{ "__extra-wrapped-list": true, \n');
        var idx = 0;
        context.node.members.forEach(function (m) {
          code.addCode('"__key' + idx++ + '": {');
          context.compiler({
            parentType: 'obj-member',
            node: m,
            compiler: context.compiler
          }, code);
          code.addCode('},\n ');
        });
        code.addCode('}\n');
      } else if (context.node.members.length === 1) {
        code.addCode('{');
        context.compiler({
          parentType: 'obj-member',
          node: context.node.members[0],
          compiler: context.compiler
        }, code);
        code.addCode('}');
      }

      return false;
    };

    codeGenFor['array'] = function (context, code) {
      code.addCode('[');
      context.node.members.args.forEach(function (m) {
        context.compiler({
          parentType: 'array-member',
          node: m,
          compiler: context.compiler
        }, code);
        code.addCode(', ');
      });
      code.addCode(']');
      return false;
    };

    codeGenFor['default-expression'] = function (context, code) {
      code.addCode('( () => { let d = (');
      context.compiler({
        parentType: 'default-expression-default',
        node: context.node.default,
        compiler: context.compiler
      }, code);
      code.addCode('); try { let v = (');
      context.compiler({
        parentType: 'default-expression-value',
        node: context.node.value,
        compiler: context.compiler
      }, code);
      code.addCode('); if (v!==null && v!==undefined) {return v;} else {return d;} } catch {return d} } )()\n ');
      return false;
    };

    codeGenFor['idx-identifier'] = function (context, code) {
      var id = context.node;
      code.addCode(id.ident.ident.value + '[');
      context.compiler({
        parentType: 'indexed-identifier',
        node: id.idx,
        compiler: context.compiler
      }, code);
      code.addCode(']');
      return false;
    };

    codeGenFor['lambda'] = function (context, code) {
      var lamda = context.node;
      code.addCode('(');

      if (lamda.args !== null && Array.isArray(lamda.args)) {
        var idx = 1;
        lamda.args.forEach(function (arg) {
          if (arg !== null) {
            code.addCode(arg.value);
            if (idx++ < lamda.args.length) code.addCode(', ');
          }
        });
      }

      code.addCode(') => (');
      context.compiler({
        parentType: 'lambda',
        node: lamda.expression,
        compiler: context.compiler
      }, code);
      code.addCode(')\n');
      return false;
    };

    codeGenFor['dynamic-key'] = function (context, code) {
      code.addCode('[');
      context.compiler({
        parentType: 'dynamic-key',
        node: context.node.value,
        compiler: context.compiler
      }, code);
      code.addCode(']: ');
      return false;
    }; // ( () => { try { return  key ;} catch { return 'bat'}; })()
    //codeGenAfter['member-list'] = (context, code) => { code.addCode('}\n') };


    codeGenAfter['key'] = function (context, code) {
      code.addCode(': ');
    }; //codeGenAfter['member'] = (context, code) => { code.addCode(',\n') };


    codeGenFor['word'] = function (context, code) {
      code.addCode(context.node.value);
    };

    codeGenFor['number'] = function (context, code) {
      code.addCode(context.node.value);
    };

    codeGenFor['dblstring'] = function (context, code) {
      code.addCode(context.node.value);
    };

    codeGenFor['sglstring'] = function (context, code) {
      code.addCode(context.node.value);
    };

    codeGenFor['bool'] = function (context, code) {
      code.addCode(context.node.value);
    };

    codeGenFor['null'] = function (context, code) {
      code.addCode(context.node.value);
    };

    function addTranspilerFeatures(preDict, postDict) {
      for (k in codeGenFor) {
        preDict[k] = codeGenFor[k];
      }

      for (k in codeGenAfter) {
        postDict[k] = codeGenAfter[k];
      }
    }

    module.exports = {
      addTranspilerFeatures: addTranspilerFeatures
    };
    /***/
  },

  /***/
  "./src/app/dweeve/src/transpiler/transpiler-funcs-and-selectors.js":
  /*!*************************************************************************!*\
    !*** ./src/app/dweeve/src/transpiler/transpiler-funcs-and-selectors.js ***!
    \*************************************************************************/

  /*! no static exports found */

  /***/
  function srcAppDweeveSrcTranspilerTranspilerFuncsAndSelectorsJs(module, exports, __webpack_require__) {
    var Dictionary = __webpack_require__(
    /*! dictionaryjs */
    "./node_modules/dictionaryjs/Dictionary.js");

    var codeGenFor = new Dictionary.Dictionary();
    var codeGenAfter = new Dictionary.Dictionary();

    codeGenFor['dot-op'] = function (context, code) {
      var op = context.node;

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

      context.compiler({
        parentType: 'dot-op-lhs',
        node: context.node.lhs,
        compiler: context.compiler
      }, code);
      code.addCode('), (\'');
      context.compiler({
        parentType: 'dot-top-rhs',
        node: context.node.rhs,
        compiler: context.compiler
      }, code);
      code.addCode('\')) )');
      return false;
    };

    codeGenFor['bin-op'] = function (context, code) {
      var op = context.node;
      context.compiler({
        node: op.lhs,
        compiler: context.compiler
      }, code);
      if (op.op.value === '++') // double plus for string concat will be single + for javascript
        code.addCode('+');else code.addCode(op.op.value);
      context.compiler({
        node: op.rhs,
        compiler: context.compiler
      }, code);
      return false;
    };

    codeGenFor['fun-call'] = function (context, code) {
      var op = context.node;
      context.compiler({
        node: op.fun,
        compiler: context.compiler
      }, code);
      code.addCode('(');

      if (op.args !== null && Array.isArray(op.args.args)) {
        var idx = 0;
        op.args.args.forEach(function (arg) {
          context.compiler({
            node: arg,
            compiler: context.compiler
          }, code);
          if (++idx < op.args.args.length) code.addCode(', ');
        });
      }

      code.addCode(')');
      return false;
    };

    function addTranspilerFeatures(preDict, postDict) {
      for (k in codeGenFor) {
        preDict[k] = codeGenFor[k];
      }

      for (k in codeGenAfter) {
        postDict[k] = codeGenAfter[k];
      }
    }

    module.exports = {
      addTranspilerFeatures: addTranspilerFeatures
    };
    /***/
  },

  /***/
  "./src/app/dweeve/src/transpiler/transpiler-header-decs.js":
  /*!*****************************************************************!*\
    !*** ./src/app/dweeve/src/transpiler/transpiler-header-decs.js ***!
    \*****************************************************************/

  /*! no static exports found */

  /***/
  function srcAppDweeveSrcTranspilerTranspilerHeaderDecsJs(module, exports, __webpack_require__) {
    var Dictionary = __webpack_require__(
    /*! dictionaryjs */
    "./node_modules/dictionaryjs/Dictionary.js");

    var codeGenFor = new Dictionary.Dictionary();
    var codeGenAfter = new Dictionary.Dictionary();

    codeGenFor['var-dec'] = function (context, code) {
      var op = context.node;
      var decCode = getSubCode(code);
      decCode.addCode('var ' + op.varName + ' = ');
      context.compiler({
        node: op.varVal,
        compiler: context.compiler
      }, decCode);
      decCode.addCode(';\n');
      code.decs += decCode.text;
      return false;
    };

    codeGenFor['fun-def'] = function (context, code) {
      var op = context.node;
      var decCode = getSubCode(code);
      decCode.addCode('\n function ' + op.func.value + '(');

      if (op.args !== null && Array.isArray(op.args)) {
        var idx = 1;
        op.args.forEach(function (arg) {
          if (arg !== null) {
            decCode.addCode(arg.value);
            if (idx++ < op.args.length) decCode.addCode(', ');
          }
        });
      }

      decCode.addCode(') { return ( \n');
      context.compiler({
        node: op.body,
        compiler: context.compiler,
        argList: op.args
      }, decCode);
      decCode.addCode(' ) }\n');
      code.decs += decCode.text;
      return false;
    };

    function getSubCode(code) {
      var subCode = {
        text: '',
        lines: code.lines,
        doScopes: code.doScopes
      };

      subCode.addCode = function (text) {
        subCode.text += text;
        subCode.lines.push(text);
      };

      return subCode;
    }

    function addTranspilerFeatures(preDict, postDict) {
      for (k in codeGenFor) {
        preDict[k] = codeGenFor[k];
      }

      for (k in codeGenAfter) {
        postDict[k] = codeGenAfter[k];
      }
    }

    module.exports = {
      addTranspilerFeatures: addTranspilerFeatures
    };
    /***/
  },

  /***/
  "./src/app/dweeve/src/transpiler/transpiler.js":
  /*!*****************************************************!*\
    !*** ./src/app/dweeve/src/transpiler/transpiler.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function srcAppDweeveSrcTranspilerTranspilerJs(module, exports, __webpack_require__) {
    var Dictionary = __webpack_require__(
    /*! dictionaryjs */
    "./node_modules/dictionaryjs/Dictionary.js");

    var HeaderFeatures = __webpack_require__(
    /*! ./transpiler-header-decs */
    "./src/app/dweeve/src/transpiler/transpiler-header-decs.js");

    var ConditionalsFeatures = __webpack_require__(
    /*! ./transpiler-conditionals */
    "./src/app/dweeve/src/transpiler/transpiler-conditionals.js");

    var FuncAndSelectorFeatures = __webpack_require__(
    /*! ./transpiler-funcs-and-selectors */
    "./src/app/dweeve/src/transpiler/transpiler-funcs-and-selectors.js");

    var ExpressionFeatures = __webpack_require__(
    /*! ./transpiler-expressions */
    "./src/app/dweeve/src/transpiler/transpiler-expressions.js");

    var DoScopeFeatures = __webpack_require__(
    /*! ./transpiler-do-scope */
    "./src/app/dweeve/src/transpiler/transpiler-do-scope.js");

    var codeGenFor = new Dictionary.Dictionary();
    var codeGenAfter = new Dictionary.Dictionary();
    HeaderFeatures.addTranspilerFeatures(codeGenFor, codeGenAfter);
    ConditionalsFeatures.addTranspilerFeatures(codeGenFor, codeGenAfter);
    FuncAndSelectorFeatures.addTranspilerFeatures(codeGenFor, codeGenAfter);
    ExpressionFeatures.addTranspilerFeatures(codeGenFor, codeGenAfter);
    DoScopeFeatures.addTranspilerFeatures(codeGenFor, codeGenAfter);

    function transpile(dweeve) {
      var code = {
        text: "dweeve = () => ( ",
        decs: '',
        lines: [],
        doScopes: []
      };

      code.addCode = function (text) {
        code.text += text;
        code.lines.push(text);
      };

      var context = {
        parentType: 'dweeve',
        node: dweeve,
        compiler: recursiveTranspile
      };
      recursiveTranspile(context, code);
      code.text += "\n);";
      return code;
    }

    function recursiveTranspile(context, code) {
      var n = context.node;
      if (n === undefined || n === null || n.type === undefined) return;
      var goDeep = true;
      var codeGen = codeGenFor[n.type];
      if (codeGen !== undefined) goDeep = codeGen(context, code); // if we have a token leaf node, do nothing, otherwise do some compiling!

      if (n.hasOwnProperty('text') && n.hasOwnProperty('value')) {} else if (goDeep) {
        for (var key in n) {
          if (key !== 'type' && n.hasOwnProperty(key)) {
            var v = n[key];

            if (Array.isArray(v)) {
              v.forEach(function (an) {
                return context.compiler({
                  parentType: n.type,
                  node: an,
                  compiler: context.compiler
                }, code);
              });
            } else {
              context.compiler({
                parentType: n.type,
                node: v,
                compiler: context.compiler
              }, code);
            }
          }
        }
      }

      var post = codeGenAfter[n.type];
      if (post !== undefined) post(context, code);
    }

    ;
    module.exports = {
      transpile: transpile
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\ian\source\repos\dweeve-ui\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map