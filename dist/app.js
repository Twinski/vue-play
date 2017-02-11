module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
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

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return validShortcuts; });
var model = {
  actions: {
    cmdShiftK: function cmdShiftK(_ref) {
      var dispatch = _ref.dispatch;

      dispatch('toggleAllPanels');
    },
    cmdShiftL: function cmdShiftL(_ref2) {
      var dispatch = _ref2.dispatch;

      dispatch('toggleLeftPanel');
    },
    cmdShiftD: function cmdShiftD(_ref3) {
      var dispatch = _ref3.dispatch;

      dispatch('toggleBottomPanel');
    },
    cmdShiftLeft: function cmdShiftLeft(_ref4) {
      var dispatch = _ref4.dispatch;

      dispatch('playPrevious');
    },
    cmdShiftRight: function cmdShiftRight(_ref5) {
      var dispatch = _ref5.dispatch;

      dispatch('playNext');
    }
  }
};

/* harmony default export */ __webpack_exports__["b"] = model;
var validShortcuts = Object.keys(model.actions);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdG9yZS9tb2R1bGVzL3Nob3J0Y3V0cy5qcyJdLCJuYW1lcyI6WyJtb2RlbCIsImFjdGlvbnMiLCJjbWRTaGlmdEsiLCJkaXNwYXRjaCIsImNtZFNoaWZ0TCIsImNtZFNoaWZ0RCIsImNtZFNoaWZ0TGVmdCIsImNtZFNoaWZ0UmlnaHQiLCJ2YWxpZFNob3J0Y3V0cyIsIk9iamVjdCIsImtleXMiXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLFFBQVE7QUFDWkMsV0FBUztBQUNQQyxhQURPLDJCQUNlO0FBQUEsVUFBWEMsUUFBVyxRQUFYQSxRQUFXOztBQUNwQkEsZUFBUyxpQkFBVDtBQUNELEtBSE07QUFJUEMsYUFKTyw0QkFJZTtBQUFBLFVBQVhELFFBQVcsU0FBWEEsUUFBVzs7QUFDcEJBLGVBQVMsaUJBQVQ7QUFDRCxLQU5NO0FBT1BFLGFBUE8sNEJBT2U7QUFBQSxVQUFYRixRQUFXLFNBQVhBLFFBQVc7O0FBQ3BCQSxlQUFTLG1CQUFUO0FBQ0QsS0FUTTtBQVVQRyxnQkFWTywrQkFVa0I7QUFBQSxVQUFYSCxRQUFXLFNBQVhBLFFBQVc7O0FBQ3ZCQSxlQUFTLGNBQVQ7QUFDRCxLQVpNO0FBYVBJLGlCQWJPLGdDQWFtQjtBQUFBLFVBQVhKLFFBQVcsU0FBWEEsUUFBVzs7QUFDeEJBLGVBQVMsVUFBVDtBQUNEO0FBZk07QUFERyxDQUFkOztBQW9CQSxlQUFlSCxLQUFmO0FBQ0EsT0FBTyxJQUFNUSxpQkFBaUJDLE9BQU9DLElBQVAsQ0FBWVYsTUFBTUMsT0FBbEIsQ0FBdkIiLCJmaWxlIjoic2hvcnRjdXRzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95b3JkaS9Ud2luc2tpL1Byb2plY3RzL3Z1ZS1wbGF5Iiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9kZWwgPSB7XG4gIGFjdGlvbnM6IHtcbiAgICBjbWRTaGlmdEsoe2Rpc3BhdGNofSkge1xuICAgICAgZGlzcGF0Y2goJ3RvZ2dsZUFsbFBhbmVscycpXG4gICAgfSxcbiAgICBjbWRTaGlmdEwoe2Rpc3BhdGNofSkge1xuICAgICAgZGlzcGF0Y2goJ3RvZ2dsZUxlZnRQYW5lbCcpXG4gICAgfSxcbiAgICBjbWRTaGlmdEQoe2Rpc3BhdGNofSkge1xuICAgICAgZGlzcGF0Y2goJ3RvZ2dsZUJvdHRvbVBhbmVsJylcbiAgICB9LFxuICAgIGNtZFNoaWZ0TGVmdCh7ZGlzcGF0Y2h9KSB7XG4gICAgICBkaXNwYXRjaCgncGxheVByZXZpb3VzJylcbiAgICB9LFxuICAgIGNtZFNoaWZ0UmlnaHQoe2Rpc3BhdGNofSkge1xuICAgICAgZGlzcGF0Y2goJ3BsYXlOZXh0JylcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbW9kZWxcbmV4cG9ydCBjb25zdCB2YWxpZFNob3J0Y3V0cyA9IE9iamVjdC5rZXlzKG1vZGVsLmFjdGlvbnMpXG4iXX0=

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (spots, query) {
  var scenarios = spots[query.spot];
  if (scenarios) {
    var scenario = scenarios.filter(function (scenario) {
      return scenario.scenario === query.scenario;
    })[0];
    return scenario;
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy91dGlscy9maW5kLXNjZW5hcmlvLmpzIl0sIm5hbWVzIjpbInNwb3RzIiwicXVlcnkiLCJzY2VuYXJpb3MiLCJzcG90Iiwic2NlbmFyaW8iLCJmaWx0ZXIiXSwibWFwcGluZ3MiOiJBQUFBLGVBQWUsVUFBVUEsS0FBVixFQUFpQkMsS0FBakIsRUFBd0I7QUFDckMsTUFBTUMsWUFBWUYsTUFBTUMsTUFBTUUsSUFBWixDQUFsQjtBQUNBLE1BQUlELFNBQUosRUFBZTtBQUNiLFFBQU1FLFdBQVdGLFVBQVVHLE1BQVYsQ0FBaUIsb0JBQVk7QUFDNUMsYUFBT0QsU0FBU0EsUUFBVCxLQUFzQkgsTUFBTUcsUUFBbkM7QUFDRCxLQUZnQixFQUVkLENBRmMsQ0FBakI7QUFHQSxXQUFPQSxRQUFQO0FBQ0Q7QUFDRiIsImZpbGUiOiJmaW5kLXNjZW5hcmlvLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95b3JkaS9Ud2luc2tpL1Byb2plY3RzL3Z1ZS1wbGF5Iiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHNwb3RzLCBxdWVyeSkge1xuICBjb25zdCBzY2VuYXJpb3MgPSBzcG90c1txdWVyeS5zcG90XVxuICBpZiAoc2NlbmFyaW9zKSB7XG4gICAgY29uc3Qgc2NlbmFyaW8gPSBzY2VuYXJpb3MuZmlsdGVyKHNjZW5hcmlvID0+IHtcbiAgICAgIHJldHVybiBzY2VuYXJpby5zY2VuYXJpbyA9PT0gcXVlcnkuc2NlbmFyaW9cbiAgICB9KVswXVxuICAgIHJldHVybiBzY2VuYXJpb1xuICB9XG59XG4iXX0=

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_store_modules_shortcuts__ = __webpack_require__(3);
/* unused harmony export isModifierPressed */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return parseKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return executeShortcut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return observeKeyEvents; });


// Key codes
var keyK = 75;
var keyL = 76;
var keyD = 68;
var keyLeft = 37;
var keyRight = 39;
var keyWindows = 91;

var isModifierPressed = function isModifierPressed(e) {
  return (e.ctrlKey || e.keyCode === keyWindows || e.metaKey) && e.shiftKey;
};

var parseKey = function parseKey(e) {
  if (!isModifierPressed(e)) {
    return false;
  }

  switch (e.keyCode) {
    case keyK:
      e.preventDefault();
      return 'cmdShiftK';
    case keyL:
      e.preventDefault();
      return 'cmdShiftL';
    case keyD:
      e.preventDefault();
      return 'cmdShiftD';
    case keyLeft:
      e.preventDefault();
      return 'cmdShiftLeft';
    case keyRight:
      e.preventDefault();
      return 'cmdShiftRight';
    default:
      return false;
  }
};

var executeShortcut = function executeShortcut(store, combination) {
  if (combination) {
    if (!__WEBPACK_IMPORTED_MODULE_0_store_modules_shortcuts__["a" /* validShortcuts */].includes(combination)) {
      console.warn('Combination ' + combination + ' is not a valid shortcut');
      return;
    }
    store.dispatch(combination);
  }
};

var observeKeyEvents = function observeKeyEvents(store) {
  window.onkeydown = function (e) {
    var combination = parseKey(e);
    executeShortcut(store, combination);
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy91dGlscy9rZXktZXZlbnRzLmpzIl0sIm5hbWVzIjpbInZhbGlkU2hvcnRjdXRzIiwia2V5SyIsImtleUwiLCJrZXlEIiwia2V5TGVmdCIsImtleVJpZ2h0Iiwia2V5V2luZG93cyIsImlzTW9kaWZpZXJQcmVzc2VkIiwiZSIsImN0cmxLZXkiLCJrZXlDb2RlIiwibWV0YUtleSIsInNoaWZ0S2V5IiwicGFyc2VLZXkiLCJwcmV2ZW50RGVmYXVsdCIsImV4ZWN1dGVTaG9ydGN1dCIsInN0b3JlIiwiY29tYmluYXRpb24iLCJpbmNsdWRlcyIsImNvbnNvbGUiLCJ3YXJuIiwiZGlzcGF0Y2giLCJvYnNlcnZlS2V5RXZlbnRzIiwid2luZG93Iiwib25rZXlkb3duIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFRQSxjQUFSLFFBQTZCLHlCQUE3Qjs7QUFFQTtBQUNBLElBQU1DLE9BQU8sRUFBYjtBQUNBLElBQU1DLE9BQU8sRUFBYjtBQUNBLElBQU1DLE9BQU8sRUFBYjtBQUNBLElBQU1DLFVBQVUsRUFBaEI7QUFDQSxJQUFNQyxXQUFXLEVBQWpCO0FBQ0EsSUFBTUMsYUFBYSxFQUFuQjs7QUFFQSxPQUFPLElBQU1DLG9CQUFvQixTQUFwQkEsaUJBQW9CLElBQUs7QUFDcEMsU0FBTyxDQUFDQyxFQUFFQyxPQUFGLElBQWFELEVBQUVFLE9BQUYsS0FBY0osVUFBM0IsSUFBeUNFLEVBQUVHLE9BQTVDLEtBQXdESCxFQUFFSSxRQUFqRTtBQUNELENBRk07O0FBSVAsT0FBTyxJQUFNQyxXQUFXLFNBQVhBLFFBQVcsSUFBSztBQUMzQixNQUFJLENBQUNOLGtCQUFrQkMsQ0FBbEIsQ0FBTCxFQUEyQjtBQUN6QixXQUFPLEtBQVA7QUFDRDs7QUFFRCxVQUFRQSxFQUFFRSxPQUFWO0FBQ0UsU0FBS1QsSUFBTDtBQUNFTyxRQUFFTSxjQUFGO0FBQ0EsYUFBTyxXQUFQO0FBQ0YsU0FBS1osSUFBTDtBQUNFTSxRQUFFTSxjQUFGO0FBQ0EsYUFBTyxXQUFQO0FBQ0YsU0FBS1gsSUFBTDtBQUNFSyxRQUFFTSxjQUFGO0FBQ0EsYUFBTyxXQUFQO0FBQ0YsU0FBS1YsT0FBTDtBQUNFSSxRQUFFTSxjQUFGO0FBQ0EsYUFBTyxjQUFQO0FBQ0YsU0FBS1QsUUFBTDtBQUNFRyxRQUFFTSxjQUFGO0FBQ0EsYUFBTyxlQUFQO0FBQ0Y7QUFDRSxhQUFPLEtBQVA7QUFqQko7QUFtQkQsQ0F4Qk07O0FBMEJQLE9BQU8sSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVFDLFdBQVIsRUFBd0I7QUFDckQsTUFBSUEsV0FBSixFQUFpQjtBQUNmLFFBQUksQ0FBQ2pCLGVBQWVrQixRQUFmLENBQXdCRCxXQUF4QixDQUFMLEVBQTJDO0FBQ3pDRSxjQUFRQyxJQUFSLGtCQUE0QkgsV0FBNUI7QUFDQTtBQUNEO0FBQ0RELFVBQU1LLFFBQU4sQ0FBZUosV0FBZjtBQUNEO0FBQ0YsQ0FSTTs7QUFVUCxPQUFPLElBQU1LLG1CQUFtQixTQUFuQkEsZ0JBQW1CLFFBQVM7QUFDdkNDLFNBQU9DLFNBQVAsR0FBbUIsYUFBSztBQUN0QixRQUFNUCxjQUFjSixTQUFTTCxDQUFULENBQXBCO0FBQ0FPLG9CQUFnQkMsS0FBaEIsRUFBdUJDLFdBQXZCO0FBQ0QsR0FIRDtBQUlELENBTE0iLCJmaWxlIjoia2V5LWV2ZW50cy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveW9yZGkvVHdpbnNraS9Qcm9qZWN0cy92dWUtcGxheSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dmFsaWRTaG9ydGN1dHN9IGZyb20gJ3N0b3JlL21vZHVsZXMvc2hvcnRjdXRzJ1xuXG4vLyBLZXkgY29kZXNcbmNvbnN0IGtleUsgPSA3NVxuY29uc3Qga2V5TCA9IDc2XG5jb25zdCBrZXlEID0gNjhcbmNvbnN0IGtleUxlZnQgPSAzN1xuY29uc3Qga2V5UmlnaHQgPSAzOVxuY29uc3Qga2V5V2luZG93cyA9IDkxXG5cbmV4cG9ydCBjb25zdCBpc01vZGlmaWVyUHJlc3NlZCA9IGUgPT4ge1xuICByZXR1cm4gKGUuY3RybEtleSB8fCBlLmtleUNvZGUgPT09IGtleVdpbmRvd3MgfHwgZS5tZXRhS2V5KSAmJiBlLnNoaWZ0S2V5XG59XG5cbmV4cG9ydCBjb25zdCBwYXJzZUtleSA9IGUgPT4ge1xuICBpZiAoIWlzTW9kaWZpZXJQcmVzc2VkKGUpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgIGNhc2Uga2V5SzpcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgcmV0dXJuICdjbWRTaGlmdEsnXG4gICAgY2FzZSBrZXlMOlxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICByZXR1cm4gJ2NtZFNoaWZ0TCdcbiAgICBjYXNlIGtleUQ6XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIHJldHVybiAnY21kU2hpZnREJ1xuICAgIGNhc2Uga2V5TGVmdDpcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgcmV0dXJuICdjbWRTaGlmdExlZnQnXG4gICAgY2FzZSBrZXlSaWdodDpcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgcmV0dXJuICdjbWRTaGlmdFJpZ2h0J1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZXhlY3V0ZVNob3J0Y3V0ID0gKHN0b3JlLCBjb21iaW5hdGlvbikgPT4ge1xuICBpZiAoY29tYmluYXRpb24pIHtcbiAgICBpZiAoIXZhbGlkU2hvcnRjdXRzLmluY2x1ZGVzKGNvbWJpbmF0aW9uKSkge1xuICAgICAgY29uc29sZS53YXJuKGBDb21iaW5hdGlvbiAke2NvbWJpbmF0aW9ufSBpcyBub3QgYSB2YWxpZCBzaG9ydGN1dGApXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgc3RvcmUuZGlzcGF0Y2goY29tYmluYXRpb24pXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG9ic2VydmVLZXlFdmVudHMgPSBzdG9yZSA9PiB7XG4gIHdpbmRvdy5vbmtleWRvd24gPSBlID0+IHtcbiAgICBjb25zdCBjb21iaW5hdGlvbiA9IHBhcnNlS2V5KGUpXG4gICAgZXhlY3V0ZVNob3J0Y3V0KHN0b3JlLCBjb21iaW5hdGlvbilcbiAgfVxufVxuIl19

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Home_vue__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Home_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Home_vue__);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router___default.a);

