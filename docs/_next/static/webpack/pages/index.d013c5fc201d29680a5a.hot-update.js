webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/hirokidaichi/.ghq/github.com/hirokidaichi/hirokidaichi.github.io/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar Header = function Header() {\n  return __jsx(\"header\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: \"intro\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"profile\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"name\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, \"\\u5E83\\u6728 \\u5927\\u5730 ( Daichi Hiroki )\"), __jsx(\"div\", {\n    className: \"job\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, \"Software Engineer / Engineering Manager / Organization Architect\")));\n};\n\n_c = Header;\n\nvar codecopy = __webpack_require__(/*! codecopy */ \"./node_modules/codecopy/src/index.js\");\n\nvar Content = function Content(_ref) {\n  _s();\n\n  var markdown = _ref.markdown;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    codecopy(\"pre\");\n  });\n  return __jsx(\"section\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    source: markdown,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Content, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c2 = Content;\n\nvar Posts = function Posts(_ref2) {\n  var mediaName = _ref2.mediaName,\n      data = _ref2.data;\n  var list = data.map(function (e) {\n    return __jsx(\"li\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 13\n      }\n    }, __jsx(\"a\", {\n      href: e.url,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }\n    }, e.title));\n  });\n  return __jsx(\"section\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, \" Qiita\\u306E\\u8A18\\u4E8B\\u4E00\\u89A7 \"), __jsx(\"ul\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, list));\n};\n\n_c3 = Posts;\n\nvar IndexPage = function IndexPage(_ref3) {\n  var content = _ref3.content,\n      qiitaList = _ref3.qiitaList,\n      noteList = _ref3.noteList;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }, __jsx(\"link\", {\n    href: \"https://fonts.googleapis.com/css?family=M+PLUS+1p\",\n    rel: \"stylesheet\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }\n  }), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://cdn.jsdelivr.net/npm/codecopy/umd/codecopy.min.css\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  })), __jsx(Header, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }, __jsx(\"main\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  }, __jsx(Content, {\n    markdown: content,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 11\n    }\n  }), __jsx(QiitaPosts, {\n    data: qiitaList,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }), __jsx(QiitaPosts, {\n    data: qiitaList,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }))));\n};\n\n_c4 = IndexPage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c2, \"Content\");\n$RefreshReg$(_c3, \"Posts\");\n$RefreshReg$(_c4, \"IndexPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSGVhZGVyIiwiY29kZWNvcHkiLCJyZXF1aXJlIiwiQ29udGVudCIsIm1hcmtkb3duIiwidXNlRWZmZWN0IiwiUG9zdHMiLCJtZWRpYU5hbWUiLCJkYXRhIiwibGlzdCIsIm1hcCIsImUiLCJ1cmwiLCJ0aXRsZSIsIkluZGV4UGFnZSIsImNvbnRlbnQiLCJxaWl0YUxpc3QiLCJub3RlTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBR0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxTQUNiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtREFGRixFQUdFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3RUFIRixDQURGLENBRGE7QUFBQSxDQUFmOztLQUFNQSxNOztBQVdOLElBQU1DLFFBQVEsR0FBR0MsbUJBQU8sQ0FBQyxzREFBRCxDQUF4Qjs7QUFFQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUF1QjtBQUFBOztBQUFBLE1BQW5CQyxRQUFtQixRQUFuQkEsUUFBbUI7QUFDckNDLHlEQUFTLENBQUMsWUFBTTtBQUNkSixZQUFRLENBQUMsS0FBRCxDQUFSO0FBQ0QsR0FGUSxDQUFUO0FBR0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUFVLFVBQU0sRUFBRUcsUUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREY7QUFLRCxDQVREOztHQUFNRCxPOztNQUFBQSxPOztBQVdOLElBQU1HLEtBQUssR0FBRyxTQUFSQSxLQUFRLFFBQTRCO0FBQUEsTUFBekJDLFNBQXlCLFNBQXpCQSxTQUF5QjtBQUFBLE1BQWZDLElBQWUsU0FBZkEsSUFBZTtBQUN4QyxNQUFNQyxJQUFJLEdBQUdELElBQUksQ0FBQ0UsR0FBTCxDQUFTLFVBQUNDLENBQUQsRUFBTztBQUMzQixXQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSTtBQUFHLFVBQUksRUFBRUEsQ0FBQyxDQUFDQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBaUJELENBQUMsQ0FBQ0UsS0FBbkIsQ0FBSixDQUFSO0FBQ0QsR0FGWSxDQUFiO0FBR0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0osSUFBTCxDQUZGLENBREY7QUFNRCxDQVZEOztNQUFNSCxLOztBQVlOLElBQU1RLFNBQVMsR0FBRyxTQUFaQSxTQUFZLFFBQXdDO0FBQUEsTUFBckNDLE9BQXFDLFNBQXJDQSxPQUFxQztBQUFBLE1BQTdCQyxTQUE2QixTQUE3QkEsU0FBNkI7QUFBQSxNQUFuQkMsUUFBbUIsU0FBbkJBLFFBQW1CO0FBRXhELFNBQ0UsbUVBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxRQUFJLEVBQUMsbURBQVg7QUFBK0QsT0FBRyxFQUFDLFlBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQU0sT0FBRyxFQUFDLFlBQVY7QUFBdUIsUUFBSSxFQUFDLDREQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFLE1BQUMsTUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsT0FBRDtBQUFTLFlBQVEsRUFBRUYsT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUEsTUFBQyxVQUFEO0FBQVksUUFBSSxFQUFFQyxTQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkEsRUFHQSxNQUFDLFVBQUQ7QUFBWSxRQUFJLEVBQUVBLFNBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIQSxDQURGLENBTkYsQ0FERjtBQWlCRCxDQW5CRDs7TUFBTUYsUzs7QUFrRFNBLHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgTWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cblxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgPGhlYWRlcj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImludHJvXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGVcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFtZVwiPuW6g+acqCDlpKflnLAgKCBEYWljaGkgSGlyb2tpICk8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiam9iXCI+U29mdHdhcmUgRW5naW5lZXIgLyBFbmdpbmVlcmluZyBNYW5hZ2VyIC8gT3JnYW5pemF0aW9uIEFyY2hpdGVjdDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2hlYWRlcj5cbilcblxuXG5jb25zdCBjb2RlY29weSA9IHJlcXVpcmUoXCJjb2RlY29weVwiKTtcblxuY29uc3QgQ29udGVudCA9ICh7ICBtYXJrZG93biB9OmFueSkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvZGVjb3B5KFwicHJlXCIpXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uPlxuICAgICAgPE1hcmtkb3duIHNvdXJjZT17bWFya2Rvd259IC8+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmNvbnN0IFBvc3RzID0gKHsgbWVkaWFOYW1lLGRhdGEgfTphbnkpID0+IHtcbiAgY29uc3QgbGlzdCA9IGRhdGEubWFwKChlKSA9PiB7IFxuICAgIHJldHVybiAoPGxpPjxhIGhyZWY9e2UudXJsfT57ZS50aXRsZX08L2E+PC9saT4pXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgxPiBRaWl0YeOBruiomOS6i+S4gOimpyA8L2gxPlxuICAgICAgPHVsPntsaXN0fTwvdWw+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmNvbnN0IEluZGV4UGFnZSA9ICh7IGNvbnRlbnQscWlpdGFMaXN0LG5vdGVMaXN0fSA6YW55KSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TStQTFVTKzFwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9jb2RlY29weS91bWQvY29kZWNvcHkubWluLmNzc1wiPjwvbGluaz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIDxDb250ZW50IG1hcmtkb3duPXtjb250ZW50fSAvPlxuICAgICAgICA8UWlpdGFQb3N0cyBkYXRhPXtxaWl0YUxpc3R9IC8+XG4gICAgICAgIDxRaWl0YVBvc3RzIGRhdGE9e3FpaXRhTGlzdH0gLz5cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG5cbn1cbmltcG9ydCBmcyBmcm9tICdmcyc7XG5cbmNvbnN0IGZzcCA9IGZzLnByb21pc2VzO1xuXG5jb25zdCBnZXRRaWl0YVBvc3RzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgKGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9xaWl0YS5jb20vYXBpL3YyL3VzZXJzL2hpcm9raWRhaWNoaS9pdGVtcz9wZXJfcGFnZT0xMDBcIikpLmpzb24oKTtcbiAgcmV0dXJuIGRhdGEubWFwKChlKSA9PiAoeyB0aXRsZTogZS50aXRsZSwgdXJsOiBlLnVybCB9KSk7XG59O1xuXG5jb25zdCBnZXROb3RlUG9zdHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGpzb24gPSBhd2FpdCAoYXdhaXQgZmV0Y2goXCJodHRwczovL25vdGUuY29tL2FwaS92Mi9jcmVhdG9ycy9oaXJva2lkYWljaGkvY29udGVudHM/a2luZD1ub3RlJnBhZ2U9MVwiKSkuanNvbigpO1xuICBjb25zdCBjb250ZW50cyA9IGpzb24uZGF0YS5jb250ZW50cztcblxuICByZXR1cm4gY29udGVudHMubWFwKChlKSA9PiAoXG4gICAgeyB0aXRsZTogZS5uYW1lLCB1cmw6IGBodHRwczovL25vdGUuY29tL2hpcm9raWRhaWNoaS8ke2Uua2V5fWAgfVxuICApKTtcbn07XG5cbmNvbnN0IGdldE1hcmtkb3duID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4gU3RyaW5nKGF3YWl0IGZzcC5yZWFkRmlsZShcIi4vZGF0YS9faW5kZXgubWRcIikpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMoKSA9PiB7IFxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgZ2V0TWFya2Rvd24oKTtcbiAgY29uc3QgcWlpdGFMaXN0ID0gYXdhaXQgZ2V0UWlpdGFQb3N0cygpO1xuICBjb25zdCBub3RlTGlzdCA9IGF3YWl0IGdldE5vdGVQb3N0cygpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGNvbnRlbnQscWlpdGFMaXN0ICxub3RlTGlzdH1cbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})