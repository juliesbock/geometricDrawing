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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/geometricdrawing/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/*! exports provided: dotDist, half, ctx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dotDist", function() { return dotDist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "half", function() { return half; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ctx", function() { return ctx; });
/* harmony import */ var _tools_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools/util */ "./src/tools/util.js");
/* harmony import */ var _tools_circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools/circle */ "./src/tools/circle.js");
/* harmony import */ var _tools_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools/grid */ "./src/tools/grid.js");
/* harmony import */ var _tools_line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tools/line */ "./src/tools/line.js");



 // import { erase } from './tools/eraser';
// to keep consistant sizing:

var dotDist = 20;
var half = dotDist / 2;
var ctx = canvas.getContext('2d');
document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById('canvas');
  Object(_tools_grid__WEBPACK_IMPORTED_MODULE_2__["getGridPoints"])(); // let mode = 'line';
  // if (mode === 'line') { 

  canvas.addEventListener('mousedown', _tools_line__WEBPACK_IMPORTED_MODULE_3__["dragStartLine"], false);
  canvas.addEventListener('mousemove', _tools_line__WEBPACK_IMPORTED_MODULE_3__["dragLine"], false);
  canvas.addEventListener('mouseup', _tools_line__WEBPACK_IMPORTED_MODULE_3__["dragStopLine"], false);
  canvas.addEventListener('mouseleave', _tools_line__WEBPACK_IMPORTED_MODULE_3__["dragStopLine"], false);
  canvas.addEventListener('dblclick', _tools_circle__WEBPACK_IMPORTED_MODULE_1__["drawCircle"], false); // }
  // const draw = (e) => {
  //   switch (mode) {
  //     case 'line':
  //       console.log('line drawin')
  //       dragStartLine(e);
  //       break;
  //     case 'eraser':
  //       erase;
  //       break;
  //     default:
  //       dragStartLine;
  //       break;
  //   };
  // };
  // if (mode === 'eraser') {
  //   console.log('wooohoo')
  //   // ctx.strokeStyle = 'whitesmoke';
  //   // canvas.addEventListener('mousedown', dragStartEraser, false);
  //   // canvas.addEventListener('mousemove', dragEraser, false);
  //   // canvas.addEventListener('mouseup', dragStopEraser, false);
  //   // canvas.addEventListener('mouseleave', dragStopEraser, false);
  //   // canvas.addEventListener('dblclick', null, false);
  // }
  // TOOLBAR COMMANDS
  // buttons for line thickness

  var smallLine = document.getElementById("smallLn");
  smallLine.addEventListener('click', function () {
    ctx.lineWidth = 1;
  });
  var medLine = document.getElementById("mediumLn");
  medLine.addEventListener('click', function () {
    ctx.lineWidth = 3;
  });
  var largeLine = document.getElementById("largeLn");
  largeLine.addEventListener('click', function () {
    ctx.lineWidth = 5;
  });
  var xLargeLine = document.getElementById("xlargeLn");
  xLargeLine.addEventListener('click', function () {
    ctx.lineWidth = 10;
  }); // ctx.lineWidth = radius;
  // const minRad = 0.5;
  // const maxRad = 100;
  // const defaultRad = 20;
  // const interval = 5;
  // const radSpan = document.getElementById('radval');
  // var setRadius = (newRadius) => {
  //   if (newRadius < minRad)
  //     newRadius = minRad
  //   else if (newRadius > maxRad)
  //     newRadius = maxRad;
  //   radius = newRadius;
  //   context.lineWidth = radius * 2;
  //   radSpan.innerHTML = radius;
  // }
  // // Decrease radius of drawing tool
  // const decRad = document.getElementById('decrad');
  // decRad.addEventListener('click', () => {
  //   console.log('minus')
  //   setRadius(radius - interval);
  // });
  // // Increase radius of drawing tool
  // const incRad = document.getElementById('incrad');
  // incRad.addEventListener('click', () => {
  //   console.log('plusss')
  //   if (radius % 1 !== 0) {
  //     setRadius(parseInt(radius) + interval);
  //   } else {
  //     setRadius(radius + interval);
  //   }
  // });
  //tools
  // const eraser = document.getElementById('eraser');
  // eraser.addEventListener('click', () => {
  //   mode = 'eraser';
  //   console.log('erasin')
  // });
  // const line = document.getElementById('line');
  // line.addEventListener('click', () => {
  //   mode = 'line';
  // });
  // const circleEle = document.getElementById('circle');
  // const lineEle = document.getElementById('line');
  // circleEle.addEventListener("click", circleClick, true);
  // lineEle.addEventListener("click", lineClick, true);
}); // document.addEventListener('load', init);

/***/ }),

/***/ "./src/tools/circle.js":
/*!*****************************!*\
  !*** ./src/tools/circle.js ***!
  \*****************************/
/*! exports provided: drawCircle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawCircle", function() { return drawCircle; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/tools/util.js");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../canvas */ "./src/canvas.js");


