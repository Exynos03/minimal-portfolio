"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Nav.tsx":
/*!****************************!*\
  !*** ./components/Nav.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Nav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _components_ui_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/avatar */ \"(app-pages-browser)/./components/ui/avatar.tsx\");\n/* harmony import */ var _barrel_optimize_names_Github_Linkedin_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Github,Linkedin!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/github.js\");\n/* harmony import */ var _barrel_optimize_names_Github_Linkedin_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Github,Linkedin!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/linkedin.js\");\n/* harmony import */ var _ui_toggle_mode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/toggle-mode */ \"(app-pages-browser)/./components/ui/toggle-mode.tsx\");\n/* harmony import */ var _hooks_useActiveSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/useActiveSection */ \"(app-pages-browser)/./hooks/useActiveSection.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Nav() {\n    _s();\n    const activeSection = (0,_hooks_useActiveSection__WEBPACK_IMPORTED_MODULE_4__[\"default\"])([\n        \"about\",\n        \"experience\",\n        \"projects\",\n        \"contact\"\n    ]);\n    const navItems = [\n        {\n            name: \"About\",\n            href: \"#about\"\n        },\n        {\n            name: \"Experience\",\n            href: \"#experience\"\n        },\n        {\n            name: \"Projects\",\n            href: \"#projects\"\n        },\n        {\n            name: \"Contact\",\n            href: \"#contact\"\n        }\n    ];\n    const getNavItemClasses = (href)=>{\n        const isActive = activeSection === href.substring(1);\n        return {\n            linkClass: isActive ? \"active\" : \"\",\n            indicatorClass: \"nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all \".concat(isActive ? \"active w-16 bg-foreground h-2\" : \"group-hover:w-16 group-hover:bg-foreground group-hover:h-px\"),\n            textClass: \"nav-text text-xs font-bold uppercase tracking-widest \".concat(isActive ? \"text-foreground\" : \"text-slate-500 group-hover:text-foreground\")\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 flex flex-col lg:gap-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-4 lg:pr-24 mt-6 lg:mt-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full flex lg:items-center lg:justify-start\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_2__.Avatar, {\n                            className: \"w-24 lg:w-36 h-auto border-2 border-primary bg-secondary\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_avatar__WEBPACK_IMPORTED_MODULE_2__.AvatarFallback, {\n                                className: \"w-24 h-24 lg:w-36 lg:h-36 rounded-full border-1 border-primary\",\n                                children: \"AM\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-[42px] font-bold lg:text-start\",\n                        children: \"Hi, i'm Alexander \\uD83D\\uDC4B\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl lg:text-start\",\n                        children: \"Product designer, developer, founder.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-lg lg:text-start text-muted-foreground\",\n                        children: \"I help innovative startups in AI, Web3, and Finance craft exceptional user experiences, translating complex technologies into intuitive interfaces that resonate with humans.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"lg:flex hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"flex flex-col w-max text-start gap-6 uppercase text-xs font-medium\",\n                    children: navItems.map((item)=>{\n                        const { linkClass, indicatorClass, textClass } = getNavItemClasses(item.href);\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"group\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: item.href,\n                                className: \"py-3 \".concat(linkClass),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: indicatorClass\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: textClass,\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 17\n                            }, this)\n                        }, item.name, false, {\n                            fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex flex-row gap-6 mt-6 lg:mt-0\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        variant: \"outline\",\n                        size: \"icon\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://github.com/0xAlexander\",\n                            target: \"_blank\",\n                            rel: \"noopener noreferrer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Github_Linkedin_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                className: \"h-[1.2rem] w-[1.2rem]\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        variant: \"outline\",\n                        size: \"icon\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://linkedin.com/in/0xAlexander\",\n                            target: \"_blank\",\n                            rel: \"noopener noreferrer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Github_Linkedin_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                className: \"h-[1.2rem] w-[1.2rem]\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_toggle_mode__WEBPACK_IMPORTED_MODULE_3__.ModeToggle, {}, void 0, false, {\n                        fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\NextJs Projects\\\\BritneyChinagV5\\\\my-website-main\\\\components\\\\Nav.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(Nav, \"uNM2bWi/SIulEYZS6V7Gm84O3ZY=\", false, function() {\n    return [\n        _hooks_useActiveSection__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = Nav;\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTmF2LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ2dEO0FBQzZCO0FBQzdCO0FBQ0Y7QUFDVTtBQU96QyxTQUFTTzs7SUFDdEIsTUFBTUMsZ0JBQWdCRixtRUFBZ0JBLENBQUM7UUFDckM7UUFDQTtRQUNBO1FBQ0E7S0FDRDtJQUVELE1BQU1HLFdBQXNCO1FBQzFCO1lBQUVDLE1BQU07WUFBU0MsTUFBTTtRQUFTO1FBQ2hDO1lBQUVELE1BQU07WUFBY0MsTUFBTTtRQUFjO1FBQzFDO1lBQUVELE1BQU07WUFBWUMsTUFBTTtRQUFZO1FBQ3RDO1lBQUVELE1BQU07WUFBV0MsTUFBTTtRQUFXO0tBQ3JDO0lBRUQsTUFBTUMsb0JBQW9CLENBQUNEO1FBQ3pCLE1BQU1FLFdBQVdMLGtCQUFrQkcsS0FBS0csU0FBUyxDQUFDO1FBQ2xELE9BQU87WUFDTEMsV0FBV0YsV0FBVyxXQUFXO1lBQ2pDRyxnQkFBZ0IsMkRBSWYsT0FIQ0gsV0FDSSxrQ0FDQTtZQUVOSSxXQUFXLHdEQUlWLE9BSENKLFdBQ0ksb0JBQ0E7UUFFUjtJQUNGO0lBRUEscUJBQ0UsOERBQUNLO1FBQU9DLFdBQVU7OzBCQUNoQiw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBSUQsV0FBVTtrQ0FDYiw0RUFBQ2xCLHlEQUFNQTs0QkFBQ2tCLFdBQVU7c0NBRWhCLDRFQUFDakIsaUVBQWNBO2dDQUFDaUIsV0FBVTswQ0FBaUU7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSy9GLDhEQUFDRTt3QkFBR0YsV0FBVTtrQ0FBc0M7Ozs7OztrQ0FHcEQsOERBQUNHO3dCQUFHSCxXQUFVO2tDQUF3Qjs7Ozs7O2tDQUd0Qyw4REFBQ0k7d0JBQUVKLFdBQVU7a0NBQThDOzs7Ozs7Ozs7Ozs7MEJBTTdELDhEQUFDSztnQkFBSUwsV0FBVTswQkFDYiw0RUFBQ007b0JBQUdOLFdBQVU7OEJBQ1hWLFNBQVNpQixHQUFHLENBQUMsQ0FBQ0M7d0JBQ2IsTUFBTSxFQUFFWixTQUFTLEVBQUVDLGNBQWMsRUFBRUMsU0FBUyxFQUFFLEdBQUdMLGtCQUMvQ2UsS0FBS2hCLElBQUk7d0JBRVgscUJBQ0UsOERBQUNpQjs0QkFBbUJULFdBQVU7c0NBQzVCLDRFQUFDVTtnQ0FBRWxCLE1BQU1nQixLQUFLaEIsSUFBSTtnQ0FBRVEsV0FBVyxRQUFrQixPQUFWSjs7a0RBQ3JDLDhEQUFDZTt3Q0FBS1gsV0FBV0g7Ozs7OztrREFDakIsOERBQUNjO3dDQUFLWCxXQUFXRjtrREFBWVUsS0FBS2pCLElBQUk7Ozs7Ozs7Ozs7OzsyQkFIakNpQixLQUFLakIsSUFBSTs7Ozs7b0JBT3RCOzs7Ozs7Ozs7OzswQkFHSiw4REFBQ2U7Z0JBQUdOLFdBQVU7O2tDQUNaLDhEQUFDbkIseURBQU1BO3dCQUFDK0IsU0FBUTt3QkFBVUMsTUFBSztrQ0FDN0IsNEVBQUNIOzRCQUNDbEIsTUFBSzs0QkFDTHNCLFFBQU87NEJBQ1BDLEtBQUk7c0NBRUosNEVBQUMvQiwyRkFBTUE7Z0NBQUNnQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUd0Qiw4REFBQ25CLHlEQUFNQTt3QkFBQytCLFNBQVE7d0JBQVVDLE1BQUs7a0NBQzdCLDRFQUFDSDs0QkFDQ2xCLE1BQUs7NEJBQ0xzQixRQUFPOzRCQUNQQyxLQUFJO3NDQUVKLDRFQUFDOUIsMkZBQVFBO2dDQUFDZSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUd4Qiw4REFBQ2QsdURBQVVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUluQjtHQS9Gd0JFOztRQUNBRCwrREFBZ0JBOzs7S0FEaEJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2LnRzeD9lNjMyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBBdmF0YXIsIEF2YXRhckZhbGxiYWNrLCBBdmF0YXJJbWFnZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYXZhdGFyXCI7XHJcbmltcG9ydCB7IEdpdGh1YiwgTGlua2VkaW4gfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XHJcbmltcG9ydCB7IE1vZGVUb2dnbGUgfSBmcm9tIFwiLi91aS90b2dnbGUtbW9kZVwiO1xyXG5pbXBvcnQgdXNlQWN0aXZlU2VjdGlvbiBmcm9tIFwiQC9ob29rcy91c2VBY3RpdmVTZWN0aW9uXCI7XHJcblxyXG50eXBlIE5hdkl0ZW0gPSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGhyZWY6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdigpIHtcclxuICBjb25zdCBhY3RpdmVTZWN0aW9uID0gdXNlQWN0aXZlU2VjdGlvbihbXHJcbiAgICBcImFib3V0XCIsXHJcbiAgICBcImV4cGVyaWVuY2VcIixcclxuICAgIFwicHJvamVjdHNcIixcclxuICAgIFwiY29udGFjdFwiLFxyXG4gIF0pO1xyXG5cclxuICBjb25zdCBuYXZJdGVtczogTmF2SXRlbVtdID0gW1xyXG4gICAgeyBuYW1lOiBcIkFib3V0XCIsIGhyZWY6IFwiI2Fib3V0XCIgfSxcclxuICAgIHsgbmFtZTogXCJFeHBlcmllbmNlXCIsIGhyZWY6IFwiI2V4cGVyaWVuY2VcIiB9LFxyXG4gICAgeyBuYW1lOiBcIlByb2plY3RzXCIsIGhyZWY6IFwiI3Byb2plY3RzXCIgfSxcclxuICAgIHsgbmFtZTogXCJDb250YWN0XCIsIGhyZWY6IFwiI2NvbnRhY3RcIiB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGdldE5hdkl0ZW1DbGFzc2VzID0gKGhyZWY6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgaXNBY3RpdmUgPSBhY3RpdmVTZWN0aW9uID09PSBocmVmLnN1YnN0cmluZygxKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxpbmtDbGFzczogaXNBY3RpdmUgPyBcImFjdGl2ZVwiIDogXCJcIixcclxuICAgICAgaW5kaWNhdG9yQ2xhc3M6IGBuYXYtaW5kaWNhdG9yIG1yLTQgaC1weCB3LTggYmctc2xhdGUtNjAwIHRyYW5zaXRpb24tYWxsICR7XHJcbiAgICAgICAgaXNBY3RpdmVcclxuICAgICAgICAgID8gXCJhY3RpdmUgdy0xNiBiZy1mb3JlZ3JvdW5kIGgtMlwiXHJcbiAgICAgICAgICA6IFwiZ3JvdXAtaG92ZXI6dy0xNiBncm91cC1ob3ZlcjpiZy1mb3JlZ3JvdW5kIGdyb3VwLWhvdmVyOmgtcHhcIlxyXG4gICAgICB9YCxcclxuICAgICAgdGV4dENsYXNzOiBgbmF2LXRleHQgdGV4dC14cyBmb250LWJvbGQgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVzdCAke1xyXG4gICAgICAgIGlzQWN0aXZlXHJcbiAgICAgICAgICA/IFwidGV4dC1mb3JlZ3JvdW5kXCJcclxuICAgICAgICAgIDogXCJ0ZXh0LXNsYXRlLTUwMCBncm91cC1ob3Zlcjp0ZXh0LWZvcmVncm91bmRcIlxyXG4gICAgICB9YCxcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibGc6c3RpY2t5IGxnOnRvcC0wIGxnOmZsZXggbGc6bWF4LWgtc2NyZWVuIGxnOnctMS8yIGxnOmZsZXgtY29sIGxnOmp1c3RpZnktYmV0d2VlbiBsZzpweS0yNCBmbGV4IGZsZXgtY29sIGxnOmdhcC00XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNCBsZzpwci0yNCBtdC02IGxnOm10LTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGxnOml0ZW1zLWNlbnRlciBsZzpqdXN0aWZ5LXN0YXJ0XCI+XHJcbiAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT1cInctMjQgbGc6dy0zNiBoLWF1dG8gYm9yZGVyLTIgYm9yZGVyLXByaW1hcnkgYmctc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgIHsvKiA8QXZhdGFySW1hZ2Ugc3JjPVwiLi9hdmF0YXIucG5nXCIgLz4gKi99XHJcbiAgICAgICAgICAgIDxBdmF0YXJGYWxsYmFjayBjbGFzc05hbWU9XCJ3LTI0IGgtMjQgbGc6dy0zNiBsZzpoLTM2IHJvdW5kZWQtZnVsbCBib3JkZXItMSBib3JkZXItcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgIEFNXHJcbiAgICAgICAgICAgIDwvQXZhdGFyRmFsbGJhY2s+XHJcbiAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1bNDJweF0gZm9udC1ib2xkIGxnOnRleHQtc3RhcnRcIj5cclxuICAgICAgICAgIEhpLCBpJiMzOTttIEFsZXhhbmRlciDwn5GLXHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBsZzp0ZXh0LXN0YXJ0XCI+XHJcbiAgICAgICAgICBQcm9kdWN0IGRlc2lnbmVyLCBkZXZlbG9wZXIsIGZvdW5kZXIuXHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGxnOnRleHQtc3RhcnQgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+XHJcbiAgICAgICAgICBJIGhlbHAgaW5ub3ZhdGl2ZSBzdGFydHVwcyBpbiBBSSwgV2ViMywgYW5kIEZpbmFuY2UgY3JhZnQgZXhjZXB0aW9uYWxcclxuICAgICAgICAgIHVzZXIgZXhwZXJpZW5jZXMsIHRyYW5zbGF0aW5nIGNvbXBsZXggdGVjaG5vbG9naWVzIGludG8gaW50dWl0aXZlXHJcbiAgICAgICAgICBpbnRlcmZhY2VzIHRoYXQgcmVzb25hdGUgd2l0aCBodW1hbnMuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJsZzpmbGV4IGhpZGRlblwiPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctbWF4IHRleHQtc3RhcnQgZ2FwLTYgdXBwZXJjYXNlIHRleHQteHMgZm9udC1tZWRpdW1cIj5cclxuICAgICAgICAgIHtuYXZJdGVtcy5tYXAoKGl0ZW06IE5hdkl0ZW0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeyBsaW5rQ2xhc3MsIGluZGljYXRvckNsYXNzLCB0ZXh0Q2xhc3MgfSA9IGdldE5hdkl0ZW1DbGFzc2VzKFxyXG4gICAgICAgICAgICAgIGl0ZW0uaHJlZlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0ubmFtZX0gY2xhc3NOYW1lPVwiZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW0uaHJlZn0gY2xhc3NOYW1lPXtgcHktMyAke2xpbmtDbGFzc31gfT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtpbmRpY2F0b3JDbGFzc30+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3RleHRDbGFzc30+e2l0ZW0ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBnYXAtNiBtdC02IGxnOm10LTBcIj5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJvdXRsaW5lXCIgc2l6ZT1cImljb25cIj5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vMHhBbGV4YW5kZXJcIlxyXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEdpdGh1YiBjbGFzc05hbWU9XCJoLVsxLjJyZW1dIHctWzEuMnJlbV1cIiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBzaXplPVwiaWNvblwiPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbGlua2VkaW4uY29tL2luLzB4QWxleGFuZGVyXCJcclxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rZWRpbiBjbGFzc05hbWU9XCJoLVsxLjJyZW1dIHctWzEuMnJlbV1cIiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxNb2RlVG9nZ2xlIC8+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJBdmF0YXIiLCJBdmF0YXJGYWxsYmFjayIsIkdpdGh1YiIsIkxpbmtlZGluIiwiTW9kZVRvZ2dsZSIsInVzZUFjdGl2ZVNlY3Rpb24iLCJOYXYiLCJhY3RpdmVTZWN0aW9uIiwibmF2SXRlbXMiLCJuYW1lIiwiaHJlZiIsImdldE5hdkl0ZW1DbGFzc2VzIiwiaXNBY3RpdmUiLCJzdWJzdHJpbmciLCJsaW5rQ2xhc3MiLCJpbmRpY2F0b3JDbGFzcyIsInRleHRDbGFzcyIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwiaDIiLCJwIiwibmF2IiwidWwiLCJtYXAiLCJpdGVtIiwibGkiLCJhIiwic3BhbiIsInZhcmlhbnQiLCJzaXplIiwidGFyZ2V0IiwicmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Nav.tsx\n"));

/***/ })

});