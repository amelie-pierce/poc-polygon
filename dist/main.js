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

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.js */ \"./src/style.js\");\n/* harmony import */ var _createCustomDataset_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCustomDataset.js */ \"./src/createCustomDataset.js\");\n\n\n\nconst DEFAULT_ATTRIBUTES = {\n  labels: [\"Technology\", \"System\", \"People\", \"Process\", \"Influence\"],\n  datasets: {\n    label: \"Growth Up Chart\",\n    data: [1, 2, 3, 4, 5],\n  },\n  options: {},\n};\n\nconst userRadarDataset = (0,_createCustomDataset_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  DEFAULT_ATTRIBUTES.labels,\n  DEFAULT_ATTRIBUTES.datasets.data,\n  DEFAULT_ATTRIBUTES.datasets.label,\n  (0,_style_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userRadarDataset);\n\n\n//# sourceURL=webpack://poc-polygon/./src/config.js?");

/***/ }),

/***/ "./src/createCustomDataset.js":
/*!************************************!*\
  !*** ./src/createCustomDataset.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createCustomDataset)\n/* harmony export */ });\nconst DEFAULT_CONFIGS = {\n  styles: {\n    fill: true,\n    backgroundColor: \"rgba(255, 99, 132, 0.2)\",\n    borderColor: \"rgb(255, 99, 132)\",\n    pointBackgroundColor: \"rgb(255, 99, 132)\",\n    pointBorderColor: \"#fff\",\n    pointHoverBackgroundColor: \"#fff\",\n    pointHoverBorderColor: \"rgb(255, 99, 132)\",\n  },\n};\n\nfunction createCustomDataset(\n  labels,\n  data,\n  dataSetLabel,\n  styleOptions = {}\n) {\n  const mergedStyleOptions = { ...DEFAULT_CONFIGS.styles, ...styleOptions };\n\n  return {\n    labels: labels,\n    datasets: [\n      {\n        label: dataSetLabel,\n        data: data,\n        ...mergedStyleOptions,\n      },\n    ],\n  };\n}\n\n\n//# sourceURL=webpack://poc-polygon/./src/createCustomDataset.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n\n\nconst CHART_OPTIONS = {\n  elements: {\n    line: {\n      borderWidth: 2,\n    },\n  },\n};\n\nconst createChartConfig = (\n  type = \"radar\",\n  data = _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  options = CHART_OPTIONS\n) => {\n  return {\n    type: type,\n    data: data,\n    options: options,\n  };\n};\n\nconst ctx = document.getElementById(\"chart\");\nnew Chart(ctx, createChartConfig(\"radar\", _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], CHART_OPTIONS));\n\n\n//# sourceURL=webpack://poc-polygon/./src/index.js?");

/***/ }),

/***/ "./src/style.js":
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst DEFAULT_STYLES = {\n  backgroundColor: \"rgba(75, 192, 192, 0.2)\",\n  borderColor: \"rgb(75, 192, 192)\",\n  borderWidth: 2,\n};\n\nconst createCustomDatasetStyle = (customStyle = DEFAULT_STYLES) => {\n  return {\n    ...customStyle,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCustomDatasetStyle);\n\n\n//# sourceURL=webpack://poc-polygon/./src/style.js?");

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