webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/hirokidaichi/.ghq/github.com/hirokidaichi/hirokidaichi.github.io/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar Header = function Header() {\n  return __jsx(\"header\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: \"intro\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"profile\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"name\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, \"\\u5E83\\u6728 \\u5927\\u5730 ( Daichi Hiroki )\"), __jsx(\"div\", {\n    className: \"job\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, \"Software Engineer / Engineering Manager / Organization Architect\")));\n};\n\n_c = Header;\n\nvar codecopy = __webpack_require__(/*! codecopy */ \"./node_modules/codecopy/src/index.js\");\n\nvar Content = function Content(_ref) {\n  _s();\n\n  var markdown = _ref.markdown;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    codecopy(\"pre\");\n  });\n  return __jsx(\"section\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    source: markdown,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Content, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c2 = Content;\n\nvar QiitaPosts = function QiitaPosts(_ref2) {\n  var data = _ref2.data;\n  var list = data.map(function (e) {\n    return __jsx(\"li\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 13\n      }\n    }, __jsx(\"a\", {\n      href: e.url,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }\n    }, e.title));\n  });\n  return __jsx(\"section\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, \" Qiita\\u306E\\u8A18\\u4E8B\\u4E00\\u89A7 \"), __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, list));\n};\n\n_c3 = QiitaPosts;\n\nvar IndexPage = function IndexPage(_ref3) {\n  var content = _ref3.content,\n      qiitaList = _ref3.qiitaList;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }, __jsx(\"link\", {\n    href: \"https://fonts.googleapis.com/css?family=M+PLUS+1p\",\n    rel: \"stylesheet\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://cdn.jsdelivr.net/npm/codecopy/umd/codecopy.min.css\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  })), __jsx(Header, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }, __jsx(\"main\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }, __jsx(Content, {\n    markdown: content,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }), __jsx(QiitaPosts, {\n    data: qiitaList,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }))));\n};\n\n_c4 = IndexPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c2, \"Content\");\n$RefreshReg$(_c3, \"QiitaPosts\");\n$RefreshReg$(_c4, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSGVhZGVyIiwiY29kZWNvcHkiLCJyZXF1aXJlIiwiQ29udGVudCIsIm1hcmtkb3duIiwidXNlRWZmZWN0IiwiUWlpdGFQb3N0cyIsImRhdGEiLCJsaXN0IiwibWFwIiwiZSIsInVybCIsInRpdGxlIiwiSW5kZXhQYWdlIiwiY29udGVudCIsInFpaXRhTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBR0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxTQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtREFGRixFQUdFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3RUFIRixDQURGLENBRGE7QUFBQSxDQUFmOztLQUFNQSxNOztBQVdOLElBQU1DLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQyxzREFBRCxDQUF4Qjs7QUFFQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUF1QjtBQUFBOztBQUFBLE1BQW5CQyxRQUFtQixRQUFuQkEsUUFBbUI7QUFDckNDLHlEQUFTLENBQUMsWUFBTTtBQUNkSixZQUFRLENBQUMsS0FBRCxDQUFSO0FBQ0QsR0FGUSxDQUFUO0FBR0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUFVLFVBQU0sRUFBRUcsUUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREY7QUFLRCxDQVREOztHQUFNRCxPOztNQUFBQSxPOztBQVdOLElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhLFFBQWtCO0FBQUEsTUFBZkMsSUFBZSxTQUFmQSxJQUFlO0FBQ25DLE1BQU1DLElBQUksR0FBR0QsSUFBSSxDQUFDRSxHQUFMLENBQVMsVUFBQ0MsQ0FBRCxFQUFPO0FBQzNCLFdBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJO0FBQUcsVUFBSSxFQUFFQSxDQUFDLENBQUNDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFpQkQsQ0FBQyxDQUFDRSxLQUFuQixDQUFKLENBQVI7QUFDRCxHQUZZLENBQWI7QUFHQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLSixJQUFMLENBRkYsQ0FERjtBQU1ELENBVkQ7O01BQU1GLFU7O0FBWU4sSUFBTU8sU0FBUyxHQUFHLFNBQVpBLFNBQVksUUFBK0I7QUFBQSxNQUE1QkMsT0FBNEIsU0FBNUJBLE9BQTRCO0FBQUEsTUFBcEJDLFNBQW9CLFNBQXBCQSxTQUFvQjtBQUUvQyxTQUNFLG1FQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sUUFBSSxFQUFDLG1EQUFYO0FBQStELE9BQUcsRUFBQyxZQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFNLE9BQUcsRUFBQyxZQUFWO0FBQXVCLFFBQUksRUFBQyw0REFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFLRSxNQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLE9BQUQ7QUFBUyxZQUFRLEVBQUVELE9BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxFQUVBLE1BQUMsVUFBRDtBQUFZLFFBQUksRUFBRUMsU0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZBLENBREYsQ0FORixDQURGO0FBZ0JELENBbEJEOztNQUFNRixTOztBQWlEU0Esd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxuICA8aGVhZGVyPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50cm9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZVwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+5bqD5pyoIOWkp+WcsCAoIERhaWNoaSBIaXJva2kgKTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJqb2JcIj5Tb2Z0d2FyZSBFbmdpbmVlciAvIEVuZ2luZWVyaW5nIE1hbmFnZXIgLyBPcmdhbml6YXRpb24gQXJjaGl0ZWN0PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvaGVhZGVyPlxuKVxuXG5cbmNvbnN0IGNvZGVjb3B5ID0gcmVxdWlyZShcImNvZGVjb3B5XCIpO1xuXG5jb25zdCBDb250ZW50ID0gKHsgIG1hcmtkb3duIH06YW55KSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29kZWNvcHkoXCJwcmVcIilcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICA8TWFya2Rvd24gc291cmNlPXttYXJrZG93bn0gLz5cbiAgICA8L3NlY3Rpb24+XG4gIClcbn1cblxuY29uc3QgUWlpdGFQb3N0cyA9ICh7IGRhdGEgfTphbnkpID0+IHtcbiAgY29uc3QgbGlzdCA9IGRhdGEubWFwKChlKSA9PiB7IFxuICAgIHJldHVybiAoPGxpPjxhIGhyZWY9e2UudXJsfT57ZS50aXRsZX08L2E+PC9saT4pXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgxPiBRaWl0YeOBruiomOS6i+S4gOimpyA8L2gxPlxuICAgICAgPHVsPntsaXN0fTwvdWw+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmNvbnN0IEluZGV4UGFnZSA9ICh7IGNvbnRlbnQscWlpdGFMaXN0fSA6YW55KSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TStQTFVTKzFwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb2RlY29weS91bWQvY29kZWNvcHkubWluLmNzc1wiPjwvbGluaz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxtYWluPlxuICAgICAgICA8Q29udGVudCBtYXJrZG93bj17Y29udGVudH0gLz5cbiAgICAgICAgPFFpaXRhUG9zdHMgZGF0YT17cWlpdGFMaXN0fSAvPlxuICAgICAgICA8L21haW4+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcblxufVxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcblxuY29uc3QgZnNwID0gZnMucHJvbWlzZXM7XG5cbmNvbnN0IGdldFFpaXRhUG9zdHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCAoYXdhaXQgZmV0Y2goXCJodHRwczovL3FpaXRhLmNvbS9hcGkvdjIvdXNlcnMvaGlyb2tpZGFpY2hpL2l0ZW1zP3Blcl9wYWdlPTEwMFwiKSkuanNvbigpO1xuICByZXR1cm4gZGF0YS5tYXAoKGUpID0+ICh7IHRpdGxlOiBlLnRpdGxlLCB1cmw6IGUudXJsIH0pKTtcbn07XG5cbmNvbnN0IGdldE5vdGVQb3N0cyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QganNvbiA9IGF3YWl0IChhd2FpdCBmZXRjaChcImh0dHBzOi8vbm90ZS5jb20vYXBpL3YyL2NyZWF0b3JzL2hpcm9raWRhaWNoaS9jb250ZW50cz9raW5kPW5vdGUmcGFnZT0xXCIpKS5qc29uKCk7XG4gIGNvbnN0IGNvbnRlbnRzID0ganNvbi5kYXRhLmNvbnRlbnRzO1xuXG4gIHJldHVybiBjb250ZW50cy5tYXAoKGUpID0+IChcbiAgICB7IHRpdGxlOiBlLm5hbWUsIHVybDogYGh0dHBzOi8vbm90ZS5jb20vaGlyb2tpZGFpY2hpLyR7ZS5rZXl9YCB9XG4gICkpO1xufTtcblxuY29uc3QgZ2V0TWFya2Rvd24gPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiBTdHJpbmcoYXdhaXQgZnNwLnJlYWRGaWxlKFwiLi9kYXRhL19pbmRleC5tZFwiKSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYygpID0+IHsgXG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBnZXRNYXJrZG93bigpO1xuICBjb25zdCBxaWl0YUxpc3QgPSBhd2FpdCBnZXRRaWl0YVBvc3RzKCk7XG4gIGNvbnN0IG5vdGVMaXN0ID0gYXdhaXQgZ2V0Tm90ZVBvc3RzKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgY29udGVudCxxaWl0YUxpc3QgLG5vdGVMaXN0fVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2VcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})