/* harmony default export */ __webpack_exports__["a"] = new __WEBPACK_IMPORTED_MODULE_1_vue_router___default.a({
  mode: 'history',
  routes: [{
    path: '*',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Home_vue___default.a
  }]
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXIvaW5kZXguanMiXSwibmFtZXMiOlsiVnVlIiwiUm91dGVyIiwiSG9tZSIsInVzZSIsIm1vZGUiLCJyb3V0ZXMiLCJwYXRoIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxHQUFQLE1BQWdCLEtBQWhCO0FBQ0EsT0FBT0MsTUFBUCxNQUFtQixZQUFuQjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsd0JBQWpCOztBQUVBRixJQUFJRyxHQUFKLENBQVFGLE1BQVI7O0FBRUEsZUFBZSxJQUFJQSxNQUFKLENBQVc7QUFDeEJHLFFBQU0sU0FEa0I7QUFFeEJDLFVBQVEsQ0FDTjtBQUNFQyxVQUFNLEdBRFI7QUFFRUMsZUFBV0w7QUFGYixHQURNO0FBRmdCLENBQVgsQ0FBZiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveW9yZGkvVHdpbnNraS9Qcm9qZWN0cy92dWUtcGxheSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFJvdXRlciBmcm9tICd2dWUtcm91dGVyJ1xuaW1wb3J0IEhvbWUgZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lLnZ1ZSdcblxuVnVlLnVzZShSb3V0ZXIpXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBSb3V0ZXIoe1xuICBtb2RlOiAnaGlzdG9yeScsXG4gIHJvdXRlczogW1xuICAgIHtcbiAgICAgIHBhdGg6ICcqJyxcbiAgICAgIGNvbXBvbmVudDogSG9tZVxuICAgIH1cbiAgXVxufSlcbiJdfQ==

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highlight_js_lib_highlight__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_highlight_js_lib_highlight___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_highlight_js_lib_highlight__);

__WEBPACK_IMPORTED_MODULE_0_highlight_js_lib_highlight___default.a.registerLanguage('json', __webpack_require__(44));
__WEBPACK_IMPORTED_MODULE_0_highlight_js_lib_highlight___default.a.registerLanguage('javascript', __webpack_require__(43));
__WEBPACK_IMPORTED_MODULE_0_highlight_js_lib_highlight___default.a.registerLanguage('xml', __webpack_require__(45));

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0_highlight_js_lib_highlight___default.a;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy91dGlscy9oaWdobGlnaHQuanMiXSwibmFtZXMiOlsiaGxqcyIsInJlZ2lzdGVyTGFuZ3VhZ2UiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxJQUFQLE1BQWlCLDRCQUFqQjtBQUNBQSxLQUFLQyxnQkFBTCxDQUFzQixNQUF0QixFQUE4QkMsUUFBUSxpQ0FBUixDQUE5QjtBQUNBRixLQUFLQyxnQkFBTCxDQUFzQixZQUF0QixFQUFvQ0MsUUFBUSx1Q0FBUixDQUFwQztBQUNBRixLQUFLQyxnQkFBTCxDQUFzQixLQUF0QixFQUE2QkMsUUFBUSxnQ0FBUixDQUE3Qjs7QUFFQSxlQUFlRixJQUFmIiwiZmlsZSI6ImhpZ2hsaWdodC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveW9yZGkvVHdpbnNraS9Qcm9qZWN0cy92dWUtcGxheSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBobGpzIGZyb20gJ2hpZ2hsaWdodC5qcy9saWIvaGlnaGxpZ2h0J1xuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKCdqc29uJywgcmVxdWlyZSgnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvanNvbicpKVxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKCdqYXZhc2NyaXB0JywgcmVxdWlyZSgnaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvamF2YXNjcmlwdCcpKVxuaGxqcy5yZWdpc3Rlckxhbmd1YWdlKCd4bWwnLCByZXF1aXJlKCdoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy94bWwnKSlcblxuZXhwb3J0IGRlZmF1bHQgaGxqc1xuIl19

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return preventSelectStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return preventSelectStop; });
var preventSelectStart = function preventSelectStart() {
  document.onselectstart = function () {
    return false;
  };
};

