/******/
(function (modules) {
  // webpackBootstrap
  /******/
  // install a JSONP callback for chunk loading
  /******/
  function webpackJsonpCallback(data) {
    /******/
    var chunkIds = data[0];
    /******/
    var moreModules = data[1];
    /******/
    var executeModules = data[2];
    /******/
    /******/
    // add "moreModules" to the modules object,
    /******/
    // then flag all "chunkIds" as loaded and fire callback
    /******/
    var moduleId,
      chunkId,
      i = 0,
      resolves = [];
    /******/
    for (; i < chunkIds.length; i++) {
      /******/
      chunkId = chunkIds[i];
      /******/
      if (
        Object.prototype.hasOwnProperty.call(
          installedChunks,
          chunkId
        ) &&
        installedChunks[chunkId]
      ) {
        /******/
        resolves.push(installedChunks[chunkId][0]);
        /******/
      }
      /******/
      installedChunks[chunkId] = 0;
      /******/
    }
    /******/
    for (moduleId in moreModules) {
      /******/
      if (
        Object.prototype.hasOwnProperty.call(moreModules, moduleId)
      ) {
        /******/
        modules[moduleId] = moreModules[moduleId];
        /******/
      }
      /******/
    }
    /******/
    if (parentJsonpFunction) parentJsonpFunction(data);
    /******/
    /******/
    while (resolves.length) {
      /******/
      resolves.shift()();
      /******/
    }
    /******/
    /******/
    // add entry modules from loaded chunk to deferred list
    /******/
    deferredModules.push.apply(deferredModules, executeModules || []);
    /******/
    /******/
    // run deferred modules when all chunks ready
    /******/
    return checkDeferredModules();
    /******/
  } /******/
  function checkDeferredModules() {
    /******/
    var result;
    /******/
    for (var i = 0; i < deferredModules.length; i++) {
      /******/
      var deferredModule = deferredModules[i];
      /******/
      var fulfilled = true;
      /******/
      for (var j = 1; j < deferredModule.length; j++) {
        /******/
        var depId = deferredModule[j];
        /******/
        if (installedChunks[depId] !== 0) fulfilled = false;
        /******/
      }
      /******/
      if (fulfilled) {
        /******/
        deferredModules.splice(i--, 1);
        /******/
        result = __webpack_require__(
          (__webpack_require__.s = deferredModule[0])
        );
        /******/
      }
      /******/
    }
    /******/
    /******/
    return result;
    /******/
  }
  /******/
  /******/
  // The module cache
  /******/
  var installedModules = {};
  /******/
  /******/
  // object to store loaded and loading chunks
  /******/
  // undefined = chunk not loaded, null = chunk preloaded/prefetched
  /******/
  // Promise = chunk loading, 0 = chunk loaded
  /******/
  var installedChunks = {
    /******/
    scripts: 0 /******/,
  };
  /******/
  /******/
  var deferredModules = [];
  /******/
  /******/
  // The require function
  /******/
  function __webpack_require__(moduleId) {
    /******/
    /******/
    // Check if module is in cache
    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)
    /******/
    var module = (installedModules[moduleId] = {
      /******/
      i: moduleId,
      /******/
      l: false,
      /******/
      exports: {} /******/,
    });
    /******/
    /******/
    // Execute the module function
    /******/
    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/
    // Flag the module as loaded
    /******/
    module.l = true;
    /******/
    /******/
    // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /******/
  /******/
  // expose the modules object (__webpack_modules__)
  /******/
  __webpack_require__.m = modules;
  /******/
  /******/
  // expose the module cache
  /******/
  __webpack_require__.c = installedModules;
  /******/
  /******/
  // define getter function for harmony exports
  /******/
  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  };
  /******/
  /******/
  // define __esModule on exports
  /******/
  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module',
      });
      /******/
    }
    /******/
    Object.defineProperty(exports, '__esModule', {
      value: true,
    });
    /******/
  };
  /******/
  /******/
  // create a fake namespace object
  /******/
  // mode & 1: value is a module id, require it
  /******/
  // mode & 2: merge all properties of value into the ns
  /******/
  // mode & 4: return value when already ns object
  /******/
  // mode & 8|1: behave like require
  /******/
  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/
    if (mode & 8) return value;
    /******/
    if (
      mode & 4 &&
      typeof value === 'object' &&
      value &&
      value.__esModule
    )
      return value;
    /******/
    var ns = Object.create(null);
    /******/
    __webpack_require__.r(ns);
    /******/
    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value,
    });
    /******/
    if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function (key) {
            return value[key];
          }.bind(null, key)
        );
    /******/
    return ns;
    /******/
  };
  /******/
  /******/
  // getDefaultExport function for compatibility with non-harmony modules
  /******/
  __webpack_require__.n = function (module) {
    /******/
    var getter =
      module && module.__esModule /******/
        ? function getDefault() {
            return module['default'];
          }
        : /******/
          function getModuleExports() {
            return module;
          };
    /******/
    __webpack_require__.d(getter, 'a', getter);
    /******/
    return getter;
    /******/
  };
  /******/
  /******/
  // Object.prototype.hasOwnProperty.call
  /******/
  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/
  // __webpack_public_path__
  /******/
  __webpack_require__.p = '';
  /******/
  /******/
  var jsonpArray = (window['webpackJsonp'] =
    window['webpackJsonp'] || []);
  /******/
  var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
  /******/
  jsonpArray.push = webpackJsonpCallback;
  /******/
  jsonpArray = jsonpArray.slice();
  /******/
  for (var i = 0; i < jsonpArray.length; i++)
    webpackJsonpCallback(jsonpArray[i]);
  /******/
  var parentJsonpFunction = oldJsonpFunction;
  /******/
  /******/
  /******/
  // add entry module to deferred list
  /******/
  deferredModules.push(['./resources/assets/js/main.js', 'vendor']);
  /******/
  // run deferred modules when ready
  /******/
  return checkDeferredModules();
  /******/
})(
  /************************************************************************/
  /******/
  {
    /***/
    /*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
    './node_modules/@babel/runtime/helpers/asyncToGenerator.js':
      /*! no static exports found */
      /***/
      function (module, exports) {
        function asyncGeneratorStep(
          gen,
          resolve,
          reject,
          _next,
          _throw,
          key,
          arg
        ) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }
        function _asyncToGenerator(fn) {
          return function () {
            var self = this,
              args = arguments;
            return new Promise(function (resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  'next',
                  value
                );
              }
              function _throw(err) {
                asyncGeneratorStep(
                  gen,
                  resolve,
                  reject,
                  _next,
                  _throw,
                  'throw',
                  err
                );
              }
              _next(undefined);
            });
          };
        }
        (module.exports = _asyncToGenerator),
          (module.exports.__esModule = true),
          (module.exports['default'] = module.exports);

        /***/
      },

    /***/
    /*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
    './node_modules/@babel/runtime/helpers/defineProperty.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        var toPropertyKey = __webpack_require__(
          /*! ./toPropertyKey.js */
          './node_modules/@babel/runtime/helpers/toPropertyKey.js'
        );
        function _defineProperty(obj, key, value) {
          key = toPropertyKey(key);
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true,
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        (module.exports = _defineProperty),
          (module.exports.__esModule = true),
          (module.exports['default'] = module.exports);

        /***/
      },

    /***/
    /*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
    './node_modules/@babel/runtime/helpers/toPrimitive.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        var _typeof = __webpack_require__(
          /*! ./typeof.js */
          './node_modules/@babel/runtime/helpers/typeof.js'
        )['default'];
        function toPrimitive(t, r) {
          if ('object' != _typeof(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var i = e.call(t, r || 'default');
            if ('object' != _typeof(i)) return i;
            throw new TypeError(
              '@@toPrimitive must return a primitive value.'
            );
          }
          return ('string' === r ? String : Number)(t);
        }
        (module.exports = toPrimitive),
          (module.exports.__esModule = true),
          (module.exports['default'] = module.exports);

        /***/
      },

    /***/
    /*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
    './node_modules/@babel/runtime/helpers/toPropertyKey.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        var _typeof = __webpack_require__(
          /*! ./typeof.js */
          './node_modules/@babel/runtime/helpers/typeof.js'
        )['default'];
        var toPrimitive = __webpack_require__(
          /*! ./toPrimitive.js */
          './node_modules/@babel/runtime/helpers/toPrimitive.js'
        );
        function toPropertyKey(t) {
          var i = toPrimitive(t, 'string');
          return 'symbol' == _typeof(i) ? i : i + '';
        }
        (module.exports = toPropertyKey),
          (module.exports.__esModule = true),
          (module.exports['default'] = module.exports);

        /***/
      },

    /***/
    /*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
    './node_modules/@babel/runtime/helpers/typeof.js':
      /*! no static exports found */
      /***/
      function (module, exports) {
        function _typeof(o) {
          '@babel/helpers - typeof';

          return (
            ((module.exports = _typeof =
              'function' == typeof Symbol &&
              'symbol' == typeof Symbol.iterator
                ? function (o) {
                    return typeof o;
                  }
                : function (o) {
                    return o &&
                      'function' == typeof Symbol &&
                      o.constructor === Symbol &&
                      o !== Symbol.prototype
                      ? 'symbol'
                      : typeof o;
                  }),
            (module.exports.__esModule = true),
            (module.exports['default'] = module.exports)),
            _typeof(o)
          );
        }
        (module.exports = _typeof),
          (module.exports.__esModule = true),
          (module.exports['default'] = module.exports);

        /***/
      },

    /***/
    /*!******************************************************!*\
  !*** ./node_modules/@vimeo/player/dist/player.es.js ***!
  \******************************************************/
    './node_modules/@vimeo/player/dist/player.es.js':
      /*! exports provided: default */
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */
        (function (global, setImmediate) {
          /*! @vimeo/player v2.22.0 | (c) 2024 Vimeo | MIT License | https://github.com/vimeo/player.js */
          function ownKeys(object, enumerableOnly) {
            var keys = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
              var symbols = Object.getOwnPropertySymbols(object);
              enumerableOnly &&
                (symbols = symbols.filter(function (sym) {
                  return Object.getOwnPropertyDescriptor(
                    object,
                    sym
                  ).enumerable;
                })),
                keys.push.apply(keys, symbols);
            }
            return keys;
          }
          function _objectSpread2(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? ownKeys(Object(source), !0).forEach(function (key) {
                    _defineProperty(target, key, source[key]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    target,
                    Object.getOwnPropertyDescriptors(source)
                  )
                : ownKeys(Object(source)).forEach(function (key) {
                    Object.defineProperty(
                      target,
                      key,
                      Object.getOwnPropertyDescriptor(source, key)
                    );
                  });
            }
            return target;
          }
          function _regeneratorRuntime() {
            _regeneratorRuntime = function () {
              return exports;
            };
            var exports = {},
              Op = Object.prototype,
              hasOwn = Op.hasOwnProperty,
              defineProperty =
                Object.defineProperty ||
                function (obj, key, desc) {
                  obj[key] = desc.value;
                },
              $Symbol = 'function' == typeof Symbol ? Symbol : {},
              iteratorSymbol = $Symbol.iterator || '@@iterator',
              asyncIteratorSymbol =
                $Symbol.asyncIterator || '@@asyncIterator',
              toStringTagSymbol =
                $Symbol.toStringTag || '@@toStringTag';
            function define(obj, key, value) {
              return (
                Object.defineProperty(obj, key, {
                  value: value,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                }),
                obj[key]
              );
            }
            try {
              define({}, '');
            } catch (err) {
              define = function (obj, key, value) {
                return (obj[key] = value);
              };
            }
            function wrap(innerFn, outerFn, self, tryLocsList) {
              var protoGenerator =
                  outerFn && outerFn.prototype instanceof Generator
                    ? outerFn
                    : Generator,
                generator = Object.create(protoGenerator.prototype),
                context = new Context(tryLocsList || []);
              return (
                defineProperty(generator, '_invoke', {
                  value: makeInvokeMethod(innerFn, self, context),
                }),
                generator
              );
            }
            function tryCatch(fn, obj, arg) {
              try {
                return {
                  type: 'normal',
                  arg: fn.call(obj, arg),
                };
              } catch (err) {
                return {
                  type: 'throw',
                  arg: err,
                };
              }
            }
            exports.wrap = wrap;
            var ContinueSentinel = {};
            function Generator() {}
            function GeneratorFunction() {}
            function GeneratorFunctionPrototype() {}
            var IteratorPrototype = {};
            define(IteratorPrototype, iteratorSymbol, function () {
              return this;
            });
            var getProto = Object.getPrototypeOf,
              NativeIteratorPrototype =
                getProto && getProto(getProto(values([])));
            NativeIteratorPrototype &&
              NativeIteratorPrototype !== Op &&
              hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
              (IteratorPrototype = NativeIteratorPrototype);
            var Gp =
              (GeneratorFunctionPrototype.prototype =
              Generator.prototype =
                Object.create(IteratorPrototype));
            function defineIteratorMethods(prototype) {
              ['next', 'throw', 'return'].forEach(function (method) {
                define(prototype, method, function (arg) {
                  return this._invoke(method, arg);
                });
              });
            }
            function AsyncIterator(generator, PromiseImpl) {
              function invoke(method, arg, resolve, reject) {
                var record = tryCatch(
                  generator[method],
                  generator,
                  arg
                );
                if ('throw' !== record.type) {
                  var result = record.arg,
                    value = result.value;
                  return value &&
                    'object' == typeof value &&
                    hasOwn.call(value, '__await')
                    ? PromiseImpl.resolve(value.__await).then(
                        function (value) {
                          invoke('next', value, resolve, reject);
                        },
                        function (err) {
                          invoke('throw', err, resolve, reject);
                        }
                      )
                    : PromiseImpl.resolve(value).then(
                        function (unwrapped) {
                          (result.value = unwrapped), resolve(result);
                        },
                        function (error) {
                          return invoke(
                            'throw',
                            error,
                            resolve,
                            reject
                          );
                        }
                      );
                }
                reject(record.arg);
              }
              var previousPromise;
              defineProperty(this, '_invoke', {
                value: function (method, arg) {
                  function callInvokeWithMethodAndArg() {
                    return new PromiseImpl(function (
                      resolve,
                      reject
                    ) {
                      invoke(method, arg, resolve, reject);
                    });
                  }
                  return (previousPromise = previousPromise
                    ? previousPromise.then(
                        callInvokeWithMethodAndArg,
                        callInvokeWithMethodAndArg
                      )
                    : callInvokeWithMethodAndArg());
                },
              });
            }
            function makeInvokeMethod(innerFn, self, context) {
              var state = 'suspendedStart';
              return function (method, arg) {
                if ('executing' === state)
                  throw new Error('Generator is already running');
                if ('completed' === state) {
                  if ('throw' === method) throw arg;
                  return doneResult();
                }
                for (context.method = method, context.arg = arg; ; ) {
                  var delegate = context.delegate;
                  if (delegate) {
                    var delegateResult = maybeInvokeDelegate(
                      delegate,
                      context
                    );
                    if (delegateResult) {
                      if (delegateResult === ContinueSentinel)
                        continue;
                      return delegateResult;
                    }
                  }
                  if ('next' === context.method)
                    context.sent = context._sent = context.arg;
                  else if ('throw' === context.method) {
                    if ('suspendedStart' === state)
                      throw ((state = 'completed'), context.arg);
                    context.dispatchException(context.arg);
                  } else
                    'return' === context.method &&
                      context.abrupt('return', context.arg);
                  state = 'executing';
                  var record = tryCatch(innerFn, self, context);
                  if ('normal' === record.type) {
                    if (
                      ((state = context.done
                        ? 'completed'
                        : 'suspendedYield'),
                      record.arg === ContinueSentinel)
                    )
                      continue;
                    return {
                      value: record.arg,
                      done: context.done,
                    };
                  }
                  'throw' === record.type &&
                    ((state = 'completed'),
                    (context.method = 'throw'),
                    (context.arg = record.arg));
                }
              };
            }
            function maybeInvokeDelegate(delegate, context) {
              var methodName = context.method,
                method = delegate.iterator[methodName];
              if (undefined === method)
                return (
                  (context.delegate = null),
                  ('throw' === methodName &&
                    delegate.iterator.return &&
                    ((context.method = 'return'),
                    (context.arg = undefined),
                    maybeInvokeDelegate(delegate, context),
                    'throw' === context.method)) ||
                    ('return' !== methodName &&
                      ((context.method = 'throw'),
                      (context.arg = new TypeError(
                        "The iterator does not provide a '" +
                          methodName +
                          "' method"
                      )))),
                  ContinueSentinel
                );
              var record = tryCatch(
                method,
                delegate.iterator,
                context.arg
              );
              if ('throw' === record.type)
                return (
                  (context.method = 'throw'),
                  (context.arg = record.arg),
                  (context.delegate = null),
                  ContinueSentinel
                );
              var info = record.arg;
              return info
                ? info.done
                  ? ((context[delegate.resultName] = info.value),
                    (context.next = delegate.nextLoc),
                    'return' !== context.method &&
                      ((context.method = 'next'),
                      (context.arg = undefined)),
                    (context.delegate = null),
                    ContinueSentinel)
                  : info
                : ((context.method = 'throw'),
                  (context.arg = new TypeError(
                    'iterator result is not an object'
                  )),
                  (context.delegate = null),
                  ContinueSentinel);
            }
            function pushTryEntry(locs) {
              var entry = {
                tryLoc: locs[0],
              };
              1 in locs && (entry.catchLoc = locs[1]),
                2 in locs &&
                  ((entry.finallyLoc = locs[2]),
                  (entry.afterLoc = locs[3])),
                this.tryEntries.push(entry);
            }
            function resetTryEntry(entry) {
              var record = entry.completion || {};
              (record.type = 'normal'),
                delete record.arg,
                (entry.completion = record);
            }
            function Context(tryLocsList) {
              (this.tryEntries = [
                {
                  tryLoc: 'root',
                },
              ]),
                tryLocsList.forEach(pushTryEntry, this),
                this.reset(!0);
            }
            function values(iterable) {
              if (iterable) {
                var iteratorMethod = iterable[iteratorSymbol];
                if (iteratorMethod)
                  return iteratorMethod.call(iterable);
                if ('function' == typeof iterable.next)
                  return iterable;
                if (!isNaN(iterable.length)) {
                  var i = -1,
                    next = function next() {
                      for (; ++i < iterable.length; )
                        if (hasOwn.call(iterable, i))
                          return (
                            (next.value = iterable[i]),
                            (next.done = !1),
                            next
                          );
                      return (
                        (next.value = undefined),
                        (next.done = !0),
                        next
                      );
                    };
                  return (next.next = next);
                }
              }
              return {
                next: doneResult,
              };
            }
            function doneResult() {
              return {
                value: undefined,
                done: !0,
              };
            }
            return (
              (GeneratorFunction.prototype =
                GeneratorFunctionPrototype),
              defineProperty(Gp, 'constructor', {
                value: GeneratorFunctionPrototype,
                configurable: !0,
              }),
              defineProperty(
                GeneratorFunctionPrototype,
                'constructor',
                {
                  value: GeneratorFunction,
                  configurable: !0,
                }
              ),
              (GeneratorFunction.displayName = define(
                GeneratorFunctionPrototype,
                toStringTagSymbol,
                'GeneratorFunction'
              )),
              (exports.isGeneratorFunction = function (genFun) {
                var ctor =
                  'function' == typeof genFun && genFun.constructor;
                return (
                  !!ctor &&
                  (ctor === GeneratorFunction ||
                    'GeneratorFunction' ===
                      (ctor.displayName || ctor.name))
                );
              }),
              (exports.mark = function (genFun) {
                return (
                  Object.setPrototypeOf
                    ? Object.setPrototypeOf(
                        genFun,
                        GeneratorFunctionPrototype
                      )
                    : ((genFun.__proto__ =
                        GeneratorFunctionPrototype),
                      define(
                        genFun,
                        toStringTagSymbol,
                        'GeneratorFunction'
                      )),
                  (genFun.prototype = Object.create(Gp)),
                  genFun
                );
              }),
              (exports.awrap = function (arg) {
                return {
                  __await: arg,
                };
              }),
              defineIteratorMethods(AsyncIterator.prototype),
              define(
                AsyncIterator.prototype,
                asyncIteratorSymbol,
                function () {
                  return this;
                }
              ),
              (exports.AsyncIterator = AsyncIterator),
              (exports.async = function (
                innerFn,
                outerFn,
                self,
                tryLocsList,
                PromiseImpl
              ) {
                void 0 === PromiseImpl && (PromiseImpl = Promise);
                var iter = new AsyncIterator(
                  wrap(innerFn, outerFn, self, tryLocsList),
                  PromiseImpl
                );
                return exports.isGeneratorFunction(outerFn)
                  ? iter
                  : iter.next().then(function (result) {
                      return result.done ? result.value : iter.next();
                    });
              }),
              defineIteratorMethods(Gp),
              define(Gp, toStringTagSymbol, 'Generator'),
              define(Gp, iteratorSymbol, function () {
                return this;
              }),
              define(Gp, 'toString', function () {
                return '[object Generator]';
              }),
              (exports.keys = function (val) {
                var object = Object(val),
                  keys = [];
                for (var key in object) keys.push(key);
                return (
                  keys.reverse(),
                  function next() {
                    for (; keys.length; ) {
                      var key = keys.pop();
                      if (key in object)
                        return (
                          (next.value = key), (next.done = !1), next
                        );
                    }
                    return (next.done = !0), next;
                  }
                );
              }),
              (exports.values = values),
              (Context.prototype = {
                constructor: Context,
                reset: function (skipTempReset) {
                  if (
                    ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = undefined),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = 'next'),
                    (this.arg = undefined),
                    this.tryEntries.forEach(resetTryEntry),
                    !skipTempReset)
                  )
                    for (var name in this)
                      't' === name.charAt(0) &&
                        hasOwn.call(this, name) &&
                        !isNaN(+name.slice(1)) &&
                        (this[name] = undefined);
                },
                stop: function () {
                  this.done = !0;
                  var rootRecord = this.tryEntries[0].completion;
                  if ('throw' === rootRecord.type)
                    throw rootRecord.arg;
                  return this.rval;
                },
                dispatchException: function (exception) {
                  if (this.done) throw exception;
                  var context = this;
                  function handle(loc, caught) {
                    return (
                      (record.type = 'throw'),
                      (record.arg = exception),
                      (context.next = loc),
                      caught &&
                        ((context.method = 'next'),
                        (context.arg = undefined)),
                      !!caught
                    );
                  }
                  for (
                    var i = this.tryEntries.length - 1;
                    i >= 0;
                    --i
                  ) {
                    var entry = this.tryEntries[i],
                      record = entry.completion;
                    if ('root' === entry.tryLoc) return handle('end');
                    if (entry.tryLoc <= this.prev) {
                      var hasCatch = hasOwn.call(entry, 'catchLoc'),
                        hasFinally = hasOwn.call(entry, 'finallyLoc');
                      if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc)
                          return handle(entry.catchLoc, !0);
                        if (this.prev < entry.finallyLoc)
                          return handle(entry.finallyLoc);
                      } else if (hasCatch) {
                        if (this.prev < entry.catchLoc)
                          return handle(entry.catchLoc, !0);
                      } else {
                        if (!hasFinally)
                          throw new Error(
                            'try statement without catch or finally'
                          );
                        if (this.prev < entry.finallyLoc)
                          return handle(entry.finallyLoc);
                      }
                    }
                  }
                },
                abrupt: function (type, arg) {
                  for (
                    var i = this.tryEntries.length - 1;
                    i >= 0;
                    --i
                  ) {
                    var entry = this.tryEntries[i];
                    if (
                      entry.tryLoc <= this.prev &&
                      hasOwn.call(entry, 'finallyLoc') &&
                      this.prev < entry.finallyLoc
                    ) {
                      var finallyEntry = entry;
                      break;
                    }
                  }
                  finallyEntry &&
                    ('break' === type || 'continue' === type) &&
                    finallyEntry.tryLoc <= arg &&
                    arg <= finallyEntry.finallyLoc &&
                    (finallyEntry = null);
                  var record = finallyEntry
                    ? finallyEntry.completion
                    : {};
                  return (
                    (record.type = type),
                    (record.arg = arg),
                    finallyEntry
                      ? ((this.method = 'next'),
                        (this.next = finallyEntry.finallyLoc),
                        ContinueSentinel)
                      : this.complete(record)
                  );
                },
                complete: function (record, afterLoc) {
                  if ('throw' === record.type) throw record.arg;
                  return (
                    'break' === record.type ||
                    'continue' === record.type
                      ? (this.next = record.arg)
                      : 'return' === record.type
                      ? ((this.rval = this.arg = record.arg),
                        (this.method = 'return'),
                        (this.next = 'end'))
                      : 'normal' === record.type &&
                        afterLoc &&
                        (this.next = afterLoc),
                    ContinueSentinel
                  );
                },
                finish: function (finallyLoc) {
                  for (
                    var i = this.tryEntries.length - 1;
                    i >= 0;
                    --i
                  ) {
                    var entry = this.tryEntries[i];
                    if (entry.finallyLoc === finallyLoc)
                      return (
                        this.complete(
                          entry.completion,
                          entry.afterLoc
                        ),
                        resetTryEntry(entry),
                        ContinueSentinel
                      );
                  }
                },
                catch: function (tryLoc) {
                  for (
                    var i = this.tryEntries.length - 1;
                    i >= 0;
                    --i
                  ) {
                    var entry = this.tryEntries[i];
                    if (entry.tryLoc === tryLoc) {
                      var record = entry.completion;
                      if ('throw' === record.type) {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                      }
                      return thrown;
                    }
                  }
                  throw new Error('illegal catch attempt');
                },
                delegateYield: function (
                  iterable,
                  resultName,
                  nextLoc
                ) {
                  return (
                    (this.delegate = {
                      iterator: values(iterable),
                      resultName: resultName,
                      nextLoc: nextLoc,
                    }),
                    'next' === this.method && (this.arg = undefined),
                    ContinueSentinel
                  );
                },
              }),
              exports
            );
          }
          function asyncGeneratorStep(
            gen,
            resolve,
            reject,
            _next,
            _throw,
            key,
            arg
          ) {
            try {
              var info = gen[key](arg);
              var value = info.value;
            } catch (error) {
              reject(error);
              return;
            }
            if (info.done) {
              resolve(value);
            } else {
              Promise.resolve(value).then(_next, _throw);
            }
          }
          function _asyncToGenerator(fn) {
            return function () {
              var self = this,
                args = arguments;
              return new Promise(function (resolve, reject) {
                var gen = fn.apply(self, args);
                function _next(value) {
                  asyncGeneratorStep(
                    gen,
                    resolve,
                    reject,
                    _next,
                    _throw,
                    'next',
                    value
                  );
                }
                function _throw(err) {
                  asyncGeneratorStep(
                    gen,
                    resolve,
                    reject,
                    _next,
                    _throw,
                    'throw',
                    err
                  );
                }
                _next(undefined);
              });
            };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError(
                'Cannot call a class as a function'
              );
            }
          }
          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(
                target,
                _toPropertyKey(descriptor.key),
                descriptor
              );
            }
          }
          function _createClass(
            Constructor,
            protoProps,
            staticProps
          ) {
            if (protoProps)
              _defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, 'prototype', {
              writable: false,
            });
            return Constructor;
          }
          function _defineProperty(obj, key, value) {
            key = _toPropertyKey(key);
            if (key in obj) {
              Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true,
              });
            } else {
              obj[key] = value;
            }
            return obj;
          }
          function _inherits(subClass, superClass) {
            if (
              typeof superClass !== 'function' &&
              superClass !== null
            ) {
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  writable: true,
                  configurable: true,
                },
              }
            );
            Object.defineProperty(subClass, 'prototype', {
              writable: false,
            });
            if (superClass) _setPrototypeOf(subClass, superClass);
          }
          function _getPrototypeOf(o) {
            _getPrototypeOf = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function _getPrototypeOf(o) {
                  return o.__proto__ || Object.getPrototypeOf(o);
                };
            return _getPrototypeOf(o);
          }
          function _setPrototypeOf(o, p) {
            _setPrototypeOf = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function _setPrototypeOf(o, p) {
                  o.__proto__ = p;
                  return o;
                };
            return _setPrototypeOf(o, p);
          }
          function _isNativeReflectConstruct() {
            if (typeof Reflect === 'undefined' || !Reflect.construct)
              return false;
            if (Reflect.construct.sham) return false;
            if (typeof Proxy === 'function') return true;
            try {
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              );
              return true;
            } catch (e) {
              return false;
            }
          }
          function _construct(Parent, args, Class) {
            if (_isNativeReflectConstruct()) {
              _construct = Reflect.construct.bind();
            } else {
              _construct = function _construct(Parent, args, Class) {
                var a = [null];
                a.push.apply(a, args);
                var Constructor = Function.bind.apply(Parent, a);
                var instance = new Constructor();
                if (Class) _setPrototypeOf(instance, Class.prototype);
                return instance;
              };
            }
            return _construct.apply(null, arguments);
          }
          function _isNativeFunction(fn) {
            return (
              Function.toString.call(fn).indexOf('[native code]') !==
              -1
            );
          }
          function _wrapNativeSuper(Class) {
            var _cache =
              typeof Map === 'function' ? new Map() : undefined;
            _wrapNativeSuper = function _wrapNativeSuper(Class) {
              if (Class === null || !_isNativeFunction(Class))
                return Class;
              if (typeof Class !== 'function') {
                throw new TypeError(
                  'Super expression must either be null or a function'
                );
              }
              if (typeof _cache !== 'undefined') {
                if (_cache.has(Class)) return _cache.get(Class);
                _cache.set(Class, Wrapper);
              }
              function Wrapper() {
                return _construct(
                  Class,
                  arguments,
                  _getPrototypeOf(this).constructor
                );
              }
              Wrapper.prototype = Object.create(Class.prototype, {
                constructor: {
                  value: Wrapper,
                  enumerable: false,
                  writable: true,
                  configurable: true,
                },
              });
              return _setPrototypeOf(Wrapper, Class);
            };
            return _wrapNativeSuper(Class);
          }
          function _assertThisInitialized(self) {
            if (self === void 0) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return self;
          }
          function _possibleConstructorReturn(self, call) {
            if (
              call &&
              (typeof call === 'object' || typeof call === 'function')
            ) {
              return call;
            } else if (call !== void 0) {
              throw new TypeError(
                'Derived constructors may only return object or undefined'
              );
            }
            return _assertThisInitialized(self);
          }
          function _createSuper(Derived) {
            var hasNativeReflectConstruct =
              _isNativeReflectConstruct();
            return function _createSuperInternal() {
              var Super = _getPrototypeOf(Derived),
                result;
              if (hasNativeReflectConstruct) {
                var NewTarget = _getPrototypeOf(this).constructor;
                result = Reflect.construct(
                  Super,
                  arguments,
                  NewTarget
                );
              } else {
                result = Super.apply(this, arguments);
              }
              return _possibleConstructorReturn(this, result);
            };
          }
          function _toPrimitive(input, hint) {
            if (typeof input !== 'object' || input === null)
              return input;
            var prim = input[Symbol.toPrimitive];
            if (prim !== undefined) {
              var res = prim.call(input, hint || 'default');
              if (typeof res !== 'object') return res;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return (hint === 'string' ? String : Number)(input);
          }
          function _toPropertyKey(arg) {
            var key = _toPrimitive(arg, 'string');
            return typeof key === 'symbol' ? key : String(key);
          }

          /**
           * @module lib/functions
           */

          /**
           * Check to see this is a node environment.
           * @type {Boolean}
           */
          /* global global */
          var isNode =
            typeof global !== 'undefined' &&
            {}.toString.call(global) === '[object global]';

          /**
           * Get the name of the method for a given getter or setter.
           *
           * @param {string} prop The name of the property.
           * @param {string} type Either “get” or “set”.
           * @return {string}
           */
          function getMethodName(prop, type) {
            if (prop.indexOf(type.toLowerCase()) === 0) {
              return prop;
            }
            return ''
              .concat(type.toLowerCase())
              .concat(prop.substr(0, 1).toUpperCase())
              .concat(prop.substr(1));
          }

          /**
           * Check to see if the object is a DOM Element.
           *
           * @param {*} element The object to check.
           * @return {boolean}
           */
          function isDomElement(element) {
            return Boolean(
              element &&
                element.nodeType === 1 &&
                'nodeName' in element &&
                element.ownerDocument &&
                element.ownerDocument.defaultView
            );
          }

          /**
           * Check to see whether the value is a number.
           *
           * @see http://dl.dropboxusercontent.com/u/35146/js/tests/isNumber.html
           * @param {*} value The value to check.
           * @param {boolean} integer Check if the value is an integer.
           * @return {boolean}
           */
          function isInteger(value) {
            // eslint-disable-next-line eqeqeq
            return (
              !isNaN(parseFloat(value)) &&
              isFinite(value) &&
              Math.floor(value) == value
            );
          }

          /**
           * Check to see if the URL is a Vimeo url.
           *
           * @param {string} url The url string.
           * @return {boolean}
           */
          function isVimeoUrl(url) {
            return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(
              url
            );
          }

          /**
           * Check to see if the URL is for a Vimeo embed.
           *
           * @param {string} url The url string.
           * @return {boolean}
           */
          function isVimeoEmbed(url) {
            var expr = /^https:\/\/player\.vimeo\.com\/video\/\d+/;
            return expr.test(url);
          }

          /**
           * Get the Vimeo URL from an element.
           * The element must have either a data-vimeo-id or data-vimeo-url attribute.
           *
           * @param {object} oEmbedParameters The oEmbed parameters.
           * @return {string}
           */
          function getVimeoUrl() {
            var oEmbedParameters =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : {};
            var id = oEmbedParameters.id;
            var url = oEmbedParameters.url;
            var idOrUrl = id || url;
            if (!idOrUrl) {
              throw new Error(
                'An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.'
              );
            }
            if (isInteger(idOrUrl)) {
              return 'https://vimeo.com/'.concat(idOrUrl);
            }
            if (isVimeoUrl(idOrUrl)) {
              return idOrUrl.replace('http:', 'https:');
            }
            if (id) {
              throw new TypeError(
                '\u201C'.concat(id, '\u201D is not a valid video id.')
              );
            }
            throw new TypeError(
              '\u201C'.concat(
                idOrUrl,
                '\u201D is not a vimeo.com url.'
              )
            );
          }

          /* eslint-disable max-params */
          /**
           * A utility method for attaching and detaching event handlers
           *
           * @param {EventTarget} target
           * @param {string | string[]} eventName
           * @param {function} callback
           * @param {'addEventListener' | 'on'} onName
           * @param {'removeEventListener' | 'off'} offName
           * @return {{cancel: (function(): void)}}
           */
          var subscribe = function subscribe(
            target,
            eventName,
            callback
          ) {
            var onName =
              arguments.length > 3 && arguments[3] !== undefined
                ? arguments[3]
                : 'addEventListener';
            var offName =
              arguments.length > 4 && arguments[4] !== undefined
                ? arguments[4]
                : 'removeEventListener';
            var eventNames =
              typeof eventName === 'string' ? [eventName] : eventName;
            eventNames.forEach(function (evName) {
              target[onName](evName, callback);
            });
            return {
              cancel: function cancel() {
                return eventNames.forEach(function (evName) {
                  return target[offName](evName, callback);
                });
              },
            };
          };

          var arrayIndexOfSupport =
            typeof Array.prototype.indexOf !== 'undefined';
          var postMessageSupport =
            typeof window !== 'undefined' &&
            typeof window.postMessage !== 'undefined';
          if (
            !isNode &&
            (!arrayIndexOfSupport || !postMessageSupport)
          ) {
            throw new Error(
              'Sorry, the Vimeo Player API is not available in this browser.'
            );
          }

          var commonjsGlobal =
            typeof globalThis !== 'undefined'
              ? globalThis
              : typeof window !== 'undefined'
              ? window
              : typeof global !== 'undefined'
              ? global
              : typeof self !== 'undefined'
              ? self
              : {};

          function createCommonjsModule(fn, module) {
            return (
              (module = {
                exports: {},
              }),
              fn(module, module.exports),
              module.exports
            );
          }

          /*!
           * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
           * https://github.com/polygonplanet/weakmap-polyfill
           * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
           * @license MIT
           */

          (function (self) {
            if (self.WeakMap) {
              return;
            }
            var hasOwnProperty = Object.prototype.hasOwnProperty;
            var hasDefine =
              Object.defineProperty &&
              (function () {
                try {
                  // Avoid IE8's broken Object.defineProperty
                  return (
                    Object.defineProperty({}, 'x', {
                      value: 1,
                    }).x === 1
                  );
                } catch (e) {}
              })();
            var defineProperty = function (object, name, value) {
              if (hasDefine) {
                Object.defineProperty(object, name, {
                  configurable: true,
                  writable: true,
                  value: value,
                });
              } else {
                object[name] = value;
              }
            };
            self.WeakMap = (function () {
              // ECMA-262 23.3 WeakMap Objects
              function WeakMap() {
                if (this === void 0) {
                  throw new TypeError(
                    "Constructor WeakMap requires 'new'"
                  );
                }
                defineProperty(this, '_id', genId('_WeakMap'));

                // ECMA-262 23.3.1.1 WeakMap([iterable])
                if (arguments.length > 0) {
                  // Currently, WeakMap `iterable` argument is not supported
                  throw new TypeError(
                    'WeakMap iterable is not supported'
                  );
                }
              }

              // ECMA-262 23.3.3.2 WeakMap.prototype.delete(key)
              defineProperty(
                WeakMap.prototype,
                'delete',
                function (key) {
                  checkInstance(this, 'delete');
                  if (!isObject(key)) {
                    return false;
                  }
                  var entry = key[this._id];
                  if (entry && entry[0] === key) {
                    delete key[this._id];
                    return true;
                  }
                  return false;
                }
              );

              // ECMA-262 23.3.3.3 WeakMap.prototype.get(key)
              defineProperty(
                WeakMap.prototype,
                'get',
                function (key) {
                  checkInstance(this, 'get');
                  if (!isObject(key)) {
                    return void 0;
                  }
                  var entry = key[this._id];
                  if (entry && entry[0] === key) {
                    return entry[1];
                  }
                  return void 0;
                }
              );

              // ECMA-262 23.3.3.4 WeakMap.prototype.has(key)
              defineProperty(
                WeakMap.prototype,
                'has',
                function (key) {
                  checkInstance(this, 'has');
                  if (!isObject(key)) {
                    return false;
                  }
                  var entry = key[this._id];
                  if (entry && entry[0] === key) {
                    return true;
                  }
                  return false;
                }
              );

              // ECMA-262 23.3.3.5 WeakMap.prototype.set(key, value)
              defineProperty(
                WeakMap.prototype,
                'set',
                function (key, value) {
                  checkInstance(this, 'set');
                  if (!isObject(key)) {
                    throw new TypeError(
                      'Invalid value used as weak map key'
                    );
                  }
                  var entry = key[this._id];
                  if (entry && entry[0] === key) {
                    entry[1] = value;
                    return this;
                  }
                  defineProperty(key, this._id, [key, value]);
                  return this;
                }
              );
              function checkInstance(x, methodName) {
                if (!isObject(x) || !hasOwnProperty.call(x, '_id')) {
                  throw new TypeError(
                    methodName +
                      ' method called on incompatible receiver ' +
                      typeof x
                  );
                }
              }
              function genId(prefix) {
                return prefix + '_' + rand() + '.' + rand();
              }
              function rand() {
                return Math.random().toString().substring(2);
              }
              defineProperty(WeakMap, '_polyfill', true);
              return WeakMap;
            })();
            function isObject(x) {
              return Object(x) === x;
            }
          })(
            typeof globalThis !== 'undefined'
              ? globalThis
              : typeof self !== 'undefined'
              ? self
              : typeof window !== 'undefined'
              ? window
              : typeof commonjsGlobal !== 'undefined'
              ? commonjsGlobal
              : commonjsGlobal
          );

          var npo_src = createCommonjsModule(function (module) {
            /*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/

            (function UMD(name, context, definition) {
              // special form of UMD for polyfilling across evironments
              context[name] = context[name] || definition();
              if (module.exports) {
                module.exports = context[name];
              }
            })(
              'Promise',
              typeof commonjsGlobal != 'undefined'
                ? commonjsGlobal
                : commonjsGlobal,
              function DEF() {
                var builtInProp,
                  cycle,
                  scheduling_queue,
                  ToString = Object.prototype.toString,
                  timer =
                    typeof setImmediate != 'undefined'
                      ? function timer(fn) {
                          return setImmediate(fn);
                        }
                      : setTimeout;

                // dammit, IE8.
                try {
                  Object.defineProperty({}, 'x', {});
                  builtInProp = function builtInProp(
                    obj,
                    name,
                    val,
                    config
                  ) {
                    return Object.defineProperty(obj, name, {
                      value: val,
                      writable: true,
                      configurable: config !== false,
                    });
                  };
                } catch (err) {
                  builtInProp = function builtInProp(obj, name, val) {
                    obj[name] = val;
                    return obj;
                  };
                }

                // Note: using a queue instead of array for efficiency
                scheduling_queue = (function Queue() {
                  var first, last, item;
                  function Item(fn, self) {
                    this.fn = fn;
                    this.self = self;
                    this.next = void 0;
                  }
                  return {
                    add: function add(fn, self) {
                      item = new Item(fn, self);
                      if (last) {
                        last.next = item;
                      } else {
                        first = item;
                      }
                      last = item;
                      item = void 0;
                    },
                    drain: function drain() {
                      var f = first;
                      first = last = cycle = void 0;
                      while (f) {
                        f.fn.call(f.self);
                        f = f.next;
                      }
                    },
                  };
                })();
                function schedule(fn, self) {
                  scheduling_queue.add(fn, self);
                  if (!cycle) {
                    cycle = timer(scheduling_queue.drain);
                  }
                }

                // promise duck typing
                function isThenable(o) {
                  var _then,
                    o_type = typeof o;
                  if (
                    o != null &&
                    (o_type == 'object' || o_type == 'function')
                  ) {
                    _then = o.then;
                  }
                  return typeof _then == 'function' ? _then : false;
                }
                function notify() {
                  for (var i = 0; i < this.chain.length; i++) {
                    notifyIsolated(
                      this,
                      this.state === 1
                        ? this.chain[i].success
                        : this.chain[i].failure,
                      this.chain[i]
                    );
                  }
                  this.chain.length = 0;
                }

                // NOTE: This is a separate function to isolate
                // the `try..catch` so that other code can be
                // optimized better
                function notifyIsolated(self, cb, chain) {
                  var ret, _then;
                  try {
                    if (cb === false) {
                      chain.reject(self.msg);
                    } else {
                      if (cb === true) {
                        ret = self.msg;
                      } else {
                        ret = cb.call(void 0, self.msg);
                      }
                      if (ret === chain.promise) {
                        chain.reject(
                          TypeError('Promise-chain cycle')
                        );
                      } else if ((_then = isThenable(ret))) {
                        _then.call(ret, chain.resolve, chain.reject);
                      } else {
                        chain.resolve(ret);
                      }
                    }
                  } catch (err) {
                    chain.reject(err);
                  }
                }
                function resolve(msg) {
                  var _then,
                    self = this;

                  // already triggered?
                  if (self.triggered) {
                    return;
                  }
                  self.triggered = true;

                  // unwrap
                  if (self.def) {
                    self = self.def;
                  }
                  try {
                    if ((_then = isThenable(msg))) {
                      schedule(function () {
                        var def_wrapper = new MakeDefWrapper(self);
                        try {
                          _then.call(
                            msg,
                            function $resolve$() {
                              resolve.apply(def_wrapper, arguments);
                            },
                            function $reject$() {
                              reject.apply(def_wrapper, arguments);
                            }
                          );
                        } catch (err) {
                          reject.call(def_wrapper, err);
                        }
                      });
                    } else {
                      self.msg = msg;
                      self.state = 1;
                      if (self.chain.length > 0) {
                        schedule(notify, self);
                      }
                    }
                  } catch (err) {
                    reject.call(new MakeDefWrapper(self), err);
                  }
                }
                function reject(msg) {
                  var self = this;

                  // already triggered?
                  if (self.triggered) {
                    return;
                  }
                  self.triggered = true;

                  // unwrap
                  if (self.def) {
                    self = self.def;
                  }
                  self.msg = msg;
                  self.state = 2;
                  if (self.chain.length > 0) {
                    schedule(notify, self);
                  }
                }
                function iteratePromises(
                  Constructor,
                  arr,
                  resolver,
                  rejecter
                ) {
                  for (var idx = 0; idx < arr.length; idx++) {
                    (function IIFE(idx) {
                      Constructor.resolve(arr[idx]).then(
                        function $resolver$(msg) {
                          resolver(idx, msg);
                        },
                        rejecter
                      );
                    })(idx);
                  }
                }
                function MakeDefWrapper(self) {
                  this.def = self;
                  this.triggered = false;
                }
                function MakeDef(self) {
                  this.promise = self;
                  this.state = 0;
                  this.triggered = false;
                  this.chain = [];
                  this.msg = void 0;
                }
                function Promise(executor) {
                  if (typeof executor != 'function') {
                    throw TypeError('Not a function');
                  }
                  if (this.__NPO__ !== 0) {
                    throw TypeError('Not a promise');
                  }

                  // instance shadowing the inherited "brand"
                  // to signal an already "initialized" promise
                  this.__NPO__ = 1;
                  var def = new MakeDef(this);
                  this['then'] = function then(success, failure) {
                    var o = {
                      success:
                        typeof success == 'function' ? success : true,
                      failure:
                        typeof failure == 'function'
                          ? failure
                          : false,
                    };
                    // Note: `then(..)` itself can be borrowed to be used against
                    // a different promise constructor for making the chained promise,
                    // by substituting a different `this` binding.
                    o.promise = new this.constructor(
                      function extractChain(resolve, reject) {
                        if (
                          typeof resolve != 'function' ||
                          typeof reject != 'function'
                        ) {
                          throw TypeError('Not a function');
                        }
                        o.resolve = resolve;
                        o.reject = reject;
                      }
                    );
                    def.chain.push(o);
                    if (def.state !== 0) {
                      schedule(notify, def);
                    }
                    return o.promise;
                  };
                  this['catch'] = function $catch$(failure) {
                    return this.then(void 0, failure);
                  };
                  try {
                    executor.call(
                      void 0,
                      function publicResolve(msg) {
                        resolve.call(def, msg);
                      },
                      function publicReject(msg) {
                        reject.call(def, msg);
                      }
                    );
                  } catch (err) {
                    reject.call(def, err);
                  }
                }
                var PromisePrototype = builtInProp(
                  {},
                  'constructor',
                  Promise /*configurable=*/,
                  false
                );

                // Note: Android 4 cannot use `Object.defineProperty(..)` here
                Promise.prototype = PromisePrototype;

                // built-in "brand" to signal an "uninitialized" promise
                builtInProp(
                  PromisePrototype,
                  '__NPO__',
                  0 /*configurable=*/,
                  false
                );
                builtInProp(
                  Promise,
                  'resolve',
                  function Promise$resolve(msg) {
                    var Constructor = this;

                    // spec mandated checks
                    // note: best "isPromise" check that's practical for now
                    if (
                      msg &&
                      typeof msg == 'object' &&
                      msg.__NPO__ === 1
                    ) {
                      return msg;
                    }
                    return new Constructor(function executor(
                      resolve,
                      reject
                    ) {
                      if (
                        typeof resolve != 'function' ||
                        typeof reject != 'function'
                      ) {
                        throw TypeError('Not a function');
                      }
                      resolve(msg);
                    });
                  }
                );
                builtInProp(
                  Promise,
                  'reject',
                  function Promise$reject(msg) {
                    return new this(function executor(
                      resolve,
                      reject
                    ) {
                      if (
                        typeof resolve != 'function' ||
                        typeof reject != 'function'
                      ) {
                        throw TypeError('Not a function');
                      }
                      reject(msg);
                    });
                  }
                );
                builtInProp(
                  Promise,
                  'all',
                  function Promise$all(arr) {
                    var Constructor = this;

                    // spec mandated checks
                    if (ToString.call(arr) != '[object Array]') {
                      return Constructor.reject(
                        TypeError('Not an array')
                      );
                    }
                    if (arr.length === 0) {
                      return Constructor.resolve([]);
                    }
                    return new Constructor(function executor(
                      resolve,
                      reject
                    ) {
                      if (
                        typeof resolve != 'function' ||
                        typeof reject != 'function'
                      ) {
                        throw TypeError('Not a function');
                      }
                      var len = arr.length,
                        msgs = Array(len),
                        count = 0;
                      iteratePromises(
                        Constructor,
                        arr,
                        function resolver(idx, msg) {
                          msgs[idx] = msg;
                          if (++count === len) {
                            resolve(msgs);
                          }
                        },
                        reject
                      );
                    });
                  }
                );
                builtInProp(
                  Promise,
                  'race',
                  function Promise$race(arr) {
                    var Constructor = this;

                    // spec mandated checks
                    if (ToString.call(arr) != '[object Array]') {
                      return Constructor.reject(
                        TypeError('Not an array')
                      );
                    }
                    return new Constructor(function executor(
                      resolve,
                      reject
                    ) {
                      if (
                        typeof resolve != 'function' ||
                        typeof reject != 'function'
                      ) {
                        throw TypeError('Not a function');
                      }
                      iteratePromises(
                        Constructor,
                        arr,
                        function resolver(idx, msg) {
                          resolve(msg);
                        },
                        reject
                      );
                    });
                  }
                );
                return Promise;
              }
            );
          });

          /**
           * @module lib/callbacks
           */

          var callbackMap = new WeakMap();

          /**
           * Store a callback for a method or event for a player.
           *
           * @param {Player} player The player object.
           * @param {string} name The method or event name.
           * @param {(function(this:Player, *): void|{resolve: function, reject: function})} callback
           *        The callback to call or an object with resolve and reject functions for a promise.
           * @return {void}
           */
          function storeCallback(player, name, callback) {
            var playerCallbacks =
              callbackMap.get(player.element) || {};
            if (!(name in playerCallbacks)) {
              playerCallbacks[name] = [];
            }
            playerCallbacks[name].push(callback);
            callbackMap.set(player.element, playerCallbacks);
          }

          /**
           * Get the callbacks for a player and event or method.
           *
           * @param {Player} player The player object.
           * @param {string} name The method or event name
           * @return {function[]}
           */
          function getCallbacks(player, name) {
            var playerCallbacks =
              callbackMap.get(player.element) || {};
            return playerCallbacks[name] || [];
          }

          /**
           * Remove a stored callback for a method or event for a player.
           *
           * @param {Player} player The player object.
           * @param {string} name The method or event name
           * @param {function} [callback] The specific callback to remove.
           * @return {boolean} Was this the last callback?
           */
          function removeCallback(player, name, callback) {
            var playerCallbacks =
              callbackMap.get(player.element) || {};
            if (!playerCallbacks[name]) {
              return true;
            }

            // If no callback is passed, remove all callbacks for the event
            if (!callback) {
              playerCallbacks[name] = [];
              callbackMap.set(player.element, playerCallbacks);
              return true;
            }
            var index = playerCallbacks[name].indexOf(callback);
            if (index !== -1) {
              playerCallbacks[name].splice(index, 1);
            }
            callbackMap.set(player.element, playerCallbacks);
            return (
              playerCallbacks[name] &&
              playerCallbacks[name].length === 0
            );
          }

          /**
           * Return the first stored callback for a player and event or method.
           *
           * @param {Player} player The player object.
           * @param {string} name The method or event name.
           * @return {function} The callback, or false if there were none
           */
          function shiftCallbacks(player, name) {
            var playerCallbacks = getCallbacks(player, name);
            if (playerCallbacks.length < 1) {
              return false;
            }
            var callback = playerCallbacks.shift();
            removeCallback(player, name, callback);
            return callback;
          }

          /**
           * Move callbacks associated with an element to another element.
           *
           * @param {HTMLElement} oldElement The old element.
           * @param {HTMLElement} newElement The new element.
           * @return {void}
           */
          function swapCallbacks(oldElement, newElement) {
            var playerCallbacks = callbackMap.get(oldElement);
            callbackMap.set(newElement, playerCallbacks);
            callbackMap.delete(oldElement);
          }

          /**
           * @module lib/postmessage
           */

          /**
           * Parse a message received from postMessage.
           *
           * @param {*} data The data received from postMessage.
           * @return {object}
           */
          function parseMessageData(data) {
            if (typeof data === 'string') {
              try {
                data = JSON.parse(data);
              } catch (error) {
                // If the message cannot be parsed, throw the error as a warning
                console.warn(error);
                return {};
              }
            }
            return data;
          }

          /**
           * Post a message to the specified target.
           *
           * @param {Player} player The player object to use.
           * @param {string} method The API method to call.
           * @param {object} params The parameters to send to the player.
           * @return {void}
           */
          function postMessage(player, method, params) {
            if (
              !player.element.contentWindow ||
              !player.element.contentWindow.postMessage
            ) {
              return;
            }
            var message = {
              method: method,
            };
            if (params !== undefined) {
              message.value = params;
            }

            // IE 8 and 9 do not support passing messages, so stringify them
            var ieVersion = parseFloat(
              navigator.userAgent
                .toLowerCase()
                .replace(/^.*msie (\d+).*$/, '$1')
            );
            if (ieVersion >= 8 && ieVersion < 10) {
              message = JSON.stringify(message);
            }
            player.element.contentWindow.postMessage(
              message,
              player.origin
            );
          }

          /**
           * Parse the data received from a message event.
           *
           * @param {Player} player The player that received the message.
           * @param {(Object|string)} data The message data. Strings will be parsed into JSON.
           * @return {void}
           */
          function processData(player, data) {
            data = parseMessageData(data);
            var callbacks = [];
            var param;
            if (data.event) {
              if (data.event === 'error') {
                var promises = getCallbacks(player, data.data.method);
                promises.forEach(function (promise) {
                  var error = new Error(data.data.message);
                  error.name = data.data.name;
                  promise.reject(error);
                  removeCallback(player, data.data.method, promise);
                });
              }
              callbacks = getCallbacks(
                player,
                'event:'.concat(data.event)
              );
              param = data.data;
            } else if (data.method) {
              var callback = shiftCallbacks(player, data.method);
              if (callback) {
                callbacks.push(callback);
                param = data.value;
              }
            }
            callbacks.forEach(function (callback) {
              try {
                if (typeof callback === 'function') {
                  callback.call(player, param);
                  return;
                }
                callback.resolve(param);
              } catch (e) {
                // empty
              }
            });
          }

          /**
           * @module lib/embed
           */
          var oEmbedParameters = [
            'airplay',
            'audio_tracks',
            'autopause',
            'autoplay',
            'background',
            'byline',
            'cc',
            'chapter_id',
            'chapters',
            'chromecast',
            'color',
            'colors',
            'controls',
            'dnt',
            'end_time',
            'fullscreen',
            'height',
            'id',
            'interactive_params',
            'keyboard',
            'loop',
            'maxheight',
            'maxwidth',
            'muted',
            'play_button_position',
            'playsinline',
            'portrait',
            'progress_bar',
            'quality_selector',
            'responsive',
            'speed',
            'start_time',
            'texttrack',
            'title',
            'transcript',
            'transparent',
            'url',
            'vimeo_logo',
            'volume',
            'watch_full_video',
            'width',
          ];

          /**
           * Get the 'data-vimeo'-prefixed attributes from an element as an object.
           *
           * @param {HTMLElement} element The element.
           * @param {Object} [defaults={}] The default values to use.
           * @return {Object<string, string>}
           */
          function getOEmbedParameters(element) {
            var defaults =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {};
            return oEmbedParameters.reduce(function (params, param) {
              var value = element.getAttribute(
                'data-vimeo-'.concat(param)
              );
              if (value || value === '') {
                params[param] = value === '' ? 1 : value;
              }
              return params;
            }, defaults);
          }

          /**
           * Create an embed from oEmbed data inside an element.
           *
           * @param {object} data The oEmbed data.
           * @param {HTMLElement} element The element to put the iframe in.
           * @return {HTMLIFrameElement} The iframe embed.
           */
          function createEmbed(_ref, element) {
            var html = _ref.html;
            if (!element) {
              throw new TypeError('An element must be provided');
            }
            if (
              element.getAttribute('data-vimeo-initialized') !== null
            ) {
              return element.querySelector('iframe');
            }
            var div = document.createElement('div');
            div.innerHTML = html;
            element.appendChild(div.firstChild);
            element.setAttribute('data-vimeo-initialized', 'true');
            return element.querySelector('iframe');
          }

          /**
           * Make an oEmbed call for the specified URL.
           *
           * @param {string} videoUrl The vimeo.com url for the video.
           * @param {Object} [params] Parameters to pass to oEmbed.
           * @param {HTMLElement} element The element.
           * @return {Promise}
           */
          function getOEmbedData(videoUrl) {
            var params =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {};
            var element =
              arguments.length > 2 ? arguments[2] : undefined;
            return new Promise(function (resolve, reject) {
              if (!isVimeoUrl(videoUrl)) {
                throw new TypeError(
                  '\u201C'.concat(
                    videoUrl,
                    '\u201D is not a vimeo.com url.'
                  )
                );
              }
              var url =
                'https://vimeo.com/api/oembed.json?url='.concat(
                  encodeURIComponent(videoUrl)
                );
              for (var param in params) {
                if (params.hasOwnProperty(param)) {
                  url += '&'
                    .concat(param, '=')
                    .concat(encodeURIComponent(params[param]));
                }
              }
              var xhr =
                'XDomainRequest' in window
                  ? new XDomainRequest()
                  : new XMLHttpRequest();
              xhr.open('GET', url, true);
              xhr.onload = function () {
                if (xhr.status === 404) {
                  reject(
                    new Error(
                      '\u201C'.concat(
                        videoUrl,
                        '\u201D was not found.'
                      )
                    )
                  );
                  return;
                }
                if (xhr.status === 403) {
                  reject(
                    new Error(
                      '\u201C'.concat(
                        videoUrl,
                        '\u201D is not embeddable.'
                      )
                    )
                  );
                  return;
                }
                try {
                  var json = JSON.parse(xhr.responseText);
                  // Check api response for 403 on oembed
                  if (json.domain_status_code === 403) {
                    // We still want to create the embed to give users visual feedback
                    createEmbed(json, element);
                    reject(
                      new Error(
                        '\u201C'.concat(
                          videoUrl,
                          '\u201D is not embeddable.'
                        )
                      )
                    );
                    return;
                  }
                  resolve(json);
                } catch (error) {
                  reject(error);
                }
              };
              xhr.onerror = function () {
                var status = xhr.status
                  ? ' ('.concat(xhr.status, ')')
                  : '';
                reject(
                  new Error(
                    'There was an error fetching the embed code from Vimeo'.concat(
                      status,
                      '.'
                    )
                  )
                );
              };
              xhr.send();
            });
          }

          /**
           * Initialize all embeds within a specific element
           *
           * @param {HTMLElement} [parent=document] The parent element.
           * @return {void}
           */
          function initializeEmbeds() {
            var parent =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : document;
            var elements = [].slice.call(
              parent.querySelectorAll(
                '[data-vimeo-id], [data-vimeo-url]'
              )
            );
            var handleError = function handleError(error) {
              if ('console' in window && console.error) {
                console.error(
                  'There was an error creating an embed: '.concat(
                    error
                  )
                );
              }
            };
            elements.forEach(function (element) {
              try {
                // Skip any that have data-vimeo-defer
                if (
                  element.getAttribute('data-vimeo-defer') !== null
                ) {
                  return;
                }
                var params = getOEmbedParameters(element);
                var url = getVimeoUrl(params);
                getOEmbedData(url, params, element)
                  .then(function (data) {
                    return createEmbed(data, element);
                  })
                  .catch(handleError);
              } catch (error) {
                handleError(error);
              }
            });
          }

          /**
           * Resize embeds when messaged by the player.
           *
           * @param {HTMLElement} [parent=document] The parent element.
           * @return {void}
           */
          function resizeEmbeds() {
            var parent =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : document;
            // Prevent execution if users include the player.js script multiple times.
            if (window.VimeoPlayerResizeEmbeds_) {
              return;
            }
            window.VimeoPlayerResizeEmbeds_ = true;
            var onMessage = function onMessage(event) {
              if (!isVimeoUrl(event.origin)) {
                return;
              }

              // 'spacechange' is fired only on embeds with cards
              if (!event.data || event.data.event !== 'spacechange') {
                return;
              }
              var iframes = parent.querySelectorAll('iframe');
              for (var i = 0; i < iframes.length; i++) {
                if (iframes[i].contentWindow !== event.source) {
                  continue;
                }

                // Change padding-bottom of the enclosing div to accommodate
                // card carousel without distorting aspect ratio
                var space = iframes[i].parentElement;
                space.style.paddingBottom = ''.concat(
                  event.data.data[0].bottom,
                  'px'
                );
                break;
              }
            };
            window.addEventListener('message', onMessage);
          }

          /**
           * Add chapters to existing metadata for Google SEO
           *
           * @param {HTMLElement} [parent=document] The parent element.
           * @return {void}
           */
          function initAppendVideoMetadata() {
            var parent =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : document;
            //  Prevent execution if users include the player.js script multiple times.
            if (window.VimeoSeoMetadataAppended) {
              return;
            }
            window.VimeoSeoMetadataAppended = true;
            var onMessage = function onMessage(event) {
              if (!isVimeoUrl(event.origin)) {
                return;
              }
              var data = parseMessageData(event.data);
              if (!data || data.event !== 'ready') {
                return;
              }
              var iframes = parent.querySelectorAll('iframe');
              for (var i = 0; i < iframes.length; i++) {
                var iframe = iframes[i];

                // Initiate appendVideoMetadata if iframe is a Vimeo embed
                var isValidMessageSource =
                  iframe.contentWindow === event.source;
                if (
                  isVimeoEmbed(iframe.src) &&
                  isValidMessageSource
                ) {
                  var player = new Player(iframe);
                  player.callMethod(
                    'appendVideoMetadata',
                    window.location.href
                  );
                }
              }
            };
            window.addEventListener('message', onMessage);
          }

          /**
           * Seek to time indicated by vimeo_t query parameter if present in URL
           *
           * @param {HTMLElement} [parent=document] The parent element.
           * @return {void}
           */
          function checkUrlTimeParam() {
            var parent =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : document;
            //  Prevent execution if users include the player.js script multiple times.
            if (window.VimeoCheckedUrlTimeParam) {
              return;
            }
            window.VimeoCheckedUrlTimeParam = true;
            var handleError = function handleError(error) {
              if ('console' in window && console.error) {
                console.error(
                  'There was an error getting video Id: '.concat(
                    error
                  )
                );
              }
            };
            var onMessage = function onMessage(event) {
              if (!isVimeoUrl(event.origin)) {
                return;
              }
              var data = parseMessageData(event.data);
              if (!data || data.event !== 'ready') {
                return;
              }
              var iframes = parent.querySelectorAll('iframe');
              var _loop = function _loop() {
                var iframe = iframes[i];
                var isValidMessageSource =
                  iframe.contentWindow === event.source;
                if (
                  isVimeoEmbed(iframe.src) &&
                  isValidMessageSource
                ) {
                  var player = new Player(iframe);
                  player
                    .getVideoId()
                    .then(function (videoId) {
                      var matches = new RegExp(
                        '[?&]vimeo_t_'.concat(videoId, '=([^&#]*)')
                      ).exec(window.location.href);
                      if (matches && matches[1]) {
                        var sec = decodeURI(matches[1]);
                        player.setCurrentTime(sec);
                      }
                      return;
                    })
                    .catch(handleError);
                }
              };
              for (var i = 0; i < iframes.length; i++) {
                _loop();
              }
            };
            window.addEventListener('message', onMessage);
          }

          /* MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
Terms */

          function initializeScreenfull() {
            var fn = (function () {
              var val;
              var fnMap = [
                [
                  'requestFullscreen',
                  'exitFullscreen',
                  'fullscreenElement',
                  'fullscreenEnabled',
                  'fullscreenchange',
                  'fullscreenerror',
                ], // New WebKit
                [
                  'webkitRequestFullscreen',
                  'webkitExitFullscreen',
                  'webkitFullscreenElement',
                  'webkitFullscreenEnabled',
                  'webkitfullscreenchange',
                  'webkitfullscreenerror',
                ], // Old WebKit
                [
                  'webkitRequestFullScreen',
                  'webkitCancelFullScreen',
                  'webkitCurrentFullScreenElement',
                  'webkitCancelFullScreen',
                  'webkitfullscreenchange',
                  'webkitfullscreenerror',
                ],
                [
                  'mozRequestFullScreen',
                  'mozCancelFullScreen',
                  'mozFullScreenElement',
                  'mozFullScreenEnabled',
                  'mozfullscreenchange',
                  'mozfullscreenerror',
                ],
                [
                  'msRequestFullscreen',
                  'msExitFullscreen',
                  'msFullscreenElement',
                  'msFullscreenEnabled',
                  'MSFullscreenChange',
                  'MSFullscreenError',
                ],
              ];
              var i = 0;
              var l = fnMap.length;
              var ret = {};
              for (; i < l; i++) {
                val = fnMap[i];
                if (val && val[1] in document) {
                  for (i = 0; i < val.length; i++) {
                    ret[fnMap[0][i]] = val[i];
                  }
                  return ret;
                }
              }
              return false;
            })();
            var eventNameMap = {
              fullscreenchange: fn.fullscreenchange,
              fullscreenerror: fn.fullscreenerror,
            };
            var screenfull = {
              request: function request(element) {
                return new Promise(function (resolve, reject) {
                  var onFullScreenEntered =
                    function onFullScreenEntered() {
                      screenfull.off(
                        'fullscreenchange',
                        onFullScreenEntered
                      );
                      resolve();
                    };
                  screenfull.on(
                    'fullscreenchange',
                    onFullScreenEntered
                  );
                  element = element || document.documentElement;
                  var returnPromise = element[fn.requestFullscreen]();
                  if (returnPromise instanceof Promise) {
                    returnPromise
                      .then(onFullScreenEntered)
                      .catch(reject);
                  }
                });
              },
              exit: function exit() {
                return new Promise(function (resolve, reject) {
                  if (!screenfull.isFullscreen) {
                    resolve();
                    return;
                  }
                  var onFullScreenExit = function onFullScreenExit() {
                    screenfull.off(
                      'fullscreenchange',
                      onFullScreenExit
                    );
                    resolve();
                  };
                  screenfull.on('fullscreenchange', onFullScreenExit);
                  var returnPromise = document[fn.exitFullscreen]();
                  if (returnPromise instanceof Promise) {
                    returnPromise
                      .then(onFullScreenExit)
                      .catch(reject);
                  }
                });
              },
              on: function on(event, callback) {
                var eventName = eventNameMap[event];
                if (eventName) {
                  document.addEventListener(eventName, callback);
                }
              },
              off: function off(event, callback) {
                var eventName = eventNameMap[event];
                if (eventName) {
                  document.removeEventListener(eventName, callback);
                }
              },
            };
            Object.defineProperties(screenfull, {
              isFullscreen: {
                get: function get() {
                  return Boolean(document[fn.fullscreenElement]);
                },
              },
              element: {
                enumerable: true,
                get: function get() {
                  return document[fn.fullscreenElement];
                },
              },
              isEnabled: {
                enumerable: true,
                get: function get() {
                  // Coerce to boolean in case of old WebKit
                  return Boolean(document[fn.fullscreenEnabled]);
                },
              },
            });
            return screenfull;
          }

          /** @typedef {import('./timing-src-connector.types').PlayerControls} PlayerControls */
          /** @typedef {import('./timing-object.types').TimingObject} TimingObject */
          /** @typedef {import('./timing-src-connector.types').TimingSrcConnectorOptions} TimingSrcConnectorOptions */
          /** @typedef {(msg: string) => any} Logger */
          /** @typedef {import('timing-object.types').TConnectionState} TConnectionState */

          /**
           * @type {TimingSrcConnectorOptions}
           *
           * For details on these properties and their effects, see the typescript definition referenced above.
           */
          var defaultOptions = {
            role: 'viewer',
            autoPlayMuted: true,
            allowedDrift: 0.3,
            maxAllowedDrift: 1,
            minCheckInterval: 0.1,
            maxRateAdjustment: 0.2,
            maxTimeToCatchUp: 1,
          };

          /**
           * There's a proposed W3C spec for the Timing Object which would introduce a new set of APIs that would simplify time-synchronization tasks for browser applications.
           *
           * Proposed spec: https://webtiming.github.io/timingobject/
           * V3 Spec: https://timingsrc.readthedocs.io/en/latest/
           * Demuxed talk: https://www.youtube.com/watch?v=cZSjDaGDmX8
           *
           * This class makes it easy to connect Vimeo.Player to a provided TimingObject via Vimeo.Player.setTimingSrc(myTimingObject, options) and the synchronization will be handled automatically.
           *
           * There are 5 general responsibilities in TimingSrcConnector:
           *
           * 1. `updatePlayer()` which sets the player's currentTime, playbackRate and pause/play state based on current state of the TimingObject.
           * 2. `updateTimingObject()` which sets the TimingObject's position and velocity from the player's state.
           * 3. `playerUpdater` which listens for change events on the TimingObject and will respond by calling updatePlayer.
           * 4. `timingObjectUpdater` which listens to the player events of seeked, play and pause and will respond by calling `updateTimingObject()`.
           * 5. `maintainPlaybackPosition` this is code that constantly monitors the player to make sure it's always in sync with the TimingObject. This is needed because videos will generally not play with precise time accuracy and there will be some drift which becomes more noticeable over longer periods (as noted in the timing-object spec). More details on this method below.
           */
          var TimingSrcConnector =
            /*#__PURE__*/
            (function (_EventTarget) {
              _inherits(TimingSrcConnector, _EventTarget);
              var _super = _createSuper(TimingSrcConnector);
              /**
               * @param {PlayerControls} player
               * @param {TimingObject} timingObject
               * @param {TimingSrcConnectorOptions} options
               * @param {Logger} logger
               */
              function TimingSrcConnector(_player, timingObject) {
                var _this;
                var options =
                  arguments.length > 2 && arguments[2] !== undefined
                    ? arguments[2]
                    : {};
                var logger =
                  arguments.length > 3 ? arguments[3] : undefined;
                _classCallCheck(this, TimingSrcConnector);
                _this = _super.call(this);
                _defineProperty(
                  _assertThisInitialized(_this),
                  'logger',
                  void 0
                );
                _defineProperty(
                  _assertThisInitialized(_this),
                  'speedAdjustment',
                  0
                );
                /**
                 * @param {PlayerControls} player
                 * @param {number} newAdjustment
                 * @return {Promise<void>}
                 */
                _defineProperty(
                  _assertThisInitialized(_this),
                  'adjustSpeed' /*#__PURE__*/,
                  (function () {
                    var _ref = _asyncToGenerator(
                      /*#__PURE__*/
                      _regeneratorRuntime().mark(function _callee(
                        player,
                        newAdjustment
                      ) {
                        var newPlaybackRate;
                        return _regeneratorRuntime().wrap(
                          function _callee$(_context) {
                            while (1)
                              switch (
                                (_context.prev = _context.next)
                              ) {
                                case 0:
                                  if (
                                    !(
                                      _this.speedAdjustment ===
                                      newAdjustment
                                    )
                                  ) {
                                    _context.next = 2;
                                    break;
                                  }
                                  return _context.abrupt('return');
                                case 2:
                                  _context.next = 4;
                                  return player.getPlaybackRate();
                                case 4:
                                  _context.t0 = _context.sent;
                                  _context.t1 = _this.speedAdjustment;
                                  _context.t2 =
                                    _context.t0 - _context.t1;
                                  _context.t3 = newAdjustment;
                                  newPlaybackRate =
                                    _context.t2 + _context.t3;
                                  _this.log(
                                    'New playbackRate:  '.concat(
                                      newPlaybackRate
                                    )
                                  );
                                  _context.next = 12;
                                  return player.setPlaybackRate(
                                    newPlaybackRate
                                  );
                                case 12:
                                  _this.speedAdjustment =
                                    newAdjustment;
                                case 13:
                                case 'end':
                                  return _context.stop();
                              }
                          },
                          _callee
                        );
                      })
                    );
                    return function (_x, _x2) {
                      return _ref.apply(this, arguments);
                    };
                  })()
                );
                _this.logger = logger;
                _this.init(
                  timingObject,
                  _player,
                  _objectSpread2(
                    _objectSpread2({}, defaultOptions),
                    options
                  )
                );
                return _this;
              }
              _createClass(TimingSrcConnector, [
                {
                  key: 'disconnect',
                  value: function disconnect() {
                    this.dispatchEvent(new Event('disconnect'));
                  },
                  /**
                   * @param {TimingObject} timingObject
                   * @param {PlayerControls} player
                   * @param {TimingSrcConnectorOptions} options
                   * @return {Promise<void>}
                   */
                },
                {
                  key: 'init',
                  value: (function () {
                    var _init = _asyncToGenerator(
                      /*#__PURE__*/
                      _regeneratorRuntime().mark(function _callee2(
                        timingObject,
                        player,
                        options
                      ) {
                        var _this2 = this;
                        var playerUpdater,
                          positionSync,
                          timingObjectUpdater;
                        return _regeneratorRuntime().wrap(
                          function _callee2$(_context2) {
                            while (1)
                              switch (
                                (_context2.prev = _context2.next)
                              ) {
                                case 0:
                                  _context2.next = 2;
                                  return this.waitForTOReadyState(
                                    timingObject,
                                    'open'
                                  );
                                case 2:
                                  if (!(options.role === 'viewer')) {
                                    _context2.next = 10;
                                    break;
                                  }
                                  _context2.next = 5;
                                  return this.updatePlayer(
                                    timingObject,
                                    player,
                                    options
                                  );
                                case 5:
                                  playerUpdater = subscribe(
                                    timingObject,
                                    'change',
                                    function () {
                                      return _this2.updatePlayer(
                                        timingObject,
                                        player,
                                        options
                                      );
                                    }
                                  );
                                  positionSync =
                                    this.maintainPlaybackPosition(
                                      timingObject,
                                      player,
                                      options
                                    );
                                  this.addEventListener(
                                    'disconnect',
                                    function () {
                                      positionSync.cancel();
                                      playerUpdater.cancel();
                                    }
                                  );
                                  _context2.next = 14;
                                  break;
                                case 10:
                                  _context2.next = 12;
                                  return this.updateTimingObject(
                                    timingObject,
                                    player
                                  );
                                case 12:
                                  timingObjectUpdater = subscribe(
                                    player,
                                    [
                                      'seeked',
                                      'play',
                                      'pause',
                                      'ratechange',
                                    ],
                                    function () {
                                      return _this2.updateTimingObject(
                                        timingObject,
                                        player
                                      );
                                    },
                                    'on',
                                    'off'
                                  );
                                  this.addEventListener(
                                    'disconnect',
                                    function () {
                                      return timingObjectUpdater.cancel();
                                    }
                                  );
                                case 14:
                                case 'end':
                                  return _context2.stop();
                              }
                          },
                          _callee2,
                          this
                        );
                      })
                    );
                    function init(_x3, _x4, _x5) {
                      return _init.apply(this, arguments);
                    }
                    return init;
                  })(),
                  /**
                   * Sets the TimingObject's state to reflect that of the player
                   *
                   * @param {TimingObject} timingObject
                   * @param {PlayerControls} player
                   * @return {Promise<void>}
                   */
                },
                {
                  key: 'updateTimingObject',
                  value: (function () {
                    var _updateTimingObject = _asyncToGenerator(
                      /*#__PURE__*/
                      _regeneratorRuntime().mark(function _callee3(
                        timingObject,
                        player
                      ) {
                        return _regeneratorRuntime().wrap(
                          function _callee3$(_context3) {
                            while (1)
                              switch (
                                (_context3.prev = _context3.next)
                              ) {
                                case 0:
                                  _context3.t0 = timingObject;
                                  _context3.next = 3;
                                  return player.getCurrentTime();
                                case 3:
                                  _context3.t1 = _context3.sent;
                                  _context3.next = 6;
                                  return player.getPaused();
                                case 6:
                                  if (!_context3.sent) {
                                    _context3.next = 10;
                                    break;
                                  }
                                  _context3.t2 = 0;
                                  _context3.next = 13;
                                  break;
                                case 10:
                                  _context3.next = 12;
                                  return player.getPlaybackRate();
                                case 12:
                                  _context3.t2 = _context3.sent;
                                case 13:
                                  _context3.t3 = _context3.t2;
                                  _context3.t4 = {
                                    position: _context3.t1,
                                    velocity: _context3.t3,
                                  };
                                  _context3.t0.update.call(
                                    _context3.t0,
                                    _context3.t4
                                  );
                                case 16:
                                case 'end':
                                  return _context3.stop();
                              }
                          },
                          _callee3
                        );
                      })
                    );
                    function updateTimingObject(_x6, _x7) {
                      return _updateTimingObject.apply(
                        this,
                        arguments
                      );
                    }
                    return updateTimingObject;
                  })(),
                  /**
                   * Sets the player's timing state to reflect that of the TimingObject
                   *
                   * @param {TimingObject} timingObject
                   * @param {PlayerControls} player
                   * @param {TimingSrcConnectorOptions} options
                   * @return {Promise<void>}
                   */
                },
                {
                  key: 'updatePlayer',
                  value: (function () {
                    var _updatePlayer = _asyncToGenerator(
                      /*#__PURE__*/
                      _regeneratorRuntime().mark(function _callee5(
                        timingObject,
                        player,
                        options
                      ) {
                        var _timingObject$query, position, velocity;
                        return _regeneratorRuntime().wrap(
                          function _callee5$(_context5) {
                            while (1)
                              switch (
                                (_context5.prev = _context5.next)
                              ) {
                                case 0:
                                  (_timingObject$query =
                                    timingObject.query()),
                                    (position =
                                      _timingObject$query.position),
                                    (velocity =
                                      _timingObject$query.velocity);
                                  if (typeof position === 'number') {
                                    player.setCurrentTime(position);
                                  }
                                  if (
                                    !(typeof velocity === 'number')
                                  ) {
                                    _context5.next = 25;
                                    break;
                                  }
                                  if (!(velocity === 0)) {
                                    _context5.next = 11;
                                    break;
                                  }
                                  _context5.next = 6;
                                  return player.getPaused();
                                case 6:
                                  _context5.t0 = _context5.sent;
                                  if (!(_context5.t0 === false)) {
                                    _context5.next = 9;
                                    break;
                                  }
                                  player.pause();
                                case 9:
                                  _context5.next = 25;
                                  break;
                                case 11:
                                  if (!(velocity > 0)) {
                                    _context5.next = 25;
                                    break;
                                  }
                                  _context5.next = 14;
                                  return player.getPaused();
                                case 14:
                                  _context5.t1 = _context5.sent;
                                  if (!(_context5.t1 === true)) {
                                    _context5.next = 19;
                                    break;
                                  }
                                  _context5.next = 18;
                                  return player.play().catch(
                                    /*#__PURE__*/
                                    (function () {
                                      var _ref2 = _asyncToGenerator(
                                        /*#__PURE__*/
                                        _regeneratorRuntime().mark(
                                          function _callee4(err) {
                                            return _regeneratorRuntime().wrap(
                                              function _callee4$(
                                                _context4
                                              ) {
                                                while (1)
                                                  switch (
                                                    (_context4.prev =
                                                      _context4.next)
                                                  ) {
                                                    case 0:
                                                      if (
                                                        !(
                                                          err.name ===
                                                            'NotAllowedError' &&
                                                          options.autoPlayMuted
                                                        )
                                                      ) {
                                                        _context4.next = 5;
                                                        break;
                                                      }
                                                      _context4.next = 3;
                                                      return player.setMuted(
                                                        true
                                                      );
                                                    case 3:
                                                      _context4.next = 5;
                                                      return player
                                                        .play()
                                                        .catch(
                                                          function (
                                                            err2
                                                          ) {
                                                            return console.error(
                                                              "Couldn't play the video from TimingSrcConnector. Error:",
                                                              err2
                                                            );
                                                          }
                                                        );
                                                    case 5:
                                                    case 'end':
                                                      return _context4.stop();
                                                  }
                                              },
                                              _callee4
                                            );
                                          }
                                        )
                                      );
                                      return function (_x11) {
                                        return _ref2.apply(
                                          this,
                                          arguments
                                        );
                                      };
                                    })()
                                  );
                                case 18:
                                  this.updatePlayer(
                                    timingObject,
                                    player,
                                    options
                                  );
                                case 19:
                                  _context5.next = 21;
                                  return player.getPlaybackRate();
                                case 21:
                                  _context5.t2 = _context5.sent;
                                  _context5.t3 = velocity;
                                  if (
                                    !(_context5.t2 !== _context5.t3)
                                  ) {
                                    _context5.next = 25;
                                    break;
                                  }
                                  player.setPlaybackRate(velocity);
                                case 25:
                                case 'end':
                                  return _context5.stop();
                              }
                          },
                          _callee5,
                          this
                        );
                      })
                    );
                    function updatePlayer(_x8, _x9, _x10) {
                      return _updatePlayer.apply(this, arguments);
                    }
                    return updatePlayer;
                  })(),
                  /**
                   * Since video players do not play with 100% time precision, we need to closely monitor
                   * our player to be sure it remains in sync with the TimingObject.
                   *
                   * If out of sync, we use the current conditions and the options provided to determine
                   * whether to re-sync via setting currentTime or adjusting the playbackRate
                   *
                   * @param {TimingObject} timingObject
                   * @param {PlayerControls} player
                   * @param {TimingSrcConnectorOptions} options
                   * @return {{cancel: (function(): void)}}
                   */
                },
                {
                  key: 'maintainPlaybackPosition',
                  value: function maintainPlaybackPosition(
                    timingObject,
                    player,
                    options
                  ) {
                    var _this3 = this;
                    var allowedDrift = options.allowedDrift,
                      maxAllowedDrift = options.maxAllowedDrift,
                      minCheckInterval = options.minCheckInterval,
                      maxRateAdjustment = options.maxRateAdjustment,
                      maxTimeToCatchUp = options.maxTimeToCatchUp;
                    var syncInterval =
                      Math.min(
                        maxTimeToCatchUp,
                        Math.max(minCheckInterval, maxAllowedDrift)
                      ) * 1000;
                    var check =
                      /*#__PURE__*/
                      (function () {
                        var _ref3 = _asyncToGenerator(
                          /*#__PURE__*/
                          _regeneratorRuntime().mark(
                            function _callee6() {
                              var diff, diffAbs, min, max, adjustment;
                              return _regeneratorRuntime().wrap(
                                function _callee6$(_context6) {
                                  while (1)
                                    switch (
                                      (_context6.prev =
                                        _context6.next)
                                    ) {
                                      case 0:
                                        _context6.t0 =
                                          timingObject.query()
                                            .velocity === 0;
                                        if (_context6.t0) {
                                          _context6.next = 6;
                                          break;
                                        }
                                        _context6.next = 4;
                                        return player.getPaused();
                                      case 4:
                                        _context6.t1 = _context6.sent;
                                        _context6.t0 =
                                          _context6.t1 === true;
                                      case 6:
                                        if (!_context6.t0) {
                                          _context6.next = 8;
                                          break;
                                        }
                                        return _context6.abrupt(
                                          'return'
                                        );
                                      case 8:
                                        _context6.t2 =
                                          timingObject.query().position;
                                        _context6.next = 11;
                                        return player.getCurrentTime();
                                      case 11:
                                        _context6.t3 = _context6.sent;
                                        diff =
                                          _context6.t2 - _context6.t3;
                                        diffAbs = Math.abs(diff);
                                        _this3.log(
                                          'Drift: '.concat(diff)
                                        );
                                        if (
                                          !(diffAbs > maxAllowedDrift)
                                        ) {
                                          _context6.next = 22;
                                          break;
                                        }
                                        _context6.next = 18;
                                        return _this3.adjustSpeed(
                                          player,
                                          0
                                        );
                                      case 18:
                                        player.setCurrentTime(
                                          timingObject.query()
                                            .position
                                        );
                                        _this3.log(
                                          'Resync by currentTime'
                                        );
                                        _context6.next = 29;
                                        break;
                                      case 22:
                                        if (
                                          !(diffAbs > allowedDrift)
                                        ) {
                                          _context6.next = 29;
                                          break;
                                        }
                                        min =
                                          diffAbs / maxTimeToCatchUp;
                                        max = maxRateAdjustment;
                                        adjustment =
                                          min < max
                                            ? (max - min) / 2
                                            : max;
                                        _context6.next = 28;
                                        return _this3.adjustSpeed(
                                          player,
                                          adjustment * Math.sign(diff)
                                        );
                                      case 28:
                                        _this3.log(
                                          'Resync by playbackRate'
                                        );
                                      case 29:
                                      case 'end':
                                        return _context6.stop();
                                    }
                                },
                                _callee6
                              );
                            }
                          )
                        );
                        return function check() {
                          return _ref3.apply(this, arguments);
                        };
                      })();
                    var interval = setInterval(function () {
                      return check();
                    }, syncInterval);
                    return {
                      cancel: function cancel() {
                        return clearInterval(interval);
                      },
                    };
                  },
                  /**
                   * @param {string} msg
                   */
                },
                {
                  key: 'log',
                  value: function log(msg) {
                    var _this$logger;
                    (_this$logger = this.logger) === null ||
                    _this$logger === void 0
                      ? void 0
                      : _this$logger.call(
                          this,
                          'TimingSrcConnector: '.concat(msg)
                        );
                  },
                },
                {
                  key: 'waitForTOReadyState',
                  /**
                   * @param {TimingObject} timingObject
                   * @param {TConnectionState} state
                   * @return {Promise<void>}
                   */
                  value: function waitForTOReadyState(
                    timingObject,
                    state
                  ) {
                    return new Promise(function (resolve) {
                      var check = function check() {
                        if (timingObject.readyState === state) {
                          resolve();
                        } else {
                          timingObject.addEventListener(
                            'readystatechange',
                            check,
                            {
                              once: true,
                            }
                          );
                        }
                      };
                      check();
                    });
                  },
                },
              ]);
              return TimingSrcConnector;
            })(/*#__PURE__*/ _wrapNativeSuper(EventTarget));

          var playerMap = new WeakMap();
          var readyMap = new WeakMap();
          var screenfull = {};
          var Player =
            /*#__PURE__*/
            (function () {
              /**
               * Create a Player.
               *
               * @param {(HTMLIFrameElement|HTMLElement|string|jQuery)} element A reference to the Vimeo
               *        player iframe, and id, or a jQuery object.
               * @param {object} [options] oEmbed parameters to use when creating an embed in the element.
               * @return {Player}
               */
              function Player(element) {
                var _this = this;
                var options =
                  arguments.length > 1 && arguments[1] !== undefined
                    ? arguments[1]
                    : {};
                _classCallCheck(this, Player);
                /* global jQuery */
                if (window.jQuery && element instanceof jQuery) {
                  if (
                    element.length > 1 &&
                    window.console &&
                    console.warn
                  ) {
                    console.warn(
                      'A jQuery object with multiple elements was passed, using the first element.'
                    );
                  }
                  element = element[0];
                }

                // Find an element by ID
                if (
                  typeof document !== 'undefined' &&
                  typeof element === 'string'
                ) {
                  element = document.getElementById(element);
                }

                // Not an element!
                if (!isDomElement(element)) {
                  throw new TypeError(
                    'You must pass either a valid element or a valid id.'
                  );
                }

                // Already initialized an embed in this div, so grab the iframe
                if (element.nodeName !== 'IFRAME') {
                  var iframe = element.querySelector('iframe');
                  if (iframe) {
                    element = iframe;
                  }
                }

                // iframe url is not a Vimeo url
                if (
                  element.nodeName === 'IFRAME' &&
                  !isVimeoUrl(element.getAttribute('src') || '')
                ) {
                  throw new Error(
                    'The player element passed isn’t a Vimeo embed.'
                  );
                }

                // If there is already a player object in the map, return that
                if (playerMap.has(element)) {
                  return playerMap.get(element);
                }
                this._window = element.ownerDocument.defaultView;
                this.element = element;
                this.origin = '*';
                var readyPromise = new npo_src(function (
                  resolve,
                  reject
                ) {
                  _this._onMessage = function (event) {
                    if (
                      !isVimeoUrl(event.origin) ||
                      _this.element.contentWindow !== event.source
                    ) {
                      return;
                    }
                    if (_this.origin === '*') {
                      _this.origin = event.origin;
                    }
                    var data = parseMessageData(event.data);
                    var isError = data && data.event === 'error';
                    var isReadyError =
                      isError &&
                      data.data &&
                      data.data.method === 'ready';
                    if (isReadyError) {
                      var error = new Error(data.data.message);
                      error.name = data.data.name;
                      reject(error);
                      return;
                    }
                    var isReadyEvent = data && data.event === 'ready';
                    var isPingResponse =
                      data && data.method === 'ping';
                    if (isReadyEvent || isPingResponse) {
                      _this.element.setAttribute(
                        'data-ready',
                        'true'
                      );
                      resolve();
                      return;
                    }
                    processData(_this, data);
                  };
                  _this._window.addEventListener(
                    'message',
                    _this._onMessage
                  );
                  if (_this.element.nodeName !== 'IFRAME') {
                    var params = getOEmbedParameters(
                      element,
                      options
                    );
                    var url = getVimeoUrl(params);
                    getOEmbedData(url, params, element)
                      .then(function (data) {
                        var iframe = createEmbed(data, element);
                        // Overwrite element with the new iframe,
                        // but store reference to the original element
                        _this.element = iframe;
                        _this._originalElement = element;
                        swapCallbacks(element, iframe);
                        playerMap.set(_this.element, _this);
                        return data;
                      })
                      .catch(reject);
                  }
                });

                // Store a copy of this Player in the map
                readyMap.set(this, readyPromise);
                playerMap.set(this.element, this);

                // Send a ping to the iframe so the ready promise will be resolved if
                // the player is already ready.
                if (this.element.nodeName === 'IFRAME') {
                  postMessage(this, 'ping');
                }
                if (screenfull.isEnabled) {
                  var exitFullscreen = function exitFullscreen() {
                    return screenfull.exit();
                  };
                  this.fullscreenchangeHandler = function () {
                    if (screenfull.isFullscreen) {
                      storeCallback(
                        _this,
                        'event:exitFullscreen',
                        exitFullscreen
                      );
                    } else {
                      removeCallback(
                        _this,
                        'event:exitFullscreen',
                        exitFullscreen
                      );
                    }
                    // eslint-disable-next-line
                    _this.ready().then(function () {
                      postMessage(
                        _this,
                        'fullscreenchange',
                        screenfull.isFullscreen
                      );
                    });
                  };
                  screenfull.on(
                    'fullscreenchange',
                    this.fullscreenchangeHandler
                  );
                }
                return this;
              }

              /**
               * Get a promise for a method.
               *
               * @param {string} name The API method to call.
               * @param {Object} [args={}] Arguments to send via postMessage.
               * @return {Promise}
               */
              _createClass(Player, [
                {
                  key: 'callMethod',
                  value: function callMethod(name) {
                    var _this2 = this;
                    var args =
                      arguments.length > 1 &&
                      arguments[1] !== undefined
                        ? arguments[1]
                        : {};
                    return new npo_src(function (resolve, reject) {
                      // We are storing the resolve/reject handlers to call later, so we
                      // can’t return here.
                      // eslint-disable-next-line promise/always-return
                      return _this2
                        .ready()
                        .then(function () {
                          storeCallback(_this2, name, {
                            resolve: resolve,
                            reject: reject,
                          });
                          postMessage(_this2, name, args);
                        })
                        .catch(reject);
                    });
                  },
                  /**
                   * Get a promise for the value of a player property.
                   *
                   * @param {string} name The property name
                   * @return {Promise}
                   */
                },
                {
                  key: 'get',
                  value: function get(name) {
                    var _this3 = this;
                    return new npo_src(function (resolve, reject) {
                      name = getMethodName(name, 'get');

                      // We are storing the resolve/reject handlers to call later, so we
                      // can’t return here.
                      // eslint-disable-next-line promise/always-return
                      return _this3
                        .ready()
                        .then(function () {
                          storeCallback(_this3, name, {
                            resolve: resolve,
                            reject: reject,
                          });
                          postMessage(_this3, name);
                        })
                        .catch(reject);
                    });
                  },
                  /**
                   * Get a promise for setting the value of a player property.
                   *
                   * @param {string} name The API method to call.
                   * @param {mixed} value The value to set.
                   * @return {Promise}
                   */
                },
                {
                  key: 'set',
                  value: function set(name, value) {
                    var _this4 = this;
                    return new npo_src(function (resolve, reject) {
                      name = getMethodName(name, 'set');
                      if (value === undefined || value === null) {
                        throw new TypeError(
                          'There must be a value to set.'
                        );
                      }

                      // We are storing the resolve/reject handlers to call later, so we
                      // can’t return here.
                      // eslint-disable-next-line promise/always-return
                      return _this4
                        .ready()
                        .then(function () {
                          storeCallback(_this4, name, {
                            resolve: resolve,
                            reject: reject,
                          });
                          postMessage(_this4, name, value);
                        })
                        .catch(reject);
                    });
                  },
                  /**
                   * Add an event listener for the specified event. Will call the
                   * callback with a single parameter, `data`, that contains the data for
                   * that event.
                   *
                   * @param {string} eventName The name of the event.
                   * @param {function(*)} callback The function to call when the event fires.
                   * @return {void}
                   */
                },
                {
                  key: 'on',
                  value: function on(eventName, callback) {
                    if (!eventName) {
                      throw new TypeError(
                        'You must pass an event name.'
                      );
                    }
                    if (!callback) {
                      throw new TypeError(
                        'You must pass a callback function.'
                      );
                    }
                    if (typeof callback !== 'function') {
                      throw new TypeError(
                        'The callback must be a function.'
                      );
                    }
                    var callbacks = getCallbacks(
                      this,
                      'event:'.concat(eventName)
                    );
                    if (callbacks.length === 0) {
                      this.callMethod(
                        'addEventListener',
                        eventName
                      ).catch(function () {
                        // Ignore the error. There will be an error event fired that
                        // will trigger the error callback if they are listening.
                      });
                    }
                    storeCallback(
                      this,
                      'event:'.concat(eventName),
                      callback
                    );
                  },
                  /**
                   * Remove an event listener for the specified event. Will remove all
                   * listeners for that event if a `callback` isn’t passed, or only that
                   * specific callback if it is passed.
                   *
                   * @param {string} eventName The name of the event.
                   * @param {function} [callback] The specific callback to remove.
                   * @return {void}
                   */
                },
                {
                  key: 'off',
                  value: function off(eventName, callback) {
                    if (!eventName) {
                      throw new TypeError(
                        'You must pass an event name.'
                      );
                    }
                    if (callback && typeof callback !== 'function') {
                      throw new TypeError(
                        'The callback must be a function.'
                      );
                    }
                    var lastCallback = removeCallback(
                      this,
                      'event:'.concat(eventName),
                      callback
                    );

                    // If there are no callbacks left, remove the listener
                    if (lastCallback) {
                      this.callMethod(
                        'removeEventListener',
                        eventName
                      ).catch(function (e) {
                        // Ignore the error. There will be an error event fired that
                        // will trigger the error callback if they are listening.
                      });
                    }
                  },
                  /**
                   * A promise to load a new video.
                   *
                   * @promise LoadVideoPromise
                   * @fulfill {number} The video with this id or url successfully loaded.
                   * @reject {TypeError} The id was not a number.
                   */
                  /**
                   * Load a new video into this embed. The promise will be resolved if
                   * the video is successfully loaded, or it will be rejected if it could
                   * not be loaded.
                   *
                   * @param {number|string|object} options The id of the video, the url of the video, or an object with embed options.
                   * @return {LoadVideoPromise}
                   */
                },
                {
                  key: 'loadVideo',
                  value: function loadVideo(options) {
                    return this.callMethod('loadVideo', options);
                  },
                  /**
                   * A promise to perform an action when the Player is ready.
                   *
                   * @todo document errors
                   * @promise LoadVideoPromise
                   * @fulfill {void}
                   */
                  /**
                   * Trigger a function when the player iframe has initialized. You do not
                   * need to wait for `ready` to trigger to begin adding event listeners
                   * or calling other methods.
                   *
                   * @return {ReadyPromise}
                   */
                },
                {
                  key: 'ready',
                  value: function ready() {
                    var readyPromise =
                      readyMap.get(this) ||
                      new npo_src(function (resolve, reject) {
                        reject(
                          new Error(
                            'Unknown player. Probably unloaded.'
                          )
                        );
                      });
                    return npo_src.resolve(readyPromise);
                  },
                  /**
                   * A promise to add a cue point to the player.
                   *
                   * @promise AddCuePointPromise
                   * @fulfill {string} The id of the cue point to use for removeCuePoint.
                   * @reject {RangeError} the time was less than 0 or greater than the
                   *         video’s duration.
                   * @reject {UnsupportedError} Cue points are not supported with the current
                   *         player or browser.
                   */
                  /**
                   * Add a cue point to the player.
                   *
                   * @param {number} time The time for the cue point.
                   * @param {object} [data] Arbitrary data to be returned with the cue point.
                   * @return {AddCuePointPromise}
                   */
                },
                {
                  key: 'addCuePoint',
                  value: function addCuePoint(time) {
                    var data =
                      arguments.length > 1 &&
                      arguments[1] !== undefined
                        ? arguments[1]
                        : {};
                    return this.callMethod('addCuePoint', {
                      time: time,
                      data: data,
                    });
                  },
                  /**
                   * A promise to remove a cue point from the player.
                   *
                   * @promise AddCuePointPromise
                   * @fulfill {string} The id of the cue point that was removed.
                   * @reject {InvalidCuePoint} The cue point with the specified id was not
                   *         found.
                   * @reject {UnsupportedError} Cue points are not supported with the current
                   *         player or browser.
                   */
                  /**
                   * Remove a cue point from the video.
                   *
                   * @param {string} id The id of the cue point to remove.
                   * @return {RemoveCuePointPromise}
                   */
                },
                {
                  key: 'removeCuePoint',
                  value: function removeCuePoint(id) {
                    return this.callMethod('removeCuePoint', id);
                  },
                  /**
                   * A representation of a text track on a video.
                   *
                   * @typedef {Object} VimeoTextTrack
                   * @property {string} language The ISO language code.
                   * @property {string} kind The kind of track it is (captions or subtitles).
                   * @property {string} label The human‐readable label for the track.
                   */
                  /**
                   * A promise to enable a text track.
                   *
                   * @promise EnableTextTrackPromise
                   * @fulfill {VimeoTextTrack} The text track that was enabled.
                   * @reject {InvalidTrackLanguageError} No track was available with the
                   *         specified language.
                   * @reject {InvalidTrackError} No track was available with the specified
                   *         language and kind.
                   */
                  /**
                   * Enable the text track with the specified language, and optionally the
                   * specified kind (captions or subtitles).
                   *
                   * When set via the API, the track language will not change the viewer’s
                   * stored preference.
                   *
                   * @param {string} language The two‐letter language code.
                   * @param {string} [kind] The kind of track to enable (captions or subtitles).
                   * @return {EnableTextTrackPromise}
                   */
                },
                {
                  key: 'enableTextTrack',
                  value: function enableTextTrack(language, kind) {
                    if (!language) {
                      throw new TypeError(
                        'You must pass a language.'
                      );
                    }
                    return this.callMethod('enableTextTrack', {
                      language: language,
                      kind: kind,
                    });
                  },
                  /**
                   * A promise to disable the active text track.
                   *
                   * @promise DisableTextTrackPromise
                   * @fulfill {void} The track was disabled.
                   */
                  /**
                   * Disable the currently-active text track.
                   *
                   * @return {DisableTextTrackPromise}
                   */
                },
                {
                  key: 'disableTextTrack',
                  value: function disableTextTrack() {
                    return this.callMethod('disableTextTrack');
                  },
                  /**
                   * A promise to pause the video.
                   *
                   * @promise PausePromise
                   * @fulfill {void} The video was paused.
                   */
                  /**
                   * Pause the video if it’s playing.
                   *
                   * @return {PausePromise}
                   */
                },
                {
                  key: 'pause',
                  value: function pause() {
                    return this.callMethod('pause');
                  },
                  /**
                   * A promise to play the video.
                   *
                   * @promise PlayPromise
                   * @fulfill {void} The video was played.
                   */
                  /**
                   * Play the video if it’s paused. **Note:** on iOS and some other
                   * mobile devices, you cannot programmatically trigger play. Once the
                   * viewer has tapped on the play button in the player, however, you
                   * will be able to use this function.
                   *
                   * @return {PlayPromise}
                   */
                },
                {
                  key: 'play',
                  value: function play() {
                    return this.callMethod('play');
                  },
                  /**
                   * Request that the player enters fullscreen.
                   * @return {Promise}
                   */
                },
                {
                  key: 'requestFullscreen',
                  value: function requestFullscreen() {
                    if (screenfull.isEnabled) {
                      return screenfull.request(this.element);
                    }
                    return this.callMethod('requestFullscreen');
                  },
                  /**
                   * Request that the player exits fullscreen.
                   * @return {Promise}
                   */
                },
                {
                  key: 'exitFullscreen',
                  value: function exitFullscreen() {
                    if (screenfull.isEnabled) {
                      return screenfull.exit();
                    }
                    return this.callMethod('exitFullscreen');
                  },
                  /**
                   * Returns true if the player is currently fullscreen.
                   * @return {Promise}
                   */
                },
                {
                  key: 'getFullscreen',
                  value: function getFullscreen() {
                    if (screenfull.isEnabled) {
                      return npo_src.resolve(screenfull.isFullscreen);
                    }
                    return this.get('fullscreen');
                  },
                  /**
                   * Request that the player enters picture-in-picture.
                   * @return {Promise}
                   */
                },
                {
                  key: 'requestPictureInPicture',
                  value: function requestPictureInPicture() {
                    return this.callMethod('requestPictureInPicture');
                  },
                  /**
                   * Request that the player exits picture-in-picture.
                   * @return {Promise}
                   */
                },
                {
                  key: 'exitPictureInPicture',
                  value: function exitPictureInPicture() {
                    return this.callMethod('exitPictureInPicture');
                  },
                  /**
                   * Returns true if the player is currently picture-in-picture.
                   * @return {Promise}
                   */
                },
                {
                  key: 'getPictureInPicture',
                  value: function getPictureInPicture() {
                    return this.get('pictureInPicture');
                  },
                  /**
                   * A promise to prompt the viewer to initiate remote playback.
                   *
                   * @promise RemotePlaybackPromptPromise
                   * @fulfill {void}
                   * @reject {NotFoundError} No remote playback device is available.
                   */
                  /**
                   * Request to prompt the user to initiate remote playback.
                   *
                   * @return {RemotePlaybackPromptPromise}
                   */
                },
                {
                  key: 'remotePlaybackPrompt',
                  value: function remotePlaybackPrompt() {
                    return this.callMethod('remotePlaybackPrompt');
                  },
                  /**
                   * A promise to unload the video.
                   *
                   * @promise UnloadPromise
                   * @fulfill {void} The video was unloaded.
                   */
                  /**
                   * Return the player to its initial state.
                   *
                   * @return {UnloadPromise}
                   */
                },
                {
                  key: 'unload',
                  value: function unload() {
                    return this.callMethod('unload');
                  },
                  /**
                   * Cleanup the player and remove it from the DOM
                   *
                   * It won't be usable and a new one should be constructed
                   *  in order to do any operations.
                   *
                   * @return {Promise}
                   */
                },
                {
                  key: 'destroy',
                  value: function destroy() {
                    var _this5 = this;
                    return new npo_src(function (resolve) {
                      readyMap.delete(_this5);
                      playerMap.delete(_this5.element);
                      if (_this5._originalElement) {
                        playerMap.delete(_this5._originalElement);
                        _this5._originalElement.removeAttribute(
                          'data-vimeo-initialized'
                        );
                      }
                      if (
                        _this5.element &&
                        _this5.element.nodeName === 'IFRAME' &&
                        _this5.element.parentNode
                      ) {
                        // If we've added an additional wrapper div, remove that from the DOM.
                        // If not, just remove the iframe element.
                        if (
                          _this5.element.parentNode.parentNode &&
                          _this5._originalElement &&
                          _this5._originalElement !==
                            _this5.element.parentNode
                        ) {
                          _this5.element.parentNode.parentNode.removeChild(
                            _this5.element.parentNode
                          );
                        } else {
                          _this5.element.parentNode.removeChild(
                            _this5.element
                          );
                        }
                      }

                      // If the clip is private there is a case where the element stays the
                      // div element. Destroy should reset the div and remove the iframe child.
                      if (
                        _this5.element &&
                        _this5.element.nodeName === 'DIV' &&
                        _this5.element.parentNode
                      ) {
                        _this5.element.removeAttribute(
                          'data-vimeo-initialized'
                        );
                        var iframe =
                          _this5.element.querySelector('iframe');
                        if (iframe && iframe.parentNode) {
                          // If we've added an additional wrapper div, remove that from the DOM.
                          // If not, just remove the iframe element.
                          if (
                            iframe.parentNode.parentNode &&
                            _this5._originalElement &&
                            _this5._originalElement !==
                              iframe.parentNode
                          ) {
                            iframe.parentNode.parentNode.removeChild(
                              iframe.parentNode
                            );
                          } else {
                            iframe.parentNode.removeChild(iframe);
                          }
                        }
                      }
                      _this5._window.removeEventListener(
                        'message',
                        _this5._onMessage
                      );
                      if (screenfull.isEnabled) {
                        screenfull.off(
                          'fullscreenchange',
                          _this5.fullscreenchangeHandler
                        );
                      }
                      resolve();
                    });
                  },
                  /**
                   * A promise to get the autopause behavior of the video.
                   *
                   * @promise GetAutopausePromise
                   * @fulfill {boolean} Whether autopause is turned on or off.
                   * @reject {UnsupportedError} Autopause is not supported with the current
                   *         player or browser.
                   */
                  /**
                   * Get the autopause behavior for this player.
                   *
                   * @return {GetAutopausePromise}
                   */
                },
                {
                  key: 'getAutopause',
                  value: function getAutopause() {
                    return this.get('autopause');
                  },
                  /**
                   * A promise to set the autopause behavior of the video.
                   *
                   * @promise SetAutopausePromise
                   * @fulfill {boolean} Whether autopause is turned on or off.
                   * @reject {UnsupportedError} Autopause is not supported with the current
                   *         player or browser.
                   */
                  /**
                   * Enable or disable the autopause behavior of this player.
                   *
                   * By default, when another video is played in the same browser, this
                   * player will automatically pause. Unless you have a specific reason
                   * for doing so, we recommend that you leave autopause set to the
                   * default (`true`).
                   *
                   * @param {boolean} autopause
                   * @return {SetAutopausePromise}
                   */
                },
                {
                  key: 'setAutopause',
                  value: function setAutopause(autopause) {
                    return this.set('autopause', autopause);
                  },
                  /**
                   * A promise to get the buffered property of the video.
                   *
                   * @promise GetBufferedPromise
                   * @fulfill {Array} Buffered Timeranges converted to an Array.
                   */
                  /**
                   * Get the buffered property of the video.
                   *
                   * @return {GetBufferedPromise}
                   */
                },
                {
                  key: 'getBuffered',
                  value: function getBuffered() {
                    return this.get('buffered');
                  },
                  /**
                   * @typedef {Object} CameraProperties
                   * @prop {number} props.yaw - Number between 0 and 360.
                   * @prop {number} props.pitch - Number between -90 and 90.
                   * @prop {number} props.roll - Number between -180 and 180.
                   * @prop {number} props.fov - The field of view in degrees.
                   */
                  /**
                   * A promise to get the camera properties of the player.
                   *
                   * @promise GetCameraPromise
                   * @fulfill {CameraProperties} The camera properties.
                   */
                  /**
                   * For 360° videos get the camera properties for this player.
                   *
                   * @return {GetCameraPromise}
                   */
                },
                {
                  key: 'getCameraProps',
                  value: function getCameraProps() {
                    return this.get('cameraProps');
                  },
                  /**
                   * A promise to set the camera properties of the player.
                   *
                   * @promise SetCameraPromise
                   * @fulfill {Object} The camera was successfully set.
                   * @reject {RangeError} The range was out of bounds.
                   */
                  /**
                   * For 360° videos set the camera properties for this player.
                   *
                   * @param {CameraProperties} camera The camera properties
                   * @return {SetCameraPromise}
                   */
                },
                {
                  key: 'setCameraProps',
                  value: function setCameraProps(camera) {
                    return this.set('cameraProps', camera);
                  },
                  /**
                   * A representation of a chapter.
                   *
                   * @typedef {Object} VimeoChapter
                   * @property {number} startTime The start time of the chapter.
                   * @property {object} title The title of the chapter.
                   * @property {number} index The place in the order of Chapters. Starts at 1.
                   */
                  /**
                   * A promise to get chapters for the video.
                   *
                   * @promise GetChaptersPromise
                   * @fulfill {VimeoChapter[]} The chapters for the video.
                   */
                  /**
                   * Get an array of all the chapters for the video.
                   *
                   * @return {GetChaptersPromise}
                   */
                },
                {
                  key: 'getChapters',
                  value: function getChapters() {
                    return this.get('chapters');
                  },
                  /**
                   * A promise to get the currently active chapter.
                   *
                   * @promise GetCurrentChaptersPromise
                   * @fulfill {VimeoChapter|undefined} The current chapter for the video.
                   */
                  /**
                   * Get the currently active chapter for the video.
                   *
                   * @return {GetCurrentChaptersPromise}
                   */
                },
                {
                  key: 'getCurrentChapter',
                  value: function getCurrentChapter() {
                    return this.get('currentChapter');
                  },
                  /**
                   * A promise to get the accent color of the player.
                   *
                   * @promise GetColorPromise
                   * @fulfill {string} The hex color of the player.
                   */
                  /**
                   * Get the accent color for this player. Note this is deprecated in place of `getColorTwo`.
                   *
                   * @return {GetColorPromise}
                   */
                },
                {
                  key: 'getColor',
                  value: function getColor() {
                    return this.get('color');
                  },
                  /**
                   * A promise to get all colors for the player in an array.
                   *
                   * @promise GetColorsPromise
                   * @fulfill {string[]} The hex colors of the player.
                   */
                  /**
                   * Get all the colors for this player in an array: [colorOne, colorTwo, colorThree, colorFour]
                   *
                   * @return {GetColorPromise}
                   */
                },
                {
                  key: 'getColors',
                  value: function getColors() {
                    return npo_src.all([
                      this.get('colorOne'),
                      this.get('colorTwo'),
                      this.get('colorThree'),
                      this.get('colorFour'),
                    ]);
                  },
                  /**
                   * A promise to set the accent color of the player.
                   *
                   * @promise SetColorPromise
                   * @fulfill {string} The color was successfully set.
                   * @reject {TypeError} The string was not a valid hex or rgb color.
                   * @reject {ContrastError} The color was set, but the contrast is
                   *         outside of the acceptable range.
                   * @reject {EmbedSettingsError} The owner of the player has chosen to
                   *         use a specific color.
                   */
                  /**
                   * Set the accent color of this player to a hex or rgb string. Setting the
                   * color may fail if the owner of the video has set their embed
                   * preferences to force a specific color.
                   * Note this is deprecated in place of `setColorTwo`.
                   *
                   * @param {string} color The hex or rgb color string to set.
                   * @return {SetColorPromise}
                   */
                },
                {
                  key: 'setColor',
                  value: function setColor(color) {
                    return this.set('color', color);
                  },
                  /**
                   * A promise to set all colors for the player.
                   *
                   * @promise SetColorsPromise
                   * @fulfill {string[]} The colors were successfully set.
                   * @reject {TypeError} The string was not a valid hex or rgb color.
                   * @reject {ContrastError} The color was set, but the contrast is
                   *         outside of the acceptable range.
                   * @reject {EmbedSettingsError} The owner of the player has chosen to
                   *         use a specific color.
                   */
                  /**
                   * Set the colors of this player to a hex or rgb string. Setting the
                   * color may fail if the owner of the video has set their embed
                   * preferences to force a specific color.
                   * The colors should be passed in as an array: [colorOne, colorTwo, colorThree, colorFour].
                   * If a color should not be set, the index in the array can be left as null.
                   *
                   * @param {string[]} colors Array of the hex or rgb color strings to set.
                   * @return {SetColorsPromise}
                   */
                },
                {
                  key: 'setColors',
                  value: function setColors(colors) {
                    if (!Array.isArray(colors)) {
                      return new npo_src(function (resolve, reject) {
                        return reject(
                          new TypeError('Argument must be an array.')
                        );
                      });
                    }
                    var nullPromise = new npo_src(function (resolve) {
                      return resolve(null);
                    });
                    var colorPromises = [
                      colors[0]
                        ? this.set('colorOne', colors[0])
                        : nullPromise,
                      colors[1]
                        ? this.set('colorTwo', colors[1])
                        : nullPromise,
                      colors[2]
                        ? this.set('colorThree', colors[2])
                        : nullPromise,
                      colors[3]
                        ? this.set('colorFour', colors[3])
                        : nullPromise,
                    ];
                    return npo_src.all(colorPromises);
                  },
                  /**
                   * A representation of a cue point.
                   *
                   * @typedef {Object} VimeoCuePoint
                   * @property {number} time The time of the cue point.
                   * @property {object} data The data passed when adding the cue point.
                   * @property {string} id The unique id for use with removeCuePoint.
                   */
                  /**
                   * A promise to get the cue points of a video.
                   *
                   * @promise GetCuePointsPromise
                   * @fulfill {VimeoCuePoint[]} The cue points added to the video.
                   * @reject {UnsupportedError} Cue points are not supported with the current
                   *         player or browser.
                   */
                  /**
                   * Get an array of the cue points added to the video.
                   *
                   * @return {GetCuePointsPromise}
                   */
                },
                {
                  key: 'getCuePoints',
                  value: function getCuePoints() {
                    return this.get('cuePoints');
                  },
                  /**
                   * A promise to get the current time of the video.
                   *
                   * @promise GetCurrentTimePromise
                   * @fulfill {number} The current time in seconds.
                   */
                  /**
                   * Get the current playback position in seconds.
                   *
                   * @return {GetCurrentTimePromise}
                   */
                },
                {
                  key: 'getCurrentTime',
                  value: function getCurrentTime() {
                    return this.get('currentTime');
                  },
                  /**
                   * A promise to set the current time of the video.
                   *
                   * @promise SetCurrentTimePromise
                   * @fulfill {number} The actual current time that was set.
                   * @reject {RangeError} the time was less than 0 or greater than the
                   *         video’s duration.
                   */
                  /**
                   * Set the current playback position in seconds. If the player was
                   * paused, it will remain paused. Likewise, if the player was playing,
                   * it will resume playing once the video has buffered.
                   *
                   * You can provide an accurate time and the player will attempt to seek
                   * to as close to that time as possible. The exact time will be the
                   * fulfilled value of the promise.
                   *
                   * @param {number} currentTime
                   * @return {SetCurrentTimePromise}
                   */
                },
                {
                  key: 'setCurrentTime',
                  value: function setCurrentTime(currentTime) {
                    return this.set('currentTime', currentTime);
                  },
                  /**
                   * A promise to get the duration of the video.
                   *
                   * @promise GetDurationPromise
                   * @fulfill {number} The duration in seconds.
                   */
                  /**
                   * Get the duration of the video in seconds. It will be rounded to the
                   * nearest second before playback begins, and to the nearest thousandth
                   * of a second after playback begins.
                   *
                   * @return {GetDurationPromise}
                   */
                },
                {
                  key: 'getDuration',
                  value: function getDuration() {
                    return this.get('duration');
                  },
                  /**
                   * A promise to get the ended state of the video.
                   *
                   * @promise GetEndedPromise
                   * @fulfill {boolean} Whether or not the video has ended.
                   */
                  /**
                   * Get the ended state of the video. The video has ended if
                   * `currentTime === duration`.
                   *
                   * @return {GetEndedPromise}
                   */
                },
                {
                  key: 'getEnded',
                  value: function getEnded() {
                    return this.get('ended');
                  },
                  /**
                   * A promise to get the loop state of the player.
                   *
                   * @promise GetLoopPromise
                   * @fulfill {boolean} Whether or not the player is set to loop.
                   */
                  /**
                   * Get the loop state of the player.
                   *
                   * @return {GetLoopPromise}
                   */
                },
                {
                  key: 'getLoop',
                  value: function getLoop() {
                    return this.get('loop');
                  },
                  /**
                   * A promise to set the loop state of the player.
                   *
                   * @promise SetLoopPromise
                   * @fulfill {boolean} The loop state that was set.
                   */
                  /**
                   * Set the loop state of the player. When set to `true`, the player
                   * will start over immediately once playback ends.
                   *
                   * @param {boolean} loop
                   * @return {SetLoopPromise}
                   */
                },
                {
                  key: 'setLoop',
                  value: function setLoop(loop) {
                    return this.set('loop', loop);
                  },
                  /**
                   * A promise to set the muted state of the player.
                   *
                   * @promise SetMutedPromise
                   * @fulfill {boolean} The muted state that was set.
                   */
                  /**
                   * Set the muted state of the player. When set to `true`, the player
                   * volume will be muted.
                   *
                   * @param {boolean} muted
                   * @return {SetMutedPromise}
                   */
                },
                {
                  key: 'setMuted',
                  value: function setMuted(muted) {
                    return this.set('muted', muted);
                  },
                  /**
                   * A promise to get the muted state of the player.
                   *
                   * @promise GetMutedPromise
                   * @fulfill {boolean} Whether or not the player is muted.
                   */
                  /**
                   * Get the muted state of the player.
                   *
                   * @return {GetMutedPromise}
                   */
                },
                {
                  key: 'getMuted',
                  value: function getMuted() {
                    return this.get('muted');
                  },
                  /**
                   * A promise to get the paused state of the player.
                   *
                   * @promise GetLoopPromise
                   * @fulfill {boolean} Whether or not the video is paused.
                   */
                  /**
                   * Get the paused state of the player.
                   *
                   * @return {GetLoopPromise}
                   */
                },
                {
                  key: 'getPaused',
                  value: function getPaused() {
                    return this.get('paused');
                  },
                  /**
                   * A promise to get the playback rate of the player.
                   *
                   * @promise GetPlaybackRatePromise
                   * @fulfill {number} The playback rate of the player on a scale from 0 to 2.
                   */
                  /**
                   * Get the playback rate of the player on a scale from `0` to `2`.
                   *
                   * @return {GetPlaybackRatePromise}
                   */
                },
                {
                  key: 'getPlaybackRate',
                  value: function getPlaybackRate() {
                    return this.get('playbackRate');
                  },
                  /**
                   * A promise to set the playbackrate of the player.
                   *
                   * @promise SetPlaybackRatePromise
                   * @fulfill {number} The playback rate was set.
                   * @reject {RangeError} The playback rate was less than 0 or greater than 2.
                   */
                  /**
                   * Set the playback rate of the player on a scale from `0` to `2`. When set
                   * via the API, the playback rate will not be synchronized to other
                   * players or stored as the viewer's preference.
                   *
                   * @param {number} playbackRate
                   * @return {SetPlaybackRatePromise}
                   */
                },
                {
                  key: 'setPlaybackRate',
                  value: function setPlaybackRate(playbackRate) {
                    return this.set('playbackRate', playbackRate);
                  },
                  /**
                   * A promise to get the played property of the video.
                   *
                   * @promise GetPlayedPromise
                   * @fulfill {Array} Played Timeranges converted to an Array.
                   */
                  /**
                   * Get the played property of the video.
                   *
                   * @return {GetPlayedPromise}
                   */
                },
                {
                  key: 'getPlayed',
                  value: function getPlayed() {
                    return this.get('played');
                  },
                  /**
                   * A promise to get the qualities available of the current video.
                   *
                   * @promise GetQualitiesPromise
                   * @fulfill {Array} The qualities of the video.
                   */
                  /**
                   * Get the qualities of the current video.
                   *
                   * @return {GetQualitiesPromise}
                   */
                },
                {
                  key: 'getQualities',
                  value: function getQualities() {
                    return this.get('qualities');
                  },
                  /**
                   * A promise to get the current set quality of the video.
                   *
                   * @promise GetQualityPromise
                   * @fulfill {string} The current set quality.
                   */
                  /**
                   * Get the current set quality of the video.
                   *
                   * @return {GetQualityPromise}
                   */
                },
                {
                  key: 'getQuality',
                  value: function getQuality() {
                    return this.get('quality');
                  },
                  /**
                   * A promise to set the video quality.
                   *
                   * @promise SetQualityPromise
                   * @fulfill {number} The quality was set.
                   * @reject {RangeError} The quality is not available.
                   */
                  /**
                   * Set a video quality.
                   *
                   * @param {string} quality
                   * @return {SetQualityPromise}
                   */
                },
                {
                  key: 'setQuality',
                  value: function setQuality(quality) {
                    return this.set('quality', quality);
                  },
                  /**
                   * A promise to get the remote playback availability.
                   *
                   * @promise RemotePlaybackAvailabilityPromise
                   * @fulfill {boolean} Whether remote playback is available.
                   */
                  /**
                   * Get the availability of remote playback.
                   *
                   * @return {RemotePlaybackAvailabilityPromise}
                   */
                },
                {
                  key: 'getRemotePlaybackAvailability',
                  value: function getRemotePlaybackAvailability() {
                    return this.get('remotePlaybackAvailability');
                  },
                  /**
                   * A promise to get the current remote playback state.
                   *
                   * @promise RemotePlaybackStatePromise
                   * @fulfill {string} The state of the remote playback: connecting, connected, or disconnected.
                   */
                  /**
                   * Get the current remote playback state.
                   *
                   * @return {RemotePlaybackStatePromise}
                   */
                },
                {
                  key: 'getRemotePlaybackState',
                  value: function getRemotePlaybackState() {
                    return this.get('remotePlaybackState');
                  },
                  /**
                   * A promise to get the seekable property of the video.
                   *
                   * @promise GetSeekablePromise
                   * @fulfill {Array} Seekable Timeranges converted to an Array.
                   */
                  /**
                   * Get the seekable property of the video.
                   *
                   * @return {GetSeekablePromise}
                   */
                },
                {
                  key: 'getSeekable',
                  value: function getSeekable() {
                    return this.get('seekable');
                  },
                  /**
                   * A promise to get the seeking property of the player.
                   *
                   * @promise GetSeekingPromise
                   * @fulfill {boolean} Whether or not the player is currently seeking.
                   */
                  /**
                   * Get if the player is currently seeking.
                   *
                   * @return {GetSeekingPromise}
                   */
                },
                {
                  key: 'getSeeking',
                  value: function getSeeking() {
                    return this.get('seeking');
                  },
                  /**
                   * A promise to get the text tracks of a video.
                   *
                   * @promise GetTextTracksPromise
                   * @fulfill {VimeoTextTrack[]} The text tracks associated with the video.
                   */
                  /**
                   * Get an array of the text tracks that exist for the video.
                   *
                   * @return {GetTextTracksPromise}
                   */
                },
                {
                  key: 'getTextTracks',
                  value: function getTextTracks() {
                    return this.get('textTracks');
                  },
                  /**
                   * A promise to get the embed code for the video.
                   *
                   * @promise GetVideoEmbedCodePromise
                   * @fulfill {string} The `<iframe>` embed code for the video.
                   */
                  /**
                   * Get the `<iframe>` embed code for the video.
                   *
                   * @return {GetVideoEmbedCodePromise}
                   */
                },
                {
                  key: 'getVideoEmbedCode',
                  value: function getVideoEmbedCode() {
                    return this.get('videoEmbedCode');
                  },
                  /**
                   * A promise to get the id of the video.
                   *
                   * @promise GetVideoIdPromise
                   * @fulfill {number} The id of the video.
                   */
                  /**
                   * Get the id of the video.
                   *
                   * @return {GetVideoIdPromise}
                   */
                },
                {
                  key: 'getVideoId',
                  value: function getVideoId() {
                    return this.get('videoId');
                  },
                  /**
                   * A promise to get the title of the video.
                   *
                   * @promise GetVideoTitlePromise
                   * @fulfill {number} The title of the video.
                   */
                  /**
                   * Get the title of the video.
                   *
                   * @return {GetVideoTitlePromise}
                   */
                },
                {
                  key: 'getVideoTitle',
                  value: function getVideoTitle() {
                    return this.get('videoTitle');
                  },
                  /**
                   * A promise to get the native width of the video.
                   *
                   * @promise GetVideoWidthPromise
                   * @fulfill {number} The native width of the video.
                   */
                  /**
                   * Get the native width of the currently‐playing video. The width of
                   * the highest‐resolution available will be used before playback begins.
                   *
                   * @return {GetVideoWidthPromise}
                   */
                },
                {
                  key: 'getVideoWidth',
                  value: function getVideoWidth() {
                    return this.get('videoWidth');
                  },
                  /**
                   * A promise to get the native height of the video.
                   *
                   * @promise GetVideoHeightPromise
                   * @fulfill {number} The native height of the video.
                   */
                  /**
                   * Get the native height of the currently‐playing video. The height of
                   * the highest‐resolution available will be used before playback begins.
                   *
                   * @return {GetVideoHeightPromise}
                   */
                },
                {
                  key: 'getVideoHeight',
                  value: function getVideoHeight() {
                    return this.get('videoHeight');
                  },
                  /**
                   * A promise to get the vimeo.com url for the video.
                   *
                   * @promise GetVideoUrlPromise
                   * @fulfill {number} The vimeo.com url for the video.
                   * @reject {PrivacyError} The url isn’t available because of the video’s privacy setting.
                   */
                  /**
                   * Get the vimeo.com url for the video.
                   *
                   * @return {GetVideoUrlPromise}
                   */
                },
                {
                  key: 'getVideoUrl',
                  value: function getVideoUrl() {
                    return this.get('videoUrl');
                  },
                  /**
                   * A promise to get the volume level of the player.
                   *
                   * @promise GetVolumePromise
                   * @fulfill {number} The volume level of the player on a scale from 0 to 1.
                   */
                  /**
                   * Get the current volume level of the player on a scale from `0` to `1`.
                   *
                   * Most mobile devices do not support an independent volume from the
                   * system volume. In those cases, this method will always return `1`.
                   *
                   * @return {GetVolumePromise}
                   */
                },
                {
                  key: 'getVolume',
                  value: function getVolume() {
                    return this.get('volume');
                  },
                  /**
                   * A promise to set the volume level of the player.
                   *
                   * @promise SetVolumePromise
                   * @fulfill {number} The volume was set.
                   * @reject {RangeError} The volume was less than 0 or greater than 1.
                   */
                  /**
                   * Set the volume of the player on a scale from `0` to `1`. When set
                   * via the API, the volume level will not be synchronized to other
                   * players or stored as the viewer’s preference.
                   *
                   * Most mobile devices do not support setting the volume. An error will
                   * *not* be triggered in that situation.
                   *
                   * @param {number} volume
                   * @return {SetVolumePromise}
                   */
                },
                {
                  key: 'setVolume',
                  value: function setVolume(volume) {
                    return this.set('volume', volume);
                  },
                  /** @typedef {import('./lib/timing-object.types').TimingObject} TimingObject */
                  /** @typedef {import('./lib/timing-src-connector.types').TimingSrcConnectorOptions} TimingSrcConnectorOptions */
                  /** @typedef {import('./lib/timing-src-connector').TimingSrcConnector} TimingSrcConnector */

                  /**
                   * Connects a TimingObject to the video player (https://webtiming.github.io/timingobject/)
                   *
                   * @param {TimingObject} timingObject
                   * @param {TimingSrcConnectorOptions} options
                   *
                   * @return {Promise<TimingSrcConnector>}
                   */
                },
                {
                  key: 'setTimingSrc',
                  value: (function () {
                    var _setTimingSrc = _asyncToGenerator(
                      /*#__PURE__*/
                      _regeneratorRuntime().mark(function _callee(
                        timingObject,
                        options
                      ) {
                        var _this6 = this;
                        var connector;
                        return _regeneratorRuntime().wrap(
                          function _callee$(_context) {
                            while (1)
                              switch (
                                (_context.prev = _context.next)
                              ) {
                                case 0:
                                  if (timingObject) {
                                    _context.next = 2;
                                    break;
                                  }
                                  throw new TypeError(
                                    'A Timing Object must be provided.'
                                  );
                                case 2:
                                  _context.next = 4;
                                  return this.ready();
                                case 4:
                                  connector = new TimingSrcConnector(
                                    this,
                                    timingObject,
                                    options
                                  );
                                  postMessage(
                                    this,
                                    'notifyTimingObjectConnect'
                                  );
                                  connector.addEventListener(
                                    'disconnect',
                                    function () {
                                      return postMessage(
                                        _this6,
                                        'notifyTimingObjectDisconnect'
                                      );
                                    }
                                  );
                                  return _context.abrupt(
                                    'return',
                                    connector
                                  );
                                case 8:
                                case 'end':
                                  return _context.stop();
                              }
                          },
                          _callee,
                          this
                        );
                      })
                    );
                    function setTimingSrc(_x, _x2) {
                      return _setTimingSrc.apply(this, arguments);
                    }
                    return setTimingSrc;
                  })(),
                },
              ]);
              return Player;
            })();
          // Setup embed only if this is not a node environment
          if (!isNode) {
            screenfull = initializeScreenfull();
            initializeEmbeds();
            resizeEmbeds();
            initAppendVideoMetadata();
            checkUrlTimeParam();
          }

          /* harmony default export */
          __webpack_exports__['default'] = Player;

          /* WEBPACK VAR INJECTION */
        }).call(
          this,
          __webpack_require__(
            /*! ./../../../webpack/buildin/global.js */
            './node_modules/webpack/buildin/global.js'
          ),
          __webpack_require__(
            /*! ./../../../timers-browserify/main.js */
            './node_modules/timers-browserify/main.js'
          ).setImmediate
        );

        /***/
      },

    /***/
    /*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-callable.js ***!
  \******************************************************/
    './node_modules/core-js/internals/a-callable.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var isCallable = __webpack_require__(
          /*! ../internals/is-callable */
          './node_modules/core-js/internals/is-callable.js'
        );
        var tryToString = __webpack_require__(
          /*! ../internals/try-to-string */
          './node_modules/core-js/internals/try-to-string.js'
        );

        var $TypeError = TypeError;

        // `Assert: IsCallable(argument) is true`
        module.exports = function (argument) {
          if (isCallable(argument)) return argument;
          throw new $TypeError(
            tryToString(argument) + ' is not a function'
          );
        };

        /***/
      },

    /***/
    /*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/a-constructor.js ***!
  \*********************************************************/
    './node_modules/core-js/internals/a-constructor.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var isConstructor = __webpack_require__(
          /*! ../internals/is-constructor */
          './node_modules/core-js/internals/is-constructor.js'
        );
        var tryToString = __webpack_require__(
          /*! ../internals/try-to-string */
          './node_modules/core-js/internals/try-to-string.js'
        );

        var $TypeError = TypeError;

        // `Assert: IsConstructor(argument) is true`
        module.exports = function (argument) {
          if (isConstructor(argument)) return argument;
          throw new $TypeError(
            tryToString(argument) + ' is not a constructor'
          );
        };

        /***/
      },

    /***/
    /*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
    './node_modules/core-js/internals/a-possible-prototype.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var isPossiblePrototype = __webpack_require__(
          /*! ../internals/is-possible-prototype */
          './node_modules/core-js/internals/is-possible-prototype.js'
        );

        var $String = String;
        var $TypeError = TypeError;

        module.exports = function (argument) {
          if (isPossiblePrototype(argument)) return argument;
          throw new $TypeError(
            "Can't set " + $String(argument) + ' as a prototype'
          );
        };

        /***/
      },

    /***/
    /*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/an-instance.js ***!
  \*******************************************************/
    './node_modules/core-js/internals/an-instance.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var isPrototypeOf = __webpack_require__(
          /*! ../internals/object-is-prototype-of */
          './node_modules/core-js/internals/object-is-prototype-of.js'
        );

        var $TypeError = TypeError;

        module.exports = function (it, Prototype) {
          if (isPrototypeOf(Prototype, it)) return it;
          throw new $TypeError('Incorrect invocation');
        };

        /***/
      },

    /***/
    /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
    './node_modules/core-js/internals/an-object.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          './node_modules/core-js/internals/is-object.js'
        );

        var $String = String;
        var $TypeError = TypeError;

        // `Assert: Type(argument) is Object`
        module.exports = function (argument) {
          if (isObject(argument)) return argument;
          throw new $TypeError(
            $String(argument) + ' is not an object'
          );
        };

        /***/
      },

    /***/
    /*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-from.js ***!
  \******************************************************/
    './node_modules/core-js/internals/array-from.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var bind = __webpack_require__(
          /*! ../internals/function-bind-context */
          './node_modules/core-js/internals/function-bind-context.js'
        );
        var call = __webpack_require__(
          /*! ../internals/function-call */
          './node_modules/core-js/internals/function-call.js'
        );
        var toObject = __webpack_require__(
          /*! ../internals/to-object */
          './node_modules/core-js/internals/to-object.js'
        );
        var callWithSafeIterationClosing = __webpack_require__(
          /*! ../internals/call-with-safe-iteration-closing */
          './node_modules/core-js/internals/call-with-safe-iteration-closing.js'
        );
        var isArrayIteratorMethod = __webpack_require__(
          /*! ../internals/is-array-iterator-method */
          './node_modules/core-js/internals/is-array-iterator-method.js'
        );
        var isConstructor = __webpack_require__(
          /*! ../internals/is-constructor */
          './node_modules/core-js/internals/is-constructor.js'
        );
        var lengthOfArrayLike = __webpack_require__(
          /*! ../internals/length-of-array-like */
          './node_modules/core-js/internals/length-of-array-like.js'
        );
        var createProperty = __webpack_require__(
          /*! ../internals/create-property */
          './node_modules/core-js/internals/create-property.js'
        );
        var getIterator = __webpack_require__(
          /*! ../internals/get-iterator */
          './node_modules/core-js/internals/get-iterator.js'
        );
        var getIteratorMethod = __webpack_require__(
          /*! ../internals/get-iterator-method */
          './node_modules/core-js/internals/get-iterator-method.js'
        );

        var $Array = Array;

        // `Array.from` method implementation
        // https://tc39.es/ecma262/#sec-array.from
        module.exports = function from(
          arrayLike /* , mapfn = undefined, thisArg = undefined */
        ) {
          var O = toObject(arrayLike);
          var IS_CONSTRUCTOR = isConstructor(this);
          var argumentsLength = arguments.length;
          var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
          var mapping = mapfn !== undefined;
          if (mapping)
            mapfn = bind(
              mapfn,
              argumentsLength > 2 ? arguments[2] : undefined
            );
          var iteratorMethod = getIteratorMethod(O);
          var index = 0;
          var length, result, step, iterator, next, value;
          // if the target is not iterable or it's an array with the default iterator - use a simple case
          if (
            iteratorMethod &&
            !(
              this === $Array && isArrayIteratorMethod(iteratorMethod)
            )
          ) {
            result = IS_CONSTRUCTOR ? new this() : [];
            iterator = getIterator(O, iteratorMethod);
            next = iterator.next;
            for (; !(step = call(next, iterator)).done; index++) {
              value = mapping
                ? callWithSafeIterationClosing(
                    iterator,
                    mapfn,
                    [step.value, index],
                    true
                  )
                : step.value;
              createProperty(result, index, value);
            }
          } else {
            length = lengthOfArrayLike(O);
            result = IS_CONSTRUCTOR
              ? new this(length)
              : $Array(length);
            for (; length > index; index++) {
              value = mapping ? mapfn(O[index], index) : O[index];
              createProperty(result, index, value);
            }
          }
          result.length = index;
          return result;
        };

        /***/
      },

    /***/
    /*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
    './node_modules/core-js/internals/array-includes.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var toIndexedObject = __webpack_require__(
          /*! ../internals/to-indexed-object */
          './node_modules/core-js/internals/to-indexed-object.js'
        );
        var toAbsoluteIndex = __webpack_require__(
          /*! ../internals/to-absolute-index */
          './node_modules/core-js/internals/to-absolute-index.js'
        );
        var lengthOfArrayLike = __webpack_require__(
          /*! ../internals/length-of-array-like */
          './node_modules/core-js/internals/length-of-array-like.js'
        );

        // `Array.prototype.{ indexOf, includes }` methods implementation
        var createMethod = function (IS_INCLUDES) {
          return function ($this, el, fromIndex) {
            var O = toIndexedObject($this);
            var length = lengthOfArrayLike(O);
            if (length === 0) return !IS_INCLUDES && -1;
            var index = toAbsoluteIndex(fromIndex, length);
            var value;
            // Array#includes uses SameValueZero equality algorithm
            // eslint-disable-next-line no-self-compare -- NaN check
            if (IS_INCLUDES && el !== el)
              while (length > index) {
                value = O[index++];
                // eslint-disable-next-line no-self-compare -- NaN check
                if (value !== value) return true;
                // Array#indexOf ignores holes, Array#includes - not
              }
            else
              for (; length > index; index++) {
                if ((IS_INCLUDES || index in O) && O[index] === el)
                  return IS_INCLUDES || index || 0;
              }
            return !IS_INCLUDES && -1;
          };
        };

        module.exports = {
          // `Array.prototype.includes` method
          // https://tc39.es/ecma262/#sec-array.prototype.includes
          includes: createMethod(true),
          // `Array.prototype.indexOf` method
          // https://tc39.es/ecma262/#sec-array.prototype.indexof
          indexOf: createMethod(false),
        };

        /***/
      },

    /***/
    /*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
    './node_modules/core-js/internals/array-iteration.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var bind = __webpack_require__(
          /*! ../internals/function-bind-context */
          './node_modules/core-js/internals/function-bind-context.js'
        );
        var uncurryThis = __webpack_require__(
          /*! ../internals/function-uncurry-this */
          './node_modules/core-js/internals/function-uncurry-this.js'
        );
        var IndexedObject = __webpack_require__(
          /*! ../internals/indexed-object */
          './node_modules/core-js/internals/indexed-object.js'
        );
        var toObject = __webpack_require__(
          /*! ../internals/to-object */
          './node_modules/core-js/internals/to-object.js'
        );
        var lengthOfArrayLike = __webpack_require__(
          /*! ../internals/length-of-array-like */
          './node_modules/core-js/internals/length-of-array-like.js'
        );
        var arraySpeciesCreate = __webpack_require__(
          /*! ../internals/array-species-create */
          './node_modules/core-js/internals/array-species-create.js'
        );

        var push = uncurryThis([].push);

        // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
        var createMethod = function (TYPE) {
          var IS_MAP = TYPE === 1;
          var IS_FILTER = TYPE === 2;
          var IS_SOME = TYPE === 3;
          var IS_EVERY = TYPE === 4;
          var IS_FIND_INDEX = TYPE === 6;
          var IS_FILTER_REJECT = TYPE === 7;
          var NO_HOLES = TYPE === 5 || IS_FIND_INDEX;
          return function ($this, callbackfn, that, specificCreate) {
            var O = toObject($this);
            var self = IndexedObject(O);
            var length = lengthOfArrayLike(self);
            var boundFunction = bind(callbackfn, that);
            var index = 0;
            var create = specificCreate || arraySpeciesCreate;
            var target = IS_MAP
              ? create($this, length)
              : IS_FILTER || IS_FILTER_REJECT
              ? create($this, 0)
              : undefined;
            var value, result;
            for (; length > index; index++)
              if (NO_HOLES || index in self) {
                value = self[index];
                result = boundFunction(value, index, O);
                if (TYPE) {
                  if (IS_MAP) target[index] = result;
                  // map
                  else if (result)
                    switch (TYPE) {
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
                        push(target, value);
                      // filter
                    }
                  else
                    switch (TYPE) {
                      case 4:
                        return false;
                      // every
                      case 7:
                        push(target, value);
                      // filterReject
                    }
                }
              }
            return IS_FIND_INDEX
              ? -1
              : IS_SOME || IS_EVERY
              ? IS_EVERY
              : target;
          };
        };

        module.exports = {
          // `Array.prototype.forEach` method
          // https://tc39.es/ecma262/#sec-array.prototype.foreach
          forEach: createMethod(0),
          // `Array.prototype.map` method
          // https://tc39.es/ecma262/#sec-array.prototype.map
          map: createMethod(1),
          // `Array.prototype.filter` method
          // https://tc39.es/ecma262/#sec-array.prototype.filter
          filter: createMethod(2),
          // `Array.prototype.some` method
          // https://tc39.es/ecma262/#sec-array.prototype.some
          some: createMethod(3),
          // `Array.prototype.every` method
          // https://tc39.es/ecma262/#sec-array.prototype.every
          every: createMethod(4),
          // `Array.prototype.find` method
          // https://tc39.es/ecma262/#sec-array.prototype.find
          find: createMethod(5),
          // `Array.prototype.findIndex` method
          // https://tc39.es/ecma262/#sec-array.prototype.findIndex
          findIndex: createMethod(6),
          // `Array.prototype.filterReject` method
          // https://github.com/tc39/proposal-array-filtering
          filterReject: createMethod(7),
        };

        /***/
      },

    /***/
    /*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
    './node_modules/core-js/internals/array-method-has-species-support.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var fails = __webpack_require__(
          /*! ../internals/fails */
          './node_modules/core-js/internals/fails.js'
        );
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          './node_modules/core-js/internals/well-known-symbol.js'
        );
        var V8_VERSION = __webpack_require__(
          /*! ../internals/engine-v8-version */
          './node_modules/core-js/internals/engine-v8-version.js'
        );

        var SPECIES = wellKnownSymbol('species');

        module.exports = function (METHOD_NAME) {
          // We can't use this feature detection in V8 since it causes
          // deoptimization and serious performance degradation
          // https://github.com/zloirock/core-js/issues/677
          return (
            V8_VERSION >= 51 ||
            !fails(function () {
              var array = [];
              var constructor = (array.constructor = {});
              constructor[SPECIES] = function () {
                return {
                  foo: 1,
                };
              };
              return array[METHOD_NAME](Boolean).foo !== 1;
            })
          );
        };

        /***/
      },

    /***/
    /*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
    './node_modules/core-js/internals/array-method-is-strict.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var fails = __webpack_require__(
          /*! ../internals/fails */
          './node_modules/core-js/internals/fails.js'
        );

        module.exports = function (METHOD_NAME, argument) {
          var method = [][METHOD_NAME];
          return (
            !!method &&
            fails(function () {
              // eslint-disable-next-line no-useless-call -- required for testing
              method.call(
                null,
                argument ||
                  function () {
                    return 1;
                  },
                1
              );
            })
          );
        };

        /***/
      },

    /***/
    /*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/array-slice.js ***!
  \*******************************************************/
    './node_modules/core-js/internals/array-slice.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var uncurryThis = __webpack_require__(
          /*! ../internals/function-uncurry-this */
          './node_modules/core-js/internals/function-uncurry-this.js'
        );

        module.exports = uncurryThis([].slice);

        /***/
      },

    /***/
    /*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-constructor.js ***!
  \*********************************************************************/
    './node_modules/core-js/internals/array-species-constructor.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var isArray = __webpack_require__(
          /*! ../internals/is-array */
          './node_modules/core-js/internals/is-array.js'
        );
        var isConstructor = __webpack_require__(
          /*! ../internals/is-constructor */
          './node_modules/core-js/internals/is-constructor.js'
        );
        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          './node_modules/core-js/internals/is-object.js'
        );
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          './node_modules/core-js/internals/well-known-symbol.js'
        );

        var SPECIES = wellKnownSymbol('species');
        var $Array = Array;

        // a part of `ArraySpeciesCreate` abstract operation
        // https://tc39.es/ecma262/#sec-arrayspeciescreate
        module.exports = function (originalArray) {
          var C;
          if (isArray(originalArray)) {
            C = originalArray.constructor;
            // cross-realm fallback
            if (
              isConstructor(C) &&
              (C === $Array || isArray(C.prototype))
            )
              C = undefined;
            else if (isObject(C)) {
              C = C[SPECIES];
              if (C === null) C = undefined;
            }
          }
          return C === undefined ? $Array : C;
        };

        /***/
      },

    /***/
    /*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
    './node_modules/core-js/internals/array-species-create.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var arraySpeciesConstructor = __webpack_require__(
          /*! ../internals/array-species-constructor */
          './node_modules/core-js/internals/array-species-constructor.js'
        );

        // `ArraySpeciesCreate` abstract operation
        // https://tc39.es/ecma262/#sec-arrayspeciescreate
        module.exports = function (originalArray, length) {
          return new (arraySpeciesConstructor(originalArray))(
            length === 0 ? 0 : length
          );
        };

        /***/
      },

    /***/
    /*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/call-with-safe-iteration-closing.js ***!
  \****************************************************************************/
    './node_modules/core-js/internals/call-with-safe-iteration-closing.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var anObject = __webpack_require__(
          /*! ../internals/an-object */
          './node_modules/core-js/internals/an-object.js'
        );
        var iteratorClose = __webpack_require__(
          /*! ../internals/iterator-close */
          './node_modules/core-js/internals/iterator-close.js'
        );

        // call something on iterator step with safe closing on error
        module.exports = function (iterator, fn, value, ENTRIES) {
          try {
            return ENTRIES
              ? fn(anObject(value)[0], value[1])
              : fn(value);
          } catch (error) {
            iteratorClose(iterator, 'throw', error);
          }
        };

        /***/
      },

    /***/
    /*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \**************************************************************************/
    './node_modules/core-js/internals/check-correctness-of-iteration.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          './node_modules/core-js/internals/well-known-symbol.js'
        );

        var ITERATOR = wellKnownSymbol('iterator');
        var SAFE_CLOSING = false;

        try {
          var called = 0;
          var iteratorWithReturn = {
            next: function () {
              return {
                done: !!called++,
              };
            },
            return: function () {
              SAFE_CLOSING = true;
            },
          };
          iteratorWithReturn[ITERATOR] = function () {
            return this;
          };
          // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
          Array.from(iteratorWithReturn, function () {
            throw 2;
          });
        } catch (error) {
          /* empty */
        }

        module.exports = function (exec, SKIP_CLOSING) {
          try {
            if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
          } catch (error) {
            return false;
          }
          // workaround of old WebKit + `eval` bug
          var ITERATION_SUPPORT = false;
          try {
            var object = {};
            object[ITERATOR] = function () {
              return {
                next: function () {
                  return {
                    done: (ITERATION_SUPPORT = true),
                  };
                },
              };
            };
            exec(object);
          } catch (error) {
            /* empty */
          }
          return ITERATION_SUPPORT;
        };

        /***/
      },

    /***/
    /*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
    './node_modules/core-js/internals/classof-raw.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var uncurryThis = __webpack_require__(
          /*! ../internals/function-uncurry-this */
          './node_modules/core-js/internals/function-uncurry-this.js'
        );

        var toString = uncurryThis({}.toString);
        var stringSlice = uncurryThis(''.slice);

        module.exports = function (it) {
          return stringSlice(toString(it), 8, -1);
        };

        /***/
      },

    /***/
    /*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
    './node_modules/core-js/internals/classof.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var TO_STRING_TAG_SUPPORT = __webpack_require__(
          /*! ../internals/to-string-tag-support */
          './node_modules/core-js/internals/to-string-tag-support.js'
        );
        var isCallable = __webpack_require__(
          /*! ../internals/is-callable */
          './node_modules/core-js/internals/is-callable.js'
        );
        var classofRaw = __webpack_require__(
          /*! ../internals/classof-raw */
          './node_modules/core-js/internals/classof-raw.js'
        );
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          './node_modules/core-js/internals/well-known-symbol.js'
        );

        var TO_STRING_TAG = wellKnownSymbol('toStringTag');
        var $Object = Object;

        // ES3 wrong here
        var CORRECT_ARGUMENTS =
          classofRaw(
            (function () {
              return arguments;
            })()
          ) === 'Arguments';

        // fallback for IE11 Script Access Denied error
        var tryGet = function (it, key) {
          try {
            return it[key];
          } catch (error) {
            /* empty */
          }
        };

        // getting tag from ES6+ `Object.prototype.toString`
        module.exports = TO_STRING_TAG_SUPPORT
          ? classofRaw
          : function (it) {
              var O, tag, result;
              return it === undefined
                ? 'Undefined'
                : it === null
                ? 'Null' // @@toStringTag case
                : typeof (tag = tryGet(
                    (O = $Object(it)),
                    TO_STRING_TAG
                  )) == 'string'
                ? tag // builtinTag case
                : CORRECT_ARGUMENTS
                ? classofRaw(O) // ES3 arguments fallback
                : (result = classofRaw(O)) === 'Object' &&
                  isCallable(O.callee)
                ? 'Arguments'
                : result;
            };

        /***/
      },

    /***/
    /*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
    './node_modules/core-js/internals/copy-constructor-properties.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var hasOwn = __webpack_require__(
          /*! ../internals/has-own-property */
          './node_modules/core-js/internals/has-own-property.js'
        );
        var ownKeys = __webpack_require__(
          /*! ../internals/own-keys */
          './node_modules/core-js/internals/own-keys.js'
        );
        var getOwnPropertyDescriptorModule = __webpack_require__(
          /*! ../internals/object-get-own-property-descriptor */
          './node_modules/core-js/internals/object-get-own-property-descriptor.js'
        );
        var definePropertyModule = __webpack_require__(
          /*! ../internals/object-define-property */
          './node_modules/core-js/internals/object-define-property.js'
        );

        module.exports = function (target, source, exceptions) {
          var keys = ownKeys(source);
          var defineProperty = definePropertyModule.f;
          var getOwnPropertyDescriptor =
            getOwnPropertyDescriptorModule.f;
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (
              !hasOwn(target, key) &&
              !(exceptions && hasOwn(exceptions, key))
            ) {
              defineProperty(
                target,
                key,
                getOwnPropertyDescriptor(source, key)
              );
            }
          }
        };

        /***/
      },

    /***/
    /*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-is-regexp-logic.js ***!
  \*******************************************************************/
    './node_modules/core-js/internals/correct-is-regexp-logic.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          './node_modules/core-js/internals/well-known-symbol.js'
        );

        var MATCH = wellKnownSymbol('match');

        module.exports = function (METHOD_NAME) {
          var regexp = /./;
          try {
            '/./'[METHOD_NAME](regexp);
          } catch (error1) {
            try {
              regexp[MATCH] = false;
              return '/./'[METHOD_NAME](regexp);
            } catch (error2) {
              /* empty */
            }
          }
          return false;
        };

        /***/
      },

    /***/
    /*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
    './node_modules/core-js/internals/create-non-enumerable-property.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */
          './node_modules/core-js/internals/descriptors.js'
        );
        var definePropertyModule = __webpack_require__(
          /*! ../internals/object-define-property */
          './node_modules/core-js/internals/object-define-property.js'
        );
        var createPropertyDescriptor = __webpack_require__(
          /*! ../internals/create-property-descriptor */
          './node_modules/core-js/internals/create-property-descriptor.js'
        );

        module.exports = DESCRIPTORS
          ? function (object, key, value) {
              return definePropertyModule.f(
                object,
                key,
                createPropertyDescriptor(1, value)
              );
            }
          : function (object, key, value) {
              object[key] = value;
              return object;
            };

        /***/
      },

    /***/
    /*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
    './node_modules/core-js/internals/create-property-descriptor.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        module.exports = function (bitmap, value) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value,
          };
        };

        /***/
      },

    /***/
    /*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
    './node_modules/core-js/internals/create-property.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */
          './node_modules/core-js/internals/descriptors.js'
        );
        var definePropertyModule = __webpack_require__(
          /*! ../internals/object-define-property */
          './node_modules/core-js/internals/object-define-property.js'
        );
        var createPropertyDescriptor = __webpack_require__(
          /*! ../internals/create-property-descriptor */
          './node_modules/core-js/internals/create-property-descriptor.js'
        );

        module.exports = function (object, key, value) {
          if (DESCRIPTORS)
            definePropertyModule.f(
              object,
              key,
              createPropertyDescriptor(0, value)
            );
          else object[key] = value;
        };

        /***/
      },

    /***/
    /*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/define-built-in-accessor.js ***!
  \********************************************************************/
    './node_modules/core-js/internals/define-built-in-accessor.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var makeBuiltIn = __webpack_require__(
          /*! ../internals/make-built-in */
          './node_modules/core-js/internals/make-built-in.js'
        );
        var defineProperty = __webpack_require__(
          /*! ../internals/object-define-property */
          './node_modules/core-js/internals/object-define-property.js'
        );

        module.exports = function (target, name, descriptor) {
          if (descriptor.get)
            makeBuiltIn(descriptor.get, name, {
              getter: true,
            });
          if (descriptor.set)
            makeBuiltIn(descriptor.set, name, {
              setter: true,
            });
          return defineProperty.f(target, name, descriptor);
        };

        /***/
      },

    /***/
    /*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-built-in.js ***!
  \***********************************************************/
    './node_modules/core-js/internals/define-built-in.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var isCallable = __webpack_require__(
          /*! ../internals/is-callable */
          './node_modules/core-js/internals/is-callable.js'
        );
        var definePropertyModule = __webpack_require__(
          /*! ../internals/object-define-property */
          './node_modules/core-js/internals/object-define-property.js'
        );
        var makeBuiltIn = __webpack_require__(
          /*! ../internals/make-built-in */
          './node_modules/core-js/internals/make-built-in.js'
        );
        var defineGlobalProperty = __webpack_require__(
          /*! ../internals/define-global-property */
          './node_modules/core-js/internals/define-global-property.js'
        );

        module.exports = function (O, key, value, options) {
          if (!options) options = {};
          var simple = options.enumerable;
          var name = options.name !== undefined ? options.name : key;
          if (isCallable(value)) makeBuiltIn(value, name, options);
          if (options.global) {
            if (simple) O[key] = value;
            else defineGlobalProperty(key, value);
          } else {
            try {
              if (!options.unsafe) delete O[key];
              else if (O[key]) simple = true;
            } catch (error) {
              /* empty */
            }
            if (simple) O[key] = value;
            else
              definePropertyModule.f(O, key, {
                value: value,
                enumerable: false,
                configurable: !options.nonConfigurable,
                writable: !options.nonWritable,
              });
          }
          return O;
        };

        /***/
      },

    /***/
    /*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/define-global-property.js ***!
  \******************************************************************/
    './node_modules/core-js/internals/define-global-property.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var global = __webpack_require__(
          /*! ../internals/global */
          './node_modules/core-js/internals/global.js'
        );

        // eslint-disable-next-line es/no-object-defineproperty -- safe
        var defineProperty = Object.defineProperty;

        module.exports = function (key, value) {
          try {
            defineProperty(global, key, {
              value: value,
              configurable: true,
              writable: true,
            });
          } catch (error) {
            global[key] = value;
          }
          return value;
        };

        /***/
      },

    /***/
    /*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
    './node_modules/core-js/internals/descriptors.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var fails = __webpack_require__(
          /*! ../internals/fails */
          './node_modules/core-js/internals/fails.js'
        );

        // Detect IE8's incomplete defineProperty implementation
        module.exports = !fails(function () {
          // eslint-disable-next-line es/no-object-defineproperty -- required for testing
          return (
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1] !== 7
          );
        });

        /***/
      },

    /***/
    /*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
    './node_modules/core-js/internals/document-create-element.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var global = __webpack_require__(
          /*! ../internals/global */
          './node_modules/core-js/internals/global.js'
        );
        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          './node_modules/core-js/internals/is-object.js'
        );

        var document = global.document;
        // typeof document.createElement is 'object' in old IE
        var EXISTS =
          isObject(document) && isObject(document.createElement);

        module.exports = function (it) {
          return EXISTS ? document.createElement(it) : {};
        };

        /***/
      },

    /***/
    /*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-browser.js ***!
  \*************************************************************/
    './node_modules/core-js/internals/engine-is-browser.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var IS_DENO = __webpack_require__(
          /*! ../internals/engine-is-deno */
          './node_modules/core-js/internals/engine-is-deno.js'
        );
        var IS_NODE = __webpack_require__(
          /*! ../internals/engine-is-node */
          './node_modules/core-js/internals/engine-is-node.js'
        );

        module.exports =
          !IS_DENO &&
          !IS_NODE &&
          typeof window == 'object' &&
          typeof document == 'object';

        /***/
      },

    /***/
    /*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-deno.js ***!
  \**********************************************************/
    './node_modules/core-js/internals/engine-is-deno.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        /* global Deno -- Deno case */
        module.exports =
          typeof Deno == 'object' &&
          Deno &&
          typeof Deno.version == 'object';

        /***/
      },

    /***/
    /*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-ios-pebble.js ***!
  \****************************************************************/
    './node_modules/core-js/internals/engine-is-ios-pebble.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var userAgent = __webpack_require__(
          /*! ../internals/engine-user-agent */
          './node_modules/core-js/internals/engine-user-agent.js'
        );

        module.exports =
          /ipad|iphone|ipod/i.test(userAgent) &&
          typeof Pebble != 'undefined';

        /***/
      },

    /***/
    /*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-ios.js ***!
  \*********************************************************/
    './node_modules/core-js/internals/engine-is-ios.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var userAgent = __webpack_require__(
          /*! ../internals/engine-user-agent */
          './node_modules/core-js/internals/engine-user-agent.js'
        );

        // eslint-disable-next-line redos/no-vulnerable -- safe
        module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(
          userAgent
        );

        /***/
      },

    /***/
    /*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-node.js ***!
  \**********************************************************/
    './node_modules/core-js/internals/engine-is-node.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var global = __webpack_require__(
          /*! ../internals/global */
          './node_modules/core-js/internals/global.js'
        );
        var classof = __webpack_require__(
          /*! ../internals/classof-raw */
          './node_modules/core-js/internals/classof-raw.js'
        );

        module.exports = classof(global.process) === 'process';

        /***/
      },

    /***/
    /*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-webos-webkit.js ***!
  \******************************************************************/
    './node_modules/core-js/internals/engine-is-webos-webkit.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var userAgent = __webpack_require__(
          /*! ../internals/engine-user-agent */
          './node_modules/core-js/internals/engine-user-agent.js'
        );

        module.exports = /web0s(?!.*chrome)/i.test(userAgent);

        /***/
      },

    /***/
    /*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
    './node_modules/core-js/internals/engine-user-agent.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        module.exports =
          (typeof navigator != 'undefined' &&
            String(navigator.userAgent)) ||
          '';

        /***/
      },

    /***/
    /*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
    './node_modules/core-js/internals/engine-v8-version.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var global = __webpack_require__(
          /*! ../internals/global */
          './node_modules/core-js/internals/global.js'
        );
        var userAgent = __webpack_require__(
          /*! ../internals/engine-user-agent */
          './node_modules/core-js/internals/engine-user-agent.js'
        );

        var process = global.process;
        var Deno = global.Deno;
        var versions =
          (process && process.versions) || (Deno && Deno.version);
        var v8 = versions && versions.v8;
        var match, version;

        if (v8) {
          match = v8.split('.');
          // in old Chrome, versions of V8 isn't V8 = Chrome / 10
          // but their correct versions are not interesting for us
          version =
            match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
        }

        // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
        // so check `userAgent` even if `.v8` exists, but 0
        if (!version && userAgent) {
          match = userAgent.match(/Edge\/(\d+)/);
          if (!match || match[1] >= 74) {
            match = userAgent.match(/Chrome\/(\d+)/);
            if (match) version = +match[1];
          }
        }

        module.exports = version;

        /***/
      },

    /***/
    /*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
    './node_modules/core-js/internals/enum-bug-keys.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        // IE8- don't enum bug keys
        module.exports = [
          'constructor',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'toLocaleString',
          'toString',
          'valueOf',
        ];

        /***/
      },

    /***/
    /*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
    './node_modules/core-js/internals/export.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var global = __webpack_require__(
          /*! ../internals/global */
          './node_modules/core-js/internals/global.js'
        );
        var getOwnPropertyDescriptor = __webpack_require__(
          /*! ../internals/object-get-own-property-descriptor */
          './node_modules/core-js/internals/object-get-own-property-descriptor.js'
        ).f;
        var createNonEnumerableProperty = __webpack_require__(
          /*! ../internals/create-non-enumerable-property */
          './node_modules/core-js/internals/create-non-enumerable-property.js'
        );
        var defineBuiltIn = __webpack_require__(
          /*! ../internals/define-built-in */
          './node_modules/core-js/internals/define-built-in.js'
        );
        var defineGlobalProperty = __webpack_require__(
          /*! ../internals/define-global-property */
          './node_modules/core-js/internals/define-global-property.js'
        );
        var copyConstructorProperties = __webpack_require__(
          /*! ../internals/copy-constructor-properties */
          './node_modules/core-js/internals/copy-constructor-properties.js'
        );
        var isForced = __webpack_require__(
          /*! ../internals/is-forced */
          './node_modules/core-js/internals/is-forced.js'
        );

        /*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
        module.exports = function (options, source) {
          var TARGET = options.target;
          var GLOBAL = options.global;
          var STATIC = options.stat;
          var FORCED,
            target,
            key,
            targetProperty,
            sourceProperty,
            descriptor;
          if (GLOBAL) {
            target = global;
          } else if (STATIC) {
            target =
              global[TARGET] || defineGlobalProperty(TARGET, {});
          } else {
            target = global[TARGET] && global[TARGET].prototype;
          }
          if (target)
            for (key in source) {
              sourceProperty = source[key];
              if (options.dontCallGetSet) {
                descriptor = getOwnPropertyDescriptor(target, key);
                targetProperty = descriptor && descriptor.value;
              } else targetProperty = target[key];
              FORCED = isForced(
                GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key,
                options.forced
              );
              // contained in target
              if (!FORCED && targetProperty !== undefined) {
                if (typeof sourceProperty == typeof targetProperty)
                  continue;
                copyConstructorProperties(
                  sourceProperty,
                  targetProperty
                );
              }
              // add a flag to not completely full polyfills
              if (
                options.sham ||
                (targetProperty && targetProperty.sham)
              ) {
                createNonEnumerableProperty(
                  sourceProperty,
                  'sham',
                  true
                );
              }
              defineBuiltIn(target, key, sourceProperty, options);
            }
        };

        /***/
      },

    /***/
    /*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
    './node_modules/core-js/internals/fails.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

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
    /*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/function-apply.js ***!
  \**********************************************************/
    './node_modules/core-js/internals/function-apply.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var NATIVE_BIND = __webpack_require__(
          /*! ../internals/function-bind-native */
          './node_modules/core-js/internals/function-bind-native.js'
        );

        var FunctionPrototype = Function.prototype;
        var apply = FunctionPrototype.apply;
        var call = FunctionPrototype.call;

        // eslint-disable-next-line es/no-reflect -- safe
        module.exports =
          (typeof Reflect == 'object' && Reflect.apply) ||
          (NATIVE_BIND
            ? call.bind(apply)
            : function () {
                return call.apply(apply, arguments);
              });

        /***/
      },

    /***/
    /*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
    './node_modules/core-js/internals/function-bind-context.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var uncurryThis = __webpack_require__(
          /*! ../internals/function-uncurry-this-clause */
          './node_modules/core-js/internals/function-uncurry-this-clause.js'
        );
        var aCallable = __webpack_require__(
          /*! ../internals/a-callable */
          './node_modules/core-js/internals/a-callable.js'
        );
        var NATIVE_BIND = __webpack_require__(
          /*! ../internals/function-bind-native */
          './node_modules/core-js/internals/function-bind-native.js'
        );

        var bind = uncurryThis(uncurryThis.bind);

        // optional / simple context binding
        module.exports = function (fn, that) {
          aCallable(fn);
          return that === undefined
            ? fn
            : NATIVE_BIND
            ? bind(fn, that)
            : function () /* ...args */
              {
                return fn.apply(that, arguments);
              };
        };

        /***/
      },

    /***/
    /*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-native.js ***!
  \****************************************************************/
    './node_modules/core-js/internals/function-bind-native.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var fails = __webpack_require__(
          /*! ../internals/fails */
          './node_modules/core-js/internals/fails.js'
        );

        module.exports = !fails(function () {
          // eslint-disable-next-line es/no-function-prototype-bind -- safe
          var test = function () {
            /* empty */
          }.bind();
          // eslint-disable-next-line no-prototype-builtins -- safe
          return (
            typeof test != 'function' ||
            test.hasOwnProperty('prototype')
          );
        });

        /***/
      },

    /***/
    /*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-call.js ***!
  \*********************************************************/
    './node_modules/core-js/internals/function-call.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var NATIVE_BIND = __webpack_require__(
          /*! ../internals/function-bind-native */
          './node_modules/core-js/internals/function-bind-native.js'
        );

        var call = Function.prototype.call;

        module.exports = NATIVE_BIND
          ? call.bind(call)
          : function () {
              return call.apply(call, arguments);
            };

        /***/
      },

    /***/
    /*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-name.js ***!
  \*********************************************************/
    './node_modules/core-js/internals/function-name.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */
          './node_modules/core-js/internals/descriptors.js'
        );
        var hasOwn = __webpack_require__(
          /*! ../internals/has-own-property */
          './node_modules/core-js/internals/has-own-property.js'
        );

        var FunctionPrototype = Function.prototype;
        // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
        var getDescriptor =
          DESCRIPTORS && Object.getOwnPropertyDescriptor;

        var EXISTS = hasOwn(FunctionPrototype, 'name');
        // additional protection from minified / mangled / dropped function names
        var PROPER =
          EXISTS &&
          function something() {
            /* empty */
          }.name === 'something';
        var CONFIGURABLE =
          EXISTS &&
          (!DESCRIPTORS ||
            (DESCRIPTORS &&
              getDescriptor(FunctionPrototype, 'name').configurable));

        module.exports = {
          EXISTS: EXISTS,
          PROPER: PROPER,
          CONFIGURABLE: CONFIGURABLE,
        };

        /***/
      },

    /***/
    /*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/function-uncurry-this-accessor.js ***!
  \**************************************************************************/
    './node_modules/core-js/internals/function-uncurry-this-accessor.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var uncurryThis = __webpack_require__(
          /*! ../internals/function-uncurry-this */
          './node_modules/core-js/internals/function-uncurry-this.js'
        );
        var aCallable = __webpack_require__(
          /*! ../internals/a-callable */
          './node_modules/core-js/internals/a-callable.js'
        );

        module.exports = function (object, key, method) {
          try {
            // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
            return uncurryThis(
              aCallable(
                Object.getOwnPropertyDescriptor(object, key)[method]
              )
            );
          } catch (error) {
            /* empty */
          }
        };

        /***/
      },

    /***/
    /*!************************************************************************!*\
  !*** ./node_modules/core-js/internals/function-uncurry-this-clause.js ***!
  \************************************************************************/
    './node_modules/core-js/internals/function-uncurry-this-clause.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var classofRaw = __webpack_require__(
          /*! ../internals/classof-raw */
          './node_modules/core-js/internals/classof-raw.js'
        );
        var uncurryThis = __webpack_require__(
          /*! ../internals/function-uncurry-this */
          './node_modules/core-js/internals/function-uncurry-this.js'
        );

        module.exports = function (fn) {
          // Nashorn bug:
          //   https://github.com/zloirock/core-js/issues/1128
          //   https://github.com/zloirock/core-js/issues/1130
          if (classofRaw(fn) === 'Function') return uncurryThis(fn);
        };

        /***/
      },

    /***/
    /*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-uncurry-this.js ***!
  \*****************************************************************/
    './node_modules/core-js/internals/function-uncurry-this.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var NATIVE_BIND = __webpack_require__(
          /*! ../internals/function-bind-native */
          './node_modules/core-js/internals/function-bind-native.js'
        );

        var FunctionPrototype = Function.prototype;
        var call = FunctionPrototype.call;
        var uncurryThisWithBind =
          NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

        module.exports = NATIVE_BIND
          ? uncurryThisWithBind
          : function (fn) {
              return function () {
                return call.apply(fn, arguments);
              };
            };

        /***/
      },

    /***/
    /*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
    './node_modules/core-js/internals/get-built-in.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var global = __webpack_require__(
          /*! ../internals/global */
          './node_modules/core-js/internals/global.js'
        );
        var isCallable = __webpack_require__(
          /*! ../internals/is-callable */
          './node_modules/core-js/internals/is-callable.js'
        );

        var aFunction = function (argument) {
          return isCallable(argument) ? argument : undefined;
        };

        module.exports = function (namespace, method) {
          return arguments.length < 2
            ? aFunction(global[namespace])
            : global[namespace] && global[namespace][method];
        };

        /***/
      },

    /***/
    /*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator-method.js ***!
  \***************************************************************/
    './node_modules/core-js/internals/get-iterator-method.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var classof = __webpack_require__(
          /*! ../internals/classof */
          './node_modules/core-js/internals/classof.js'
        );
        var getMethod = __webpack_require__(
          /*! ../internals/get-method */
          './node_modules/core-js/internals/get-method.js'
        );
        var isNullOrUndefined = __webpack_require__(
          /*! ../internals/is-null-or-undefined */
          './node_modules/core-js/internals/is-null-or-undefined.js'
        );
        var Iterators = __webpack_require__(
          /*! ../internals/iterators */
          './node_modules/core-js/internals/iterators.js'
        );
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          './node_modules/core-js/internals/well-known-symbol.js'
        );

        var ITERATOR = wellKnownSymbol('iterator');

        module.exports = function (it) {
          if (!isNullOrUndefined(it))
            return (
              getMethod(it, ITERATOR) ||
              getMethod(it, '@@iterator') ||
              Iterators[classof(it)]
            );
        };

        /***/
      },

    /***/
    /*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-iterator.js ***!
  \********************************************************/
    './node_modules/core-js/internals/get-iterator.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var call = __webpack_require__(
          /*! ../internals/function-call */
          './node_modules/core-js/internals/function-call.js'
        );
        var aCallable = __webpack_require__(
          /*! ../internals/a-callable */
          './node_modules/core-js/internals/a-callable.js'
        );
        var anObject = __webpack_require__(
          /*! ../internals/an-object */
          './node_modules/core-js/internals/an-object.js'
        );
        var tryToString = __webpack_require__(
          /*! ../internals/try-to-string */
          './node_modules/core-js/internals/try-to-string.js'
        );
        var getIteratorMethod = __webpack_require__(
          /*! ../internals/get-iterator-method */
          './node_modules/core-js/internals/get-iterator-method.js'
        );

        var $TypeError = TypeError;

        module.exports = function (argument, usingIterator) {
          var iteratorMethod =
            arguments.length < 2
              ? getIteratorMethod(argument)
              : usingIterator;
          if (aCallable(iteratorMethod))
            return anObject(call(iteratorMethod, argument));
          throw new $TypeError(
            tryToString(argument) + ' is not iterable'
          );
        };

        /***/
      },

    /***/
    /*!******************************************************!*\
  !*** ./node_modules/core-js/internals/get-method.js ***!
  \******************************************************/
    './node_modules/core-js/internals/get-method.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var aCallable = __webpack_require__(
          /*! ../internals/a-callable */
          './node_modules/core-js/internals/a-callable.js'
        );
        var isNullOrUndefined = __webpack_require__(
          /*! ../internals/is-null-or-undefined */
          './node_modules/core-js/internals/is-null-or-undefined.js'
        );

        // `GetMethod` abstract operation
        // https://tc39.es/ecma262/#sec-getmethod
        module.exports = function (V, P) {
          var func = V[P];
          return isNullOrUndefined(func)
            ? undefined
            : aCallable(func);
        };

        /***/
      },

    /***/
    /*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
    './node_modules/core-js/internals/global.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';
        /* WEBPACK VAR INJECTION */
        (function (global) {
          var check = function (it) {
            return it && it.Math === Math && it;
          };

          // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
          module.exports = // eslint-disable-next-line es/no-global-this -- safe
            check(typeof globalThis == 'object' && globalThis) ||
            check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
            check(typeof self == 'object' && self) ||
            check(typeof global == 'object' && global) ||
            check(typeof this == 'object' && this) || // eslint-disable-next-line no-new-func -- fallback
            (function () {
              return this;
            })() ||
            Function('return this')();

          /* WEBPACK VAR INJECTION */
        }).call(
          this,
          __webpack_require__(
            /*! ./../../webpack/buildin/global.js */
            './node_modules/webpack/buildin/global.js'
          )
        );

        /***/
      },

    /***/
    /*!************************************************************!*\
  !*** ./node_modules/core-js/internals/has-own-property.js ***!
  \************************************************************/
    './node_modules/core-js/internals/has-own-property.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var uncurryThis = __webpack_require__(
          /*! ../internals/function-uncurry-this */
          './node_modules/core-js/internals/function-uncurry-this.js'
        );
        var toObject = __webpack_require__(
          /*! ../internals/to-object */
          './node_modules/core-js/internals/to-object.js'
        );

        var hasOwnProperty = uncurryThis({}.hasOwnProperty);

        // `HasOwnProperty` abstract operation
        // https://tc39.es/ecma262/#sec-hasownproperty
        // eslint-disable-next-line es/no-object-hasown -- safe
        module.exports =
          Object.hasOwn ||
          function hasOwn(it, key) {
            return hasOwnProperty(toObject(it), key);
          };

        /***/
      },

    /***/
    /*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
    './node_modules/core-js/internals/hidden-keys.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        module.exports = {};

        /***/
      },

    /***/
    /*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/host-report-errors.js ***!
  \**************************************************************/
    './node_modules/core-js/internals/host-report-errors.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        module.exports = function (a, b) {
          try {
            // eslint-disable-next-line no-console -- safe
            arguments.length === 1
              ? console.error(a)
              : console.error(a, b);
          } catch (error) {
            /* empty */
          }
        };

        /***/
      },

    /***/
    /*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
    './node_modules/core-js/internals/html.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var getBuiltIn = __webpack_require__(
          /*! ../internals/get-built-in */
          './node_modules/core-js/internals/get-built-in.js'
        );

        module.exports = getBuiltIn('document', 'documentElement');

        /***/
      },

    /***/
    /*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
    './node_modules/core-js/internals/ie8-dom-define.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */
          './node_modules/core-js/internals/descriptors.js'
        );
        var fails = __webpack_require__(
          /*! ../internals/fails */
          './node_modules/core-js/internals/fails.js'
        );
        var createElement = __webpack_require__(
          /*! ../internals/document-create-element */
          './node_modules/core-js/internals/document-create-element.js'
        );

        // Thanks to IE8 for its funny defineProperty
        module.exports =
          !DESCRIPTORS &&
          !fails(function () {
            // eslint-disable-next-line es/no-object-defineproperty -- required for testing
            return (
              Object.defineProperty(createElement('div'), 'a', {
                get: function () {
                  return 7;
                },
              }).a !== 7
            );
          });

        /***/
      },

    /***/
    /*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
    './node_modules/core-js/internals/indexed-object.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var uncurryThis = __webpack_require__(
          /*! ../internals/function-uncurry-this */
          './node_modules/core-js/internals/function-uncurry-this.js'
        );
        var fails = __webpack_require__(
          /*! ../internals/fails */
          './node_modules/core-js/internals/fails.js'
        );
        var classof = __webpack_require__(
          /*! ../internals/classof-raw */
          './node_modules/core-js/internals/classof-raw.js'
        );

        var $Object = Object;
        var split = uncurryThis(''.split);

        // fallback for non-array-like ES3 and non-enumerable old V8 strings
        module.exports = fails(function () {
          // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
          // eslint-disable-next-line no-prototype-builtins -- safe
          return !$Object('z').propertyIsEnumerable(0);
        })
          ? function (it) {
              return classof(it) === 'String'
                ? split(it, '')
                : $Object(it);
            }
          : $Object;

        /***/
      },

    /***/
    /*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
    './node_modules/core-js/internals/inspect-source.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var uncurryThis = __webpack_require__(
          /*! ../internals/function-uncurry-this */
          './node_modules/core-js/internals/function-uncurry-this.js'
        );
        var isCallable = __webpack_require__(
          /*! ../internals/is-callable */
          './node_modules/core-js/internals/is-callable.js'
        );
        var store = __webpack_require__(
          /*! ../internals/shared-store */
          './node_modules/core-js/internals/shared-store.js'
        );

        var functionToString = uncurryThis(Function.toString);

        // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
        if (!isCallable(store.inspectSource)) {
          store.inspectSource = function (it) {
            return functionToString(it);
          };
        }

        module.exports = store.inspectSource;

        /***/
      },

    /***/
    /*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
    './node_modules/core-js/internals/internal-state.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var NATIVE_WEAK_MAP = __webpack_require__(
          /*! ../internals/weak-map-basic-detection */
          './node_modules/core-js/internals/weak-map-basic-detection.js'
        );
        var global = __webpack_require__(
          /*! ../internals/global */
          './node_modules/core-js/internals/global.js'
        );
        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          './node_modules/core-js/internals/is-object.js'
        );
        var createNonEnumerableProperty = __webpack_require__(
          /*! ../internals/create-non-enumerable-property */
          './node_modules/core-js/internals/create-non-enumerable-property.js'
        );
        var hasOwn = __webpack_require__(
          /*! ../internals/has-own-property */
          './node_modules/core-js/internals/has-own-property.js'
        );
        var shared = __webpack_require__(
          /*! ../internals/shared-store */
          './node_modules/core-js/internals/shared-store.js'
        );
        var sharedKey = __webpack_require__(
          /*! ../internals/shared-key */
          './node_modules/core-js/internals/shared-key.js'
        );
        var hiddenKeys = __webpack_require__(
          /*! ../internals/hidden-keys */
          './node_modules/core-js/internals/hidden-keys.js'
        );

        var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
        var TypeError = global.TypeError;
        var WeakMap = global.WeakMap;
        var set, get, has;

        var enforce = function (it) {
          return has(it) ? get(it) : set(it, {});
        };

        var getterFor = function (TYPE) {
          return function (it) {
            var state;
            if (!isObject(it) || (state = get(it)).type !== TYPE) {
              throw new TypeError(
                'Incompatible receiver, ' + TYPE + ' required'
              );
            }
            return state;
          };
        };

        if (NATIVE_WEAK_MAP || shared.state) {
          var store = shared.state || (shared.state = new WeakMap());
          /* eslint-disable no-self-assign -- prototype methods protection */
          store.get = store.get;
          store.has = store.has;
          store.set = store.set;
          /* eslint-enable no-self-assign -- prototype methods protection */
          set = function (it, metadata) {
            if (store.has(it))
              throw new TypeError(OBJECT_ALREADY_INITIALIZED);
            metadata.facade = it;
            store.set(it, metadata);
            return metadata;
          };
          get = function (it) {
            return store.get(it) || {};
          };
          has = function (it) {
            return store.has(it);
          };
        } else {
          var STATE = sharedKey('state');
          hiddenKeys[STATE] = true;
          set = function (it, metadata) {
            if (hasOwn(it, STATE))
              throw new TypeError(OBJECT_ALREADY_INITIALIZED);
            metadata.facade = it;
            createNonEnumerableProperty(it, STATE, metadata);
            return metadata;
          };
          get = function (it) {
            return hasOwn(it, STATE) ? it[STATE] : {};
          };
          has = function (it) {
            return hasOwn(it, STATE);
          };
        }

        module.exports = {
          set: set,
          get: get,
          has: has,
          enforce: enforce,
          getterFor: getterFor,
        };

        /***/
      },

    /***/
    /*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/is-array-iterator-method.js ***!
  \********************************************************************/
    './node_modules/core-js/internals/is-array-iterator-method.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          './node_modules/core-js/internals/well-known-symbol.js'
        );
        var Iterators = __webpack_require__(
          /*! ../internals/iterators */
          './node_modules/core-js/internals/iterators.js'
        );

        var ITERATOR = wellKnownSymbol('iterator');
        var ArrayPrototype = Array.prototype;

        // check on default Array iterator
        module.exports = function (it) {
          return (
            it !== undefined &&
            (Iterators.Array === it ||
              ArrayPrototype[ITERATOR] === it)
          );
        };

        /***/
      },

    /***/
    /*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
    './node_modules/core-js/internals/is-array.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var classof = __webpack_require__(
          /*! ../internals/classof-raw */
          './node_modules/core-js/internals/classof-raw.js'
        );

        // `IsArray` abstract operation
        // https://tc39.es/ecma262/#sec-isarray
        // eslint-disable-next-line es/no-array-isarray -- safe
        module.exports =
          Array.isArray ||
          function isArray(argument) {
            return classof(argument) === 'Array';
          };

        /***/
      },

    /***/
    /*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/is-callable.js ***!
  \*******************************************************/
    './node_modules/core-js/internals/is-callable.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
        var documentAll = typeof document == 'object' && document.all;

        // `IsCallable` abstract operation
        // https://tc39.es/ecma262/#sec-iscallable
        // eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
        module.exports =
          typeof documentAll == 'undefined' &&
          documentAll !== undefined
            ? function (argument) {
                return (
                  typeof argument == 'function' ||
                  argument === documentAll
                );
              }
            : function (argument) {
                return typeof argument == 'function';
              };

        /***/
      },

    /***/
    /*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/is-constructor.js ***!
  \**********************************************************/
    './node_modules/core-js/internals/is-constructor.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var uncurryThis = __webpack_require__(
          /*! ../internals/function-uncurry-this */
          './node_modules/core-js/internals/function-uncurry-this.js'
        );
        var fails = __webpack_require__(
          /*! ../internals/fails */
          './node_modules/core-js/internals/fails.js'
        );
        var isCallable = __webpack_require__(
          /*! ../internals/is-callable */
          './node_modules/core-js/internals/is-callable.js'
        );
        var classof = __webpack_require__(
          /*! ../internals/classof */
          './node_modules/core-js/internals/classof.js'
        );
        var getBuiltIn = __webpack_require__(
          /*! ../internals/get-built-in */
          './node_modules/core-js/internals/get-built-in.js'
        );
        var inspectSource = __webpack_require__(
          /*! ../internals/inspect-source */
          './node_modules/core-js/internals/inspect-source.js'
        );

        var noop = function () {
          /* empty */
        };
        var construct = getBuiltIn('Reflect', 'construct');
        var constructorRegExp = /^\s*(?:class|function)\b/;
        var exec = uncurryThis(constructorRegExp.exec);
        var INCORRECT_TO_STRING = !constructorRegExp.test(noop);

        var isConstructorModern = function isConstructor(argument) {
          if (!isCallable(argument)) return false;
          try {
            construct(noop, [], argument);
            return true;
          } catch (error) {
            return false;
          }
        };

        var isConstructorLegacy = function isConstructor(argument) {
          if (!isCallable(argument)) return false;
          switch (classof(argument)) {
            case 'AsyncFunction':
            case 'GeneratorFunction':
            case 'AsyncGeneratorFunction':
              return false;
          }
          try {
            // we can't check .prototype since constructors produced by .bind haven't it
            // `Function#toString` throws on some built-it function in some legacy engines
            // (for example, `DOMQuad` and similar in FF41-)
            return (
              INCORRECT_TO_STRING ||
              !!exec(constructorRegExp, inspectSource(argument))
            );
          } catch (error) {
            return true;
          }
        };

        isConstructorLegacy.sham = true;

        // `IsConstructor` abstract operation
        // https://tc39.es/ecma262/#sec-isconstructor
        module.exports =
          !construct ||
          fails(function () {
            var called;
            return (
              isConstructorModern(isConstructorModern.call) ||
              !isConstructorModern(Object) ||
              !isConstructorModern(function () {
                called = true;
              }) ||
              called
            );
          })
            ? isConstructorLegacy
            : isConstructorModern;

        /***/
      },

    /***/
    /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
    './node_modules/core-js/internals/is-forced.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var fails = __webpack_require__(
          /*! ../internals/fails */
          './node_modules/core-js/internals/fails.js'
        );
        var isCallable = __webpack_require__(
          /*! ../internals/is-callable */
          './node_modules/core-js/internals/is-callable.js'
        );

        var replacement = /#|\.prototype\./;

        var isForced = function (feature, detection) {
          var value = data[normalize(feature)];
          return value === POLYFILL
            ? true
            : value === NATIVE
            ? false
            : isCallable(detection)
            ? fails(detection)
            : !!detection;
        };

        var normalize = (isForced.normalize = function (string) {
          return String(string)
            .replace(replacement, '.')
            .toLowerCase();
        });
        var data = (isForced.data = {});
        var NATIVE = (isForced.NATIVE = 'N');
        var POLYFILL = (isForced.POLYFILL = 'P');

        module.exports = isForced;

        /***/
      },

    /***/
    /*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/is-null-or-undefined.js ***!
  \****************************************************************/
    './node_modules/core-js/internals/is-null-or-undefined.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        // we can't use just `it == null` since of `document.all` special case
        // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
        module.exports = function (it) {
          return it === null || it === undefined;
        };

        /***/
      },

    /***/
    /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
    './node_modules/core-js/internals/is-object.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var isCallable = __webpack_require__(
          /*! ../internals/is-callable */
          './node_modules/core-js/internals/is-callable.js'
        );

        module.exports = function (it) {
          return typeof it == 'object' ? it !== null : isCallable(it);
        };

        /***/
      },

    /***/
    /*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/is-possible-prototype.js ***!
  \*****************************************************************/
    './node_modules/core-js/internals/is-possible-prototype.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          './node_modules/core-js/internals/is-object.js'
        );

        module.exports = function (argument) {
          return isObject(argument) || argument === null;
        };

        /***/
      },

    /***/
    /*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
    './node_modules/core-js/internals/is-pure.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        module.exports = false;

        /***/
      },

    /***/
    /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
    './node_modules/core-js/internals/is-regexp.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          './node_modules/core-js/internals/is-object.js'
        );
        var classof = __webpack_require__(
          /*! ../internals/classof-raw */
          './node_modules/core-js/internals/classof-raw.js'
        );
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          './node_modules/core-js/internals/well-known-symbol.js'
        );

        var MATCH = wellKnownSymbol('match');

        // `IsRegExp` abstract operation
        // https://tc39.es/ecma262/#sec-isregexp
        module.exports = function (it) {
          var isRegExp;
          return (
            isObject(it) &&
            ((isRegExp = it[MATCH]) !== undefined
              ? !!isRegExp
              : classof(it) === 'RegExp')
          );
        };

        /***/
      },

    /***/
    /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-symbol.js ***!
  \*****************************************************/
    './node_modules/core-js/internals/is-symbol.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var getBuiltIn = __webpack_require__(
          /*! ../internals/get-built-in */
          './node_modules/core-js/internals/get-built-in.js'
        );
        var isCallable = __webpack_require__(
          /*! ../internals/is-callable */
          './node_modules/core-js/internals/is-callable.js'
        );
        var isPrototypeOf = __webpack_require__(
          /*! ../internals/object-is-prototype-of */
          './node_modules/core-js/internals/object-is-prototype-of.js'
        );
        var USE_SYMBOL_AS_UID = __webpack_require__(
          /*! ../internals/use-symbol-as-uid */
          './node_modules/core-js/internals/use-symbol-as-uid.js'
        );

        var $Object = Object;

        module.exports = USE_SYMBOL_AS_UID
          ? function (it) {
              return typeof it == 'symbol';
            }
          : function (it) {
              var $Symbol = getBuiltIn('Symbol');
              return (
                isCallable($Symbol) &&
                isPrototypeOf($Symbol.prototype, $Object(it))
              );
            };

        /***/
      },

    /***/
    /*!***************************************************!*\
  !*** ./node_modules/core-js/internals/iterate.js ***!
  \***************************************************/
    './node_modules/core-js/internals/iterate.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var bind = __webpack_require__(
          /*! ../internals/function-bind-context */
          './node_modules/core-js/internals/function-bind-context.js'
        );
        var call = __webpack_require__(
          /*! ../internals/function-call */
          './node_modules/core-js/internals/function-call.js'
        );
        var anObject = __webpack_require__(
          /*! ../internals/an-object */
          './node_modules/core-js/internals/an-object.js'
        );
        var tryToString = __webpack_require__(
          /*! ../internals/try-to-string */
          './node_modules/core-js/internals/try-to-string.js'
        );
        var isArrayIteratorMethod = __webpack_require__(
          /*! ../internals/is-array-iterator-method */
          './node_modules/core-js/internals/is-array-iterator-method.js'
        );
        var lengthOfArrayLike = __webpack_require__(
          /*! ../internals/length-of-array-like */
          './node_modules/core-js/internals/length-of-array-like.js'
        );
        var isPrototypeOf = __webpack_require__(
          /*! ../internals/object-is-prototype-of */
          './node_modules/core-js/internals/object-is-prototype-of.js'
        );
        var getIterator = __webpack_require__(
          /*! ../internals/get-iterator */
          './node_modules/core-js/internals/get-iterator.js'
        );
        var getIteratorMethod = __webpack_require__(
          /*! ../internals/get-iterator-method */
          './node_modules/core-js/internals/get-iterator-method.js'
        );
        var iteratorClose = __webpack_require__(
          /*! ../internals/iterator-close */
          './node_modules/core-js/internals/iterator-close.js'
        );

        var $TypeError = TypeError;

        var Result = function (stopped, result) {
          this.stopped = stopped;
          this.result = result;
        };

        var ResultPrototype = Result.prototype;

        module.exports = function (
          iterable,
          unboundFunction,
          options
        ) {
          var that = options && options.that;
          var AS_ENTRIES = !!(options && options.AS_ENTRIES);
          var IS_RECORD = !!(options && options.IS_RECORD);
          var IS_ITERATOR = !!(options && options.IS_ITERATOR);
          var INTERRUPTED = !!(options && options.INTERRUPTED);
          var fn = bind(unboundFunction, that);
          var iterator, iterFn, index, length, result, next, step;

          var stop = function (condition) {
            if (iterator)
              iteratorClose(iterator, 'normal', condition);
            return new Result(true, condition);
          };

          var callFn = function (value) {
            if (AS_ENTRIES) {
              anObject(value);
              return INTERRUPTED
                ? fn(value[0], value[1], stop)
                : fn(value[0], value[1]);
            }
            return INTERRUPTED ? fn(value, stop) : fn(value);
          };

          if (IS_RECORD) {
            iterator = iterable.iterator;
          } else if (IS_ITERATOR) {
            iterator = iterable;
          } else {
            iterFn = getIteratorMethod(iterable);
            if (!iterFn)
              throw new $TypeError(
                tryToString(iterable) + ' is not iterable'
              );
            // optimisation for array iterators
            if (isArrayIteratorMethod(iterFn)) {
              for (
                index = 0, length = lengthOfArrayLike(iterable);
                length > index;
                index++
              ) {
                result = callFn(iterable[index]);
                if (result && isPrototypeOf(ResultPrototype, result))
                  return result;
              }
              return new Result(false);
            }
            iterator = getIterator(iterable, iterFn);
          }

          next = IS_RECORD ? iterable.next : iterator.next;
          while (!(step = call(next, iterator)).done) {
            try {
              result = callFn(step.value);
            } catch (error) {
              iteratorClose(iterator, 'throw', error);
            }
            if (
              typeof result == 'object' &&
              result &&
              isPrototypeOf(ResultPrototype, result)
            )
              return result;
          }
          return new Result(false);
        };

        /***/
      },

    /***/
    /*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterator-close.js ***!
  \**********************************************************/
    './node_modules/core-js/internals/iterator-close.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var call = __webpack_require__(
          /*! ../internals/function-call */
          './node_modules/core-js/internals/function-call.js'
        );
        var anObject = __webpack_require__(
          /*! ../internals/an-object */
          './node_modules/core-js/internals/an-object.js'
        );
        var getMethod = __webpack_require__(
          /*! ../internals/get-method */
          './node_modules/core-js/internals/get-method.js'
        );

        module.exports = function (iterator, kind, value) {
          var innerResult, innerError;
          anObject(iterator);
          try {
            innerResult = getMethod(iterator, 'return');
            if (!innerResult) {
              if (kind === 'throw') throw value;
              return value;
            }
            innerResult = call(innerResult, iterator);
          } catch (error) {
            innerError = true;
            innerResult = error;
          }
          if (kind === 'throw') throw value;
          if (innerError) throw innerResult;
          anObject(innerResult);
          return value;
        };

        /***/
      },

    /***/
    /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
    './node_modules/core-js/internals/iterators.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        module.exports = {};

        /***/
      },

    /***/
    /*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/length-of-array-like.js ***!
  \****************************************************************/
    './node_modules/core-js/internals/length-of-array-like.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var toLength = __webpack_require__(
          /*! ../internals/to-length */
          './node_modules/core-js/internals/to-length.js'
        );

        // `LengthOfArrayLike` abstract operation
        // https://tc39.es/ecma262/#sec-lengthofarraylike
        module.exports = function (obj) {
          return toLength(obj.length);
        };

        /***/
      },

    /***/
    /*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/make-built-in.js ***!
  \*********************************************************/
    './node_modules/core-js/internals/make-built-in.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var uncurryThis = __webpack_require__(
          /*! ../internals/function-uncurry-this */
          './node_modules/core-js/internals/function-uncurry-this.js'
        );
        var fails = __webpack_require__(
          /*! ../internals/fails */
          './node_modules/core-js/internals/fails.js'
        );
        var isCallable = __webpack_require__(
          /*! ../internals/is-callable */
          './node_modules/core-js/internals/is-callable.js'
        );
        var hasOwn = __webpack_require__(
          /*! ../internals/has-own-property */
          './node_modules/core-js/internals/has-own-property.js'
        );
        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */
          './node_modules/core-js/internals/descriptors.js'
        );
        var CONFIGURABLE_FUNCTION_NAME = __webpack_require__(
          /*! ../internals/function-name */
          './node_modules/core-js/internals/function-name.js'
        ).CONFIGURABLE;
        var inspectSource = __webpack_require__(
          /*! ../internals/inspect-source */
          './node_modules/core-js/internals/inspect-source.js'
        );
        var InternalStateModule = __webpack_require__(
          /*! ../internals/internal-state */
          './node_modules/core-js/internals/internal-state.js'
        );

        var enforceInternalState = InternalStateModule.enforce;
        var getInternalState = InternalStateModule.get;
        var $String = String;
        // eslint-disable-next-line es/no-object-defineproperty -- safe
        var defineProperty = Object.defineProperty;
        var stringSlice = uncurryThis(''.slice);
        var replace = uncurryThis(''.replace);
        var join = uncurryThis([].join);

        var CONFIGURABLE_LENGTH =
          DESCRIPTORS &&
          !fails(function () {
            return (
              defineProperty(
                function () {
                  /* empty */
                },
                'length',
                {
                  value: 8,
                }
              ).length !== 8
            );
          });

        var TEMPLATE = String(String).split('String');

        var makeBuiltIn = (module.exports = function (
          value,
          name,
          options
        ) {
          if (stringSlice($String(name), 0, 7) === 'Symbol(') {
            name =
              '[' +
              replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') +
              ']';
          }
          if (options && options.getter) name = 'get ' + name;
          if (options && options.setter) name = 'set ' + name;
          if (
            !hasOwn(value, 'name') ||
            (CONFIGURABLE_FUNCTION_NAME && value.name !== name)
          ) {
            if (DESCRIPTORS)
              defineProperty(value, 'name', {
                value: name,
                configurable: true,
              });
            else value.name = name;
          }
          if (
            CONFIGURABLE_LENGTH &&
            options &&
            hasOwn(options, 'arity') &&
            value.length !== options.arity
          ) {
            defineProperty(value, 'length', {
              value: options.arity,
            });
          }
          try {
            if (
              options &&
              hasOwn(options, 'constructor') &&
              options.constructor
            ) {
              if (DESCRIPTORS)
                defineProperty(value, 'prototype', {
                  writable: false,
                });
              // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
            } else if (value.prototype) value.prototype = undefined;
          } catch (error) {
            /* empty */
          }
          var state = enforceInternalState(value);
          if (!hasOwn(state, 'source')) {
            state.source = join(
              TEMPLATE,
              typeof name == 'string' ? name : ''
            );
          }
          return value;
        });
        // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
        // eslint-disable-next-line no-extend-native -- required
        Function.prototype.toString = makeBuiltIn(
          function toString() {
            return (
              (isCallable(this) && getInternalState(this).source) ||
              inspectSource(this)
            );
          },
          'toString'
        );

        /***/
      },

    /***/
    /*!******************************************************!*\
  !*** ./node_modules/core-js/internals/math-trunc.js ***!
  \******************************************************/
    './node_modules/core-js/internals/math-trunc.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var ceil = Math.ceil;
        var floor = Math.floor;

        // `Math.trunc` method
        // https://tc39.es/ecma262/#sec-math.trunc
        // eslint-disable-next-line es/no-math-trunc -- safe
        module.exports =
          Math.trunc ||
          function trunc(x) {
            var n = +x;
            return (n > 0 ? floor : ceil)(n);
          };

        /***/
      },

    /***/
    /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/microtask.js ***!
  \*****************************************************/
    './node_modules/core-js/internals/microtask.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var global = __webpack_require__(
          /*! ../internals/global */
          './node_modules/core-js/internals/global.js'
        );
        var safeGetBuiltIn = __webpack_require__(
          /*! ../internals/safe-get-built-in */
          './node_modules/core-js/internals/safe-get-built-in.js'
        );
        var bind = __webpack_require__(
          /*! ../internals/function-bind-context */
          './node_modules/core-js/internals/function-bind-context.js'
        );
        var macrotask = __webpack_require__(
          /*! ../internals/task */
          './node_modules/core-js/internals/task.js'
        ).set;
        var Queue = __webpack_require__(
          /*! ../internals/queue */
          './node_modules/core-js/internals/queue.js'
        );
        var IS_IOS = __webpack_require__(
          /*! ../internals/engine-is-ios */
          './node_modules/core-js/internals/engine-is-ios.js'
        );
        var IS_IOS_PEBBLE = __webpack_require__(
          /*! ../internals/engine-is-ios-pebble */
          './node_modules/core-js/internals/engine-is-ios-pebble.js'
        );
        var IS_WEBOS_WEBKIT = __webpack_require__(
          /*! ../internals/engine-is-webos-webkit */
          './node_modules/core-js/internals/engine-is-webos-webkit.js'
        );
        var IS_NODE = __webpack_require__(
          /*! ../internals/engine-is-node */
          './node_modules/core-js/internals/engine-is-node.js'
        );

        var MutationObserver =
          global.MutationObserver || global.WebKitMutationObserver;
        var document = global.document;
        var process = global.process;
        var Promise = global.Promise;
        var microtask = safeGetBuiltIn('queueMicrotask');
        var notify, toggle, node, promise, then;

        // modern engines have queueMicrotask method
        if (!microtask) {
          var queue = new Queue();

          var flush = function () {
            var parent, fn;
            if (IS_NODE && (parent = process.domain)) parent.exit();
            while ((fn = queue.get()))
              try {
                fn();
              } catch (error) {
                if (queue.head) notify();
                throw error;
              }
            if (parent) parent.enter();
          };

          // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
          // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
          if (
            !IS_IOS &&
            !IS_NODE &&
            !IS_WEBOS_WEBKIT &&
            MutationObserver &&
            document
          ) {
            toggle = true;
            node = document.createTextNode('');
            new MutationObserver(flush).observe(node, {
              characterData: true,
            });
            notify = function () {
              node.data = toggle = !toggle;
            };
            // environments with maybe non-completely correct, but existent Promise
          } else if (!IS_IOS_PEBBLE && Promise && Promise.resolve) {
            // Promise.resolve without an argument throws an error in LG WebOS 2
            promise = Promise.resolve(undefined);
            // workaround of WebKit ~ iOS Safari 10.1 bug
            promise.constructor = Promise;
            then = bind(promise.then, promise);
            notify = function () {
              then(flush);
            };
            // Node.js without promises
          } else if (IS_NODE) {
            notify = function () {
              process.nextTick(flush);
            };
            // for other environments - macrotask based on:
            // - setImmediate
            // - MessageChannel
            // - window.postMessage
            // - onreadystatechange
            // - setTimeout
          } else {
            // `webpack` dev server bug on IE global methods - use bind(fn, global)
            macrotask = bind(macrotask, global);
            notify = function () {
              macrotask(flush);
            };
          }

          microtask = function (fn) {
            if (!queue.head) notify();
            queue.add(fn);
          };
        }

        module.exports = microtask;

        /***/
      },

    /***/
    /*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/new-promise-capability.js ***!
  \******************************************************************/
    './node_modules/core-js/internals/new-promise-capability.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var aCallable = __webpack_require__(
          /*! ../internals/a-callable */
          './node_modules/core-js/internals/a-callable.js'
        );

        var $TypeError = TypeError;

        var PromiseCapability = function (C) {
          var resolve, reject;
          this.promise = new C(function ($$resolve, $$reject) {
            if (resolve !== undefined || reject !== undefined)
              throw new $TypeError('Bad Promise constructor');
            resolve = $$resolve;
            reject = $$reject;
          });
          this.resolve = aCallable(resolve);
          this.reject = aCallable(reject);
        };

        // `NewPromiseCapability` abstract operation
        // https://tc39.es/ecma262/#sec-newpromisecapability
        module.exports.f = function (C) {
          return new PromiseCapability(C);
        };

        /***/
      },

    /***/
    /*!********************************************************!*\
  !*** ./node_modules/core-js/internals/not-a-regexp.js ***!
  \********************************************************/
    './node_modules/core-js/internals/not-a-regexp.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var isRegExp = __webpack_require__(
          /*! ../internals/is-regexp */
          './node_modules/core-js/internals/is-regexp.js'
        );

        var $TypeError = TypeError;

        module.exports = function (it) {
          if (isRegExp(it)) {
            throw new $TypeError(
              "The method doesn't accept regular expressions"
            );
          }
          return it;
        };

        /***/
      },

    /***/
    /*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
    './node_modules/core-js/internals/object-define-property.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */
          './node_modules/core-js/internals/descriptors.js'
        );
        var IE8_DOM_DEFINE = __webpack_require__(
          /*! ../internals/ie8-dom-define */
          './node_modules/core-js/internals/ie8-dom-define.js'
        );
        var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(
          /*! ../internals/v8-prototype-define-bug */
          './node_modules/core-js/internals/v8-prototype-define-bug.js'
        );
        var anObject = __webpack_require__(
          /*! ../internals/an-object */
          './node_modules/core-js/internals/an-object.js'
        );
        var toPropertyKey = __webpack_require__(
          /*! ../internals/to-property-key */
          './node_modules/core-js/internals/to-property-key.js'
        );

        var $TypeError = TypeError;
        // eslint-disable-next-line es/no-object-defineproperty -- safe
        var $defineProperty = Object.defineProperty;
        // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
        var $getOwnPropertyDescriptor =
          Object.getOwnPropertyDescriptor;
        var ENUMERABLE = 'enumerable';
        var CONFIGURABLE = 'configurable';
        var WRITABLE = 'writable';

        // `Object.defineProperty` method
        // https://tc39.es/ecma262/#sec-object.defineproperty
        exports.f = DESCRIPTORS
          ? V8_PROTOTYPE_DEFINE_BUG
            ? function defineProperty(O, P, Attributes) {
                anObject(O);
                P = toPropertyKey(P);
                anObject(Attributes);
                if (
                  typeof O === 'function' &&
                  P === 'prototype' &&
                  'value' in Attributes &&
                  WRITABLE in Attributes &&
                  !Attributes[WRITABLE]
                ) {
                  var current = $getOwnPropertyDescriptor(O, P);
                  if (current && current[WRITABLE]) {
                    O[P] = Attributes.value;
                    Attributes = {
                      configurable:
                        CONFIGURABLE in Attributes
                          ? Attributes[CONFIGURABLE]
                          : current[CONFIGURABLE],
                      enumerable:
                        ENUMERABLE in Attributes
                          ? Attributes[ENUMERABLE]
                          : current[ENUMERABLE],
                      writable: false,
                    };
                  }
                }
                return $defineProperty(O, P, Attributes);
              }
            : $defineProperty
          : function defineProperty(O, P, Attributes) {
              anObject(O);
              P = toPropertyKey(P);
              anObject(Attributes);
              if (IE8_DOM_DEFINE)
                try {
                  return $defineProperty(O, P, Attributes);
                } catch (error) {
                  /* empty */
                }
              if ('get' in Attributes || 'set' in Attributes)
                throw new $TypeError('Accessors not supported');
              if ('value' in Attributes) O[P] = Attributes.value;
              return O;
            };

        /***/
      },

    /***/
    /*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
    './node_modules/core-js/internals/object-get-own-property-descriptor.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */
          './node_modules/core-js/internals/descriptors.js'
        );
        var call = __webpack_require__(
          /*! ../internals/function-call */
          './node_modules/core-js/internals/function-call.js'
        );
        var propertyIsEnumerableModule = __webpack_require__(
          /*! ../internals/object-property-is-enumerable */
          './node_modules/core-js/internals/object-property-is-enumerable.js'
        );
        var createPropertyDescriptor = __webpack_require__(
          /*! ../internals/create-property-descriptor */
          './node_modules/core-js/internals/create-property-descriptor.js'
        );
        var toIndexedObject = __webpack_require__(
          /*! ../internals/to-indexed-object */
          './node_modules/core-js/internals/to-indexed-object.js'
        );
        var toPropertyKey = __webpack_require__(
          /*! ../internals/to-property-key */
          './node_modules/core-js/internals/to-property-key.js'
        );
        var hasOwn = __webpack_require__(
          /*! ../internals/has-own-property */
          './node_modules/core-js/internals/has-own-property.js'
        );
        var IE8_DOM_DEFINE = __webpack_require__(
          /*! ../internals/ie8-dom-define */
          './node_modules/core-js/internals/ie8-dom-define.js'
        );

        // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
        var $getOwnPropertyDescriptor =
          Object.getOwnPropertyDescriptor;

        // `Object.getOwnPropertyDescriptor` method
        // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
        exports.f = DESCRIPTORS
          ? $getOwnPropertyDescriptor
          : function getOwnPropertyDescriptor(O, P) {
              O = toIndexedObject(O);
              P = toPropertyKey(P);
              if (IE8_DOM_DEFINE)
                try {
                  return $getOwnPropertyDescriptor(O, P);
                } catch (error) {
                  /* empty */
                }
              if (hasOwn(O, P))
                return createPropertyDescriptor(
                  !call(propertyIsEnumerableModule.f, O, P),
                  O[P]
                );
            };

        /***/
      },

    /***/
    /*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
    './node_modules/core-js/internals/object-get-own-property-names.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var internalObjectKeys = __webpack_require__(
          /*! ../internals/object-keys-internal */
          './node_modules/core-js/internals/object-keys-internal.js'
        );
        var enumBugKeys = __webpack_require__(
          /*! ../internals/enum-bug-keys */
          './node_modules/core-js/internals/enum-bug-keys.js'
        );

        var hiddenKeys = enumBugKeys.concat('length', 'prototype');

        // `Object.getOwnPropertyNames` method
        // https://tc39.es/ecma262/#sec-object.getownpropertynames
        // eslint-disable-next-line es/no-object-getownpropertynames -- safe
        exports.f =
          Object.getOwnPropertyNames ||
          function getOwnPropertyNames(O) {
            return internalObjectKeys(O, hiddenKeys);
          };

        /***/
      },

    /***/
    /*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
    './node_modules/core-js/internals/object-get-own-property-symbols.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
        exports.f = Object.getOwnPropertySymbols;

        /***/
      },

    /***/
    /*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-is-prototype-of.js ***!
  \******************************************************************/
    './node_modules/core-js/internals/object-is-prototype-of.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var uncurryThis = __webpack_require__(
          /*! ../internals/function-uncurry-this */
          './node_modules/core-js/internals/function-uncurry-this.js'
        );

        module.exports = uncurryThis({}.isPrototypeOf);

        /***/
      },

    /***/
    /*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
    './node_modules/core-js/internals/object-keys-internal.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var uncurryThis = __webpack_require__(
          /*! ../internals/function-uncurry-this */
          './node_modules/core-js/internals/function-uncurry-this.js'
        );
        var hasOwn = __webpack_require__(
          /*! ../internals/has-own-property */
          './node_modules/core-js/internals/has-own-property.js'
        );
        var toIndexedObject = __webpack_require__(
          /*! ../internals/to-indexed-object */
          './node_modules/core-js/internals/to-indexed-object.js'
        );
        var indexOf = __webpack_require__(
          /*! ../internals/array-includes */
          './node_modules/core-js/internals/array-includes.js'
        ).indexOf;
        var hiddenKeys = __webpack_require__(
          /*! ../internals/hidden-keys */
          './node_modules/core-js/internals/hidden-keys.js'
        );

        var push = uncurryThis([].push);

        module.exports = function (object, names) {
          var O = toIndexedObject(object);
          var i = 0;
          var result = [];
          var key;
          for (key in O)
            !hasOwn(hiddenKeys, key) &&
              hasOwn(O, key) &&
              push(result, key);
          // Don't enum bug & hidden keys
          while (names.length > i)
            if (hasOwn(O, (key = names[i++]))) {
              ~indexOf(result, key) || push(result, key);
            }
          return result;
        };

        /***/
      },

    /***/
    /*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
    './node_modules/core-js/internals/object-property-is-enumerable.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var $propertyIsEnumerable = {}.propertyIsEnumerable;
        // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
        var getOwnPropertyDescriptor =
          Object.getOwnPropertyDescriptor;

        // Nashorn ~ JDK8 bug
        var NASHORN_BUG =
          getOwnPropertyDescriptor &&
          !$propertyIsEnumerable.call(
            {
              1: 2,
            },
            1
          );

        // `Object.prototype.propertyIsEnumerable` method implementation
        // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
        exports.f = NASHORN_BUG
          ? function propertyIsEnumerable(V) {
              var descriptor = getOwnPropertyDescriptor(this, V);
              return !!descriptor && descriptor.enumerable;
            }
          : $propertyIsEnumerable;

        /***/
      },

    /***/
    /*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
    './node_modules/core-js/internals/object-set-prototype-of.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        /* eslint-disable no-proto -- safe */
        var uncurryThisAccessor = __webpack_require__(
          /*! ../internals/function-uncurry-this-accessor */
          './node_modules/core-js/internals/function-uncurry-this-accessor.js'
        );
        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          './node_modules/core-js/internals/is-object.js'
        );
        var requireObjectCoercible = __webpack_require__(
          /*! ../internals/require-object-coercible */
          './node_modules/core-js/internals/require-object-coercible.js'
        );
        var aPossiblePrototype = __webpack_require__(
          /*! ../internals/a-possible-prototype */
          './node_modules/core-js/internals/a-possible-prototype.js'
        );

        // `Object.setPrototypeOf` method
        // https://tc39.es/ecma262/#sec-object.setprototypeof
        // Works with __proto__ only. Old v8 can't work with null proto objects.
        // eslint-disable-next-line es/no-object-setprototypeof -- safe
        module.exports =
          Object.setPrototypeOf ||
          ('__proto__' in {}
            ? (function () {
                var CORRECT_SETTER = false;
                var test = {};
                var setter;
                try {
                  setter = uncurryThisAccessor(
                    Object.prototype,
                    '__proto__',
                    'set'
                  );
                  setter(test, []);
                  CORRECT_SETTER = test instanceof Array;
                } catch (error) {
                  /* empty */
                }
                return function setPrototypeOf(O, proto) {
                  requireObjectCoercible(O);
                  aPossiblePrototype(proto);
                  if (!isObject(O)) return O;
                  if (CORRECT_SETTER) setter(O, proto);
                  else O.__proto__ = proto;
                  return O;
                };
              })()
            : undefined);

        /***/
      },

    /***/
    /*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/ordinary-to-primitive.js ***!
  \*****************************************************************/
    './node_modules/core-js/internals/ordinary-to-primitive.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var call = __webpack_require__(
          /*! ../internals/function-call */
          './node_modules/core-js/internals/function-call.js'
        );
        var isCallable = __webpack_require__(
          /*! ../internals/is-callable */
          './node_modules/core-js/internals/is-callable.js'
        );
        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          './node_modules/core-js/internals/is-object.js'
        );

        var $TypeError = TypeError;

        // `OrdinaryToPrimitive` abstract operation
        // https://tc39.es/ecma262/#sec-ordinarytoprimitive
        module.exports = function (input, pref) {
          var fn, val;
          if (
            pref === 'string' &&
            isCallable((fn = input.toString)) &&
            !isObject((val = call(fn, input)))
          )
            return val;
          if (
            isCallable((fn = input.valueOf)) &&
            !isObject((val = call(fn, input)))
          )
            return val;
          if (
            pref !== 'string' &&
            isCallable((fn = input.toString)) &&
            !isObject((val = call(fn, input)))
          )
            return val;
          throw new $TypeError(
            "Can't convert object to primitive value"
          );
        };

        /***/
      },

    /***/
    /*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
    './node_modules/core-js/internals/own-keys.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var getBuiltIn = __webpack_require__(
          /*! ../internals/get-built-in */
          './node_modules/core-js/internals/get-built-in.js'
        );
        var uncurryThis = __webpack_require__(
          /*! ../internals/function-uncurry-this */
          './node_modules/core-js/internals/function-uncurry-this.js'
        );
        var getOwnPropertyNamesModule = __webpack_require__(
          /*! ../internals/object-get-own-property-names */
          './node_modules/core-js/internals/object-get-own-property-names.js'
        );
        var getOwnPropertySymbolsModule = __webpack_require__(
          /*! ../internals/object-get-own-property-symbols */
          './node_modules/core-js/internals/object-get-own-property-symbols.js'
        );
        var anObject = __webpack_require__(
          /*! ../internals/an-object */
          './node_modules/core-js/internals/an-object.js'
        );

        var concat = uncurryThis([].concat);

        // all object keys, includes non-enumerable and symbols
        module.exports =
          getBuiltIn('Reflect', 'ownKeys') ||
          function ownKeys(it) {
            var keys = getOwnPropertyNamesModule.f(anObject(it));
            var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
            return getOwnPropertySymbols
              ? concat(keys, getOwnPropertySymbols(it))
              : keys;
          };

        /***/
      },

    /***/
    /*!***************************************************!*\
  !*** ./node_modules/core-js/internals/perform.js ***!
  \***************************************************/
    './node_modules/core-js/internals/perform.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        module.exports = function (exec) {
          try {
            return {
              error: false,
              value: exec(),
            };
          } catch (error) {
            return {
              error: true,
              value: error,
            };
          }
        };

        /***/
      },

    /***/
    /*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/promise-constructor-detection.js ***!
  \*************************************************************************/
    './node_modules/core-js/internals/promise-constructor-detection.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var global = __webpack_require__(
          /*! ../internals/global */
          './node_modules/core-js/internals/global.js'
        );
        var NativePromiseConstructor = __webpack_require__(
          /*! ../internals/promise-native-constructor */
          './node_modules/core-js/internals/promise-native-constructor.js'
        );
        var isCallable = __webpack_require__(
          /*! ../internals/is-callable */
          './node_modules/core-js/internals/is-callable.js'
        );
        var isForced = __webpack_require__(
          /*! ../internals/is-forced */
          './node_modules/core-js/internals/is-forced.js'
        );
        var inspectSource = __webpack_require__(
          /*! ../internals/inspect-source */
          './node_modules/core-js/internals/inspect-source.js'
        );
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          './node_modules/core-js/internals/well-known-symbol.js'
        );
        var IS_BROWSER = __webpack_require__(
          /*! ../internals/engine-is-browser */
          './node_modules/core-js/internals/engine-is-browser.js'
        );
        var IS_DENO = __webpack_require__(
          /*! ../internals/engine-is-deno */
          './node_modules/core-js/internals/engine-is-deno.js'
        );
        var IS_PURE = __webpack_require__(
          /*! ../internals/is-pure */
          './node_modules/core-js/internals/is-pure.js'
        );
        var V8_VERSION = __webpack_require__(
          /*! ../internals/engine-v8-version */
          './node_modules/core-js/internals/engine-v8-version.js'
        );

        var NativePromisePrototype =
          NativePromiseConstructor &&
          NativePromiseConstructor.prototype;
        var SPECIES = wellKnownSymbol('species');
        var SUBCLASSING = false;
        var NATIVE_PROMISE_REJECTION_EVENT = isCallable(
          global.PromiseRejectionEvent
        );

        var FORCED_PROMISE_CONSTRUCTOR = isForced(
          'Promise',
          function () {
            var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(
              NativePromiseConstructor
            );
            var GLOBAL_CORE_JS_PROMISE =
              PROMISE_CONSTRUCTOR_SOURCE !==
              String(NativePromiseConstructor);
            // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
            // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
            // We can't detect it synchronously, so just check versions
            if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66)
              return true;
            // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution
            if (
              IS_PURE &&
              !(
                NativePromisePrototype['catch'] &&
                NativePromisePrototype['finally']
              )
            )
              return true;
            // We can't use @@species feature detection in V8 since it causes
            // deoptimization and performance degradation
            // https://github.com/zloirock/core-js/issues/679
            if (
              !V8_VERSION ||
              V8_VERSION < 51 ||
              !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)
            ) {
              // Detect correctness of subclassing with @@species support
              var promise = new NativePromiseConstructor(function (
                resolve
              ) {
                resolve(1);
              });
              var FakePromise = function (exec) {
                exec(
                  function () {
                    /* empty */
                  },
                  function () {
                    /* empty */
                  }
                );
              };
              var constructor = (promise.constructor = {});
              constructor[SPECIES] = FakePromise;
              SUBCLASSING =
                promise.then(function () {
                  /* empty */
                }) instanceof FakePromise;
              if (!SUBCLASSING) return true;
              // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
            }
            return (
              !GLOBAL_CORE_JS_PROMISE &&
              (IS_BROWSER || IS_DENO) &&
              !NATIVE_PROMISE_REJECTION_EVENT
            );
          }
        );

        module.exports = {
          CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR,
          REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
          SUBCLASSING: SUBCLASSING,
        };

        /***/
      },

    /***/
    /*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/promise-native-constructor.js ***!
  \**********************************************************************/
    './node_modules/core-js/internals/promise-native-constructor.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var global = __webpack_require__(
          /*! ../internals/global */
          './node_modules/core-js/internals/global.js'
        );

        module.exports = global.Promise;

        /***/
      },

    /***/
    /*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/promise-resolve.js ***!
  \***********************************************************/
    './node_modules/core-js/internals/promise-resolve.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var anObject = __webpack_require__(
          /*! ../internals/an-object */
          './node_modules/core-js/internals/an-object.js'
        );
        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          './node_modules/core-js/internals/is-object.js'
        );
        var newPromiseCapability = __webpack_require__(
          /*! ../internals/new-promise-capability */
          './node_modules/core-js/internals/new-promise-capability.js'
        );

        module.exports = function (C, x) {
          anObject(C);
          if (isObject(x) && x.constructor === C) return x;
          var promiseCapability = newPromiseCapability.f(C);
          var resolve = promiseCapability.resolve;
          resolve(x);
          return promiseCapability.promise;
        };

        /***/
      },

    /***/
    /*!*******************************************************************************!*\
  !*** ./node_modules/core-js/internals/promise-statics-incorrect-iteration.js ***!
  \*******************************************************************************/
    './node_modules/core-js/internals/promise-statics-incorrect-iteration.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var NativePromiseConstructor = __webpack_require__(
          /*! ../internals/promise-native-constructor */
          './node_modules/core-js/internals/promise-native-constructor.js'
        );
        var checkCorrectnessOfIteration = __webpack_require__(
          /*! ../internals/check-correctness-of-iteration */
          './node_modules/core-js/internals/check-correctness-of-iteration.js'
        );
        var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(
          /*! ../internals/promise-constructor-detection */
          './node_modules/core-js/internals/promise-constructor-detection.js'
        ).CONSTRUCTOR;

        module.exports =
          FORCED_PROMISE_CONSTRUCTOR ||
          !checkCorrectnessOfIteration(function (iterable) {
            NativePromiseConstructor.all(iterable).then(
              undefined,
              function () {
                /* empty */
              }
            );
          });

        /***/
      },

    /***/
    /*!*************************************************!*\
  !*** ./node_modules/core-js/internals/queue.js ***!
  \*************************************************/
    './node_modules/core-js/internals/queue.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var Queue = function () {
          this.head = null;
          this.tail = null;
        };

        Queue.prototype = {
          add: function (item) {
            var entry = {
              item: item,
              next: null,
            };
            var tail = this.tail;
            if (tail) tail.next = entry;
            else this.head = entry;
            this.tail = entry;
          },
          get: function () {
            var entry = this.head;
            if (entry) {
              var next = (this.head = entry.next);
              if (next === null) this.tail = null;
              return entry.item;
            }
          },
        };

        module.exports = Queue;

        /***/
      },

    /***/
    /*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
    './node_modules/core-js/internals/require-object-coercible.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var isNullOrUndefined = __webpack_require__(
          /*! ../internals/is-null-or-undefined */
          './node_modules/core-js/internals/is-null-or-undefined.js'
        );

        var $TypeError = TypeError;

        // `RequireObjectCoercible` abstract operation
        // https://tc39.es/ecma262/#sec-requireobjectcoercible
        module.exports = function (it) {
          if (isNullOrUndefined(it))
            throw new $TypeError("Can't call method on " + it);
          return it;
        };

        /***/
      },

    /***/
    /*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/safe-get-built-in.js ***!
  \*************************************************************/
    './node_modules/core-js/internals/safe-get-built-in.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var global = __webpack_require__(
          /*! ../internals/global */
          './node_modules/core-js/internals/global.js'
        );
        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */
          './node_modules/core-js/internals/descriptors.js'
        );

        // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
        var getOwnPropertyDescriptor =
          Object.getOwnPropertyDescriptor;

        // Avoid NodeJS experimental warning
        module.exports = function (name) {
          if (!DESCRIPTORS) return global[name];
          var descriptor = getOwnPropertyDescriptor(global, name);
          return descriptor && descriptor.value;
        };

        /***/
      },

    /***/
    /*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/set-species.js ***!
  \*******************************************************/
    './node_modules/core-js/internals/set-species.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var getBuiltIn = __webpack_require__(
          /*! ../internals/get-built-in */
          './node_modules/core-js/internals/get-built-in.js'
        );
        var defineBuiltInAccessor = __webpack_require__(
          /*! ../internals/define-built-in-accessor */
          './node_modules/core-js/internals/define-built-in-accessor.js'
        );
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          './node_modules/core-js/internals/well-known-symbol.js'
        );
        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */
          './node_modules/core-js/internals/descriptors.js'
        );

        var SPECIES = wellKnownSymbol('species');

        module.exports = function (CONSTRUCTOR_NAME) {
          var Constructor = getBuiltIn(CONSTRUCTOR_NAME);

          if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
            defineBuiltInAccessor(Constructor, SPECIES, {
              configurable: true,
              get: function () {
                return this;
              },
            });
          }
        };

        /***/
      },

    /***/
    /*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
    './node_modules/core-js/internals/set-to-string-tag.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var defineProperty = __webpack_require__(
          /*! ../internals/object-define-property */
          './node_modules/core-js/internals/object-define-property.js'
        ).f;
        var hasOwn = __webpack_require__(
          /*! ../internals/has-own-property */
          './node_modules/core-js/internals/has-own-property.js'
        );
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          './node_modules/core-js/internals/well-known-symbol.js'
        );

        var TO_STRING_TAG = wellKnownSymbol('toStringTag');

        module.exports = function (target, TAG, STATIC) {
          if (target && !STATIC) target = target.prototype;
          if (target && !hasOwn(target, TO_STRING_TAG)) {
            defineProperty(target, TO_STRING_TAG, {
              configurable: true,
              value: TAG,
            });
          }
        };

        /***/
      },

    /***/
    /*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
    './node_modules/core-js/internals/shared-key.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var shared = __webpack_require__(
          /*! ../internals/shared */
          './node_modules/core-js/internals/shared.js'
        );
        var uid = __webpack_require__(
          /*! ../internals/uid */
          './node_modules/core-js/internals/uid.js'
        );

        var keys = shared('keys');

        module.exports = function (key) {
          return keys[key] || (keys[key] = uid(key));
        };

        /***/
      },

    /***/
    /*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
    './node_modules/core-js/internals/shared-store.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var IS_PURE = __webpack_require__(
          /*! ../internals/is-pure */
          './node_modules/core-js/internals/is-pure.js'
        );
        var globalThis = __webpack_require__(
          /*! ../internals/global */
          './node_modules/core-js/internals/global.js'
        );
        var defineGlobalProperty = __webpack_require__(
          /*! ../internals/define-global-property */
          './node_modules/core-js/internals/define-global-property.js'
        );

        var SHARED = '__core-js_shared__';
        var store = (module.exports =
          globalThis[SHARED] || defineGlobalProperty(SHARED, {}));

        (store.versions || (store.versions = [])).push({
          version: '3.36.1',
          mode: IS_PURE ? 'pure' : 'global',
          copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
          license:
            'https://github.com/zloirock/core-js/blob/v3.36.1/LICENSE',
          source: 'https://github.com/zloirock/core-js',
        });

        /***/
      },

    /***/
    /*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
    './node_modules/core-js/internals/shared.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var store = __webpack_require__(
          /*! ../internals/shared-store */
          './node_modules/core-js/internals/shared-store.js'
        );

        module.exports = function (key, value) {
          return store[key] || (store[key] = value || {});
        };

        /***/
      },

    /***/
    /*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
    './node_modules/core-js/internals/species-constructor.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var anObject = __webpack_require__(
          /*! ../internals/an-object */
          './node_modules/core-js/internals/an-object.js'
        );
        var aConstructor = __webpack_require__(
          /*! ../internals/a-constructor */
          './node_modules/core-js/internals/a-constructor.js'
        );
        var isNullOrUndefined = __webpack_require__(
          /*! ../internals/is-null-or-undefined */
          './node_modules/core-js/internals/is-null-or-undefined.js'
        );
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          './node_modules/core-js/internals/well-known-symbol.js'
        );

        var SPECIES = wellKnownSymbol('species');

        // `SpeciesConstructor` abstract operation
        // https://tc39.es/ecma262/#sec-speciesconstructor
        module.exports = function (O, defaultConstructor) {
          var C = anObject(O).constructor;
          var S;
          return C === undefined ||
            isNullOrUndefined((S = anObject(C)[SPECIES]))
            ? defaultConstructor
            : aConstructor(S);
        };

        /***/
      },

    /***/
    /*!************************************************************************!*\
  !*** ./node_modules/core-js/internals/symbol-constructor-detection.js ***!
  \************************************************************************/
    './node_modules/core-js/internals/symbol-constructor-detection.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        /* eslint-disable es/no-symbol -- required for testing */
        var V8_VERSION = __webpack_require__(
          /*! ../internals/engine-v8-version */
          './node_modules/core-js/internals/engine-v8-version.js'
        );
        var fails = __webpack_require__(
          /*! ../internals/fails */
          './node_modules/core-js/internals/fails.js'
        );
        var global = __webpack_require__(
          /*! ../internals/global */
          './node_modules/core-js/internals/global.js'
        );

        var $String = global.String;

        // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
        module.exports =
          !!Object.getOwnPropertySymbols &&
          !fails(function () {
            var symbol = Symbol('symbol detection');
            // Chrome 38 Symbol has incorrect toString conversion
            // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
            // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
            // of course, fail.
            return (
              !$String(symbol) ||
              !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
              (!Symbol.sham && V8_VERSION && V8_VERSION < 41)
            );
          });

        /***/
      },

    /***/
    /*!************************************************!*\
  !*** ./node_modules/core-js/internals/task.js ***!
  \************************************************/
    './node_modules/core-js/internals/task.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var global = __webpack_require__(
          /*! ../internals/global */
          './node_modules/core-js/internals/global.js'
        );
        var apply = __webpack_require__(
          /*! ../internals/function-apply */
          './node_modules/core-js/internals/function-apply.js'
        );
        var bind = __webpack_require__(
          /*! ../internals/function-bind-context */
          './node_modules/core-js/internals/function-bind-context.js'
        );
        var isCallable = __webpack_require__(
          /*! ../internals/is-callable */
          './node_modules/core-js/internals/is-callable.js'
        );
        var hasOwn = __webpack_require__(
          /*! ../internals/has-own-property */
          './node_modules/core-js/internals/has-own-property.js'
        );
        var fails = __webpack_require__(
          /*! ../internals/fails */
          './node_modules/core-js/internals/fails.js'
        );
        var html = __webpack_require__(
          /*! ../internals/html */
          './node_modules/core-js/internals/html.js'
        );
        var arraySlice = __webpack_require__(
          /*! ../internals/array-slice */
          './node_modules/core-js/internals/array-slice.js'
        );
        var createElement = __webpack_require__(
          /*! ../internals/document-create-element */
          './node_modules/core-js/internals/document-create-element.js'
        );
        var validateArgumentsLength = __webpack_require__(
          /*! ../internals/validate-arguments-length */
          './node_modules/core-js/internals/validate-arguments-length.js'
        );
        var IS_IOS = __webpack_require__(
          /*! ../internals/engine-is-ios */
          './node_modules/core-js/internals/engine-is-ios.js'
        );
        var IS_NODE = __webpack_require__(
          /*! ../internals/engine-is-node */
          './node_modules/core-js/internals/engine-is-node.js'
        );

        var set = global.setImmediate;
        var clear = global.clearImmediate;
        var process = global.process;
        var Dispatch = global.Dispatch;
        var Function = global.Function;
        var MessageChannel = global.MessageChannel;
        var String = global.String;
        var counter = 0;
        var queue = {};
        var ONREADYSTATECHANGE = 'onreadystatechange';
        var $location, defer, channel, port;

        fails(function () {
          // Deno throws a ReferenceError on `location` access without `--location` flag
          $location = global.location;
        });

        var run = function (id) {
          if (hasOwn(queue, id)) {
            var fn = queue[id];
            delete queue[id];
            fn();
          }
        };

        var runner = function (id) {
          return function () {
            run(id);
          };
        };

        var eventListener = function (event) {
          run(event.data);
        };

        var globalPostMessageDefer = function (id) {
          // old engines have not location.origin
          global.postMessage(
            String(id),
            $location.protocol + '//' + $location.host
          );
        };

        // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
        if (!set || !clear) {
          set = function setImmediate(handler) {
            validateArgumentsLength(arguments.length, 1);
            var fn = isCallable(handler)
              ? handler
              : Function(handler);
            var args = arraySlice(arguments, 1);
            queue[++counter] = function () {
              apply(fn, undefined, args);
            };
            defer(counter);
            return counter;
          };
          clear = function clearImmediate(id) {
            delete queue[id];
          };
          // Node.js 0.8-
          if (IS_NODE) {
            defer = function (id) {
              process.nextTick(runner(id));
            };
            // Sphere (JS game engine) Dispatch API
          } else if (Dispatch && Dispatch.now) {
            defer = function (id) {
              Dispatch.now(runner(id));
            };
            // Browsers with MessageChannel, includes WebWorkers
            // except iOS - https://github.com/zloirock/core-js/issues/624
          } else if (MessageChannel && !IS_IOS) {
            channel = new MessageChannel();
            port = channel.port2;
            channel.port1.onmessage = eventListener;
            defer = bind(port.postMessage, port);
            // Browsers with postMessage, skip WebWorkers
            // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
          } else if (
            global.addEventListener &&
            isCallable(global.postMessage) &&
            !global.importScripts &&
            $location &&
            $location.protocol !== 'file:' &&
            !fails(globalPostMessageDefer)
          ) {
            defer = globalPostMessageDefer;
            global.addEventListener('message', eventListener, false);
            // IE8-
          } else if (ONREADYSTATECHANGE in createElement('script')) {
            defer = function (id) {
              html.appendChild(createElement('script'))[
                ONREADYSTATECHANGE
              ] = function () {
                html.removeChild(this);
                run(id);
              };
            };
            // Rest old browsers
          } else {
            defer = function (id) {
              setTimeout(runner(id), 0);
            };
          }
        }

        module.exports = {
          set: set,
          clear: clear,
        };

        /***/
      },

    /***/
    /*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
    './node_modules/core-js/internals/to-absolute-index.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var toIntegerOrInfinity = __webpack_require__(
          /*! ../internals/to-integer-or-infinity */
          './node_modules/core-js/internals/to-integer-or-infinity.js'
        );

        var max = Math.max;
        var min = Math.min;

        // Helper for a popular repeating case of the spec:
        // Let integer be ? ToInteger(index).
        // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
        module.exports = function (index, length) {
          var integer = toIntegerOrInfinity(index);
          return integer < 0
            ? max(integer + length, 0)
            : min(integer, length);
        };

        /***/
      },

    /***/
    /*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
    './node_modules/core-js/internals/to-indexed-object.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        // toObject with fallback for non-array-like ES3 strings
        var IndexedObject = __webpack_require__(
          /*! ../internals/indexed-object */
          './node_modules/core-js/internals/indexed-object.js'
        );
        var requireObjectCoercible = __webpack_require__(
          /*! ../internals/require-object-coercible */
          './node_modules/core-js/internals/require-object-coercible.js'
        );

        module.exports = function (it) {
          return IndexedObject(requireObjectCoercible(it));
        };

        /***/
      },

    /***/
    /*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer-or-infinity.js ***!
  \******************************************************************/
    './node_modules/core-js/internals/to-integer-or-infinity.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var trunc = __webpack_require__(
          /*! ../internals/math-trunc */
          './node_modules/core-js/internals/math-trunc.js'
        );

        // `ToIntegerOrInfinity` abstract operation
        // https://tc39.es/ecma262/#sec-tointegerorinfinity
        module.exports = function (argument) {
          var number = +argument;
          // eslint-disable-next-line no-self-compare -- NaN check
          return number !== number || number === 0
            ? 0
            : trunc(number);
        };

        /***/
      },

    /***/
    /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
    './node_modules/core-js/internals/to-length.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var toIntegerOrInfinity = __webpack_require__(
          /*! ../internals/to-integer-or-infinity */
          './node_modules/core-js/internals/to-integer-or-infinity.js'
        );

        var min = Math.min;

        // `ToLength` abstract operation
        // https://tc39.es/ecma262/#sec-tolength
        module.exports = function (argument) {
          var len = toIntegerOrInfinity(argument);
          return len > 0 ? min(len, 0x1fffffffffffff) : 0;
          // 2 ** 53 - 1 == 9007199254740991
        };

        /***/
      },

    /***/
    /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
    './node_modules/core-js/internals/to-object.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var requireObjectCoercible = __webpack_require__(
          /*! ../internals/require-object-coercible */
          './node_modules/core-js/internals/require-object-coercible.js'
        );

        var $Object = Object;

        // `ToObject` abstract operation
        // https://tc39.es/ecma262/#sec-toobject
        module.exports = function (argument) {
          return $Object(requireObjectCoercible(argument));
        };

        /***/
      },

    /***/
    /*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
    './node_modules/core-js/internals/to-primitive.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var call = __webpack_require__(
          /*! ../internals/function-call */
          './node_modules/core-js/internals/function-call.js'
        );
        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          './node_modules/core-js/internals/is-object.js'
        );
        var isSymbol = __webpack_require__(
          /*! ../internals/is-symbol */
          './node_modules/core-js/internals/is-symbol.js'
        );
        var getMethod = __webpack_require__(
          /*! ../internals/get-method */
          './node_modules/core-js/internals/get-method.js'
        );
        var ordinaryToPrimitive = __webpack_require__(
          /*! ../internals/ordinary-to-primitive */
          './node_modules/core-js/internals/ordinary-to-primitive.js'
        );
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          './node_modules/core-js/internals/well-known-symbol.js'
        );

        var $TypeError = TypeError;
        var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

        // `ToPrimitive` abstract operation
        // https://tc39.es/ecma262/#sec-toprimitive
        module.exports = function (input, pref) {
          if (!isObject(input) || isSymbol(input)) return input;
          var exoticToPrim = getMethod(input, TO_PRIMITIVE);
          var result;
          if (exoticToPrim) {
            if (pref === undefined) pref = 'default';
            result = call(exoticToPrim, input, pref);
            if (!isObject(result) || isSymbol(result)) return result;
            throw new $TypeError(
              "Can't convert object to primitive value"
            );
          }
          if (pref === undefined) pref = 'number';
          return ordinaryToPrimitive(input, pref);
        };

        /***/
      },

    /***/
    /*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/to-property-key.js ***!
  \***********************************************************/
    './node_modules/core-js/internals/to-property-key.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var toPrimitive = __webpack_require__(
          /*! ../internals/to-primitive */
          './node_modules/core-js/internals/to-primitive.js'
        );
        var isSymbol = __webpack_require__(
          /*! ../internals/is-symbol */
          './node_modules/core-js/internals/is-symbol.js'
        );

        // `ToPropertyKey` abstract operation
        // https://tc39.es/ecma262/#sec-topropertykey
        module.exports = function (argument) {
          var key = toPrimitive(argument, 'string');
          return isSymbol(key) ? key : key + '';
        };

        /***/
      },

    /***/
    /*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
    './node_modules/core-js/internals/to-string-tag-support.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */
          './node_modules/core-js/internals/well-known-symbol.js'
        );

        var TO_STRING_TAG = wellKnownSymbol('toStringTag');
        var test = {};

        test[TO_STRING_TAG] = 'z';

        module.exports = String(test) === '[object z]';

        /***/
      },

    /***/
    /*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-string.js ***!
  \*****************************************************/
    './node_modules/core-js/internals/to-string.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var classof = __webpack_require__(
          /*! ../internals/classof */
          './node_modules/core-js/internals/classof.js'
        );

        var $String = String;

        module.exports = function (argument) {
          if (classof(argument) === 'Symbol')
            throw new TypeError(
              'Cannot convert a Symbol value to a string'
            );
          return $String(argument);
        };

        /***/
      },

    /***/
    /*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/try-to-string.js ***!
  \*********************************************************/
    './node_modules/core-js/internals/try-to-string.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var $String = String;

        module.exports = function (argument) {
          try {
            return $String(argument);
          } catch (error) {
            return 'Object';
          }
        };

        /***/
      },

    /***/
    /*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
    './node_modules/core-js/internals/uid.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var uncurryThis = __webpack_require__(
          /*! ../internals/function-uncurry-this */
          './node_modules/core-js/internals/function-uncurry-this.js'
        );

        var id = 0;
        var postfix = Math.random();
        var toString = uncurryThis((1.0).toString);

        module.exports = function (key) {
          return (
            'Symbol(' +
            (key === undefined ? '' : key) +
            ')_' +
            toString(++id + postfix, 36)
          );
        };

        /***/
      },

    /***/
    /*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
    './node_modules/core-js/internals/use-symbol-as-uid.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        /* eslint-disable es/no-symbol -- required for testing */
        var NATIVE_SYMBOL = __webpack_require__(
          /*! ../internals/symbol-constructor-detection */
          './node_modules/core-js/internals/symbol-constructor-detection.js'
        );

        module.exports =
          NATIVE_SYMBOL &&
          !Symbol.sham &&
          typeof Symbol.iterator == 'symbol';

        /***/
      },

    /***/
    /*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/v8-prototype-define-bug.js ***!
  \*******************************************************************/
    './node_modules/core-js/internals/v8-prototype-define-bug.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */
          './node_modules/core-js/internals/descriptors.js'
        );
        var fails = __webpack_require__(
          /*! ../internals/fails */
          './node_modules/core-js/internals/fails.js'
        );

        // V8 ~ Chrome 36-
        // https://bugs.chromium.org/p/v8/issues/detail?id=3334
        module.exports =
          DESCRIPTORS &&
          fails(function () {
            // eslint-disable-next-line es/no-object-defineproperty -- required for testing
            return (
              Object.defineProperty(
                function () {
                  /* empty */
                },
                'prototype',
                {
                  value: 42,
                  writable: false,
                }
              ).prototype !== 42
            );
          });

        /***/
      },

    /***/
    /*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/validate-arguments-length.js ***!
  \*********************************************************************/
    './node_modules/core-js/internals/validate-arguments-length.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var $TypeError = TypeError;

        module.exports = function (passed, required) {
          if (passed < required)
            throw new $TypeError('Not enough arguments');
          return passed;
        };

        /***/
      },

    /***/
    /*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/weak-map-basic-detection.js ***!
  \********************************************************************/
    './node_modules/core-js/internals/weak-map-basic-detection.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var global = __webpack_require__(
          /*! ../internals/global */
          './node_modules/core-js/internals/global.js'
        );
        var isCallable = __webpack_require__(
          /*! ../internals/is-callable */
          './node_modules/core-js/internals/is-callable.js'
        );

        var WeakMap = global.WeakMap;

        module.exports =
          isCallable(WeakMap) && /native code/.test(String(WeakMap));

        /***/
      },

    /***/
    /*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
    './node_modules/core-js/internals/well-known-symbol.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var global = __webpack_require__(
          /*! ../internals/global */
          './node_modules/core-js/internals/global.js'
        );
        var shared = __webpack_require__(
          /*! ../internals/shared */
          './node_modules/core-js/internals/shared.js'
        );
        var hasOwn = __webpack_require__(
          /*! ../internals/has-own-property */
          './node_modules/core-js/internals/has-own-property.js'
        );
        var uid = __webpack_require__(
          /*! ../internals/uid */
          './node_modules/core-js/internals/uid.js'
        );
        var NATIVE_SYMBOL = __webpack_require__(
          /*! ../internals/symbol-constructor-detection */
          './node_modules/core-js/internals/symbol-constructor-detection.js'
        );
        var USE_SYMBOL_AS_UID = __webpack_require__(
          /*! ../internals/use-symbol-as-uid */
          './node_modules/core-js/internals/use-symbol-as-uid.js'
        );

        var Symbol = global.Symbol;
        var WellKnownSymbolsStore = shared('wks');
        var createWellKnownSymbol = USE_SYMBOL_AS_UID
          ? Symbol['for'] || Symbol
          : (Symbol && Symbol.withoutSetter) || uid;

        module.exports = function (name) {
          if (!hasOwn(WellKnownSymbolsStore, name)) {
            WellKnownSymbolsStore[name] =
              NATIVE_SYMBOL && hasOwn(Symbol, name)
                ? Symbol[name]
                : createWellKnownSymbol('Symbol.' + name);
          }
          return WellKnownSymbolsStore[name];
        };

        /***/
      },

    /***/
    /*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
    './node_modules/core-js/modules/es.array.filter.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          './node_modules/core-js/internals/export.js'
        );
        var $filter = __webpack_require__(
          /*! ../internals/array-iteration */
          './node_modules/core-js/internals/array-iteration.js'
        ).filter;
        var arrayMethodHasSpeciesSupport = __webpack_require__(
          /*! ../internals/array-method-has-species-support */
          './node_modules/core-js/internals/array-method-has-species-support.js'
        );

        var HAS_SPECIES_SUPPORT =
          arrayMethodHasSpeciesSupport('filter');

        // `Array.prototype.filter` method
        // https://tc39.es/ecma262/#sec-array.prototype.filter
        // with adding support of @@species
        $(
          {
            target: 'Array',
            proto: true,
            forced: !HAS_SPECIES_SUPPORT,
          },
          {
            filter: function filter(callbackfn /* , thisArg */) {
              return $filter(
                this,
                callbackfn,
                arguments.length > 1 ? arguments[1] : undefined
              );
            },
          }
        );

        /***/
      },

    /***/
    /*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.from.js ***!
  \*******************************************************/
    './node_modules/core-js/modules/es.array.from.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          './node_modules/core-js/internals/export.js'
        );
        var from = __webpack_require__(
          /*! ../internals/array-from */
          './node_modules/core-js/internals/array-from.js'
        );
        var checkCorrectnessOfIteration = __webpack_require__(
          /*! ../internals/check-correctness-of-iteration */
          './node_modules/core-js/internals/check-correctness-of-iteration.js'
        );

        var INCORRECT_ITERATION = !checkCorrectnessOfIteration(
          function (iterable) {
            // eslint-disable-next-line es/no-array-from -- required for testing
            Array.from(iterable);
          }
        );

        // `Array.from` method
        // https://tc39.es/ecma262/#sec-array.from
        $(
          {
            target: 'Array',
            stat: true,
            forced: INCORRECT_ITERATION,
          },
          {
            from: from,
          }
        );

        /***/
      },

    /***/
    /*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.index-of.js ***!
  \***********************************************************/
    './node_modules/core-js/modules/es.array.index-of.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        /* eslint-disable es/no-array-prototype-indexof -- required for testing */
        var $ = __webpack_require__(
          /*! ../internals/export */
          './node_modules/core-js/internals/export.js'
        );
        var uncurryThis = __webpack_require__(
          /*! ../internals/function-uncurry-this-clause */
          './node_modules/core-js/internals/function-uncurry-this-clause.js'
        );
        var $indexOf = __webpack_require__(
          /*! ../internals/array-includes */
          './node_modules/core-js/internals/array-includes.js'
        ).indexOf;
        var arrayMethodIsStrict = __webpack_require__(
          /*! ../internals/array-method-is-strict */
          './node_modules/core-js/internals/array-method-is-strict.js'
        );

        var nativeIndexOf = uncurryThis([].indexOf);

        var NEGATIVE_ZERO =
          !!nativeIndexOf && 1 / nativeIndexOf([1], 1, -0) < 0;
        var FORCED = NEGATIVE_ZERO || !arrayMethodIsStrict('indexOf');

        // `Array.prototype.indexOf` method
        // https://tc39.es/ecma262/#sec-array.prototype.indexof
        $(
          {
            target: 'Array',
            proto: true,
            forced: FORCED,
          },
          {
            indexOf: function indexOf(
              searchElement /* , fromIndex = 0 */
            ) {
              var fromIndex =
                arguments.length > 1 ? arguments[1] : undefined;
              return NEGATIVE_ZERO // convert -0 to +0
                ? nativeIndexOf(this, searchElement, fromIndex) || 0
                : $indexOf(this, searchElement, fromIndex);
            },
          }
        );

        /***/
      },

    /***/
    /*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.all.js ***!
  \********************************************************/
    './node_modules/core-js/modules/es.promise.all.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          './node_modules/core-js/internals/export.js'
        );
        var call = __webpack_require__(
          /*! ../internals/function-call */
          './node_modules/core-js/internals/function-call.js'
        );
        var aCallable = __webpack_require__(
          /*! ../internals/a-callable */
          './node_modules/core-js/internals/a-callable.js'
        );
        var newPromiseCapabilityModule = __webpack_require__(
          /*! ../internals/new-promise-capability */
          './node_modules/core-js/internals/new-promise-capability.js'
        );
        var perform = __webpack_require__(
          /*! ../internals/perform */
          './node_modules/core-js/internals/perform.js'
        );
        var iterate = __webpack_require__(
          /*! ../internals/iterate */
          './node_modules/core-js/internals/iterate.js'
        );
        var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(
          /*! ../internals/promise-statics-incorrect-iteration */
          './node_modules/core-js/internals/promise-statics-incorrect-iteration.js'
        );

        // `Promise.all` method
        // https://tc39.es/ecma262/#sec-promise.all
        $(
          {
            target: 'Promise',
            stat: true,
            forced: PROMISE_STATICS_INCORRECT_ITERATION,
          },
          {
            all: function all(iterable) {
              var C = this;
              var capability = newPromiseCapabilityModule.f(C);
              var resolve = capability.resolve;
              var reject = capability.reject;
              var result = perform(function () {
                var $promiseResolve = aCallable(C.resolve);
                var values = [];
                var counter = 0;
                var remaining = 1;
                iterate(iterable, function (promise) {
                  var index = counter++;
                  var alreadyCalled = false;
                  remaining++;
                  call($promiseResolve, C, promise).then(function (
                    value
                  ) {
                    if (alreadyCalled) return;
                    alreadyCalled = true;
                    values[index] = value;
                    --remaining || resolve(values);
                  },
                  reject);
                });
                --remaining || resolve(values);
              });
              if (result.error) reject(result.value);
              return capability.promise;
            },
          }
        );

        /***/
      },

    /***/
    /*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.catch.js ***!
  \**********************************************************/
    './node_modules/core-js/modules/es.promise.catch.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          './node_modules/core-js/internals/export.js'
        );
        var IS_PURE = __webpack_require__(
          /*! ../internals/is-pure */
          './node_modules/core-js/internals/is-pure.js'
        );
        var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(
          /*! ../internals/promise-constructor-detection */
          './node_modules/core-js/internals/promise-constructor-detection.js'
        ).CONSTRUCTOR;
        var NativePromiseConstructor = __webpack_require__(
          /*! ../internals/promise-native-constructor */
          './node_modules/core-js/internals/promise-native-constructor.js'
        );
        var getBuiltIn = __webpack_require__(
          /*! ../internals/get-built-in */
          './node_modules/core-js/internals/get-built-in.js'
        );
        var isCallable = __webpack_require__(
          /*! ../internals/is-callable */
          './node_modules/core-js/internals/is-callable.js'
        );
        var defineBuiltIn = __webpack_require__(
          /*! ../internals/define-built-in */
          './node_modules/core-js/internals/define-built-in.js'
        );

        var NativePromisePrototype =
          NativePromiseConstructor &&
          NativePromiseConstructor.prototype;

        // `Promise.prototype.catch` method
        // https://tc39.es/ecma262/#sec-promise.prototype.catch
        $(
          {
            target: 'Promise',
            proto: true,
            forced: FORCED_PROMISE_CONSTRUCTOR,
            real: true,
          },
          {
            catch: function (onRejected) {
              return this.then(undefined, onRejected);
            },
          }
        );

        // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
        if (!IS_PURE && isCallable(NativePromiseConstructor)) {
          var method = getBuiltIn('Promise').prototype['catch'];
          if (NativePromisePrototype['catch'] !== method) {
            defineBuiltIn(NativePromisePrototype, 'catch', method, {
              unsafe: true,
            });
          }
        }

        /***/
      },

    /***/
    /*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.constructor.js ***!
  \****************************************************************/
    './node_modules/core-js/modules/es.promise.constructor.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          './node_modules/core-js/internals/export.js'
        );
        var IS_PURE = __webpack_require__(
          /*! ../internals/is-pure */
          './node_modules/core-js/internals/is-pure.js'
        );
        var IS_NODE = __webpack_require__(
          /*! ../internals/engine-is-node */
          './node_modules/core-js/internals/engine-is-node.js'
        );
        var global = __webpack_require__(
          /*! ../internals/global */
          './node_modules/core-js/internals/global.js'
        );
        var call = __webpack_require__(
          /*! ../internals/function-call */
          './node_modules/core-js/internals/function-call.js'
        );
        var defineBuiltIn = __webpack_require__(
          /*! ../internals/define-built-in */
          './node_modules/core-js/internals/define-built-in.js'
        );
        var setPrototypeOf = __webpack_require__(
          /*! ../internals/object-set-prototype-of */
          './node_modules/core-js/internals/object-set-prototype-of.js'
        );
        var setToStringTag = __webpack_require__(
          /*! ../internals/set-to-string-tag */
          './node_modules/core-js/internals/set-to-string-tag.js'
        );
        var setSpecies = __webpack_require__(
          /*! ../internals/set-species */
          './node_modules/core-js/internals/set-species.js'
        );
        var aCallable = __webpack_require__(
          /*! ../internals/a-callable */
          './node_modules/core-js/internals/a-callable.js'
        );
        var isCallable = __webpack_require__(
          /*! ../internals/is-callable */
          './node_modules/core-js/internals/is-callable.js'
        );
        var isObject = __webpack_require__(
          /*! ../internals/is-object */
          './node_modules/core-js/internals/is-object.js'
        );
        var anInstance = __webpack_require__(
          /*! ../internals/an-instance */
          './node_modules/core-js/internals/an-instance.js'
        );
        var speciesConstructor = __webpack_require__(
          /*! ../internals/species-constructor */
          './node_modules/core-js/internals/species-constructor.js'
        );
        var task = __webpack_require__(
          /*! ../internals/task */
          './node_modules/core-js/internals/task.js'
        ).set;
        var microtask = __webpack_require__(
          /*! ../internals/microtask */
          './node_modules/core-js/internals/microtask.js'
        );
        var hostReportErrors = __webpack_require__(
          /*! ../internals/host-report-errors */
          './node_modules/core-js/internals/host-report-errors.js'
        );
        var perform = __webpack_require__(
          /*! ../internals/perform */
          './node_modules/core-js/internals/perform.js'
        );
        var Queue = __webpack_require__(
          /*! ../internals/queue */
          './node_modules/core-js/internals/queue.js'
        );
        var InternalStateModule = __webpack_require__(
          /*! ../internals/internal-state */
          './node_modules/core-js/internals/internal-state.js'
        );
        var NativePromiseConstructor = __webpack_require__(
          /*! ../internals/promise-native-constructor */
          './node_modules/core-js/internals/promise-native-constructor.js'
        );
        var PromiseConstructorDetection = __webpack_require__(
          /*! ../internals/promise-constructor-detection */
          './node_modules/core-js/internals/promise-constructor-detection.js'
        );
        var newPromiseCapabilityModule = __webpack_require__(
          /*! ../internals/new-promise-capability */
          './node_modules/core-js/internals/new-promise-capability.js'
        );

        var PROMISE = 'Promise';
        var FORCED_PROMISE_CONSTRUCTOR =
          PromiseConstructorDetection.CONSTRUCTOR;
        var NATIVE_PROMISE_REJECTION_EVENT =
          PromiseConstructorDetection.REJECTION_EVENT;
        var NATIVE_PROMISE_SUBCLASSING =
          PromiseConstructorDetection.SUBCLASSING;
        var getInternalPromiseState =
          InternalStateModule.getterFor(PROMISE);
        var setInternalState = InternalStateModule.set;
        var NativePromisePrototype =
          NativePromiseConstructor &&
          NativePromiseConstructor.prototype;
        var PromiseConstructor = NativePromiseConstructor;
        var PromisePrototype = NativePromisePrototype;
        var TypeError = global.TypeError;
        var document = global.document;
        var process = global.process;
        var newPromiseCapability = newPromiseCapabilityModule.f;
        var newGenericPromiseCapability = newPromiseCapability;

        var DISPATCH_EVENT = !!(
          document &&
          document.createEvent &&
          global.dispatchEvent
        );
        var UNHANDLED_REJECTION = 'unhandledrejection';
        var REJECTION_HANDLED = 'rejectionhandled';
        var PENDING = 0;
        var FULFILLED = 1;
        var REJECTED = 2;
        var HANDLED = 1;
        var UNHANDLED = 2;

        var Internal,
          OwnPromiseCapability,
          PromiseWrapper,
          nativeThen;

        // helpers
        var isThenable = function (it) {
          var then;
          return isObject(it) && isCallable((then = it.then))
            ? then
            : false;
        };

        var callReaction = function (reaction, state) {
          var value = state.value;
          var ok = state.state === FULFILLED;
          var handler = ok ? reaction.ok : reaction.fail;
          var resolve = reaction.resolve;
          var reject = reaction.reject;
          var domain = reaction.domain;
          var result, then, exited;
          try {
            if (handler) {
              if (!ok) {
                if (state.rejection === UNHANDLED)
                  onHandleUnhandled(state);
                state.rejection = HANDLED;
              }
              if (handler === true) result = value;
              else {
                if (domain) domain.enter();
                result = handler(value);
                // can throw
                if (domain) {
                  domain.exit();
                  exited = true;
                }
              }
              if (result === reaction.promise) {
                reject(new TypeError('Promise-chain cycle'));
              } else if ((then = isThenable(result))) {
                call(then, result, resolve, reject);
              } else resolve(result);
            } else reject(value);
          } catch (error) {
            if (domain && !exited) domain.exit();
            reject(error);
          }
        };

        var notify = function (state, isReject) {
          if (state.notified) return;
          state.notified = true;
          microtask(function () {
            var reactions = state.reactions;
            var reaction;
            while ((reaction = reactions.get())) {
              callReaction(reaction, state);
            }
            state.notified = false;
            if (isReject && !state.rejection) onUnhandled(state);
          });
        };

        var dispatchEvent = function (name, promise, reason) {
          var event, handler;
          if (DISPATCH_EVENT) {
            event = document.createEvent('Event');
            event.promise = promise;
            event.reason = reason;
            event.initEvent(name, false, true);
            global.dispatchEvent(event);
          } else
            event = {
              promise: promise,
              reason: reason,
            };
          if (
            !NATIVE_PROMISE_REJECTION_EVENT &&
            (handler = global['on' + name])
          )
            handler(event);
          else if (name === UNHANDLED_REJECTION)
            hostReportErrors('Unhandled promise rejection', reason);
        };

        var onUnhandled = function (state) {
          call(task, global, function () {
            var promise = state.facade;
            var value = state.value;
            var IS_UNHANDLED = isUnhandled(state);
            var result;
            if (IS_UNHANDLED) {
              result = perform(function () {
                if (IS_NODE) {
                  process.emit('unhandledRejection', value, promise);
                } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
              });
              // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
              state.rejection =
                IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
              if (result.error) throw result.value;
            }
          });
        };

        var isUnhandled = function (state) {
          return state.rejection !== HANDLED && !state.parent;
        };

        var onHandleUnhandled = function (state) {
          call(task, global, function () {
            var promise = state.facade;
            if (IS_NODE) {
              process.emit('rejectionHandled', promise);
            } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
          });
        };

        var bind = function (fn, state, unwrap) {
          return function (value) {
            fn(state, value, unwrap);
          };
        };

        var internalReject = function (state, value, unwrap) {
          if (state.done) return;
          state.done = true;
          if (unwrap) state = unwrap;
          state.value = value;
          state.state = REJECTED;
          notify(state, true);
        };

        var internalResolve = function (state, value, unwrap) {
          if (state.done) return;
          state.done = true;
          if (unwrap) state = unwrap;
          try {
            if (state.facade === value)
              throw new TypeError("Promise can't be resolved itself");
            var then = isThenable(value);
            if (then) {
              microtask(function () {
                var wrapper = {
                  done: false,
                };
                try {
                  call(
                    then,
                    value,
                    bind(internalResolve, wrapper, state),
                    bind(internalReject, wrapper, state)
                  );
                } catch (error) {
                  internalReject(wrapper, error, state);
                }
              });
            } else {
              state.value = value;
              state.state = FULFILLED;
              notify(state, false);
            }
          } catch (error) {
            internalReject(
              {
                done: false,
              },
              error,
              state
            );
          }
        };

        // constructor polyfill
        if (FORCED_PROMISE_CONSTRUCTOR) {
          // 25.4.3.1 Promise(executor)
          PromiseConstructor = function Promise(executor) {
            anInstance(this, PromisePrototype);
            aCallable(executor);
            call(Internal, this);
            var state = getInternalPromiseState(this);
            try {
              executor(
                bind(internalResolve, state),
                bind(internalReject, state)
              );
            } catch (error) {
              internalReject(state, error);
            }
          };

          PromisePrototype = PromiseConstructor.prototype;

          // eslint-disable-next-line no-unused-vars -- required for `.length`
          Internal = function Promise(executor) {
            setInternalState(this, {
              type: PROMISE,
              done: false,
              notified: false,
              parent: false,
              reactions: new Queue(),
              rejection: false,
              state: PENDING,
              value: undefined,
            });
          };

          // `Promise.prototype.then` method
          // https://tc39.es/ecma262/#sec-promise.prototype.then
          Internal.prototype = defineBuiltIn(
            PromisePrototype,
            'then',
            function then(onFulfilled, onRejected) {
              var state = getInternalPromiseState(this);
              var reaction = newPromiseCapability(
                speciesConstructor(this, PromiseConstructor)
              );
              state.parent = true;
              reaction.ok = isCallable(onFulfilled)
                ? onFulfilled
                : true;
              reaction.fail = isCallable(onRejected) && onRejected;
              reaction.domain = IS_NODE ? process.domain : undefined;
              if (state.state === PENDING)
                state.reactions.add(reaction);
              else
                microtask(function () {
                  callReaction(reaction, state);
                });
              return reaction.promise;
            }
          );

          OwnPromiseCapability = function () {
            var promise = new Internal();
            var state = getInternalPromiseState(promise);
            this.promise = promise;
            this.resolve = bind(internalResolve, state);
            this.reject = bind(internalReject, state);
          };

          newPromiseCapabilityModule.f = newPromiseCapability =
            function (C) {
              return C === PromiseConstructor || C === PromiseWrapper
                ? new OwnPromiseCapability(C)
                : newGenericPromiseCapability(C);
            };

          if (
            !IS_PURE &&
            isCallable(NativePromiseConstructor) &&
            NativePromisePrototype !== Object.prototype
          ) {
            nativeThen = NativePromisePrototype.then;

            if (!NATIVE_PROMISE_SUBCLASSING) {
              // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
              defineBuiltIn(
                NativePromisePrototype,
                'then',
                function then(onFulfilled, onRejected) {
                  var that = this;
                  return new PromiseConstructor(function (
                    resolve,
                    reject
                  ) {
                    call(nativeThen, that, resolve, reject);
                  }).then(onFulfilled, onRejected);
                  // https://github.com/zloirock/core-js/issues/640
                },
                {
                  unsafe: true,
                }
              );
            }

            // make `.constructor === Promise` work for native promise-based APIs
            try {
              delete NativePromisePrototype.constructor;
            } catch (error) {
              /* empty */
            }

            // make `instanceof Promise` work for native promise-based APIs
            if (setPrototypeOf) {
              setPrototypeOf(
                NativePromisePrototype,
                PromisePrototype
              );
            }
          }
        }

        $(
          {
            global: true,
            constructor: true,
            wrap: true,
            forced: FORCED_PROMISE_CONSTRUCTOR,
          },
          {
            Promise: PromiseConstructor,
          }
        );

        setToStringTag(PromiseConstructor, PROMISE, false, true);
        setSpecies(PROMISE);

        /***/
      },

    /***/
    /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.js ***!
  \****************************************************/
    './node_modules/core-js/modules/es.promise.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        // TODO: Remove this module from `core-js@4` since it's split to modules listed below
        __webpack_require__(
          /*! ../modules/es.promise.constructor */
          './node_modules/core-js/modules/es.promise.constructor.js'
        );
        __webpack_require__(
          /*! ../modules/es.promise.all */
          './node_modules/core-js/modules/es.promise.all.js'
        );
        __webpack_require__(
          /*! ../modules/es.promise.catch */
          './node_modules/core-js/modules/es.promise.catch.js'
        );
        __webpack_require__(
          /*! ../modules/es.promise.race */
          './node_modules/core-js/modules/es.promise.race.js'
        );
        __webpack_require__(
          /*! ../modules/es.promise.reject */
          './node_modules/core-js/modules/es.promise.reject.js'
        );
        __webpack_require__(
          /*! ../modules/es.promise.resolve */
          './node_modules/core-js/modules/es.promise.resolve.js'
        );

        /***/
      },

    /***/
    /*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.race.js ***!
  \*********************************************************/
    './node_modules/core-js/modules/es.promise.race.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          './node_modules/core-js/internals/export.js'
        );
        var call = __webpack_require__(
          /*! ../internals/function-call */
          './node_modules/core-js/internals/function-call.js'
        );
        var aCallable = __webpack_require__(
          /*! ../internals/a-callable */
          './node_modules/core-js/internals/a-callable.js'
        );
        var newPromiseCapabilityModule = __webpack_require__(
          /*! ../internals/new-promise-capability */
          './node_modules/core-js/internals/new-promise-capability.js'
        );
        var perform = __webpack_require__(
          /*! ../internals/perform */
          './node_modules/core-js/internals/perform.js'
        );
        var iterate = __webpack_require__(
          /*! ../internals/iterate */
          './node_modules/core-js/internals/iterate.js'
        );
        var PROMISE_STATICS_INCORRECT_ITERATION = __webpack_require__(
          /*! ../internals/promise-statics-incorrect-iteration */
          './node_modules/core-js/internals/promise-statics-incorrect-iteration.js'
        );

        // `Promise.race` method
        // https://tc39.es/ecma262/#sec-promise.race
        $(
          {
            target: 'Promise',
            stat: true,
            forced: PROMISE_STATICS_INCORRECT_ITERATION,
          },
          {
            race: function race(iterable) {
              var C = this;
              var capability = newPromiseCapabilityModule.f(C);
              var reject = capability.reject;
              var result = perform(function () {
                var $promiseResolve = aCallable(C.resolve);
                iterate(iterable, function (promise) {
                  call($promiseResolve, C, promise).then(
                    capability.resolve,
                    reject
                  );
                });
              });
              if (result.error) reject(result.value);
              return capability.promise;
            },
          }
        );

        /***/
      },

    /***/
    /*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.reject.js ***!
  \***********************************************************/
    './node_modules/core-js/modules/es.promise.reject.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          './node_modules/core-js/internals/export.js'
        );
        var newPromiseCapabilityModule = __webpack_require__(
          /*! ../internals/new-promise-capability */
          './node_modules/core-js/internals/new-promise-capability.js'
        );
        var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(
          /*! ../internals/promise-constructor-detection */
          './node_modules/core-js/internals/promise-constructor-detection.js'
        ).CONSTRUCTOR;

        // `Promise.reject` method
        // https://tc39.es/ecma262/#sec-promise.reject
        $(
          {
            target: 'Promise',
            stat: true,
            forced: FORCED_PROMISE_CONSTRUCTOR,
          },
          {
            reject: function reject(r) {
              var capability = newPromiseCapabilityModule.f(this);
              var capabilityReject = capability.reject;
              capabilityReject(r);
              return capability.promise;
            },
          }
        );

        /***/
      },

    /***/
    /*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.resolve.js ***!
  \************************************************************/
    './node_modules/core-js/modules/es.promise.resolve.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          './node_modules/core-js/internals/export.js'
        );
        var getBuiltIn = __webpack_require__(
          /*! ../internals/get-built-in */
          './node_modules/core-js/internals/get-built-in.js'
        );
        var IS_PURE = __webpack_require__(
          /*! ../internals/is-pure */
          './node_modules/core-js/internals/is-pure.js'
        );
        var NativePromiseConstructor = __webpack_require__(
          /*! ../internals/promise-native-constructor */
          './node_modules/core-js/internals/promise-native-constructor.js'
        );
        var FORCED_PROMISE_CONSTRUCTOR = __webpack_require__(
          /*! ../internals/promise-constructor-detection */
          './node_modules/core-js/internals/promise-constructor-detection.js'
        ).CONSTRUCTOR;
        var promiseResolve = __webpack_require__(
          /*! ../internals/promise-resolve */
          './node_modules/core-js/internals/promise-resolve.js'
        );

        var PromiseConstructorWrapper = getBuiltIn('Promise');
        var CHECK_WRAPPER = IS_PURE && !FORCED_PROMISE_CONSTRUCTOR;

        // `Promise.resolve` method
        // https://tc39.es/ecma262/#sec-promise.resolve
        $(
          {
            target: 'Promise',
            stat: true,
            forced: IS_PURE || FORCED_PROMISE_CONSTRUCTOR,
          },
          {
            resolve: function resolve(x) {
              return promiseResolve(
                CHECK_WRAPPER && this === PromiseConstructorWrapper
                  ? NativePromiseConstructor
                  : this,
                x
              );
            },
          }
        );

        /***/
      },

    /***/
    /*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.starts-with.js ***!
  \***************************************************************/
    './node_modules/core-js/modules/es.string.starts-with.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(
          /*! ../internals/export */
          './node_modules/core-js/internals/export.js'
        );
        var uncurryThis = __webpack_require__(
          /*! ../internals/function-uncurry-this-clause */
          './node_modules/core-js/internals/function-uncurry-this-clause.js'
        );
        var getOwnPropertyDescriptor = __webpack_require__(
          /*! ../internals/object-get-own-property-descriptor */
          './node_modules/core-js/internals/object-get-own-property-descriptor.js'
        ).f;
        var toLength = __webpack_require__(
          /*! ../internals/to-length */
          './node_modules/core-js/internals/to-length.js'
        );
        var toString = __webpack_require__(
          /*! ../internals/to-string */
          './node_modules/core-js/internals/to-string.js'
        );
        var notARegExp = __webpack_require__(
          /*! ../internals/not-a-regexp */
          './node_modules/core-js/internals/not-a-regexp.js'
        );
        var requireObjectCoercible = __webpack_require__(
          /*! ../internals/require-object-coercible */
          './node_modules/core-js/internals/require-object-coercible.js'
        );
        var correctIsRegExpLogic = __webpack_require__(
          /*! ../internals/correct-is-regexp-logic */
          './node_modules/core-js/internals/correct-is-regexp-logic.js'
        );
        var IS_PURE = __webpack_require__(
          /*! ../internals/is-pure */
          './node_modules/core-js/internals/is-pure.js'
        );

        var stringSlice = uncurryThis(''.slice);
        var min = Math.min;

        var CORRECT_IS_REGEXP_LOGIC =
          correctIsRegExpLogic('startsWith');
        // https://github.com/zloirock/core-js/pull/702
        var MDN_POLYFILL_BUG =
          !IS_PURE &&
          !CORRECT_IS_REGEXP_LOGIC &&
          !!(function () {
            var descriptor = getOwnPropertyDescriptor(
              String.prototype,
              'startsWith'
            );
            return descriptor && !descriptor.writable;
          })();

        // `String.prototype.startsWith` method
        // https://tc39.es/ecma262/#sec-string.prototype.startswith
        $(
          {
            target: 'String',
            proto: true,
            forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC,
          },
          {
            startsWith: function startsWith(
              searchString /* , position = 0 */
            ) {
              var that = toString(requireObjectCoercible(this));
              notARegExp(searchString);
              var index = toLength(
                min(
                  arguments.length > 1 ? arguments[1] : undefined,
                  that.length
                )
              );
              var search = toString(searchString);
              return (
                stringSlice(that, index, index + search.length) ===
                search
              );
            },
          }
        );

        /***/
      },

    /***/
    /*!********************************************************************!*\
  !*** ./node_modules/desandro-matches-selector/matches-selector.js ***!
  \********************************************************************/
    './node_modules/desandro-matches-selector/matches-selector.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__,
          __WEBPACK_AMD_DEFINE_RESULT__;
        /**
         * matchesSelector v2.0.2
         * matchesSelector( element, '.selector' )
         * MIT license
         */

        /*jshint browser: true, strict: true, undef: true, unused: true */

        (function (window, factory) {
          /*global define: false, module: false */
          'use strict';
          // universal module definition
          if (true) {
            // AMD
            !((__WEBPACK_AMD_DEFINE_FACTORY__ = factory),
            (__WEBPACK_AMD_DEFINE_RESULT__ =
              typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function'
                ? __WEBPACK_AMD_DEFINE_FACTORY__.call(
                    exports,
                    __webpack_require__,
                    exports,
                    module
                  )
                : __WEBPACK_AMD_DEFINE_FACTORY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })(window, function factory() {
          'use strict';

          var matchesMethod = (function () {
            var ElemProto = window.Element.prototype;
            // check for the standard method name first
            if (ElemProto.matches) {
              return 'matches';
            }
            // check un-prefixed
            if (ElemProto.matchesSelector) {
              return 'matchesSelector';
            }
            // check vendor prefixes
            var prefixes = ['webkit', 'moz', 'ms', 'o'];

            for (var i = 0; i < prefixes.length; i++) {
              var prefix = prefixes[i];
              var method = prefix + 'MatchesSelector';
              if (ElemProto[method]) {
                return method;
              }
            }
          })();

          return function matchesSelector(elem, selector) {
            return elem[matchesMethod](selector);
          };
        });

        /***/
      },

    /***/
    /*!***********************************************!*\
  !*** ./node_modules/ev-emitter/ev-emitter.js ***!
  \***********************************************/
    './node_modules/ev-emitter/ev-emitter.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__,
          __WEBPACK_AMD_DEFINE_RESULT__;
        /**
         * EvEmitter v1.1.0
         * Lil' event emitter
         * MIT License
         */

        /* jshint unused: true, undef: true, strict: true */

        (function (global, factory) {
          // universal module definition
          /* jshint strict: false */
          /* globals define, module, window */
          if (true) {
            // AMD - RequireJS
            !((__WEBPACK_AMD_DEFINE_FACTORY__ = factory),
            (__WEBPACK_AMD_DEFINE_RESULT__ =
              typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function'
                ? __WEBPACK_AMD_DEFINE_FACTORY__.call(
                    exports,
                    __webpack_require__,
                    exports,
                    module
                  )
                : __WEBPACK_AMD_DEFINE_FACTORY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })(typeof window != 'undefined' ? window : this, function () {
          'use strict';

          function EvEmitter() {}

          var proto = EvEmitter.prototype;

          proto.on = function (eventName, listener) {
            if (!eventName || !listener) {
              return;
            }
            // set events hash
            var events = (this._events = this._events || {});
            // set listeners array
            var listeners = (events[eventName] =
              events[eventName] || []);
            // only add once
            if (listeners.indexOf(listener) == -1) {
              listeners.push(listener);
            }

            return this;
          };

          proto.once = function (eventName, listener) {
            if (!eventName || !listener) {
              return;
            }
            // add event
            this.on(eventName, listener);
            // set once flag
            // set onceEvents hash
            var onceEvents = (this._onceEvents =
              this._onceEvents || {});
            // set onceListeners object
            var onceListeners = (onceEvents[eventName] =
              onceEvents[eventName] || {});
            // set flag
            onceListeners[listener] = true;

            return this;
          };

          proto.off = function (eventName, listener) {
            var listeners = this._events && this._events[eventName];
            if (!listeners || !listeners.length) {
              return;
            }
            var index = listeners.indexOf(listener);
            if (index != -1) {
              listeners.splice(index, 1);
            }

            return this;
          };

          proto.emitEvent = function (eventName, args) {
            var listeners = this._events && this._events[eventName];
            if (!listeners || !listeners.length) {
              return;
            }
            // copy over to avoid interference if .off() in listener
            listeners = listeners.slice(0);
            args = args || [];
            // once stuff
            var onceListeners =
              this._onceEvents && this._onceEvents[eventName];

            for (var i = 0; i < listeners.length; i++) {
              var listener = listeners[i];
              var isOnce = onceListeners && onceListeners[listener];
              if (isOnce) {
                // remove listener
                // remove before trigger to prevent recursion
                this.off(eventName, listener);
                // unset once flag
                delete onceListeners[listener];
              }
              // trigger listener
              listener.apply(this, args);
            }

            return this;
          };

          proto.allOff = function () {
            delete this._events;
            delete this._onceEvents;
          };

          return EvEmitter;
        });

        /***/
      },

    /***/
    /*!**********************************************!*\
  !*** ./node_modules/fizzy-ui-utils/utils.js ***!
  \**********************************************/
    './node_modules/fizzy-ui-utils/utils.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__,
          __WEBPACK_AMD_DEFINE_RESULT__;
        /**
         * Fizzy UI utils v2.0.7
         * MIT license
         */

        /*jshint browser: true, undef: true, unused: true, strict: true */

        (function (window, factory) {
          // universal module definition
          /*jshint strict: false */
          /*globals define, module, require */

          if (true) {
            // AMD
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(
                /*! desandro-matches-selector/matches-selector */
                './node_modules/desandro-matches-selector/matches-selector.js'
              ),
            ]),
            (__WEBPACK_AMD_DEFINE_RESULT__ = function (
              matchesSelector
            ) {
              return factory(window, matchesSelector);
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })(window, function factory(window, matchesSelector) {
          'use strict';

          var utils = {};

          // ----- extend ----- //

          // extends objects
          utils.extend = function (a, b) {
            for (var prop in b) {
              a[prop] = b[prop];
            }
            return a;
          };

          // ----- modulo ----- //

          utils.modulo = function (num, div) {
            return ((num % div) + div) % div;
          };

          // ----- makeArray ----- //

          var arraySlice = Array.prototype.slice;

          // turn element or nodeList into an array
          utils.makeArray = function (obj) {
            if (Array.isArray(obj)) {
              // use object if already an array
              return obj;
            }
            // return empty array if undefined or null. #6
            if (obj === null || obj === undefined) {
              return [];
            }

            var isArrayLike =
              typeof obj == 'object' && typeof obj.length == 'number';
            if (isArrayLike) {
              // convert nodeList to array
              return arraySlice.call(obj);
            }

            // array of single index
            return [obj];
          };

          // ----- removeFrom ----- //

          utils.removeFrom = function (ary, obj) {
            var index = ary.indexOf(obj);
            if (index != -1) {
              ary.splice(index, 1);
            }
          };

          // ----- getParent ----- //

          utils.getParent = function (elem, selector) {
            while (elem.parentNode && elem != document.body) {
              elem = elem.parentNode;
              if (matchesSelector(elem, selector)) {
                return elem;
              }
            }
          };

          // ----- getQueryElement ----- //

          // use element as selector string
          utils.getQueryElement = function (elem) {
            if (typeof elem == 'string') {
              return document.querySelector(elem);
            }
            return elem;
          };

          // ----- handleEvent ----- //

          // enable .ontype to trigger from .addEventListener( elem, 'type' )
          utils.handleEvent = function (event) {
            var method = 'on' + event.type;
            if (this[method]) {
              this[method](event);
            }
          };

          // ----- filterFindElements ----- //

          utils.filterFindElements = function (elems, selector) {
            // make array of elems
            elems = utils.makeArray(elems);
            var ffElems = [];

            elems.forEach(function (elem) {
              // check that elem is an actual element
              if (!(elem instanceof HTMLElement)) {
                return;
              }
              // add elem if no selector
              if (!selector) {
                ffElems.push(elem);
                return;
              }
              // filter & find items if we have a selector
              // filter
              if (matchesSelector(elem, selector)) {
                ffElems.push(elem);
              }
              // find children
              var childElems = elem.querySelectorAll(selector);
              // concat childElems to filterFound array
              for (var i = 0; i < childElems.length; i++) {
                ffElems.push(childElems[i]);
              }
            });

            return ffElems;
          };

          // ----- debounceMethod ----- //

          utils.debounceMethod = function (
            _class,
            methodName,
            threshold
          ) {
            threshold = threshold || 100;
            // original method
            var method = _class.prototype[methodName];
            var timeoutName = methodName + 'Timeout';

            _class.prototype[methodName] = function () {
              var timeout = this[timeoutName];
              clearTimeout(timeout);

              var args = arguments;
              var _this = this;
              this[timeoutName] = setTimeout(function () {
                method.apply(_this, args);
                delete _this[timeoutName];
              }, threshold);
            };
          };

          // ----- docReady ----- //

          utils.docReady = function (callback) {
            var readyState = document.readyState;
            if (
              readyState == 'complete' ||
              readyState == 'interactive'
            ) {
              // do async to allow for other scripts to run. metafizzy/flickity#441
              setTimeout(callback);
            } else {
              document.addEventListener('DOMContentLoaded', callback);
            }
          };

          // ----- htmlInit ----- //

          // http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
          utils.toDashed = function (str) {
            return str
              .replace(/(.)([A-Z])/g, function (match, $1, $2) {
                return $1 + '-' + $2;
              })
              .toLowerCase();
          };

          var console = window.console;
          /**
           * allow user to initialize classes via [data-namespace] or .js-namespace class
           * htmlInit( Widget, 'widgetName' )
           * options are parsed from data-namespace-options
           */
          utils.htmlInit = function (WidgetClass, namespace) {
            utils.docReady(function () {
              var dashedNamespace = utils.toDashed(namespace);
              var dataAttr = 'data-' + dashedNamespace;
              var dataAttrElems = document.querySelectorAll(
                '[' + dataAttr + ']'
              );
              var jsDashElems = document.querySelectorAll(
                '.js-' + dashedNamespace
              );
              var elems = utils
                .makeArray(dataAttrElems)
                .concat(utils.makeArray(jsDashElems));
              var dataOptionsAttr = dataAttr + '-options';
              var jQuery = window.jQuery;

              elems.forEach(function (elem) {
                var attr =
                  elem.getAttribute(dataAttr) ||
                  elem.getAttribute(dataOptionsAttr);
                var options;
                try {
                  options = attr && JSON.parse(attr);
                } catch (error) {
                  // log error, do not initialize
                  if (console) {
                    console.error(
                      'Error parsing ' +
                        dataAttr +
                        ' on ' +
                        elem.className +
                        ': ' +
                        error
                    );
                  }
                  return;
                }
                // initialize
                var instance = new WidgetClass(elem, options);
                // make available via $().data('namespace')
                if (jQuery) {
                  jQuery.data(elem, namespace, instance);
                }
              });
            });
          };

          // -----  ----- //

          return utils;
        });

        /***/
      },

    /***/
    /*!*****************************************************!*\
  !*** ./node_modules/flickity-fade/flickity-fade.js ***!
  \*****************************************************/
    './node_modules/flickity-fade/flickity-fade.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__,
          __WEBPACK_AMD_DEFINE_ARRAY__,
          __WEBPACK_AMD_DEFINE_RESULT__;
        /**
         * Flickity fade v1.0.0
         * Fade between Flickity slides
         */

        /* jshint browser: true, undef: true, unused: true */

        (function (window, factory) {
          // universal module definition
          /*globals define, module, require */
          if (true) {
            // AMD
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(
                /*! flickity/js/index */
                './node_modules/flickity/js/index.js'
              ),
              __webpack_require__(
                /*! fizzy-ui-utils/utils */
                './node_modules/fizzy-ui-utils/utils.js'
              ),
            ]),
            (__WEBPACK_AMD_DEFINE_FACTORY__ = factory),
            (__WEBPACK_AMD_DEFINE_RESULT__ =
              typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function'
                ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(
                    exports,
                    __WEBPACK_AMD_DEFINE_ARRAY__
                  )
                : __WEBPACK_AMD_DEFINE_FACTORY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })(this, function factory(Flickity, utils) {
          // ---- Slide ---- //

          var Slide = Flickity.Slide;

          var slideUpdateTarget = Slide.prototype.updateTarget;
          Slide.prototype.updateTarget = function () {
            slideUpdateTarget.apply(this, arguments);
            if (!this.parent.options.fade) {
              return;
            }
            // position cells at selected target
            var slideTargetX = this.target - this.x;
            var firstCellX = this.cells[0].x;
            this.cells.forEach(function (cell) {
              var targetX = cell.x - firstCellX - slideTargetX;
              cell.renderPosition(targetX);
            });
          };

          Slide.prototype.setOpacity = function (alpha) {
            this.cells.forEach(function (cell) {
              cell.element.style.opacity = alpha;
            });
          };

          // ---- Flickity ---- //

          var proto = Flickity.prototype;

          Flickity.createMethods.push('_createFade');

          proto._createFade = function () {
            this.fadeIndex = this.selectedIndex;
            this.prevSelectedIndex = this.selectedIndex;
            this.on('select', this.onSelectFade);
            this.on('dragEnd', this.onDragEndFade);
            this.on('settle', this.onSettleFade);
            this.on('activate', this.onActivateFade);
            this.on('deactivate', this.onDeactivateFade);
          };

          var updateSlides = proto.updateSlides;
          proto.updateSlides = function () {
            updateSlides.apply(this, arguments);
            if (!this.options.fade) {
              return;
            }
            // set initial opacity
            this.slides.forEach(function (slide, i) {
              var alpha = i == this.selectedIndex ? 1 : 0;
              slide.setOpacity(alpha);
            }, this);
          };

          /* ---- events ---- */

          proto.onSelectFade = function () {
            // in case of resize, keep fadeIndex within current count
            this.fadeIndex = Math.min(
              this.prevSelectedIndex,
              this.slides.length - 1
            );
            this.prevSelectedIndex = this.selectedIndex;
          };

          proto.onSettleFade = function () {
            delete this.didDragEnd;
            if (!this.options.fade) {
              return;
            }
            // set full and 0 opacity on selected & faded slides
            this.selectedSlide.setOpacity(1);
            var fadedSlide = this.slides[this.fadeIndex];
            if (fadedSlide && this.fadeIndex != this.selectedIndex) {
              this.slides[this.fadeIndex].setOpacity(0);
            }
          };

          proto.onDragEndFade = function () {
            // set flag
            this.didDragEnd = true;
          };

          proto.onActivateFade = function () {
            if (this.options.fade) {
              this.element.classList.add('is-fade');
            }
          };

          proto.onDeactivateFade = function () {
            if (!this.options.fade) {
              return;
            }
            this.element.classList.remove('is-fade');
            // reset opacity
            this.slides.forEach(function (slide) {
              slide.setOpacity('');
            });
          };

          /* ---- position & fading ---- */

          var positionSlider = proto.positionSlider;
          proto.positionSlider = function () {
            if (!this.options.fade) {
              positionSlider.apply(this, arguments);
              return;
            }

            this.fadeSlides();
            this.dispatchScrollEvent();
          };

          var positionSliderAtSelected =
            proto.positionSliderAtSelected;
          proto.positionSliderAtSelected = function () {
            if (this.options.fade) {
              // position fade slider at origin
              this.setTranslateX(0);
            }
            positionSliderAtSelected.apply(this, arguments);
          };

          proto.fadeSlides = function () {
            if (this.slides.length < 2) {
              return;
            }
            // get slides to fade-in & fade-out
            var indexes = this.getFadeIndexes();
            var fadeSlideA = this.slides[indexes.a];
            var fadeSlideB = this.slides[indexes.b];
            var distance = this.wrapDifference(
              fadeSlideA.target,
              fadeSlideB.target
            );
            var progress = this.wrapDifference(
              fadeSlideA.target,
              -this.x
            );
            progress = progress / distance;

            fadeSlideA.setOpacity(1 - progress);
            fadeSlideB.setOpacity(progress);

            // hide previous slide
            var fadeHideIndex = indexes.a;
            if (this.isDragging) {
              fadeHideIndex = progress > 0.5 ? indexes.a : indexes.b;
            }
            var isNewHideIndex =
              this.fadeHideIndex != undefined &&
              this.fadeHideIndex != fadeHideIndex &&
              this.fadeHideIndex != indexes.a &&
              this.fadeHideIndex != indexes.b;
            if (isNewHideIndex) {
              // new fadeHideSlide set, hide previous
              this.slides[this.fadeHideIndex].setOpacity(0);
            }
            this.fadeHideIndex = fadeHideIndex;
          };

          proto.getFadeIndexes = function () {
            if (!this.isDragging && !this.didDragEnd) {
              return {
                a: this.fadeIndex,
                b: this.selectedIndex,
              };
            }
            if (this.options.wrapAround) {
              return this.getFadeDragWrapIndexes();
            } else {
              return this.getFadeDragLimitIndexes();
            }
          };

          proto.getFadeDragWrapIndexes = function () {
            var distances = this.slides.map(function (slide, i) {
              return this.getSlideDistance(-this.x, i);
            }, this);
            var absDistances = distances.map(function (distance) {
              return Math.abs(distance);
            });
            var minDistance = Math.min.apply(Math, absDistances);
            var closestIndex = absDistances.indexOf(minDistance);
            var distance = distances[closestIndex];
            var len = this.slides.length;

            var delta = distance >= 0 ? 1 : -1;
            return {
              a: closestIndex,
              b: utils.modulo(closestIndex + delta, len),
            };
          };

          proto.getFadeDragLimitIndexes = function () {
            // calculate closest previous slide
            var dragIndex = 0;
            for (var i = 0; i < this.slides.length - 1; i++) {
              var slide = this.slides[i];
              if (-this.x < slide.target) {
                break;
              }
              dragIndex = i;
            }
            return {
              a: dragIndex,
              b: dragIndex + 1,
            };
          };

          proto.wrapDifference = function (a, b) {
            var diff = b - a;

            if (!this.options.wrapAround) {
              return diff;
            }

            var diffPlus = diff + this.slideableWidth;
            var diffMinus = diff - this.slideableWidth;
            if (Math.abs(diffPlus) < Math.abs(diff)) {
              diff = diffPlus;
            }
            if (Math.abs(diffMinus) < Math.abs(diff)) {
              diff = diffMinus;
            }
            return diff;
          };

          // ---- wrapAround ---- //

          var _getWrapShiftCells = proto._getWrapShiftCells;
          proto._getWrapShiftCells = function () {
            if (!this.options.fade) {
              _getWrapShiftCells.apply(this, arguments);
            }
          };

          var shiftWrapCells = proto.shiftWrapCells;
          proto.shiftWrapCells = function () {
            if (!this.options.fade) {
              shiftWrapCells.apply(this, arguments);
            }
          };

          return Flickity;
        });

        /***/
      },

    /***/
    /*!*****************************************************!*\
  !*** ./node_modules/flickity/js/add-remove-cell.js ***!
  \*****************************************************/
    './node_modules/flickity/js/add-remove-cell.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__,
          __WEBPACK_AMD_DEFINE_RESULT__;
        // add, remove cell
        (function (window, factory) {
          // universal module definition
          if (true) {
            // AMD
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(
                /*! ./flickity */
                './node_modules/flickity/js/flickity.js'
              ),
              __webpack_require__(
                /*! fizzy-ui-utils/utils */
                './node_modules/fizzy-ui-utils/utils.js'
              ),
            ]),
            (__WEBPACK_AMD_DEFINE_RESULT__ = function (
              Flickity,
              utils
            ) {
              return factory(window, Flickity, utils);
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })(window, function factory(window, Flickity, utils) {
          'use strict';

          // append cells to a document fragment
          function getCellsFragment(cells) {
            var fragment = document.createDocumentFragment();
            cells.forEach(function (cell) {
              fragment.appendChild(cell.element);
            });
            return fragment;
          }

          // -------------------------- add/remove cell prototype -------------------------- //

          var proto = Flickity.prototype;

          /**
           * Insert, prepend, or append cells
           * @param {[Element, Array, NodeList]} elems - Elements to insert
           * @param {Integer} index - Zero-based number to insert
           */
          proto.insert = function (elems, index) {
            var cells = this._makeCells(elems);
            if (!cells || !cells.length) {
              return;
            }
            var len = this.cells.length;
            // default to append
            index = index === undefined ? len : index;
            // add cells with document fragment
            var fragment = getCellsFragment(cells);
            // append to slider
            var isAppend = index == len;
            if (isAppend) {
              this.slider.appendChild(fragment);
            } else {
              var insertCellElement = this.cells[index].element;
              this.slider.insertBefore(fragment, insertCellElement);
            }
            // add to this.cells
            if (index === 0) {
              // prepend, add to start
              this.cells = cells.concat(this.cells);
            } else if (isAppend) {
              // append, add to end
              this.cells = this.cells.concat(cells);
            } else {
              // insert in this.cells
              var endCells = this.cells.splice(index, len - index);
              this.cells = this.cells.concat(cells).concat(endCells);
            }

            this._sizeCells(cells);
            this.cellChange(index, true);
          };

          proto.append = function (elems) {
            this.insert(elems, this.cells.length);
          };

          proto.prepend = function (elems) {
            this.insert(elems, 0);
          };

          /**
           * Remove cells
           * @param {[Element, Array, NodeList]} elems - ELements to remove
           */
          proto.remove = function (elems) {
            var cells = this.getCells(elems);
            if (!cells || !cells.length) {
              return;
            }

            var minCellIndex = this.cells.length - 1;
            // remove cells from collection & DOM
            cells.forEach(function (cell) {
              cell.remove();
              var index = this.cells.indexOf(cell);
              minCellIndex = Math.min(index, minCellIndex);
              utils.removeFrom(this.cells, cell);
            }, this);

            this.cellChange(minCellIndex, true);
          };

          /**
           * logic to be run after a cell's size changes
           * @param {Element} elem - cell's element
           */
          proto.cellSizeChange = function (elem) {
            var cell = this.getCell(elem);
            if (!cell) {
              return;
            }
            cell.getSize();

            var index = this.cells.indexOf(cell);
            this.cellChange(index);
          };

          /**
           * logic any time a cell is changed: added, removed, or size changed
           * @param {Integer} changedCellIndex - index of the changed cell, optional
           * @param {Boolean} isPositioningSlider - Positions slider after selection
           */
          proto.cellChange = function (
            changedCellIndex,
            isPositioningSlider
          ) {
            var prevSelectedElem = this.selectedElement;
            this._positionCells(changedCellIndex);
            this._getWrapShiftCells();
            this.setGallerySize();
            // update selectedIndex
            // try to maintain position & select previous selected element
            var cell = this.getCell(prevSelectedElem);
            if (cell) {
              this.selectedIndex = this.getCellSlideIndex(cell);
            }
            this.selectedIndex = Math.min(
              this.slides.length - 1,
              this.selectedIndex
            );

            this.emitEvent('cellChange', [changedCellIndex]);
            // position slider
            this.select(this.selectedIndex);
            // do not position slider after lazy load
            if (isPositioningSlider) {
              this.positionSliderAtSelected();
            }
          };

          // -----  ----- //

          return Flickity;
        });

        /***/
      },

    /***/
    /*!*********************************************!*\
  !*** ./node_modules/flickity/js/animate.js ***!
  \*********************************************/
    './node_modules/flickity/js/animate.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__,
          __WEBPACK_AMD_DEFINE_RESULT__;
        // animate
        (function (window, factory) {
          // universal module definition
          if (true) {
            // AMD
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(
                /*! fizzy-ui-utils/utils */
                './node_modules/fizzy-ui-utils/utils.js'
              ),
            ]),
            (__WEBPACK_AMD_DEFINE_RESULT__ = function (utils) {
              return factory(window, utils);
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })(window, function factory(window, utils) {
          'use strict';

          // -------------------------- animate -------------------------- //

          var proto = {};

          proto.startAnimation = function () {
            if (this.isAnimating) {
              return;
            }

            this.isAnimating = true;
            this.restingFrames = 0;
            this.animate();
          };

          proto.animate = function () {
            this.applyDragForce();
            this.applySelectedAttraction();

            var previousX = this.x;

            this.integratePhysics();
            this.positionSlider();
            this.settle(previousX);
            // animate next frame
            if (this.isAnimating) {
              var _this = this;
              requestAnimationFrame(function animateFrame() {
                _this.animate();
              });
            }
          };

          proto.positionSlider = function () {
            var x = this.x;
            // wrap position around
            if (this.options.wrapAround && this.cells.length > 1) {
              x = utils.modulo(x, this.slideableWidth);
              x -= this.slideableWidth;
              this.shiftWrapCells(x);
            }

            this.setTranslateX(x, this.isAnimating);
            this.dispatchScrollEvent();
          };

          proto.setTranslateX = function (x, is3d) {
            x += this.cursorPosition;
            // reverse if right-to-left and using transform
            x = this.options.rightToLeft ? -x : x;
            var translateX = this.getPositionValue(x);
            // use 3D transforms for hardware acceleration on iOS
            // but use 2D when settled, for better font-rendering
            this.slider.style.transform = is3d
              ? 'translate3d(' + translateX + ',0,0)'
              : 'translateX(' + translateX + ')';
          };

          proto.dispatchScrollEvent = function () {
            var firstSlide = this.slides[0];
            if (!firstSlide) {
              return;
            }
            var positionX = -this.x - firstSlide.target;
            var progress = positionX / this.slidesWidth;
            this.dispatchEvent('scroll', null, [progress, positionX]);
          };

          proto.positionSliderAtSelected = function () {
            if (!this.cells.length) {
              return;
            }
            this.x = -this.selectedSlide.target;
            this.velocity = 0;
            // stop wobble
            this.positionSlider();
          };

          proto.getPositionValue = function (position) {
            if (this.options.percentPosition) {
              // percent position, round to 2 digits, like 12.34%
              return (
                Math.round(
                  (position / this.size.innerWidth) * 10000
                ) *
                  0.01 +
                '%'
              );
            } else {
              // pixel positioning
              return Math.round(position) + 'px';
            }
          };

          proto.settle = function (previousX) {
            // keep track of frames where x hasn't moved
            var isResting =
              !this.isPointerDown &&
              Math.round(this.x * 100) == Math.round(previousX * 100);
            if (isResting) {
              this.restingFrames++;
            }
            // stop animating if resting for 3 or more frames
            if (this.restingFrames > 2) {
              this.isAnimating = false;
              delete this.isFreeScrolling;
              // render position with translateX when settled
              this.positionSlider();
              this.dispatchEvent('settle', null, [
                this.selectedIndex,
              ]);
            }
          };

          proto.shiftWrapCells = function (x) {
            // shift before cells
            var beforeGap = this.cursorPosition + x;
            this._shiftCells(this.beforeShiftCells, beforeGap, -1);
            // shift after cells
            var afterGap =
              this.size.innerWidth -
              (x + this.slideableWidth + this.cursorPosition);
            this._shiftCells(this.afterShiftCells, afterGap, 1);
          };

          proto._shiftCells = function (cells, gap, shift) {
            for (var i = 0; i < cells.length; i++) {
              var cell = cells[i];
              var cellShift = gap > 0 ? shift : 0;
              cell.wrapShift(cellShift);
              gap -= cell.size.outerWidth;
            }
          };

          proto._unshiftCells = function (cells) {
            if (!cells || !cells.length) {
              return;
            }
            for (var i = 0; i < cells.length; i++) {
              cells[i].wrapShift(0);
            }
          };

          // -------------------------- physics -------------------------- //

          proto.integratePhysics = function () {
            this.x += this.velocity;
            this.velocity *= this.getFrictionFactor();
          };

          proto.applyForce = function (force) {
            this.velocity += force;
          };

          proto.getFrictionFactor = function () {
            return (
              1 -
              this.options[
                this.isFreeScrolling
                  ? 'freeScrollFriction'
                  : 'friction'
              ]
            );
          };

          proto.getRestingPosition = function () {
            // my thanks to Steven Wittens, who simplified this math greatly
            return (
              this.x + this.velocity / (1 - this.getFrictionFactor())
            );
          };

          proto.applyDragForce = function () {
            if (!this.isDraggable || !this.isPointerDown) {
              return;
            }
            // change the position to drag position by applying force
            var dragVelocity = this.dragX - this.x;
            var dragForce = dragVelocity - this.velocity;
            this.applyForce(dragForce);
          };

          proto.applySelectedAttraction = function () {
            // do not attract if pointer down or no slides
            var dragDown = this.isDraggable && this.isPointerDown;
            if (
              dragDown ||
              this.isFreeScrolling ||
              !this.slides.length
            ) {
              return;
            }
            var distance = this.selectedSlide.target * -1 - this.x;
            var force = distance * this.options.selectedAttraction;
            this.applyForce(force);
          };

          return proto;
        });

        /***/
      },

    /***/
    /*!******************************************!*\
  !*** ./node_modules/flickity/js/cell.js ***!
  \******************************************/
    './node_modules/flickity/js/cell.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__,
          __WEBPACK_AMD_DEFINE_RESULT__;
        // Flickity.Cell
        (function (window, factory) {
          // universal module definition
          if (true) {
            // AMD
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(
                /*! get-size/get-size */
                './node_modules/get-size/get-size.js'
              ),
            ]),
            (__WEBPACK_AMD_DEFINE_RESULT__ = function (getSize) {
              return factory(window, getSize);
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })(window, function factory(window, getSize) {
          'use strict';

          function Cell(elem, parent) {
            this.element = elem;
            this.parent = parent;

            this.create();
          }

          var proto = Cell.prototype;

          proto.create = function () {
            this.element.style.position = 'absolute';
            this.element.setAttribute('aria-hidden', 'true');
            this.x = 0;
            this.shift = 0;
            this.element.style[this.parent.originSide] = 0;
          };

          proto.destroy = function () {
            // reset style
            this.unselect();
            this.element.style.position = '';
            var side = this.parent.originSide;
            this.element.style[side] = '';
            this.element.style.transform = '';
            this.element.removeAttribute('aria-hidden');
          };

          proto.getSize = function () {
            this.size = getSize(this.element);
          };

          proto.setPosition = function (x) {
            this.x = x;
            this.updateTarget();
            this.renderPosition(x);
          };

          // setDefaultTarget v1 method, backwards compatibility, remove in v3
          proto.updateTarget = proto.setDefaultTarget = function () {
            var marginProperty =
              this.parent.originSide == 'left'
                ? 'marginLeft'
                : 'marginRight';
            this.target =
              this.x +
              this.size[marginProperty] +
              this.size.width * this.parent.cellAlign;
          };

          proto.renderPosition = function (x) {
            // render position of cell with in slider
            var sideOffset =
              this.parent.originSide === 'left' ? 1 : -1;

            var adjustedX = this.parent.options.percentPosition
              ? x *
                sideOffset *
                (this.parent.size.innerWidth / this.size.width)
              : x * sideOffset;

            this.element.style.transform =
              'translateX(' +
              this.parent.getPositionValue(adjustedX) +
              ')';
          };

          proto.select = function () {
            this.element.classList.add('is-selected');
            this.element.removeAttribute('aria-hidden');
          };

          proto.unselect = function () {
            this.element.classList.remove('is-selected');
            this.element.setAttribute('aria-hidden', 'true');
          };

          /**
           * @param {Integer} shift - 0, 1, or -1
           */
          proto.wrapShift = function (shift) {
            this.shift = shift;
            this.renderPosition(
              this.x + this.parent.slideableWidth * shift
            );
          };

          proto.remove = function () {
            this.element.parentNode.removeChild(this.element);
          };

          return Cell;
        });

        /***/
      },

    /***/
    /*!******************************************!*\
  !*** ./node_modules/flickity/js/drag.js ***!
  \******************************************/
    './node_modules/flickity/js/drag.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__,
          __WEBPACK_AMD_DEFINE_RESULT__;
        // drag
        (function (window, factory) {
          // universal module definition
          if (true) {
            // AMD
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(
                /*! ./flickity */
                './node_modules/flickity/js/flickity.js'
              ),
              __webpack_require__(
                /*! unidragger/unidragger */
                './node_modules/unidragger/unidragger.js'
              ),
              __webpack_require__(
                /*! fizzy-ui-utils/utils */
                './node_modules/fizzy-ui-utils/utils.js'
              ),
            ]),
            (__WEBPACK_AMD_DEFINE_RESULT__ = function (
              Flickity,
              Unidragger,
              utils
            ) {
              return factory(window, Flickity, Unidragger, utils);
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })(
          window,
          function factory(window, Flickity, Unidragger, utils) {
            'use strict';

            // ----- defaults ----- //

            utils.extend(Flickity.defaults, {
              draggable: '>1',
              dragThreshold: 3,
            });

            // ----- create ----- //

            Flickity.createMethods.push('_createDrag');

            // -------------------------- drag prototype -------------------------- //

            var proto = Flickity.prototype;
            utils.extend(proto, Unidragger.prototype);
            proto._touchActionValue = 'pan-y';

            // --------------------------  -------------------------- //

            proto._createDrag = function () {
              this.on('activate', this.onActivateDrag);
              this.on('uiChange', this._uiChangeDrag);
              this.on('deactivate', this.onDeactivateDrag);
              this.on('cellChange', this.updateDraggable);
              // TODO updateDraggable on resize? if groupCells & slides change
            };

            proto.onActivateDrag = function () {
              this.handles = [this.viewport];
              this.bindHandles();
              this.updateDraggable();
            };

            proto.onDeactivateDrag = function () {
              this.unbindHandles();
              this.element.classList.remove('is-draggable');
            };

            proto.updateDraggable = function () {
              // disable dragging if less than 2 slides. #278
              if (this.options.draggable == '>1') {
                this.isDraggable = this.slides.length > 1;
              } else {
                this.isDraggable = this.options.draggable;
              }
              if (this.isDraggable) {
                this.element.classList.add('is-draggable');
              } else {
                this.element.classList.remove('is-draggable');
              }
            };

            // backwards compatibility
            proto.bindDrag = function () {
              this.options.draggable = true;
              this.updateDraggable();
            };

            proto.unbindDrag = function () {
              this.options.draggable = false;
              this.updateDraggable();
            };

            proto._uiChangeDrag = function () {
              delete this.isFreeScrolling;
            };

            // -------------------------- pointer events -------------------------- //

            proto.pointerDown = function (event, pointer) {
              if (!this.isDraggable) {
                this._pointerDownDefault(event, pointer);
                return;
              }
              var isOkay = this.okayPointerDown(event);
              if (!isOkay) {
                return;
              }

              this._pointerDownPreventDefault(event);
              this.pointerDownFocus(event);
              // blur
              if (document.activeElement != this.element) {
                // do not blur if already focused
                this.pointerDownBlur();
              }

              // stop if it was moving
              this.dragX = this.x;
              this.viewport.classList.add('is-pointer-down');
              // track scrolling
              this.pointerDownScroll = getScrollPosition();
              window.addEventListener('scroll', this);

              this._pointerDownDefault(event, pointer);
            };

            // default pointerDown logic, used for staticClick
            proto._pointerDownDefault = function (event, pointer) {
              // track start event position
              // Safari 9 overrides pageX and pageY. These values needs to be copied. #779
              this.pointerDownPointer = {
                pageX: pointer.pageX,
                pageY: pointer.pageY,
              };
              // bind move and end events
              this._bindPostStartEvents(event);
              this.dispatchEvent('pointerDown', event, [pointer]);
            };

            var focusNodes = {
              INPUT: true,
              TEXTAREA: true,
              SELECT: true,
            };

            proto.pointerDownFocus = function (event) {
              var isFocusNode = focusNodes[event.target.nodeName];
              if (!isFocusNode) {
                this.focus();
              }
            };

            proto._pointerDownPreventDefault = function (event) {
              var isTouchStart = event.type == 'touchstart';
              var isTouchPointer = event.pointerType == 'touch';
              var isFocusNode = focusNodes[event.target.nodeName];
              if (!isTouchStart && !isTouchPointer && !isFocusNode) {
                event.preventDefault();
              }
            };

            // ----- move ----- //

            proto.hasDragStarted = function (moveVector) {
              return (
                Math.abs(moveVector.x) > this.options.dragThreshold
              );
            };

            // ----- up ----- //

            proto.pointerUp = function (event, pointer) {
              delete this.isTouchScrolling;
              this.viewport.classList.remove('is-pointer-down');
              this.dispatchEvent('pointerUp', event, [pointer]);
              this._dragPointerUp(event, pointer);
            };

            proto.pointerDone = function () {
              window.removeEventListener('scroll', this);
              delete this.pointerDownScroll;
            };

            // -------------------------- dragging -------------------------- //

            proto.dragStart = function (event, pointer) {
              if (!this.isDraggable) {
                return;
              }
              this.dragStartPosition = this.x;
              this.startAnimation();
              window.removeEventListener('scroll', this);
              this.dispatchEvent('dragStart', event, [pointer]);
            };

            proto.pointerMove = function (event, pointer) {
              var moveVector = this._dragPointerMove(event, pointer);
              this.dispatchEvent('pointerMove', event, [
                pointer,
                moveVector,
              ]);
              this._dragMove(event, pointer, moveVector);
            };

            proto.dragMove = function (event, pointer, moveVector) {
              if (!this.isDraggable) {
                return;
              }
              event.preventDefault();

              this.previousDragX = this.dragX;
              // reverse if right-to-left
              var direction = this.options.rightToLeft ? -1 : 1;
              if (this.options.wrapAround) {
                // wrap around move. #589
                moveVector.x %= this.slideableWidth;
              }
              var dragX =
                this.dragStartPosition + moveVector.x * direction;

              if (!this.options.wrapAround && this.slides.length) {
                // slow drag
                var originBound = Math.max(
                  -this.slides[0].target,
                  this.dragStartPosition
                );
                dragX =
                  dragX > originBound
                    ? (dragX + originBound) * 0.5
                    : dragX;
                var endBound = Math.min(
                  -this.getLastSlide().target,
                  this.dragStartPosition
                );
                dragX =
                  dragX < endBound ? (dragX + endBound) * 0.5 : dragX;
              }

              this.dragX = dragX;

              this.dragMoveTime = new Date();
              this.dispatchEvent('dragMove', event, [
                pointer,
                moveVector,
              ]);
            };

            proto.dragEnd = function (event, pointer) {
              if (!this.isDraggable) {
                return;
              }
              if (this.options.freeScroll) {
                this.isFreeScrolling = true;
              }
              // set selectedIndex based on where flick will end up
              var index = this.dragEndRestingSelect();

              if (
                this.options.freeScroll &&
                !this.options.wrapAround
              ) {
                // if free-scroll & not wrap around
                // do not free-scroll if going outside of bounding slides
                // so bounding slides can attract slider, and keep it in bounds
                var restingX = this.getRestingPosition();
                this.isFreeScrolling =
                  -restingX > this.slides[0].target &&
                  -restingX < this.getLastSlide().target;
              } else if (
                !this.options.freeScroll &&
                index == this.selectedIndex
              ) {
                // boost selection if selected index has not changed
                index += this.dragEndBoostSelect();
              }
              delete this.previousDragX;
              // apply selection
              // TODO refactor this, selecting here feels weird
              // HACK, set flag so dragging stays in correct direction
              this.isDragSelect = this.options.wrapAround;
              this.select(index);
              delete this.isDragSelect;
              this.dispatchEvent('dragEnd', event, [pointer]);
            };

            proto.dragEndRestingSelect = function () {
              var restingX = this.getRestingPosition();
              // how far away from selected slide
              var distance = Math.abs(
                this.getSlideDistance(-restingX, this.selectedIndex)
              );
              // get closet resting going up and going down
              var positiveResting = this._getClosestResting(
                restingX,
                distance,
                1
              );
              var negativeResting = this._getClosestResting(
                restingX,
                distance,
                -1
              );
              // use closer resting for wrap-around
              var index =
                positiveResting.distance < negativeResting.distance
                  ? positiveResting.index
                  : negativeResting.index;
              return index;
            };

            /**
             * given resting X and distance to selected cell
             * get the distance and index of the closest cell
             * @param {Number} restingX - estimated post-flick resting position
             * @param {Number} distance - distance to selected cell
             * @param {Integer} increment - +1 or -1, going up or down
             * @returns {Object} - { distance: {Number}, index: {Integer} }
             */
            proto._getClosestResting = function (
              restingX,
              distance,
              increment
            ) {
              var index = this.selectedIndex;
              var minDistance = Infinity;
              var condition =
                this.options.contain && !this.options.wrapAround // if contain, keep going if distance is equal to minDistance
                  ? function (dist, minDist) {
                      return dist <= minDist;
                    }
                  : function (dist, minDist) {
                      return dist < minDist;
                    };
              while (condition(distance, minDistance)) {
                // measure distance to next cell
                index += increment;
                minDistance = distance;
                distance = this.getSlideDistance(-restingX, index);
                if (distance === null) {
                  break;
                }
                distance = Math.abs(distance);
              }
              return {
                distance: minDistance,
                // selected was previous index
                index: index - increment,
              };
            };

            /**
             * measure distance between x and a slide target
             * @param {Number} x - horizontal position
             * @param {Integer} index - slide index
             * @returns {Number} - slide distance
             */
            proto.getSlideDistance = function (x, index) {
              var len = this.slides.length;
              // wrap around if at least 2 slides
              var isWrapAround = this.options.wrapAround && len > 1;
              var slideIndex = isWrapAround
                ? utils.modulo(index, len)
                : index;
              var slide = this.slides[slideIndex];
              if (!slide) {
                return null;
              }
              // add distance for wrap-around slides
              var wrap = isWrapAround
                ? this.slideableWidth * Math.floor(index / len)
                : 0;
              return x - (slide.target + wrap);
            };

            proto.dragEndBoostSelect = function () {
              // do not boost if no previousDragX or dragMoveTime
              if (
                this.previousDragX === undefined ||
                !this.dragMoveTime || // or if drag was held for 100 ms
                new Date() - this.dragMoveTime > 100
              ) {
                return 0;
              }

              var distance = this.getSlideDistance(
                -this.dragX,
                this.selectedIndex
              );
              var delta = this.previousDragX - this.dragX;
              if (distance > 0 && delta > 0) {
                // boost to next if moving towards the right, and positive velocity
                return 1;
              } else if (distance < 0 && delta < 0) {
                // boost to previous if moving towards the left, and negative velocity
                return -1;
              }
              return 0;
            };

            // ----- staticClick ----- //

            proto.staticClick = function (event, pointer) {
              // get clickedCell, if cell was clicked
              var clickedCell = this.getParentCell(event.target);
              var cellElem = clickedCell && clickedCell.element;
              var cellIndex =
                clickedCell && this.cells.indexOf(clickedCell);
              this.dispatchEvent('staticClick', event, [
                pointer,
                cellElem,
                cellIndex,
              ]);
            };

            // ----- scroll ----- //

            proto.onscroll = function () {
              var scroll = getScrollPosition();
              var scrollMoveX = this.pointerDownScroll.x - scroll.x;
              var scrollMoveY = this.pointerDownScroll.y - scroll.y;
              // cancel click/tap if scroll is too much
              if (
                Math.abs(scrollMoveX) > 3 ||
                Math.abs(scrollMoveY) > 3
              ) {
                this._pointerDone();
              }
            };

            // ----- utils ----- //

            function getScrollPosition() {
              return {
                x: window.pageXOffset,
                y: window.pageYOffset,
              };
            }

            // -----  ----- //

            return Flickity;
          }
        );

        /***/
      },

    /***/
    /*!**********************************************!*\
  !*** ./node_modules/flickity/js/flickity.js ***!
  \**********************************************/
    './node_modules/flickity/js/flickity.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__,
          __WEBPACK_AMD_DEFINE_RESULT__;
        // Flickity main
        /* eslint-disable max-params */
        (function (window, factory) {
          // universal module definition
          if (true) {
            // AMD
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(
                /*! ev-emitter/ev-emitter */
                './node_modules/ev-emitter/ev-emitter.js'
              ),
              __webpack_require__(
                /*! get-size/get-size */
                './node_modules/get-size/get-size.js'
              ),
              __webpack_require__(
                /*! fizzy-ui-utils/utils */
                './node_modules/fizzy-ui-utils/utils.js'
              ),
              __webpack_require__(
                /*! ./cell */
                './node_modules/flickity/js/cell.js'
              ),
              __webpack_require__(
                /*! ./slide */
                './node_modules/flickity/js/slide.js'
              ),
              __webpack_require__(
                /*! ./animate */
                './node_modules/flickity/js/animate.js'
              ),
            ]),
            (__WEBPACK_AMD_DEFINE_RESULT__ = function (
              EvEmitter,
              getSize,
              utils,
              Cell,
              Slide,
              animatePrototype
            ) {
              return factory(
                window,
                EvEmitter,
                getSize,
                utils,
                Cell,
                Slide,
                animatePrototype
              );
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
            var _Flickity;
          }
        })(
          window,
          function factory(
            window,
            EvEmitter,
            getSize,
            utils,
            Cell,
            Slide,
            animatePrototype
          ) {
            /* eslint-enable max-params */
            'use strict';

            // vars
            var jQuery = window.jQuery;
            var getComputedStyle = window.getComputedStyle;
            var console = window.console;

            function moveElements(elems, toElem) {
              elems = utils.makeArray(elems);
              while (elems.length) {
                toElem.appendChild(elems.shift());
              }
            }

            // -------------------------- Flickity -------------------------- //

            // globally unique identifiers
            var GUID = 0;
            // internal store of all Flickity intances
            var instances = {};

            function Flickity(element, options) {
              var queryElement = utils.getQueryElement(element);
              if (!queryElement) {
                if (console) {
                  console.error(
                    'Bad element for Flickity: ' +
                      (queryElement || element)
                  );
                }
                return;
              }
              this.element = queryElement;
              // do not initialize twice on same element
              if (this.element.flickityGUID) {
                var instance = instances[this.element.flickityGUID];
                if (instance) instance.option(options);
                return instance;
              }

              // add jQuery
              if (jQuery) {
                this.$element = jQuery(this.element);
              }
              // options
              this.options = utils.extend(
                {},
                this.constructor.defaults
              );
              this.option(options);

              // kick things off
              this._create();
            }

            Flickity.defaults = {
              accessibility: true,
              // adaptiveHeight: false,
              cellAlign: 'center',
              // cellSelector: undefined,
              // contain: false,
              freeScrollFriction: 0.075,
              // friction when free-scrolling
              friction: 0.28,
              // friction when selecting
              namespaceJQueryEvents: true,
              // initialIndex: 0,
              percentPosition: true,
              resize: true,
              selectedAttraction: 0.025,
              setGallerySize: true,
              // watchCSS: false,
              // wrapAround: false
            };

            // hash of methods triggered on _create()
            Flickity.createMethods = [];

            var proto = Flickity.prototype;
            // inherit EventEmitter
            utils.extend(proto, EvEmitter.prototype);

            proto._create = function () {
              // add id for Flickity.data
              var id = (this.guid = ++GUID);
              this.element.flickityGUID = id;
              // expando
              instances[id] = this;
              // associate via id
              // initial properties
              this.selectedIndex = 0;
              // how many frames slider has been in same position
              this.restingFrames = 0;
              // initial physics properties
              this.x = 0;
              this.velocity = 0;
              this.originSide = this.options.rightToLeft
                ? 'right'
                : 'left';
              // create viewport & slider
              this.viewport = document.createElement('div');
              this.viewport.className = 'flickity-viewport';
              this._createSlider();

              if (this.options.resize || this.options.watchCSS) {
                window.addEventListener('resize', this);
              }

              // add listeners from on option
              for (var eventName in this.options.on) {
                var listener = this.options.on[eventName];
                this.on(eventName, listener);
              }

              Flickity.createMethods.forEach(function (method) {
                this[method]();
              }, this);

              if (this.options.watchCSS) {
                this.watchCSS();
              } else {
                this.activate();
              }
            };

            /**
             * set options
             * @param {Object} opts - options to extend
             */
            proto.option = function (opts) {
              utils.extend(this.options, opts);
            };

            proto.activate = function () {
              if (this.isActive) {
                return;
              }
              this.isActive = true;
              this.element.classList.add('flickity-enabled');
              if (this.options.rightToLeft) {
                this.element.classList.add('flickity-rtl');
              }

              this.getSize();
              // move initial cell elements so they can be loaded as cells
              var cellElems = this._filterFindCellElements(
                this.element.children
              );
              moveElements(cellElems, this.slider);
              this.viewport.appendChild(this.slider);
              this.element.appendChild(this.viewport);
              // get cells from children
              this.reloadCells();

              if (this.options.accessibility) {
                // allow element to focusable
                this.element.tabIndex = 0;
                // listen for key presses
                this.element.addEventListener('keydown', this);
              }

              this.emitEvent('activate');
              this.selectInitialIndex();
              // flag for initial activation, for using initialIndex
              this.isInitActivated = true;
              // ready event. #493
              this.dispatchEvent('ready');
            };

            // slider positions the cells
            proto._createSlider = function () {
              // slider element does all the positioning
              var slider = document.createElement('div');
              slider.className = 'flickity-slider';
              slider.style[this.originSide] = 0;
              this.slider = slider;
            };

            proto._filterFindCellElements = function (elems) {
              return utils.filterFindElements(
                elems,
                this.options.cellSelector
              );
            };

            // goes through all children
            proto.reloadCells = function () {
              // collection of item elements
              this.cells = this._makeCells(this.slider.children);
              this.positionCells();
              this._getWrapShiftCells();
              this.setGallerySize();
            };

            /**
             * turn elements into Flickity.Cells
             * @param {[Array, NodeList, HTMLElement]} elems - elements to make into cells
             * @returns {Array} items - collection of new Flickity Cells
             */
            proto._makeCells = function (elems) {
              var cellElems = this._filterFindCellElements(elems);

              // create new Flickity for collection
              var cells = cellElems.map(function (cellElem) {
                return new Cell(cellElem, this);
              }, this);

              return cells;
            };

            proto.getLastCell = function () {
              return this.cells[this.cells.length - 1];
            };

            proto.getLastSlide = function () {
              return this.slides[this.slides.length - 1];
            };

            // positions all cells
            proto.positionCells = function () {
              // size all cells
              this._sizeCells(this.cells);
              // position all cells
              this._positionCells(0);
            };

            /**
             * position certain cells
             * @param {Integer} index - which cell to start with
             */
            proto._positionCells = function (index) {
              index = index || 0;
              // also measure maxCellHeight
              // start 0 if positioning all cells
              this.maxCellHeight = index
                ? this.maxCellHeight || 0
                : 0;
              var cellX = 0;
              // get cellX
              if (index > 0) {
                var startCell = this.cells[index - 1];
                cellX = startCell.x + startCell.size.outerWidth;
              }
              var len = this.cells.length;
              for (var i = index; i < len; i++) {
                var cell = this.cells[i];
                cell.setPosition(cellX);
                cellX += cell.size.outerWidth;
                this.maxCellHeight = Math.max(
                  cell.size.outerHeight,
                  this.maxCellHeight
                );
              }
              // keep track of cellX for wrap-around
              this.slideableWidth = cellX;
              // slides
              this.updateSlides();
              // contain slides target
              this._containSlides();
              // update slidesWidth
              this.slidesWidth = len
                ? this.getLastSlide().target - this.slides[0].target
                : 0;
            };

            /**
             * cell.getSize() on multiple cells
             * @param {Array} cells - cells to size
             */
            proto._sizeCells = function (cells) {
              cells.forEach(function (cell) {
                cell.getSize();
              });
            };

            // --------------------------  -------------------------- //

            proto.updateSlides = function () {
              this.slides = [];
              if (!this.cells.length) {
                return;
              }

              var slide = new Slide(this);
              this.slides.push(slide);
              var isOriginLeft = this.originSide == 'left';
              var nextMargin = isOriginLeft
                ? 'marginRight'
                : 'marginLeft';

              var canCellFit = this._getCanCellFit();

              this.cells.forEach(function (cell, i) {
                // just add cell if first cell in slide
                if (!slide.cells.length) {
                  slide.addCell(cell);
                  return;
                }

                var slideWidth =
                  slide.outerWidth -
                  slide.firstMargin +
                  (cell.size.outerWidth - cell.size[nextMargin]);

                if (canCellFit.call(this, i, slideWidth)) {
                  slide.addCell(cell);
                } else {
                  // doesn't fit, new slide
                  slide.updateTarget();

                  slide = new Slide(this);
                  this.slides.push(slide);
                  slide.addCell(cell);
                }
              }, this);
              // last slide
              slide.updateTarget();
              // update .selectedSlide
              this.updateSelectedSlide();
            };

            proto._getCanCellFit = function () {
              var groupCells = this.options.groupCells;
              if (!groupCells) {
                return function () {
                  return false;
                };
              } else if (typeof groupCells == 'number') {
                // group by number. 3 -> [0,1,2], [3,4,5], ...
                var number = parseInt(groupCells, 10);
                return function (i) {
                  return i % number !== 0;
                };
              }
              // default, group by width of slide
              // parse '75%
              var percentMatch =
                typeof groupCells == 'string' &&
                groupCells.match(/^(\d+)%$/);
              var percent = percentMatch
                ? parseInt(percentMatch[1], 10) / 100
                : 1;
              return function (i, slideWidth) {
                /* eslint-disable-next-line no-invalid-this */
                return (
                  slideWidth <= (this.size.innerWidth + 1) * percent
                );
              };
            };

            // alias _init for jQuery plugin .flickity()
            proto._init = proto.reposition = function () {
              this.positionCells();
              this.positionSliderAtSelected();
            };

            proto.getSize = function () {
              this.size = getSize(this.element);
              this.setCellAlign();
              this.cursorPosition =
                this.size.innerWidth * this.cellAlign;
            };

            var cellAlignShorthands = {
              // cell align, then based on origin side
              center: {
                left: 0.5,
                right: 0.5,
              },
              left: {
                left: 0,
                right: 1,
              },
              right: {
                right: 0,
                left: 1,
              },
            };

            proto.setCellAlign = function () {
              var shorthand =
                cellAlignShorthands[this.options.cellAlign];
              this.cellAlign = shorthand
                ? shorthand[this.originSide]
                : this.options.cellAlign;
            };

            proto.setGallerySize = function () {
              if (this.options.setGallerySize) {
                var height =
                  this.options.adaptiveHeight && this.selectedSlide
                    ? this.selectedSlide.height
                    : this.maxCellHeight;
                this.viewport.style.height = height + 'px';
              }
            };

            proto._getWrapShiftCells = function () {
              // only for wrap-around
              if (!this.options.wrapAround) {
                return;
              }
              // unshift previous cells
              this._unshiftCells(this.beforeShiftCells);
              this._unshiftCells(this.afterShiftCells);
              // get before cells
              // initial gap
              var gapX = this.cursorPosition;
              var cellIndex = this.cells.length - 1;
              this.beforeShiftCells = this._getGapCells(
                gapX,
                cellIndex,
                -1
              );
              // get after cells
              // ending gap between last cell and end of gallery viewport
              gapX = this.size.innerWidth - this.cursorPosition;
              // start cloning at first cell, working forwards
              this.afterShiftCells = this._getGapCells(gapX, 0, 1);
            };

            proto._getGapCells = function (
              gapX,
              cellIndex,
              increment
            ) {
              // keep adding cells until the cover the initial gap
              var cells = [];
              while (gapX > 0) {
                var cell = this.cells[cellIndex];
                if (!cell) {
                  break;
                }
                cells.push(cell);
                cellIndex += increment;
                gapX -= cell.size.outerWidth;
              }
              return cells;
            };

            // ----- contain ----- //

            // contain cell targets so no excess sliding
            proto._containSlides = function () {
              if (
                !this.options.contain ||
                this.options.wrapAround ||
                !this.cells.length
              ) {
                return;
              }
              var isRightToLeft = this.options.rightToLeft;
              var beginMargin = isRightToLeft
                ? 'marginRight'
                : 'marginLeft';
              var endMargin = isRightToLeft
                ? 'marginLeft'
                : 'marginRight';
              var contentWidth =
                this.slideableWidth -
                this.getLastCell().size[endMargin];
              // content is less than gallery size
              var isContentSmaller =
                contentWidth < this.size.innerWidth;
              // bounds
              var beginBound =
                this.cursorPosition + this.cells[0].size[beginMargin];
              var endBound =
                contentWidth -
                this.size.innerWidth * (1 - this.cellAlign);
              // contain each cell target
              this.slides.forEach(function (slide) {
                if (isContentSmaller) {
                  // all cells fit inside gallery
                  slide.target = contentWidth * this.cellAlign;
                } else {
                  // contain to bounds
                  slide.target = Math.max(slide.target, beginBound);
                  slide.target = Math.min(slide.target, endBound);
                }
              }, this);
            };

            // -----  ----- //

            /**
             * emits events via eventEmitter and jQuery events
             * @param {String} type - name of event
             * @param {Event} event - original event
             * @param {Array} args - extra arguments
             */
            proto.dispatchEvent = function (type, event, args) {
              var emitArgs = event ? [event].concat(args) : args;
              this.emitEvent(type, emitArgs);

              if (jQuery && this.$element) {
                // default trigger with type if no event
                type += this.options.namespaceJQueryEvents
                  ? '.flickity'
                  : '';
                var $event = type;
                if (event) {
                  // create jQuery event
                  var jQEvent = new jQuery.Event(event);
                  jQEvent.type = type;
                  $event = jQEvent;
                }
                this.$element.trigger($event, args);
              }
            };

            // -------------------------- select -------------------------- //

            /**
             * @param {Integer} index - index of the slide
             * @param {Boolean} isWrap - will wrap-around to last/first if at the end
             * @param {Boolean} isInstant - will immediately set position at selected cell
             */
            proto.select = function (index, isWrap, isInstant) {
              if (!this.isActive) {
                return;
              }
              index = parseInt(index, 10);
              this._wrapSelect(index);

              if (this.options.wrapAround || isWrap) {
                index = utils.modulo(index, this.slides.length);
              }
              // bail if invalid index
              if (!this.slides[index]) {
                return;
              }
              var prevIndex = this.selectedIndex;
              this.selectedIndex = index;
              this.updateSelectedSlide();
              if (isInstant) {
                this.positionSliderAtSelected();
              } else {
                this.startAnimation();
              }
              if (this.options.adaptiveHeight) {
                this.setGallerySize();
              }
              // events
              this.dispatchEvent('select', null, [index]);
              // change event if new index
              if (index != prevIndex) {
                this.dispatchEvent('change', null, [index]);
              }
              // old v1 event name, remove in v3
              this.dispatchEvent('cellSelect');
            };

            // wraps position for wrapAround, to move to closest slide. #113
            proto._wrapSelect = function (index) {
              var len = this.slides.length;
              var isWrapping = this.options.wrapAround && len > 1;
              if (!isWrapping) {
                return index;
              }
              var wrapIndex = utils.modulo(index, len);
              // go to shortest
              var delta = Math.abs(wrapIndex - this.selectedIndex);
              var backWrapDelta = Math.abs(
                wrapIndex + len - this.selectedIndex
              );
              var forewardWrapDelta = Math.abs(
                wrapIndex - len - this.selectedIndex
              );
              if (!this.isDragSelect && backWrapDelta < delta) {
                index += len;
              } else if (
                !this.isDragSelect &&
                forewardWrapDelta < delta
              ) {
                index -= len;
              }
              // wrap position so slider is within normal area
              if (index < 0) {
                this.x -= this.slideableWidth;
              } else if (index >= len) {
                this.x += this.slideableWidth;
              }
            };

            proto.previous = function (isWrap, isInstant) {
              this.select(this.selectedIndex - 1, isWrap, isInstant);
            };

            proto.next = function (isWrap, isInstant) {
              this.select(this.selectedIndex + 1, isWrap, isInstant);
            };

            proto.updateSelectedSlide = function () {
              var slide = this.slides[this.selectedIndex];
              // selectedIndex could be outside of slides, if triggered before resize()
              if (!slide) {
                return;
              }
              // unselect previous selected slide
              this.unselectSelectedSlide();
              // update new selected slide
              this.selectedSlide = slide;
              slide.select();
              this.selectedCells = slide.cells;
              this.selectedElements = slide.getCellElements();
              // HACK: selectedCell & selectedElement is first cell in slide, backwards compatibility
              // Remove in v3?
              this.selectedCell = slide.cells[0];
              this.selectedElement = this.selectedElements[0];
            };

            proto.unselectSelectedSlide = function () {
              if (this.selectedSlide) {
                this.selectedSlide.unselect();
              }
            };

            proto.selectInitialIndex = function () {
              var initialIndex = this.options.initialIndex;
              // already activated, select previous selectedIndex
              if (this.isInitActivated) {
                this.select(this.selectedIndex, false, true);
                return;
              }
              // select with selector string
              if (initialIndex && typeof initialIndex == 'string') {
                var cell = this.queryCell(initialIndex);
                if (cell) {
                  this.selectCell(initialIndex, false, true);
                  return;
                }
              }

              var index = 0;
              // select with number
              if (initialIndex && this.slides[initialIndex]) {
                index = initialIndex;
              }
              // select instantly
              this.select(index, false, true);
            };

            /**
             * select slide from number or cell element
             * @param {[Element, Number]} value - zero-based index or element to select
             * @param {Boolean} isWrap - enables wrapping around for extra index
             * @param {Boolean} isInstant - disables slide animation
             */
            proto.selectCell = function (value, isWrap, isInstant) {
              // get cell
              var cell = this.queryCell(value);
              if (!cell) {
                return;
              }

              var index = this.getCellSlideIndex(cell);
              this.select(index, isWrap, isInstant);
            };

            proto.getCellSlideIndex = function (cell) {
              // get index of slides that has cell
              for (var i = 0; i < this.slides.length; i++) {
                var slide = this.slides[i];
                var index = slide.cells.indexOf(cell);
                if (index != -1) {
                  return i;
                }
              }
            };

            // -------------------------- get cells -------------------------- //

            /**
             * get Flickity.Cell, given an Element
             * @param {Element} elem - matching cell element
             * @returns {Flickity.Cell} cell - matching cell
             */
            proto.getCell = function (elem) {
              // loop through cells to get the one that matches
              for (var i = 0; i < this.cells.length; i++) {
                var cell = this.cells[i];
                if (cell.element == elem) {
                  return cell;
                }
              }
            };

            /**
             * get collection of Flickity.Cells, given Elements
             * @param {[Element, Array, NodeList]} elems - multiple elements
             * @returns {Array} cells - Flickity.Cells
             */
            proto.getCells = function (elems) {
              elems = utils.makeArray(elems);
              var cells = [];
              elems.forEach(function (elem) {
                var cell = this.getCell(elem);
                if (cell) {
                  cells.push(cell);
                }
              }, this);
              return cells;
            };

            /**
             * get cell elements
             * @returns {Array} cellElems
             */
            proto.getCellElements = function () {
              return this.cells.map(function (cell) {
                return cell.element;
              });
            };

            /**
             * get parent cell from an element
             * @param {Element} elem - child element
             * @returns {Flickit.Cell} cell - parent cell
             */
            proto.getParentCell = function (elem) {
              // first check if elem is cell
              var cell = this.getCell(elem);
              if (cell) {
                return cell;
              }
              // try to get parent cell elem
              elem = utils.getParent(elem, '.flickity-slider > *');
              return this.getCell(elem);
            };

            /**
             * get cells adjacent to a slide
             * @param {Integer} adjCount - number of adjacent slides
             * @param {Integer} index - index of slide to start
             * @returns {Array} cells - array of Flickity.Cells
             */
            proto.getAdjacentCellElements = function (
              adjCount,
              index
            ) {
              if (!adjCount) {
                return this.selectedSlide.getCellElements();
              }
              index =
                index === undefined ? this.selectedIndex : index;

              var len = this.slides.length;
              if (1 + adjCount * 2 >= len) {
                return this.getCellElements();
              }

              var cellElems = [];
              for (
                var i = index - adjCount;
                i <= index + adjCount;
                i++
              ) {
                var slideIndex = this.options.wrapAround
                  ? utils.modulo(i, len)
                  : i;
                var slide = this.slides[slideIndex];
                if (slide) {
                  cellElems = cellElems.concat(
                    slide.getCellElements()
                  );
                }
              }
              return cellElems;
            };

            /**
             * select slide from number or cell element
             * @param {[Element, String, Number]} selector - element, selector string, or index
             * @returns {Flickity.Cell} - matching cell
             */
            proto.queryCell = function (selector) {
              if (typeof selector == 'number') {
                // use number as index
                return this.cells[selector];
              }
              if (typeof selector == 'string') {
                // do not select invalid selectors from hash: #123, #/. #791
                if (selector.match(/^[#.]?[\d/]/)) {
                  return;
                }
                // use string as selector, get element
                selector = this.element.querySelector(selector);
              }
              // get cell from element
              return this.getCell(selector);
            };

            // -------------------------- events -------------------------- //

            proto.uiChange = function () {
              this.emitEvent('uiChange');
            };

            // keep focus on element when child UI elements are clicked
            proto.childUIPointerDown = function (event) {
              // HACK iOS does not allow touch events to bubble up?!
              if (event.type != 'touchstart') {
                event.preventDefault();
              }
              this.focus();
            };

            // ----- resize ----- //

            proto.onresize = function () {
              this.watchCSS();
              this.resize();
            };

            utils.debounceMethod(Flickity, 'onresize', 150);

            proto.resize = function () {
              // #1177 disable resize behavior when animating or dragging for iOS 15
              if (
                !this.isActive ||
                this.isAnimating ||
                this.isDragging
              ) {
                return;
              }
              this.getSize();
              // wrap values
              if (this.options.wrapAround) {
                this.x = utils.modulo(this.x, this.slideableWidth);
              }
              this.positionCells();
              this._getWrapShiftCells();
              this.setGallerySize();
              this.emitEvent('resize');
              // update selected index for group slides, instant
              // TODO: position can be lost between groups of various numbers
              var selectedElement =
                this.selectedElements && this.selectedElements[0];
              this.selectCell(selectedElement, false, true);
            };

            // watches the :after property, activates/deactivates
            proto.watchCSS = function () {
              var watchOption = this.options.watchCSS;
              if (!watchOption) {
                return;
              }

              var afterContent = getComputedStyle(
                this.element,
                ':after'
              ).content;
              // activate if :after { content: 'flickity' }
              if (afterContent.indexOf('flickity') != -1) {
                this.activate();
              } else {
                this.deactivate();
              }
            };

            // ----- keydown ----- //

            // go previous/next if left/right keys pressed
            proto.onkeydown = function (event) {
              // only work if element is in focus
              var isNotFocused =
                document.activeElement &&
                document.activeElement != this.element;
              if (!this.options.accessibility || isNotFocused) {
                return;
              }

              var handler = Flickity.keyboardHandlers[event.keyCode];
              if (handler) {
                handler.call(this);
              }
            };

            Flickity.keyboardHandlers = {
              // left arrow
              37: function () {
                var leftMethod = this.options.rightToLeft
                  ? 'next'
                  : 'previous';
                this.uiChange();
                this[leftMethod]();
              },
              // right arrow
              39: function () {
                var rightMethod = this.options.rightToLeft
                  ? 'previous'
                  : 'next';
                this.uiChange();
                this[rightMethod]();
              },
            };

            // ----- focus ----- //

            proto.focus = function () {
              // TODO remove scrollTo once focus options gets more support
              // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus ...
              //    #Browser_compatibility
              var prevScrollY = window.pageYOffset;
              this.element.focus({
                preventScroll: true,
              });
              // hack to fix scroll jump after focus, #76
              if (window.pageYOffset != prevScrollY) {
                window.scrollTo(window.pageXOffset, prevScrollY);
              }
            };

            // -------------------------- destroy -------------------------- //

            // deactivate all Flickity functionality, but keep stuff available
            proto.deactivate = function () {
              if (!this.isActive) {
                return;
              }
              this.element.classList.remove('flickity-enabled');
              this.element.classList.remove('flickity-rtl');
              this.unselectSelectedSlide();
              // destroy cells
              this.cells.forEach(function (cell) {
                cell.destroy();
              });
              this.element.removeChild(this.viewport);
              // move child elements back into element
              moveElements(this.slider.children, this.element);
              if (this.options.accessibility) {
                this.element.removeAttribute('tabIndex');
                this.element.removeEventListener('keydown', this);
              }
              // set flags
              this.isActive = false;
              this.emitEvent('deactivate');
            };

            proto.destroy = function () {
              this.deactivate();
              window.removeEventListener('resize', this);
              this.allOff();
              this.emitEvent('destroy');
              if (jQuery && this.$element) {
                jQuery.removeData(this.element, 'flickity');
              }
              delete this.element.flickityGUID;
              delete instances[this.guid];
            };

            // -------------------------- prototype -------------------------- //

            utils.extend(proto, animatePrototype);

            // -------------------------- extras -------------------------- //

            /**
             * get Flickity instance from element
             * @param {[Element, String]} elem - element or selector string
             * @returns {Flickity} - Flickity instance
             */
            Flickity.data = function (elem) {
              elem = utils.getQueryElement(elem);
              var id = elem && elem.flickityGUID;
              return id && instances[id];
            };

            utils.htmlInit(Flickity, 'flickity');

            if (jQuery && jQuery.bridget) {
              jQuery.bridget('flickity', Flickity);
            }

            // set internal jQuery, for Webpack + jQuery v3, #478
            Flickity.setJQuery = function (jq) {
              jQuery = jq;
            };

            Flickity.Cell = Cell;
            Flickity.Slide = Slide;

            return Flickity;
          }
        );

        /***/
      },

    /***/
    /*!*******************************************!*\
  !*** ./node_modules/flickity/js/index.js ***!
  \*******************************************/
    './node_modules/flickity/js/index.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__,
          __WEBPACK_AMD_DEFINE_ARRAY__,
          __WEBPACK_AMD_DEFINE_RESULT__;
        /*!
         * Flickity v2.3.0
         * Touch, responsive, flickable carousels
         *
         * Licensed GPLv3 for open source use
         * or Flickity Commercial License for commercial use
         *
         * https://flickity.metafizzy.co
         * Copyright 2015-2021 Metafizzy
         */

        (function (window, factory) {
          // universal module definition
          if (true) {
            // AMD
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(
                /*! ./flickity */
                './node_modules/flickity/js/flickity.js'
              ),
              __webpack_require__(
                /*! ./drag */
                './node_modules/flickity/js/drag.js'
              ),
              __webpack_require__(
                /*! ./prev-next-button */
                './node_modules/flickity/js/prev-next-button.js'
              ),
              __webpack_require__(
                /*! ./page-dots */
                './node_modules/flickity/js/page-dots.js'
              ),
              __webpack_require__(
                /*! ./player */
                './node_modules/flickity/js/player.js'
              ),
              __webpack_require__(
                /*! ./add-remove-cell */
                './node_modules/flickity/js/add-remove-cell.js'
              ),
              __webpack_require__(
                /*! ./lazyload */
                './node_modules/flickity/js/lazyload.js'
              ),
            ]),
            (__WEBPACK_AMD_DEFINE_FACTORY__ = factory),
            (__WEBPACK_AMD_DEFINE_RESULT__ =
              typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function'
                ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(
                    exports,
                    __WEBPACK_AMD_DEFINE_ARRAY__
                  )
                : __WEBPACK_AMD_DEFINE_FACTORY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })(window, function factory(Flickity) {
          return Flickity;
        });

        /***/
      },

    /***/
    /*!**********************************************!*\
  !*** ./node_modules/flickity/js/lazyload.js ***!
  \**********************************************/
    './node_modules/flickity/js/lazyload.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__,
          __WEBPACK_AMD_DEFINE_RESULT__;
        // lazyload
        (function (window, factory) {
          // universal module definition
          if (true) {
            // AMD
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(
                /*! ./flickity */
                './node_modules/flickity/js/flickity.js'
              ),
              __webpack_require__(
                /*! fizzy-ui-utils/utils */
                './node_modules/fizzy-ui-utils/utils.js'
              ),
            ]),
            (__WEBPACK_AMD_DEFINE_RESULT__ = function (
              Flickity,
              utils
            ) {
              return factory(window, Flickity, utils);
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })(window, function factory(window, Flickity, utils) {
          'use strict';

          Flickity.createMethods.push('_createLazyload');
          var proto = Flickity.prototype;

          proto._createLazyload = function () {
            this.on('select', this.lazyLoad);
          };

          proto.lazyLoad = function () {
            var lazyLoad = this.options.lazyLoad;
            if (!lazyLoad) {
              return;
            }
            // get adjacent cells, use lazyLoad option for adjacent count
            var adjCount = typeof lazyLoad == 'number' ? lazyLoad : 0;
            var cellElems = this.getAdjacentCellElements(adjCount);
            // get lazy images in those cells
            var lazyImages = [];
            cellElems.forEach(function (cellElem) {
              var lazyCellImages = getCellLazyImages(cellElem);
              lazyImages = lazyImages.concat(lazyCellImages);
            });
            // load lazy images
            lazyImages.forEach(function (img) {
              new LazyLoader(img, this);
            }, this);
          };

          function getCellLazyImages(cellElem) {
            // check if cell element is lazy image
            if (cellElem.nodeName == 'IMG') {
              var lazyloadAttr = cellElem.getAttribute(
                'data-flickity-lazyload'
              );
              var srcAttr = cellElem.getAttribute(
                'data-flickity-lazyload-src'
              );
              var srcsetAttr = cellElem.getAttribute(
                'data-flickity-lazyload-srcset'
              );
              if (lazyloadAttr || srcAttr || srcsetAttr) {
                return [cellElem];
              }
            }
            // select lazy images in cell
            var lazySelector =
              'img[data-flickity-lazyload], ' +
              'img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]';
            var imgs = cellElem.querySelectorAll(lazySelector);
            return utils.makeArray(imgs);
          }

          // -------------------------- LazyLoader -------------------------- //

          /**
           * class to handle loading images
           * @param {Image} img - Image element
           * @param {Flickity} flickity - Flickity instance
           */
          function LazyLoader(img, flickity) {
            this.img = img;
            this.flickity = flickity;
            this.load();
          }

          LazyLoader.prototype.handleEvent = utils.handleEvent;

          LazyLoader.prototype.load = function () {
            this.img.addEventListener('load', this);
            this.img.addEventListener('error', this);
            // get src & srcset
            var src =
              this.img.getAttribute('data-flickity-lazyload') ||
              this.img.getAttribute('data-flickity-lazyload-src');
            var srcset = this.img.getAttribute(
              'data-flickity-lazyload-srcset'
            );
            // set src & serset
            this.img.src = src;
            if (srcset) {
              this.img.setAttribute('srcset', srcset);
            }
            // remove attr
            this.img.removeAttribute('data-flickity-lazyload');
            this.img.removeAttribute('data-flickity-lazyload-src');
            this.img.removeAttribute('data-flickity-lazyload-srcset');
          };

          LazyLoader.prototype.onload = function (event) {
            this.complete(event, 'flickity-lazyloaded');
          };

          LazyLoader.prototype.onerror = function (event) {
            this.complete(event, 'flickity-lazyerror');
          };

          LazyLoader.prototype.complete = function (
            event,
            className
          ) {
            // unbind events
            this.img.removeEventListener('load', this);
            this.img.removeEventListener('error', this);

            var cell = this.flickity.getParentCell(this.img);
            var cellElem = cell && cell.element;
            this.flickity.cellSizeChange(cellElem);

            this.img.classList.add(className);
            this.flickity.dispatchEvent('lazyLoad', event, cellElem);
          };

          // -----  ----- //

          Flickity.LazyLoader = LazyLoader;

          return Flickity;
        });

        /***/
      },

    /***/
    /*!***********************************************!*\
  !*** ./node_modules/flickity/js/page-dots.js ***!
  \***********************************************/
    './node_modules/flickity/js/page-dots.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__,
          __WEBPACK_AMD_DEFINE_RESULT__;
        // page dots
        (function (window, factory) {
          // universal module definition
          if (true) {
            // AMD
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(
                /*! ./flickity */
                './node_modules/flickity/js/flickity.js'
              ),
              __webpack_require__(
                /*! unipointer/unipointer */
                './node_modules/unipointer/unipointer.js'
              ),
              __webpack_require__(
                /*! fizzy-ui-utils/utils */
                './node_modules/fizzy-ui-utils/utils.js'
              ),
            ]),
            (__WEBPACK_AMD_DEFINE_RESULT__ = function (
              Flickity,
              Unipointer,
              utils
            ) {
              return factory(window, Flickity, Unipointer, utils);
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })(
          window,
          function factory(window, Flickity, Unipointer, utils) {
            // -------------------------- PageDots -------------------------- //

            'use strict';

            function PageDots(parent) {
              this.parent = parent;
              this._create();
            }

            PageDots.prototype = Object.create(Unipointer.prototype);

            PageDots.prototype._create = function () {
              // create holder element
              this.holder = document.createElement('ol');
              this.holder.className = 'flickity-page-dots';
              // create dots, array of elements
              this.dots = [];
              // events
              this.handleClick = this.onClick.bind(this);
              this.on(
                'pointerDown',
                this.parent.childUIPointerDown.bind(this.parent)
              );
            };

            PageDots.prototype.activate = function () {
              this.setDots();
              this.holder.addEventListener('click', this.handleClick);
              this.bindStartEvent(this.holder);
              // add to DOM
              this.parent.element.appendChild(this.holder);
            };

            PageDots.prototype.deactivate = function () {
              this.holder.removeEventListener(
                'click',
                this.handleClick
              );
              this.unbindStartEvent(this.holder);
              // remove from DOM
              this.parent.element.removeChild(this.holder);
            };

            PageDots.prototype.setDots = function () {
              // get difference between number of slides and number of dots
              var delta =
                this.parent.slides.length - this.dots.length;
              if (delta > 0) {
                this.addDots(delta);
              } else if (delta < 0) {
                this.removeDots(-delta);
              }
            };

            PageDots.prototype.addDots = function (count) {
              var fragment = document.createDocumentFragment();
              var newDots = [];
              var length = this.dots.length;
              var max = length + count;

              for (var i = length; i < max; i++) {
                var dot = document.createElement('li');
                dot.className = 'dot';
                dot.setAttribute('aria-label', 'Page dot ' + (i + 1));
                fragment.appendChild(dot);
                newDots.push(dot);
              }

              this.holder.appendChild(fragment);
              this.dots = this.dots.concat(newDots);
            };

            PageDots.prototype.removeDots = function (count) {
              // remove from this.dots collection
              var removeDots = this.dots.splice(
                this.dots.length - count,
                count
              );
              // remove from DOM
              removeDots.forEach(function (dot) {
                this.holder.removeChild(dot);
              }, this);
            };

            PageDots.prototype.updateSelected = function () {
              // remove selected class on previous
              if (this.selectedDot) {
                this.selectedDot.className = 'dot';
                this.selectedDot.removeAttribute('aria-current');
              }
              // don't proceed if no dots
              if (!this.dots.length) {
                return;
              }
              this.selectedDot = this.dots[this.parent.selectedIndex];
              this.selectedDot.className = 'dot is-selected';
              this.selectedDot.setAttribute('aria-current', 'step');
            };

            PageDots.prototype.onTap = // old method name, backwards-compatible
              PageDots.prototype.onClick = function (event) {
                var target = event.target;
                // only care about dot clicks
                if (target.nodeName != 'LI') {
                  return;
                }

                this.parent.uiChange();
                var index = this.dots.indexOf(target);
                this.parent.select(index);
              };

            PageDots.prototype.destroy = function () {
              this.deactivate();
              this.allOff();
            };

            Flickity.PageDots = PageDots;

            // -------------------------- Flickity -------------------------- //

            utils.extend(Flickity.defaults, {
              pageDots: true,
            });

            Flickity.createMethods.push('_createPageDots');

            var proto = Flickity.prototype;

            proto._createPageDots = function () {
              if (!this.options.pageDots) {
                return;
              }
              this.pageDots = new PageDots(this);
              // events
              this.on('activate', this.activatePageDots);
              this.on('select', this.updateSelectedPageDots);
              this.on('cellChange', this.updatePageDots);
              this.on('resize', this.updatePageDots);
              this.on('deactivate', this.deactivatePageDots);
            };

            proto.activatePageDots = function () {
              this.pageDots.activate();
            };

            proto.updateSelectedPageDots = function () {
              this.pageDots.updateSelected();
            };

            proto.updatePageDots = function () {
              this.pageDots.setDots();
            };

            proto.deactivatePageDots = function () {
              this.pageDots.deactivate();
            };

            // -----  ----- //

            Flickity.PageDots = PageDots;

            return Flickity;
          }
        );

        /***/
      },

    /***/
    /*!********************************************!*\
  !*** ./node_modules/flickity/js/player.js ***!
  \********************************************/
    './node_modules/flickity/js/player.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__,
          __WEBPACK_AMD_DEFINE_RESULT__;
        // player & autoPlay
        (function (window, factory) {
          // universal module definition
          if (true) {
            // AMD
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(
                /*! ev-emitter/ev-emitter */
                './node_modules/ev-emitter/ev-emitter.js'
              ),
              __webpack_require__(
                /*! fizzy-ui-utils/utils */
                './node_modules/fizzy-ui-utils/utils.js'
              ),
              __webpack_require__(
                /*! ./flickity */
                './node_modules/flickity/js/flickity.js'
              ),
            ]),
            (__WEBPACK_AMD_DEFINE_RESULT__ = function (
              EvEmitter,
              utils,
              Flickity
            ) {
              return factory(EvEmitter, utils, Flickity);
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })(window, function factory(EvEmitter, utils, Flickity) {
          'use strict';

          // -------------------------- Player -------------------------- //

          function Player(parent) {
            this.parent = parent;
            this.state = 'stopped';
            // visibility change event handler
            this.onVisibilityChange =
              this.visibilityChange.bind(this);
            this.onVisibilityPlay = this.visibilityPlay.bind(this);
          }

          Player.prototype = Object.create(EvEmitter.prototype);

          // start play
          Player.prototype.play = function () {
            if (this.state == 'playing') {
              return;
            }
            // do not play if page is hidden, start playing when page is visible
            var isPageHidden = document.hidden;
            if (isPageHidden) {
              document.addEventListener(
                'visibilitychange',
                this.onVisibilityPlay
              );
              return;
            }

            this.state = 'playing';
            // listen to visibility change
            document.addEventListener(
              'visibilitychange',
              this.onVisibilityChange
            );
            // start ticking
            this.tick();
          };

          Player.prototype.tick = function () {
            // do not tick if not playing
            if (this.state != 'playing') {
              return;
            }

            var time = this.parent.options.autoPlay;
            // default to 3 seconds
            time = typeof time == 'number' ? time : 3000;
            var _this = this;
            // HACK: reset ticks if stopped and started within interval
            this.clear();
            this.timeout = setTimeout(function () {
              _this.parent.next(true);
              _this.tick();
            }, time);
          };

          Player.prototype.stop = function () {
            this.state = 'stopped';
            this.clear();
            // remove visibility change event
            document.removeEventListener(
              'visibilitychange',
              this.onVisibilityChange
            );
          };

          Player.prototype.clear = function () {
            clearTimeout(this.timeout);
          };

          Player.prototype.pause = function () {
            if (this.state == 'playing') {
              this.state = 'paused';
              this.clear();
            }
          };

          Player.prototype.unpause = function () {
            // re-start play if paused
            if (this.state == 'paused') {
              this.play();
            }
          };

          // pause if page visibility is hidden, unpause if visible
          Player.prototype.visibilityChange = function () {
            var isPageHidden = document.hidden;
            this[isPageHidden ? 'pause' : 'unpause']();
          };

          Player.prototype.visibilityPlay = function () {
            this.play();
            document.removeEventListener(
              'visibilitychange',
              this.onVisibilityPlay
            );
          };

          // -------------------------- Flickity -------------------------- //

          utils.extend(Flickity.defaults, {
            pauseAutoPlayOnHover: true,
          });

          Flickity.createMethods.push('_createPlayer');
          var proto = Flickity.prototype;

          proto._createPlayer = function () {
            this.player = new Player(this);

            this.on('activate', this.activatePlayer);
            this.on('uiChange', this.stopPlayer);
            this.on('pointerDown', this.stopPlayer);
            this.on('deactivate', this.deactivatePlayer);
          };

          proto.activatePlayer = function () {
            if (!this.options.autoPlay) {
              return;
            }
            this.player.play();
            this.element.addEventListener('mouseenter', this);
          };

          // Player API, don't hate the ... thanks I know where the door is

          proto.playPlayer = function () {
            this.player.play();
          };

          proto.stopPlayer = function () {
            this.player.stop();
          };

          proto.pausePlayer = function () {
            this.player.pause();
          };

          proto.unpausePlayer = function () {
            this.player.unpause();
          };

          proto.deactivatePlayer = function () {
            this.player.stop();
            this.element.removeEventListener('mouseenter', this);
          };

          // ----- mouseenter/leave ----- //

          // pause auto-play on hover
          proto.onmouseenter = function () {
            if (!this.options.pauseAutoPlayOnHover) {
              return;
            }
            this.player.pause();
            this.element.addEventListener('mouseleave', this);
          };

          // resume auto-play on hover off
          proto.onmouseleave = function () {
            this.player.unpause();
            this.element.removeEventListener('mouseleave', this);
          };

          // -----  ----- //

          Flickity.Player = Player;

          return Flickity;
        });

        /***/
      },

    /***/
    /*!******************************************************!*\
  !*** ./node_modules/flickity/js/prev-next-button.js ***!
  \******************************************************/
    './node_modules/flickity/js/prev-next-button.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__,
          __WEBPACK_AMD_DEFINE_RESULT__;
        // prev/next buttons
        (function (window, factory) {
          // universal module definition
          if (true) {
            // AMD
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(
                /*! ./flickity */
                './node_modules/flickity/js/flickity.js'
              ),
              __webpack_require__(
                /*! unipointer/unipointer */
                './node_modules/unipointer/unipointer.js'
              ),
              __webpack_require__(
                /*! fizzy-ui-utils/utils */
                './node_modules/fizzy-ui-utils/utils.js'
              ),
            ]),
            (__WEBPACK_AMD_DEFINE_RESULT__ = function (
              Flickity,
              Unipointer,
              utils
            ) {
              return factory(window, Flickity, Unipointer, utils);
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })(
          window,
          function factory(window, Flickity, Unipointer, utils) {
            'use strict';

            var svgURI = 'http://www.w3.org/2000/svg';

            // -------------------------- PrevNextButton -------------------------- //

            function PrevNextButton(direction, parent) {
              this.direction = direction;
              this.parent = parent;
              this._create();
            }

            PrevNextButton.prototype = Object.create(
              Unipointer.prototype
            );

            PrevNextButton.prototype._create = function () {
              // properties
              this.isEnabled = true;
              this.isPrevious = this.direction == -1;
              var leftDirection = this.parent.options.rightToLeft
                ? 1
                : -1;
              this.isLeft = this.direction == leftDirection;

              var element = (this.element =
                document.createElement('button'));
              element.className =
                'flickity-button flickity-prev-next-button';
              element.className += this.isPrevious
                ? ' previous'
                : ' next';
              // prevent button from submitting form http://stackoverflow.com/a/10836076/182183
              element.setAttribute('type', 'button');
              // init as disabled
              this.disable();

              element.setAttribute(
                'aria-label',
                this.isPrevious ? 'Previous' : 'Next'
              );

              // create arrow
              var svg = this.createSVG();
              element.appendChild(svg);
              // events
              this.parent.on('select', this.update.bind(this));
              this.on(
                'pointerDown',
                this.parent.childUIPointerDown.bind(this.parent)
              );
            };

            PrevNextButton.prototype.activate = function () {
              this.bindStartEvent(this.element);
              this.element.addEventListener('click', this);
              // add to DOM
              this.parent.element.appendChild(this.element);
            };

            PrevNextButton.prototype.deactivate = function () {
              // remove from DOM
              this.parent.element.removeChild(this.element);
              // click events
              this.unbindStartEvent(this.element);
              this.element.removeEventListener('click', this);
            };

            PrevNextButton.prototype.createSVG = function () {
              var svg = document.createElementNS(svgURI, 'svg');
              svg.setAttribute('class', 'flickity-button-icon');
              svg.setAttribute('viewBox', '0 0 100 100');
              var path = document.createElementNS(svgURI, 'path');
              var pathMovements = getArrowMovements(
                this.parent.options.arrowShape
              );
              path.setAttribute('d', pathMovements);
              path.setAttribute('class', 'arrow');
              // rotate arrow
              if (!this.isLeft) {
                path.setAttribute(
                  'transform',
                  'translate(100, 100) rotate(180) '
                );
              }
              svg.appendChild(path);
              return svg;
            };

            // get SVG path movmement
            function getArrowMovements(shape) {
              // use shape as movement if string
              if (typeof shape == 'string') {
                return shape;
              }
              // create movement string
              return (
                'M ' +
                shape.x0 +
                ',50' +
                ' L ' +
                shape.x1 +
                ',' +
                (shape.y1 + 50) +
                ' L ' +
                shape.x2 +
                ',' +
                (shape.y2 + 50) +
                ' L ' +
                shape.x3 +
                ',50 ' +
                ' L ' +
                shape.x2 +
                ',' +
                (50 - shape.y2) +
                ' L ' +
                shape.x1 +
                ',' +
                (50 - shape.y1) +
                ' Z'
              );
            }

            PrevNextButton.prototype.handleEvent = utils.handleEvent;

            PrevNextButton.prototype.onclick = function () {
              if (!this.isEnabled) {
                return;
              }
              this.parent.uiChange();
              var method = this.isPrevious ? 'previous' : 'next';
              this.parent[method]();
            };

            // -----  ----- //

            PrevNextButton.prototype.enable = function () {
              if (this.isEnabled) {
                return;
              }
              this.element.disabled = false;
              this.isEnabled = true;
            };

            PrevNextButton.prototype.disable = function () {
              if (!this.isEnabled) {
                return;
              }
              this.element.disabled = true;
              this.isEnabled = false;
            };

            PrevNextButton.prototype.update = function () {
              // index of first or last slide, if previous or next
              var slides = this.parent.slides;
              // enable is wrapAround and at least 2 slides
              if (
                this.parent.options.wrapAround &&
                slides.length > 1
              ) {
                this.enable();
                return;
              }
              var lastIndex = slides.length ? slides.length - 1 : 0;
              var boundIndex = this.isPrevious ? 0 : lastIndex;
              var method =
                this.parent.selectedIndex == boundIndex
                  ? 'disable'
                  : 'enable';
              this[method]();
            };

            PrevNextButton.prototype.destroy = function () {
              this.deactivate();
              this.allOff();
            };

            // -------------------------- Flickity prototype -------------------------- //

            utils.extend(Flickity.defaults, {
              prevNextButtons: true,
              arrowShape: {
                x0: 10,
                x1: 60,
                y1: 50,
                x2: 70,
                y2: 40,
                x3: 30,
              },
            });

            Flickity.createMethods.push('_createPrevNextButtons');
            var proto = Flickity.prototype;

            proto._createPrevNextButtons = function () {
              if (!this.options.prevNextButtons) {
                return;
              }

              this.prevButton = new PrevNextButton(-1, this);
              this.nextButton = new PrevNextButton(1, this);

              this.on('activate', this.activatePrevNextButtons);
            };

            proto.activatePrevNextButtons = function () {
              this.prevButton.activate();
              this.nextButton.activate();
              this.on('deactivate', this.deactivatePrevNextButtons);
            };

            proto.deactivatePrevNextButtons = function () {
              this.prevButton.deactivate();
              this.nextButton.deactivate();
              this.off('deactivate', this.deactivatePrevNextButtons);
            };

            // --------------------------  -------------------------- //

            Flickity.PrevNextButton = PrevNextButton;

            return Flickity;
          }
        );

        /***/
      },

    /***/
    /*!*******************************************!*\
  !*** ./node_modules/flickity/js/slide.js ***!
  \*******************************************/
    './node_modules/flickity/js/slide.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__,
          __WEBPACK_AMD_DEFINE_RESULT__;
        // slide
        (function (window, factory) {
          // universal module definition
          if (true) {
            // AMD
            !((__WEBPACK_AMD_DEFINE_FACTORY__ = factory),
            (__WEBPACK_AMD_DEFINE_RESULT__ =
              typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function'
                ? __WEBPACK_AMD_DEFINE_FACTORY__.call(
                    exports,
                    __webpack_require__,
                    exports,
                    module
                  )
                : __WEBPACK_AMD_DEFINE_FACTORY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })(window, function factory() {
          'use strict';

          function Slide(parent) {
            this.parent = parent;
            this.isOriginLeft = parent.originSide == 'left';
            this.cells = [];
            this.outerWidth = 0;
            this.height = 0;
          }

          var proto = Slide.prototype;

          proto.addCell = function (cell) {
            this.cells.push(cell);
            this.outerWidth += cell.size.outerWidth;
            this.height = Math.max(
              cell.size.outerHeight,
              this.height
            );
            // first cell stuff
            if (this.cells.length == 1) {
              this.x = cell.x;
              // x comes from first cell
              var beginMargin = this.isOriginLeft
                ? 'marginLeft'
                : 'marginRight';
              this.firstMargin = cell.size[beginMargin];
            }
          };

          proto.updateTarget = function () {
            var endMargin = this.isOriginLeft
              ? 'marginRight'
              : 'marginLeft';
            var lastCell = this.getLastCell();
            var lastMargin = lastCell ? lastCell.size[endMargin] : 0;
            var slideWidth =
              this.outerWidth - (this.firstMargin + lastMargin);
            this.target =
              this.x +
              this.firstMargin +
              slideWidth * this.parent.cellAlign;
          };

          proto.getLastCell = function () {
            return this.cells[this.cells.length - 1];
          };

          proto.select = function () {
            this.cells.forEach(function (cell) {
              cell.select();
            });
          };

          proto.unselect = function () {
            this.cells.forEach(function (cell) {
              cell.unselect();
            });
          };

          proto.getCellElements = function () {
            return this.cells.map(function (cell) {
              return cell.element;
            });
          };

          return Slide;
        });

        /***/
      },

    /***/
    /*!*******************************************!*\
  !*** ./node_modules/get-size/get-size.js ***!
  \*******************************************/
    './node_modules/get-size/get-size.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__,
          __WEBPACK_AMD_DEFINE_RESULT__;
        /*!
         * getSize v2.0.3
         * measure size of elements
         * MIT license
         */

        /* jshint browser: true, strict: true, undef: true, unused: true */
        /* globals console: false */

        (function (window, factory) {
          /* jshint strict: false */
          /* globals define, module */
          if (true) {
            // AMD
            !((__WEBPACK_AMD_DEFINE_FACTORY__ = factory),
            (__WEBPACK_AMD_DEFINE_RESULT__ =
              typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function'
                ? __WEBPACK_AMD_DEFINE_FACTORY__.call(
                    exports,
                    __webpack_require__,
                    exports,
                    module
                  )
                : __WEBPACK_AMD_DEFINE_FACTORY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })(window, function factory() {
          'use strict';

          // -------------------------- helpers -------------------------- //

          // get a number from a string, not a percentage
          function getStyleSize(value) {
            var num = parseFloat(value);
            // not a percent like '100%', and a number
            var isValid = value.indexOf('%') == -1 && !isNaN(num);
            return isValid && num;
          }

          function noop() {}

          var logError =
            typeof console == 'undefined'
              ? noop
              : function (message) {
                  console.error(message);
                };
          // -------------------------- measurements -------------------------- //

          var measurements = [
            'paddingLeft',
            'paddingRight',
            'paddingTop',
            'paddingBottom',
            'marginLeft',
            'marginRight',
            'marginTop',
            'marginBottom',
            'borderLeftWidth',
            'borderRightWidth',
            'borderTopWidth',
            'borderBottomWidth',
          ];

          var measurementsLength = measurements.length;

          function getZeroSize() {
            var size = {
              width: 0,
              height: 0,
              innerWidth: 0,
              innerHeight: 0,
              outerWidth: 0,
              outerHeight: 0,
            };
            for (var i = 0; i < measurementsLength; i++) {
              var measurement = measurements[i];
              size[measurement] = 0;
            }
            return size;
          }

          // -------------------------- getStyle -------------------------- //

          /**
           * getStyle, get style of element, check for Firefox bug
           * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
           */
          function getStyle(elem) {
            var style = getComputedStyle(elem);
            if (!style) {
              logError(
                'Style returned ' +
                  style +
                  '. Are you running this code in a hidden iframe on Firefox? ' +
                  'See https://bit.ly/getsizebug1'
              );
            }
            return style;
          }

          // -------------------------- setup -------------------------- //

          var isSetup = false;

          var isBoxSizeOuter;

          /**
           * setup
           * check isBoxSizerOuter
           * do on first getSize() rather than on page load for Firefox bug
           */
          function setup() {
            // setup once
            if (isSetup) {
              return;
            }
            isSetup = true;

            // -------------------------- box sizing -------------------------- //

            /**
             * Chrome & Safari measure the outer-width on style.width on border-box elems
             * IE11 & Firefox<29 measures the inner-width
             */
            var div = document.createElement('div');
            div.style.width = '200px';
            div.style.padding = '1px 2px 3px 4px';
            div.style.borderStyle = 'solid';
            div.style.borderWidth = '1px 2px 3px 4px';
            div.style.boxSizing = 'border-box';

            var body = document.body || document.documentElement;
            body.appendChild(div);
            var style = getStyle(div);
            // round value for browser zoom. desandro/masonry#928
            isBoxSizeOuter =
              Math.round(getStyleSize(style.width)) == 200;
            getSize.isBoxSizeOuter = isBoxSizeOuter;

            body.removeChild(div);
          }

          // -------------------------- getSize -------------------------- //

          function getSize(elem) {
            setup();

            // use querySeletor if elem is string
            if (typeof elem == 'string') {
              elem = document.querySelector(elem);
            }

            // do not proceed on non-objects
            if (!elem || typeof elem != 'object' || !elem.nodeType) {
              return;
            }

            var style = getStyle(elem);

            // if hidden, everything is 0
            if (style.display == 'none') {
              return getZeroSize();
            }

            var size = {};
            size.width = elem.offsetWidth;
            size.height = elem.offsetHeight;

            var isBorderBox = (size.isBorderBox =
              style.boxSizing == 'border-box');

            // get all measurements
            for (var i = 0; i < measurementsLength; i++) {
              var measurement = measurements[i];
              var value = style[measurement];
              var num = parseFloat(value);
              // any 'auto', 'medium' value will be 0
              size[measurement] = !isNaN(num) ? num : 0;
            }

            var paddingWidth = size.paddingLeft + size.paddingRight;
            var paddingHeight = size.paddingTop + size.paddingBottom;
            var marginWidth = size.marginLeft + size.marginRight;
            var marginHeight = size.marginTop + size.marginBottom;
            var borderWidth =
              size.borderLeftWidth + size.borderRightWidth;
            var borderHeight =
              size.borderTopWidth + size.borderBottomWidth;

            var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

            // overwrite width and height if we can get it from style
            var styleWidth = getStyleSize(style.width);
            if (styleWidth !== false) {
              size.width =
                styleWidth + // add padding and border unless it's already including it
                (isBorderBoxSizeOuter
                  ? 0
                  : paddingWidth + borderWidth);
            }

            var styleHeight = getStyleSize(style.height);
            if (styleHeight !== false) {
              size.height =
                styleHeight + // add padding and border unless it's already including it
                (isBorderBoxSizeOuter
                  ? 0
                  : paddingHeight + borderHeight);
            }

            size.innerWidth =
              size.width - (paddingWidth + borderWidth);
            size.innerHeight =
              size.height - (paddingHeight + borderHeight);

            size.outerWidth = size.width + marginWidth;
            size.outerHeight = size.height + marginHeight;

            return size;
          }

          return getSize;
        });

        /***/
      },

    /***/
    /*!***************************************************!*\
  !*** ./node_modules/imagesloaded/imagesloaded.js ***!
  \***************************************************/
    './node_modules/imagesloaded/imagesloaded.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__,
          __WEBPACK_AMD_DEFINE_RESULT__;
        /*!
         * imagesLoaded v4.1.4
         * JavaScript is all like "You images are done yet or what?"
         * MIT License
         */

        (function (window, factory) {
          'use strict';
          // universal module definition

          /*global define: false, module: false, require: false */

          if (true) {
            // AMD
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(
                /*! ev-emitter/ev-emitter */
                './node_modules/ev-emitter/ev-emitter.js'
              ),
            ]),
            (__WEBPACK_AMD_DEFINE_RESULT__ = function (EvEmitter) {
              return factory(window, EvEmitter);
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })(
          typeof window !== 'undefined' ? window : this,
          // --------------------------  factory -------------------------- //

          function factory(window, EvEmitter) {
            'use strict';

            var $ = window.jQuery;
            var console = window.console;

            // -------------------------- helpers -------------------------- //

            // extend objects
            function extend(a, b) {
              for (var prop in b) {
                a[prop] = b[prop];
              }
              return a;
            }

            var arraySlice = Array.prototype.slice;

            // turn element or nodeList into an array
            function makeArray(obj) {
              if (Array.isArray(obj)) {
                // use object if already an array
                return obj;
              }

              var isArrayLike =
                typeof obj == 'object' &&
                typeof obj.length == 'number';
              if (isArrayLike) {
                // convert nodeList to array
                return arraySlice.call(obj);
              }

              // array of single index
              return [obj];
            }

            // -------------------------- imagesLoaded -------------------------- //

            /**
             * @param {Array, Element, NodeList, String} elem
             * @param {Object or Function} options - if function, use as callback
             * @param {Function} onAlways - callback function
             */
            function ImagesLoaded(elem, options, onAlways) {
              // coerce ImagesLoaded() without new, to be new ImagesLoaded()
              if (!(this instanceof ImagesLoaded)) {
                return new ImagesLoaded(elem, options, onAlways);
              }
              // use elem as selector string
              var queryElem = elem;
              if (typeof elem == 'string') {
                queryElem = document.querySelectorAll(elem);
              }
              // bail if bad element
              if (!queryElem) {
                console.error(
                  'Bad element for imagesLoaded ' +
                    (queryElem || elem)
                );
                return;
              }

              this.elements = makeArray(queryElem);
              this.options = extend({}, this.options);
              // shift arguments if no options set
              if (typeof options == 'function') {
                onAlways = options;
              } else {
                extend(this.options, options);
              }

              if (onAlways) {
                this.on('always', onAlways);
              }

              this.getImages();

              if ($) {
                // add jQuery Deferred object
                this.jqDeferred = new $.Deferred();
              }

              // HACK check async to allow time to bind listeners
              setTimeout(this.check.bind(this));
            }

            ImagesLoaded.prototype = Object.create(
              EvEmitter.prototype
            );

            ImagesLoaded.prototype.options = {};

            ImagesLoaded.prototype.getImages = function () {
              this.images = [];

              // filter & find items if we have an item selector
              this.elements.forEach(this.addElementImages, this);
            };

            /**
             * @param {Node} element
             */
            ImagesLoaded.prototype.addElementImages = function (
              elem
            ) {
              // filter siblings
              if (elem.nodeName == 'IMG') {
                this.addImage(elem);
              }
              // get background image on element
              if (this.options.background === true) {
                this.addElementBackgroundImages(elem);
              }

              // find children
              // no non-element nodes, #143
              var nodeType = elem.nodeType;
              if (!nodeType || !elementNodeTypes[nodeType]) {
                return;
              }
              var childImgs = elem.querySelectorAll('img');
              // concat childElems to filterFound array
              for (var i = 0; i < childImgs.length; i++) {
                var img = childImgs[i];
                this.addImage(img);
              }

              // get child background images
              if (typeof this.options.background == 'string') {
                var children = elem.querySelectorAll(
                  this.options.background
                );
                for (i = 0; i < children.length; i++) {
                  var child = children[i];
                  this.addElementBackgroundImages(child);
                }
              }
            };

            var elementNodeTypes = {
              1: true,
              9: true,
              11: true,
            };

            ImagesLoaded.prototype.addElementBackgroundImages =
              function (elem) {
                var style = getComputedStyle(elem);
                if (!style) {
                  // Firefox returns null if in a hidden iframe https://bugzil.la/548397
                  return;
                }
                // get url inside url("...")
                var reURL = /url\((['"])?(.*?)\1\)/gi;
                var matches = reURL.exec(style.backgroundImage);
                while (matches !== null) {
                  var url = matches && matches[2];
                  if (url) {
                    this.addBackground(url, elem);
                  }
                  matches = reURL.exec(style.backgroundImage);
                }
              };

            /**
             * @param {Image} img
             */
            ImagesLoaded.prototype.addImage = function (img) {
              var loadingImage = new LoadingImage(img);
              this.images.push(loadingImage);
            };

            ImagesLoaded.prototype.addBackground = function (
              url,
              elem
            ) {
              var background = new Background(url, elem);
              this.images.push(background);
            };

            ImagesLoaded.prototype.check = function () {
              var _this = this;
              this.progressedCount = 0;
              this.hasAnyBroken = false;
              // complete if no images
              if (!this.images.length) {
                this.complete();
                return;
              }

              function onProgress(image, elem, message) {
                // HACK - Chrome triggers event before object properties have changed. #83
                setTimeout(function () {
                  _this.progress(image, elem, message);
                });
              }

              this.images.forEach(function (loadingImage) {
                loadingImage.once('progress', onProgress);
                loadingImage.check();
              });
            };

            ImagesLoaded.prototype.progress = function (
              image,
              elem,
              message
            ) {
              this.progressedCount++;
              this.hasAnyBroken =
                this.hasAnyBroken || !image.isLoaded;
              // progress event
              this.emitEvent('progress', [this, image, elem]);
              if (this.jqDeferred && this.jqDeferred.notify) {
                this.jqDeferred.notify(this, image);
              }
              // check if completed
              if (this.progressedCount == this.images.length) {
                this.complete();
              }

              if (this.options.debug && console) {
                console.log('progress: ' + message, image, elem);
              }
            };

            ImagesLoaded.prototype.complete = function () {
              var eventName = this.hasAnyBroken ? 'fail' : 'done';
              this.isComplete = true;
              this.emitEvent(eventName, [this]);
              this.emitEvent('always', [this]);
              if (this.jqDeferred) {
                var jqMethod = this.hasAnyBroken
                  ? 'reject'
                  : 'resolve';
                this.jqDeferred[jqMethod](this);
              }
            };

            // --------------------------  -------------------------- //

            function LoadingImage(img) {
              this.img = img;
            }

            LoadingImage.prototype = Object.create(
              EvEmitter.prototype
            );

            LoadingImage.prototype.check = function () {
              // If complete is true and browser supports natural sizes,
              // try to check for image status manually.
              var isComplete = this.getIsImageComplete();
              if (isComplete) {
                // report based on naturalWidth
                this.confirm(
                  this.img.naturalWidth !== 0,
                  'naturalWidth'
                );
                return;
              }

              // If none of the checks above matched, simulate loading on detached element.
              this.proxyImage = new Image();
              this.proxyImage.addEventListener('load', this);
              this.proxyImage.addEventListener('error', this);
              // bind to image as well for Firefox. #191
              this.img.addEventListener('load', this);
              this.img.addEventListener('error', this);
              this.proxyImage.src = this.img.src;
            };

            LoadingImage.prototype.getIsImageComplete = function () {
              // check for non-zero, non-undefined naturalWidth
              // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
              return this.img.complete && this.img.naturalWidth;
            };

            LoadingImage.prototype.confirm = function (
              isLoaded,
              message
            ) {
              this.isLoaded = isLoaded;
              this.emitEvent('progress', [this, this.img, message]);
            };

            // ----- events ----- //

            // trigger specified handler for event type
            LoadingImage.prototype.handleEvent = function (event) {
              var method = 'on' + event.type;
              if (this[method]) {
                this[method](event);
              }
            };

            LoadingImage.prototype.onload = function () {
              this.confirm(true, 'onload');
              this.unbindEvents();
            };

            LoadingImage.prototype.onerror = function () {
              this.confirm(false, 'onerror');
              this.unbindEvents();
            };

            LoadingImage.prototype.unbindEvents = function () {
              this.proxyImage.removeEventListener('load', this);
              this.proxyImage.removeEventListener('error', this);
              this.img.removeEventListener('load', this);
              this.img.removeEventListener('error', this);
            };

            // -------------------------- Background -------------------------- //

            function Background(url, element) {
              this.url = url;
              this.element = element;
              this.img = new Image();
            }

            // inherit LoadingImage prototype
            Background.prototype = Object.create(
              LoadingImage.prototype
            );

            Background.prototype.check = function () {
              this.img.addEventListener('load', this);
              this.img.addEventListener('error', this);
              this.img.src = this.url;
              // check if image is already complete
              var isComplete = this.getIsImageComplete();
              if (isComplete) {
                this.confirm(
                  this.img.naturalWidth !== 0,
                  'naturalWidth'
                );
                this.unbindEvents();
              }
            };

            Background.prototype.unbindEvents = function () {
              this.img.removeEventListener('load', this);
              this.img.removeEventListener('error', this);
            };

            Background.prototype.confirm = function (
              isLoaded,
              message
            ) {
              this.isLoaded = isLoaded;
              this.emitEvent('progress', [
                this,
                this.element,
                message,
              ]);
            };

            // -------------------------- jQuery -------------------------- //

            ImagesLoaded.makeJQueryPlugin = function (jQuery) {
              jQuery = jQuery || window.jQuery;
              if (!jQuery) {
                return;
              }
              // set local variable
              $ = jQuery;
              // $().imagesLoaded()
              $.fn.imagesLoaded = function (options, callback) {
                var instance = new ImagesLoaded(
                  this,
                  options,
                  callback
                );
                return instance.jqDeferred.promise($(this));
              };
            };
            // try making plugin
            ImagesLoaded.makeJQueryPlugin();

            // --------------------------  -------------------------- //

            return ImagesLoaded;
          }
        );

        /***/
      },

    /***/
    /*!*******************************************************!*\
  !*** ./node_modules/isotope-horizontal/horizontal.js ***!
  \*******************************************************/
    './node_modules/isotope-horizontal/horizontal.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__,
          __WEBPACK_AMD_DEFINE_ARRAY__,
          __WEBPACK_AMD_DEFINE_RESULT__;
        /*!
         * horizontal layout mode for Isotope
         * v2.0.1
         * https://isotope.metafizzy.co/layout-modes/horiz.html
         */

        (function (window, factory) {
          // universal module definition
          /* jshint strict: false */
          /*globals define, module, require */
          if (true) {
            // AMD
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(
                /*! isotope-layout/js/layout-mode */
                './node_modules/isotope-layout/js/layout-mode.js'
              ),
            ]),
            (__WEBPACK_AMD_DEFINE_FACTORY__ = factory),
            (__WEBPACK_AMD_DEFINE_RESULT__ =
              typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function'
                ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(
                    exports,
                    __WEBPACK_AMD_DEFINE_ARRAY__
                  )
                : __WEBPACK_AMD_DEFINE_FACTORY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })(window, function factory(LayoutMode) {
          'use strict';

          var Horiz = LayoutMode.create('horiz', {
            verticalAlignment: 0,
          });

          var proto = Horiz.prototype;

          proto._resetLayout = function () {
            this.x = 0;
          };

          proto._getItemLayoutPosition = function (item) {
            item.getSize();
            var y =
              (this.isotope.size.innerHeight -
                item.size.outerHeight) *
              this.options.verticalAlignment;
            var x = this.x;
            this.x += item.size.outerWidth;
            return {
              x: x,
              y: y,
            };
          };

          proto._getContainerSize = function () {
            return {
              width: this.x,
            };
          };

          proto.needsResizeLayout = function () {
            return this.needsVerticalResizeLayout();
          };

          return Horiz;
        });

        /***/
      },

    /***/
    /*!***************************************************!*\
  !*** ./node_modules/isotope-layout/js/isotope.js ***!
  \***************************************************/
    './node_modules/isotope-layout/js/isotope.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__,
          __WEBPACK_AMD_DEFINE_RESULT__;
        /*!
         * Isotope v3.0.6
         *
         * Licensed GPLv3 for open source use
         * or Isotope Commercial License for commercial use
         *
         * https://isotope.metafizzy.co
         * Copyright 2010-2018 Metafizzy
         */

        (function (window, factory) {
          // universal module definition
          /* jshint strict: false */
          /*globals define, module, require */
          if (true) {
            // AMD
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(
                /*! outlayer/outlayer */
                './node_modules/outlayer/outlayer.js'
              ),
              __webpack_require__(
                /*! get-size/get-size */
                './node_modules/get-size/get-size.js'
              ),
              __webpack_require__(
                /*! desandro-matches-selector/matches-selector */
                './node_modules/desandro-matches-selector/matches-selector.js'
              ),
              __webpack_require__(
                /*! fizzy-ui-utils/utils */
                './node_modules/fizzy-ui-utils/utils.js'
              ),
              __webpack_require__(
                /*! ./item */
                './node_modules/isotope-layout/js/item.js'
              ),
              __webpack_require__(
                /*! ./layout-mode */
                './node_modules/isotope-layout/js/layout-mode.js'
              ), // include default layout modes
              __webpack_require__(
                /*! ./layout-modes/masonry */
                './node_modules/isotope-layout/js/layout-modes/masonry.js'
              ),
              __webpack_require__(
                /*! ./layout-modes/fit-rows */
                './node_modules/isotope-layout/js/layout-modes/fit-rows.js'
              ),
              __webpack_require__(
                /*! ./layout-modes/vertical */
                './node_modules/isotope-layout/js/layout-modes/vertical.js'
              ),
            ]),
            (__WEBPACK_AMD_DEFINE_RESULT__ = function (
              Outlayer,
              getSize,
              matchesSelector,
              utils,
              Item,
              LayoutMode
            ) {
              return factory(
                window,
                Outlayer,
                getSize,
                matchesSelector,
                utils,
                Item,
                LayoutMode
              );
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })(
          window,
          function factory(
            window,
            Outlayer,
            getSize,
            matchesSelector,
            utils,
            Item,
            LayoutMode
          ) {
            'use strict';

            // -------------------------- vars -------------------------- //

            var jQuery = window.jQuery;

            // -------------------------- helpers -------------------------- //

            var trim = String.prototype.trim
              ? function (str) {
                  return str.trim();
                }
              : function (str) {
                  return str.replace(/^\s+|\s+$/g, '');
                };
            // -------------------------- isotopeDefinition -------------------------- //

            // create an Outlayer layout class
            var Isotope = Outlayer.create('isotope', {
              layoutMode: 'masonry',
              isJQueryFiltering: true,
              sortAscending: true,
            });

            Isotope.Item = Item;
            Isotope.LayoutMode = LayoutMode;

            var proto = Isotope.prototype;

            proto._create = function () {
              this.itemGUID = 0;
              // functions that sort items
              this._sorters = {};
              this._getSorters();
              // call super
              Outlayer.prototype._create.call(this);

              // create layout modes
              this.modes = {};
              // start filteredItems with all items
              this.filteredItems = this.items;
              // keep of track of sortBys
              this.sortHistory = ['original-order'];
              // create from registered layout modes
              for (var name in LayoutMode.modes) {
                this._initLayoutMode(name);
              }
            };

            proto.reloadItems = function () {
              // reset item ID counter
              this.itemGUID = 0;
              // call super
              Outlayer.prototype.reloadItems.call(this);
            };

            proto._itemize = function () {
              var items = Outlayer.prototype._itemize.apply(
                this,
                arguments
              );
              // assign ID for original-order
              for (var i = 0; i < items.length; i++) {
                var item = items[i];
                item.id = this.itemGUID++;
              }
              this._updateItemsSortData(items);
              return items;
            };

            // -------------------------- layout -------------------------- //

            proto._initLayoutMode = function (name) {
              var Mode = LayoutMode.modes[name];
              // set mode options
              // HACK extend initial options, back-fill in default options
              var initialOpts = this.options[name] || {};
              this.options[name] = Mode.options
                ? utils.extend(Mode.options, initialOpts)
                : initialOpts;
              // init layout mode instance
              this.modes[name] = new Mode(this);
            };

            proto.layout = function () {
              // if first time doing layout, do all magic
              if (
                !this._isLayoutInited &&
                this._getOption('initLayout')
              ) {
                this.arrange();
                return;
              }
              this._layout();
            };

            // private method to be used in layout() & magic()
            proto._layout = function () {
              // don't animate first layout
              var isInstant = this._getIsInstant();
              // layout flow
              this._resetLayout();
              this._manageStamps();
              this.layoutItems(this.filteredItems, isInstant);

              // flag for initalized
              this._isLayoutInited = true;
            };

            // filter + sort + layout
            proto.arrange = function (opts) {
              // set any options pass
              this.option(opts);
              this._getIsInstant();
              // filter, sort, and layout

              // filter
              var filtered = this._filter(this.items);
              this.filteredItems = filtered.matches;

              this._bindArrangeComplete();

              if (this._isInstant) {
                this._noTransition(this._hideReveal, [filtered]);
              } else {
                this._hideReveal(filtered);
              }

              this._sort();
              this._layout();
            };
            // alias to _init for main plugin method
            proto._init = proto.arrange;

            proto._hideReveal = function (filtered) {
              this.reveal(filtered.needReveal);
              this.hide(filtered.needHide);
            };

            // HACK
            // Don't animate/transition first layout
            // Or don't animate/transition other layouts
            proto._getIsInstant = function () {
              var isLayoutInstant = this._getOption('layoutInstant');
              var isInstant =
                isLayoutInstant !== undefined
                  ? isLayoutInstant
                  : !this._isLayoutInited;
              this._isInstant = isInstant;
              return isInstant;
            };

            // listen for layoutComplete, hideComplete and revealComplete
            // to trigger arrangeComplete
            proto._bindArrangeComplete = function () {
              // listen for 3 events to trigger arrangeComplete
              var isLayoutComplete, isHideComplete, isRevealComplete;
              var _this = this;
              function arrangeParallelCallback() {
                if (
                  isLayoutComplete &&
                  isHideComplete &&
                  isRevealComplete
                ) {
                  _this.dispatchEvent('arrangeComplete', null, [
                    _this.filteredItems,
                  ]);
                }
              }
              this.once('layoutComplete', function () {
                isLayoutComplete = true;
                arrangeParallelCallback();
              });
              this.once('hideComplete', function () {
                isHideComplete = true;
                arrangeParallelCallback();
              });
              this.once('revealComplete', function () {
                isRevealComplete = true;
                arrangeParallelCallback();
              });
            };

            // -------------------------- filter -------------------------- //

            proto._filter = function (items) {
              var filter = this.options.filter;
              filter = filter || '*';
              var matches = [];
              var hiddenMatched = [];
              var visibleUnmatched = [];

              var test = this._getFilterTest(filter);

              // test each item
              for (var i = 0; i < items.length; i++) {
                var item = items[i];
                if (item.isIgnored) {
                  continue;
                }
                // add item to either matched or unmatched group
                var isMatched = test(item);
                // item.isFilterMatched = isMatched;
                // add to matches if its a match
                if (isMatched) {
                  matches.push(item);
                }
                // add to additional group if item needs to be hidden or revealed
                if (isMatched && item.isHidden) {
                  hiddenMatched.push(item);
                } else if (!isMatched && !item.isHidden) {
                  visibleUnmatched.push(item);
                }
              }

              // return collections of items to be manipulated
              return {
                matches: matches,
                needReveal: hiddenMatched,
                needHide: visibleUnmatched,
              };
            };

            // get a jQuery, function, or a matchesSelector test given the filter
            proto._getFilterTest = function (filter) {
              if (jQuery && this.options.isJQueryFiltering) {
                // use jQuery
                return function (item) {
                  return jQuery(item.element).is(filter);
                };
              }
              if (typeof filter == 'function') {
                // use filter as function
                return function (item) {
                  return filter(item.element);
                };
              }
              // default, use filter as selector string
              return function (item) {
                return matchesSelector(item.element, filter);
              };
            };

            // -------------------------- sorting -------------------------- //

            /**
             * @params {Array} elems
             * @public
             */
            proto.updateSortData = function (elems) {
              // get items
              var items;
              if (elems) {
                elems = utils.makeArray(elems);
                items = this.getItems(elems);
              } else {
                // update all items if no elems provided
                items = this.items;
              }

              this._getSorters();
              this._updateItemsSortData(items);
            };

            proto._getSorters = function () {
              var getSortData = this.options.getSortData;
              for (var key in getSortData) {
                var sorter = getSortData[key];
                this._sorters[key] = mungeSorter(sorter);
              }
            };

            /**
             * @params {Array} items - of Isotope.Items
             * @private
             */
            proto._updateItemsSortData = function (items) {
              // do not update if no items
              var len = items && items.length;

              for (var i = 0; len && i < len; i++) {
                var item = items[i];
                item.updateSortData();
              }
            };

            // ----- munge sorter ----- //

            // encapsulate this, as we just need mungeSorter
            // other functions in here are just for munging
            var mungeSorter = (function () {
              // add a magic layer to sorters for convienent shorthands
              // `.foo-bar` will use the text of .foo-bar querySelector
              // `[foo-bar]` will use attribute
              // you can also add parser
              // `.foo-bar parseInt` will parse that as a number
              function mungeSorter(sorter) {
                // if not a string, return function or whatever it is
                if (typeof sorter != 'string') {
                  return sorter;
                }
                // parse the sorter string
                var args = trim(sorter).split(' ');
                var query = args[0];
                // check if query looks like [an-attribute]
                var attrMatch = query.match(/^\[(.+)\]$/);
                var attr = attrMatch && attrMatch[1];
                var getValue = getValueGetter(attr, query);
                // use second argument as a parser
                var parser = Isotope.sortDataParsers[args[1]];
                // parse the value, if there was a parser
                sorter = parser
                  ? function (elem) {
                      return elem && parser(getValue(elem));
                    }
                  : // otherwise just return value
                    function (elem) {
                      return elem && getValue(elem);
                    };

                return sorter;
              }

              // get an attribute getter, or get text of the querySelector
              function getValueGetter(attr, query) {
                // if query looks like [foo-bar], get attribute
                if (attr) {
                  return function getAttribute(elem) {
                    return elem.getAttribute(attr);
                  };
                }

                // otherwise, assume its a querySelector, and get its text
                return function getChildText(elem) {
                  var child = elem.querySelector(query);
                  return child && child.textContent;
                };
              }

              return mungeSorter;
            })();

            // parsers used in getSortData shortcut strings
            Isotope.sortDataParsers = {
              parseInt: function (val) {
                return parseInt(val, 10);
              },
              parseFloat: function (val) {
                return parseFloat(val);
              },
            };

            // ----- sort method ----- //

            // sort filteredItem order
            proto._sort = function () {
              if (!this.options.sortBy) {
                return;
              }
              // keep track of sortBy History
              var sortBys = utils.makeArray(this.options.sortBy);
              if (!this._getIsSameSortBy(sortBys)) {
                // concat all sortBy and sortHistory, add to front, oldest goes in last
                this.sortHistory = sortBys.concat(this.sortHistory);
              }
              // sort magic
              var itemSorter = getItemSorter(
                this.sortHistory,
                this.options.sortAscending
              );
              this.filteredItems.sort(itemSorter);
            };

            // check if sortBys is same as start of sortHistory
            proto._getIsSameSortBy = function (sortBys) {
              for (var i = 0; i < sortBys.length; i++) {
                if (sortBys[i] != this.sortHistory[i]) {
                  return false;
                }
              }
              return true;
            };

            // returns a function used for sorting
            function getItemSorter(sortBys, sortAsc) {
              return function sorter(itemA, itemB) {
                // cycle through all sortKeys
                for (var i = 0; i < sortBys.length; i++) {
                  var sortBy = sortBys[i];
                  var a = itemA.sortData[sortBy];
                  var b = itemB.sortData[sortBy];
                  if (a > b || a < b) {
                    // if sortAsc is an object, use the value given the sortBy key
                    var isAscending =
                      sortAsc[sortBy] !== undefined
                        ? sortAsc[sortBy]
                        : sortAsc;
                    var direction = isAscending ? 1 : -1;
                    return (a > b ? 1 : -1) * direction;
                  }
                }
                return 0;
              };
            }

            // -------------------------- methods -------------------------- //

            // get layout mode
            proto._mode = function () {
              var layoutMode = this.options.layoutMode;
              var mode = this.modes[layoutMode];
              if (!mode) {
                // TODO console.error
                throw new Error('No layout mode: ' + layoutMode);
              }
              // HACK sync mode's options
              // any options set after init for layout mode need to be synced
              mode.options = this.options[layoutMode];
              return mode;
            };

            proto._resetLayout = function () {
              // trigger original reset layout
              Outlayer.prototype._resetLayout.call(this);
              this._mode()._resetLayout();
            };

            proto._getItemLayoutPosition = function (item) {
              return this._mode()._getItemLayoutPosition(item);
            };

            proto._manageStamp = function (stamp) {
              this._mode()._manageStamp(stamp);
            };

            proto._getContainerSize = function () {
              return this._mode()._getContainerSize();
            };

            proto.needsResizeLayout = function () {
              return this._mode().needsResizeLayout();
            };

            // -------------------------- adding & removing -------------------------- //

            // HEADS UP overwrites default Outlayer appended
            proto.appended = function (elems) {
              var items = this.addItems(elems);
              if (!items.length) {
                return;
              }
              // filter, layout, reveal new items
              var filteredItems = this._filterRevealAdded(items);
              // add to filteredItems
              this.filteredItems =
                this.filteredItems.concat(filteredItems);
            };

            // HEADS UP overwrites default Outlayer prepended
            proto.prepended = function (elems) {
              var items = this._itemize(elems);
              if (!items.length) {
                return;
              }
              // start new layout
              this._resetLayout();
              this._manageStamps();
              // filter, layout, reveal new items
              var filteredItems = this._filterRevealAdded(items);
              // layout previous items
              this.layoutItems(this.filteredItems);
              // add to items and filteredItems
              this.filteredItems = filteredItems.concat(
                this.filteredItems
              );
              this.items = items.concat(this.items);
            };

            proto._filterRevealAdded = function (items) {
              var filtered = this._filter(items);
              this.hide(filtered.needHide);
              // reveal all new items
              this.reveal(filtered.matches);
              // layout new items, no transition
              this.layoutItems(filtered.matches, true);
              return filtered.matches;
            };

            /**
             * Filter, sort, and layout newly-appended item elements
             * @param {Array or NodeList or Element} elems
             */
            proto.insert = function (elems) {
              var items = this.addItems(elems);
              if (!items.length) {
                return;
              }
              // append item elements
              var i, item;
              var len = items.length;
              for (i = 0; i < len; i++) {
                item = items[i];
                this.element.appendChild(item.element);
              }
              // filter new stuff
              var filteredInsertItems = this._filter(items).matches;
              // set flag
              for (i = 0; i < len; i++) {
                items[i].isLayoutInstant = true;
              }
              this.arrange();
              // reset flag
              for (i = 0; i < len; i++) {
                delete items[i].isLayoutInstant;
              }
              this.reveal(filteredInsertItems);
            };

            var _remove = proto.remove;
            proto.remove = function (elems) {
              elems = utils.makeArray(elems);
              var removeItems = this.getItems(elems);
              // do regular thing
              _remove.call(this, elems);
              // bail if no items to remove
              var len = removeItems && removeItems.length;
              // remove elems from filteredItems
              for (var i = 0; len && i < len; i++) {
                var item = removeItems[i];
                // remove item from collection
                utils.removeFrom(this.filteredItems, item);
              }
            };

            proto.shuffle = function () {
              // update random sortData
              for (var i = 0; i < this.items.length; i++) {
                var item = this.items[i];
                item.sortData.random = Math.random();
              }
              this.options.sortBy = 'random';
              this._sort();
              this._layout();
            };

            /**
             * trigger fn without transition
             * kind of hacky to have this in the first place
             * @param {Function} fn
             * @param {Array} args
             * @returns ret
             * @private
             */
            proto._noTransition = function (fn, args) {
              // save transitionDuration before disabling
              var transitionDuration =
                this.options.transitionDuration;
              // disable transition
              this.options.transitionDuration = 0;
              // do it
              var returnValue = fn.apply(this, args);
              // re-enable transition for reveal
              this.options.transitionDuration = transitionDuration;
              return returnValue;
            };

            // ----- helper methods ----- //

            /**
             * getter method for getting filtered item elements
             * @returns {Array} elems - collection of item elements
             */
            proto.getFilteredItemElements = function () {
              return this.filteredItems.map(function (item) {
                return item.element;
              });
            };

            // -----  ----- //

            return Isotope;
          }
        );

        /***/
      },

    /***/
    /*!************************************************!*\
  !*** ./node_modules/isotope-layout/js/item.js ***!
  \************************************************/
    './node_modules/isotope-layout/js/item.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__,
          __WEBPACK_AMD_DEFINE_ARRAY__,
          __WEBPACK_AMD_DEFINE_RESULT__;
        /**
         * Isotope Item
         **/

        (function (window, factory) {
          // universal module definition
          /* jshint strict: false */
          /*globals define, module, require */
          if (true) {
            // AMD
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(
                /*! outlayer/outlayer */
                './node_modules/outlayer/outlayer.js'
              ),
            ]),
            (__WEBPACK_AMD_DEFINE_FACTORY__ = factory),
            (__WEBPACK_AMD_DEFINE_RESULT__ =
              typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function'
                ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(
                    exports,
                    __WEBPACK_AMD_DEFINE_ARRAY__
                  )
                : __WEBPACK_AMD_DEFINE_FACTORY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })(window, function factory(Outlayer) {
          'use strict';

          // -------------------------- Item -------------------------- //

          // sub-class Outlayer Item
          function Item() {
            Outlayer.Item.apply(this, arguments);
          }

          var proto = (Item.prototype = Object.create(
            Outlayer.Item.prototype
          ));

          var _create = proto._create;
          proto._create = function () {
            // assign id, used for original-order sorting
            this.id = this.layout.itemGUID++;
            _create.call(this);
            this.sortData = {};
          };

          proto.updateSortData = function () {
            if (this.isIgnored) {
              return;
            }
            // default sorters
            this.sortData.id = this.id;
            // for backward compatibility
            this.sortData['original-order'] = this.id;
            this.sortData.random = Math.random();
            // go thru getSortData obj and apply the sorters
            var getSortData = this.layout.options.getSortData;
            var sorters = this.layout._sorters;
            for (var key in getSortData) {
              var sorter = sorters[key];
              this.sortData[key] = sorter(this.element, this);
            }
          };

          var _destroy = proto.destroy;
          proto.destroy = function () {
            // call super
            _destroy.apply(this, arguments);
            // reset display, #741
            this.css({
              display: '',
            });
          };

          return Item;
        });

        /***/
      },

    /***/
    /*!*******************************************************!*\
  !*** ./node_modules/isotope-layout/js/layout-mode.js ***!
  \*******************************************************/
    './node_modules/isotope-layout/js/layout-mode.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__,
          __WEBPACK_AMD_DEFINE_ARRAY__,
          __WEBPACK_AMD_DEFINE_RESULT__;
        /**
         * Isotope LayoutMode
         */

        (function (window, factory) {
          // universal module definition
          /* jshint strict: false */
          /*globals define, module, require */
          if (true) {
            // AMD
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(
                /*! get-size/get-size */
                './node_modules/get-size/get-size.js'
              ),
              __webpack_require__(
                /*! outlayer/outlayer */
                './node_modules/outlayer/outlayer.js'
              ),
            ]),
            (__WEBPACK_AMD_DEFINE_FACTORY__ = factory),
            (__WEBPACK_AMD_DEFINE_RESULT__ =
              typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function'
                ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(
                    exports,
                    __WEBPACK_AMD_DEFINE_ARRAY__
                  )
                : __WEBPACK_AMD_DEFINE_FACTORY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })(window, function factory(getSize, Outlayer) {
          'use strict';

          // layout mode class
          function LayoutMode(isotope) {
            this.isotope = isotope;
            // link properties
            if (isotope) {
              this.options = isotope.options[this.namespace];
              this.element = isotope.element;
              this.items = isotope.filteredItems;
              this.size = isotope.size;
            }
          }

          var proto = LayoutMode.prototype;

          /**
           * some methods should just defer to default Outlayer method
           * and reference the Isotope instance as `this`
           **/
          var facadeMethods = [
            '_resetLayout',
            '_getItemLayoutPosition',
            '_manageStamp',
            '_getContainerSize',
            '_getElementOffset',
            'needsResizeLayout',
            '_getOption',
          ];

          facadeMethods.forEach(function (methodName) {
            proto[methodName] = function () {
              return Outlayer.prototype[methodName].apply(
                this.isotope,
                arguments
              );
            };
          });

          // -----  ----- //

          // for horizontal layout modes, check vertical size
          proto.needsVerticalResizeLayout = function () {
            // don't trigger if size did not change
            var size = getSize(this.isotope.element);
            // check that this.size and size are there
            // IE8 triggers resize on body size change, so they might not be
            var hasSizes = this.isotope.size && size;
            return (
              hasSizes &&
              size.innerHeight != this.isotope.size.innerHeight
            );
          };

          // ----- measurements ----- //

          proto._getMeasurement = function () {
            this.isotope._getMeasurement.apply(this, arguments);
          };

          proto.getColumnWidth = function () {
            this.getSegmentSize('column', 'Width');
          };

          proto.getRowHeight = function () {
            this.getSegmentSize('row', 'Height');
          };

          /**
           * get columnWidth or rowHeight
           * segment: 'column' or 'row'
           * size 'Width' or 'Height'
           **/
          proto.getSegmentSize = function (segment, size) {
            var segmentName = segment + size;
            var outerSize = 'outer' + size;
            // columnWidth / outerWidth // rowHeight / outerHeight
            this._getMeasurement(segmentName, outerSize);
            // got rowHeight or columnWidth, we can chill
            if (this[segmentName]) {
              return;
            }
            // fall back to item of first element
            var firstItemSize = this.getFirstItemSize();
            this[segmentName] =
              (firstItemSize && firstItemSize[outerSize]) || // or size of container
              this.isotope.size['inner' + size];
          };

          proto.getFirstItemSize = function () {
            var firstItem = this.isotope.filteredItems[0];
            return (
              firstItem &&
              firstItem.element &&
              getSize(firstItem.element)
            );
          };

          // ----- methods that should reference isotope ----- //

          proto.layout = function () {
            this.isotope.layout.apply(this.isotope, arguments);
          };

          proto.getSize = function () {
            this.isotope.getSize();
            this.size = this.isotope.size;
          };

          // -------------------------- create -------------------------- //

          LayoutMode.modes = {};

          LayoutMode.create = function (namespace, options) {
            function Mode() {
              LayoutMode.apply(this, arguments);
            }

            Mode.prototype = Object.create(proto);
            Mode.prototype.constructor = Mode;

            // default options
            if (options) {
              Mode.options = options;
            }

            Mode.prototype.namespace = namespace;
            // register in Isotope
            LayoutMode.modes[namespace] = Mode;

            return Mode;
          };

          return LayoutMode;
        });

        /***/
      },

    /***/
    /*!*****************************************************************!*\
  !*** ./node_modules/isotope-layout/js/layout-modes/fit-rows.js ***!
  \*****************************************************************/
    './node_modules/isotope-layout/js/layout-modes/fit-rows.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__,
          __WEBPACK_AMD_DEFINE_ARRAY__,
          __WEBPACK_AMD_DEFINE_RESULT__;
        /**
         * fitRows layout mode
         */

        (function (window, factory) {
          // universal module definition
          /* jshint strict: false */
          /*globals define, module, require */
          if (true) {
            // AMD
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(
                /*! ../layout-mode */
                './node_modules/isotope-layout/js/layout-mode.js'
              ),
            ]),
            (__WEBPACK_AMD_DEFINE_FACTORY__ = factory),
            (__WEBPACK_AMD_DEFINE_RESULT__ =
              typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function'
                ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(
                    exports,
                    __WEBPACK_AMD_DEFINE_ARRAY__
                  )
                : __WEBPACK_AMD_DEFINE_FACTORY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })(window, function factory(LayoutMode) {
          'use strict';

          var FitRows = LayoutMode.create('fitRows');

          var proto = FitRows.prototype;

          proto._resetLayout = function () {
            this.x = 0;
            this.y = 0;
            this.maxY = 0;
            this._getMeasurement('gutter', 'outerWidth');
          };

          proto._getItemLayoutPosition = function (item) {
            item.getSize();

            var itemWidth = item.size.outerWidth + this.gutter;
            // if this element cannot fit in the current row
            var containerWidth =
              this.isotope.size.innerWidth + this.gutter;
            if (this.x !== 0 && itemWidth + this.x > containerWidth) {
              this.x = 0;
              this.y = this.maxY;
            }

            var position = {
              x: this.x,
              y: this.y,
            };

            this.maxY = Math.max(
              this.maxY,
              this.y + item.size.outerHeight
            );
            this.x += itemWidth;

            return position;
          };

          proto._getContainerSize = function () {
            return {
              height: this.maxY,
            };
          };

          return FitRows;
        });

        /***/
      },

    /***/
    /*!****************************************************************!*\
  !*** ./node_modules/isotope-layout/js/layout-modes/masonry.js ***!
  \****************************************************************/
    './node_modules/isotope-layout/js/layout-modes/masonry.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__,
          __WEBPACK_AMD_DEFINE_ARRAY__,
          __WEBPACK_AMD_DEFINE_RESULT__;
        /*!
         * Masonry layout mode
         * sub-classes Masonry
         * https://masonry.desandro.com
         */

        (function (window, factory) {
          // universal module definition
          /* jshint strict: false */
          /*globals define, module, require */
          if (true) {
            // AMD
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(
                /*! ../layout-mode */
                './node_modules/isotope-layout/js/layout-mode.js'
              ),
              __webpack_require__(
                /*! masonry-layout/masonry */
                './node_modules/masonry-layout/masonry.js'
              ),
            ]),
            (__WEBPACK_AMD_DEFINE_FACTORY__ = factory),
            (__WEBPACK_AMD_DEFINE_RESULT__ =
              typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function'
                ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(
                    exports,
                    __WEBPACK_AMD_DEFINE_ARRAY__
                  )
                : __WEBPACK_AMD_DEFINE_FACTORY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })(window, function factory(LayoutMode, Masonry) {
          'use strict';

          // -------------------------- masonryDefinition -------------------------- //

          // create an Outlayer layout class
          var MasonryMode = LayoutMode.create('masonry');

          var proto = MasonryMode.prototype;

          var keepModeMethods = {
            _getElementOffset: true,
            layout: true,
            _getMeasurement: true,
          };

          // inherit Masonry prototype
          for (var method in Masonry.prototype) {
            // do not inherit mode methods
            if (!keepModeMethods[method]) {
              proto[method] = Masonry.prototype[method];
            }
          }

          var measureColumns = proto.measureColumns;
          proto.measureColumns = function () {
            // set items, used if measuring first item
            this.items = this.isotope.filteredItems;
            measureColumns.call(this);
          };

          // point to mode options for fitWidth
          var _getOption = proto._getOption;
          proto._getOption = function (option) {
            if (option == 'fitWidth') {
              return this.options.isFitWidth !== undefined
                ? this.options.isFitWidth
                : this.options.fitWidth;
            }
            return _getOption.apply(this.isotope, arguments);
          };

          return MasonryMode;
        });

        /***/
      },

    /***/
    /*!*****************************************************************!*\
  !*** ./node_modules/isotope-layout/js/layout-modes/vertical.js ***!
  \*****************************************************************/
    './node_modules/isotope-layout/js/layout-modes/vertical.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__,
          __WEBPACK_AMD_DEFINE_ARRAY__,
          __WEBPACK_AMD_DEFINE_RESULT__;
        /**
         * vertical layout mode
         */

        (function (window, factory) {
          // universal module definition
          /* jshint strict: false */
          /*globals define, module, require */
          if (true) {
            // AMD
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(
                /*! ../layout-mode */
                './node_modules/isotope-layout/js/layout-mode.js'
              ),
            ]),
            (__WEBPACK_AMD_DEFINE_FACTORY__ = factory),
            (__WEBPACK_AMD_DEFINE_RESULT__ =
              typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function'
                ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(
                    exports,
                    __WEBPACK_AMD_DEFINE_ARRAY__
                  )
                : __WEBPACK_AMD_DEFINE_FACTORY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })(window, function factory(LayoutMode) {
          'use strict';

          var Vertical = LayoutMode.create('vertical', {
            horizontalAlignment: 0,
          });

          var proto = Vertical.prototype;

          proto._resetLayout = function () {
            this.y = 0;
          };

          proto._getItemLayoutPosition = function (item) {
            item.getSize();
            var x =
              (this.isotope.size.innerWidth - item.size.outerWidth) *
              this.options.horizontalAlignment;
            var y = this.y;
            this.y += item.size.outerHeight;
            return {
              x: x,
              y: y,
            };
          };

          proto._getContainerSize = function () {
            return {
              height: this.y,
            };
          };

          return Vertical;
        });

        /***/
      },

    /***/
    /*!*********************************************!*\
  !*** ./node_modules/lazysizes/lazysizes.js ***!
  \*********************************************/
    './node_modules/lazysizes/lazysizes.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        (function (window, factory) {
          var lazySizes = factory(window, window.document, Date);
          window.lazySizes = lazySizes;
          if (true && module.exports) {
            module.exports = lazySizes;
          }
        })(
          typeof window != 'undefined' ? window : {},
          /**
           * import("./types/global")
           * @typedef { import("./types/lazysizes-config").LazySizesConfigPartial } LazySizesConfigPartial
           */ function l(window, document, Date) {
            // Pass in the window Date function also for SSR because the Date class can be lost
            'use strict';
            /*jshint eqnull:true */

            var lazysizes,
              /**
               * @type { LazySizesConfigPartial }
               */
              lazySizesCfg;

            (function () {
              var prop;

              var lazySizesDefaults = {
                lazyClass: 'lazyload',
                loadedClass: 'lazyloaded',
                loadingClass: 'lazyloading',
                preloadClass: 'lazypreload',
                errorClass: 'lazyerror',
                //strictClass: 'lazystrict',
                autosizesClass: 'lazyautosizes',
                fastLoadedClass: 'ls-is-cached',
                iframeLoadMode: 0,
                srcAttr: 'data-src',
                srcsetAttr: 'data-srcset',
                sizesAttr: 'data-sizes',
                //preloadAfterLoad: false,
                minSize: 40,
                customMedia: {},
                init: true,
                expFactor: 1.5,
                hFac: 0.8,
                loadMode: 2,
                loadHidden: true,
                ricTimeout: 0,
                throttleDelay: 125,
              };

              lazySizesCfg =
                window.lazySizesConfig ||
                window.lazysizesConfig ||
                {};

              for (prop in lazySizesDefaults) {
                if (!(prop in lazySizesCfg)) {
                  lazySizesCfg[prop] = lazySizesDefaults[prop];
                }
              }
            })();

            if (!document || !document.getElementsByClassName) {
              return {
                init: function () {},
                /**
                 * @type { LazySizesConfigPartial }
                 */
                cfg: lazySizesCfg,
                /**
                 * @type { true }
                 */
                noSupport: true,
              };
            }

            var docElem = document.documentElement;

            var supportPicture = window.HTMLPictureElement;

            var _addEventListener = 'addEventListener';

            var _getAttribute = 'getAttribute';

            /**
             * Update to bind to window because 'this' becomes null during SSR
             * builds.
             */
            var addEventListener =
              window[_addEventListener].bind(window);

            var setTimeout = window.setTimeout;

            var requestAnimationFrame =
              window.requestAnimationFrame || setTimeout;

            var requestIdleCallback = window.requestIdleCallback;

            var regPicture = /^picture$/i;

            var loadEvents = [
              'load',
              'error',
              'lazyincluded',
              '_lazyloaded',
            ];

            var regClassCache = {};

            var forEach = Array.prototype.forEach;

            /**
             * @param ele {Element}
             * @param cls {string}
             */
            var hasClass = function (ele, cls) {
              if (!regClassCache[cls]) {
                regClassCache[cls] = new RegExp(
                  '(\\s|^)' + cls + '(\\s|$)'
                );
              }
              return (
                regClassCache[cls].test(
                  ele[_getAttribute]('class') || ''
                ) && regClassCache[cls]
              );
            };

            /**
             * @param ele {Element}
             * @param cls {string}
             */
            var addClass = function (ele, cls) {
              if (!hasClass(ele, cls)) {
                ele.setAttribute(
                  'class',
                  (ele[_getAttribute]('class') || '').trim() +
                    ' ' +
                    cls
                );
              }
            };

            /**
             * @param ele {Element}
             * @param cls {string}
             */
            var removeClass = function (ele, cls) {
              var reg;
              if ((reg = hasClass(ele, cls))) {
                ele.setAttribute(
                  'class',
                  (ele[_getAttribute]('class') || '').replace(
                    reg,
                    ' '
                  )
                );
              }
            };

            var addRemoveLoadEvents = function (dom, fn, add) {
              var action = add
                ? _addEventListener
                : 'removeEventListener';
              if (add) {
                addRemoveLoadEvents(dom, fn);
              }
              loadEvents.forEach(function (evt) {
                dom[action](evt, fn);
              });
            };

            /**
             * @param elem { Element }
             * @param name { string }
             * @param detail { any }
             * @param noBubbles { boolean }
             * @param noCancelable { boolean }
             * @returns { CustomEvent }
             */
            var triggerEvent = function (
              elem,
              name,
              detail,
              noBubbles,
              noCancelable
            ) {
              var event = document.createEvent('Event');

              if (!detail) {
                detail = {};
              }

              detail.instance = lazysizes;

              event.initEvent(name, !noBubbles, !noCancelable);

              event.detail = detail;

              elem.dispatchEvent(event);
              return event;
            };

            var updatePolyfill = function (el, full) {
              var polyfill;
              if (
                !supportPicture &&
                (polyfill = window.picturefill || lazySizesCfg.pf)
              ) {
                if (
                  full &&
                  full.src &&
                  !el[_getAttribute]('srcset')
                ) {
                  el.setAttribute('srcset', full.src);
                }
                polyfill({
                  reevaluate: true,
                  elements: [el],
                });
              } else if (full && full.src) {
                el.src = full.src;
              }
            };

            var getCSS = function (elem, style) {
              return (getComputedStyle(elem, null) || {})[style];
            };

            /**
             *
             * @param elem { Element }
             * @param parent { Element }
             * @param [width] {number}
             * @returns {number}
             */
            var getWidth = function (elem, parent, width) {
              width = width || elem.offsetWidth;

              while (
                width < lazySizesCfg.minSize &&
                parent &&
                !elem._lazysizesWidth
              ) {
                width = parent.offsetWidth;
                parent = parent.parentNode;
              }

              return width;
            };

            var rAF = (function () {
              var running, waiting;
              var firstFns = [];
              var secondFns = [];
              var fns = firstFns;

              var run = function () {
                var runFns = fns;

                fns = firstFns.length ? secondFns : firstFns;

                running = true;
                waiting = false;

                while (runFns.length) {
                  runFns.shift()();
                }

                running = false;
              };

              var rafBatch = function (fn, queue) {
                if (running && !queue) {
                  fn.apply(this, arguments);
                } else {
                  fns.push(fn);

                  if (!waiting) {
                    waiting = true;
                    (document.hidden
                      ? setTimeout
                      : requestAnimationFrame)(run);
                  }
                }
              };

              rafBatch._lsFlush = run;

              return rafBatch;
            })();

            var rAFIt = function (fn, simple) {
              return simple
                ? function () {
                    rAF(fn);
                  }
                : function () {
                    var that = this;
                    var args = arguments;
                    rAF(function () {
                      fn.apply(that, args);
                    });
                  };
            };

            var throttle = function (fn) {
              var running;
              var lastTime = 0;
              var gDelay = lazySizesCfg.throttleDelay;
              var rICTimeout = lazySizesCfg.ricTimeout;
              var run = function () {
                running = false;
                lastTime = Date.now();
                fn();
              };
              var idleCallback =
                requestIdleCallback && rICTimeout > 49
                  ? function () {
                      requestIdleCallback(run, {
                        timeout: rICTimeout,
                      });

                      if (rICTimeout !== lazySizesCfg.ricTimeout) {
                        rICTimeout = lazySizesCfg.ricTimeout;
                      }
                    }
                  : rAFIt(function () {
                      setTimeout(run);
                    }, true);

              return function (isPriority) {
                var delay;

                if ((isPriority = isPriority === true)) {
                  rICTimeout = 33;
                }

                if (running) {
                  return;
                }

                running = true;

                delay = gDelay - (Date.now() - lastTime);

                if (delay < 0) {
                  delay = 0;
                }

                if (isPriority || delay < 9) {
                  idleCallback();
                } else {
                  setTimeout(idleCallback, delay);
                }
              };
            };

            //based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
            var debounce = function (func) {
              var timeout, timestamp;
              var wait = 99;
              var run = function () {
                timeout = null;
                func();
              };
              var later = function () {
                var last = Date.now() - timestamp;

                if (last < wait) {
                  setTimeout(later, wait - last);
                } else {
                  (requestIdleCallback || run)(run);
                }
              };

              return function () {
                timestamp = Date.now();

                if (!timeout) {
                  timeout = setTimeout(later, wait);
                }
              };
            };

            var loader = (function () {
              var preloadElems,
                isCompleted,
                resetPreloadingTimer,
                loadMode,
                started;

              var eLvW,
                elvH,
                eLtop,
                eLleft,
                eLright,
                eLbottom,
                isBodyHidden;

              var regImg = /^img$/i;
              var regIframe = /^iframe$/i;

              var supportScroll =
                'onscroll' in window &&
                !/(gle|ing)bot/.test(navigator.userAgent);

              var shrinkExpand = 0;
              var currentExpand = 0;

              var isLoading = 0;
              var lowRuns = -1;

              var resetPreloading = function (e) {
                isLoading--;
                if (!e || isLoading < 0 || !e.target) {
                  isLoading = 0;
                }
              };

              var isVisible = function (elem) {
                if (isBodyHidden == null) {
                  isBodyHidden =
                    getCSS(document.body, 'visibility') == 'hidden';
                }

                return (
                  isBodyHidden ||
                  !(
                    getCSS(elem.parentNode, 'visibility') ==
                      'hidden' &&
                    getCSS(elem, 'visibility') == 'hidden'
                  )
                );
              };

              var isNestedVisible = function (elem, elemExpand) {
                var outerRect;
                var parent = elem;
                var visible = isVisible(elem);

                eLtop -= elemExpand;
                eLbottom += elemExpand;
                eLleft -= elemExpand;
                eLright += elemExpand;

                while (
                  visible &&
                  (parent = parent.offsetParent) &&
                  parent != document.body &&
                  parent != docElem
                ) {
                  visible = (getCSS(parent, 'opacity') || 1) > 0;

                  if (
                    visible &&
                    getCSS(parent, 'overflow') != 'visible'
                  ) {
                    outerRect = parent.getBoundingClientRect();
                    visible =
                      eLright > outerRect.left &&
                      eLleft < outerRect.right &&
                      eLbottom > outerRect.top - 1 &&
                      eLtop < outerRect.bottom + 1;
                  }
                }

                return visible;
              };

              var checkElements = function () {
                var eLlen,
                  i,
                  rect,
                  autoLoadElem,
                  loadedSomething,
                  elemExpand,
                  elemNegativeExpand,
                  elemExpandVal,
                  beforeExpandVal,
                  defaultExpand,
                  preloadExpand,
                  hFac;
                var lazyloadElems = lazysizes.elements;

                if (
                  (loadMode = lazySizesCfg.loadMode) &&
                  isLoading < 8 &&
                  (eLlen = lazyloadElems.length)
                ) {
                  i = 0;

                  lowRuns++;

                  for (; i < eLlen; i++) {
                    if (
                      !lazyloadElems[i] ||
                      lazyloadElems[i]._lazyRace
                    ) {
                      continue;
                    }

                    if (
                      !supportScroll ||
                      (lazysizes.prematureUnveil &&
                        lazysizes.prematureUnveil(lazyloadElems[i]))
                    ) {
                      unveilElement(lazyloadElems[i]);
                      continue;
                    }

                    if (
                      !(elemExpandVal =
                        lazyloadElems[i][_getAttribute](
                          'data-expand'
                        )) ||
                      !(elemExpand = elemExpandVal * 1)
                    ) {
                      elemExpand = currentExpand;
                    }

                    if (!defaultExpand) {
                      defaultExpand =
                        !lazySizesCfg.expand ||
                        lazySizesCfg.expand < 1
                          ? docElem.clientHeight > 500 &&
                            docElem.clientWidth > 500
                            ? 500
                            : 370
                          : lazySizesCfg.expand;

                      lazysizes._defEx = defaultExpand;

                      preloadExpand =
                        defaultExpand * lazySizesCfg.expFactor;
                      hFac = lazySizesCfg.hFac;
                      isBodyHidden = null;

                      if (
                        currentExpand < preloadExpand &&
                        isLoading < 1 &&
                        lowRuns > 2 &&
                        loadMode > 2 &&
                        !document.hidden
                      ) {
                        currentExpand = preloadExpand;
                        lowRuns = 0;
                      } else if (
                        loadMode > 1 &&
                        lowRuns > 1 &&
                        isLoading < 6
                      ) {
                        currentExpand = defaultExpand;
                      } else {
                        currentExpand = shrinkExpand;
                      }
                    }

                    if (beforeExpandVal !== elemExpand) {
                      eLvW = innerWidth + elemExpand * hFac;
                      elvH = innerHeight + elemExpand;
                      elemNegativeExpand = elemExpand * -1;
                      beforeExpandVal = elemExpand;
                    }

                    rect = lazyloadElems[i].getBoundingClientRect();

                    if (
                      (eLbottom = rect.bottom) >=
                        elemNegativeExpand &&
                      (eLtop = rect.top) <= elvH &&
                      (eLright = rect.right) >=
                        elemNegativeExpand * hFac &&
                      (eLleft = rect.left) <= eLvW &&
                      (eLbottom || eLright || eLleft || eLtop) &&
                      (lazySizesCfg.loadHidden ||
                        isVisible(lazyloadElems[i])) &&
                      ((isCompleted &&
                        isLoading < 3 &&
                        !elemExpandVal &&
                        (loadMode < 3 || lowRuns < 4)) ||
                        isNestedVisible(lazyloadElems[i], elemExpand))
                    ) {
                      unveilElement(lazyloadElems[i]);
                      loadedSomething = true;
                      if (isLoading > 9) {
                        break;
                      }
                    } else if (
                      !loadedSomething &&
                      isCompleted &&
                      !autoLoadElem &&
                      isLoading < 4 &&
                      lowRuns < 4 &&
                      loadMode > 2 &&
                      (preloadElems[0] ||
                        lazySizesCfg.preloadAfterLoad) &&
                      (preloadElems[0] ||
                        (!elemExpandVal &&
                          (eLbottom ||
                            eLright ||
                            eLleft ||
                            eLtop ||
                            lazyloadElems[i][_getAttribute](
                              lazySizesCfg.sizesAttr
                            ) != 'auto')))
                    ) {
                      autoLoadElem =
                        preloadElems[0] || lazyloadElems[i];
                    }
                  }

                  if (autoLoadElem && !loadedSomething) {
                    unveilElement(autoLoadElem);
                  }
                }
              };

              var throttledCheckElements = throttle(checkElements);

              var switchLoadingClass = function (e) {
                var elem = e.target;

                if (elem._lazyCache) {
                  delete elem._lazyCache;
                  return;
                }

                resetPreloading(e);
                addClass(elem, lazySizesCfg.loadedClass);
                removeClass(elem, lazySizesCfg.loadingClass);
                addRemoveLoadEvents(elem, rafSwitchLoadingClass);
                triggerEvent(elem, 'lazyloaded');
              };
              var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
              var rafSwitchLoadingClass = function (e) {
                rafedSwitchLoadingClass({
                  target: e.target,
                });
              };

              var changeIframeSrc = function (elem, src) {
                var loadMode =
                  elem.getAttribute('data-load-mode') ||
                  lazySizesCfg.iframeLoadMode;

                // loadMode can be also a string!
                if (loadMode == 0) {
                  elem.contentWindow.location.replace(src);
                } else if (loadMode == 1) {
                  elem.src = src;
                }
              };

              var handleSources = function (source) {
                var customMedia;

                var sourceSrcset = source[_getAttribute](
                  lazySizesCfg.srcsetAttr
                );

                if (
                  (customMedia =
                    lazySizesCfg.customMedia[
                      source[_getAttribute]('data-media') ||
                        source[_getAttribute]('media')
                    ])
                ) {
                  source.setAttribute('media', customMedia);
                }

                if (sourceSrcset) {
                  source.setAttribute('srcset', sourceSrcset);
                }
              };

              var lazyUnveil = rAFIt(function (
                elem,
                detail,
                isAuto,
                sizes,
                isImg
              ) {
                var src, srcset, parent, isPicture, event, firesLoad;

                if (
                  !(event = triggerEvent(
                    elem,
                    'lazybeforeunveil',
                    detail
                  )).defaultPrevented
                ) {
                  if (sizes) {
                    if (isAuto) {
                      addClass(elem, lazySizesCfg.autosizesClass);
                    } else {
                      elem.setAttribute('sizes', sizes);
                    }
                  }

                  srcset = elem[_getAttribute](
                    lazySizesCfg.srcsetAttr
                  );
                  src = elem[_getAttribute](lazySizesCfg.srcAttr);

                  if (isImg) {
                    parent = elem.parentNode;
                    isPicture =
                      parent &&
                      regPicture.test(parent.nodeName || '');
                  }

                  firesLoad =
                    detail.firesLoad ||
                    ('src' in elem && (srcset || src || isPicture));

                  event = {
                    target: elem,
                  };

                  addClass(elem, lazySizesCfg.loadingClass);

                  if (firesLoad) {
                    clearTimeout(resetPreloadingTimer);
                    resetPreloadingTimer = setTimeout(
                      resetPreloading,
                      2500
                    );
                    addRemoveLoadEvents(
                      elem,
                      rafSwitchLoadingClass,
                      true
                    );
                  }

                  if (isPicture) {
                    forEach.call(
                      parent.getElementsByTagName('source'),
                      handleSources
                    );
                  }

                  if (srcset) {
                    elem.setAttribute('srcset', srcset);
                  } else if (src && !isPicture) {
                    if (regIframe.test(elem.nodeName)) {
                      changeIframeSrc(elem, src);
                    } else {
                      elem.src = src;
                    }
                  }

                  if (isImg && (srcset || isPicture)) {
                    updatePolyfill(elem, {
                      src: src,
                    });
                  }
                }

                if (elem._lazyRace) {
                  delete elem._lazyRace;
                }
                removeClass(elem, lazySizesCfg.lazyClass);

                rAF(function () {
                  // Part of this can be removed as soon as this fix is older: https://bugs.chromium.org/p/chromium/issues/detail?id=7731 (2015)
                  var isLoaded =
                    elem.complete && elem.naturalWidth > 1;

                  if (!firesLoad || isLoaded) {
                    if (isLoaded) {
                      addClass(elem, lazySizesCfg.fastLoadedClass);
                    }
                    switchLoadingClass(event);
                    elem._lazyCache = true;
                    setTimeout(function () {
                      if ('_lazyCache' in elem) {
                        delete elem._lazyCache;
                      }
                    }, 9);
                  }
                  if (elem.loading == 'lazy') {
                    isLoading--;
                  }
                }, true);
              });

              /**
               *
               * @param elem { Element }
               */
              var unveilElement = function (elem) {
                if (elem._lazyRace) {
                  return;
                }
                var detail;

                var isImg = regImg.test(elem.nodeName);

                //allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
                var sizes =
                  isImg &&
                  (elem[_getAttribute](lazySizesCfg.sizesAttr) ||
                    elem[_getAttribute]('sizes'));
                var isAuto = sizes == 'auto';

                if (
                  (isAuto || !isCompleted) &&
                  isImg &&
                  (elem[_getAttribute]('src') || elem.srcset) &&
                  !elem.complete &&
                  !hasClass(elem, lazySizesCfg.errorClass) &&
                  hasClass(elem, lazySizesCfg.lazyClass)
                ) {
                  return;
                }

                detail = triggerEvent(elem, 'lazyunveilread').detail;

                if (isAuto) {
                  autoSizer.updateElem(elem, true, elem.offsetWidth);
                }

                elem._lazyRace = true;
                isLoading++;

                lazyUnveil(elem, detail, isAuto, sizes, isImg);
              };

              var afterScroll = debounce(function () {
                lazySizesCfg.loadMode = 3;
                throttledCheckElements();
              });

              var altLoadmodeScrollListner = function () {
                if (lazySizesCfg.loadMode == 3) {
                  lazySizesCfg.loadMode = 2;
                }
                afterScroll();
              };

              var onload = function () {
                if (isCompleted) {
                  return;
                }
                if (Date.now() - started < 999) {
                  setTimeout(onload, 999);
                  return;
                }

                isCompleted = true;

                lazySizesCfg.loadMode = 3;

                throttledCheckElements();

                addEventListener(
                  'scroll',
                  altLoadmodeScrollListner,
                  true
                );
              };

              return {
                _: function () {
                  started = Date.now();

                  lazysizes.elements =
                    document.getElementsByClassName(
                      lazySizesCfg.lazyClass
                    );
                  preloadElems = document.getElementsByClassName(
                    lazySizesCfg.lazyClass +
                      ' ' +
                      lazySizesCfg.preloadClass
                  );

                  addEventListener(
                    'scroll',
                    throttledCheckElements,
                    true
                  );

                  addEventListener(
                    'resize',
                    throttledCheckElements,
                    true
                  );

                  addEventListener('pageshow', function (e) {
                    if (e.persisted) {
                      var loadingElements = document.querySelectorAll(
                        '.' + lazySizesCfg.loadingClass
                      );

                      if (
                        loadingElements.length &&
                        loadingElements.forEach
                      ) {
                        requestAnimationFrame(function () {
                          loadingElements.forEach(function (img) {
                            if (img.complete) {
                              unveilElement(img);
                            }
                          });
                        });
                      }
                    }
                  });

                  if (window.MutationObserver) {
                    new MutationObserver(
                      throttledCheckElements
                    ).observe(docElem, {
                      childList: true,
                      subtree: true,
                      attributes: true,
                    });
                  } else {
                    docElem[_addEventListener](
                      'DOMNodeInserted',
                      throttledCheckElements,
                      true
                    );
                    docElem[_addEventListener](
                      'DOMAttrModified',
                      throttledCheckElements,
                      true
                    );
                    setInterval(throttledCheckElements, 999);
                  }

                  addEventListener(
                    'hashchange',
                    throttledCheckElements,
                    true
                  );

                  //, 'fullscreenchange'
                  [
                    'focus',
                    'mouseover',
                    'click',
                    'load',
                    'transitionend',
                    'animationend',
                  ].forEach(function (name) {
                    document[_addEventListener](
                      name,
                      throttledCheckElements,
                      true
                    );
                  });

                  if (/d$|^c/.test(document.readyState)) {
                    onload();
                  } else {
                    addEventListener('load', onload);
                    document[_addEventListener](
                      'DOMContentLoaded',
                      throttledCheckElements
                    );
                    setTimeout(onload, 20000);
                  }

                  if (lazysizes.elements.length) {
                    checkElements();
                    rAF._lsFlush();
                  } else {
                    throttledCheckElements();
                  }
                },
                checkElems: throttledCheckElements,
                unveil: unveilElement,
                _aLSL: altLoadmodeScrollListner,
              };
            })();

            var autoSizer = (function () {
              var autosizesElems;

              var sizeElement = rAFIt(function (
                elem,
                parent,
                event,
                width
              ) {
                var sources, i, len;
                elem._lazysizesWidth = width;
                width += 'px';

                elem.setAttribute('sizes', width);

                if (regPicture.test(parent.nodeName || '')) {
                  sources = parent.getElementsByTagName('source');
                  for (i = 0, len = sources.length; i < len; i++) {
                    sources[i].setAttribute('sizes', width);
                  }
                }

                if (!event.detail.dataAttr) {
                  updatePolyfill(elem, event.detail);
                }
              });
              /**
               *
               * @param elem {Element}
               * @param dataAttr
               * @param [width] { number }
               */
              var getSizeElement = function (elem, dataAttr, width) {
                var event;
                var parent = elem.parentNode;

                if (parent) {
                  width = getWidth(elem, parent, width);
                  event = triggerEvent(elem, 'lazybeforesizes', {
                    width: width,
                    dataAttr: !!dataAttr,
                  });

                  if (!event.defaultPrevented) {
                    width = event.detail.width;

                    if (width && width !== elem._lazysizesWidth) {
                      sizeElement(elem, parent, event, width);
                    }
                  }
                }
              };

              var updateElementsSizes = function () {
                var i;
                var len = autosizesElems.length;
                if (len) {
                  i = 0;

                  for (; i < len; i++) {
                    getSizeElement(autosizesElems[i]);
                  }
                }
              };

              var debouncedUpdateElementsSizes = debounce(
                updateElementsSizes
              );

              return {
                _: function () {
                  autosizesElems = document.getElementsByClassName(
                    lazySizesCfg.autosizesClass
                  );
                  addEventListener(
                    'resize',
                    debouncedUpdateElementsSizes
                  );
                },
                checkElems: debouncedUpdateElementsSizes,
                updateElem: getSizeElement,
              };
            })();

            var init = function () {
              if (!init.i && document.getElementsByClassName) {
                init.i = true;
                autoSizer._();
                loader._();
              }
            };

            setTimeout(function () {
              if (lazySizesCfg.init) {
                init();
              }
            });

            lazysizes = {
              /**
               * @type { LazySizesConfigPartial }
               */
              cfg: lazySizesCfg,
              autoSizer: autoSizer,
              loader: loader,
              init: init,
              uP: updatePolyfill,
              aC: addClass,
              rC: removeClass,
              hC: hasClass,
              fire: triggerEvent,
              gW: getWidth,
              rAF: rAF,
            };

            return lazysizes;
          }
        );

        /***/
      },

    /***/
    /*!**********************************************************************!*\
  !*** ./node_modules/lazysizes/plugins/unveilhooks/ls.unveilhooks.js ***!
  \**********************************************************************/
    './node_modules/lazysizes/plugins/unveilhooks/ls.unveilhooks.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__,
          __WEBPACK_AMD_DEFINE_ARRAY__,
          __WEBPACK_AMD_DEFINE_RESULT__;
        /*
This plugin extends lazySizes to lazyLoad:
background images, videos/posters and scripts

Background-Image:
For background images, use data-bg attribute:
<div class="lazyload" data-bg="bg-img.jpg"></div>

 Video:
 For video/audio use data-poster and preload="none":
 <video class="lazyload" preload="none" data-poster="poster.jpg" src="src.mp4">
 <!-- sources -->
 </video>

 For video that plays automatically if in view:
 <video
	class="lazyload"
	preload="none"
	muted=""
	data-autoplay=""
	data-poster="poster.jpg"
	src="src.mp4">
</video>

 Scripts:
 For scripts use data-script:
 <div class="lazyload" data-script="module-name.js"></div>


 Script modules using require:
 For modules using require use data-require:
 <div class="lazyload" data-require="module-name"></div>
*/

        (function (window, factory) {
          var globalInstall = function () {
            factory(window.lazySizes);
            window.removeEventListener(
              'lazyunveilread',
              globalInstall,
              true
            );
          };

          factory = factory.bind(null, window, window.document);

          if (true && module.exports) {
            factory(
              __webpack_require__(
                /*! lazysizes */
                './node_modules/lazysizes/lazysizes.js'
              )
            );
          } else if (true) {
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(
                /*! lazysizes */
                './node_modules/lazysizes/lazysizes.js'
              ),
            ]),
            (__WEBPACK_AMD_DEFINE_FACTORY__ = factory),
            (__WEBPACK_AMD_DEFINE_RESULT__ =
              typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function'
                ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(
                    exports,
                    __WEBPACK_AMD_DEFINE_ARRAY__
                  )
                : __WEBPACK_AMD_DEFINE_FACTORY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })(window, function (window, document, lazySizes) {
          /*jshint eqnull:true */
          'use strict';
          var bgLoad, regBgUrlEscape;
          var uniqueUrls = {};

          if (document.addEventListener) {
            regBgUrlEscape = /\(|\)|\s|'/;

            bgLoad = function (url, cb) {
              var img = document.createElement('img');
              img.onload = function () {
                img.onload = null;
                img.onerror = null;
                img = null;
                cb();
              };
              img.onerror = img.onload;

              img.src = url;

              if (img && img.complete && img.onload) {
                img.onload();
              }
            };

            addEventListener(
              'lazybeforeunveil',
              function (e) {
                if (e.detail.instance != lazySizes) {
                  return;
                }

                var tmp, load, bg, poster;
                if (!e.defaultPrevented) {
                  var target = e.target;

                  if (target.preload == 'none') {
                    target.preload =
                      target.getAttribute('data-preload') || 'auto';
                  }

                  if (target.getAttribute('data-autoplay') != null) {
                    if (
                      target.getAttribute('data-expand') &&
                      !target.autoplay
                    ) {
                      try {
                        target.play();
                      } catch (er) {}
                    } else {
                      requestAnimationFrame(function () {
                        target.setAttribute('data-expand', '-10');
                        lazySizes.aC(target, lazySizes.cfg.lazyClass);
                      });
                    }
                  }

                  tmp = target.getAttribute('data-link');
                  if (tmp) {
                    addStyleScript(tmp, true);
                  }

                  // handle data-script
                  tmp = target.getAttribute('data-script');
                  if (tmp) {
                    e.detail.firesLoad = true;
                    load = function () {
                      e.detail.firesLoad = false;
                      lazySizes.fire(
                        target,
                        '_lazyloaded',
                        {},
                        true,
                        true
                      );
                    };
                    addStyleScript(tmp, null, load);
                  }

                  // handle data-require
                  tmp = target.getAttribute('data-require');
                  if (tmp) {
                    if (lazySizes.cfg.requireJs) {
                      lazySizes.cfg.requireJs([tmp]);
                    } else {
                      addStyleScript(tmp);
                    }
                  }

                  // handle data-bg
                  bg = target.getAttribute('data-bg');
                  if (bg) {
                    e.detail.firesLoad = true;
                    load = function () {
                      target.style.backgroundImage =
                        'url(' +
                        (regBgUrlEscape.test(bg)
                          ? JSON.stringify(bg)
                          : bg) +
                        ')';
                      e.detail.firesLoad = false;
                      lazySizes.fire(
                        target,
                        '_lazyloaded',
                        {},
                        true,
                        true
                      );
                    };

                    bgLoad(bg, load);
                  }

                  // handle data-poster
                  poster = target.getAttribute('data-poster');
                  if (poster) {
                    e.detail.firesLoad = true;
                    load = function () {
                      target.poster = poster;
                      e.detail.firesLoad = false;
                      lazySizes.fire(
                        target,
                        '_lazyloaded',
                        {},
                        true,
                        true
                      );
                    };

                    bgLoad(poster, load);
                  }
                }
              },
              false
            );
          }

          function addStyleScript(src, style, cb) {
            if (uniqueUrls[src]) {
              return;
            }
            var elem = document.createElement(
              style ? 'link' : 'script'
            );
            var insertElem =
              document.getElementsByTagName('script')[0];

            if (style) {
              elem.rel = 'stylesheet';
              elem.href = src;
            } else {
              elem.onload = function () {
                elem.onerror = null;
                elem.onload = null;
                cb();
              };
              elem.onerror = elem.onload;

              elem.src = src;
            }
            uniqueUrls[src] = true;
            uniqueUrls[elem.src || elem.href] = true;
            insertElem.parentNode.insertBefore(elem, insertElem);
          }
        });

        /***/
      },

    /***/
    /*!************************************************!*\
  !*** ./node_modules/masonry-layout/masonry.js ***!
  \************************************************/
    './node_modules/masonry-layout/masonry.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__,
          __WEBPACK_AMD_DEFINE_ARRAY__,
          __WEBPACK_AMD_DEFINE_RESULT__;
        /*!
         * Masonry v4.2.2
         * Cascading grid layout library
         * https://masonry.desandro.com
         * MIT License
         * by David DeSandro
         */

        (function (window, factory) {
          // universal module definition
          /* jshint strict: false */
          /*globals define, module, require */
          if (true) {
            // AMD
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(
                /*! outlayer/outlayer */
                './node_modules/outlayer/outlayer.js'
              ),
              __webpack_require__(
                /*! get-size/get-size */
                './node_modules/get-size/get-size.js'
              ),
            ]),
            (__WEBPACK_AMD_DEFINE_FACTORY__ = factory),
            (__WEBPACK_AMD_DEFINE_RESULT__ =
              typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function'
                ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(
                    exports,
                    __WEBPACK_AMD_DEFINE_ARRAY__
                  )
                : __WEBPACK_AMD_DEFINE_FACTORY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })(window, function factory(Outlayer, getSize) {
          'use strict';

          // -------------------------- masonryDefinition -------------------------- //

          // create an Outlayer layout class
          var Masonry = Outlayer.create('masonry');
          // isFitWidth -> fitWidth
          Masonry.compatOptions.fitWidth = 'isFitWidth';

          var proto = Masonry.prototype;

          proto._resetLayout = function () {
            this.getSize();
            this._getMeasurement('columnWidth', 'outerWidth');
            this._getMeasurement('gutter', 'outerWidth');
            this.measureColumns();

            // reset column Y
            this.colYs = [];
            for (var i = 0; i < this.cols; i++) {
              this.colYs.push(0);
            }

            this.maxY = 0;
            this.horizontalColIndex = 0;
          };

          proto.measureColumns = function () {
            this.getContainerWidth();
            // if columnWidth is 0, default to outerWidth of first item
            if (!this.columnWidth) {
              var firstItem = this.items[0];
              var firstItemElem = firstItem && firstItem.element;
              // columnWidth fall back to item of first element
              this.columnWidth =
                (firstItemElem &&
                  getSize(firstItemElem).outerWidth) || // if first elem has no width, default to size of container
                this.containerWidth;
            }

            var columnWidth = (this.columnWidth += this.gutter);

            // calculate columns
            var containerWidth = this.containerWidth + this.gutter;
            var cols = containerWidth / columnWidth;
            // fix rounding errors, typically with gutters
            var excess = columnWidth - (containerWidth % columnWidth);
            // if overshoot is less than a pixel, round up, otherwise floor it
            var mathMethod = excess && excess < 1 ? 'round' : 'floor';
            cols = Math[mathMethod](cols);
            this.cols = Math.max(cols, 1);
          };

          proto.getContainerWidth = function () {
            // container is parent if fit width
            var isFitWidth = this._getOption('fitWidth');
            var container = isFitWidth
              ? this.element.parentNode
              : this.element;
            // check that this.size and size are there
            // IE8 triggers resize on body size change, so they might not be
            var size = getSize(container);
            this.containerWidth = size && size.innerWidth;
          };

          proto._getItemLayoutPosition = function (item) {
            item.getSize();
            // how many columns does this brick span
            var remainder = item.size.outerWidth % this.columnWidth;
            var mathMethod =
              remainder && remainder < 1 ? 'round' : 'ceil';
            // round if off by 1 pixel, otherwise use ceil
            var colSpan = Math[mathMethod](
              item.size.outerWidth / this.columnWidth
            );
            colSpan = Math.min(colSpan, this.cols);
            // use horizontal or top column position
            var colPosMethod = this.options.horizontalOrder
              ? '_getHorizontalColPosition'
              : '_getTopColPosition';
            var colPosition = this[colPosMethod](colSpan, item);
            // position the brick
            var position = {
              x: this.columnWidth * colPosition.col,
              y: colPosition.y,
            };
            // apply setHeight to necessary columns
            var setHeight = colPosition.y + item.size.outerHeight;
            var setMax = colSpan + colPosition.col;
            for (var i = colPosition.col; i < setMax; i++) {
              this.colYs[i] = setHeight;
            }

            return position;
          };

          proto._getTopColPosition = function (colSpan) {
            var colGroup = this._getTopColGroup(colSpan);
            // get the minimum Y value from the columns
            var minimumY = Math.min.apply(Math, colGroup);

            return {
              col: colGroup.indexOf(minimumY),
              y: minimumY,
            };
          };

          /**
           * @param {Number} colSpan - number of columns the element spans
           * @returns {Array} colGroup
           */
          proto._getTopColGroup = function (colSpan) {
            if (colSpan < 2) {
              // if brick spans only one column, use all the column Ys
              return this.colYs;
            }

            var colGroup = [];
            // how many different places could this brick fit horizontally
            var groupCount = this.cols + 1 - colSpan;
            // for each group potential horizontal position
            for (var i = 0; i < groupCount; i++) {
              colGroup[i] = this._getColGroupY(i, colSpan);
            }
            return colGroup;
          };

          proto._getColGroupY = function (col, colSpan) {
            if (colSpan < 2) {
              return this.colYs[col];
            }
            // make an array of colY values for that one group
            var groupColYs = this.colYs.slice(col, col + colSpan);
            // and get the max value of the array
            return Math.max.apply(Math, groupColYs);
          };

          // get column position based on horizontal index. #873
          proto._getHorizontalColPosition = function (colSpan, item) {
            var col = this.horizontalColIndex % this.cols;
            var isOver = colSpan > 1 && col + colSpan > this.cols;
            // shift to next row if item can't fit on current row
            col = isOver ? 0 : col;
            // don't let zero-size items take up space
            var hasSize =
              item.size.outerWidth && item.size.outerHeight;
            this.horizontalColIndex = hasSize
              ? col + colSpan
              : this.horizontalColIndex;

            return {
              col: col,
              y: this._getColGroupY(col, colSpan),
            };
          };

          proto._manageStamp = function (stamp) {
            var stampSize = getSize(stamp);
            var offset = this._getElementOffset(stamp);
            // get the columns that this stamp affects
            var isOriginLeft = this._getOption('originLeft');
            var firstX = isOriginLeft ? offset.left : offset.right;
            var lastX = firstX + stampSize.outerWidth;
            var firstCol = Math.floor(firstX / this.columnWidth);
            firstCol = Math.max(0, firstCol);
            var lastCol = Math.floor(lastX / this.columnWidth);
            // lastCol should not go over if multiple of columnWidth #425
            lastCol -= lastX % this.columnWidth ? 0 : 1;
            lastCol = Math.min(this.cols - 1, lastCol);
            // set colYs to bottom of the stamp

            var isOriginTop = this._getOption('originTop');
            var stampMaxY =
              (isOriginTop ? offset.top : offset.bottom) +
              stampSize.outerHeight;
            for (var i = firstCol; i <= lastCol; i++) {
              this.colYs[i] = Math.max(stampMaxY, this.colYs[i]);
            }
          };

          proto._getContainerSize = function () {
            this.maxY = Math.max.apply(Math, this.colYs);
            var size = {
              height: this.maxY,
            };

            if (this._getOption('fitWidth')) {
              size.width = this._getContainerFitWidth();
            }

            return size;
          };

          proto._getContainerFitWidth = function () {
            var unusedCols = 0;
            // count unused columns
            var i = this.cols;
            while (--i) {
              if (this.colYs[i] !== 0) {
                break;
              }
              unusedCols++;
            }
            // fit container to columns that have been used
            return (
              (this.cols - unusedCols) * this.columnWidth -
              this.gutter
            );
          };

          proto.needsResizeLayout = function () {
            var previousWidth = this.containerWidth;
            this.getContainerWidth();
            return previousWidth != this.containerWidth;
          };

          return Masonry;
        });

        /***/
      },

    /***/
    /*!******************************************!*\
  !*** ./node_modules/nanoevents/index.js ***!
  \******************************************/
    './node_modules/nanoevents/index.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        /**
         * Interface for event subscription.
         *
         * @example
         * var NanoEvents = require('nanoevents')
         *
         * class Ticker {
         *   constructor() {
         *     this.emitter = new NanoEvents()
         *   }
         *   on() {
         *     return this.emitter.on.apply(this.events, arguments)
         *   }
         *   tick() {
         *     this.emitter.emit('tick')
         *   }
         * }
         *
         * @alias NanoEvents
         * @class
         */
        (module.exports = function NanoEvents() {
          /**
           * Event names in keys and arrays with listeners in values.
           * @type {object}
           *
           * @example
           * Object.keys(ee.events)
           *
           * @alias NanoEvents#events
           */
          this.events = {};
        }).prototype = {
          /**
           * Calls each of the listeners registered for a given event.
           *
           * @param {string} event The event name.
           * @param {...*} arguments The arguments for listeners.
           *
           * @return {undefined}
           *
           * @example
           * ee.emit('tick', tickType, tickDuration)
           *
           * @alias NanoEvents#emit
           * @method
           */
          emit: function emit(event) {
            var args = [].slice.call(arguments, 1); // Array.prototype.call() returns empty array if context is not array-like
            [].slice
              .call(this.events[event] || [])
              .filter(function (i) {
                i.apply(null, args);
              });
          },

          /**
           * Add a listener for a given event.
           *
           * @param {string} event The event name.
           * @param {function} cb The listener function.
           *
           * @return {function} Unbind listener from event.
           *
           * @example
           * const unbind = ee.on('tick', (tickType, tickDuration) => {
           *   count += 1
           * })
           *
           * disable () {
           *   unbind()
           * }
           *
           * @alias NanoEvents#on
           * @method
           */
          on: function on(event, cb) {
            if (true && typeof cb !== 'function') {
              throw new Error('Listener must be a function');
            }

            (this.events[event] = this.events[event] || []).push(cb);

            return function () {
              this.events[event] = this.events[event].filter(
                function (i) {
                  return i !== cb;
                }
              );
            }.bind(this);
          },
        };

        /***/
      },

    /***/
    /*!***************************************!*\
  !*** ./node_modules/outlayer/item.js ***!
  \***************************************/
    './node_modules/outlayer/item.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_FACTORY__,
          __WEBPACK_AMD_DEFINE_ARRAY__,
          __WEBPACK_AMD_DEFINE_RESULT__;
        /**
         * Outlayer Item
         */

        (function (window, factory) {
          // universal module definition
          /* jshint strict: false */
          /* globals define, module, require */
          if (true) {
            // AMD - RequireJS
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(
                /*! ev-emitter/ev-emitter */
                './node_modules/ev-emitter/ev-emitter.js'
              ),
              __webpack_require__(
                /*! get-size/get-size */
                './node_modules/get-size/get-size.js'
              ),
            ]),
            (__WEBPACK_AMD_DEFINE_FACTORY__ = factory),
            (__WEBPACK_AMD_DEFINE_RESULT__ =
              typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function'
                ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(
                    exports,
                    __WEBPACK_AMD_DEFINE_ARRAY__
                  )
                : __WEBPACK_AMD_DEFINE_FACTORY__),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })(window, function factory(EvEmitter, getSize) {
          'use strict';

          // ----- helpers ----- //

          function isEmptyObj(obj) {
            for (var prop in obj) {
              return false;
            }
            prop = null;
            return true;
          }

          // -------------------------- CSS3 support -------------------------- //

          var docElemStyle = document.documentElement.style;

          var transitionProperty =
            typeof docElemStyle.transition == 'string'
              ? 'transition'
              : 'WebkitTransition';
          var transformProperty =
            typeof docElemStyle.transform == 'string'
              ? 'transform'
              : 'WebkitTransform';

          var transitionEndEvent = {
            WebkitTransition: 'webkitTransitionEnd',
            transition: 'transitionend',
          }[transitionProperty];

          // cache all vendor properties that could have vendor prefix
          var vendorProperties = {
            transform: transformProperty,
            transition: transitionProperty,
            transitionDuration: transitionProperty + 'Duration',
            transitionProperty: transitionProperty + 'Property',
            transitionDelay: transitionProperty + 'Delay',
          };

          // -------------------------- Item -------------------------- //

          function Item(element, layout) {
            if (!element) {
              return;
            }

            this.element = element;
            // parent layout class, i.e. Masonry, Isotope, or Packery
            this.layout = layout;
            this.position = {
              x: 0,
              y: 0,
            };

            this._create();
          }

          // inherit EvEmitter
          var proto = (Item.prototype = Object.create(
            EvEmitter.prototype
          ));
          proto.constructor = Item;

          proto._create = function () {
            // transition objects
            this._transn = {
              ingProperties: {},
              clean: {},
              onEnd: {},
            };

            this.css({
              position: 'absolute',
            });
          };

          // trigger specified handler for event type
          proto.handleEvent = function (event) {
            var method = 'on' + event.type;
            if (this[method]) {
              this[method](event);
            }
          };

          proto.getSize = function () {
            this.size = getSize(this.element);
          };

          /**
           * apply CSS styles to element
           * @param {Object} style
           */
          proto.css = function (style) {
            var elemStyle = this.element.style;

            for (var prop in style) {
              // use vendor property if available
              var supportedProp = vendorProperties[prop] || prop;
              elemStyle[supportedProp] = style[prop];
            }
          };

          // measure position, and sets it
          proto.getPosition = function () {
            var style = getComputedStyle(this.element);
            var isOriginLeft = this.layout._getOption('originLeft');
            var isOriginTop = this.layout._getOption('originTop');
            var xValue = style[isOriginLeft ? 'left' : 'right'];
            var yValue = style[isOriginTop ? 'top' : 'bottom'];
            var x = parseFloat(xValue);
            var y = parseFloat(yValue);
            // convert percent to pixels
            var layoutSize = this.layout.size;
            if (xValue.indexOf('%') != -1) {
              x = (x / 100) * layoutSize.width;
            }
            if (yValue.indexOf('%') != -1) {
              y = (y / 100) * layoutSize.height;
            }
            // clean up 'auto' or other non-integer values
            x = isNaN(x) ? 0 : x;
            y = isNaN(y) ? 0 : y;
            // remove padding from measurement
            x -= isOriginLeft
              ? layoutSize.paddingLeft
              : layoutSize.paddingRight;
            y -= isOriginTop
              ? layoutSize.paddingTop
              : layoutSize.paddingBottom;

            this.position.x = x;
            this.position.y = y;
          };

          // set settled position, apply padding
          proto.layoutPosition = function () {
            var layoutSize = this.layout.size;
            var style = {};
            var isOriginLeft = this.layout._getOption('originLeft');
            var isOriginTop = this.layout._getOption('originTop');

            // x
            var xPadding = isOriginLeft
              ? 'paddingLeft'
              : 'paddingRight';
            var xProperty = isOriginLeft ? 'left' : 'right';
            var xResetProperty = isOriginLeft ? 'right' : 'left';

            var x = this.position.x + layoutSize[xPadding];
            // set in percentage or pixels
            style[xProperty] = this.getXValue(x);
            // reset other property
            style[xResetProperty] = '';

            // y
            var yPadding = isOriginTop
              ? 'paddingTop'
              : 'paddingBottom';
            var yProperty = isOriginTop ? 'top' : 'bottom';
            var yResetProperty = isOriginTop ? 'bottom' : 'top';

            var y = this.position.y + layoutSize[yPadding];
            // set in percentage or pixels
            style[yProperty] = this.getYValue(y);
            // reset other property
            style[yResetProperty] = '';

            this.css(style);
            this.emitEvent('layout', [this]);
          };

          proto.getXValue = function (x) {
            var isHorizontal = this.layout._getOption('horizontal');
            return this.layout.options.percentPosition &&
              !isHorizontal
              ? (x / this.layout.size.width) * 100 + '%'
              : x + 'px';
          };

          proto.getYValue = function (y) {
            var isHorizontal = this.layout._getOption('horizontal');
            return this.layout.options.percentPosition && isHorizontal
              ? (y / this.layout.size.height) * 100 + '%'
              : y + 'px';
          };

          proto._transitionTo = function (x, y) {
            this.getPosition();
            // get current x & y from top/left
            var curX = this.position.x;
            var curY = this.position.y;

            var didNotMove =
              x == this.position.x && y == this.position.y;

            // save end position
            this.setPosition(x, y);

            // if did not move and not transitioning, just go to layout
            if (didNotMove && !this.isTransitioning) {
              this.layoutPosition();
              return;
            }

            var transX = x - curX;
            var transY = y - curY;
            var transitionStyle = {};
            transitionStyle.transform = this.getTranslate(
              transX,
              transY
            );

            this.transition({
              to: transitionStyle,
              onTransitionEnd: {
                transform: this.layoutPosition,
              },
              isCleaning: true,
            });
          };

          proto.getTranslate = function (x, y) {
            // flip cooridinates if origin on right or bottom
            var isOriginLeft = this.layout._getOption('originLeft');
            var isOriginTop = this.layout._getOption('originTop');
            x = isOriginLeft ? x : -x;
            y = isOriginTop ? y : -y;
            return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
          };

          // non transition + transform support
          proto.goTo = function (x, y) {
            this.setPosition(x, y);
            this.layoutPosition();
          };

          proto.moveTo = proto._transitionTo;

          proto.setPosition = function (x, y) {
            this.position.x = parseFloat(x);
            this.position.y = parseFloat(y);
          };

          // ----- transition ----- //

          /**
           * @param {Object} style - CSS
           * @param {Function} onTransitionEnd
           */

          // non transition, just trigger callback
          proto._nonTransition = function (args) {
            this.css(args.to);
            if (args.isCleaning) {
              this._removeStyles(args.to);
            }
            for (var prop in args.onTransitionEnd) {
              args.onTransitionEnd[prop].call(this);
            }
          };

          /**
           * proper transition
           * @param {Object} args - arguments
           *   @param {Object} to - style to transition to
           *   @param {Object} from - style to start transition from
           *   @param {Boolean} isCleaning - removes transition styles after transition
           *   @param {Function} onTransitionEnd - callback
           */
          proto.transition = function (args) {
            // redirect to nonTransition if no transition duration
            if (!parseFloat(this.layout.options.transitionDuration)) {
              this._nonTransition(args);
              return;
            }

            var _transition = this._transn;
            // keep track of onTransitionEnd callback by css property
            for (var prop in args.onTransitionEnd) {
              _transition.onEnd[prop] = args.onTransitionEnd[prop];
            }
            // keep track of properties that are transitioning
            for (prop in args.to) {
              _transition.ingProperties[prop] = true;
              // keep track of properties to clean up when transition is done
              if (args.isCleaning) {
                _transition.clean[prop] = true;
              }
            }

            // set from styles
            if (args.from) {
              this.css(args.from);
              // force redraw. http://blog.alexmaccaw.com/css-transitions
              var h = this.element.offsetHeight;
              // hack for JSHint to hush about unused var
              h = null;
            }
            // enable transition
            this.enableTransition(args.to);
            // set styles that are transitioning
            this.css(args.to);

            this.isTransitioning = true;
          };

          // dash before all cap letters, including first for
          // WebkitTransform => -webkit-transform
          function toDashedAll(str) {
            return str.replace(/([A-Z])/g, function ($1) {
              return '-' + $1.toLowerCase();
            });
          }

          var transitionProps =
            'opacity,' + toDashedAll(transformProperty);

          proto.enableTransition = function () /* style */
          {
            // HACK changing transitionProperty during a transition
            // will cause transition to jump
            if (this.isTransitioning) {
              return;
            }

            // make `transition: foo, bar, baz` from style object
            // HACK un-comment this when enableTransition can work
            // while a transition is happening
            // var transitionValues = [];
            // for ( var prop in style ) {
            //   // dash-ify camelCased properties like WebkitTransition
            //   prop = vendorProperties[ prop ] || prop;
            //   transitionValues.push( toDashedAll( prop ) );
            // }
            // munge number to millisecond, to match stagger
            var duration = this.layout.options.transitionDuration;
            duration =
              typeof duration == 'number'
                ? duration + 'ms'
                : duration;
            // enable transition styles
            this.css({
              transitionProperty: transitionProps,
              transitionDuration: duration,
              transitionDelay: this.staggerDelay || 0,
            });
            // listen for transition end event
            this.element.addEventListener(
              transitionEndEvent,
              this,
              false
            );
          };

          // ----- events ----- //

          proto.onwebkitTransitionEnd = function (event) {
            this.ontransitionend(event);
          };

          proto.onotransitionend = function (event) {
            this.ontransitionend(event);
          };

          // properties that I munge to make my life easier
          var dashedVendorProperties = {
            '-webkit-transform': 'transform',
          };

          proto.ontransitionend = function (event) {
            // disregard bubbled events from children
            if (event.target !== this.element) {
              return;
            }
            var _transition = this._transn;
            // get property name of transitioned property, convert to prefix-free
            var propertyName =
              dashedVendorProperties[event.propertyName] ||
              event.propertyName;

            // remove property that has completed transitioning
            delete _transition.ingProperties[propertyName];
            // check if any properties are still transitioning
            if (isEmptyObj(_transition.ingProperties)) {
              // all properties have completed transitioning
              this.disableTransition();
            }
            // clean style
            if (propertyName in _transition.clean) {
              // clean up style
              this.element.style[event.propertyName] = '';
              delete _transition.clean[propertyName];
            }
            // trigger onTransitionEnd callback
            if (propertyName in _transition.onEnd) {
              var onTransitionEnd = _transition.onEnd[propertyName];
              onTransitionEnd.call(this);
              delete _transition.onEnd[propertyName];
            }

            this.emitEvent('transitionEnd', [this]);
          };

          proto.disableTransition = function () {
            this.removeTransitionStyles();
            this.element.removeEventListener(
              transitionEndEvent,
              this,
              false
            );
            this.isTransitioning = false;
          };

          /**
           * removes style property from element
           * @param {Object} style
           **/
          proto._removeStyles = function (style) {
            // clean up transition styles
            var cleanStyle = {};
            for (var prop in style) {
              cleanStyle[prop] = '';
            }
            this.css(cleanStyle);
          };

          var cleanTransitionStyle = {
            transitionProperty: '',
            transitionDuration: '',
            transitionDelay: '',
          };

          proto.removeTransitionStyles = function () {
            // remove transition
            this.css(cleanTransitionStyle);
          };

          // ----- stagger ----- //

          proto.stagger = function (delay) {
            delay = isNaN(delay) ? 0 : delay;
            this.staggerDelay = delay + 'ms';
          };

          // ----- show/hide/remove ----- //

          // remove element from DOM
          proto.removeElem = function () {
            this.element.parentNode.removeChild(this.element);
            // remove display: none
            this.css({
              display: '',
            });
            this.emitEvent('remove', [this]);
          };

          proto.remove = function () {
            // just remove element if no transition support or no transition
            if (
              !transitionProperty ||
              !parseFloat(this.layout.options.transitionDuration)
            ) {
              this.removeElem();
              return;
            }

            // start transition
            this.once('transitionEnd', function () {
              this.removeElem();
            });
            this.hide();
          };

          proto.reveal = function () {
            delete this.isHidden;
            // remove display: none
            this.css({
              display: '',
            });

            var options = this.layout.options;

            var onTransitionEnd = {};
            var transitionEndProperty =
              this.getHideRevealTransitionEndProperty('visibleStyle');
            onTransitionEnd[transitionEndProperty] =
              this.onRevealTransitionEnd;

            this.transition({
              from: options.hiddenStyle,
              to: options.visibleStyle,
              isCleaning: true,
              onTransitionEnd: onTransitionEnd,
            });
          };

          proto.onRevealTransitionEnd = function () {
            // check if still visible
            // during transition, item may have been hidden
            if (!this.isHidden) {
              this.emitEvent('reveal');
            }
          };

          /**
           * get style property use for hide/reveal transition end
           * @param {String} styleProperty - hiddenStyle/visibleStyle
           * @returns {String}
           */
          proto.getHideRevealTransitionEndProperty = function (
            styleProperty
          ) {
            var optionStyle = this.layout.options[styleProperty];
            // use opacity
            if (optionStyle.opacity) {
              return 'opacity';
            }
            // get first property
            for (var prop in optionStyle) {
              return prop;
            }
          };

          proto.hide = function () {
            // set flag
            this.isHidden = true;
            // remove display: none
            this.css({
              display: '',
            });

            var options = this.layout.options;

            var onTransitionEnd = {};
            var transitionEndProperty =
              this.getHideRevealTransitionEndProperty('hiddenStyle');
            onTransitionEnd[transitionEndProperty] =
              this.onHideTransitionEnd;

            this.transition({
              from: options.visibleStyle,
              to: options.hiddenStyle,
              // keep hidden stuff hidden
              isCleaning: true,
              onTransitionEnd: onTransitionEnd,
            });
          };

          proto.onHideTransitionEnd = function () {
            // check if still hidden
            // during transition, item may have been un-hidden
            if (this.isHidden) {
              this.css({
                display: 'none',
              });
              this.emitEvent('hide');
            }
          };

          proto.destroy = function () {
            this.css({
              position: '',
              left: '',
              right: '',
              top: '',
              bottom: '',
              transition: '',
              transform: '',
            });
          };

          return Item;
        });

        /***/
      },

    /***/
    /*!*******************************************!*\
  !*** ./node_modules/outlayer/outlayer.js ***!
  \*******************************************/
    './node_modules/outlayer/outlayer.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__,
          __WEBPACK_AMD_DEFINE_RESULT__;
        /*!
         * Outlayer v2.1.1
         * the brains and guts of a layout library
         * MIT license
         */

        (function (window, factory) {
          'use strict';
          // universal module definition
          /* jshint strict: false */
          /* globals define, module, require */
          if (true) {
            // AMD - RequireJS
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(
                /*! ev-emitter/ev-emitter */
                './node_modules/ev-emitter/ev-emitter.js'
              ),
              __webpack_require__(
                /*! get-size/get-size */
                './node_modules/get-size/get-size.js'
              ),
              __webpack_require__(
                /*! fizzy-ui-utils/utils */
                './node_modules/fizzy-ui-utils/utils.js'
              ),
              __webpack_require__(
                /*! ./item */
                './node_modules/outlayer/item.js'
              ),
            ]),
            (__WEBPACK_AMD_DEFINE_RESULT__ = function (
              EvEmitter,
              getSize,
              utils,
              Item
            ) {
              return factory(window, EvEmitter, getSize, utils, Item);
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })(
          window,
          function factory(window, EvEmitter, getSize, utils, Item) {
            'use strict';

            // ----- vars ----- //

            var console = window.console;
            var jQuery = window.jQuery;
            var noop = function () {};

            // -------------------------- Outlayer -------------------------- //

            // globally unique identifiers
            var GUID = 0;
            // internal store of all Outlayer intances
            var instances = {};

            /**
             * @param {Element, String} element
             * @param {Object} options
             * @constructor
             */
            function Outlayer(element, options) {
              var queryElement = utils.getQueryElement(element);
              if (!queryElement) {
                if (console) {
                  console.error(
                    'Bad element for ' +
                      this.constructor.namespace +
                      ': ' +
                      (queryElement || element)
                  );
                }
                return;
              }
              this.element = queryElement;
              // add jQuery
              if (jQuery) {
                this.$element = jQuery(this.element);
              }

              // options
              this.options = utils.extend(
                {},
                this.constructor.defaults
              );
              this.option(options);

              // add id for Outlayer.getFromElement
              var id = ++GUID;
              this.element.outlayerGUID = id;
              // expando
              instances[id] = this;
              // associate via id

              // kick it off
              this._create();

              var isInitLayout = this._getOption('initLayout');
              if (isInitLayout) {
                this.layout();
              }
            }

            // settings are for internal use only
            Outlayer.namespace = 'outlayer';
            Outlayer.Item = Item;

            // default options
            Outlayer.defaults = {
              containerStyle: {
                position: 'relative',
              },
              initLayout: true,
              originLeft: true,
              originTop: true,
              resize: true,
              resizeContainer: true,
              // item options
              transitionDuration: '0.4s',
              hiddenStyle: {
                opacity: 0,
                transform: 'scale(0.001)',
              },
              visibleStyle: {
                opacity: 1,
                transform: 'scale(1)',
              },
            };

            var proto = Outlayer.prototype;
            // inherit EvEmitter
            utils.extend(proto, EvEmitter.prototype);

            /**
             * set options
             * @param {Object} opts
             */
            proto.option = function (opts) {
              utils.extend(this.options, opts);
            };

            /**
             * get backwards compatible option value, check old name
             */
            proto._getOption = function (option) {
              var oldOption = this.constructor.compatOptions[option];
              return oldOption &&
                this.options[oldOption] !== undefined
                ? this.options[oldOption]
                : this.options[option];
            };

            Outlayer.compatOptions = {
              // currentName: oldName
              initLayout: 'isInitLayout',
              horizontal: 'isHorizontal',
              layoutInstant: 'isLayoutInstant',
              originLeft: 'isOriginLeft',
              originTop: 'isOriginTop',
              resize: 'isResizeBound',
              resizeContainer: 'isResizingContainer',
            };

            proto._create = function () {
              // get items from children
              this.reloadItems();
              // elements that affect layout, but are not laid out
              this.stamps = [];
              this.stamp(this.options.stamp);
              // set container style
              utils.extend(
                this.element.style,
                this.options.containerStyle
              );

              // bind resize method
              var canBindResize = this._getOption('resize');
              if (canBindResize) {
                this.bindResize();
              }
            };

            // goes through all children again and gets bricks in proper order
            proto.reloadItems = function () {
              // collection of item elements
              this.items = this._itemize(this.element.children);
            };

            /**
             * turn elements into Outlayer.Items to be used in layout
             * @param {Array or NodeList or HTMLElement} elems
             * @returns {Array} items - collection of new Outlayer Items
             */
            proto._itemize = function (elems) {
              var itemElems = this._filterFindItemElements(elems);
              var Item = this.constructor.Item;

              // create new Outlayer Items for collection
              var items = [];
              for (var i = 0; i < itemElems.length; i++) {
                var elem = itemElems[i];
                var item = new Item(elem, this);
                items.push(item);
              }

              return items;
            };

            /**
             * get item elements to be used in layout
             * @param {Array or NodeList or HTMLElement} elems
             * @returns {Array} items - item elements
             */
            proto._filterFindItemElements = function (elems) {
              return utils.filterFindElements(
                elems,
                this.options.itemSelector
              );
            };

            /**
             * getter method for getting item elements
             * @returns {Array} elems - collection of item elements
             */
            proto.getItemElements = function () {
              return this.items.map(function (item) {
                return item.element;
              });
            };

            // ----- init & layout ----- //

            /**
             * lays out all items
             */
            proto.layout = function () {
              this._resetLayout();
              this._manageStamps();

              // don't animate first layout
              var layoutInstant = this._getOption('layoutInstant');
              var isInstant =
                layoutInstant !== undefined
                  ? layoutInstant
                  : !this._isLayoutInited;
              this.layoutItems(this.items, isInstant);

              // flag for initalized
              this._isLayoutInited = true;
            };

            // _init is alias for layout
            proto._init = proto.layout;

            /**
             * logic before any new layout
             */
            proto._resetLayout = function () {
              this.getSize();
            };

            proto.getSize = function () {
              this.size = getSize(this.element);
            };

            /**
             * get measurement from option, for columnWidth, rowHeight, gutter
             * if option is String -> get element from selector string, & get size of element
             * if option is Element -> get size of element
             * else use option as a number
             *
             * @param {String} measurement
             * @param {String} size - width or height
             * @private
             */
            proto._getMeasurement = function (measurement, size) {
              var option = this.options[measurement];
              var elem;
              if (!option) {
                // default to 0
                this[measurement] = 0;
              } else {
                // use option as an element
                if (typeof option == 'string') {
                  elem = this.element.querySelector(option);
                } else if (option instanceof HTMLElement) {
                  elem = option;
                }
                // use size of element, if element
                this[measurement] = elem
                  ? getSize(elem)[size]
                  : option;
              }
            };

            /**
             * layout a collection of item elements
             * @api public
             */
            proto.layoutItems = function (items, isInstant) {
              items = this._getItemsForLayout(items);

              this._layoutItems(items, isInstant);

              this._postLayout();
            };

            /**
             * get the items to be laid out
             * you may want to skip over some items
             * @param {Array} items
             * @returns {Array} items
             */
            proto._getItemsForLayout = function (items) {
              return items.filter(function (item) {
                return !item.isIgnored;
              });
            };

            /**
             * layout items
             * @param {Array} items
             * @param {Boolean} isInstant
             */
            proto._layoutItems = function (items, isInstant) {
              this._emitCompleteOnItems('layout', items);

              if (!items || !items.length) {
                // no items, emit event with empty array
                return;
              }

              var queue = [];

              items.forEach(function (item) {
                // get x/y object from method
                var position = this._getItemLayoutPosition(item);
                // enqueue
                position.item = item;
                position.isInstant =
                  isInstant || item.isLayoutInstant;
                queue.push(position);
              }, this);

              this._processLayoutQueue(queue);
            };

            /**
             * get item layout position
             * @param {Outlayer.Item} item
             * @returns {Object} x and y position
             */
            proto._getItemLayoutPosition = function () /* item */
            {
              return {
                x: 0,
                y: 0,
              };
            };

            /**
             * iterate over array and position each item
             * Reason being - separating this logic prevents 'layout invalidation'
             * thx @paul_irish
             * @param {Array} queue
             */
            proto._processLayoutQueue = function (queue) {
              this.updateStagger();
              queue.forEach(function (obj, i) {
                this._positionItem(
                  obj.item,
                  obj.x,
                  obj.y,
                  obj.isInstant,
                  i
                );
              }, this);
            };

            // set stagger from option in milliseconds number
            proto.updateStagger = function () {
              var stagger = this.options.stagger;
              if (stagger === null || stagger === undefined) {
                this.stagger = 0;
                return;
              }
              this.stagger = getMilliseconds(stagger);
              return this.stagger;
            };

            /**
             * Sets position of item in DOM
             * @param {Outlayer.Item} item
             * @param {Number} x - horizontal position
             * @param {Number} y - vertical position
             * @param {Boolean} isInstant - disables transitions
             */
            proto._positionItem = function (
              item,
              x,
              y,
              isInstant,
              i
            ) {
              if (isInstant) {
                // if not transition, just set CSS
                item.goTo(x, y);
              } else {
                item.stagger(i * this.stagger);
                item.moveTo(x, y);
              }
            };

            /**
             * Any logic you want to do after each layout,
             * i.e. size the container
             */
            proto._postLayout = function () {
              this.resizeContainer();
            };

            proto.resizeContainer = function () {
              var isResizingContainer =
                this._getOption('resizeContainer');
              if (!isResizingContainer) {
                return;
              }
              var size = this._getContainerSize();
              if (size) {
                this._setContainerMeasure(size.width, true);
                this._setContainerMeasure(size.height, false);
              }
            };

            /**
             * Sets width or height of container if returned
             * @returns {Object} size
             *   @param {Number} width
             *   @param {Number} height
             */
            proto._getContainerSize = noop;

            /**
             * @param {Number} measure - size of width or height
             * @param {Boolean} isWidth
             */
            proto._setContainerMeasure = function (measure, isWidth) {
              if (measure === undefined) {
                return;
              }

              var elemSize = this.size;
              // add padding and border width if border box
              if (elemSize.isBorderBox) {
                measure += isWidth
                  ? elemSize.paddingLeft +
                    elemSize.paddingRight +
                    elemSize.borderLeftWidth +
                    elemSize.borderRightWidth
                  : elemSize.paddingBottom +
                    elemSize.paddingTop +
                    elemSize.borderTopWidth +
                    elemSize.borderBottomWidth;
              }

              measure = Math.max(measure, 0);
              this.element.style[isWidth ? 'width' : 'height'] =
                measure + 'px';
            };

            /**
             * emit eventComplete on a collection of items events
             * @param {String} eventName
             * @param {Array} items - Outlayer.Items
             */
            proto._emitCompleteOnItems = function (eventName, items) {
              var _this = this;
              function onComplete() {
                _this.dispatchEvent(eventName + 'Complete', null, [
                  items,
                ]);
              }

              var count = items.length;
              if (!items || !count) {
                onComplete();
                return;
              }

              var doneCount = 0;
              function tick() {
                doneCount++;
                if (doneCount == count) {
                  onComplete();
                }
              }

              // bind callback
              items.forEach(function (item) {
                item.once(eventName, tick);
              });
            };

            /**
             * emits events via EvEmitter and jQuery events
             * @param {String} type - name of event
             * @param {Event} event - original event
             * @param {Array} args - extra arguments
             */
            proto.dispatchEvent = function (type, event, args) {
              // add original event to arguments
              var emitArgs = event ? [event].concat(args) : args;
              this.emitEvent(type, emitArgs);

              if (jQuery) {
                // set this.$element
                this.$element = this.$element || jQuery(this.element);
                if (event) {
                  // create jQuery event
                  var $event = jQuery.Event(event);
                  $event.type = type;
                  this.$element.trigger($event, args);
                } else {
                  // just trigger with type if no event available
                  this.$element.trigger(type, args);
                }
              }
            };

            // -------------------------- ignore & stamps -------------------------- //

            /**
             * keep item in collection, but do not lay it out
             * ignored items do not get skipped in layout
             * @param {Element} elem
             */
            proto.ignore = function (elem) {
              var item = this.getItem(elem);
              if (item) {
                item.isIgnored = true;
              }
            };

            /**
             * return item to layout collection
             * @param {Element} elem
             */
            proto.unignore = function (elem) {
              var item = this.getItem(elem);
              if (item) {
                delete item.isIgnored;
              }
            };

            /**
             * adds elements to stamps
             * @param {NodeList, Array, Element, or String} elems
             */
            proto.stamp = function (elems) {
              elems = this._find(elems);
              if (!elems) {
                return;
              }

              this.stamps = this.stamps.concat(elems);
              // ignore
              elems.forEach(this.ignore, this);
            };

            /**
             * removes elements to stamps
             * @param {NodeList, Array, or Element} elems
             */
            proto.unstamp = function (elems) {
              elems = this._find(elems);
              if (!elems) {
                return;
              }

              elems.forEach(function (elem) {
                // filter out removed stamp elements
                utils.removeFrom(this.stamps, elem);
                this.unignore(elem);
              }, this);
            };

            /**
             * finds child elements
             * @param {NodeList, Array, Element, or String} elems
             * @returns {Array} elems
             */
            proto._find = function (elems) {
              if (!elems) {
                return;
              }
              // if string, use argument as selector string
              if (typeof elems == 'string') {
                elems = this.element.querySelectorAll(elems);
              }
              elems = utils.makeArray(elems);
              return elems;
            };

            proto._manageStamps = function () {
              if (!this.stamps || !this.stamps.length) {
                return;
              }

              this._getBoundingRect();

              this.stamps.forEach(this._manageStamp, this);
            };

            // update boundingLeft / Top
            proto._getBoundingRect = function () {
              // get bounding rect for container element
              var boundingRect = this.element.getBoundingClientRect();
              var size = this.size;
              this._boundingRect = {
                left:
                  boundingRect.left +
                  size.paddingLeft +
                  size.borderLeftWidth,
                top:
                  boundingRect.top +
                  size.paddingTop +
                  size.borderTopWidth,
                right:
                  boundingRect.right -
                  (size.paddingRight + size.borderRightWidth),
                bottom:
                  boundingRect.bottom -
                  (size.paddingBottom + size.borderBottomWidth),
              };
            };

            /**
             * @param {Element} stamp
             **/
            proto._manageStamp = noop;

            /**
             * get x/y position of element relative to container element
             * @param {Element} elem
             * @returns {Object} offset - has left, top, right, bottom
             */
            proto._getElementOffset = function (elem) {
              var boundingRect = elem.getBoundingClientRect();
              var thisRect = this._boundingRect;
              var size = getSize(elem);
              var offset = {
                left:
                  boundingRect.left - thisRect.left - size.marginLeft,
                top: boundingRect.top - thisRect.top - size.marginTop,
                right:
                  thisRect.right -
                  boundingRect.right -
                  size.marginRight,
                bottom:
                  thisRect.bottom -
                  boundingRect.bottom -
                  size.marginBottom,
              };
              return offset;
            };

            // -------------------------- resize -------------------------- //

            // enable event handlers for listeners
            // i.e. resize -> onresize
            proto.handleEvent = utils.handleEvent;

            /**
             * Bind layout to window resizing
             */
            proto.bindResize = function () {
              window.addEventListener('resize', this);
              this.isResizeBound = true;
            };

            /**
             * Unbind layout to window resizing
             */
            proto.unbindResize = function () {
              window.removeEventListener('resize', this);
              this.isResizeBound = false;
            };

            proto.onresize = function () {
              this.resize();
            };

            utils.debounceMethod(Outlayer, 'onresize', 100);

            proto.resize = function () {
              // don't trigger if size did not change
              // or if resize was unbound. See #9
              if (!this.isResizeBound || !this.needsResizeLayout()) {
                return;
              }

              this.layout();
            };

            /**
             * check if layout is needed post layout
             * @returns Boolean
             */
            proto.needsResizeLayout = function () {
              var size = getSize(this.element);
              // check that this.size and size are there
              // IE8 triggers resize on body size change, so they might not be
              var hasSizes = this.size && size;
              return (
                hasSizes && size.innerWidth !== this.size.innerWidth
              );
            };

            // -------------------------- methods -------------------------- //

            /**
             * add items to Outlayer instance
             * @param {Array or NodeList or Element} elems
             * @returns {Array} items - Outlayer.Items
             **/
            proto.addItems = function (elems) {
              var items = this._itemize(elems);
              // add items to collection
              if (items.length) {
                this.items = this.items.concat(items);
              }
              return items;
            };

            /**
             * Layout newly-appended item elements
             * @param {Array or NodeList or Element} elems
             */
            proto.appended = function (elems) {
              var items = this.addItems(elems);
              if (!items.length) {
                return;
              }
              // layout and reveal just the new items
              this.layoutItems(items, true);
              this.reveal(items);
            };

            /**
             * Layout prepended elements
             * @param {Array or NodeList or Element} elems
             */
            proto.prepended = function (elems) {
              var items = this._itemize(elems);
              if (!items.length) {
                return;
              }
              // add items to beginning of collection
              var previousItems = this.items.slice(0);
              this.items = items.concat(previousItems);
              // start new layout
              this._resetLayout();
              this._manageStamps();
              // layout new stuff without transition
              this.layoutItems(items, true);
              this.reveal(items);
              // layout previous items
              this.layoutItems(previousItems);
            };

            /**
             * reveal a collection of items
             * @param {Array of Outlayer.Items} items
             */
            proto.reveal = function (items) {
              this._emitCompleteOnItems('reveal', items);
              if (!items || !items.length) {
                return;
              }
              var stagger = this.updateStagger();
              items.forEach(function (item, i) {
                item.stagger(i * stagger);
                item.reveal();
              });
            };

            /**
             * hide a collection of items
             * @param {Array of Outlayer.Items} items
             */
            proto.hide = function (items) {
              this._emitCompleteOnItems('hide', items);
              if (!items || !items.length) {
                return;
              }
              var stagger = this.updateStagger();
              items.forEach(function (item, i) {
                item.stagger(i * stagger);
                item.hide();
              });
            };

            /**
             * reveal item elements
             * @param {Array}, {Element}, {NodeList} items
             */
            proto.revealItemElements = function (elems) {
              var items = this.getItems(elems);
              this.reveal(items);
            };

            /**
             * hide item elements
             * @param {Array}, {Element}, {NodeList} items
             */
            proto.hideItemElements = function (elems) {
              var items = this.getItems(elems);
              this.hide(items);
            };

            /**
             * get Outlayer.Item, given an Element
             * @param {Element} elem
             * @param {Function} callback
             * @returns {Outlayer.Item} item
             */
            proto.getItem = function (elem) {
              // loop through items to get the one that matches
              for (var i = 0; i < this.items.length; i++) {
                var item = this.items[i];
                if (item.element == elem) {
                  // return item
                  return item;
                }
              }
            };

            /**
             * get collection of Outlayer.Items, given Elements
             * @param {Array} elems
             * @returns {Array} items - Outlayer.Items
             */
            proto.getItems = function (elems) {
              elems = utils.makeArray(elems);
              var items = [];
              elems.forEach(function (elem) {
                var item = this.getItem(elem);
                if (item) {
                  items.push(item);
                }
              }, this);

              return items;
            };

            /**
             * remove element(s) from instance and DOM
             * @param {Array or NodeList or Element} elems
             */
            proto.remove = function (elems) {
              var removeItems = this.getItems(elems);

              this._emitCompleteOnItems('remove', removeItems);

              // bail if no items to remove
              if (!removeItems || !removeItems.length) {
                return;
              }

              removeItems.forEach(function (item) {
                item.remove();
                // remove item from collection
                utils.removeFrom(this.items, item);
              }, this);
            };

            // ----- destroy ----- //

            // remove and disable Outlayer instance
            proto.destroy = function () {
              // clean up dynamic styles
              var style = this.element.style;
              style.height = '';
              style.position = '';
              style.width = '';
              // destroy items
              this.items.forEach(function (item) {
                item.destroy();
              });

              this.unbindResize();

              var id = this.element.outlayerGUID;
              delete instances[id];
              // remove reference to instance by id
              delete this.element.outlayerGUID;
              // remove data for jQuery
              if (jQuery) {
                jQuery.removeData(
                  this.element,
                  this.constructor.namespace
                );
              }
            };

            // -------------------------- data -------------------------- //

            /**
             * get Outlayer instance from element
             * @param {Element} elem
             * @returns {Outlayer}
             */
            Outlayer.data = function (elem) {
              elem = utils.getQueryElement(elem);
              var id = elem && elem.outlayerGUID;
              return id && instances[id];
            };

            // -------------------------- create Outlayer class -------------------------- //

            /**
             * create a layout class
             * @param {String} namespace
             */
            Outlayer.create = function (namespace, options) {
              // sub-class Outlayer
              var Layout = subclass(Outlayer);
              // apply new options and compatOptions
              Layout.defaults = utils.extend({}, Outlayer.defaults);
              utils.extend(Layout.defaults, options);
              Layout.compatOptions = utils.extend(
                {},
                Outlayer.compatOptions
              );

              Layout.namespace = namespace;

              Layout.data = Outlayer.data;

              // sub-class Item
              Layout.Item = subclass(Item);

              // -------------------------- declarative -------------------------- //

              utils.htmlInit(Layout, namespace);

              // -------------------------- jQuery bridge -------------------------- //

              // make into jQuery plugin
              if (jQuery && jQuery.bridget) {
                jQuery.bridget(namespace, Layout);
              }

              return Layout;
            };

            function subclass(Parent) {
              function SubClass() {
                Parent.apply(this, arguments);
              }

              SubClass.prototype = Object.create(Parent.prototype);
              SubClass.prototype.constructor = SubClass;

              return SubClass;
            }

            // ----- helpers ----- //

            // how many milliseconds are in each unit
            var msUnits = {
              ms: 1,
              s: 1000,
            };

            // munge time-like parameter into millisecond number
            // '0.4s' -> 40
            function getMilliseconds(time) {
              if (typeof time == 'number') {
                return time;
              }
              var matches = time.match(/(^\d*\.?\d*)(\w*)/);
              var num = matches && matches[1];
              var unit = matches && matches[2];
              if (!num.length) {
                return 0;
              }
              num = parseFloat(num);
              var mult = msUnits[unit] || 1;
              return num * mult;
            }

            // ----- fin ----- //

            // back in global
            Outlayer.Item = Item;

            return Outlayer;
          }
        );

        /***/
      },

    /***/
    /*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
    './node_modules/process/browser.js':
      /*! no static exports found */
      /***/
      function (module, exports) {
        // shim for using process in browser
        var process = (module.exports = {});

        // cached from whatever global is present so that test runners that stub it
        // don't break things.  But we need to wrap it in a try catch in case it is
        // wrapped in strict mode code which doesn't define any globals.  It's inside a
        // function because try/catches deoptimize in certain engines.

        var cachedSetTimeout;
        var cachedClearTimeout;

        function defaultSetTimout() {
          throw new Error('setTimeout has not been defined');
        }
        function defaultClearTimeout() {
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
        })();
        function runTimeout(fun) {
          if (cachedSetTimeout === setTimeout) {
            //normal enviroments in sane situations
            return setTimeout(fun, 0);
          }
          // if setTimeout wasn't available but was latter defined
          if (
            (cachedSetTimeout === defaultSetTimout ||
              !cachedSetTimeout) &&
            setTimeout
          ) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
          }
          try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedSetTimeout(fun, 0);
          } catch (e) {
            try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
              return cachedSetTimeout.call(null, fun, 0);
            } catch (e) {
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
          if (
            (cachedClearTimeout === defaultClearTimeout ||
              !cachedClearTimeout) &&
            clearTimeout
          ) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
          }
          try {
            // when when somebody has screwed with setTimeout but no I.E. maddness
            return cachedClearTimeout(marker);
          } catch (e) {
            try {
              // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
              return cachedClearTimeout.call(null, marker);
            } catch (e) {
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
          while (len) {
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
        process.version = '';
        // empty string to avoid regexp issues
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

        process.listeners = function (name) {
          return [];
        };

        process.binding = function (name) {
          throw new Error('process.binding is not supported');
        };

        process.cwd = function () {
          return '/';
        };
        process.chdir = function (dir) {
          throw new Error('process.chdir is not supported');
        };
        process.umask = function () {
          return 0;
        };

        /***/
      },

    /***/
    /*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
    './node_modules/setimmediate/setImmediate.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function (global, process) {
          (function (global, undefined) {
            'use strict';

            if (global.setImmediate) {
              return;
            }

            var nextHandle = 1;
            // Spec says greater than zero
            var tasksByHandle = {};
            var currentlyRunningATask = false;
            var doc = global.document;
            var registerImmediate;

            function setImmediate(callback) {
              // Callback can either be a function or a string
              if (typeof callback !== 'function') {
                callback = new Function('' + callback);
              }
              // Copy function arguments
              var args = new Array(arguments.length - 1);
              for (var i = 0; i < args.length; i++) {
                args[i] = arguments[i + 1];
              }
              // Store and register the task
              var task = {
                callback: callback,
                args: args,
              };
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
              registerImmediate = function (handle) {
                process.nextTick(function () {
                  runIfPresent(handle);
                });
              };
            }

            function canUsePostMessage() {
              // The test against `importScripts` prevents this implementation from being installed inside a web worker,
              // where `global.postMessage` means something completely different and can't be used for this purpose.
              if (global.postMessage && !global.importScripts) {
                var postMessageIsAsynchronous = true;
                var oldOnMessage = global.onmessage;
                global.onmessage = function () {
                  postMessageIsAsynchronous = false;
                };
                global.postMessage('', '*');
                global.onmessage = oldOnMessage;
                return postMessageIsAsynchronous;
              }
            }

            function installPostMessageImplementation() {
              // Installs an event handler on `global` for the `message` event: see
              // * https://developer.mozilla.org/en/DOM/window.postMessage
              // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

              var messagePrefix =
                'setImmediate$' + Math.random() + '$';
              var onGlobalMessage = function (event) {
                if (
                  event.source === global &&
                  typeof event.data === 'string' &&
                  event.data.indexOf(messagePrefix) === 0
                ) {
                  runIfPresent(
                    +event.data.slice(messagePrefix.length)
                  );
                }
              };

              if (global.addEventListener) {
                global.addEventListener(
                  'message',
                  onGlobalMessage,
                  false
                );
              } else {
                global.attachEvent('onmessage', onGlobalMessage);
              }

              registerImmediate = function (handle) {
                global.postMessage(messagePrefix + handle, '*');
              };
            }

            function installMessageChannelImplementation() {
              var channel = new MessageChannel();
              channel.port1.onmessage = function (event) {
                var handle = event.data;
                runIfPresent(handle);
              };

              registerImmediate = function (handle) {
                channel.port2.postMessage(handle);
              };
            }

            function installReadyStateChangeImplementation() {
              var html = doc.documentElement;
              registerImmediate = function (handle) {
                // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
                // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
                var script = doc.createElement('script');
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
              registerImmediate = function (handle) {
                setTimeout(runIfPresent, 0, handle);
              };
            }

            // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
            var attachTo =
              Object.getPrototypeOf && Object.getPrototypeOf(global);
            attachTo =
              attachTo && attachTo.setTimeout ? attachTo : global;

            // Don't get fooled by e.g. browserify environments.
            if (
              {}.toString.call(global.process) === '[object process]'
            ) {
              // For Node.js before 0.9
              installNextTickImplementation();
            } else if (canUsePostMessage()) {
              // For non-IE10 modern browsers
              installPostMessageImplementation();
            } else if (global.MessageChannel) {
              // For web workers, where supported
              installMessageChannelImplementation();
            } else if (
              doc &&
              'onreadystatechange' in doc.createElement('script')
            ) {
              // For IE 6–8
              installReadyStateChangeImplementation();
            } else {
              // For older browsers
              installSetTimeoutImplementation();
            }

            attachTo.setImmediate = setImmediate;
            attachTo.clearImmediate = clearImmediate;
          })(
            typeof self === 'undefined'
              ? typeof global === 'undefined'
                ? this
                : global
              : self
          );

          /* WEBPACK VAR INJECTION */
        }).call(
          this,
          __webpack_require__(
            /*! ./../webpack/buildin/global.js */
            './node_modules/webpack/buildin/global.js'
          ),
          __webpack_require__(
            /*! ./../process/browser.js */
            './node_modules/process/browser.js'
          )
        );

        /***/
      },

    /***/
    /*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
    './node_modules/timers-browserify/main.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function (global) {
          var scope =
            (typeof global !== 'undefined' && global) ||
            (typeof self !== 'undefined' && self) ||
            window;
          var apply = Function.prototype.apply;

          // DOM APIs, for completeness

          exports.setTimeout = function () {
            return new Timeout(
              apply.call(setTimeout, scope, arguments),
              clearTimeout
            );
          };
          exports.setInterval = function () {
            return new Timeout(
              apply.call(setInterval, scope, arguments),
              clearInterval
            );
          };
          exports.clearTimeout = exports.clearInterval = function (
            timeout
          ) {
            if (timeout) {
              timeout.close();
            }
          };

          function Timeout(id, clearFn) {
            this._id = id;
            this._clearFn = clearFn;
          }
          Timeout.prototype.unref = Timeout.prototype.ref =
            function () {};
          Timeout.prototype.close = function () {
            this._clearFn.call(scope, this._id);
          };

          // Does not start the time, just sets up the members needed.
          exports.enroll = function (item, msecs) {
            clearTimeout(item._idleTimeoutId);
            item._idleTimeout = msecs;
          };

          exports.unenroll = function (item) {
            clearTimeout(item._idleTimeoutId);
            item._idleTimeout = -1;
          };

          exports._unrefActive = exports.active = function (item) {
            clearTimeout(item._idleTimeoutId);

            var msecs = item._idleTimeout;
            if (msecs >= 0) {
              item._idleTimeoutId = setTimeout(function onTimeout() {
                if (item._onTimeout) item._onTimeout();
              }, msecs);
            }
          };

          // setimmediate attaches itself to the global object
          __webpack_require__(
            /*! setimmediate */
            './node_modules/setimmediate/setImmediate.js'
          );
          // On some exotic environments, it's not clear which object `setimmediate` was
          // able to install onto.  Search each possibility in the same order as the
          // `setimmediate` library.
          exports.setImmediate =
            (typeof self !== 'undefined' && self.setImmediate) ||
            (typeof global !== 'undefined' && global.setImmediate) ||
            (this && this.setImmediate);
          exports.clearImmediate =
            (typeof self !== 'undefined' && self.clearImmediate) ||
            (typeof global !== 'undefined' &&
              global.clearImmediate) ||
            (this && this.clearImmediate);

          /* WEBPACK VAR INJECTION */
        }).call(
          this,
          __webpack_require__(
            /*! ./../webpack/buildin/global.js */
            './node_modules/webpack/buildin/global.js'
          )
        );

        /***/
      },

    /***/
    /*!***********************************************!*\
  !*** ./node_modules/unidragger/unidragger.js ***!
  \***********************************************/
    './node_modules/unidragger/unidragger.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__,
          __WEBPACK_AMD_DEFINE_RESULT__;
        /*!
         * Unidragger v2.4.0
         * Draggable base class
         * MIT license
         */

        /*jshint browser: true, unused: true, undef: true, strict: true */

        (function (window, factory) {
          // universal module definition
          /*jshint strict: false */
          /*globals define, module, require */

          if (true) {
            // AMD
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(
                /*! unipointer/unipointer */
                './node_modules/unipointer/unipointer.js'
              ),
            ]),
            (__WEBPACK_AMD_DEFINE_RESULT__ = function (Unipointer) {
              return factory(window, Unipointer);
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })(window, function factory(window, Unipointer) {
          'use strict';

          // -------------------------- Unidragger -------------------------- //

          function Unidragger() {}

          // inherit Unipointer & EvEmitter
          var proto = (Unidragger.prototype = Object.create(
            Unipointer.prototype
          ));

          // ----- bind start ----- //

          proto.bindHandles = function () {
            this._bindHandles(true);
          };

          proto.unbindHandles = function () {
            this._bindHandles(false);
          };

          /**
           * Add or remove start event
           * @param {Boolean} isAdd
           */
          proto._bindHandles = function (isAdd) {
            // munge isAdd, default to true
            isAdd = isAdd === undefined ? true : isAdd;
            // bind each handle
            var bindMethod = isAdd
              ? 'addEventListener'
              : 'removeEventListener';
            var touchAction = isAdd ? this._touchActionValue : '';
            for (var i = 0; i < this.handles.length; i++) {
              var handle = this.handles[i];
              this._bindStartEvent(handle, isAdd);
              handle[bindMethod]('click', this);
              // touch-action: none to override browser touch gestures. metafizzy/flickity#540
              if (window.PointerEvent) {
                handle.style.touchAction = touchAction;
              }
            }
          };

          // prototype so it can be overwriteable by Flickity
          proto._touchActionValue = 'none';

          // ----- start event ----- //

          /**
           * pointer start
           * @param {Event} event
           * @param {Event or Touch} pointer
           */
          proto.pointerDown = function (event, pointer) {
            var isOkay = this.okayPointerDown(event);
            if (!isOkay) {
              return;
            }
            // track start event position
            // Safari 9 overrides pageX and pageY. These values needs to be copied. flickity#842
            this.pointerDownPointer = {
              pageX: pointer.pageX,
              pageY: pointer.pageY,
            };

            event.preventDefault();
            this.pointerDownBlur();
            // bind move and end events
            this._bindPostStartEvents(event);
            this.emitEvent('pointerDown', [event, pointer]);
          };

          // nodes that have text fields
          var cursorNodes = {
            TEXTAREA: true,
            INPUT: true,
            SELECT: true,
            OPTION: true,
          };

          // input types that do not have text fields
          var clickTypes = {
            radio: true,
            checkbox: true,
            button: true,
            submit: true,
            image: true,
            file: true,
          };

          // dismiss inputs with text fields. flickity#403, flickity#404
          proto.okayPointerDown = function (event) {
            var isCursorNode = cursorNodes[event.target.nodeName];
            var isClickType = clickTypes[event.target.type];
            var isOkay = !isCursorNode || isClickType;
            if (!isOkay) {
              this._pointerReset();
            }
            return isOkay;
          };

          // kludge to blur previously focused input
          proto.pointerDownBlur = function () {
            var focused = document.activeElement;
            // do not blur body for IE10, metafizzy/flickity#117
            var canBlur =
              focused && focused.blur && focused != document.body;
            if (canBlur) {
              focused.blur();
            }
          };

          // ----- move event ----- //

          /**
           * drag move
           * @param {Event} event
           * @param {Event or Touch} pointer
           */
          proto.pointerMove = function (event, pointer) {
            var moveVector = this._dragPointerMove(event, pointer);
            this.emitEvent('pointerMove', [
              event,
              pointer,
              moveVector,
            ]);
            this._dragMove(event, pointer, moveVector);
          };

          // base pointer move logic
          proto._dragPointerMove = function (event, pointer) {
            var moveVector = {
              x: pointer.pageX - this.pointerDownPointer.pageX,
              y: pointer.pageY - this.pointerDownPointer.pageY,
            };
            // start drag if pointer has moved far enough to start drag
            if (!this.isDragging && this.hasDragStarted(moveVector)) {
              this._dragStart(event, pointer);
            }
            return moveVector;
          };

          // condition if pointer has moved far enough to start drag
          proto.hasDragStarted = function (moveVector) {
            return (
              Math.abs(moveVector.x) > 3 || Math.abs(moveVector.y) > 3
            );
          };

          // ----- end event ----- //

          /**
           * pointer up
           * @param {Event} event
           * @param {Event or Touch} pointer
           */
          proto.pointerUp = function (event, pointer) {
            this.emitEvent('pointerUp', [event, pointer]);
            this._dragPointerUp(event, pointer);
          };

          proto._dragPointerUp = function (event, pointer) {
            if (this.isDragging) {
              this._dragEnd(event, pointer);
            } else {
              // pointer didn't move enough for drag to start
              this._staticClick(event, pointer);
            }
          };

          // -------------------------- drag -------------------------- //

          // dragStart
          proto._dragStart = function (event, pointer) {
            this.isDragging = true;
            // prevent clicks
            this.isPreventingClicks = true;
            this.dragStart(event, pointer);
          };

          proto.dragStart = function (event, pointer) {
            this.emitEvent('dragStart', [event, pointer]);
          };

          // dragMove
          proto._dragMove = function (event, pointer, moveVector) {
            // do not drag if not dragging yet
            if (!this.isDragging) {
              return;
            }

            this.dragMove(event, pointer, moveVector);
          };

          proto.dragMove = function (event, pointer, moveVector) {
            event.preventDefault();
            this.emitEvent('dragMove', [event, pointer, moveVector]);
          };

          // dragEnd
          proto._dragEnd = function (event, pointer) {
            // set flags
            this.isDragging = false;
            // re-enable clicking async
            setTimeout(
              function () {
                delete this.isPreventingClicks;
              }.bind(this)
            );

            this.dragEnd(event, pointer);
          };

          proto.dragEnd = function (event, pointer) {
            this.emitEvent('dragEnd', [event, pointer]);
          };

          // ----- onclick ----- //

          // handle all clicks and prevent clicks when dragging
          proto.onclick = function (event) {
            if (this.isPreventingClicks) {
              event.preventDefault();
            }
          };

          // ----- staticClick ----- //

          // triggered after pointer down & up with no/tiny movement
          proto._staticClick = function (event, pointer) {
            // ignore emulated mouse up clicks
            if (this.isIgnoringMouseUp && event.type == 'mouseup') {
              return;
            }

            this.staticClick(event, pointer);

            // set flag for emulated clicks 300ms after touchend
            if (event.type != 'mouseup') {
              this.isIgnoringMouseUp = true;
              // reset flag after 300ms
              setTimeout(
                function () {
                  delete this.isIgnoringMouseUp;
                }.bind(this),
                400
              );
            }
          };

          proto.staticClick = function (event, pointer) {
            this.emitEvent('staticClick', [event, pointer]);
          };

          // ----- utils ----- //

          Unidragger.getPointerPoint = Unipointer.getPointerPoint;

          // -----  ----- //

          return Unidragger;
        });

        /***/
      },

    /***/
    /*!***********************************************!*\
  !*** ./node_modules/unipointer/unipointer.js ***!
  \***********************************************/
    './node_modules/unipointer/unipointer.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        var __WEBPACK_AMD_DEFINE_ARRAY__,
          __WEBPACK_AMD_DEFINE_RESULT__;
        /*!
         * Unipointer v2.4.0
         * base class for doing one thing with pointer event
         * MIT license
         */

        /*jshint browser: true, undef: true, unused: true, strict: true */

        (function (window, factory) {
          // universal module definition
          /* jshint strict: false */
          /*global define, module, require */
          if (true) {
            // AMD
            !((__WEBPACK_AMD_DEFINE_ARRAY__ = [
              __webpack_require__(
                /*! ev-emitter/ev-emitter */
                './node_modules/ev-emitter/ev-emitter.js'
              ),
            ]),
            (__WEBPACK_AMD_DEFINE_RESULT__ = function (EvEmitter) {
              return factory(window, EvEmitter);
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
            __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
              (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          } else {
          }
        })(window, function factory(window, EvEmitter) {
          'use strict';

          function noop() {}

          function Unipointer() {}

          // inherit EvEmitter
          var proto = (Unipointer.prototype = Object.create(
            EvEmitter.prototype
          ));

          proto.bindStartEvent = function (elem) {
            this._bindStartEvent(elem, true);
          };

          proto.unbindStartEvent = function (elem) {
            this._bindStartEvent(elem, false);
          };

          /**
           * Add or remove start event
           * @param {Boolean} isAdd - remove if falsey
           */
          proto._bindStartEvent = function (elem, isAdd) {
            // munge isAdd, default to true
            isAdd = isAdd === undefined ? true : isAdd;
            var bindMethod = isAdd
              ? 'addEventListener'
              : 'removeEventListener';

            // default to mouse events
            var startEvent = 'mousedown';
            if ('ontouchstart' in window) {
              // HACK prefer Touch Events as you can preventDefault on touchstart to
              // disable scroll in iOS & mobile Chrome metafizzy/flickity#1177
              startEvent = 'touchstart';
            } else if (window.PointerEvent) {
              // Pointer Events
              startEvent = 'pointerdown';
            }
            elem[bindMethod](startEvent, this);
          };

          // trigger handler methods for events
          proto.handleEvent = function (event) {
            var method = 'on' + event.type;
            if (this[method]) {
              this[method](event);
            }
          };

          // returns the touch that we're keeping track of
          proto.getTouch = function (touches) {
            for (var i = 0; i < touches.length; i++) {
              var touch = touches[i];
              if (touch.identifier == this.pointerIdentifier) {
                return touch;
              }
            }
          };

          // ----- start event ----- //

          proto.onmousedown = function (event) {
            // dismiss clicks from right or middle buttons
            var button = event.button;
            if (button && button !== 0 && button !== 1) {
              return;
            }
            this._pointerDown(event, event);
          };

          proto.ontouchstart = function (event) {
            this._pointerDown(event, event.changedTouches[0]);
          };

          proto.onpointerdown = function (event) {
            this._pointerDown(event, event);
          };

          /**
           * pointer start
           * @param {Event} event
           * @param {Event or Touch} pointer
           */
          proto._pointerDown = function (event, pointer) {
            // dismiss right click and other pointers
            // button = 0 is okay, 1-4 not
            if (event.button || this.isPointerDown) {
              return;
            }

            this.isPointerDown = true;
            // save pointer identifier to match up touch events
            this.pointerIdentifier =
              pointer.pointerId !== undefined // pointerId for pointer events, touch.indentifier for touch events
                ? pointer.pointerId
                : pointer.identifier;

            this.pointerDown(event, pointer);
          };

          proto.pointerDown = function (event, pointer) {
            this._bindPostStartEvents(event);
            this.emitEvent('pointerDown', [event, pointer]);
          };

          // hash of events to be bound after start event
          var postStartEvents = {
            mousedown: ['mousemove', 'mouseup'],
            touchstart: ['touchmove', 'touchend', 'touchcancel'],
            pointerdown: [
              'pointermove',
              'pointerup',
              'pointercancel',
            ],
          };

          proto._bindPostStartEvents = function (event) {
            if (!event) {
              return;
            }
            // get proper events to match start event
            var events = postStartEvents[event.type];
            // bind events to node
            events.forEach(function (eventName) {
              window.addEventListener(eventName, this);
            }, this);
            // save these arguments
            this._boundPointerEvents = events;
          };

          proto._unbindPostStartEvents = function () {
            // check for _boundEvents, in case dragEnd triggered twice (old IE8 bug)
            if (!this._boundPointerEvents) {
              return;
            }
            this._boundPointerEvents.forEach(function (eventName) {
              window.removeEventListener(eventName, this);
            }, this);

            delete this._boundPointerEvents;
          };

          // ----- move event ----- //

          proto.onmousemove = function (event) {
            this._pointerMove(event, event);
          };

          proto.onpointermove = function (event) {
            if (event.pointerId == this.pointerIdentifier) {
              this._pointerMove(event, event);
            }
          };

          proto.ontouchmove = function (event) {
            var touch = this.getTouch(event.changedTouches);
            if (touch) {
              this._pointerMove(event, touch);
            }
          };

          /**
           * pointer move
           * @param {Event} event
           * @param {Event or Touch} pointer
           * @private
           */
          proto._pointerMove = function (event, pointer) {
            this.pointerMove(event, pointer);
          };

          // public
          proto.pointerMove = function (event, pointer) {
            this.emitEvent('pointerMove', [event, pointer]);
          };

          // ----- end event ----- //

          proto.onmouseup = function (event) {
            this._pointerUp(event, event);
          };

          proto.onpointerup = function (event) {
            if (event.pointerId == this.pointerIdentifier) {
              this._pointerUp(event, event);
            }
          };

          proto.ontouchend = function (event) {
            var touch = this.getTouch(event.changedTouches);
            if (touch) {
              this._pointerUp(event, touch);
            }
          };

          /**
           * pointer up
           * @param {Event} event
           * @param {Event or Touch} pointer
           * @private
           */
          proto._pointerUp = function (event, pointer) {
            this._pointerDone();
            this.pointerUp(event, pointer);
          };

          // public
          proto.pointerUp = function (event, pointer) {
            this.emitEvent('pointerUp', [event, pointer]);
          };

          // ----- pointer done ----- //

          // triggered on pointer up & pointer cancel
          proto._pointerDone = function () {
            this._pointerReset();
            this._unbindPostStartEvents();
            this.pointerDone();
          };

          proto._pointerReset = function () {
            // reset properties
            this.isPointerDown = false;
            delete this.pointerIdentifier;
          };

          proto.pointerDone = noop;

          // ----- pointer cancel ----- //

          proto.onpointercancel = function (event) {
            if (event.pointerId == this.pointerIdentifier) {
              this._pointerCancel(event, event);
            }
          };

          proto.ontouchcancel = function (event) {
            var touch = this.getTouch(event.changedTouches);
            if (touch) {
              this._pointerCancel(event, touch);
            }
          };

          /**
           * pointer cancel
           * @param {Event} event
           * @param {Event or Touch} pointer
           * @private
           */
          proto._pointerCancel = function (event, pointer) {
            this._pointerDone();
            this.pointerCancel(event, pointer);
          };

          // public
          proto.pointerCancel = function (event, pointer) {
            this.emitEvent('pointerCancel', [event, pointer]);
          };

          // -----  ----- //

          // utility function for getting x/y coords from event
          Unipointer.getPointerPoint = function (pointer) {
            return {
              x: pointer.pageX,
              y: pointer.pageY,
            };
          };

          // -----  ----- //

          return Unipointer;
        });

        /***/
      },

    /***/
    /*!************************************************************!*\
  !*** ./node_modules/vanilla-lazyload/dist/lazyload.min.js ***!
  \************************************************************/
    './node_modules/vanilla-lazyload/dist/lazyload.min.js':
      /*! no static exports found */
      /***/
      function (module, exports, __webpack_require__) {
        !(function (n, t) {
          true ? (module.exports = t()) : undefined;
        })(this, function () {
          'use strict';
          function n() {
            return (
              (n =
                Object.assign ||
                function (n) {
                  for (var t = 1; t < arguments.length; t++) {
                    var e = arguments[t];
                    for (var i in e)
                      Object.prototype.hasOwnProperty.call(e, i) &&
                        (n[i] = e[i]);
                  }
                  return n;
                }),
              n.apply(this, arguments)
            );
          }
          var t = 'undefined' != typeof window,
            e =
              (t && !('onscroll' in window)) ||
              ('undefined' != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(
                  navigator.userAgent
                )),
            i = t && 'IntersectionObserver' in window,
            o = t && 'classList' in document.createElement('p'),
            a = t && window.devicePixelRatio > 1,
            r = {
              elements_selector: '.lazy',
              container: e || t ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: 'src',
              data_srcset: 'srcset',
              data_sizes: 'sizes',
              data_bg: 'bg',
              data_bg_hidpi: 'bg-hidpi',
              data_bg_multi: 'bg-multi',
              data_bg_multi_hidpi: 'bg-multi-hidpi',
              data_bg_set: 'bg-set',
              data_poster: 'poster',
              class_applied: 'applied',
              class_loading: 'loading',
              class_loaded: 'loaded',
              class_error: 'error',
              class_entered: 'entered',
              class_exited: 'exited',
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
              restore_on_error: !1,
            },
            c = function (t) {
              return n({}, r, t);
            },
            l = function (n, t) {
              var e,
                i = 'LazyLoad::Initialized',
                o = new n(t);
              try {
                e = new CustomEvent(i, {
                  detail: {
                    instance: o,
                  },
                });
              } catch (n) {
                (e =
                  document.createEvent(
                    'CustomEvent'
                  )).initCustomEvent(i, !1, !1, {
                  instance: o,
                });
              }
              window.dispatchEvent(e);
            },
            u = 'src',
            s = 'srcset',
            d = 'sizes',
            f = 'poster',
            _ = 'llOriginalAttrs',
            g = 'data',
            v = 'loading',
            b = 'loaded',
            p = 'applied',
            m = 'error',
            h = 'native',
            E = 'data-',
            I = 'll-status',
            y = function (n, t) {
              return n.getAttribute(E + t);
            },
            k = function (n) {
              return y(n, I);
            },
            w = function (n, t) {
              return (function (n, t, e) {
                var i = 'data-ll-status';
                null !== e
                  ? n.setAttribute(i, e)
                  : n.removeAttribute(i);
              })(n, 0, t);
            },
            A = function (n) {
              return w(n, null);
            },
            L = function (n) {
              return null === k(n);
            },
            O = function (n) {
              return k(n) === h;
            },
            x = [v, b, p, m],
            C = function (n, t, e, i) {
              n &&
                'function' == typeof n &&
                (void 0 === i
                  ? void 0 === e
                    ? n(t)
                    : n(t, e)
                  : n(t, e, i));
            },
            N = function (n, t) {
              '' !== t &&
                (o
                  ? n.classList.add(t)
                  : (n.className += (n.className ? ' ' : '') + t));
            },
            M = function (n, t) {
              '' !== t &&
                (o
                  ? n.classList.remove(t)
                  : (n.className = n.className
                      .replace(
                        new RegExp('(^|\\s+)' + t + '(\\s+|$)'),
                        ' '
                      )
                      .replace(/^\s+/, '')
                      .replace(/\s+$/, '')));
            },
            z = function (n) {
              return n.llTempImage;
            },
            T = function (n, t) {
              if (t) {
                var e = t._observer;
                e && e.unobserve(n);
              }
            },
            R = function (n, t) {
              n && (n.loadingCount += t);
            },
            G = function (n, t) {
              n && (n.toLoadCount = t);
            },
            j = function (n) {
              for (var t, e = [], i = 0; (t = n.children[i]); i += 1)
                'SOURCE' === t.tagName && e.push(t);
              return e;
            },
            D = function (n, t) {
              var e = n.parentNode;
              e && 'PICTURE' === e.tagName && j(e).forEach(t);
            },
            H = function (n, t) {
              j(n).forEach(t);
            },
            V = [u],
            F = [u, f],
            B = [u, s, d],
            J = [g],
            P = function (n) {
              return !!n[_];
            },
            S = function (n) {
              return n[_];
            },
            U = function (n) {
              return delete n[_];
            },
            $ = function (n, t) {
              if (!P(n)) {
                var e = {};
                t.forEach(function (t) {
                  e[t] = n.getAttribute(t);
                }),
                  (n[_] = e);
              }
            },
            q = function (n, t) {
              if (P(n)) {
                var e = S(n);
                t.forEach(function (t) {
                  !(function (n, t, e) {
                    e ? n.setAttribute(t, e) : n.removeAttribute(t);
                  })(n, t, e[t]);
                });
              }
            },
            K = function (n, t, e) {
              N(n, t.class_applied),
                w(n, p),
                e &&
                  (t.unobserve_completed && T(n, t),
                  C(t.callback_applied, n, e));
            },
            Q = function (n, t, e) {
              N(n, t.class_loading),
                w(n, v),
                e && (R(e, 1), C(t.callback_loading, n, e));
            },
            W = function (n, t, e) {
              e && n.setAttribute(t, e);
            },
            X = function (n, t) {
              W(n, d, y(n, t.data_sizes)),
                W(n, s, y(n, t.data_srcset)),
                W(n, u, y(n, t.data_src));
            },
            Y = {
              IMG: function (n, t) {
                D(n, function (n) {
                  $(n, B), X(n, t);
                }),
                  $(n, B),
                  X(n, t);
              },
              IFRAME: function (n, t) {
                $(n, V), W(n, u, y(n, t.data_src));
              },
              VIDEO: function (n, t) {
                H(n, function (n) {
                  $(n, V), W(n, u, y(n, t.data_src));
                }),
                  $(n, F),
                  W(n, f, y(n, t.data_poster)),
                  W(n, u, y(n, t.data_src)),
                  n.load();
              },
              OBJECT: function (n, t) {
                $(n, J), W(n, g, y(n, t.data_src));
              },
            },
            Z = ['IMG', 'IFRAME', 'VIDEO', 'OBJECT'],
            nn = function (n, t) {
              !t ||
                (function (n) {
                  return n.loadingCount > 0;
                })(t) ||
                (function (n) {
                  return n.toLoadCount > 0;
                })(t) ||
                C(n.callback_finish, t);
            },
            tn = function (n, t, e) {
              n.addEventListener(t, e), (n.llEvLisnrs[t] = e);
            },
            en = function (n, t, e) {
              n.removeEventListener(t, e);
            },
            on = function (n) {
              return !!n.llEvLisnrs;
            },
            an = function (n) {
              if (on(n)) {
                var t = n.llEvLisnrs;
                for (var e in t) {
                  var i = t[e];
                  en(n, e, i);
                }
                delete n.llEvLisnrs;
              }
            },
            rn = function (n, t, e) {
              !(function (n) {
                delete n.llTempImage;
              })(n),
                R(e, -1),
                (function (n) {
                  n && (n.toLoadCount -= 1);
                })(e),
                M(n, t.class_loading),
                t.unobserve_completed && T(n, e);
            },
            cn = function (n, t, e) {
              var i = z(n) || n;
              on(i) ||
                (function (n, t, e) {
                  on(n) || (n.llEvLisnrs = {});
                  var i =
                    'VIDEO' === n.tagName ? 'loadeddata' : 'load';
                  tn(n, i, t), tn(n, 'error', e);
                })(
                  i,
                  function (o) {
                    !(function (n, t, e, i) {
                      var o = O(t);
                      rn(t, e, i),
                        N(t, e.class_loaded),
                        w(t, b),
                        C(e.callback_loaded, t, i),
                        o || nn(e, i);
                    })(0, n, t, e),
                      an(i);
                  },
                  function (o) {
                    !(function (n, t, e, i) {
                      var o = O(t);
                      rn(t, e, i),
                        N(t, e.class_error),
                        w(t, m),
                        C(e.callback_error, t, i),
                        e.restore_on_error && q(t, B),
                        o || nn(e, i);
                    })(0, n, t, e),
                      an(i);
                  }
                );
            },
            ln = function (n, t, e) {
              !(function (n) {
                return Z.indexOf(n.tagName) > -1;
              })(n)
                ? (function (n, t, e) {
                    !(function (n) {
                      n.llTempImage = document.createElement('IMG');
                    })(n),
                      cn(n, t, e),
                      (function (n) {
                        P(n) ||
                          (n[_] = {
                            backgroundImage: n.style.backgroundImage,
                          });
                      })(n),
                      (function (n, t, e) {
                        var i = y(n, t.data_bg),
                          o = y(n, t.data_bg_hidpi),
                          r = a && o ? o : i;
                        r &&
                          ((n.style.backgroundImage = 'url("'.concat(
                            r,
                            '")'
                          )),
                          z(n).setAttribute(u, r),
                          Q(n, t, e));
                      })(n, t, e),
                      (function (n, t, e) {
                        var i = y(n, t.data_bg_multi),
                          o = y(n, t.data_bg_multi_hidpi),
                          r = a && o ? o : i;
                        r &&
                          ((n.style.backgroundImage = r), K(n, t, e));
                      })(n, t, e),
                      (function (n, t, e) {
                        var i = y(n, t.data_bg_set);
                        if (i) {
                          var o = i.split('|'),
                            a = o.map(function (n) {
                              return 'image-set('.concat(n, ')');
                            });
                          (n.style.backgroundImage = a.join()),
                            '' === n.style.backgroundImage &&
                              ((a = o.map(function (n) {
                                return '-webkit-image-set('.concat(
                                  n,
                                  ')'
                                );
                              })),
                              (n.style.backgroundImage = a.join())),
                            K(n, t, e);
                        }
                      })(n, t, e);
                  })(n, t, e)
                : (function (n, t, e) {
                    cn(n, t, e),
                      (function (n, t, e) {
                        var i = Y[n.tagName];
                        i && (i(n, t), Q(n, t, e));
                      })(n, t, e);
                  })(n, t, e);
            },
            un = function (n) {
              n.removeAttribute(u),
                n.removeAttribute(s),
                n.removeAttribute(d);
            },
            sn = function (n) {
              D(n, function (n) {
                q(n, B);
              }),
                q(n, B);
            },
            dn = {
              IMG: sn,
              IFRAME: function (n) {
                q(n, V);
              },
              VIDEO: function (n) {
                H(n, function (n) {
                  q(n, V);
                }),
                  q(n, F),
                  n.load();
              },
              OBJECT: function (n) {
                q(n, J);
              },
            },
            fn = function (n, t) {
              (function (n) {
                var t = dn[n.tagName];
                t
                  ? t(n)
                  : (function (n) {
                      if (P(n)) {
                        var t = S(n);
                        n.style.backgroundImage = t.backgroundImage;
                      }
                    })(n);
              })(n),
                (function (n, t) {
                  L(n) ||
                    O(n) ||
                    (M(n, t.class_entered),
                    M(n, t.class_exited),
                    M(n, t.class_applied),
                    M(n, t.class_loading),
                    M(n, t.class_loaded),
                    M(n, t.class_error));
                })(n, t),
                A(n),
                U(n);
            },
            _n = ['IMG', 'IFRAME', 'VIDEO'],
            gn = function (n) {
              return (
                n.use_native &&
                'loading' in HTMLImageElement.prototype
              );
            },
            vn = function (n, t, e) {
              n.forEach(function (n) {
                return (function (n) {
                  return n.isIntersecting || n.intersectionRatio > 0;
                })(n)
                  ? (function (n, t, e, i) {
                      var o = (function (n) {
                        return x.indexOf(k(n)) >= 0;
                      })(n);
                      w(n, 'entered'),
                        N(n, e.class_entered),
                        M(n, e.class_exited),
                        (function (n, t, e) {
                          t.unobserve_entered && T(n, e);
                        })(n, e, i),
                        C(e.callback_enter, n, t, i),
                        o || ln(n, e, i);
                    })(n.target, n, t, e)
                  : (function (n, t, e, i) {
                      L(n) ||
                        (N(n, e.class_exited),
                        (function (n, t, e, i) {
                          e.cancel_on_exit &&
                            (function (n) {
                              return k(n) === v;
                            })(n) &&
                            'IMG' === n.tagName &&
                            (an(n),
                            (function (n) {
                              D(n, function (n) {
                                un(n);
                              }),
                                un(n);
                            })(n),
                            sn(n),
                            M(n, e.class_loading),
                            R(i, -1),
                            A(n),
                            C(e.callback_cancel, n, t, i));
                        })(n, t, e, i),
                        C(e.callback_exit, n, t, i));
                    })(n.target, n, t, e);
              });
            },
            bn = function (n) {
              return Array.prototype.slice.call(n);
            },
            pn = function (n) {
              return n.container.querySelectorAll(
                n.elements_selector
              );
            },
            mn = function (n) {
              return (function (n) {
                return k(n) === m;
              })(n);
            },
            hn = function (n, t) {
              return (function (n) {
                return bn(n).filter(L);
              })(n || pn(t));
            },
            En = function (n, e) {
              var o = c(n);
              (this._settings = o),
                (this.loadingCount = 0),
                (function (n, t) {
                  i &&
                    !gn(n) &&
                    (t._observer = new IntersectionObserver(
                      function (e) {
                        vn(e, n, t);
                      },
                      (function (n) {
                        return {
                          root:
                            n.container === document
                              ? null
                              : n.container,
                          rootMargin:
                            n.thresholds || n.threshold + 'px',
                        };
                      })(n)
                    ));
                })(o, this),
                (function (n, e) {
                  t &&
                    ((e._onlineHandler = function () {
                      !(function (n, t) {
                        var e;
                        ((e = pn(n)), bn(e).filter(mn)).forEach(
                          function (t) {
                            M(t, n.class_error), A(t);
                          }
                        ),
                          t.update();
                      })(n, e);
                    }),
                    window.addEventListener(
                      'online',
                      e._onlineHandler
                    ));
                })(o, this),
                this.update(e);
            };
          return (
            (En.prototype = {
              update: function (n) {
                var t,
                  o,
                  a = this._settings,
                  r = hn(n, a);
                G(this, r.length),
                  !e && i
                    ? gn(a)
                      ? (function (n, t, e) {
                          n.forEach(function (n) {
                            -1 !== _n.indexOf(n.tagName) &&
                              (function (n, t, e) {
                                n.setAttribute('loading', 'lazy'),
                                  cn(n, t, e),
                                  (function (n, t) {
                                    var e = Y[n.tagName];
                                    e && e(n, t);
                                  })(n, t),
                                  w(n, h);
                              })(n, t, e);
                          }),
                            G(e, 0);
                        })(r, a, this)
                      : ((o = r),
                        (function (n) {
                          n.disconnect();
                        })((t = this._observer)),
                        (function (n, t) {
                          t.forEach(function (t) {
                            n.observe(t);
                          });
                        })(t, o))
                    : this.loadAll(r);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  t &&
                    window.removeEventListener(
                      'online',
                      this._onlineHandler
                    ),
                  pn(this._settings).forEach(function (n) {
                    U(n);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this._onlineHandler,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (n) {
                var t = this,
                  e = this._settings;
                hn(n, e).forEach(function (n) {
                  T(n, t), ln(n, e, t);
                });
              },
              restoreAll: function () {
                var n = this._settings;
                pn(n).forEach(function (t) {
                  fn(t, n);
                });
              },
            }),
            (En.load = function (n, t) {
              var e = c(t);
              ln(n, e);
            }),
            (En.resetStatus = function (n) {
              A(n);
            }),
            t &&
              (function (n, t) {
                if (t)
                  if (t.length)
                    for (var e, i = 0; (e = t[i]); i += 1) l(n, e);
                  else l(n, t);
              })(En, window.lazyLoadOptions),
            En
          );
        });

        /***/
      },

    /***/
    /*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
    './node_modules/webpack/buildin/global.js':
      /*! no static exports found */
      /***/
      function (module, exports) {
        var g;

        // This works in non-strict mode
        g = (function () {
          return this;
        })();

        try {
          // This works if eval is allowed (see CSP)
          g = g || new Function('return this')();
        } catch (e) {
          // This works if the window reference is available
          if (typeof window === 'object') g = window;
        }

        // g can still be undefined, but nothing to do about it...
        // We return undefined, instead of nothing here, so it's
        // easier to handle this case. if(!global) { ...}

        module.exports = g;

        /***/
      },

    /***/
    /*!**************************************************!*\
  !*** ./resources/assets/js/components/Layout.js ***!
  \**************************************************/
    './resources/assets/js/components/Layout.js':
      /*! exports provided: default */
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return Layout;
          }
        );
        class Layout {
          constructor() {
            this.onResize();
            this.bindEvents();
          }
          bindEvents() {
            window.addEventListener('resize', () => {
              this.onResize();
            });
          }
          onResize() {
            this.isMobile = window.matchMedia(
              '(max-width: 767px)'
            ).matches;
            this.W = window.innerWidth;
            this.H = window.innerHeight;
          }
        }

        /***/
      },

    /***/
    /*!************************************************!*\
  !*** ./resources/assets/js/components/Logo.js ***!
  \************************************************/
    './resources/assets/js/components/Logo.js':
      /*! exports provided: default */
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return Logo;
          }
        );
        /* harmony import */
        var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! core-js/modules/es.string.starts-with.js */
            './node_modules/core-js/modules/es.string.starts-with.js'
          );
        /* harmony import */
        var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/
          __webpack_require__.n(
            core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */
        var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! jquery */
          './node_modules/jquery/dist/jquery.js'
        );
        /* harmony import */
        var jquery__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/
          __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */
        var _json_icons__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../json/icons */
            './resources/assets/js/json/icons.json'
          );
        var _json_icons__WEBPACK_IMPORTED_MODULE_2___namespace =
          /*#__PURE__*/
          __webpack_require__.t(
            /*! ../json/icons */
            './resources/assets/js/json/icons.json',
            1
          );

        class Logo {
          constructor() {
            this.icons = [];
            this.icons['normal'] = [];
            this.icons['small'] = [];
            this.sortIcons(_json_icons__WEBPACK_IMPORTED_MODULE_2__);
            this.scramble(
              jquery__WEBPACK_IMPORTED_MODULE_1___default()(
                '.js-logo'
              )
            );
          }
          scramble($el) {
            $el.find('span').each((i, e) => {
              const $e =
                jquery__WEBPACK_IMPORTED_MODULE_1___default()(e);
              const size = $e.hasClass('I') ? 'small' : 'normal';
              setTimeout(() => {
                this.changeIcon($e, size);
              }, this.randomTimer() * 3);
            });
          }
          changeIcon($el, size) {
            let icon = '';
            if (size === 'small') {
              icon =
                this.icons['small'][
                  Math.floor(
                    Math.random() * this.icons['small'].length
                  )
                ];
            } else {
              icon =
                this.icons['normal'][
                  Math.floor(
                    Math.random() * this.icons['normal'].length
                  )
                ];
            }
            $el.html('<span class="und-' + icon.name + '"></span>');
            setTimeout(() => {
              this.changeIcon($el, size);
            }, this.randomTimer());
          }
          sortIcons(jsonIcons) {
            jsonIcons.selection.forEach((item) => {
              if (item.name.startsWith('i-')) {
                this.icons['small'].push(item);
              } else {
                this.icons['normal'].push(item);
              }
            });
          }
          randomTimer() {
            return Math.floor((Math.random() + 1) * 500);
          }
        }

        /***/
      },

    /***/
    /*!*****************************************************!*\
  !*** ./resources/assets/js/components/Selection.js ***!
  \*****************************************************/
    './resources/assets/js/components/Selection.js':
      /*! exports provided: default */
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return Selection;
          }
        );
        class Selection {
          constructor() {
            const rainbow = [
              'rgba(255, 255, 0, .7)',
              'rgba(255, 0, 0, .7)',
              'rgba(0, 0, 255, .7)',
            ];
            let colorIndex = 0;
            document.addEventListener('selectstart', () => {
              colorIndex = colorIndex + 1;
              if (colorIndex >= rainbow.length) colorIndex = 0;
              document
                .querySelector('body')
                .style.setProperty(
                  '--select-bg',
                  `${rainbow[colorIndex]}`
                );
            });
          }
        }

        /***/
      },

    /***/
    /*!**************************************************!*\
  !*** ./resources/assets/js/components/Slider.js ***!
  \**************************************************/
    './resources/assets/js/components/Slider.js':
      /*! exports provided: default */
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return Slider;
          }
        );
        /* harmony import */
        var flickity_fade__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! flickity-fade */
            './node_modules/flickity-fade/flickity-fade.js'
          );
        /* harmony import */
        var flickity_fade__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/
          __webpack_require__.n(
            flickity_fade__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */
        var imagesloaded__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! imagesloaded */
            './node_modules/imagesloaded/imagesloaded.js'
          );
        /* harmony import */
        var imagesloaded__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/
          __webpack_require__.n(
            imagesloaded__WEBPACK_IMPORTED_MODULE_1__
          );

        class Slider {
          constructor() {
            this.isFlickity = false;
            this.flkty = [];
            window.emitter.on('PageSwitch', (loading) => {
              // destroy flickity instances
              if (this.isFlickity == true) {
                this.flkty.forEach((flktyEl) => {
                  flktyEl.destroy();
                });
                this.isFlickity = !this.isFlickity;
              }
              this.init();
            });
          }
          init() {
            $('body')
              .find('.js-slider')
              .each((i, e) => {
                this.flickity(i, e);
              });
          }
          flickity(i, el) {
            const $meta = $(el).next().find('.js-slider-meta');
            const $current = $(el).next().find('.js-slider-current');
            const $containerSlider = $(el).parent();
            let $container = $(el);
            var $cellButtons = $container.find('.button');
            this.flkty[i] =
              new flickity_fade__WEBPACK_IMPORTED_MODULE_0___default.a(
                el,
                {
                  imagesLoaded: true,
                  percentPosition: false,
                  autoPlay: false,
                  pageDots: false,
                  cellAlign: 'center',
                  lazyLoad: 1,
                  fade: true,
                  wrapAround: true,
                  on: {
                    ready: () => {
                      this.isFlickity = true;
                    },
                    change: (e) => {
                      $meta.html(
                        $(el)
                          .find('.item-' + (e + 1))
                          .data('text')
                      );
                      $current.html(e + 1);
                    },
                  },
                }
              );
            let that = this;
            $containerSlider
              .find('.btn-prev-slider')
              .on('click', () => {
                this.flkty[i].previous();
              });
            $containerSlider
              .find('.btn-next-slider')
              .on('click', () => {
                this.flkty[i].next();
              });
            window.setTimeout(() => {
              this.flkty[i].resize();
            }, 50);
            imagesloaded__WEBPACK_IMPORTED_MODULE_1___default()(
              document.querySelector('body'),
              () => {
                this.flkty[i].resize();
              }
            );
          }
        }

        /***/
      },

    /***/
    /*!*********************************************!*\
  !*** ./resources/assets/js/json/icons.json ***!
  \*********************************************/
    './resources/assets/js/json/icons.json':
      /*! exports provided: selection, metadata, height, prevSize, icons, colorThemes, colorThemeIdx, preferences, IcoMoonType, default */
      /***/
      function (module) {
        module.exports = JSON.parse(
        );

        /***/
      },

    /***/
    /*!********************************************!*\
  !*** ./resources/assets/js/lib/Ajaxify.js ***!
  \********************************************/
    './resources/assets/js/lib/Ajaxify.js':
      /*! exports provided: default */
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return Ajaxify;
          }
        );
        /* harmony import */
        var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/asyncToGenerator */
            './node_modules/@babel/runtime/helpers/asyncToGenerator.js'
          );
        /* harmony import */
        var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/
          __webpack_require__.n(
            _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */
        var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! core-js/modules/es.array.index-of.js */
            './node_modules/core-js/modules/es.array.index-of.js'
          );
        /* harmony import */
        var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/
          __webpack_require__.n(
            core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */
        var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! core-js/modules/es.promise.js */
            './node_modules/core-js/modules/es.promise.js'
          );
        /* harmony import */
        var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/
          __webpack_require__.n(
            core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */
        var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! jquery */
          './node_modules/jquery/dist/jquery.js'
        );
        /* harmony import */
        var jquery__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/
          __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);

        class Ajaxify {
          constructor(contentId) {
            this.$ = jquery__WEBPACK_IMPORTED_MODULE_3___default.a;
            this.$body =
              jquery__WEBPACK_IMPORTED_MODULE_3___default()(
                document.body
              );
            this.container = `#${contentId}`;
            this.$container =
              jquery__WEBPACK_IMPORTED_MODULE_3___default()(
                '#content'
              );
            this.listener();
          }
          listener() {
            this.$body.on('click', 'a', (e) => {
              this.url = Ajaxify.getUrl(e);
              if (
                !(
                  this.isExternal(this.url) || // Check if link goes to external page
                  (this.isAdmin(this.url) && // Check if link is to backend (admin)
                    !jquery__WEBPACK_IMPORTED_MODULE_3___default()(
                      e.currentTarget
                    ).data('noajax') &&
                    !jquery__WEBPACK_IMPORTED_MODULE_3___default()(
                      e.currentTarget
                    ).data('download'))
                )
              ) {
                // Check if is a download file link
                // if none of these are true do a ajax page load
                e.preventDefault();
                this.changePage(this.url);
              }
            });

            // Back button listener
            jquery__WEBPACK_IMPORTED_MODULE_3___default()(
              window
            ).bind('popstate', () => {
              this.changePage(window.location.pathname);
            });
          }
          changePage(url) {
            var _this = this;
            return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(
              function* () {
                window.emitter.emit('PageSwitch', {
                  loading: true,
                  bodyClassList: document.body.classList,
                });
                let $ = _this.$;
                let $contentContainer = $(_this.container);
                let $body = _this.$body;
                let html = yield fetch(url)
                  .then((resp) => resp.text())
                  .then((html) => {
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(
                      html,
                      'text/html'
                    );
                    return {
                      node: doc.getElementById(
                        _this.container.split('#')[1]
                      ),
                      title: doc.title,
                      bodyClasses: doc.body.getAttribute('class'),
                      menu: doc.querySelector('header'),
                    };
                  });
                _this.$root = $contentContainer;
                _this.$container.html(html.node);
                $body.attr('class', html.bodyClasses);
                $body.find('header').replaceWith(html.menu);
                Ajaxify.setUrlAndTitle(url, html.title);
                window.emitter.emit('PageSwitch', {
                  loading: false,
                  bodyClassList: document.body.classList,
                });
                $('html, body').scrollTop($('html').offset().top);
              }
            )();
          }
          static setUrlAndTitle(url, title) {
            window.history.pushState({}, '', url);
            document.title = title;
          }
          static getUrl(e) {
            return jquery__WEBPACK_IMPORTED_MODULE_3___default()(
              e.currentTarget
            ).attr('href');
          }
          isAdmin(url) {
            return url.indexOf('/wp/wp-admin/') !== -1;
          }
          isExternal(url) {
            const host = window.location.host;
            const link =
              jquery__WEBPACK_IMPORTED_MODULE_3___default()('<a>', {
                href: url,
              })[0].host;
            return link !== host;
          }
          LazyLoadImages() {
            window.APP.lazyLoadInstanceImage.update();
            window.APP.lazyLoadInstanceVideo.update();
          }
        }

        /***/
      },

    /***/
    /*!********************************************!*\
  !*** ./resources/assets/js/lib/Loading.js ***!
  \********************************************/
    './resources/assets/js/lib/Loading.js':
      /*! exports provided: default */
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return Loading;
          }
        );
        /* harmony import */
        var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! jquery */
          './node_modules/jquery/dist/jquery.js'
        );
        /* harmony import */
        var jquery__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/
          __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

        class Loading {
          constructor(contentId) {
            this.$ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;
            this.$body =
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(
                document.body
              );
            this.$html =
              jquery__WEBPACK_IMPORTED_MODULE_0___default()('html');
            this.$container =
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(
                '#content'
              );
            this.$header =
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(
                '.section-header'
              );
            this.$loadingpage =
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(
                '.loading-page'
              );
            console.log(this.$container);
            this.firstLoad = true;
            this.loadingSentence = 0;
            // show different loading sentences
            this.loadingSentenceLength =
              jquery__WEBPACK_IMPORTED_MODULE_0___default()(
                '.loading-page p'
              ).length;
            this.loadingDelay = 2000;
            window.emitter.emit('PageSwitch', {
              loading: true,
            });
            this.init();
          }
          init() {
            window.emitter.on('PageSwitch', (e) => {
              if (e.loading) {
                console.log("addClass('loading')");
                this.$loadingpage.removeClass('loaded');
                this.$loadingpage.addClass('loading');
                this.$container.removeClass('loaded');
                this.$container.addClass('loading');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(
                  '.loading-page p'
                ).removeClass('show');
              }
              if (!e.loading) {
                console.log("removeClass('loading')");
                this.$container.removeClass('loading');
                this.$loadingpage.removeClass('loading');
                if (this.firstLoad == true) {
                  setTimeout(() => {
                    this.$html.addClass('first-load');
                    this.firstLoad = false;
                  }, 2000);
                } else {
                  this.$container.addClass('loaded');
                  this.$loadingpage.addClass('loaded');
                }
                // different loading words
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(
                  '.loading-page p'
                )
                  .eq(this.loadingSentence)
                  .addClass('show');
                if (
                  this.loadingSentence < this.loadingSentenceLength
                ) {
                  this.loadingSentence++;
                } else {
                  this.loadingSentence = 0;
                }
              }
            });
          }
        }

        /***/
      },

    /***/
    /*!******************************************!*\
  !*** ./resources/assets/js/lib/Vimeo.js ***!
  \******************************************/
    './resources/assets/js/lib/Vimeo.js':
      /*! exports provided: default */
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return VimeoPlayer;
          }
        );
        /* harmony import */
        var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! core-js/modules/es.array.filter.js */
            './node_modules/core-js/modules/es.array.filter.js'
          );
        /* harmony import */
        var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/
          __webpack_require__.n(
            core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */
        var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! jquery */
          './node_modules/jquery/dist/jquery.js'
        );
        /* harmony import */
        var jquery__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/
          __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */
        var _vimeo_player__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! @vimeo/player */
            './node_modules/@vimeo/player/dist/player.es.js'
          );

        class VimeoPlayer {
          constructor() {
            this.Players = [];
            this.Player = false;
            window.emitter.on('PageSwitch', (e) => {
              if (!e.filter) {
                if (
                  !e.loading &&
                  e.bodyClassList.contains('single-work')
                ) {
                  this.init();
                }
                if (
                  e.loading &&
                  e.bodyClassList.contains('single-work') &&
                  this.Player == true
                ) {
                  this.destroyPlayer();
                }
              }
            });
          }
          destroyPlayer() {
            setTimeout(() => {
              for (let i = 1; i < this.Players.length; i++) {
                this.Players[i].destroy();
              }
            }, 800);
            this.Player = false;
          }
          init() {
            const videoLinks =
              document.querySelectorAll('.vimeo-embed');
            let i = 1;
            let player = [];
            videoLinks.forEach((videoLink) => {
              player[i] =
                new _vimeo_player__WEBPACK_IMPORTED_MODULE_2__[
                  'default'
                ](videoLink);
              jquery__WEBPACK_IMPORTED_MODULE_1___default()(
                '.js-play'
              ).on('click', (e) => {
                let videoIndex =
                  jquery__WEBPACK_IMPORTED_MODULE_1___default()(
                    e.currentTarget
                  ).data('js-play');
                jquery__WEBPACK_IMPORTED_MODULE_1___default()(
                  '.js-play-' + videoIndex
                ).addClass('hide');
                player[videoIndex].play();
              });
              i++;
            });
            this.Players = player;
            this.Player = true;
          }
        }

        /***/
      },

    /***/
    /*!******************************************!*\
  !*** ./resources/assets/js/lib/utils.js ***!
  \******************************************/
    './resources/assets/js/lib/utils.js':
      /*! exports provided: addClass, removeClass, hasClass, wait, debounce, shuffle */
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(
          __webpack_exports__,
          'addClass',
          function () {
            return addClass;
          }
        );
        /* harmony export (binding) */
        __webpack_require__.d(
          __webpack_exports__,
          'removeClass',
          function () {
            return removeClass;
          }
        );
        /* harmony export (binding) */
        __webpack_require__.d(
          __webpack_exports__,
          'hasClass',
          function () {
            return hasClass;
          }
        );
        /* harmony export (binding) */
        __webpack_require__.d(
          __webpack_exports__,
          'wait',
          function () {
            return wait;
          }
        );
        /* harmony export (binding) */
        __webpack_require__.d(
          __webpack_exports__,
          'debounce',
          function () {
            return debounce;
          }
        );
        /* harmony export (binding) */
        __webpack_require__.d(
          __webpack_exports__,
          'shuffle',
          function () {
            return shuffle;
          }
        );
        /* harmony import */
        var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! core-js/modules/es.promise.js */
            './node_modules/core-js/modules/es.promise.js'
          );
        /* harmony import */
        var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/
          __webpack_require__.n(
            core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__
          );

        let add = function add(el, className) {
          if (!el.classList.contains(className)) {
            el.classList.add(className);
          }
        };
        const addClass = (elem, className) => {
          if (elem instanceof NodeList) {
            elem.forEach((el) => {
              add(el, className);
            });
          } else {
            add(elem, className);
          }
        };
        let remove = function remove(el, className) {
          if (el.classList.contains(className)) {
            el.classList.remove(className);
          }
        };
        const removeClass = (elem, className) => {
          if (elem instanceof NodeList) {
            elem.forEach((el) => {
              remove(el, className);
            });
          } else {
            remove(elem, className);
          }
        };
        const hasClass = (elem, className) => {
          return elem.classList.contains(className);
        };
        const wait = (selector) => {
          return new Promise((resolve, reject) => {
            const waitForEl = (selector, count = 0) => {
              const el = document.querySelector(selector);
              if (!!el) {
                resolve(el);
              } else {
                setTimeout(() => {
                  count++;
                  if (count < 10) {
                    waitForEl(selector, count);
                  } else {
                    reject();
                  }
                }, 100);
              }
            };
            waitForEl(selector);
          });
        };
        const debounce = (fn, time) => {
          let timeout;
          return function () {
            const functionCall = () => fn.apply(this, arguments);
            clearTimeout(timeout);
            timeout = setTimeout(functionCall, time);
          };
        };
        const shuffle = (array) => {
          var currentIndex = array.length,
            temporaryValue,
            randomIndex;

          // While there remain elements to shuffle...
          while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
          }
          return array;
        };

        /***/
      },

    /***/
    /*!*************************************!*\
  !*** ./resources/assets/js/main.js ***!
  \*************************************/
    './resources/assets/js/main.js':
      /*! no exports provided */
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */
        var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! jquery */
          './node_modules/jquery/dist/jquery.js'
        );
        /* harmony import */
        var jquery__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/
          __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */
        var lazysizes__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! lazysizes */
            './node_modules/lazysizes/lazysizes.js'
          );
        /* harmony import */
        var lazysizes__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/
          __webpack_require__.n(
            lazysizes__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */
        var lazysizes_plugins_unveilhooks_ls_unveilhooks__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! lazysizes/plugins/unveilhooks/ls.unveilhooks */
            './node_modules/lazysizes/plugins/unveilhooks/ls.unveilhooks.js'
          );
        /* harmony import */
        var lazysizes_plugins_unveilhooks_ls_unveilhooks__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/
          __webpack_require__.n(
            lazysizes_plugins_unveilhooks_ls_unveilhooks__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */
        var nanoevents__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! nanoevents */
            './node_modules/nanoevents/index.js'
          );
        /* harmony import */
        var nanoevents__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/
          __webpack_require__.n(
            nanoevents__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */
        var _lib_Ajaxify__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./lib/Ajaxify */
            './resources/assets/js/lib/Ajaxify.js'
          );
        /* harmony import */
        var _lib_Loading__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ./lib/Loading */
            './resources/assets/js/lib/Loading.js'
          );
        /* harmony import */
        var _components_Slider__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ./components/Slider */
            './resources/assets/js/components/Slider.js'
          );
        /* harmony import */
        var _pages_Work__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! ./pages/Work */
            './resources/assets/js/pages/Work.js'
          );
        /* harmony import */
        var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(
            /*! ./components/Layout */
            './resources/assets/js/components/Layout.js'
          );
        /* harmony import */
        var _components_Logo__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ./components/Logo */
            './resources/assets/js/components/Logo.js'
          );
        /* harmony import */
        var _lib_Vimeo__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(
            /*! ./lib/Vimeo */
            './resources/assets/js/lib/Vimeo.js'
          );
        /* harmony import */
        var _components_Selection__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(
            /*! ./components/Selection */
            './resources/assets/js/components/Selection.js'
          );
        /* harmony import */
        var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(
            /*! vanilla-lazyload */
            './node_modules/vanilla-lazyload/dist/lazyload.min.js'
          );
        /* harmony import */
        var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_12___default =
          /*#__PURE__*/
          __webpack_require__.n(
            vanilla_lazyload__WEBPACK_IMPORTED_MODULE_12__
          );

        window.$ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;
        window.jQuery = window.$;
        const APP = window.APP || {};
        const initApp = () => {
          window.APP = APP;
          APP.Layout =
            new _components_Layout__WEBPACK_IMPORTED_MODULE_8__[
              'default'
            ]();

          // Instance using native lazy loading
          window.APP.lazyLoadInstanceImage =
            new vanilla_lazyload__WEBPACK_IMPORTED_MODULE_12___default.a(
              {
                elements_selector: 'img.lazy',
                class_loaded: 'lazyloaded',
                use_native: true,
                load_delay: 100,
                cancel_on_exit: true,
              }
            );

          // Instance without native lazy loading
          window.APP.lazyLoadInstanceVideo =
            new vanilla_lazyload__WEBPACK_IMPORTED_MODULE_12___default.a(
              {
                elements_selector: 'video.lazy',
                class_loaded: 'lazyloaded',
                load_delay: 1500,
              }
            );
          window.emitter =
            new nanoevents__WEBPACK_IMPORTED_MODULE_3___default.a();
          new _lib_Loading__WEBPACK_IMPORTED_MODULE_5__['default'](
            'content'
          );
          new _lib_Ajaxify__WEBPACK_IMPORTED_MODULE_4__['default'](
            'content'
          );
          new _pages_Work__WEBPACK_IMPORTED_MODULE_7__['default'](
            APP
          );
          new _components_Logo__WEBPACK_IMPORTED_MODULE_9__[
            'default'
          ]();
          new _lib_Vimeo__WEBPACK_IMPORTED_MODULE_10__['default']();
          new _components_Selection__WEBPACK_IMPORTED_MODULE_11__[
            'default'
          ]();
          new _components_Slider__WEBPACK_IMPORTED_MODULE_6__[
            'default'
          ]();
          window.emitter.on('PageSwitch', () => {
            window.APP.lazyLoadInstanceImage.update();
            window.APP.lazyLoadInstanceVideo.update();
          });
          window.emitter.emit('PageSwitch', {
            loading: false,
            bodyClassList: document.body.classList,
          });
        };
        if (
          document.readyState === 'complete' ||
          (document.readyState !== 'loading' &&
            !document.documentElement.doScroll)
        ) {
          initApp();
        } else {
          document.addEventListener('DOMContentLoaded', initApp);
        }

        /***/
      },

    /***/
    /*!*******************************************!*\
  !*** ./resources/assets/js/pages/Work.js ***!
  \*******************************************/
    './resources/assets/js/pages/Work.js':
      /*! exports provided: default */
      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(
          __webpack_exports__,
          'default',
          function () {
            return Work;
          }
        );
        /* harmony import */
        var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/asyncToGenerator */
            './node_modules/@babel/runtime/helpers/asyncToGenerator.js'
          );
        /* harmony import */
        var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/
          __webpack_require__.n(
            _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */
        var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! @babel/runtime/helpers/defineProperty */
            './node_modules/@babel/runtime/helpers/defineProperty.js'
          );
        /* harmony import */
        var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/
          __webpack_require__.n(
            _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */
        var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! core-js/modules/es.array.filter.js */
            './node_modules/core-js/modules/es.array.filter.js'
          );
        /* harmony import */
        var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/
          __webpack_require__.n(
            core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */
        var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! core-js/modules/es.array.from.js */
            './node_modules/core-js/modules/es.array.from.js'
          );
        /* harmony import */
        var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/
          __webpack_require__.n(
            core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__
          );
        /* harmony import */
        var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! core-js/modules/es.promise.js */
            './node_modules/core-js/modules/es.promise.js'
          );
        /* harmony import */
        var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/
          __webpack_require__.n(
            core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */
        var isotope_layout__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! isotope-layout */
            './node_modules/isotope-layout/js/isotope.js'
          );
        /* harmony import */
        var isotope_layout__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/
          __webpack_require__.n(
            isotope_layout__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */
        var isotope_horizontal__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! isotope-horizontal */
            './node_modules/isotope-horizontal/horizontal.js'
          );
        /* harmony import */
        var isotope_horizontal__WEBPACK_IMPORTED_MODULE_6___default =
          /*#__PURE__*/
          __webpack_require__.n(
            isotope_horizontal__WEBPACK_IMPORTED_MODULE_6__
          );
        /* harmony import */
        var imagesloaded__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! imagesloaded */
            './node_modules/imagesloaded/imagesloaded.js'
          );
        /* harmony import */
        var imagesloaded__WEBPACK_IMPORTED_MODULE_7___default =
          /*#__PURE__*/
          __webpack_require__.n(
            imagesloaded__WEBPACK_IMPORTED_MODULE_7__
          );
        /* harmony import */
        var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! jquery */
          './node_modules/jquery/dist/jquery.js'
        );
        /* harmony import */
        var jquery__WEBPACK_IMPORTED_MODULE_8___default =
          /*#__PURE__*/
          __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);
        /* harmony import */
        var _lib_utils__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! ../lib/utils */
            './resources/assets/js/lib/utils.js'
          );

        class Work {
          constructor(APP) {
            _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(
              this,
              '$body',
              jquery__WEBPACK_IMPORTED_MODULE_8___default()(
                document.body
              )
            );
            this.isotope = '';
            this.APP = APP;
            window.emitter.on('PageSwitch', (e) => {
              // LEAVES HOME DESTROY ISOTOPE
              if (!e.filter) {
                if (e.loading && e.bodyClassList.contains('home')) {
                  if (this.isotope) {
                    this.destroy();
                  }
                }
                if (!e.loading && e.bodyClassList.contains('home')) {
                  this.init();
                }
              }
            });
          }
          init() {
            var _this = this;
            return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(
              function* () {
                yield Object(
                  _lib_utils__WEBPACK_IMPORTED_MODULE_9__['wait']
                )('.work-list');
                _this.initializeIsotope();
              }
            )();
          }
          initializeIsotope() {
            var _this2 = this;
            return _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(
              function* () {
                yield _this2.isotopify();
              }
            )();
          }
          isotopify() {
            return new Promise((resolve) => {
              // destroy isotope immediately
              if (this.isotope) {
                this.isotope.destroy();
              }
              this.grid = document.querySelector('.work-list');
              imagesloaded__WEBPACK_IMPORTED_MODULE_7___default()(
                this.grid,
                () => {
                  this.isotope =
                    new isotope_layout__WEBPACK_IMPORTED_MODULE_5___default.a(
                      this.grid,
                      {
                        itemSelector: '.grid-item',
                        percentPosition: true,
                        masonry: {
                          hiddenStyle: {
                            opacity: 0,
                          },
                          visibleStyle: {
                            opacity: 1,
                          },
                        },
                        transitionDuration: 0,
                      }
                    );
                  setTimeout(() => {
                    this.isotope.layout({
                      transitionDuration: 0,
                      hiddenStyle: {
                        opacity: 0,
                      },
                      visibleStyle: {
                        opacity: 1,
                      },
                    });
                  }, 1000);
                  const imgs = document.querySelectorAll('img');
                  const videos = document.querySelectorAll('video');
                  if (imgs === null) {
                    return;
                  }
                  Array.from(imgs).forEach((img) => {
                    img.addEventListener('load', () => {
                      this.isotope.layout({});
                      console.log('layout img');
                    });
                  });
                  if (videos === null) {
                    return;
                  }
                  Array.from(videos).forEach((video) => {
                    video.addEventListener('load', () => {
                      this.isotope.layout({});
                      console.log('layout video');
                      var playPromise = video.play();
                      if (playPromise !== undefined) {
                        playPromise
                          .then((_) => {
                            // Automatic playback started!
                            // Show playing UI.
                          })
                          .catch((error) => {
                            // Auto-play was prevented
                            // Show paused UI.
                          });
                      }
                    });
                  });
                  let isotopeFilter = this.isotope;
                  jquery__WEBPACK_IMPORTED_MODULE_8___default()(
                    '.filter-button-group div'
                  ).on('click', (e) => {
                    let filterValue =
                      jquery__WEBPACK_IMPORTED_MODULE_8___default()(
                        e.currentTarget
                      ).attr('data-filter');
                    jquery__WEBPACK_IMPORTED_MODULE_8___default()(
                      '.filter-button-group div'
                    ).removeClass('current-menu-item');

                    // hide grid elements
                    jquery__WEBPACK_IMPORTED_MODULE_8___default()(
                      '.work-list'
                    ).addClass('hidden');
                    jquery__WEBPACK_IMPORTED_MODULE_8___default()(
                      e.currentTarget
                    ).addClass('current-menu-item');
                    setTimeout(() => {
                      isotopeFilter.arrange({
                        filter: filterValue,
                        transitionDuration: 0,
                        hiddenStyle: {
                          opacity: 0,
                        },
                        visibleStyle: {
                          opacity: 1,
                        },
                      });
                    }, 400);
                    setTimeout(() => {
                      isotopeFilter.arrange({
                        transitionDuration: 0,
                      });
                      jquery__WEBPACK_IMPORTED_MODULE_8___default()(
                        'html, body'
                      ).animate(
                        {
                          scrollLeft: 0,
                        },
                        200,
                        'swing'
                      );
                    }, 1000);
                    isotopeFilter.on('arrangeComplete', () => {
                      console.log('completed');
                      setTimeout(() => {
                        // show grid elements
                        jquery__WEBPACK_IMPORTED_MODULE_8___default()(
                          '.work-list'
                        ).removeClass('hidden');
                      }, 1600);
                    });
                  });
                  resolve();
                }
              );
            });
          }

          // destroy isotope with delay
          destroy() {
            if (this.isotope) {
              if (!this.destroyed) {
                clearTimeout();
                setTimeout(() => {
                  this.isotope.destroy();
                }, 400);
              }
            }
          }
          shuffle($grid) {
            //remove node
            let $gridBackup = $grid;
            let lastNode = document.getElementById('last');
            $grid.removeChild(lastNode);
            for (var i = $grid.children.length; i >= 1; i--) {
              $grid.appendChild(
                $grid.children[(Math.random() * i) | 0]
              );
            }
            $grid.appendChild(lastNode);
            return $grid;
          }
        }

        /***/
      },
    /******/
  }
);