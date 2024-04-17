/*! For license information please see 2999.b005ee10.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[2999],{"./node_modules/@sima-land/ui-nucleons/hint/hint-view.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.HintView=exports.arrowSquareSize=void 0;const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),bind_1=__importDefault(__webpack_require__("./node_modules/classnames/bind.js")),hint_view_m_scss_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-nucleons/hint/hint-view.m.scss")),cx=bind_1.default.bind(hint_view_m_scss_1.default);function HintView({hintRef,className,children,"data-testid":testId="hint",...rest}){return(0,jsx_runtime_1.jsx)("div",{ref:hintRef,className:cx("root",className),"data-testid":testId,...rest,children})}exports.arrowSquareSize=Math.sqrt(32),exports.HintView=HintView,HintView.Arrow=function HintArrow({arrowRef,className,...rest}){return(0,jsx_runtime_1.jsx)("div",{ref:arrowRef,className:cx("arrow",className),...rest})}},"./node_modules/@sima-land/ui-nucleons/hint/hint.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Hint=void 0;const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),portal_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/portal/index.js"),hint_view_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/hint/hint-view.js");function HintInner({arrowRef,children,...rest}){return(0,jsx_runtime_1.jsxs)(hint_view_1.HintView,{...rest,children:[children,(0,jsx_runtime_1.jsx)(hint_view_1.HintView.Arrow,{arrowRef})]})}exports.Hint=function Hint({open,...rest}){return(0,jsx_runtime_1.jsx)(portal_1.Portal,{children:open&&(0,jsx_runtime_1.jsx)(HintInner,{...rest})})}},"./node_modules/@sima-land/ui-nucleons/hint/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";exports.Hh=exports.Uo=exports.W0=exports.kW=void 0;const hint_view_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/hint/hint-view.js");const hint_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/hint/hint.js");Object.defineProperty(exports,"kW",{enumerable:!0,get:function(){return hint_1.Hint}});const utils_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/hint/utils.js");Object.defineProperty(exports,"W0",{enumerable:!0,get:function(){return utils_1.useHintFloating}}),Object.defineProperty(exports,"Uo",{enumerable:!0,get:function(){return utils_1.useHintOnHover}}),Object.defineProperty(exports,"Hh",{enumerable:!0,get:function(){return utils_1.useHintFloatingStyle}})},"./node_modules/@sima-land/ui-nucleons/hint/utils.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useTempHintState=exports.useHintOnClick=exports.useHintOnHover=exports.getArrowFloatingStyle=exports.useHintFloatingStyle=exports.useHintFloating=exports.hintFloatingConfig=void 0;const react_1=__webpack_require__("./node_modules/react/index.js"),react_2=__webpack_require__("./node_modules/@floating-ui/react/dist/floating-ui.react.esm.js"),layer_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/helpers/layer.js"),hint_view_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/hint/hint-view.js"),use_identity_ref_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/hooks/use-identity-ref/index.js");function hintFloatingConfig({arrowRef}={}){return{placement:"top",middleware:[(0,react_2.offset)(4+(arrowRef?4:0)),(0,react_2.flip)({padding:16,crossAxis:!1,fallbackAxisSideDirection:"start"}),(0,react_2.shift)({padding:16}),arrowRef&&(0,react_2.arrow)({element:arrowRef,padding:4})],whileElementsMounted:react_2.autoUpdate}}function useHintFloatingStyle(floating){const layer=(0,layer_1.useLayer)(),arrowStyle=Object.fromEntries(Object.entries(getArrowFloatingStyle(floating)).map((([key,value])=>[`--hint-arrow-${key}`,value])));return{position:floating.strategy,top:floating.y,left:floating.x,zIndex:layer+2,...arrowStyle}}function getArrowFloatingStyle({placement,middlewareData}){const{arrow:arrowData}=middlewareData;if(!arrowData)return{};const maybe=value=>value?`${value}px`:"",arrowShift=()=>-hint_view_1.arrowSquareSize/2+"px";let arrowStyle={};switch(placement.split("-")[0]){case"top":arrowStyle={left:maybe(null==arrowData?void 0:arrowData.x),bottom:arrowShift()};break;case"bottom":arrowStyle={left:maybe(null==arrowData?void 0:arrowData.x),top:arrowShift()};break;case"left":arrowStyle={top:maybe(null==arrowData?void 0:arrowData.y),right:arrowShift()};break;case"right":arrowStyle={top:maybe(null==arrowData?void 0:arrowData.y),left:arrowShift()}}return arrowStyle}exports.hintFloatingConfig=hintFloatingConfig,exports.useHintFloating=function useHintFloating(props){const[arrowEl,setArrowEl]=(0,react_1.useState)(null),arrowRef=(0,use_identity_ref_1.useIdentityRef)(arrowEl),floating=(0,react_2.useFloating)({...hintFloatingConfig(arrowEl?{arrowRef}:void 0),...props});return{...floating,refs:{...floating.refs,setArrow:setArrowEl}}},exports.useHintFloatingStyle=useHintFloatingStyle,exports.getArrowFloatingStyle=getArrowFloatingStyle,exports.useHintOnHover=function useHintOnHover(floating,props){const style=useHintFloatingStyle(floating),hover=(0,react_2.useHover)(floating.context,{handleClose:(0,react_2.safePolygon)(),...props});return(0,react_2.useInteractions)([hover,{floating:{style}}])},exports.useHintOnClick=function useHintOnClick(floating){const style=useHintFloatingStyle(floating),click=(0,react_2.useClick)(floating.context),dismiss=(0,react_2.useDismiss)(floating.context);return(0,react_2.useInteractions)([click,dismiss,{floating:{style}}])},exports.useTempHintState=function useTempHintState(initialState,{timeout=3e3}={}){const[open,setOpen]=(0,react_1.useState)(initialState),timerRef=(0,react_1.useRef)(null),updateTimer=(0,react_1.useCallback)((value=>{null!==timerRef.current&&clearTimeout(timerRef.current),value&&(timerRef.current=setTimeout((()=>setOpen(!1)),timeout))}),[timeout]);(0,react_1.useEffect)((()=>{updateTimer(open)}),[]);const toggle=(0,react_1.useCallback)((next=>{const state="function"==typeof next?next(open):next;updateTimer(state),setOpen(state)}),[open,setOpen,updateTimer]);return[open,toggle]}},"./node_modules/@sima-land/ui-nucleons/portal/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Portal=void 0;var portal_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/portal/portal.js");Object.defineProperty(exports,"Portal",{enumerable:!0,get:function(){return portal_1.Portal}})},"./node_modules/@sima-land/ui-nucleons/portal/portal.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Portal=void 0;const react_1=__webpack_require__("./node_modules/react/index.js"),react_dom_1=__webpack_require__("./node_modules/react-dom/index.js"),hooks_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/hooks/index.js");exports.Portal=function Portal({children,defineRoot=()=>document.body,onMount}){const[mounted,setMounted]=(0,react_1.useState)(!1),ref=(0,react_1.useRef)();(0,hooks_1.useIsomorphicLayoutEffect)((()=>{const root=defineRoot();return ref.current=document.createElement("div"),root.appendChild(ref.current),setMounted(!0),()=>{ref.current&&ref.current.remove()}}),[]);const onMountRef=(0,react_1.useRef)(onMount);return onMountRef.current=onMount,(0,hooks_1.useIsomorphicLayoutEffect)((()=>{var _a;mounted&&(null===(_a=onMountRef.current)||void 0===_a||_a.call(onMountRef))}),[mounted]),mounted&&ref.current?(0,react_dom_1.createPortal)(children,ref.current):null}},"./node_modules/@sima-land/ui-nucleons/stroked-svg/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";exports.Y=void 0;var stroked_svg_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/stroked-svg/stroked-svg.js");Object.defineProperty(exports,"Y",{enumerable:!0,get:function(){return stroked_svg_1.StrokedSVG}})},"./node_modules/@sima-land/ui-nucleons/stroked-svg/stroked-svg.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.StrokedSVG=void 0;const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),react_1=__webpack_require__("./node_modules/react/index.js"),colors_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/colors/index.js"),classnames_1=__importDefault(__webpack_require__("./node_modules/classnames/index.js")),stroked_svg_m_scss_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-nucleons/stroked-svg/stroked-svg.m.scss"));exports.StrokedSVG=(0,react_1.forwardRef)((({component:Tag,fill,stroke=colors_1.COLORS.get("basic-gray4"),strokeWidth=1,className,"data-testid":testId,...restProps},ref)=>(0,jsx_runtime_1.jsxs)("div",{ref,className:(0,classnames_1.default)(stroked_svg_m_scss_1.default.root,className),"data-testid":testId,...restProps,children:[(0,jsx_runtime_1.jsx)(Tag,{stroke,strokeWidth:2*strokeWidth+"px",className:stroked_svg_m_scss_1.default.stroke}),(0,jsx_runtime_1.jsx)(Tag,{fill,className:stroked_svg_m_scss_1.default.svg})]}))),exports.StrokedSVG.displayName="StrokedSVG"},"./node_modules/@sima-land/ui-quarks/dist/esm/icons/16x16/Filled/Star.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M7.536 1.545a.5.5 0 0 1 .928 0l1.711 4.262 4.583.311a.5.5 0 0 1 .287.883L11.52 9.945l1.12 4.454a.5.5 0 0 1-.75.546L8 12.503l-3.89 2.442a.5.5 0 0 1-.75-.546l1.12-4.454L.955 7.001a.5.5 0 0 1 .287-.883l4.583-.31 1.711-4.263Z"}))))},"./node_modules/@sima-land/ui-quarks/dist/esm/icons/24x24/Stroked/Favorite.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",ref,...props},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M19.657 4.01C17.018 2.174 13.76 3.031 12 5.132c-1.759-2.1-5.018-2.968-7.657-1.122-1.4.98-2.279 2.632-2.339 4.376-.14 3.958 3.299 7.13 8.547 11.996l.1.091c.76.704 1.93.704 2.689-.01l.11-.102c5.248-4.855 8.676-8.027 8.546-11.985-.06-1.734-.94-3.386-2.339-4.366ZM12.1 18.862l-.1.102-.1-.102C7.142 14.466 4.003 11.559 4.003 8.61c0-2.04 1.5-3.57 3.499-3.57 1.22 0 2.415.634 3.122 1.593.333.451.817.814 1.378.814.564 0 1.05-.367 1.385-.821.702-.955 1.894-1.586 3.111-1.586 2 0 3.5 1.53 3.5 3.57 0 2.947-3.14 5.855-7.898 10.25Z"}))))},"./node_modules/@sima-land/ui-quarks/dist/esm/icons/24x24/Stroked/Repeat.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",ref,...props},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M5.013 11.573A7 7 0 0 1 16.63 6.75a1 1 0 0 0 1.323-1.5A9 9 0 0 0 3.01 11.594l-1.302-1.301a1 1 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 1 0-1.414-1.414l-1.28 1.28ZM19.293 9.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414l-1.302-1.302A9 9 0 0 1 6.047 18.75a1 1 0 1 1 1.323-1.5 7 7 0 0 0 11.617-4.823l-1.28 1.28a1 1 0 0 1-1.414-1.414l3-3Z"}))))},"./node_modules/@sima-land/ui-quarks/dist/esm/icons/64x64/Stroked/EighteenPlus.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{width:64,height:64,viewBox:"0 0 64 64",ref,...props},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M54.827 19.2h-2.56v-7.253h-7.254v-2.56h7.254V2.133h2.56v7.254h7.253v2.56h-7.253V19.2ZM36.27 27.224c.656.744 1.866 1.487 3.634 2.23 1.589-.675 2.713-1.4 3.374-2.178a4.07 4.07 0 0 0 .992-2.72c0-1.137-.402-2.041-1.208-2.712-.805-.67-1.914-1.004-3.324-1.004-1.39 0-2.478.337-3.267 1.013-.789.675-1.184 1.577-1.184 2.702 0 1.037.328 1.927.983 2.67Zm-.65 7.02c-.744.872-1.116 1.917-1.116 3.133 0 1.351.463 2.404 1.391 3.16.928.755 2.23 1.13 3.909 1.13 1.656 0 2.944-.392 3.865-1.18.923-.79 1.385-1.87 1.385-3.245 0-1.092-.433-2.063-1.3-2.913-.867-.851-2.378-1.676-4.533-2.476-1.656.72-2.856 1.518-3.6 2.391Zm-2.049-6.386c-.666-1.018-1-2.159-1-3.421 0-1.79.652-3.218 1.958-4.282 1.305-1.065 3.052-1.597 5.242-1.597 2.222 0 3.983.524 5.283 1.572 1.3 1.047 1.95 2.495 1.95 4.342 0 1.216-.372 2.325-1.117 3.328-.744 1.002-1.933 1.914-3.567 2.736 1.978.956 3.384 1.962 4.217 3.016.834 1.053 1.25 2.272 1.25 3.657 0 2.05-.706 3.685-2.116 4.907-1.412 1.222-3.345 1.833-5.8 1.833-2.6 0-4.6-.578-6-1.731-1.4-1.155-2.1-2.79-2.1-4.908 0-2.826 1.7-5.029 5.1-6.606-1.534-.877-2.634-1.826-3.3-2.846ZM32 64C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0c3.73 0 7.313.638 10.642 1.812.025.568.025 2.677.025 2.668C39.347 3.183 35.779 2.56 32 2.56 15.74 2.56 2.56 15.74 2.56 32S15.74 61.44 32 61.44 61.44 48.26 61.44 32c0-3.769-.708-7.372-1.999-10.685 1.412.018 2.489.018 2.737.015A31.943 31.943 0 0 1 64 32c0 17.673-14.327 32-32 32ZM16.829 25.89l-1.466-1.925 6.45-5.052h2.332v24.698h-2.7V26.008c0-1.464.044-2.849.134-4.155-.234.236-.495.485-.784.744-.288.259-1.61 1.357-3.966 3.293Z",clipRule:"evenodd"}))))},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/hint/hint-view.m.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".hint-view-m__root__f1b{border-radius:4px;background:#3a3a3b;padding:8px;max-width:280px;min-width:36px;min-height:36px;display:inline-flex;align-items:center;color:#fff;font-size:14px;line-height:20px;font-weight:400;text-align:center;overflow-wrap:break-word}.hint-view-m__arrow__c25{position:absolute;width:5.6568542495px;height:5.6568542495px;transform:rotate(45deg);background:#3a3a3b;top:var(--hint-arrow-top);left:var(--hint-arrow-left);right:var(--hint-arrow-right);bottom:var(--hint-arrow-bottom);z-index:-1}","",{version:3,sources:["webpack://./node_modules/@sima-land/ui-nucleons/hint/hint-view.m.scss","webpack://./node_modules/@sima-land/ui-nucleons/colors.scss"],names:[],mappings:"AAGA,wBACE,iBAAA,CACA,kBAAA,CACA,WAAA,CACA,eAAA,CACA,cAAA,CACA,eAAA,CACA,mBAAA,CACA,kBAAA,CACA,UAAA,CACA,cAAA,CACA,gBAAA,CACA,eAAA,CACA,iBAAA,CACA,wBAAA,CAGF,yBACE,iBAAA,CACA,oBAAA,CACA,qBAAA,CACA,uBAAA,CACA,kBCpBa,CDqBb,yBAAA,CACA,2BAAA,CACA,6BAAA,CACA,+BAAA,CACA,UAAA",sourcesContent:["@use 'sass:math';\n@use '../colors';\n\n.root {\n  border-radius: 4px;\n  background: colors.$basic-gray76;\n  padding: 8px;\n  max-width: 280px;\n  min-width: 36px;\n  min-height: 36px;\n  display: inline-flex;\n  align-items: center;\n  color: #fff;\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: 400;\n  text-align: center;\n  overflow-wrap: break-word;\n}\n\n.arrow {\n  position: absolute;\n  width: 1px * math.sqrt((4 * 4) + (4 * 4));\n  height: 1px * math.sqrt((4 * 4) + (4 * 4));\n  transform: rotate(45deg);\n  background: colors.$basic-gray76;\n  top: var(--hint-arrow-top);\n  left: var(--hint-arrow-left);\n  right: var(--hint-arrow-right);\n  bottom: var(--hint-arrow-bottom);\n  z-index: -1; // чтобы был скрыт при отсутствии позиционирования\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n$additional-crimson: #f4446b;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"hint-view-m__root__f1b",arrow:"hint-view-m__arrow__c25"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/stroked-svg/stroked-svg.m.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".stroked-svg-m__root__b84{display:inline-flex;position:relative}.stroked-svg-m__stroke__b2c{overflow:visible;display:block;position:absolute;top:0;left:0}.stroked-svg-m__svg__f46{display:block;position:relative}","",{version:3,sources:["webpack://./node_modules/@sima-land/ui-nucleons/stroked-svg/stroked-svg.m.scss"],names:[],mappings:"AAAA,0BACE,mBAAA,CACA,iBAAA,CAGF,4BACE,gBAAA,CACA,aAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CAGF,yBACE,aAAA,CACA,iBAAA",sourcesContent:[".root {\n  display: inline-flex;\n  position: relative;\n}\n\n.stroke {\n  overflow: visible;\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.svg {\n  display: block;\n  position: relative;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"stroked-svg-m__root__b84",stroke:"stroked-svg-m__stroke__b2c",svg:"stroked-svg-m__svg__f46"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/@sima-land/ui-nucleons/hint/hint-view.m.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_hint_view_m_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/hint/hint-view.m.scss"),options={};options.styleTagTransform=_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_hint_view_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_hint_view_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_hint_view_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_hint_view_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0},"./node_modules/@sima-land/ui-nucleons/stroked-svg/stroked-svg.m.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_stroked_svg_m_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/stroked-svg/stroked-svg.m.scss"),options={};options.styleTagTransform=_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_stroked_svg_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_stroked_svg_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_stroked_svg_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_stroked_svg_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0}}]);