var preventSelectStop = function preventSelectStop() {
  document.onselectstart = function () {
    return true;
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy91dGlscy9wcmV2ZW50LXNlbGVjdC5qcyJdLCJuYW1lcyI6WyJwcmV2ZW50U2VsZWN0U3RhcnQiLCJkb2N1bWVudCIsIm9uc2VsZWN0c3RhcnQiLCJwcmV2ZW50U2VsZWN0U3RvcCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxJQUFNQSxxQkFBcUIsU0FBckJBLGtCQUFxQixHQUFNO0FBQ3RDQyxXQUFTQyxhQUFULEdBQXlCO0FBQUEsV0FBTSxLQUFOO0FBQUEsR0FBekI7QUFDRCxDQUZNOztBQUlQLE9BQU8sSUFBTUMsb0JBQW9CLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUNyQ0YsV0FBU0MsYUFBVCxHQUF5QjtBQUFBLFdBQU0sSUFBTjtBQUFBLEdBQXpCO0FBQ0QsQ0FGTSIsImZpbGUiOiJwcmV2ZW50LXNlbGVjdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveW9yZGkvVHdpbnNraS9Qcm9qZWN0cy92dWUtcGxheSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcmV2ZW50U2VsZWN0U3RhcnQgPSAoKSA9PiB7XG4gIGRvY3VtZW50Lm9uc2VsZWN0c3RhcnQgPSAoKSA9PiBmYWxzZVxufVxuXG5leHBvcnQgY29uc3QgcHJldmVudFNlbGVjdFN0b3AgPSAoKSA9PiB7XG4gIGRvY3VtZW50Lm9uc2VsZWN0c3RhcnQgPSAoKSA9PiB0cnVlXG59XG4iXX0=

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (a, b) {
  return Object.keys(a).every(function (key) {
    return a[key] === b[key];
  });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy91dGlscy9zaGFsbG93LWVxdWFsLmpzIl0sIm5hbWVzIjpbImEiLCJiIiwiT2JqZWN0Iiwia2V5cyIsImV2ZXJ5Iiwia2V5Il0sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZSxVQUFDQSxDQUFELEVBQUlDLENBQUosRUFBVTtBQUN2QixTQUFPQyxPQUFPQyxJQUFQLENBQVlILENBQVosRUFBZUksS0FBZixDQUFxQixlQUFPO0FBQ2pDLFdBQU9KLEVBQUVLLEdBQUYsTUFBV0osRUFBRUksR0FBRixDQUFsQjtBQUNELEdBRk0sQ0FBUDtBQUdELENBSkQiLCJmaWxlIjoic2hhbGxvdy1lcXVhbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveW9yZGkvVHdpbnNraS9Qcm9qZWN0cy92dWUtcGxheSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChhLCBiKSA9PiB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhhKS5ldmVyeShrZXkgPT4ge1xuICAgIHJldHVybiBhW2tleV0gPT09IGJba2V5XVxuICB9KVxufVxuIl19

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_layout__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_playspot__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_shortcuts__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_toys__ = __webpack_require__(16);








__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex___default.a);

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex___default.a.Store({
  modules: {
    layout: __WEBPACK_IMPORTED_MODULE_2__modules_layout__["a" /* default */],
    playspot: __WEBPACK_IMPORTED_MODULE_3__modules_playspot__["a" /* default */],
    shortcuts: __WEBPACK_IMPORTED_MODULE_4__modules_shortcuts__["b" /* default */],
    toys: __WEBPACK_IMPORTED_MODULE_5__modules_toys__["a" /* default */]
  }
});

/* harmony default export */ __webpack_exports__["a"] = store;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdG9yZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJWdWUiLCJWdWV4IiwibGF5b3V0IiwicGxheXNwb3QiLCJzaG9ydGN1dHMiLCJ0b3lzIiwidXNlIiwic3RvcmUiLCJTdG9yZSIsIm1vZHVsZXMiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLEdBQVAsTUFBZ0IsS0FBaEI7QUFDQSxPQUFPQyxJQUFQLE1BQWlCLE1BQWpCOztBQUVBLE9BQU9DLE1BQVAsTUFBbUIsa0JBQW5CO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixvQkFBckI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLHFCQUF0QjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsZ0JBQWpCOztBQUVBTCxJQUFJTSxHQUFKLENBQVFMLElBQVI7O0FBRUEsSUFBTU0sUUFBUSxJQUFJTixLQUFLTyxLQUFULENBQWU7QUFDM0JDLFdBQVM7QUFDUFAsa0JBRE87QUFFUEMsc0JBRk87QUFHUEMsd0JBSE87QUFJUEM7QUFKTztBQURrQixDQUFmLENBQWQ7O0FBU0EsZUFBZUUsS0FBZiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveW9yZGkvVHdpbnNraS9Qcm9qZWN0cy92dWUtcGxheSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCdcblxuaW1wb3J0IGxheW91dCBmcm9tICcuL21vZHVsZXMvbGF5b3V0J1xuaW1wb3J0IHBsYXlzcG90IGZyb20gJy4vbW9kdWxlcy9wbGF5c3BvdCdcbmltcG9ydCBzaG9ydGN1dHMgZnJvbSAnLi9tb2R1bGVzL3Nob3J0Y3V0cydcbmltcG9ydCB0b3lzIGZyb20gJy4vbW9kdWxlcy90b3lzJ1xuXG5WdWUudXNlKFZ1ZXgpXG5cbmNvbnN0IHN0b3JlID0gbmV3IFZ1ZXguU3RvcmUoe1xuICBtb2R1bGVzOiB7XG4gICAgbGF5b3V0LFxuICAgIHBsYXlzcG90LFxuICAgIHNob3J0Y3V0cyxcbiAgICB0b3lzXG4gIH1cbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlXG4iXX0=

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports) {

module.exports = require("vuex-router-sync");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TOGGLE_LEFT_PANEL */
/* unused harmony export TOGGLE_BOTTOM_PANEL */
/* unused harmony export TOGGLE_ALL_PANELS */
/* unused harmony export UPDATE_SIDEBAR_WIDTH */
/* unused harmony export UPDATE_ACTIVE_TAB */
/* unused harmony export TOGGLE_HELP */
var TOGGLE_LEFT_PANEL = 'TOGGLE_LEFT_PANEL';
var TOGGLE_BOTTOM_PANEL = 'TOGGLE_BOTTOM_PANEL';
var TOGGLE_ALL_PANELS = 'TOGGLE_ALL_PANELS';
var UPDATE_SIDEBAR_WIDTH = 'UPDATE_SIDEBAR_WIDTH';
var UPDATE_ACTIVE_TAB = 'UPDATE_ACTIVE_TAB';
var TOGGLE_HELP = 'TOGGLE_HELP';

/* harmony default export */ __webpack_exports__["a"] = {
  state: {
    leftPanelExpanded: true,
    bottomPanelExpanded: true,
    sidebarWidth: 280,
    activeTab: null,
    showHelp: false
  },
  mutations: {
    TOGGLE_LEFT_PANEL: function TOGGLE_LEFT_PANEL(state) {
      state.leftPanelExpanded = !state.leftPanelExpanded;
    },
    TOGGLE_BOTTOM_PANEL: function TOGGLE_BOTTOM_PANEL(state) {
      state.bottomPanelExpanded = !state.bottomPanelExpanded;
    },
    UPDATE_SIDEBAR_WIDTH: function UPDATE_SIDEBAR_WIDTH(state, payload) {
      state.sidebarWidth = payload;
    },
    UPDATE_ACTIVE_TAB: function UPDATE_ACTIVE_TAB(state, payload) {
      state.activeTab = payload;
    },
    TOGGLE_HELP: function TOGGLE_HELP(state) {
      state.showHelp = !state.showHelp;
    }
  },
  actions: {
    toggleLeftPanel: function toggleLeftPanel(_ref) {
      var commit = _ref.commit;

      commit(TOGGLE_LEFT_PANEL);
    },
    toggleBottomPanel: function toggleBottomPanel(_ref2) {
      var commit = _ref2.commit;

      commit(TOGGLE_BOTTOM_PANEL);
    },
    toggleAllPanels: function toggleAllPanels(_ref3) {
      var commit = _ref3.commit,
          state = _ref3.state;

      if (state.leftPanelExpanded && state.bottomPanelExpanded || !state.leftPanelExpanded && !state.bottomPanelExpanded) {
        commit(TOGGLE_LEFT_PANEL);
        commit(TOGGLE_BOTTOM_PANEL);
      } else {
        if (state.leftPanelExpanded) {
          commit(TOGGLE_LEFT_PANEL);
        }
        if (state.bottomPanelExpanded) {
          commit(TOGGLE_BOTTOM_PANEL);
        }
      }
    },
    updateSidebarWidth: function updateSidebarWidth(_ref4, payload) {
      var commit = _ref4.commit;

      commit(UPDATE_SIDEBAR_WIDTH, payload);
    },
    updateActiveTab: function updateActiveTab(_ref5, payload) {
      var commit = _ref5.commit;

      commit(UPDATE_ACTIVE_TAB, payload);
    },
    toggleHelp: function toggleHelp(_ref6) {
      var commit = _ref6.commit;

      commit(TOGGLE_HELP);
    }
  },
  getters: {
    leftPanelExpanded: function leftPanelExpanded(state) {
      return state.leftPanelExpanded;
    },
    bottomPanelExpanded: function bottomPanelExpanded(state) {
      return state.bottomPanelExpanded;
    },
    bottomPanelHeight: function bottomPanelHeight(state) {
      return state.bottomPanelHeight;
    },
    sidebarWidth: function sidebarWidth(state) {
      return state.sidebarWidth + 'px';
    },
    mainWidth: function mainWidth(state, getters) {
      return 'calc(100% - ' + getters.sidebarWidth + ')';
    },
    activeTab: function activeTab(state) {
      return state.activeTab;
    },
    showHelp: function showHelp(state) {
      return state.showHelp;
    }
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdG9yZS9tb2R1bGVzL2xheW91dC5qcyJdLCJuYW1lcyI6WyJUT0dHTEVfTEVGVF9QQU5FTCIsIlRPR0dMRV9CT1RUT01fUEFORUwiLCJUT0dHTEVfQUxMX1BBTkVMUyIsIlVQREFURV9TSURFQkFSX1dJRFRIIiwiVVBEQVRFX0FDVElWRV9UQUIiLCJUT0dHTEVfSEVMUCIsInN0YXRlIiwibGVmdFBhbmVsRXhwYW5kZWQiLCJib3R0b21QYW5lbEV4cGFuZGVkIiwic2lkZWJhcldpZHRoIiwiYWN0aXZlVGFiIiwic2hvd0hlbHAiLCJtdXRhdGlvbnMiLCJwYXlsb2FkIiwiYWN0aW9ucyIsInRvZ2dsZUxlZnRQYW5lbCIsImNvbW1pdCIsInRvZ2dsZUJvdHRvbVBhbmVsIiwidG9nZ2xlQWxsUGFuZWxzIiwidXBkYXRlU2lkZWJhcldpZHRoIiwidXBkYXRlQWN0aXZlVGFiIiwidG9nZ2xlSGVscCIsImdldHRlcnMiLCJib3R0b21QYW5lbEhlaWdodCIsIm1haW5XaWR0aCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxJQUFNQSxvQkFBb0IsbUJBQTFCO0FBQ1AsT0FBTyxJQUFNQyxzQkFBc0IscUJBQTVCO0FBQ1AsT0FBTyxJQUFNQyxvQkFBb0IsbUJBQTFCO0FBQ1AsT0FBTyxJQUFNQyx1QkFBdUIsc0JBQTdCO0FBQ1AsT0FBTyxJQUFNQyxvQkFBb0IsbUJBQTFCO0FBQ1AsT0FBTyxJQUFNQyxjQUFjLGFBQXBCOztBQUVQLGVBQWU7QUFDYkMsU0FBTztBQUNMQyx1QkFBbUIsSUFEZDtBQUVMQyx5QkFBcUIsSUFGaEI7QUFHTEMsa0JBQWMsR0FIVDtBQUlMQyxlQUFXLElBSk47QUFLTEMsY0FBVTtBQUxMLEdBRE07QUFRYkMsYUFBVztBQUNUWixxQkFEUyw2QkFDU00sS0FEVCxFQUNnQjtBQUN2QkEsWUFBTUMsaUJBQU4sR0FBMEIsQ0FBQ0QsTUFBTUMsaUJBQWpDO0FBQ0QsS0FIUTtBQUlUTix1QkFKUywrQkFJV0ssS0FKWCxFQUlrQjtBQUN6QkEsWUFBTUUsbUJBQU4sR0FBNEIsQ0FBQ0YsTUFBTUUsbUJBQW5DO0FBQ0QsS0FOUTtBQU9UTCx3QkFQUyxnQ0FPWUcsS0FQWixFQU9tQk8sT0FQbkIsRUFPNEI7QUFDbkNQLFlBQU1HLFlBQU4sR0FBcUJJLE9BQXJCO0FBQ0QsS0FUUTtBQVVUVCxxQkFWUyw2QkFVU0UsS0FWVCxFQVVnQk8sT0FWaEIsRUFVeUI7QUFDaENQLFlBQU1JLFNBQU4sR0FBa0JHLE9BQWxCO0FBQ0QsS0FaUTtBQWFUUixlQWJTLHVCQWFHQyxLQWJILEVBYVU7QUFDakJBLFlBQU1LLFFBQU4sR0FBaUIsQ0FBQ0wsTUFBTUssUUFBeEI7QUFDRDtBQWZRLEdBUkU7QUF5QmJHLFdBQVM7QUFDUEMsbUJBRE8saUNBQ21CO0FBQUEsVUFBVEMsTUFBUyxRQUFUQSxNQUFTOztBQUN4QkEsYUFBT2hCLGlCQUFQO0FBQ0QsS0FITTtBQUlQaUIscUJBSk8sb0NBSXFCO0FBQUEsVUFBVEQsTUFBUyxTQUFUQSxNQUFTOztBQUMxQkEsYUFBT2YsbUJBQVA7QUFDRCxLQU5NO0FBT1BpQixtQkFQTyxrQ0FPMEI7QUFBQSxVQUFoQkYsTUFBZ0IsU0FBaEJBLE1BQWdCO0FBQUEsVUFBUlYsS0FBUSxTQUFSQSxLQUFROztBQUMvQixVQUFLQSxNQUFNQyxpQkFBTixJQUEyQkQsTUFBTUUsbUJBQWxDLElBQTJELENBQUNGLE1BQU1DLGlCQUFQLElBQTRCLENBQUNELE1BQU1FLG1CQUFsRyxFQUF3SDtBQUN0SFEsZUFBT2hCLGlCQUFQO0FBQ0FnQixlQUFPZixtQkFBUDtBQUNELE9BSEQsTUFHTztBQUNMLFlBQUlLLE1BQU1DLGlCQUFWLEVBQTZCO0FBQzNCUyxpQkFBT2hCLGlCQUFQO0FBQ0Q7QUFDRCxZQUFJTSxNQUFNRSxtQkFBVixFQUErQjtBQUM3QlEsaUJBQU9mLG1CQUFQO0FBQ0Q7QUFDRjtBQUNGLEtBbkJNO0FBb0JQa0Isc0JBcEJPLHFDQW9Cc0JOLE9BcEJ0QixFQW9CK0I7QUFBQSxVQUFsQkcsTUFBa0IsU0FBbEJBLE1BQWtCOztBQUNwQ0EsYUFBT2Isb0JBQVAsRUFBNkJVLE9BQTdCO0FBQ0QsS0F0Qk07QUF1QlBPLG1CQXZCTyxrQ0F1Qm1CUCxPQXZCbkIsRUF1QjRCO0FBQUEsVUFBbEJHLE1BQWtCLFNBQWxCQSxNQUFrQjs7QUFDakNBLGFBQU9aLGlCQUFQLEVBQTBCUyxPQUExQjtBQUNELEtBekJNO0FBMEJQUSxjQTFCTyw2QkEwQmM7QUFBQSxVQUFUTCxNQUFTLFNBQVRBLE1BQVM7O0FBQ25CQSxhQUFPWCxXQUFQO0FBQ0Q7QUE1Qk0sR0F6Qkk7QUF1RGJpQixXQUFTO0FBQ1BmLHFCQURPLDZCQUNXRCxLQURYLEVBQ2tCO0FBQ3ZCLGFBQU9BLE1BQU1DLGlCQUFiO0FBQ0QsS0FITTtBQUlQQyx1QkFKTywrQkFJYUYsS0FKYixFQUlvQjtBQUN6QixhQUFPQSxNQUFNRSxtQkFBYjtBQUNELEtBTk07QUFPUGUscUJBUE8sNkJBT1dqQixLQVBYLEVBT2tCO0FBQ3ZCLGFBQU9BLE1BQU1pQixpQkFBYjtBQUNELEtBVE07QUFVUGQsZ0JBVk8sd0JBVU1ILEtBVk4sRUFVYTtBQUNsQixhQUFPQSxNQUFNRyxZQUFOLEdBQXFCLElBQTVCO0FBQ0QsS0FaTTtBQWFQZSxhQWJPLHFCQWFHbEIsS0FiSCxFQWFVZ0IsT0FiVixFQWFtQjtBQUN4Qiw4QkFBc0JBLFFBQVFiLFlBQTlCO0FBQ0QsS0FmTTtBQWdCUEMsYUFoQk8scUJBZ0JHSixLQWhCSCxFQWdCVTtBQUNmLGFBQU9BLE1BQU1JLFNBQWI7QUFDRCxLQWxCTTtBQW1CUEMsWUFuQk8sb0JBbUJFTCxLQW5CRixFQW1CUztBQUNkLGFBQU9BLE1BQU1LLFFBQWI7QUFDRDtBQXJCTTtBQXZESSxDQUFmIiwiZmlsZSI6ImxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveW9yZGkvVHdpbnNraS9Qcm9qZWN0cy92dWUtcGxheSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBUT0dHTEVfTEVGVF9QQU5FTCA9ICdUT0dHTEVfTEVGVF9QQU5FTCdcbmV4cG9ydCBjb25zdCBUT0dHTEVfQk9UVE9NX1BBTkVMID0gJ1RPR0dMRV9CT1RUT01fUEFORUwnXG5leHBvcnQgY29uc3QgVE9HR0xFX0FMTF9QQU5FTFMgPSAnVE9HR0xFX0FMTF9QQU5FTFMnXG5leHBvcnQgY29uc3QgVVBEQVRFX1NJREVCQVJfV0lEVEggPSAnVVBEQVRFX1NJREVCQVJfV0lEVEgnXG5leHBvcnQgY29uc3QgVVBEQVRFX0FDVElWRV9UQUIgPSAnVVBEQVRFX0FDVElWRV9UQUInXG5leHBvcnQgY29uc3QgVE9HR0xFX0hFTFAgPSAnVE9HR0xFX0hFTFAnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3RhdGU6IHtcbiAgICBsZWZ0UGFuZWxFeHBhbmRlZDogdHJ1ZSxcbiAgICBib3R0b21QYW5lbEV4cGFuZGVkOiB0cnVlLFxuICAgIHNpZGViYXJXaWR0aDogMjgwLFxuICAgIGFjdGl2ZVRhYjogbnVsbCxcbiAgICBzaG93SGVscDogZmFsc2VcbiAgfSxcbiAgbXV0YXRpb25zOiB7XG4gICAgVE9HR0xFX0xFRlRfUEFORUwoc3RhdGUpIHtcbiAgICAgIHN0YXRlLmxlZnRQYW5lbEV4cGFuZGVkID0gIXN0YXRlLmxlZnRQYW5lbEV4cGFuZGVkXG4gICAgfSxcbiAgICBUT0dHTEVfQk9UVE9NX1BBTkVMKHN0YXRlKSB7XG4gICAgICBzdGF0ZS5ib3R0b21QYW5lbEV4cGFuZGVkID0gIXN0YXRlLmJvdHRvbVBhbmVsRXhwYW5kZWRcbiAgICB9LFxuICAgIFVQREFURV9TSURFQkFSX1dJRFRIKHN0YXRlLCBwYXlsb2FkKSB7XG4gICAgICBzdGF0ZS5zaWRlYmFyV2lkdGggPSBwYXlsb2FkXG4gICAgfSxcbiAgICBVUERBVEVfQUNUSVZFX1RBQihzdGF0ZSwgcGF5bG9hZCkge1xuICAgICAgc3RhdGUuYWN0aXZlVGFiID0gcGF5bG9hZFxuICAgIH0sXG4gICAgVE9HR0xFX0hFTFAoc3RhdGUpIHtcbiAgICAgIHN0YXRlLnNob3dIZWxwID0gIXN0YXRlLnNob3dIZWxwXG4gICAgfVxuICB9LFxuICBhY3Rpb25zOiB7XG4gICAgdG9nZ2xlTGVmdFBhbmVsKHtjb21taXR9KSB7XG4gICAgICBjb21taXQoVE9HR0xFX0xFRlRfUEFORUwpXG4gICAgfSxcbiAgICB0b2dnbGVCb3R0b21QYW5lbCh7Y29tbWl0fSkge1xuICAgICAgY29tbWl0KFRPR0dMRV9CT1RUT01fUEFORUwpXG4gICAgfSxcbiAgICB0b2dnbGVBbGxQYW5lbHMoe2NvbW1pdCwgc3RhdGV9KSB7XG4gICAgICBpZiAoKHN0YXRlLmxlZnRQYW5lbEV4cGFuZGVkICYmIHN0YXRlLmJvdHRvbVBhbmVsRXhwYW5kZWQpIHx8ICghc3RhdGUubGVmdFBhbmVsRXhwYW5kZWQgJiYgIXN0YXRlLmJvdHRvbVBhbmVsRXhwYW5kZWQpKSB7XG4gICAgICAgIGNvbW1pdChUT0dHTEVfTEVGVF9QQU5FTClcbiAgICAgICAgY29tbWl0KFRPR0dMRV9CT1RUT01fUEFORUwpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoc3RhdGUubGVmdFBhbmVsRXhwYW5kZWQpIHtcbiAgICAgICAgICBjb21taXQoVE9HR0xFX0xFRlRfUEFORUwpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXRlLmJvdHRvbVBhbmVsRXhwYW5kZWQpIHtcbiAgICAgICAgICBjb21taXQoVE9HR0xFX0JPVFRPTV9QQU5FTClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgdXBkYXRlU2lkZWJhcldpZHRoKHtjb21taXR9LCBwYXlsb2FkKSB7XG4gICAgICBjb21taXQoVVBEQVRFX1NJREVCQVJfV0lEVEgsIHBheWxvYWQpXG4gICAgfSxcbiAgICB1cGRhdGVBY3RpdmVUYWIoe2NvbW1pdH0sIHBheWxvYWQpIHtcbiAgICAgIGNvbW1pdChVUERBVEVfQUNUSVZFX1RBQiwgcGF5bG9hZClcbiAgICB9LFxuICAgIHRvZ2dsZUhlbHAoe2NvbW1pdH0pIHtcbiAgICAgIGNvbW1pdChUT0dHTEVfSEVMUClcbiAgICB9XG4gIH0sXG4gIGdldHRlcnM6IHtcbiAgICBsZWZ0UGFuZWxFeHBhbmRlZChzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmxlZnRQYW5lbEV4cGFuZGVkXG4gICAgfSxcbiAgICBib3R0b21QYW5lbEV4cGFuZGVkKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUuYm90dG9tUGFuZWxFeHBhbmRlZFxuICAgIH0sXG4gICAgYm90dG9tUGFuZWxIZWlnaHQoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5ib3R0b21QYW5lbEhlaWdodFxuICAgIH0sXG4gICAgc2lkZWJhcldpZHRoKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUuc2lkZWJhcldpZHRoICsgJ3B4J1xuICAgIH0sXG4gICAgbWFpbldpZHRoKHN0YXRlLCBnZXR0ZXJzKSB7XG4gICAgICByZXR1cm4gYGNhbGMoMTAwJSAtICR7Z2V0dGVycy5zaWRlYmFyV2lkdGh9KWBcbiAgICB9LFxuICAgIGFjdGl2ZVRhYihzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmFjdGl2ZVRhYlxuICAgIH0sXG4gICAgc2hvd0hlbHAoc3RhdGUpIHtcbiAgICAgIHJldHVybiBzdGF0ZS5zaG93SGVscFxuICAgIH1cbiAgfVxufVxuIl19

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_array_find_index__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_array_find_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_array_find_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utils_shallow_equal__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_router__ = __webpack_require__(6);
/* unused harmony export UPDATE_CURRENT_SCENARIO */




var UPDATE_CURRENT_SCENARIO = 'UPDATE_CURRENT_SCENARIO';

var updateCurrent = function updateCurrent(state, payload) {
  state.current = payload;
};

/* harmony default export */ __webpack_exports__["a"] = {
  state: {
    current: null
  },
  mutations: {
    UPDATE_CURRENT_SCENARIO: updateCurrent
  },
  actions: {
    playNext: function playNext(_ref) {
      var commit = _ref.commit,
          getters = _ref.getters,
          state = _ref.state;

      var total = getters.playspotRoutes.length;
      var current = __WEBPACK_IMPORTED_MODULE_0_array_find_index___default()(getters.playspotRoutes, function (element) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils_shallow_equal__["a" /* default */])(state.current, element);
      });
      var nextIndex = (current + 1) % total;
      var next = getters.playspotRoutes[nextIndex];
      commit(UPDATE_CURRENT_SCENARIO, next);
      __WEBPACK_IMPORTED_MODULE_2_router__["a" /* default */].push({ query: next });
    },
    playPrevious: function playPrevious(_ref2) {
      var commit = _ref2.commit,
          getters = _ref2.getters,
          state = _ref2.state;

      var total = getters.playspotRoutes.length;
      var current = __WEBPACK_IMPORTED_MODULE_0_array_find_index___default()(getters.playspotRoutes, function (element) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils_shallow_equal__["a" /* default */])(state.current, element);
      });
      var prevIndex = (total + (current - 1)) % total;
      var prev = getters.playspotRoutes[prevIndex];
      commit(UPDATE_CURRENT_SCENARIO, prev);
      __WEBPACK_IMPORTED_MODULE_2_router__["a" /* default */].push({ query: prev });
    },
    updateCurrentScenario: function updateCurrentScenario(_ref3, path) {
      var commit = _ref3.commit;

      commit(UPDATE_CURRENT_SCENARIO, path);
    },
    activateSpot: function activateSpot(_ref4, spot) {
      var commit = _ref4.commit,
          getters = _ref4.getters;
      var scenario = getters.visibleScenarios[spot][0].scenario;

      __WEBPACK_IMPORTED_MODULE_2_router__["a" /* default */].push({ query: { spot: spot, scenario: scenario } });
    }
  },
  getters: {
    currentScenario: function currentScenario(state, getters, rootState) {
      var _rootState$route$quer = rootState.route.query,
          spot = _rootState$route$quer.spot,
          scenario = _rootState$route$quer.scenario;

      return state.current || { spot: spot, scenario: scenario };
    }
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdG9yZS9tb2R1bGVzL3BsYXlzcG90LmpzIl0sIm5hbWVzIjpbImZpbmRJbmRleCIsInNoYWxsb3dFcXVhbCIsInJvdXRlciIsIlVQREFURV9DVVJSRU5UX1NDRU5BUklPIiwidXBkYXRlQ3VycmVudCIsInN0YXRlIiwicGF5bG9hZCIsImN1cnJlbnQiLCJtdXRhdGlvbnMiLCJhY3Rpb25zIiwicGxheU5leHQiLCJjb21taXQiLCJnZXR0ZXJzIiwidG90YWwiLCJwbGF5c3BvdFJvdXRlcyIsImxlbmd0aCIsImVsZW1lbnQiLCJuZXh0SW5kZXgiLCJuZXh0IiwicHVzaCIsInF1ZXJ5IiwicGxheVByZXZpb3VzIiwicHJldkluZGV4IiwicHJldiIsInVwZGF0ZUN1cnJlbnRTY2VuYXJpbyIsInBhdGgiLCJhY3RpdmF0ZVNwb3QiLCJzcG90Iiwic2NlbmFyaW8iLCJ2aXNpYmxlU2NlbmFyaW9zIiwiY3VycmVudFNjZW5hcmlvIiwicm9vdFN0YXRlIiwicm91dGUiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLFNBQVAsTUFBc0Isa0JBQXRCO0FBQ0EsT0FBT0MsWUFBUCxNQUF5QixxQkFBekI7QUFDQSxPQUFPQyxNQUFQLE1BQW1CLFFBQW5COztBQUVBLE9BQU8sSUFBTUMsMEJBQTBCLHlCQUFoQzs7QUFFUCxJQUFNQyxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQUNDLEtBQUQsRUFBUUMsT0FBUixFQUFvQjtBQUN4Q0QsUUFBTUUsT0FBTixHQUFnQkQsT0FBaEI7QUFDRCxDQUZEOztBQUlBLGVBQWU7QUFDYkQsU0FBTztBQUNMRSxhQUFTO0FBREosR0FETTtBQUliQyxhQUFXO0FBQ1RMLDZCQUF5QkM7QUFEaEIsR0FKRTtBQU9iSyxXQUFTO0FBQ1BDLFlBRE8sMEJBQzRCO0FBQUEsVUFBekJDLE1BQXlCLFFBQXpCQSxNQUF5QjtBQUFBLFVBQWpCQyxPQUFpQixRQUFqQkEsT0FBaUI7QUFBQSxVQUFSUCxLQUFRLFFBQVJBLEtBQVE7O0FBQ2pDLFVBQU1RLFFBQVFELFFBQVFFLGNBQVIsQ0FBdUJDLE1BQXJDO0FBQ0EsVUFBTVIsVUFBVVAsVUFBVVksUUFBUUUsY0FBbEIsRUFBa0MsbUJBQVc7QUFDM0QsZUFBT2IsYUFBYUksTUFBTUUsT0FBbkIsRUFBNEJTLE9BQTVCLENBQVA7QUFDRCxPQUZlLENBQWhCO0FBR0EsVUFBTUMsWUFBWSxDQUFDVixVQUFVLENBQVgsSUFBZ0JNLEtBQWxDO0FBQ0EsVUFBTUssT0FBT04sUUFBUUUsY0FBUixDQUF1QkcsU0FBdkIsQ0FBYjtBQUNBTixhQUFPUix1QkFBUCxFQUFnQ2UsSUFBaEM7QUFDQWhCLGFBQU9pQixJQUFQLENBQVksRUFBQ0MsT0FBT0YsSUFBUixFQUFaO0FBQ0QsS0FWTTtBQVdQRyxnQkFYTywrQkFXZ0M7QUFBQSxVQUF6QlYsTUFBeUIsU0FBekJBLE1BQXlCO0FBQUEsVUFBakJDLE9BQWlCLFNBQWpCQSxPQUFpQjtBQUFBLFVBQVJQLEtBQVEsU0FBUkEsS0FBUTs7QUFDckMsVUFBTVEsUUFBUUQsUUFBUUUsY0FBUixDQUF1QkMsTUFBckM7QUFDQSxVQUFNUixVQUFVUCxVQUFVWSxRQUFRRSxjQUFsQixFQUFrQyxtQkFBVztBQUMzRCxlQUFPYixhQUFhSSxNQUFNRSxPQUFuQixFQUE0QlMsT0FBNUIsQ0FBUDtBQUNELE9BRmUsQ0FBaEI7QUFHQSxVQUFNTSxZQUFZLENBQUNULFNBQVNOLFVBQVUsQ0FBbkIsQ0FBRCxJQUEwQk0sS0FBNUM7QUFDQSxVQUFNVSxPQUFPWCxRQUFRRSxjQUFSLENBQXVCUSxTQUF2QixDQUFiO0FBQ0FYLGFBQU9SLHVCQUFQLEVBQWdDb0IsSUFBaEM7QUFDQXJCLGFBQU9pQixJQUFQLENBQVksRUFBQ0MsT0FBT0csSUFBUixFQUFaO0FBQ0QsS0FwQk07QUFxQlBDLHlCQXJCTyx3Q0FxQnlCQyxJQXJCekIsRUFxQitCO0FBQUEsVUFBZmQsTUFBZSxTQUFmQSxNQUFlOztBQUNwQ0EsYUFBT1IsdUJBQVAsRUFBZ0NzQixJQUFoQztBQUNELEtBdkJNO0FBd0JQQyxnQkF4Qk8sK0JBd0J5QkMsSUF4QnpCLEVBd0IrQjtBQUFBLFVBQXhCaEIsTUFBd0IsU0FBeEJBLE1BQXdCO0FBQUEsVUFBaEJDLE9BQWdCLFNBQWhCQSxPQUFnQjtBQUFBLFVBQzdCZ0IsUUFENkIsR0FDakJoQixRQUFRaUIsZ0JBQVIsQ0FBeUJGLElBQXpCLEVBQStCLENBQS9CLENBRGlCLENBQzdCQyxRQUQ2Qjs7QUFFcEMxQixhQUFPaUIsSUFBUCxDQUFZLEVBQUNDLE9BQU8sRUFBQ08sVUFBRCxFQUFPQyxrQkFBUCxFQUFSLEVBQVo7QUFDRDtBQTNCTSxHQVBJO0FBb0NiaEIsV0FBUztBQUNQa0IsbUJBRE8sMkJBQ1N6QixLQURULEVBQ2dCTyxPQURoQixFQUN5Qm1CLFNBRHpCLEVBQ29DO0FBQUEsa0NBQ2hCQSxVQUFVQyxLQUFWLENBQWdCWixLQURBO0FBQUEsVUFDbENPLElBRGtDLHlCQUNsQ0EsSUFEa0M7QUFBQSxVQUM1QkMsUUFENEIseUJBQzVCQSxRQUQ0Qjs7QUFFekMsYUFBT3ZCLE1BQU1FLE9BQU4sSUFBaUIsRUFBQ29CLFVBQUQsRUFBT0Msa0JBQVAsRUFBeEI7QUFDRDtBQUpNO0FBcENJLENBQWYiLCJmaWxlIjoicGxheXNwb3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lvcmRpL1R3aW5za2kvUHJvamVjdHMvdnVlLXBsYXkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmluZEluZGV4IGZyb20gJ2FycmF5LWZpbmQtaW5kZXgnXG5pbXBvcnQgc2hhbGxvd0VxdWFsIGZyb20gJ3V0aWxzL3NoYWxsb3ctZXF1YWwnXG5pbXBvcnQgcm91dGVyIGZyb20gJ3JvdXRlcidcblxuZXhwb3J0IGNvbnN0IFVQREFURV9DVVJSRU5UX1NDRU5BUklPID0gJ1VQREFURV9DVVJSRU5UX1NDRU5BUklPJ1xuXG5jb25zdCB1cGRhdGVDdXJyZW50ID0gKHN0YXRlLCBwYXlsb2FkKSA9PiB7XG4gIHN0YXRlLmN1cnJlbnQgPSBwYXlsb2FkXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3RhdGU6IHtcbiAgICBjdXJyZW50OiBudWxsXG4gIH0sXG4gIG11dGF0aW9uczoge1xuICAgIFVQREFURV9DVVJSRU5UX1NDRU5BUklPOiB1cGRhdGVDdXJyZW50XG4gIH0sXG4gIGFjdGlvbnM6IHtcbiAgICBwbGF5TmV4dCh7Y29tbWl0LCBnZXR0ZXJzLCBzdGF0ZX0pIHtcbiAgICAgIGNvbnN0IHRvdGFsID0gZ2V0dGVycy5wbGF5c3BvdFJvdXRlcy5sZW5ndGhcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBmaW5kSW5kZXgoZ2V0dGVycy5wbGF5c3BvdFJvdXRlcywgZWxlbWVudCA9PiB7XG4gICAgICAgIHJldHVybiBzaGFsbG93RXF1YWwoc3RhdGUuY3VycmVudCwgZWxlbWVudClcbiAgICAgIH0pXG4gICAgICBjb25zdCBuZXh0SW5kZXggPSAoY3VycmVudCArIDEpICUgdG90YWxcbiAgICAgIGNvbnN0IG5leHQgPSBnZXR0ZXJzLnBsYXlzcG90Um91dGVzW25leHRJbmRleF1cbiAgICAgIGNvbW1pdChVUERBVEVfQ1VSUkVOVF9TQ0VOQVJJTywgbmV4dClcbiAgICAgIHJvdXRlci5wdXNoKHtxdWVyeTogbmV4dH0pXG4gICAgfSxcbiAgICBwbGF5UHJldmlvdXMoe2NvbW1pdCwgZ2V0dGVycywgc3RhdGV9KSB7XG4gICAgICBjb25zdCB0b3RhbCA9IGdldHRlcnMucGxheXNwb3RSb3V0ZXMubGVuZ3RoXG4gICAgICBjb25zdCBjdXJyZW50ID0gZmluZEluZGV4KGdldHRlcnMucGxheXNwb3RSb3V0ZXMsIGVsZW1lbnQgPT4ge1xuICAgICAgICByZXR1cm4gc2hhbGxvd0VxdWFsKHN0YXRlLmN1cnJlbnQsIGVsZW1lbnQpXG4gICAgICB9KVxuICAgICAgY29uc3QgcHJldkluZGV4ID0gKHRvdGFsICsgKGN1cnJlbnQgLSAxKSkgJSB0b3RhbFxuICAgICAgY29uc3QgcHJldiA9IGdldHRlcnMucGxheXNwb3RSb3V0ZXNbcHJldkluZGV4XVxuICAgICAgY29tbWl0KFVQREFURV9DVVJSRU5UX1NDRU5BUklPLCBwcmV2KVxuICAgICAgcm91dGVyLnB1c2goe3F1ZXJ5OiBwcmV2fSlcbiAgICB9LFxuICAgIHVwZGF0ZUN1cnJlbnRTY2VuYXJpbyh7Y29tbWl0fSwgcGF0aCkge1xuICAgICAgY29tbWl0KFVQREFURV9DVVJSRU5UX1NDRU5BUklPLCBwYXRoKVxuICAgIH0sXG4gICAgYWN0aXZhdGVTcG90KHtjb21taXQsIGdldHRlcnN9LCBzcG90KSB7XG4gICAgICBjb25zdCB7c2NlbmFyaW99ID0gZ2V0dGVycy52aXNpYmxlU2NlbmFyaW9zW3Nwb3RdWzBdXG4gICAgICByb3V0ZXIucHVzaCh7cXVlcnk6IHtzcG90LCBzY2VuYXJpb319KVxuICAgIH1cbiAgfSxcbiAgZ2V0dGVyczoge1xuICAgIGN1cnJlbnRTY2VuYXJpbyhzdGF0ZSwgZ2V0dGVycywgcm9vdFN0YXRlKSB7XG4gICAgICBjb25zdCB7c3BvdCwgc2NlbmFyaW99ID0gcm9vdFN0YXRlLnJvdXRlLnF1ZXJ5XG4gICAgICByZXR1cm4gc3RhdGUuY3VycmVudCB8fCB7c3BvdCwgc2NlbmFyaW99XG4gICAgfVxuICB9XG59XG4iXX0=

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uid__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_uid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utils_highlight__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_utils_shallow_equal__ = __webpack_require__(9);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }





var matches = function matches(filter, text) {
  var f = filter.toLowerCase();
  var t = text.toLowerCase();
  return t.includes(f);
};

/* harmony default export */ __webpack_exports__["a"] = {
  state: {
    logs: [],
    filter: ''
  },
  mutations: {
    ADD_LOG: function ADD_LOG(state, payload) {
      state.logs.push(payload);
    },
    CLEAR_CURRENT_LOGS: function CLEAR_CURRENT_LOGS(state, logs) {
      state.logs = logs;
    },
    UPDATE_FILTER: function UPDATE_FILTER(state, payload) {
      state.filter = payload;
    }
  },
  actions: {
    filterToys: function filterToys(_ref, payload) {
      var commit = _ref.commit;

      commit('UPDATE_FILTER', payload);
    },
    addLog: function addLog(_ref2, _ref3) {
      var commit = _ref2.commit;
      var data = _ref3.data,
          route = _ref3.route;

      commit('ADD_LOG', {
        data: data,
        route: route,
        id: __WEBPACK_IMPORTED_MODULE_0_uid___default()()
      });
    },
    clearLogs: function clearLogs(_ref4, payload) {
      var commit = _ref4.commit,
          state = _ref4.state;

      commit('CLEAR_CURRENT_LOGS', state.logs.filter(function (log) {
        return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_utils_shallow_equal__["a" /* default */])(payload, log.route);
      }));
    }
  },
  getters: {
    logs: function logs(state, getters) {
      return state.logs.filter(function (log) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_utils_shallow_equal__["a" /* default */])(log.route, getters.currentScenario);
      }).map(function (log) {
        return _extends({}, log, {
          data: __WEBPACK_IMPORTED_MODULE_1_utils_highlight__["a" /* default */].highlight('json', JSON.stringify(log.data, null, 2)).value
        });
      });
    },
    visibleScenarios: function visibleScenarios(_ref5, getters, _ref6) {
      var filter = _ref5.filter;
      var app = _ref6.app;

      if (!filter) {
        return app.spots;
      }
      var result = {};

      var _loop = function _loop(name) {
        var scenarios = app.spots[name];
        result[name] = scenarios.filter(function (scenario) {
          return matches(filter, name + ' ' + scenario.scenario);
        });
      };

      for (var name in app.spots) {
        _loop(name);
      }
      return result;
    },
    playspotRoutes: function playspotRoutes(state, _ref7) {
      var visibleScenarios = _ref7.visibleScenarios;

      return Object.keys(visibleScenarios).map(function (name) {
        var scenarios = visibleScenarios[name];
        return scenarios.map(function (scenario) {
          return {
            scenario: scenario.scenario,
            spot: name
          };
        });
      }).reduce(function (current, next) {
        return [].concat(_toConsumableArray(current), _toConsumableArray(next));
      }, []);
    },
    filterKeyword: function filterKeyword(state) {
      return state.filter;
    }
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdG9yZS9tb2R1bGVzL3RveXMuanMiXSwibmFtZXMiOlsidWlkIiwiaGlnaGxpZ2h0Iiwic2hhbGxvd0VxdWFsIiwibWF0Y2hlcyIsImZpbHRlciIsInRleHQiLCJmIiwidG9Mb3dlckNhc2UiLCJ0IiwiaW5jbHVkZXMiLCJzdGF0ZSIsImxvZ3MiLCJtdXRhdGlvbnMiLCJBRERfTE9HIiwicGF5bG9hZCIsInB1c2giLCJDTEVBUl9DVVJSRU5UX0xPR1MiLCJVUERBVEVfRklMVEVSIiwiYWN0aW9ucyIsImZpbHRlclRveXMiLCJjb21taXQiLCJhZGRMb2ciLCJkYXRhIiwicm91dGUiLCJpZCIsImNsZWFyTG9ncyIsImxvZyIsImdldHRlcnMiLCJjdXJyZW50U2NlbmFyaW8iLCJtYXAiLCJKU09OIiwic3RyaW5naWZ5IiwidmFsdWUiLCJ2aXNpYmxlU2NlbmFyaW9zIiwiYXBwIiwic3BvdHMiLCJyZXN1bHQiLCJuYW1lIiwic2NlbmFyaW9zIiwic2NlbmFyaW8iLCJwbGF5c3BvdFJvdXRlcyIsIk9iamVjdCIsImtleXMiLCJzcG90IiwicmVkdWNlIiwiY3VycmVudCIsIm5leHQiLCJmaWx0ZXJLZXl3b3JkIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBT0EsR0FBUCxNQUFnQixLQUFoQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsaUJBQXRCO0FBQ0EsT0FBT0MsWUFBUCxNQUF5QixxQkFBekI7O0FBRUEsSUFBTUMsVUFBVSxTQUFWQSxPQUFVLENBQUNDLE1BQUQsRUFBU0MsSUFBVCxFQUFrQjtBQUNoQyxNQUFNQyxJQUFJRixPQUFPRyxXQUFQLEVBQVY7QUFDQSxNQUFNQyxJQUFJSCxLQUFLRSxXQUFMLEVBQVY7QUFDQSxTQUFPQyxFQUFFQyxRQUFGLENBQVdILENBQVgsQ0FBUDtBQUNELENBSkQ7O0FBTUEsZUFBZTtBQUNiSSxTQUFPO0FBQ0xDLFVBQU0sRUFERDtBQUVMUCxZQUFRO0FBRkgsR0FETTtBQUtiUSxhQUFXO0FBQ1RDLFdBRFMsbUJBQ0RI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QUNoQ1Usc0JBQVVBLFNBQVNBLFFBRGE7QUFFaENJLGtCQUFNTjtBQUYwQixXQUFiO0FBQUEsU0FBZCxDQUFQO0FBSUQsT0FOTSxFQU1KTyxNQU5JLENBTUcsVUFBQ0MsT0FBRCxFQUFVQyxJQUFWO0FBQUEsNENBQXVCRCxPQUF2QixzQkFBbUNDLElBQW5DO0FBQUEsT0FOSCxFQU02QyxFQU43QyxDQUFQO0FBT0QsS0FoQ007QUFpQ1BDLGlCQWpDTyx5QkFpQ09yQyxLQWpDUCxFQWlDYztBQUNuQixhQUFPQSxNQUFNTixNQUFiO0FBQ0Q7QUFuQ007QUFqQ0ksQ0FBZiIsImZpbGUiOiJ0b3lzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95b3JkaS9Ud2luc2tpL1Byb2plY3RzL3Z1ZS1wbGF5Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVpZCBmcm9tICd1aWQnXG5pbXBvcnQgaGlnaGxpZ2h0IGZyb20gJ3V0aWxzL2hpZ2hsaWdodCdcbmltcG9ydCBzaGFsbG93RXF1YWwgZnJvbSAndXRpbHMvc2hhbGxvdy1lcXVhbCdcblxuY29uc3QgbWF0Y2hlcyA9IChmaWx0ZXIsIHRleHQpID0+IHtcbiAgY29uc3QgZiA9IGZpbHRlci50b0xvd2VyQ2FzZSgpXG4gIGNvbnN0IHQgPSB0ZXh0LnRvTG93ZXJDYXNlKClcbiAgcmV0dXJuIHQuaW5jbHVkZXMoZilcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdGF0ZToge1xuICAgIGxvZ3M6IFtdLFxuICAgIGZpbHRlcjogJydcbiAgfSxcbiAgbXV0YXRpb25zOiB7XG4gICAgQUREX0xPRyhzdGF0ZSwgcGF5bG9hZCkge1xuICAgICAgc3RhdGUubG9ncy5wdXNoKHBheWxvYWQpXG4gICAgfSxcbiAgICBDTEVBUl9DVVJSRU5UX0xPR1Moc3RhdGUsIGxvZ3MpIHtcbiAgICAgIHN0YXRlLmxvZ3MgPSBsb2dzXG4gICAgfSxcbiAgICBVUERBVEVfRklMVEVSKHN0YXRlLCBwYXlsb2FkKSB7XG4gICAgICBzdGF0ZS5maWx0ZXIgPSBwYXlsb2FkXG4gICAgfVxuICB9LFxuICBhY3Rpb25zOiB7XG4gICAgZmlsdGVyVG95cyh7Y29tbWl0fSwgcGF5bG9hZCkge1xuICAgICAgY29tbWl0KCdVUERBVEVfRklMVEVSJywgcGF5bG9hZClcbiAgICB9LFxuICAgIGFkZExvZyh7Y29tbWl0fSwge2RhdGEsIHJvdXRlfSkge1xuICAgICAgY29tbWl0KCdBRERfTE9HJywge1xuICAgICAgICBkYXRhLFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgaWQ6IHVpZCgpXG4gICAgICB9KVxuICAgIH0sXG4gICAgY2xlYXJMb2dzKHtjb21taXQsIHN0YXRlfSwgcGF5bG9hZCkge1xuICAgICAgY29tbWl0KCdDTEVBUl9DVVJSRU5UX0xPR1MnLCBzdGF0ZS5sb2dzLmZpbHRlcihsb2cgPT4ge1xuICAgICAgICByZXR1cm4gIXNoYWxsb3dFcXVhbChwYXlsb2FkLCBsb2cucm91dGUpXG4gICAgICB9KSlcbiAgICB9XG4gIH0sXG4gIGdldHRlcnM6IHtcbiAgICBsb2dzKHN0YXRlLCBnZXR0ZXJzKSB7XG4gICAgICByZXR1cm4gc3RhdGUubG9ncy5maWx0ZXIobG9nID0+IHtcbiAgICAgICAgcmV0dXJuIHNoYWxsb3dFcXVhbChsb2cucm91dGUsIGdldHRlcnMuY3VycmVudFNjZW5hcmlvKVxuICAgICAgfSkubWFwKGxvZyA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4ubG9nLFxuICAgICAgICAgIGRhdGE6IGhpZ2hsaWdodC5oaWdobGlnaHQoJ2pzb24nLCBKU09OLnN0cmluZ2lmeShsb2cuZGF0YSwgbnVsbCwgMikpLnZhbHVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB2aXNpYmxlU2NlbmFyaW9zKHtmaWx0ZXJ9LCBnZXR0ZXJzLCB7YXBwfSkge1xuICAgICAgaWYgKCFmaWx0ZXIpIHtcbiAgICAgICAgcmV0dXJuIGFwcC5zcG90c1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzdWx0ID0ge31cbiAgICAgIGZvciAoY29uc3QgbmFtZSBpbiBhcHAuc3BvdHMpIHtcbiAgICAgICAgY29uc3Qgc2NlbmFyaW9zID0gYXBwLnNwb3RzW25hbWVdXG4gICAgICAgIHJlc3VsdFtuYW1lXSA9IHNjZW5hcmlvcy5maWx0ZXIoc2NlbmFyaW8gPT4ge1xuICAgICAgICAgIHJldHVybiBtYXRjaGVzKGZpbHRlciwgYCR7bmFtZX0gJHtzY2VuYXJpby5zY2VuYXJpb31gKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH0sXG4gICAgcGxheXNwb3RSb3V0ZXMoc3RhdGUsIHt2aXNpYmxlU2NlbmFyaW9zfSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHZpc2libGVTY2VuYXJpb3MpLm1hcChuYW1lID0+IHtcbiAgICAgICAgY29uc3Qgc2NlbmFyaW9zID0gdmlzaWJsZVNjZW5hcmlvc1tuYW1lXVxuICAgICAgICByZXR1cm4gc2NlbmFyaW9zLm1hcChzY2VuYXJpbyA9PiAoe1xuICAgICAgICAgIHNjZW5hcmlvOiBzY2VuYXJpby5zY2VuYXJpbyxcbiAgICAgICAgICBzcG90OiBuYW1lXG4gICAgICAgIH0pKVxuICAgICAgfSkucmVkdWNlKChjdXJyZW50LCBuZXh0KSA9PiBbLi4uY3VycmVudCwgLi4ubmV4dF0sIFtdKVxuICAgIH0sXG4gICAgZmlsdGVyS2V5d29yZChzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLmZpbHRlclxuICAgIH1cbiAgfVxufVxuIl19

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = debounce;
function debounce(func, wait, immediate) {
  var timeout = void 0;

  return function () {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var later = function later() {
      timeout = null;
      if (!immediate) {
        func.apply(_this, args);
      }
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(this, args);
    }
  };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy91dGlscy9kZWJvdW5jZS5qcyJdLCJuYW1lcyI6WyJkZWJvdW5jZSIsImZ1bmMiLCJ3YWl0IiwiaW1tZWRpYXRlIiwidGltZW91dCIsImFyZ3MiLCJsYXRlciIsImFwcGx5IiwiY2FsbE5vdyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiJBQUFBLGVBQWUsU0FBU0EsUUFBVCxDQUFrQkMsSUFBbEIsRUFBd0JDLElBQXhCLEVBQThCQyxTQUE5QixFQUF5QztBQUN0RCxNQUFJQyxnQkFBSjs7QUFFQSxTQUFPLFlBQW1CO0FBQUE7O0FBQUEsc0NBQU5DLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUN4QixRQUFNQyxRQUFRLFNBQVJBLEtBQVEsR0FBTTtBQUNsQkYsZ0JBQVUsSUFBVjtBQUNBLFVBQUksQ0FBQ0QsU0FBTCxFQUFnQjtBQUNkRixhQUFLTSxLQUFMLFFBQWlCRixJQUFqQjtBQUNEO0FBQ0YsS0FMRDs7QUFPQSxRQUFNRyxVQUFVTCxhQUFhLENBQUNDLE9BQTlCO0FBQ0FLLGlCQUFhTCxPQUFiO0FBQ0FBLGNBQVVNLFdBQVdKLEtBQVgsRUFBa0JKLElBQWxCLENBQVY7QUFDQSxRQUFJTSxPQUFKLEVBQWE7QUFDWFAsV0FBS00sS0FBTCxDQUFXLElBQVgsRUFBaUJGLElBQWpCO0FBQ0Q7QUFDRixHQWREO0FBZUQiLCJmaWxlIjoiZGVib3VuY2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lvcmRpL1R3aW5za2kvUHJvamVjdHMvdnVlLXBsYXkiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgbGV0IHRpbWVvdXRcblxuICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBsYXRlciA9ICgpID0+IHtcbiAgICAgIHRpbWVvdXQgPSBudWxsXG4gICAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dFxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KVxuICAgIGlmIChjYWxsTm93KSB7XG4gICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpXG4gICAgfVxuICB9XG59XG4iXX0=

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utils_find_scenario__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_utils_key_events__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Tabs_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Tabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Tabs_vue__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = {
  watch: {
    current: 'updateIframe'
  },
  data: function data() {
    return {
      iframeLoaded: false
    };
  },
  mounted: function mounted() {
    this.updateIframe();
    this.listenChild();
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_utils_key_events__["b" /* observeKeyEvents */])(this.$store);
  },

  computed: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])(['mainWidth']), {
    current: function current() {
      var spot = this.$route.query.spot;

      var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils_find_scenario__["a" /* default */])(this.$store.state.app.spots, this.$route.query) || {},
          scenario = _ref.scenario,
          component = _ref.component;

      if (!component) {
        return {};
      }

      return {
        spot: spot, scenario: scenario, component: component
      };
    },
    currentScenario: function currentScenario() {
      return {
        spot: this.current.spot,
        scenario: this.current.scenario
      };
    }
  }),
  methods: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])(['addLog', 'updateCurrentScenario', 'setSpots']), {
    postMessage: function postMessage() {
      this.$refs.iframe.contentWindow.postMessage({
        type: 'UPDATE_ROUTE',
        payload: this.currentScenario
      }, location.origin);
    },
    updateIframe: function updateIframe() {
      var _this = this;

      if (this.current.scenario) {
        document.title = this.current.scenario + ' - Vue Play';
      } else {
        document.title = 'Vue Play';
      }
      this.updateCurrentScenario(this.currentScenario);
      if (this.iframeLoaded) {
        this.postMessage();
      } else {
        this.$refs.iframe.onload = function () {
          _this.postMessage();
          _this.iframeLoaded = true;
        };
      }
    },
    listenChild: function listenChild() {
      var _this2 = this;

      window.addEventListener('message', function (_ref2) {
        var data = _ref2.data;

        if (data.type === 'SET_SPOTS') {
          _this2.setSpots(JSON.parse(data.payload));
        }
        if (data.type === 'APPLY_SHORTCUT') {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_utils_key_events__["c" /* executeShortcut */])(_this2.$store, JSON.parse(data.payload));
        }
        if (data.type === 'ADD_LOG') {
          (function () {
            var _current = _this2.current,
                spot = _current.spot,
                scenario = _current.scenario;

            _this2.addLog({
              data: data.payload,
              route: {
                spot: spot, scenario: scenario
              }
            });
            var consoleEl = document.querySelector('.console-body');
            if (consoleEl) {
              _this2.$nextTick(function () {
                consoleEl.scrollTop = consoleEl.scrollHeight;
              });
            }
          })();
        }
      });
    }
  }),
  components: {
    Tabs: __WEBPACK_IMPORTED_MODULE_3__Tabs_vue___default.a
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0FwcE1haW4udnVlIl0sIm5hbWVzIjpbIm1hcEdldHRlcnMiLCJtYXBBY3Rpb25zIiwiZmluZFNjZW5hcmlvIiwib2JzZXJ2ZUtleUV2ZW50cyIsImV4ZWN1dGVTaG9ydGN1dCIsIlRhYnMiLCJ3YXRjaCIsImN1cnJlbnQiLCJkYXRhIiwiaWZyYW1lTG9hZGVkIiwibW91bnRlZCIsInVwZGF0ZUlmcmFtZSIsImxpc3RlbkNoaWxkIiwiJHN0b3JlIiwiY29tcHV0ZWQiLCJzcG90IiwiJHJvdXRlIiwicXVlcnkiLCJzdGF0ZSIsImFwcCIsInNwb3RzIiwic2NlbmFyaW8iLCJjb21wb25lbnQiLCJjdXJyZW50U2NlbmFyaW8iLCJtZXRob2RzIiwicG9zdE1lc3NhZ2UiLCIkcmVmcyIsImlmcmFtZSIsImNvbnRlbnRXaW5kb3ciLCJ0eXBlIiwicGF5bG9hZCIsImxvY2F0aW9uIiwib3JpZ2luIiwiZG9jdW1lbnQiLCJ0aXRsZSIsInVwZGF0ZUN1cnJlbnRTY2VuYXJpbyIsIm9ubG9hZCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRTcG90cyIsIkpTT04iLCJwYXJzZSIsImFkZExvZyIsInJvdXRlIiwiY29uc29sZUVsIiwicXVlcnlTZWxlY3RvciIsIiRuZXh0VGljayIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsImNvbXBvbmVudHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUUEsVUFBUixFQUFvQkMsVUFBcEIsUUFBcUMsTUFBckM7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLHFCQUF6QjtBQUNBLFNBQVFDLGdCQUFSLEVBQTBCQyxlQUExQixRQUFnRCxrQkFBaEQ7QUFDQSxPQUFPQyxJQUFQLE1BQWlCLFlBQWpCOztBQUVBLGVBQWU7QUFDYkMsU0FBTztBQUNMQyxhQUFTO0FBREosR0FETTtBQUliQyxNQUphLGtCQUlOO0FBQ0wsV0FBTztBQUNMQyxvQkFBYztBQURULEtBQVA7QUFHRCxHQVJZO0FBU2JDLFNBVGEscUJBU0g7QUFDUixTQUFLQyxZQUFMO0FBQ0EsU0FBS0MsV0FBTDtBQUNBVCxxQkFBaUIsS0FBS1UsTUFBdEI7QUFDRCxHQWJZOztBQWNiQyx5QkFDS2QsV0FBVyxDQUFDLFdBQUQsQ0FBWCxDQURMO0FBRUVPLFdBRkYscUJBRVk7QUFBQSxVQUNEUSxJQURDLEdBQ08sS0FBS0MsTUFBTCxDQUFZQyxLQURuQixDQUNERixJQURDOztBQUFBLGlCQUVzQmIsYUFBYSxLQUFLVyxNQUFMLENBQVlLLEtBQVosQ0FBa0JDLEdBQWxCLENBQXNCQyxLQUFuQyxFQUEwQyxLQUFLSixNQUFMLENBQVlDLEtBQXRELEtBQWdFLEVBRnRGO0FBQUEsVUFFREksUUFGQyxRQUVEQSxRQUZDO0FBQUEsVUFFU0MsU0FGVCxRQUVTQSxTQUZUOztBQUlSLFVBQUksQ0FBQ0EsU0FBTCxFQUFnQjtBQUNkLGVBQU8sRUFBUDtBQUNEOztBQUVELGFBQU87QUFDTFAsa0JBREssRUFDQ00sa0JBREQsRUFDV0M7QUFEWCxPQUFQO0FBR0QsS0FiSDtBQWNFQyxtQkFkRiw2QkFjb0I7QUFDaEIsYUFBTztBQUNMUixjQUFNLEtBQUtSLE9BQUwsQ0FBYVEsSUFEZDtBQUVMTSxrQkFBVSxLQUFLZCxPQUFMLENBQWFjO0FBRmxCLE9BQVA7QUFJRDtBQW5CSCxJQWRhO0FBbUNiRyx3QkFDS3ZCLFdBQVcsQ0FBQyxRQUFELEVBQVcsdUJBQVgsRUFBb0MsVUFBcEMsQ0FBWCxDQURMO0FBRUV3QixlQUZGLHlCQUVnQjtBQUNaLFdBQUtDLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQkMsYUFBbEIsQ0FBZ0NILFdBQWhDLENBQTRDO0FBQzFDSSxjQUFNLGNBRG9DO0FBRTFDQyxpQkFBUyxLQUFLUDtBQUY0QixPQUE1QyxFQUdHUSxTQUFTQyxNQUhaO0FBSUQsS0FQSDtBQVFFckIsZ0JBUkYsMEJBUWlCO0FBQUE7O0FBQ2IsVUFBSSxLQUFLSixPQUFMLENBQWFjLFFBQWpCLEVBQTJCO0FBQ3pCWSxpQkFBU0MsS0FBVCxHQUFvQixLQUFLM0IsT0FBTCxDQUFhYyxRQUFqQztBQUNELE9BRkQsTUFFTztBQUNMWSxpQkFBU0MsS0FBVCxHQUFpQixVQUFqQjtBQUNEO0FBQ0QsV0FBS0MscUJBQUwsQ0FBMkIsS0FBS1osZUFBaEM7QUFDQSxVQUFJLEtBQUtkLFlBQVQsRUFBdUI7QUFDckIsYUFBS2dCLFdBQUw7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLQyxLQUFMLENBQVdDLE1BQVgsQ0FBa0JTLE1BQWxCLEdBQTJCLFlBQU07QUFDL0IsZ0JBQUtYLFdBQUw7QUFDQSxnQkFBS2hCLFlBQUwsR0FBb0IsSUFBcEI7QUFDRCxTQUhEO0FBSUQ7QUFDRixLQXZCSDtBQXdCRUcsZUF4QkYseUJBd0JnQjtBQUFBOztBQUNaeUIsYUFBT0MsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsaUJBQVk7QUFBQSxZQUFWOUIsSUFBVSxTQUFWQSxJQUFVOztBQUM3QyxZQUFJQSxLQUFLcUIsSUFBTCxLQUFjLFdBQWxCLEVBQStCO0FBQzdCLGlCQUFLVSxRQUFMLENBQWNDLEtBQUtDLEtBQUwsQ0FBV2pDLEtBQUtzQixPQUFoQixDQUFkO0FBQ0Q7QUFDRCxZQUFJdEIsS0FBS3FCLElBQUwsS0FBYyxnQkFBbEIsRUFBb0M7QUFDbEN6QiwwQkFBZ0IsT0FBS1MsTUFBckIsRUFBNkIyQixLQUFLQyxLQUFMLENBQVdqQyxLQUFLc0IsT0FBaEIsQ0FBN0I7QUFDRDtBQUNELFlBQUl0QixLQUFLcUIsSUFBTCxLQUFjLFNBQWxCLEVBQTZCO0FBQUE7QUFBQSwyQkFDRixPQUFLdEIsT0FESDtBQUFBLGdCQUNwQlEsSUFEb0IsWUFDcEJBLElBRG9CO0FBQUEsZ0JBQ2RNLFFBRGMsWUFDZEEsUUFEYzs7QUFFM0IsbUJBQUtxQixNQUFMLENBQVk7QUFDVmxDLG9CQUFNQSxLQUFLc0IsT0FERDtBQUVWYSxxQkFBTztBQUNMNUIsMEJBREssRUFDQ007QUFERDtBQUZHLGFBQVo7QUFNQSxnQkFBTXVCLFlBQVlYLFNBQVNZLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBbEI7QUFDQSxnQkFBSUQsU0FBSixFQUFlO0FBQ2IscUJBQUtFLFNBQUwsQ0FBZSxZQUFNO0FBQ25CRiwwQkFBVUcsU0FBVixHQUFzQkgsVUFBVUksWUFBaEM7QUFDRCxlQUZEO0FBR0Q7QUFiMEI7QUFjNUI7QUFDRixPQXRCRDtBQXVCRDtBQWhESCxJQW5DYTtBQXFGYkMsY0FBWTtBQUNWNUM7QUFEVTtBQXJGQyxDQUFmIiwiZmlsZSI6IkFwcE1haW4udnVlIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95b3JkaS9Ud2luc2tpL1Byb2plY3RzL3Z1ZS1wbGF5Iiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxuaW1wb3J0IHttYXBHZXR0ZXJzLCBtYXBBY3Rpb25zfSBmcm9tICd2dWV4J1xuaW1wb3J0IGZpbmRTY2VuYXJpbyBmcm9tICd1dGlscy9maW5kLXNjZW5hcmlvJ1xuaW1wb3J0IHtvYnNlcnZlS2V5RXZlbnRzLCBleGVjdXRlU2hvcnRjdXR9IGZyb20gJ3V0aWxzL2tleS1ldmVudHMnXG5pbXBvcnQgVGFicyBmcm9tICcuL1RhYnMudnVlJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHdhdGNoOiB7XG4gICAgY3VycmVudDogJ3VwZGF0ZUlmcmFtZSdcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWZyYW1lTG9hZGVkOiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLnVwZGF0ZUlmcmFtZSgpXG4gICAgdGhpcy5saXN0ZW5DaGlsZCgpXG4gICAgb2JzZXJ2ZUtleUV2ZW50cyh0aGlzLiRzdG9yZSlcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICAuLi5tYXBHZXR0ZXJzKFsnbWFpbldpZHRoJ10pLFxuICAgIGN1cnJlbnQoKSB7XG4gICAgICBjb25zdCB7c3BvdH0gPSB0aGlzLiRyb3V0ZS5xdWVyeVxuICAgICAgY29uc3Qge3NjZW5hcmlvLCBjb21wb25lbnR9ID0gZmluZFNjZW5hcmlvKHRoaXMuJHN0b3JlLnN0YXRlLmFwcC5zcG90cywgdGhpcy4kcm91dGUucXVlcnkpIHx8IHt9XG5cbiAgICAgIGlmICghY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzcG90LCBzY2VuYXJpbywgY29tcG9uZW50XG4gICAgICB9XG4gICAgfSxcbiAgICBjdXJyZW50U2NlbmFyaW8oKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzcG90OiB0aGlzLmN1cnJlbnQuc3BvdCxcbiAgICAgICAgc2NlbmFyaW86IHRoaXMuY3VycmVudC5zY2VuYXJpb1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIC4uLm1hcEFjdGlvbnMoWydhZGRMb2cnLCAndXBkYXRlQ3VycmVudFNjZW5hcmlvJywgJ3NldFNwb3RzJ10pLFxuICAgIHBvc3RNZXNzYWdlKCkge1xuICAgICAgdGhpcy4kcmVmcy5pZnJhbWUuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZSh7XG4gICAgICAgIHR5cGU6ICdVUERBVEVfUk9VVEUnLFxuICAgICAgICBwYXlsb2FkOiB0aGlzLmN1cnJlbnRTY2VuYXJpb1xuICAgICAgfSwgbG9jYXRpb24ub3JpZ2luKVxuICAgIH0sXG4gICAgdXBkYXRlSWZyYW1lKCkge1xuICAgICAgaWYgKHRoaXMuY3VycmVudC5zY2VuYXJpbykge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IGAke3RoaXMuY3VycmVudC5zY2VuYXJpb30gLSBWdWUgUGxheWBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gJ1Z1ZSBQbGF5J1xuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVDdXJyZW50U2NlbmFyaW8odGhpcy5jdXJyZW50U2NlbmFyaW8pXG4gICAgICBpZiAodGhpcy5pZnJhbWVMb2FkZWQpIHtcbiAgICAgICAgdGhpcy5wb3N0TWVzc2FnZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiRyZWZzLmlmcmFtZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wb3N0TWVzc2FnZSgpXG4gICAgICAgICAgdGhpcy5pZnJhbWVMb2FkZWQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGxpc3RlbkNoaWxkKCkge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCAoe2RhdGF9KSA9PiB7XG4gICAgICAgIGlmIChkYXRhLnR5cGUgPT09ICdTRVRfU1BPVFMnKSB7XG4gICAgICAgICAgdGhpcy5zZXRTcG90cyhKU09OLnBhcnNlKGRhdGEucGF5bG9hZCkpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gJ0FQUExZX1NIT1JUQ1VUJykge1xuICAgICAgICAgIGV4ZWN1dGVTaG9ydGN1dCh0aGlzLiRzdG9yZSwgSlNPTi5wYXJzZShkYXRhLnBheWxvYWQpKVxuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLnR5cGUgPT09ICdBRERfTE9HJykge1xuICAgICAgICAgIGNvbnN0IHtzcG90LCBzY2VuYXJpb30gPSB0aGlzLmN1cnJlbnRcbiAgICAgICAgICB0aGlzLmFkZExvZyh7XG4gICAgICAgICAgICBkYXRhOiBkYXRhLnBheWxvYWQsXG4gICAgICAgICAgICByb3V0ZToge1xuICAgICAgICAgICAgICBzcG90LCBzY2VuYXJpb1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgY29uc3QgY29uc29sZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnNvbGUtYm9keScpXG4gICAgICAgICAgaWYgKGNvbnNvbGVFbCkge1xuICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlRWwuc2Nyb2xsVG9wID0gY29uc29sZUVsLnNjcm9sbEhlaWdodFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgVGFic1xuICB9XG59XG4iXX0=

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_slim_modal__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_slim_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_slim_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = {
  computed: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["mapGetters"])(['showHelp'])),
  components: {
    SlimModal: __WEBPACK_IMPORTED_MODULE_0_vue_slim_modal___default.a
  },
  methods: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["mapActions"])(['toggleHelp']))
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0hlbHBNb2RhbC52dWUiXSwibmFtZXMiOlsiU2xpbU1vZGFsIiwibWFwR2V0dGVycyIsIm1hcEFjdGlvbnMiLCJjb21wdXRlZCIsImNvbXBvbmVudHMiLCJtZXRob2RzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBT0EsU0FBUCxNQUFzQixnQkFBdEI7QUFDQSxTQUFRQyxVQUFSLEVBQW9CQyxVQUFwQixRQUFxQyxNQUFyQzs7QUFFQSxlQUFlO0FBQ2JDLHlCQUNLRixXQUFXLENBQUMsVUFBRCxDQUFYLENBREwsQ0FEYTtBQUliRyxjQUFZO0FBQ1ZKO0FBRFUsR0FKQztBQU9iSyx3QkFDS0gsV0FBVyxDQUFDLFlBQUQsQ0FBWCxDQURMO0FBUGEsQ0FBZiIsImZpbGUiOiJIZWxwTW9kYWwudnVlIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95b3JkaS9Ud2luc2tpL1Byb2plY3RzL3Z1ZS1wbGF5Iiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmltcG9ydCBTbGltTW9kYWwgZnJvbSAndnVlLXNsaW0tbW9kYWwnXG5pbXBvcnQge21hcEdldHRlcnMsIG1hcEFjdGlvbnN9IGZyb20gJ3Z1ZXgnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcHV0ZWQ6IHtcbiAgICAuLi5tYXBHZXR0ZXJzKFsnc2hvd0hlbHAnXSlcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIFNsaW1Nb2RhbFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwQWN0aW9ucyhbJ3RvZ2dsZUhlbHAnXSlcbiAgfVxufVxuIl19

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sidebar_vue__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Sidebar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Sidebar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppMain_vue__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AppMain_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__AppMain_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HelpModal_vue__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HelpModal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__HelpModal_vue__);
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = {
  name: 'home',
  components: {
    Sidebar: __WEBPACK_IMPORTED_MODULE_0__Sidebar_vue___default.a,
    AppMain: __WEBPACK_IMPORTED_MODULE_1__AppMain_vue___default.a,
    HelpModal: __WEBPACK_IMPORTED_MODULE_2__HelpModal_vue___default.a
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL0hvbWUudnVlIl0sIm5hbWVzIjpbIlNpZGViYXIiLCJBcHBNYWluIiwiSGVscE1vZGFsIiwibmFtZSIsImNvbXBvbmVudHMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBT0EsT0FBUCxNQUFvQixlQUFwQjtBQUNBLE9BQU9DLE9BQVAsTUFBb0IsZUFBcEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGlCQUF0Qjs7QUFFQSxlQUFlO0FBQ2JDLFFBQU0sTUFETztBQUViQyxjQUFZO0FBQ1ZKLG9CQURVO0FBRVZDLG9CQUZVO0FBR1ZDO0FBSFU7QUFGQyxDQUFmIiwiZmlsZSI6IkhvbWUudnVlIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95b3JkaS9Ud2luc2tpL1Byb2plY3RzL3Z1ZS1wbGF5Iiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vU2lkZWJhci52dWUnXG5pbXBvcnQgQXBwTWFpbiBmcm9tICcuL0FwcE1haW4udnVlJ1xuaW1wb3J0IEhlbHBNb2RhbCBmcm9tICcuL0hlbHBNb2RhbC52dWUnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2hvbWUnLFxuICBjb21wb25lbnRzOiB7XG4gICAgU2lkZWJhcixcbiAgICBBcHBNYWluLFxuICAgIEhlbHBNb2RhbFxuICB9XG59XG4iXX0=

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utils_prevent_select__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_utils_debounce__ = __webpack_require__(17);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var BOUNDARY = {
  min: 200,
  max: 500
};

/* harmony default export */ __webpack_exports__["default"] = {
  computed: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["mapGetters"])(['leftPanelExpanded', 'visibleScenarios', 'sidebarWidth', 'currentScenario', 'filterKeyword'])),

  data: function data() {
    return {
      resizing: false,
      startX: null,
      originalWidth: null,
      keyword: ''
    };
  },


  methods: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex__["mapActions"])(['updatePlayspot', 'updateSidebarWidth', 'toggleHelp', 'filterToys', 'activateSpot']), {
    filter: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_utils_debounce__["a" /* default */])(function (_ref) {
      var target = _ref.target;

      this.filterToys(target.value);
    }, 350),
    handleMouseDown: function handleMouseDown(_ref2) {
      var clientX = _ref2.clientX;

      this.resizing = true;
      this.startX = clientX;
      this.originalWidth = parseInt(this.$refs.sidebar.getBoundingClientRect().width, 10) || 0;
      document.addEventListener('mousemove', this.handleMouseMove);
      document.addEventListener('mouseup', this.handleMouseUp);
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_utils_prevent_select__["a" /* preventSelectStart */])();
    },
    handleMouseMove: function handleMouseMove(_ref3) {
      var clientX = _ref3.clientX;

      if (!this.resizing || clientX < BOUNDARY.min || clientX > BOUNDARY.max) {
        return;
      }
      this.updateSidebarWidth(this.originalWidth + clientX - this.startX);
    },
    handleMouseUp: function handleMouseUp() {
      this.resizing = false;
      document.removeEventListener('mousemove', this.handleMouseMove);
      document.removeEventListener('mouseup', this.handleMouseUp);
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_utils_prevent_select__["b" /* preventSelectStop */])();
    },
    isActiveSpot: function isActiveSpot(name, index) {
      if (this.filterKeyword) {
        return true;
      }
      if (!this.currentScenario.spot && index === 0) {
        return true;
      }
      return this.currentScenario.spot === name;
    }
  })
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL1NpZGViYXIudnVlIl0sIm5hbWVzIjpbInByZXZlbnRTZWxlY3RTdGFydCIsInByZXZlbnRTZWxlY3RTdG9wIiwibWFwR2V0dGVycyIsIm1hcEFjdGlvbnMiLCJkZWJvdW5jZSIsIkJPVU5EQVJZIiwibWluIiwibWF4IiwiY29tcHV0ZWQiLCJkYXRhIiwicmVzaXppbmciLCJzdGFydFgiLCJvcmlnaW5hbFdpZHRoIiwia2V5d29yZCIsIm1ldGhvZHMiLCJmaWx0ZXIiLCJ0YXJnZXQiLCJmaWx0ZXJUb3lzIiwidmFsdWUiLCJoYW5kbGVNb3VzZURvd24iLCJjbGllbnRYIiwicGFyc2VJbnQiLCIkcmVmcyIsInNpZGViYXIiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZU1vdXNlTW92ZSIsImhhbmRsZU1vdXNlVXAiLCJ1cGRhdGVTaWRlYmFyV2lkdGgiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaXNBY3RpdmVTcG90IiwibmFtZSIsImluZGV4IiwiZmlsdGVyS2V5d29yZCIsImN1cnJlbnRTY2VuYXJpbyIsInNwb3QiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFRQSxrQkFBUixFQUE0QkMsaUJBQTVCLFFBQW9ELHNCQUFwRDtBQUNBLFNBQVFDLFVBQVIsRUFBb0JDLFVBQXBCLFFBQXFDLE1BQXJDO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixnQkFBckI7O0FBRUEsSUFBTUMsV0FBVztBQUNmQyxPQUFLLEdBRFU7QUFFZkMsT0FBSztBQUZVLENBQWpCOztBQUtBLGVBQWU7QUFDYkMseUJBQ0tOLFdBQVcsQ0FDWixtQkFEWSxFQUVaLGtCQUZZLEVBR1osY0FIWSxFQUlaLGlCQUpZLEVBS1osZUFMWSxDQUFYLENBREwsQ0FEYTs7QUFXYk8sTUFYYSxrQkFXTjtBQUNMLFdBQU87QUFDTEMsZ0JBQVUsS0FETDtBQUVMQyxjQUFRLElBRkg7QUFHTEMscUJBQWUsSUFIVjtBQUlMQyxlQUFTO0FBSkosS0FBUDtBQU1ELEdBbEJZOzs7QUFvQmJDLHdCQUNLWCxXQUFXLENBQ1osZ0JBRFksRUFFWixvQkFGWSxFQUdaLFlBSFksRUFJWixZQUpZLEVBS1osY0FMWSxDQUFYLENBREw7QUFRRVksWUFBUVgsU0FBUyxnQkFBb0I7QUFBQSxVQUFUWSxNQUFTLFFBQVRBLE1BQVM7O0FBQ25DLFdBQUtDLFVBQUwsQ0FBZ0JELE9BQU9FLEtBQXZCO0FBQ0QsS0FGTyxFQUVMLEdBRkssQ0FSVjtBQVdFQyxtQkFYRixrQ0FXNkI7QUFBQSxVQUFWQyxPQUFVLFNBQVZBLE9BQVU7O0FBQ3pCLFdBQUtWLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxXQUFLQyxNQUFMLEdBQWNTLE9BQWQ7QUFDQSxXQUFLUixhQUFMLEdBQXFCUyxTQUFTLEtBQUtDLEtBQUwsQ0FBV0MsT0FBWCxDQUFtQkMscUJBQW5CLEdBQTJDQyxLQUFwRCxFQUEyRCxFQUEzRCxLQUFrRSxDQUF2RjtBQUNBQyxlQUFTQyxnQkFBVCxDQUEwQixXQUExQixFQUF1QyxLQUFLQyxlQUE1QztBQUNBRixlQUFTQyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxLQUFLRSxhQUExQztBQUNBN0I7QUFDRCxLQWxCSDtBQW9CRTRCLG1CQXBCRixrQ0FvQjZCO0FBQUEsVUFBVlIsT0FBVSxTQUFWQSxPQUFVOztBQUN6QixVQUFJLENBQUMsS0FBS1YsUUFBTixJQUNGVSxVQUFVZixTQUFTQyxHQURqQixJQUVGYyxVQUFVZixTQUFTRSxHQUZyQixFQUUwQjtBQUN4QjtBQUNEO0FBQ0QsV0FBS3VCLGtCQUFMLENBQXdCLEtBQUtsQixhQUFMLEdBQXFCUSxPQUFyQixHQUErQixLQUFLVCxNQUE1RDtBQUNELEtBM0JIO0FBNkJFa0IsaUJBN0JGLDJCQTZCa0I7QUFDZCxXQUFLbkIsUUFBTCxHQUFnQixLQUFoQjtBQUNBZ0IsZUFBU0ssbUJBQVQsQ0FBNkIsV0FBN0IsRUFBMEMsS0FBS0gsZUFBL0M7QUFDQUYsZUFBU0ssbUJBQVQsQ0FBNkIsU0FBN0IsRUFBd0MsS0FBS0YsYUFBN0M7QUFDQTVCO0FBQ0QsS0FsQ0g7QUFvQ0UrQixnQkFwQ0Ysd0JBb0NlQyxJQXBDZixFQW9DcUJDLEtBcENyQixFQW9DNEI7QUFDeEIsVUFBSSxLQUFLQyxhQUFULEVBQXdCO0FBQ3RCLGVBQU8sSUFBUDtBQUNEO0FBQ0QsVUFBSSxDQUFDLEtBQUtDLGVBQUwsQ0FBcUJDLElBQXRCLElBQThCSCxVQUFVLENBQTVDLEVBQStDO0FBQzdDLGVBQU8sSUFBUDtBQUNEO0FBQ0QsYUFBTyxLQUFLRSxlQUFMLENBQXFCQyxJQUFyQixLQUE4QkosSUFBckM7QUFDRDtBQTVDSDtBQXBCYSxDQUFmIiwiZmlsZSI6IlNpZGViYXIudnVlIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95b3JkaS9Ud2luc2tpL1Byb2plY3RzL3Z1ZS1wbGF5Iiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG5cbmltcG9ydCB7cHJldmVudFNlbGVjdFN0YXJ0LCBwcmV2ZW50U2VsZWN0U3RvcH0gZnJvbSAndXRpbHMvcHJldmVudC1zZWxlY3QnXG5pbXBvcnQge21hcEdldHRlcnMsIG1hcEFjdGlvbnN9IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAndXRpbHMvZGVib3VuY2UnXG5cbmNvbnN0IEJPVU5EQVJZID0ge1xuICBtaW46IDIwMCxcbiAgbWF4OiA1MDBcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcEdldHRlcnMoW1xuICAgICAgJ2xlZnRQYW5lbEV4cGFuZGVkJyxcbiAgICAgICd2aXNpYmxlU2NlbmFyaW9zJyxcbiAgICAgICdzaWRlYmFyV2lkdGgnLFxuICAgICAgJ2N1cnJlbnRTY2VuYXJpbycsXG4gICAgICAnZmlsdGVyS2V5d29yZCdcbiAgICBdKVxuICB9LFxuXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc2l6aW5nOiBmYWxzZSxcbiAgICAgIHN0YXJ0WDogbnVsbCxcbiAgICAgIG9yaWdpbmFsV2lkdGg6IG51bGwsXG4gICAgICBrZXl3b3JkOiAnJ1xuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwQWN0aW9ucyhbXG4gICAgICAndXBkYXRlUGxheXNwb3QnLFxuICAgICAgJ3VwZGF0ZVNpZGViYXJXaWR0aCcsXG4gICAgICAndG9nZ2xlSGVscCcsXG4gICAgICAnZmlsdGVyVG95cycsXG4gICAgICAnYWN0aXZhdGVTcG90J1xuICAgIF0pLFxuICAgIGZpbHRlcjogZGVib3VuY2UoZnVuY3Rpb24gKHt0YXJnZXR9KSB7XG4gICAgICB0aGlzLmZpbHRlclRveXModGFyZ2V0LnZhbHVlKVxuICAgIH0sIDM1MCksXG4gICAgaGFuZGxlTW91c2VEb3duKHtjbGllbnRYfSkge1xuICAgICAgdGhpcy5yZXNpemluZyA9IHRydWVcbiAgICAgIHRoaXMuc3RhcnRYID0gY2xpZW50WFxuICAgICAgdGhpcy5vcmlnaW5hbFdpZHRoID0gcGFyc2VJbnQodGhpcy4kcmVmcy5zaWRlYmFyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLCAxMCkgfHwgMFxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUpXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVNb3VzZVVwKVxuICAgICAgcHJldmVudFNlbGVjdFN0YXJ0KClcbiAgICB9LFxuXG4gICAgaGFuZGxlTW91c2VNb3ZlKHtjbGllbnRYfSkge1xuICAgICAgaWYgKCF0aGlzLnJlc2l6aW5nIHx8XG4gICAgICAgIGNsaWVudFggPCBCT1VOREFSWS5taW4gfHxcbiAgICAgICAgY2xpZW50WCA+IEJPVU5EQVJZLm1heCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlU2lkZWJhcldpZHRoKHRoaXMub3JpZ2luYWxXaWR0aCArIGNsaWVudFggLSB0aGlzLnN0YXJ0WClcbiAgICB9LFxuXG4gICAgaGFuZGxlTW91c2VVcCgpIHtcbiAgICAgIHRoaXMucmVzaXppbmcgPSBmYWxzZVxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUpXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVNb3VzZVVwKVxuICAgICAgcHJldmVudFNlbGVjdFN0b3AoKVxuICAgIH0sXG5cbiAgICBpc0FjdGl2ZVNwb3QobmFtZSwgaW5kZXgpIHtcbiAgICAgIGlmICh0aGlzLmZpbHRlcktleXdvcmQpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5jdXJyZW50U2NlbmFyaW8uc3BvdCAmJiBpbmRleCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFNjZW5hcmlvLnNwb3QgPT09IG5hbWVcbiAgICB9XG4gIH1cbn1cbiJdfQ==

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utils_highlight__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_utils_prevent_select__ = __webpack_require__(8);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = {
  name: 'console',
  props: {
    example: {
      type: String
    },
    readme: {
      type: String
    }
  },
  computed: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])(['logs', 'bottomPanelExpanded']), {
    highlightedExample: function highlightedExample() {
      if (!this.example) {
        return;
      }
      return __WEBPACK_IMPORTED_MODULE_1_utils_highlight__["a" /* default */].highlightAuto(this.example).value;
    },
    active: function active() {
      var tab = this.$store.getters.activeTab;
      if (tab === 'console' || tab && this[tab]) {
        return tab;
      }
      return this.readme ? 'readme' : 'console';
    }
  }),
  data: function data() {
    return {
      tabHeight: 200,
      startY: null,
      originalHeight: null,
      resizing: false
    };
  },
  mounted: function mounted() {
    this.boundary = {
      min: this.$refs.header.getBoundingClientRect().height,
      max: this.$refs.panel.parentNode.getBoundingClientRect().height
    };
  },


  methods: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])(['setBottomPanelHeight', 'clearLogs', 'updateActiveTab']), {
    handleMouseDown: function handleMouseDown(_ref) {
      var clientY = _ref.clientY;

      this.resizing = true;
      this.startY = clientY;
      this.originalHeight = parseInt(this.$refs.body.getBoundingClientRect().height, 10) || 0;
      document.addEventListener('mousemove', this.handleMouseMove);
      document.addEventListener('mouseup', this.handleMouseUp);
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_utils_prevent_select__["a" /* preventSelectStart */])();
    },
    handleMouseMove: function handleMouseMove(_ref2) {
      var clientY = _ref2.clientY;

      if (!this.resizing || clientY < this.boundary.min || clientY > this.boundary.max) {
        return;
      }
      var height = this.originalHeight - clientY + this.startY;
      this.setTabHeight(height);
    },
    handleMouseUp: function handleMouseUp() {
      this.resizing = false;
      this.setTabHeight(this.tabHeight);
      document.removeEventListener('mousemove', this.handleMouseMove);
      document.removeEventListener('mouseup', this.handleMouseUp);
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_utils_prevent_select__["b" /* preventSelectStop */])();
    },
    clearCurrentLogs: function clearCurrentLogs() {
      var _$route$query = this.$route.query,
          scenario = _$route$query.scenario,
          spot = _$route$query.spot;

      this.clearLogs({ scenario: scenario, spot: spot });
    },
    setTabHeight: function setTabHeight(height) {
      this.tabHeight = height;
    }
  })
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnRzL1RhYnMudnVlIl0sIm5hbWVzIjpbIm1hcEdldHRlcnMiLCJtYXBBY3Rpb25zIiwiaGlnaGxpZ2h0IiwicHJldmVudFNlbGVjdFN0YXJ0IiwicHJldmVudFNlbGVjdFN0b3AiLCJuYW1lIiwicHJvcHMiLCJleGFtcGxlIiwidHlwZSIsIlN0cmluZyIsInJlYWRtZSIsImNvbXB1dGVkIiwiaGlnaGxpZ2h0ZWRFeGFtcGxlIiwiaGlnaGxpZ2h0QXV0byIsInZhbHVlIiwiYWN0aXZlIiwidGFiIiwiJHN0b3JlIiwiZ2V0dGVycyIsImFjdGl2ZVRhYiIsImRhdGEiLCJ0YWJIZWlnaHQiLCJzdGFydFkiLCJvcmlnaW5hbEhlaWdodCIsInJlc2l6aW5nIiwibW91bnRlZCIsImJvdW5kYXJ5IiwibWluIiwiJHJlZnMiLCJoZWFkZXIiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJtYXgiLCJwYW5lbCIsInBhcmVudE5vZGUiLCJtZXRob2RzIiwiaGFuZGxlTW91c2VEb3duIiwiY2xpZW50WSIsInBhcnNlSW50IiwiYm9keSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZU1vdXNlTW92ZSIsImhhbmRsZU1vdXNlVXAiLCJzZXRUYWJIZWlnaHQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xlYXJDdXJyZW50TG9ncyIsIiRyb3V0ZSIsInF1ZXJ5Iiwic2NlbmFyaW8iLCJzcG90IiwiY2xlYXJMb2dzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QWxCO0FBQ0QsS0F2Qkg7QUF5QkVZLGlCQXpCRiwyQkF5QmtCO0FBQ2QsV0FBS25CLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxXQUFLb0IsWUFBTCxDQUFrQixLQUFLdkIsU0FBdkI7QUFDQW1CLGVBQVNLLG1CQUFULENBQTZCLFdBQTdCLEVBQTBDLEtBQUtILGVBQS9DO0FBQ0FGLGVBQVNLLG1CQUFULENBQTZCLFNBQTdCLEVBQXdDLEtBQUtGLGFBQTdDO0FBQ0F2QztBQUNELEtBL0JIO0FBaUNFMEMsb0JBakNGLDhCQWlDcUI7QUFBQSwwQkFDUSxLQUFLQyxNQUFMLENBQVlDLEtBRHBCO0FBQUEsVUFDVkMsUUFEVSxpQkFDVkEsUUFEVTtBQUFBLFVBQ0FDLElBREEsaUJBQ0FBLElBREE7O0FBRWpCLFdBQUtDLFNBQUwsQ0FBZSxFQUFDRixrQkFBRCxFQUFXQyxVQUFYLEVBQWY7QUFDRCxLQXBDSDtBQXNDRU4sZ0JBdENGLHdCQXNDZWIsTUF0Q2YsRUFzQ3VCO0FBQ25CLFdBQUtWLFNBQUwsR0FBaUJVLE1BQWpCO0FBQ0Q7QUF4Q0g7QUE3Q2EsQ0FBZiIsImZpbGUiOiJUYWJzLnZ1ZSIsInNvdXJjZVJvb3QiOiIvVXNlcnMveW9yZGkvVHdpbnNraS9Qcm9qZWN0cy92dWUtcGxheSIsInNvdXJjZXNDb250ZW50IjpbIi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG5pbXBvcnQge21hcEdldHRlcnMsIG1hcEFjdGlvbnN9IGZyb20gJ3Z1ZXgnXG5pbXBvcnQgaGlnaGxpZ2h0IGZyb20gJ3V0aWxzL2hpZ2hsaWdodCdcbmltcG9ydCB7cHJldmVudFNlbGVjdFN0YXJ0LCBwcmV2ZW50U2VsZWN0U3RvcH0gZnJvbSAndXRpbHMvcHJldmVudC1zZWxlY3QnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ2NvbnNvbGUnLFxuICBwcm9wczoge1xuICAgIGV4YW1wbGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgcmVhZG1lOiB7XG4gICAgICB0eXBlOiBTdHJpbmdcbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgLi4ubWFwR2V0dGVycyhbXG4gICAgICAnbG9ncycsXG4gICAgICAnYm90dG9tUGFuZWxFeHBhbmRlZCdcbiAgICBdKSxcbiAgICBoaWdobGlnaHRlZEV4YW1wbGUoKSB7XG4gICAgICBpZiAoIXRoaXMuZXhhbXBsZSkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHJldHVybiBoaWdobGlnaHQuaGlnaGxpZ2h0QXV0byh0aGlzLmV4YW1wbGUpLnZhbHVlXG4gICAgfSxcbiAgICBhY3RpdmUoKSB7XG4gICAgICBjb25zdCB0YWIgPSB0aGlzLiRzdG9yZS5nZXR0ZXJzLmFjdGl2ZVRhYlxuICAgICAgaWYgKHRhYiA9PT0gJ2NvbnNvbGUnIHx8ICh0YWIgJiYgdGhpc1t0YWJdKSkge1xuICAgICAgICByZXR1cm4gdGFiXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5yZWFkbWUgPyAncmVhZG1lJyA6ICdjb25zb2xlJ1xuICAgIH1cbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGFiSGVpZ2h0OiAyMDAsXG4gICAgICBzdGFydFk6IG51bGwsXG4gICAgICBvcmlnaW5hbEhlaWdodDogbnVsbCxcbiAgICAgIHJlc2l6aW5nOiBmYWxzZVxuICAgIH1cbiAgfSxcblxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuYm91bmRhcnkgPSB7XG4gICAgICBtaW46IHRoaXMuJHJlZnMuaGVhZGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCxcbiAgICAgIG1heDogdGhpcy4kcmVmcy5wYW5lbC5wYXJlbnROb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgLi4ubWFwQWN0aW9ucyhbXG4gICAgICAnc2V0Qm90dG9tUGFuZWxIZWlnaHQnLFxuICAgICAgJ2NsZWFyTG9ncycsXG4gICAgICAndXBkYXRlQWN0aXZlVGFiJ1xuICAgIF0pLFxuICAgIGhhbmRsZU1vdXNlRG93bih7Y2xpZW50WX0pIHtcbiAgICAgIHRoaXMucmVzaXppbmcgPSB0cnVlXG4gICAgICB0aGlzLnN0YXJ0WSA9IGNsaWVudFlcbiAgICAgIHRoaXMub3JpZ2luYWxIZWlnaHQgPSBwYXJzZUludCh0aGlzLiRyZWZzLmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0LCAxMCkgfHwgMFxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUpXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVNb3VzZVVwKVxuICAgICAgcHJldmVudFNlbGVjdFN0YXJ0KClcbiAgICB9LFxuXG4gICAgaGFuZGxlTW91c2VNb3ZlKHtjbGllbnRZfSkge1xuICAgICAgaWYgKCF0aGlzLnJlc2l6aW5nIHx8XG4gICAgICAgIGNsaWVudFkgPCB0aGlzLmJvdW5kYXJ5Lm1pbiB8fFxuICAgICAgICBjbGllbnRZID4gdGhpcy5ib3VuZGFyeS5tYXgpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLm9yaWdpbmFsSGVpZ2h0IC0gY2xpZW50WSArIHRoaXMuc3RhcnRZXG4gICAgICB0aGlzLnNldFRhYkhlaWdodChoZWlnaHQpXG4gICAgfSxcblxuICAgIGhhbmRsZU1vdXNlVXAoKSB7XG4gICAgICB0aGlzLnJlc2l6aW5nID0gZmFsc2VcbiAgICAgIHRoaXMuc2V0VGFiSGVpZ2h0KHRoaXMudGFiSGVpZ2h0KVxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUpXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5oYW5kbGVNb3VzZVVwKVxuICAgICAgcHJldmVudFNlbGVjdFN0b3AoKVxuICAgIH0sXG5cbiAgICBjbGVhckN1cnJlbnRMb2dzKCkge1xuICAgICAgY29uc3Qge3NjZW5hcmlvLCBzcG90fSA9IHRoaXMuJHJvdXRlLnF1ZXJ5XG4gICAgICB0aGlzLmNsZWFyTG9ncyh7c2NlbmFyaW8sIHNwb3R9KVxuICAgIH0sXG5cbiAgICBzZXRUYWJIZWlnaHQoaGVpZ2h0KSB7XG4gICAgICB0aGlzLnRhYkhlaWdodCA9IGhlaWdodFxuICAgIH1cbiAgfVxufVxuIl19

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(23)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(18),
  /* template */
  __webpack_require__(36),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(25)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(19),
  /* template */
  __webpack_require__(38),
  /* scopeId */
  "data-v-42e90998",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(26)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(20),
  /* template */
  __webpack_require__(39),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(24)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(21),
  /* template */
  __webpack_require__(37),
  /* scopeId */
  "data-v-3646c2b8",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(28)
