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
/******/ 	return __webpack_require__(__webpack_require__.s = 51);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = require("./play");

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ 3:
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

/***/ 4:
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

/***/ 5:
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

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_query_string__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_query_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_query_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_find_scenario__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_key_events__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__play__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__play___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__play__);






/* harmony default export */ __webpack_exports__["default"] = function () {
  var spots = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__play__["getSpots"])();
  var query = __WEBPACK_IMPORTED_MODULE_1_query_string___default.a.parse(location.search);

  __WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$log = function (data) {
    parent.postMessage({
      type: 'ADD_LOG',
      payload: data
    }, location.origin);
  };
  return new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    el: '#app',
    data: function data() {
      var scenario = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_find_scenario__["a" /* default */])(spots, query);
      var component = scenario && scenario.component;
      if (component) {
        component.example = undefined;
        component.readme = undefined;
      }
      return {
        current: component
      };
    },
    created: function created() {
      var _this = this;

      window.addEventListener('message', function (_ref) {
        var data = _ref.data;

        if (data.type === 'UPDATE_ROUTE') {
          var scenario = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_find_scenario__["a" /* default */])(spots, data.payload);
          if (scenario) {
            _this.current = scenario.component;
          }
        }
      });
      window.onkeydown = function (e) {
        parent.postMessage({
          type: 'APPLY_SHORTCUT',
          payload: JSON.stringify(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_key_events__["a" /* parseKey */])(e))
        }, location.origin);
      };
      parent.postMessage({
        type: 'SET_SPOTS',
        payload: JSON.stringify(spots)
      }, location.origin);
    },
    render: function render(h) {
      return h('div', { attrs: { id: 'app' } }, [h(this.current)]);
    }
  });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcmV2aWV3LmpzIl0sIm5hbWVzIjpbIlZ1ZSIsInFzIiwiZmluZFNjZW5hcmlvIiwicGFyc2VLZXkiLCJnZXRTcG90cyIsInNwb3RzIiwicXVlcnkiLCJwYXJzZSIsImxvY2F0aW9uIiwic2VhcmNoIiwicHJvdG90eXBlIiwiJGxvZyIsImRhdGEiLCJwYXJlbnQiLCJwb3N0TWVzc2FnZSIsInR5cGUiLCJwYXlsb2FkIiwib3JpZ2luIiwiZWwiLCJzY2VuYXJpbyIsImNvbXBvbmVudCIsImV4YW1wbGUiLCJ1bmRlZmluZWQiLCJyZWFkbWUiLCJjdXJyZW50IiwiY3JlYXRlZCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbmtleWRvd24iLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsInJlbmRlciIsImgiLCJhdHRycyIsImlkIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxHQUFQLE1BQWdCLEtBQWhCO0FBQ0EsT0FBT0MsRUFBUCxNQUFlLGNBQWY7QUFDQSxPQUFPQyxZQUFQLE1BQXlCLHVCQUF6QjtBQUNBLFNBQVFDLFFBQVIsUUFBdUIsb0JBQXZCO0FBQ0EsU0FBUUMsUUFBUixRQUF1QixRQUF2Qjs7QUFFQSxlQUFlLFlBQVk7QUFDekIsTUFBTUMsUUFBUUQsVUFBZDtBQUNBLE1BQU1FLFFBQVFMLEdBQUdNLEtBQUgsQ0FBU0MsU0FBU0MsTUFBbEIsQ0FBZDs7QUFFQVQsTUFBSVUsU0FBSixDQUFjQyxJQUFkLEdBQXFCLFVBQVVDLElBQVYsRUFBZ0I7QUFDbkNDLFdBQU9DLFdBQVAsQ0FBbUI7QUFDakJDLFlBQU0sU0FEVztBQUVqQkMsZUFBU0o7QUFGUSxLQUFuQixFQUdHSixTQUFTUyxNQUhaO0FBSUQsR0FMRDtBQU1BLFNBQU8sSUFBSWpCLEdBQUosQ0FBUTtBQUNia0IsUUFBSSxNQURTO0FBRWJOLFFBRmEsa0JBRU47QUFDTCxVQUFNTyxXQUFXakIsYUFBYUcsS0FBYixFQUFvQkMsS0FBcEIsQ0FBakI7QUFDQSxVQUFNYyxZQUFZRCxZQUFZQSxTQUFTQyxTQUF2QztBQUNBLFVBQUlBLFNBQUosRUFBZTtBQUNiQSxrQkFBVUMsT0FBVixHQUFvQkMsU0FBcEI7QUFDQUYsa0JBQVVHLE1BQVYsR0FBbUJELFNBQW5CO0FBQ0Q7QUFDRCxhQUFPO0FBQ0xFLGlCQUFTSjtBQURKLE9BQVA7QUFHRCxLQVpZO0FBYWJLLFdBYmEscUJBYUg7QUFBQTs7QUFDUkMsYUFBT0MsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsZ0JBQVk7QUFBQSxZQUFWZixJQUFVLFFBQVZBLElBQVU7O0FBQzdDLFlBQUlBLEtBQUtHLElBQUwsS0FBYyxjQUFsQixFQUFrQztBQUNoQyxjQUFNSSxXQUFXakIsYUFBYUcsS0FBYixFQUFvQk8sS0FBS0ksT0FBekIsQ0FBakI7QUFDQSxjQUFJRyxRQUFKLEVBQWM7QUFDWixrQkFBS0ssT0FBTCxHQUFlTCxTQUFTQyxTQUF4QjtBQUNEO0FBQ0Y7QUFDRixPQVBEO0FBUUFNLGFBQU9FLFNBQVAsR0FBbUIsYUFBSztBQUN0QmYsZUFBT0MsV0FBUCxDQUFtQjtBQUNqQkMsZ0JBQU0sZ0JBRFc7QUFFakJDLG1CQUFTYSxLQUFLQyxTQUFMLENBQWUzQixTQUFTNEIsQ0FBVCxDQUFmO0FBRlEsU0FBbkIsRUFHR3ZCLFNBQVNTLE1BSFo7QUFJRCxPQUxEO0FBTUFKLGFBQU9DLFdBQVAsQ0FBbUI7QUFDakJDLGNBQU0sV0FEVztBQUVqQkMsaUJBQVNhLEtBQUtDLFNBQUwsQ0FBZXpCLEtBQWY7QUFGUSxPQUFuQixFQUdHRyxTQUFTUyxNQUhaO0FBSUQsS0FoQ1k7QUFpQ2JlLFVBakNhLGtCQWlDTkMsQ0FqQ00sRUFpQ0g7QUFDUixhQUFPQSxFQUFFLEtBQUYsRUFBUyxFQUFDQyxPQUFPLEVBQUNDLElBQUksS0FBTCxFQUFSLEVBQVQsRUFBK0IsQ0FBQ0YsRUFBRSxLQUFLVCxPQUFQLENBQUQsQ0FBL0IsQ0FBUDtBQUNEO0FBbkNZLEdBQVIsQ0FBUDtBQXFDRCIsImZpbGUiOiJwcmV2aWV3LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95b3JkaS9Ud2luc2tpL1Byb2plY3RzL3Z1ZS1wbGF5Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5pbXBvcnQgcXMgZnJvbSAncXVlcnktc3RyaW5nJ1xuaW1wb3J0IGZpbmRTY2VuYXJpbyBmcm9tICcuL3V0aWxzL2ZpbmQtc2NlbmFyaW8nXG5pbXBvcnQge3BhcnNlS2V5fSBmcm9tICcuL3V0aWxzL2tleS1ldmVudHMnXG5pbXBvcnQge2dldFNwb3RzfSBmcm9tICcuL3BsYXknXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgc3BvdHMgPSBnZXRTcG90cygpXG4gIGNvbnN0IHF1ZXJ5ID0gcXMucGFyc2UobG9jYXRpb24uc2VhcmNoKVxuXG4gIFZ1ZS5wcm90b3R5cGUuJGxvZyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgcGFyZW50LnBvc3RNZXNzYWdlKHtcbiAgICAgIHR5cGU6ICdBRERfTE9HJyxcbiAgICAgIHBheWxvYWQ6IGRhdGFcbiAgICB9LCBsb2NhdGlvbi5vcmlnaW4pXG4gIH1cbiAgcmV0dXJuIG5ldyBWdWUoe1xuICAgIGVsOiAnI2FwcCcsXG4gICAgZGF0YSgpIHtcbiAgICAgIGNvbnN0IHNjZW5hcmlvID0gZmluZFNjZW5hcmlvKHNwb3RzLCBxdWVyeSlcbiAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHNjZW5hcmlvICYmIHNjZW5hcmlvLmNvbXBvbmVudFxuICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICBjb21wb25lbnQuZXhhbXBsZSA9IHVuZGVmaW5lZFxuICAgICAgICBjb21wb25lbnQucmVhZG1lID0gdW5kZWZpbmVkXG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50OiBjb21wb25lbnRcbiAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsICh7ZGF0YX0pID0+IHtcbiAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gJ1VQREFURV9ST1VURScpIHtcbiAgICAgICAgICBjb25zdCBzY2VuYXJpbyA9IGZpbmRTY2VuYXJpbyhzcG90cywgZGF0YS5wYXlsb2FkKVxuICAgICAgICAgIGlmIChzY2VuYXJpbykge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gc2NlbmFyaW8uY29tcG9uZW50XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgd2luZG93Lm9ua2V5ZG93biA9IGUgPT4ge1xuICAgICAgICBwYXJlbnQucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgIHR5cGU6ICdBUFBMWV9TSE9SVENVVCcsXG4gICAgICAgICAgcGF5bG9hZDogSlNPTi5zdHJpbmdpZnkocGFyc2VLZXkoZSkpXG4gICAgICAgIH0sIGxvY2F0aW9uLm9yaWdpbilcbiAgICAgIH1cbiAgICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7XG4gICAgICAgIHR5cGU6ICdTRVRfU1BPVFMnLFxuICAgICAgICBwYXlsb2FkOiBKU09OLnN0cmluZ2lmeShzcG90cylcbiAgICAgIH0sIGxvY2F0aW9uLm9yaWdpbilcbiAgICB9LFxuICAgIHJlbmRlcihoKSB7XG4gICAgICByZXR1cm4gaCgnZGl2Jywge2F0dHJzOiB7aWQ6ICdhcHAnfX0sIFtoKHRoaXMuY3VycmVudCldKVxuICAgIH1cbiAgfSlcbn1cbiJdfQ==

/***/ })

/******/ });