/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/actions/series.js":
/*!*******************************!*\
  !*** ./src/actions/series.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createSeriesLayer: () => (/* binding */ createSeriesLayer),\n/* harmony export */   formatLabel: () => (/* binding */ formatLabel)\n/* harmony export */ });\n/* harmony import */ var _shared_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/constants.js */ \"./src/shared/constants.js\");\n\n\nconst createSeriesLayer = (value, layerOrder) => ({\n  type: \"radar\",\n  radarIndex: 0,\n  data: [\n    {\n      ..._shared_constants_js__WEBPACK_IMPORTED_MODULE_0__.SERIES_DEFAULT_DATA,\n      value: value,\n      label: {\n        show: true,\n        color: \"black\",\n        formatter: function (params) {\n          return formatLabel(layerOrder, params.dimensionIndex);\n        },\n      },\n    },\n  ],\n});\n\nconst formatLabel = (layerOrder = 1, dimensionIndex = 5) => {\n  const labels = _shared_constants_js__WEBPACK_IMPORTED_MODULE_0__.LABELS[layerOrder - 1];\n\n  let label;\n\n  switch (dimensionIndex) {\n    case 0:\n      label = labels[0];\n      break;\n    case 1:\n      label = labels[1];\n      break;\n    case 2:\n      label = labels[2];\n      break;\n    case 3:\n      label = labels[3];\n      break;\n    case 4:\n      label = labels[4];\n      break;\n    default:\n      label = \"\";\n      break;\n  }\n\n  return label;\n};\n\n\n//# sourceURL=webpack://poc-polygon/./src/actions/series.js?");

/***/ }),

/***/ "./src/actions/values.js":
/*!*******************************!*\
  !*** ./src/actions/values.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createValueLine: () => (/* binding */ createValueLine),\n/* harmony export */   parseValueArray: () => (/* binding */ parseValueArray)\n/* harmony export */ });\nconst parseValueArray = (size, divisor, layerOrder) => [\n  size - (size / divisor) * layerOrder,\n  size - (size / divisor) * layerOrder,\n  size - (size / divisor) * layerOrder,\n  size - (size / divisor) * layerOrder,\n  size - (size / divisor) * layerOrder,\n  size - (size / divisor) * layerOrder,\n];\n\nconst createValueLine = (newValue) => {\n  return {\n    type: \"radar\",\n    radarIndex: 0,\n    data: [\n      {\n        value: newValue,\n        symbol: \"circle\",\n        symbolSize: 0,\n        label: {\n          show: false,\n        },\n        lineStyle: {\n          type: \"solid\",\n          color: \"red\",\n          width: 2,\n        },\n      },\n    ],\n  };\n};\n\n\n//# sourceURL=webpack://poc-polygon/./src/actions/values.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shared_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/constants.js */ \"./src/shared/constants.js\");\n/* harmony import */ var _option_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./option.js */ \"./src/option.js\");\n\n\n\nconst data = {\n  size: 300,\n  qty: 5,\n};\n\nvar dom = document.getElementById(\"chart-container\");\n\nvar myChart = echarts.init(dom, null, {\n  renderer: \"canvas\",\n  useDirtyRect: false,\n});\n\nvar app = {};\n\nvar option = (0,_option_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data);\n\nif (option && typeof option === \"object\") {\n  myChart.setOption(option);\n}\n\nwindow.addEventListener(\"resize\", myChart.resize);\n\nvar inputField1 = document.getElementById(\"inputField1\");\nvar inputField2 = document.getElementById(\"inputField2\");\nvar inputField3 = document.getElementById(\"inputField3\");\nvar inputField4 = document.getElementById(\"inputField4\");\nvar inputField5 = document.getElementById(\"inputField5\");\n\nfunction updateChart(newValue) {\n  var option = (0,_option_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data, newValue);\n\n  if (option && typeof option === \"object\") {\n    myChart.setOption(option);\n  }\n}\n\nconst value = _shared_constants_js__WEBPACK_IMPORTED_MODULE_0__.INIT_VALUE;\n\ninputField1.addEventListener(\"change\", function () {\n  value[0] = inputField1.value;\n\n  updateChart(value);\n});\n\ninputField2.addEventListener(\"change\", function () {\n  value[1] = inputField2.value;\n\n  updateChart(value);\n});\n\ninputField3.addEventListener(\"change\", function () {\n  value[2] = inputField3.value;\n\n  updateChart(value);\n});\n\ninputField4.addEventListener(\"change\", function () {\n  value[3] = inputField4.value;\n\n  updateChart(value);\n});\n\ninputField5.addEventListener(\"change\", function () {\n  value[4] = inputField5.value;\n\n  updateChart(value);\n});\n\n\n//# sourceURL=webpack://poc-polygon/./src/index.js?");

/***/ }),

