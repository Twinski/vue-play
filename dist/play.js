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
/******/ 	return __webpack_require__(__webpack_require__.s = 50);
/******/ })
/************************************************************************/
/******/ ({

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "play", function() { return play; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpots", function() { return getSpots; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var DEV = "production" === 'development';

var spots = {};

var play = function play(spot) {
  var isSpotComponent = (typeof spot === 'undefined' ? 'undefined' : _typeof(spot)) === 'object';

  var componentName = void 0;
  var _displayName = void 0;
  if (isSpotComponent) {
    componentName = spot.name;
    _displayName = spot.displayName || spot.name;
  } else {
    _displayName = spot;
  }

  return {
    add: function add(scenario, value) {
      var component = value;
      if (typeof value === 'string') {
        component = { template: value };
      } else if (typeof value === 'function') {
        component = { render: value };
      }
      component.example = component.example || component.template;

      // register spot component inscenario component
      if (isSpotComponent) {
        if (componentName) {
          // remove pre initialized component
          // since vue-loader uses vue.extend automatically
          delete component._Ctor;
          component.components = component.components || {};
          if (component.components[componentName]) {
            DEV && console.error(componentName + ' is already registered in your scenario');
          } else {
            component.components[componentName] = spot;
          }
        } else {
          DEV && console.error('You haven\'t either defined a name property or called .name() to set spot component name');
        }
      }

      spots[_displayName] = spots[_displayName] || [];
      spots[_displayName].push({
        scenario: scenario,
        component: component
      });
      return this;
    },


    // update the spot title
    displayName: function displayName(name) {
      _displayName = name;
      return this;
    },


    // update the spot component name for registering in scenario component
    name: function name(_name) {
      if (isSpotComponent) {
        componentName = _name;
        if (!_displayName) {
          _displayName = _name;
        }
      } else {
        DEV && console.error('.name() is only available when you use a component as play() argument');
      }
      return this;
    }
  };
};

var getSpots = function getSpots() {
  return spots;
};


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wbGF5LmpzIl0sIm5hbWVzIjpbIkRFViIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsInNwb3RzIiwicGxheSIsImlzU3BvdENvbXBvbmVudCIsInNwb3QiLCJjb21wb25lbnROYW1lIiwiZGlzcGxheU5hbWUiLCJuYW1lIiwiYWRkIiwic2NlbmFyaW8iLCJ2YWx1ZSIsImNvbXBvbmVudCIsInRlbXBsYXRlIiwicmVuZGVyIiwiZXhhbXBsZSIsIl9DdG9yIiwiY29tcG9uZW50cyIsImNvbnNvbGUiLCJlcnJvciIsInB1c2giLCJnZXRTcG90cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxNQUFNQyxRQUFRQyxHQUFSLENBQVlDLFFBQVosS0FBeUIsYUFBckM7O0FBRUEsSUFBSUMsUUFBUSxFQUFaOztBQUVBLElBQU1DLE9BQU8sU0FBUEEsSUFBTyxPQUFRO0FBQ25CLE1BQU1DLGtCQUFrQixRQUFPQyxJQUFQLHlDQUFPQSxJQUFQLE9BQWdCLFFBQXhDOztBQUVBLE1BQUlDLHNCQUFKO0FBQ0EsTUFBSUMscUJBQUo7QUFDQSxNQUFJSCxlQUFKLEVBQXFCO0FBQ25CRSxvQkFBZ0JELEtBQUtHLElBQXJCO0FBQ0FELG1CQUFjRixLQUFLRSxXQUFMLElBQW9CRixLQUFLRyxJQUF2QztBQUNELEdBSEQsTUFHTztBQUNMRCxtQkFBY0YsSUFBZDtBQUNEOztBQUVELFNBQU87QUFDTEksT0FESyxlQUNEQyxRQURDLEVBQ1NDLEtBRFQsRUFDZ0I7QUFDbkIsVUFBSUMsWUFBWUQsS0FBaEI7QUFDQSxVQUFJLE9BQU9BLEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDN0JDLG9CQUFZLEVBQUNDLFVBQVVGLEtBQVgsRUFBWjtBQUNELE9BRkQsTUFFTyxJQUFJLE9BQU9BLEtBQVAsS0FBaUIsVUFBckIsRUFBaUM7QUFDdENDLG9CQUFZLEVBQUNFLFFBQVFILEtBQVQsRUFBWjtBQUNEO0FBQ0RDLGdCQUFVRyxPQUFWLEdBQW9CSCxVQUFVRyxPQUFWLElBQXFCSCxVQUFVQyxRQUFuRDs7QUFFQTtBQUNBLFVBQUlULGVBQUosRUFBcUI7QUFDbkIsWUFBSUUsYUFBSixFQUFtQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQU9NLFVBQVVJLEtBQWpCO0FBQ0FKLG9CQUFVSyxVQUFWLEdBQXVCTCxVQUFVSyxVQUFWLElBQXdCLEVBQS9DO0FBQ0EsY0FBSUwsVUFBVUssVUFBVixDQUFxQlgsYUFBckIsQ0FBSixFQUF5QztBQUN2Q1IsbUJBQU9vQixRQUFRQyxLQUFSLENBQWlCYixhQUFqQiw2Q0FBUDtBQUNELFdBRkQsTUFFTztBQUNMTSxzQkFBVUssVUFBVixDQUFxQlgsYUFBckIsSUFBc0NELElBQXRDO0FBQ0Q7QUFDRixTQVZELE1BVU87QUFDTFAsaUJBQU9vQixRQUFRQyxLQUFSLDRGQUFQO0FBQ0Q7QUFDRjs7QUFFRGpCLFlBQU1LLFlBQU4sSUFBcUJMLE1BQU1LLFlBQU4sS0FBc0IsRUFBM0M7QUFDQUwsWUFBTUssWUFBTixFQUFtQmEsSUFBbkIsQ0FBd0I7QUFDdEJWLDBCQURzQjtBQUV0QkU7QUFGc0IsT0FBeEI7QUFJQSxhQUFPLElBQVA7QUFDRCxLQWpDSTs7O0FBbUNMO0FBQ0FMLGVBcENLLHVCQW9DT0MsSUFwQ1AsRUFvQ2E7QUFDaEJELHFCQUFjQyxJQUFkO0FBQ0EsYUFBTyxJQUFQO0FBQ0QsS0F2Q0k7OztBQXlDTDtBQUNBQSxRQTFDSyxnQkEwQ0FBLEtBMUNBLEVBMENNO0FBQ1QsVUFBSUosZUFBSixFQUFxQjtBQUNuQkUsd0JBQWdCRSxLQUFoQjtBQUNBLFlBQUksQ0FBQ0QsWUFBTCxFQUFrQjtBQUNoQkEseUJBQWNDLEtBQWQ7QUFDRDtBQUNGLE9BTEQsTUFLTztBQUNMVixlQUFPb0IsUUFBUUMsS0FBUixDQUFjLHVFQUFkLENBQVA7QUFDRDtBQUNELGFBQU8sSUFBUDtBQUNEO0FBcERJLEdBQVA7QUFzREQsQ0FsRUQ7O0FBb0VBLElBQU1FLFdBQVcsU0FBWEEsUUFBVztBQUFBLFNBQU1uQixLQUFOO0FBQUEsQ0FBakI7O0FBRUEsU0FDRUMsSUFERixFQUVFa0IsUUFGRiIsImZpbGUiOiJwbGF5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy95b3JkaS9Ud2luc2tpL1Byb2plY3RzL3Z1ZS1wbGF5Iiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgREVWID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCdcblxubGV0IHNwb3RzID0ge31cblxuY29uc3QgcGxheSA9IHNwb3QgPT4ge1xuICBjb25zdCBpc1Nwb3RDb21wb25lbnQgPSB0eXBlb2Ygc3BvdCA9PT0gJ29iamVjdCdcblxuICBsZXQgY29tcG9uZW50TmFtZVxuICBsZXQgZGlzcGxheU5hbWVcbiAgaWYgKGlzU3BvdENvbXBvbmVudCkge1xuICAgIGNvbXBvbmVudE5hbWUgPSBzcG90Lm5hbWVcbiAgICBkaXNwbGF5TmFtZSA9IHNwb3QuZGlzcGxheU5hbWUgfHwgc3BvdC5uYW1lXG4gIH0gZWxzZSB7XG4gICAgZGlzcGxheU5hbWUgPSBzcG90XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGFkZChzY2VuYXJpbywgdmFsdWUpIHtcbiAgICAgIGxldCBjb21wb25lbnQgPSB2YWx1ZVxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29tcG9uZW50ID0ge3RlbXBsYXRlOiB2YWx1ZX1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbXBvbmVudCA9IHtyZW5kZXI6IHZhbHVlfVxuICAgICAgfVxuICAgICAgY29tcG9uZW50LmV4YW1wbGUgPSBjb21wb25lbnQuZXhhbXBsZSB8fCBjb21wb25lbnQudGVtcGxhdGVcblxuICAgICAgLy8gcmVnaXN0ZXIgc3BvdCBjb21wb25lbnQgaW5zY2VuYXJpbyBjb21wb25lbnRcbiAgICAgIGlmIChpc1Nwb3RDb21wb25lbnQpIHtcbiAgICAgICAgaWYgKGNvbXBvbmVudE5hbWUpIHtcbiAgICAgICAgICAvLyByZW1vdmUgcHJlIGluaXRpYWxpemVkIGNvbXBvbmVudFxuICAgICAgICAgIC8vIHNpbmNlIHZ1ZS1sb2FkZXIgdXNlcyB2dWUuZXh0ZW5kIGF1dG9tYXRpY2FsbHlcbiAgICAgICAgICBkZWxldGUgY29tcG9uZW50Ll9DdG9yXG4gICAgICAgICAgY29tcG9uZW50LmNvbXBvbmVudHMgPSBjb21wb25lbnQuY29tcG9uZW50cyB8fCB7fVxuICAgICAgICAgIGlmIChjb21wb25lbnQuY29tcG9uZW50c1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICAgICAgREVWICYmIGNvbnNvbGUuZXJyb3IoYCR7Y29tcG9uZW50TmFtZX0gaXMgYWxyZWFkeSByZWdpc3RlcmVkIGluIHlvdXIgc2NlbmFyaW9gKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb21wb25lbnQuY29tcG9uZW50c1tjb21wb25lbnROYW1lXSA9IHNwb3RcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgREVWICYmIGNvbnNvbGUuZXJyb3IoYFlvdSBoYXZlbid0IGVpdGhlciBkZWZpbmVkIGEgbmFtZSBwcm9wZXJ0eSBvciBjYWxsZWQgLm5hbWUoKSB0byBzZXQgc3BvdCBjb21wb25lbnQgbmFtZWApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3BvdHNbZGlzcGxheU5hbWVdID0gc3BvdHNbZGlzcGxheU5hbWVdIHx8IFtdXG4gICAgICBzcG90c1tkaXNwbGF5TmFtZV0ucHVzaCh7XG4gICAgICAgIHNjZW5hcmlvLFxuICAgICAgICBjb21wb25lbnRcbiAgICAgIH0pXG4gICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgdGhlIHNwb3QgdGl0bGVcbiAgICBkaXNwbGF5TmFtZShuYW1lKSB7XG4gICAgICBkaXNwbGF5TmFtZSA9IG5hbWVcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfSxcblxuICAgIC8vIHVwZGF0ZSB0aGUgc3BvdCBjb21wb25lbnQgbmFtZSBmb3IgcmVnaXN0ZXJpbmcgaW4gc2NlbmFyaW8gY29tcG9uZW50XG4gICAgbmFtZShuYW1lKSB7XG4gICAgICBpZiAoaXNTcG90Q29tcG9uZW50KSB7XG4gICAgICAgIGNvbXBvbmVudE5hbWUgPSBuYW1lXG4gICAgICAgIGlmICghZGlzcGxheU5hbWUpIHtcbiAgICAgICAgICBkaXNwbGF5TmFtZSA9IG5hbWVcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgREVWICYmIGNvbnNvbGUuZXJyb3IoJy5uYW1lKCkgaXMgb25seSBhdmFpbGFibGUgd2hlbiB5b3UgdXNlIGEgY29tcG9uZW50IGFzIHBsYXkoKSBhcmd1bWVudCcpXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBnZXRTcG90cyA9ICgpID0+IHNwb3RzXG5cbmV4cG9ydCB7XG4gIHBsYXksXG4gIGdldFNwb3RzXG59XG4iXX0=

/***/ })

/******/ });