__webpack_require__(27)
__webpack_require__(29)
__webpack_require__(30)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(40),
  /* scopeId */
  "data-v-bd4ff334",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main",
    style: ({
      width: _vm.mainWidth
    })
  }, [_c('div', {
    staticClass: "view"
  }, [_c('iframe', {
    ref: "iframe",
    staticClass: "play-ground",
    attrs: {
      "src": "preview.html",
      "frameborder": "0"
    }
  }), _vm._v(" "), (_vm.current.component) ? _c('tabs', {
    attrs: {
      "example": _vm.current.component.example,
      "readme": _vm.current.component.readme
    }
  }) : _vm._e()], 1)])
},staticRenderFns: []}

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('figure', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.leftPanelExpanded),
      expression: "leftPanelExpanded"
    }],
    ref: "sidebar",
    staticClass: "sidebar",
    style: ({
      width: _vm.sidebarWidth
    })
  }, [(_vm.resizing) ? _c('div', {
    staticClass: "resize-indicator"
  }, [_vm._v("W: " + _vm._s(_vm.sidebarWidth))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "sidebar-border",
    on: {
      "mousedown": _vm.handleMouseDown,
      "mouseup": _vm.handleMouseUp
    }
  }), _vm._v(" "), _c('h1', {
    on: {
      "click": _vm.toggleHelp
    }
  }, [_vm._v("Vue Playyyyyy")]), _vm._v(" "), _c('div', {
    staticClass: "sidebar-search"
  }, [_c('input', {
    attrs: {
      "placeholder": "Type to filter components..."
    },
    on: {
      "input": _vm.filter
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "scenarios"
  }, _vm._l((_vm.visibleScenarios), function(scenarios, name, index) {
    return _c('ul', {
      staticClass: "nav-spots",
      class: {
        active: _vm.isActiveSpot(name, index)
      }
    }, [_c('li', {
      staticClass: "nav-spot"
    }, [(scenarios.length > 0) ? _c('div', {
      staticClass: "component-name",
      on: {
        "click": function($event) {
          _vm.activateSpot(name)
        }
      }
    }, [_vm._v("\n          " + _vm._s(name) + "\n        ")]) : _vm._e(), _vm._v(" "), _c('ul', {
      staticClass: "nav-scenarios"
    }, _vm._l((scenarios), function(scenario) {
      return _c('li', {
        staticClass: "nav-scenario"
      }, [_c('router-link', {
        attrs: {
          "exact": "",
          "to": {
            query: {
              spot: name,
              scenario: scenario.scenario
            }
          }
        }
      }, [_vm._v("\n              " + _vm._s(scenario.scenario) + "\n            ")])], 1)
    }))])])
  }))])
},staticRenderFns: []}

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('slim-modal', {
    staticClass: "help-modal",
    style: ({
      padding: 0
    }),
    attrs: {
      "overlay-style": {
        backgroundColor: 'rgba(0, 0, 0, 0.74902)'
      },
      "is-open": _vm.showHelp,
      "click-outside": _vm.toggleHelp
    }
  }, [_c('h2', {
    staticClass: "modal-header"
  }, [_vm._v("\n    Shortcuts\n  ")]), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [_c('div', {
    staticClass: "shortcut"
  }, [_c('span', {
    staticClass: "kbd"
  }, [_vm._v("Command/Ctrl + Shift + L")]), _vm._v(" "), _c('span', {
    staticClass: "desc"
  }, [_vm._v("Toggle Left Panel")])]), _vm._v(" "), _c('div', {
    staticClass: "shortcut"
  }, [_c('span', {
    staticClass: "kbd"
  }, [_vm._v("Command/Ctrl + Shift + D")]), _vm._v(" "), _c('span', {
    staticClass: "desc"
  }, [_vm._v("Toggle Down Panel")])]), _vm._v(" "), _c('div', {
    staticClass: "shortcut"
  }, [_c('span', {
    staticClass: "kbd"
  }, [_vm._v("Command/Ctrl + Shift + K")]), _vm._v(" "), _c('span', {
    staticClass: "desc"
  }, [_vm._v("Toggle All Panels")])]), _vm._v(" "), _c('div', {
    staticClass: "shortcut"
  }, [_c('span', {
    staticClass: "kbd"
  }, [_vm._v("Command/Ctrl + Shift + ←")]), _vm._v(" "), _c('span', {
    staticClass: "desc"
  }, [_vm._v("Play Previous Example")])]), _vm._v(" "), _c('div', {
    staticClass: "shortcut"
  }, [_c('span', {
    staticClass: "kbd"
  }, [_vm._v("Command/Ctrl + Shift + →")]), _vm._v(" "), _c('span', {
    staticClass: "desc"
  }, [_vm._v("Play Next Example")])])]), _vm._v(" "), _c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "play-button",
    on: {
      "click": _vm.toggleHelp
    }
  }, [_vm._v("Close")]), _vm._v(" "), _c('a', {
    staticClass: "play-repo",
    attrs: {
      "href": "https://github.com/vue-play/vue-play"
    }
  }, [_vm._v("\n      Check out vue-play on GitHub\n    ")])])])
},staticRenderFns: []}

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app"
  }, [_c('help-modal'), _vm._v(" "), _c('sidebar'), _vm._v(" "), _c('app-main')], 1)
},staticRenderFns: []}

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.bottomPanelExpanded),
      expression: "bottomPanelExpanded"
    }],
    ref: "panel",
    staticClass: "play-tabs"
  }, [(_vm.resizing) ? _c('div', {
    staticClass: "resize-indicator"
  }, [_vm._v("H: " + _vm._s(_vm.tabHeight) + "px")]) : _vm._e(), _vm._v(" "), _c('div', {
    ref: "header",
    staticClass: "tab-header",
    on: {
      "mousedown": _vm.handleMouseDown,
      "mouseup": _vm.handleMouseUp
    }
  }, [(_vm.readme) ? _c('span', {
    staticClass: "title",
    class: {
      active: _vm.active === 'readme'
    },
    on: {
      "mousedown": function($event) {
        $event.stopPropagation();
      },
      "click": function($event) {
        _vm.updateActiveTab('readme')
      }
    }
  }, [_c('svg', {
    attrs: {
      "id": "i-book",
      "viewBox": "0 0 32 32",
      "width": "32",
      "height": "32",
      "fill": "none",
      "stroke": "currentcolor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "6.25%"
    }
  }, [_c('path', {
    attrs: {
      "d": "M16 7 C16 7 9 1 2 6 L2 28 C9 23 16 28 16 28 16 28 23 23 30 28 L30 6 C23 1 16 7 16 7 Z M16 7 L16 28"
    }
  })]), _vm._v("\n      readme\n    ")]) : _vm._e(), _vm._v(" "), _c('span', {
    staticClass: "title",
    class: {
      active: _vm.active === 'console'
    },
    on: {
      "mousedown": function($event) {
        $event.stopPropagation();
      },
      "click": function($event) {
        _vm.updateActiveTab('console')
      }
    }
  }, [_c('svg', {
    attrs: {
      "id": "i-bell",
      "viewBox": "0 0 32 32",
      "width": "32",
      "height": "32",
      "fill": "none",
      "stroke": "currentcolor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "6.25%"
    }
  }, [_c('path', {
    attrs: {
      "d": "M8 17 C8 12 9 6 16 6 23 6 24 12 24 17 24 22 27 25 27 25 L5 25 C5 25 8 22 8 17 Z M20 25 C20 25 20 29 16 29 12 29 12 25 12 25 M16 3 L16 6"
    }
  })]), _vm._v("\n      console"), (_vm.logs.length > 0) ? _c('sup', {
    staticClass: "logs-count"
  }, [_vm._v(_vm._s(_vm.logs.length))]) : _vm._e()]), _vm._v(" "), (_vm.example) ? _c('span', {
    staticClass: "title",
    class: {
      active: _vm.active === 'example'
    },
    on: {
      "mousedown": function($event) {
        $event.stopPropagation();
      },
      "click": function($event) {
        _vm.updateActiveTab('example')
      }
    }
  }, [_c('svg', {
    attrs: {
      "id": "i-code",
      "viewBox": "0 0 32 32",
      "width": "32",
      "height": "32",
      "fill": "none",
      "stroke": "currentcolor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "6.25%"
    }
  }, [_c('path', {
    attrs: {
      "d": "M10 9 L3 17 10 25 M22 9 L29 17 22 25 M18 7 L14 27"
    }
  })]), _vm._v("\n      Example\n    ")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "tab-actions"
  }, [(_vm.logs.length > 0 && _vm.active === 'console') ? _c('span', {
    staticClass: "tab-action hint--top-left hint--rounded",
    attrs: {
      "aria-label": "clean logs"
    },
    on: {
      "mousedown": function($event) {
        $event.stopPropagation();
      },
      "click": _vm.clearCurrentLogs
    }
  }, [_c('svg', {
    attrs: {
      "id": "i-trash",
      "viewBox": "0 0 32 32",
      "width": "32",
      "height": "32",
      "fill": "none",
      "stroke": "currentcolor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "6.25%"
    }
  }, [_c('path', {
    attrs: {
      "d": "M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6"
    }
  })])]) : _vm._e(), _vm._v(" "), (_vm.tabHeight !== 0) ? _c('span', {
    staticClass: "tab-action hint--top-left hint--rounded",
    attrs: {
      "aria-label": "Minimize the tab"
    },
    on: {
      "mousedown": function($event) {
        $event.stopPropagation();
      },
      "click": function($event) {
        _vm.setTabHeight(0)
      }
    }
  }, [_c('svg', {
    attrs: {
      "id": "i-external",
      "viewBox": "0 0 32 32",
      "width": "32",
      "height": "32",
      "fill": "none",
      "stroke": "currentcolor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "4.25%"
    }
  }, [_c('path', {
    attrs: {
      "d": "M5 5 L28 5 L28 28 L5 28 L5 5 M10 22 L23 22"
    }
  })])]) : _c('span', {
    staticClass: "tab-action hint--top-left hint--rounded",
    attrs: {
      "aria-label": "Reset the tab height"
    },
    on: {
      "mousedown": function($event) {
        $event.stopPropagation();
      },
      "click": function($event) {
        _vm.setTabHeight(200)
      }
    }
  }, [_c('svg', {
    attrs: {
      "viewBox": "0 0 32 32",
      "width": "32",
      "height": "32",
      "fill": "none",
      "stroke": "currentcolor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "4.25%"
    }
  }, [_c('path', {
    attrs: {
      "d": "M5 5 L28 5 L28 28 L5 28 L5 5 M10 10 L23 10 L23 20 L10 20 L10 10"
    }
  })])])])]), _vm._v(" "), (_vm.active === 'readme') ? _c('div', {
    ref: "body",
    staticClass: "tab-body",
    style: ({
      padding: '10px',
      height: _vm.tabHeight + 'px'
    })
  }, [_c('div', {
    staticClass: "markdown-body",
    domProps: {
      "innerHTML": _vm._s(_vm.readme)
    }
  })]) : _vm._e(), _vm._v(" "), (_vm.active === 'console') ? _c('div', {
    ref: "body",
    staticClass: "tab-body console-body",
    style: ({
      height: _vm.tabHeight + 'px'
    })
  }, _vm._l((_vm.logs), function(log) {
    return _c('div', {
      staticClass: "console-item"
    }, [_c('pre', [_c('code', {
      domProps: {
        "innerHTML": _vm._s(log.data)
      }
    })])])
  })) : _vm._e(), _vm._v(" "), (_vm.active === 'example') ? _c('div', {
    ref: "body",
    staticClass: "tab-body",
    style: ({
      height: _vm.tabHeight + 'px'
    })
  }, [_c('pre', [_c('code', {
    domProps: {
      "innerHTML": _vm._s(_vm.highlightedExample)
    }
  })])]) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("array-find-index");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/highlight");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/languages/javascript");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/languages/json");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/languages/xml");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("uid");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("vue-slim-modal");

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex_router_sync__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex_router_sync___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex_router_sync__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(6);