/***/ "./src/option.js":
/*!***********************!*\
  !*** ./src/option.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createOption)\n/* harmony export */ });\n/* harmony import */ var _shared_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/constants.js */ \"./src/shared/constants.js\");\n/* harmony import */ var _actions_series_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions/series.js */ \"./src/actions/series.js\");\n/* harmony import */ var _actions_values_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions/values.js */ \"./src/actions/values.js\");\n\n\n\n\n\nfunction createOption(data, newValue = _shared_constants_js__WEBPACK_IMPORTED_MODULE_0__.INIT_VALUE) {\n  const divisor = data.qty + 1;\n\n  const valueArray_1 = (0,_actions_values_js__WEBPACK_IMPORTED_MODULE_2__.parseValueArray)(data.size, divisor, 1);\n  const valueArray_2 = (0,_actions_values_js__WEBPACK_IMPORTED_MODULE_2__.parseValueArray)(data.size, divisor, 2);\n  const valueArray_3 = (0,_actions_values_js__WEBPACK_IMPORTED_MODULE_2__.parseValueArray)(data.size, divisor, 3);\n  const valueArray_4 = (0,_actions_values_js__WEBPACK_IMPORTED_MODULE_2__.parseValueArray)(data.size, divisor, 4);\n  const valueArray_5 = (0,_actions_values_js__WEBPACK_IMPORTED_MODULE_2__.parseValueArray)(data.size, divisor, 5);\n\n  return {\n    title: {\n      text: \"Basic Radar Chart\",\n    },\n    legend: {},\n    radar: [\n      {\n        ..._shared_constants_js__WEBPACK_IMPORTED_MODULE_0__.RADAR_DEFAULT_STYLING,\n        indicator: [\n          { name: \"Technology\" },\n          { name: \"Influence\" },\n          { name: \"Process\" },\n          { name: \"People\" },\n          { name: \"System\" },\n        ],\n        radius: data.size,\n        splitNumber: divisor,\n      },\n    ],\n    series: [\n      (0,_actions_values_js__WEBPACK_IMPORTED_MODULE_2__.createValueLine)(newValue),\n      (0,_actions_series_js__WEBPACK_IMPORTED_MODULE_1__.createSeriesLayer)(valueArray_1, 1),\n      (0,_actions_series_js__WEBPACK_IMPORTED_MODULE_1__.createSeriesLayer)(valueArray_2, 2),\n      (0,_actions_series_js__WEBPACK_IMPORTED_MODULE_1__.createSeriesLayer)(valueArray_3, 3),\n      (0,_actions_series_js__WEBPACK_IMPORTED_MODULE_1__.createSeriesLayer)(valueArray_4, 4),\n      (0,_actions_series_js__WEBPACK_IMPORTED_MODULE_1__.createSeriesLayer)(valueArray_5, 5),\n    ],\n  };\n}\n\n\n//# sourceURL=webpack://poc-polygon/./src/option.js?");

/***/ }),

/***/ "./src/shared/constants.js":
/*!*********************************!*\
  !*** ./src/shared/constants.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   INIT_VALUE: () => (/* binding */ INIT_VALUE),\n/* harmony export */   LABELS: () => (/* binding */ LABELS),\n/* harmony export */   RADAR_DEFAULT_STYLING: () => (/* binding */ RADAR_DEFAULT_STYLING),\n/* harmony export */   SERIES_DEFAULT_DATA: () => (/* binding */ SERIES_DEFAULT_DATA)\n/* harmony export */ });\nconst INIT_VALUE = [0, 0, 0, 0, 0];\n\nconst SERIES_DEFAULT_DATA = {\n  symbol: \"circle\",\n  symbolSize: 4,\n  lineStyle: {\n    type: \"dashed\",\n    color: \"black\",\n    width: 1,\n    opacity: 0.5,\n  },\n};\n\nconst RADAR_DEFAULT_STYLING = {\n  center: [\"50%\", \"50%\"],\n  axisName: {\n    color: \"black\",\n    borderRadius: 3,\n    padding: [3, 5],\n    fontSize: 20,\n  },\n  splitArea: {\n    show: false,\n  },\n  splitLine: {\n    lineStyle: {\n      color: [\n        \"transparent\",\n        \"transparent\",\n        \"transparent\",\n        \"transparent\",\n        \"transparent\",\n        \"transparent\",\n        \"black\",\n      ],\n      // type: 4, // Dashed width 4px dotted\n      // // color: \"gray\",\n      // width: 1,\n      // opacity: 0.5,\n    },\n  },\n  axisLine: {\n    lineStyle: {\n      color: \"black\",\n    },\n  },\n};\n\nconst LABELS = [\n  [\"Creates\", \"Community\", \"Defines\", \"Manages\", \"Leads\"],\n  [\"Masters\", \"Company\", \"Adjusts\", \"Coordinates\", \"Evolves\"],\n  [\n    \"Evangelizes\",\n    `Multiple\nTeams`,\n    \"Challenges\",\n    \"Mentors\",\n    \"Owns\",\n  ],\n  [\"Specializes\", \"Team\", \"Enforces\", \"Supports\", \"Designs\"],\n  [\"Adopts\", \"Subsystem\", \"Follows/\", \"Learns\", \"Enhances\"],\n];\n\n\n//# sourceURL=webpack://poc-polygon/./src/shared/constants.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;