var drawCircle = function drawCircle(e) {
  var pos = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getCoords"])(e);
  pos.x = Math.round(pos.x / _canvas__WEBPACK_IMPORTED_MODULE_1__["half"]) * _canvas__WEBPACK_IMPORTED_MODULE_1__["half"];
  pos.y = Math.round(pos.y / _canvas__WEBPACK_IMPORTED_MODULE_1__["half"]) * _canvas__WEBPACK_IMPORTED_MODULE_1__["half"];
  _canvas__WEBPACK_IMPORTED_MODULE_1__["ctx"].beginPath(); // necessary to begin drawing this path

  _canvas__WEBPACK_IMPORTED_MODULE_1__["ctx"].arc(pos.x, pos.y, _canvas__WEBPACK_IMPORTED_MODULE_1__["dotDist"], 0, 2 * Math.PI); // ctx.strokeStyle = "red"; // optionally sets color of path

  _canvas__WEBPACK_IMPORTED_MODULE_1__["ctx"].stroke(); // draws path (default color is black)

  _canvas__WEBPACK_IMPORTED_MODULE_1__["ctx"].closePath(); // optional when drawing a circle
};

/***/ }),

/***/ "./src/tools/grid.js":
/*!***************************!*\
  !*** ./src/tools/grid.js ***!
  \***************************/
/*! exports provided: getGridPoints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGridPoints", function() { return getGridPoints; });
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvas */ "./src/canvas.js");

var getGridPoints = function getGridPoints() {
  var pointsArr = []; //get all points

  for (var x = 0; x < canvas.width; x += _canvas__WEBPACK_IMPORTED_MODULE_0__["dotDist"]) {
    for (var y = 0; y < canvas.height; y += _canvas__WEBPACK_IMPORTED_MODULE_0__["dotDist"]) {
      pointsArr.push([x, y]);
    }
  } //plot all points to make grid


  pointsArr.forEach(function (pos) {
    _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].beginPath();
    _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].arc(pos[0], pos[1], .5, 0, 2 * Math.PI, true);
    _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeStyle = 'gray';
    _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].stroke();
    _canvas__WEBPACK_IMPORTED_MODULE_0__["ctx"].strokeStyle = 'black';
  });
};

/***/ }),

/***/ "./src/tools/line.js":
/*!***************************!*\
  !*** ./src/tools/line.js ***!
  \***************************/
/*! exports provided: dragStartLine, dragLine, dragStopLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dragStartLine", function() { return dragStartLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dragLine", function() { return dragLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dragStopLine", function() { return dragStopLine; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/tools/util.js");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../canvas */ "./src/canvas.js");


var dragging = false;
var dragStartCoords;
var snapshot;
var dragStartLine = function dragStartLine(e) {
  dragging = true;
  dragStartCoords = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getCoords"])(e);
  takeSnapshot();
};
var dragLine = function dragLine(e) {
  if (dragging) {
    restoreSnapshot();
    var pos = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getCoords"])(e);
    drawLine(pos);
  }
};
var dragStopLine = function dragStopLine(e) {
  if (dragging) {
    dragging = false;
    restoreSnapshot();
    var pos = Object(_util__WEBPACK_IMPORTED_MODULE_0__["getCoords"])(e);
    _canvas__WEBPACK_IMPORTED_MODULE_1__["ctx"].lineCap = "round";
    drawLine(pos);
  }
};

var takeSnapshot = function takeSnapshot() {
  snapshot = _canvas__WEBPACK_IMPORTED_MODULE_1__["ctx"].getImageData(0, 0, canvas.width, canvas.height);
};

var restoreSnapshot = function restoreSnapshot() {
  _canvas__WEBPACK_IMPORTED_MODULE_1__["ctx"].putImageData(snapshot, 0, 0);
};

var drawLine = function drawLine(pos) {
  _canvas__WEBPACK_IMPORTED_MODULE_1__["ctx"].beginPath();
  dragStartCoords.x = Math.round(dragStartCoords.x / _canvas__WEBPACK_IMPORTED_MODULE_1__["half"]) * _canvas__WEBPACK_IMPORTED_MODULE_1__["half"];
  dragStartCoords.y = Math.round(dragStartCoords.y / _canvas__WEBPACK_IMPORTED_MODULE_1__["half"]) * _canvas__WEBPACK_IMPORTED_MODULE_1__["half"];
  _canvas__WEBPACK_IMPORTED_MODULE_1__["ctx"].moveTo(dragStartCoords.x, dragStartCoords.y);
  pos.x = Math.round(pos.x / _canvas__WEBPACK_IMPORTED_MODULE_1__["half"]) * _canvas__WEBPACK_IMPORTED_MODULE_1__["half"];
  pos.y = Math.round(pos.y / _canvas__WEBPACK_IMPORTED_MODULE_1__["half"]) * _canvas__WEBPACK_IMPORTED_MODULE_1__["half"];
  _canvas__WEBPACK_IMPORTED_MODULE_1__["ctx"].lineTo(pos.x, pos.y);
  if (pos.x !== dragStartCoords.x || pos.y !== dragStartCoords.y) _canvas__WEBPACK_IMPORTED_MODULE_1__["ctx"].stroke();
};

/***/ }),

/***/ "./src/tools/util.js":
/*!***************************!*\
  !*** ./src/tools/util.js ***!
  \***************************/
/*! exports provided: getCoords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoords", function() { return getCoords; });
var getCoords = function getCoords(e) {
  var x = e.clientX - canvas.getBoundingClientRect().left;
  var y = e.clientY - canvas.getBoundingClientRect().top;
  return {
    x: x,
    y: y
  };
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map