/* harmony default export */ __webpack_exports__["default"] = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$spots = _ref.spots,
      spots = _ref$spots === undefined ? [] : _ref$spots;

  __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].registerModule('app', {
    state: {
      spots: spots
    },
    mutations: {
      SET_SPOTS: function SET_SPOTS(state, payload) {
        state.spots = payload;
      }
    },
    actions: {
      setSpots: function setSpots(_ref2, payload) {
        var commit = _ref2.commit;

        commit('SET_SPOTS', payload);
      }
    }
  });

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_vuex_router_sync__["sync"])(__WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */]);

  return new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    el: '#app',
    store: __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */],
    router: __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */],
    render: function render(h) {
      return h('router-view');
    }
  });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAuanMiXSwibmFtZXMiOlsiVnVlIiwic3luYyIsInN0b3JlIiwicm91dGVyIiwic3BvdHMiLCJyZWdpc3Rlck1vZHVsZSIsInN0YXRlIiwibXV0YXRpb25zIiwiU0VUX1NQT1RTIiwicGF5bG9hZCIsImFjdGlvbnMiLCJzZXRTcG90cyIsImNvbW1pdCIsImVsIiwicmVuZGVyIiwiaCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsR0FBUCxNQUFnQixLQUFoQjtBQUNBLFNBQVFDLElBQVIsUUFBbUIsa0JBQW5CO0FBQ0EsT0FBT0MsS0FBUCxNQUFrQixTQUFsQjtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsVUFBbkI7O0FBRUEsZUFBZSxZQUE2QjtBQUFBLGlGQUFKLEVBQUk7QUFBQSx3QkFBbEJDLEtBQWtCO0FBQUEsTUFBbEJBLEtBQWtCLDhCQUFWLEVBQVU7O0FBQzFDRixRQUFNRyxjQUFOLENBQXFCLEtBQXJCLEVBQTRCO0FBQzFCQyxXQUFPO0FBQ0xGO0FBREssS0FEbUI7QUFJMUJHLGVBQVc7QUFDVEMsZUFEUyxxQkFDQ0YsS0FERCxFQUNRRyxPQURSLEVBQ2lCO0FBQ3hCSCxjQUFNRixLQUFOLEdBQWNLLE9BQWQ7QUFDRDtBQUhRLEtBSmU7QUFTMUJDLGFBQVM7QUFDUEMsY0FETywyQkFDWUYsT0FEWixFQUNxQjtBQUFBLFlBQWxCRyxNQUFrQixTQUFsQkEsTUFBa0I7O0FBQzFCQSxlQUFPLFdBQVAsRUFBb0JILE9BQXBCO0FBQ0Q7QUFITTtBQVRpQixHQUE1Qjs7QUFnQkFSLE9BQUtDLEtBQUwsRUFBWUMsTUFBWjs7QUFFQSxTQUFPLElBQUlILEdBQUosQ0FBUTtBQUNiYSxRQUFJLE1BRFM7QUFFYlgsZ0JBRmE7QUFHYkMsa0JBSGE7QUFJYlcsVUFKYSxrQkFJTkMsQ0FKTSxFQUlIO0FBQ1IsYUFBT0EsRUFBRSxhQUFGLENBQVA7QUFDRDtBQU5ZLEdBQVIsQ0FBUDtBQVFEIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMveW9yZGkvVHdpbnNraS9Qcm9qZWN0cy92dWUtcGxheSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IHtzeW5jfSBmcm9tICd2dWV4LXJvdXRlci1zeW5jJ1xuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXG5pbXBvcnQgcm91dGVyIGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoe3Nwb3RzID0gW119ID0ge30pIHtcbiAgc3RvcmUucmVnaXN0ZXJNb2R1bGUoJ2FwcCcsIHtcbiAgICBzdGF0ZToge1xuICAgICAgc3BvdHNcbiAgICB9LFxuICAgIG11dGF0aW9uczoge1xuICAgICAgU0VUX1NQT1RTKHN0YXRlLCBwYXlsb2FkKSB7XG4gICAgICAgIHN0YXRlLnNwb3RzID0gcGF5bG9hZFxuICAgICAgfVxuICAgIH0sXG4gICAgYWN0aW9uczoge1xuICAgICAgc2V0U3BvdHMoe2NvbW1pdH0sIHBheWxvYWQpIHtcbiAgICAgICAgY29tbWl0KCdTRVRfU1BPVFMnLCBwYXlsb2FkKVxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICBzeW5jKHN0b3JlLCByb3V0ZXIpXG5cbiAgcmV0dXJuIG5ldyBWdWUoe1xuICAgIGVsOiAnI2FwcCcsXG4gICAgc3RvcmUsXG4gICAgcm91dGVyLFxuICAgIHJlbmRlcihoKSB7XG4gICAgICByZXR1cm4gaCgncm91dGVyLXZpZXcnKVxuICAgIH1cbiAgfSlcbn1cbiJdfQ==

/***/ })
/******/ ]);