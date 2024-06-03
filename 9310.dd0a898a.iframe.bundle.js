"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[9310],{"./node_modules/@sima-land/ui-nucleons/hint/hint-view.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.HintView=exports.arrowSquareSize=void 0;const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),bind_1=__importDefault(__webpack_require__("./node_modules/classnames/bind.js")),hint_view_m_scss_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-nucleons/hint/hint-view.m.scss")),cx=bind_1.default.bind(hint_view_m_scss_1.default);function HintView({hintRef,className,children,"data-testid":testId="hint",...rest}){return(0,jsx_runtime_1.jsx)("div",{ref:hintRef,className:cx("root",className),"data-testid":testId,...rest,children})}exports.arrowSquareSize=Math.sqrt(32),exports.HintView=HintView,HintView.Arrow=function HintArrow({arrowRef,className,...rest}){return(0,jsx_runtime_1.jsx)("div",{ref:arrowRef,className:cx("arrow",className),...rest})}},"./node_modules/@sima-land/ui-nucleons/hint/hint.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Hint=void 0;const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),portal_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/portal/index.js"),hint_view_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/hint/hint-view.js");function HintInner({arrowRef,children,...rest}){return(0,jsx_runtime_1.jsxs)(hint_view_1.HintView,{...rest,children:[children,(0,jsx_runtime_1.jsx)(hint_view_1.HintView.Arrow,{arrowRef})]})}exports.Hint=function Hint({open,...rest}){return open?(0,jsx_runtime_1.jsx)(portal_1.Portal,{children:(0,jsx_runtime_1.jsx)(HintInner,{...rest})}):null}},"./node_modules/@sima-land/ui-nucleons/hint/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.Hh=exports.Uo=exports.W0=exports.kW=void 0;const hint_view_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/hint/hint-view.js");const hint_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/hint/hint.js");Object.defineProperty(exports,"kW",{enumerable:!0,get:function(){return hint_1.Hint}});const utils_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/hint/utils.js");Object.defineProperty(exports,"W0",{enumerable:!0,get:function(){return utils_1.useHintFloating}}),Object.defineProperty(exports,"Uo",{enumerable:!0,get:function(){return utils_1.useHintOnHover}}),Object.defineProperty(exports,"Hh",{enumerable:!0,get:function(){return utils_1.useHintFloatingStyle}})},"./node_modules/@sima-land/ui-nucleons/hint/utils.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.useTempHintState=exports.useHintOnClick=exports.useHintOnHover=exports.getArrowFloatingStyle=exports.useHintFloatingStyle=exports.useHintFloating=exports.hintFloatingConfig=void 0;const react_1=__webpack_require__("./node_modules/react/index.js"),react_2=__webpack_require__("./node_modules/@floating-ui/react/dist/floating-ui.react.esm.js"),layer_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/helpers/layer.js"),hint_view_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/hint/hint-view.js"),use_identity_ref_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/hooks/use-identity-ref/index.js");function hintFloatingConfig({arrowRef}={}){return{placement:"top",middleware:[(0,react_2.offset)(4+(arrowRef?4:0)),(0,react_2.flip)({padding:16,crossAxis:!1,fallbackAxisSideDirection:"start"}),(0,react_2.shift)({padding:16}),arrowRef&&(0,react_2.arrow)({element:arrowRef,padding:4})],whileElementsMounted:react_2.autoUpdate}}function useHintFloatingStyle(floating){const layer=(0,layer_1.useLayer)(),arrowStyle=Object.fromEntries(Object.entries(getArrowFloatingStyle(floating)).map((([key,value])=>[`--hint-arrow-${key}`,value])));return{position:floating.strategy,top:floating.y,left:floating.x,zIndex:layer+2,...arrowStyle}}function getArrowFloatingStyle({placement,middlewareData}){const{arrow:arrowData}=middlewareData;if(!arrowData)return{};const maybe=value=>value?`${value}px`:"",arrowShift=()=>-hint_view_1.arrowSquareSize/2+"px";let arrowStyle={};switch(placement.split("-")[0]){case"top":arrowStyle={left:maybe(null==arrowData?void 0:arrowData.x),bottom:arrowShift()};break;case"bottom":arrowStyle={left:maybe(null==arrowData?void 0:arrowData.x),top:arrowShift()};break;case"left":arrowStyle={top:maybe(null==arrowData?void 0:arrowData.y),right:arrowShift()};break;case"right":arrowStyle={top:maybe(null==arrowData?void 0:arrowData.y),left:arrowShift()}}return arrowStyle}exports.hintFloatingConfig=hintFloatingConfig,exports.useHintFloating=function useHintFloating(props){const[arrowEl,setArrowEl]=(0,react_1.useState)(null),arrowRef=(0,use_identity_ref_1.useIdentityRef)(arrowEl),floating=(0,react_2.useFloating)({...hintFloatingConfig(arrowEl?{arrowRef}:void 0),...props});return{...floating,refs:{...floating.refs,setArrow:setArrowEl}}},exports.useHintFloatingStyle=useHintFloatingStyle,exports.getArrowFloatingStyle=getArrowFloatingStyle,exports.useHintOnHover=function useHintOnHover(floating,props){const style=useHintFloatingStyle(floating),hover=(0,react_2.useHover)(floating.context,{handleClose:(0,react_2.safePolygon)(),...props});return(0,react_2.useInteractions)([hover,{floating:{style}}])},exports.useHintOnClick=function useHintOnClick(floating){const style=useHintFloatingStyle(floating),click=(0,react_2.useClick)(floating.context),dismiss=(0,react_2.useDismiss)(floating.context);return(0,react_2.useInteractions)([click,dismiss,{floating:{style}}])},exports.useTempHintState=function useTempHintState(initialState,{timeout=3e3}={}){const[open,setOpen]=(0,react_1.useState)(initialState),timerRef=(0,react_1.useRef)(null),updateTimer=(0,react_1.useCallback)((value=>{null!==timerRef.current&&clearTimeout(timerRef.current),value&&(timerRef.current=setTimeout((()=>setOpen(!1)),timeout))}),[timeout]);(0,react_1.useEffect)((()=>{updateTimer(open)}),[]);const toggle=(0,react_1.useCallback)((next=>{const state="function"==typeof next?next(open):next;updateTimer(state),setOpen(state)}),[open,setOpen,updateTimer]);return[open,toggle]}},"./node_modules/@sima-land/ui-nucleons/portal/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Portal=void 0;var portal_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/portal/portal.js");Object.defineProperty(exports,"Portal",{enumerable:!0,get:function(){return portal_1.Portal}})},"./node_modules/@sima-land/ui-nucleons/portal/portal.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Portal=void 0;const react_1=__webpack_require__("./node_modules/react/index.js"),react_dom_1=__webpack_require__("./node_modules/react-dom/index.js"),hooks_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/hooks/index.js");exports.Portal=function Portal({children,defineRoot=()=>document.body,onMount}){const[mounted,setMounted]=(0,react_1.useState)(!1),ref=(0,react_1.useRef)();(0,hooks_1.useIsomorphicLayoutEffect)((()=>{const root=defineRoot();return ref.current=document.createElement("div"),root.appendChild(ref.current),setMounted(!0),()=>{ref.current&&ref.current.remove()}}),[]);const onMountRef=(0,react_1.useRef)(onMount);return onMountRef.current=onMount,(0,hooks_1.useIsomorphicLayoutEffect)((()=>{var _a;mounted&&(null===(_a=onMountRef.current)||void 0===_a||_a.call(onMountRef))}),[mounted]),mounted&&ref.current?(0,react_dom_1.createPortal)(children,ref.current):null}},"./node_modules/@sima-land/ui-nucleons/rating/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.i=void 0;var rating_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/rating/rating.js");Object.defineProperty(exports,"i",{enumerable:!0,get:function(){return rating_1.Rating}})},"./node_modules/@sima-land/ui-nucleons/rating/rating.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Rating=void 0;const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),utils_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/rating/utils.js"),Star_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-quarks/dist/cjs/icons/16x16/Filled/Star.js")),bind_1=__importDefault(__webpack_require__("./node_modules/classnames/bind.js")),rating_m_scss_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-nucleons/rating/rating.m.scss")),cx=bind_1.default.bind(rating_m_scss_1.default);exports.Rating=({size="s",value,className,"data-testid":testId="rating",...restProps})=>(0,jsx_runtime_1.jsx)("div",{...restProps,className:cx("root",className),"data-testid":testId,"data-rating":value,children:(0,utils_1.getStars)(Math.min(5,value),5).map(((type,index)=>(0,jsx_runtime_1.jsx)(Star,{type,size},index)))});const Star=({type,size})=>(0,jsx_runtime_1.jsxs)("div",{className:cx("star",`size-${size}`),children:["empty"===type&&(0,jsx_runtime_1.jsx)(Star_1.default,{className:cx("svg")}),"half"===type&&(0,jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment,{children:[(0,jsx_runtime_1.jsx)(Star_1.default,{className:cx("svg")}),(0,jsx_runtime_1.jsx)(Star_1.default,{className:cx("svg","half"),preserveAspectRatio:"xMinYMin slice"})]}),"full"===type&&(0,jsx_runtime_1.jsx)(Star_1.default,{className:cx("svg","full")})]})},"./node_modules/@sima-land/ui-nucleons/rating/utils.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.getStars=void 0;const roundHalf=value=>Math.round(2*value)/2;exports.getStars=(value,count)=>[...Array(count).keys()].reduce((acc=>(acc.total>=1?acc.stars.push("full"):acc.total>0?acc.stars.push("half"):acc.stars.push("empty"),acc.total--,acc)),{total:roundHalf(value),stars:[]}).stars},"./node_modules/@sima-land/ui-quarks/dist/cjs/icons/16x16/Filled/Star.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.prototype.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__("./node_modules/react/index.js")),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>React.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props},React.createElement("path",{d:"M7.536 1.545a.5.5 0 0 1 .928 0l1.711 4.262 4.583.311a.5.5 0 0 1 .287.883L11.52 9.945l1.12 4.454a.5.5 0 0 1-.75.546L8 12.503l-3.89 2.442a.5.5 0 0 1-.75-.546l1.12-4.454L.955 7.001a.5.5 0 0 1 .287-.883l4.583-.31 1.711-4.263Z"}))));exports.default=ForwardRef},"./node_modules/@sima-land/ui-quarks/dist/esm/icons/16x16/Stroked/ArrowTurnLeft.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props},react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{clipPath:"url(#prefix__clip0_5876_1441)"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M12 1a1 1 0 0 0-1-1H5a1 1 0 0 0-.928 1.371l2 5a1 1 0 0 0 1.856-.742L6.78 2.757C8.743 3.88 10 5.839 10 8c0 2.829-2.153 5.311-5.226 6.026a1 1 0 0 0 .452 1.948C9.054 15.084 12 11.907 12 8c0-2.393-1.106-4.512-2.842-6H11a1 1 0 0 0 1-1Z",clipRule:"evenodd"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("clipPath",{id:"prefix__clip0_5876_1441"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h16v16H0z"}))))))},"./node_modules/@sima-land/ui-quarks/dist/esm/icons/16x16/Stroked/ArrowTurnRight.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props},react__WEBPACK_IMPORTED_MODULE_0__.createElement("g",{clipPath:"url(#prefix__clip0_5876_1440)"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M4 1a1 1 0 0 1 1-1h6a1 1 0 0 1 .928 1.371l-2 5a1 1 0 0 1-1.856-.742L9.22 2.757C7.257 3.88 6 5.839 6 8c0 2.829 2.153 5.311 5.226 6.026a1 1 0 0 1-.453 1.948C6.947 15.084 4 11.907 4 8c0-2.393 1.106-4.512 2.842-6H5a1 1 0 0 1-1-1Z",clipRule:"evenodd"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("clipPath",{id:"prefix__clip0_5876_1440"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M0 0h16v16H0z"}))))))},"./node_modules/@sima-land/ui-quarks/dist/esm/icons/24x24/Filled/Play.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",ref,...props},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M5 19.29V4.71a1 1 0 0 1 1.49-.872l12.96 7.29a1 1 0 0 1 0 1.744l-12.96 7.29A1 1 0 0 1 5 19.29Z"}))))},"./node_modules/@sima-land/ui-quarks/dist/esm/icons/24x24/Stroked/Repeat.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",ref,...props},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M5.013 11.573A7 7 0 0 1 16.63 6.75a1 1 0 0 0 1.323-1.5A9 9 0 0 0 3.01 11.594l-1.302-1.301a1 1 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 1 0-1.414-1.414l-1.28 1.28ZM19.293 9.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414l-1.302-1.302A9 9 0 0 1 6.047 18.75a1 1 0 1 1 1.323-1.5 7 7 0 0 0 11.617-4.823l-1.28 1.28a1 1 0 0 1-1.414-1.414l3-3Z"}))))},"./node_modules/@sima-land/ui-quarks/dist/esm/icons/40x40/Filled/Pause.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",ref,...props},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M8 9a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1H8Zm17 0a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1h-7Z",clipRule:"evenodd"}))))},"./node_modules/@sima-land/ui-quarks/dist/esm/icons/40x40/Filled/Viewing360Perspective.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{width:40,height:40,viewBox:"0 0 40 40",ref,...props},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M30.63 17.879c.574-.839.861-2.13.861-3.876 0-1.686-.296-2.967-.889-3.842-.587-.875-1.458-1.312-2.61-1.312-1.186 0-2.063.419-2.633 1.257-.57.834-.854 2.133-.854 3.897 0 1.69.292 2.969.875 3.835.588.866 1.458 1.299 2.611 1.299 1.19 0 2.07-.42 2.639-1.258Zm-3.712-1.237c-.21-.534-.314-1.413-.314-2.64 0-1.225.107-2.104.32-2.638.215-.538.57-.806 1.067-.806.488 0 .841.268 1.06.806.223.534.335 1.413.335 2.639 0 1.212-.11 2.087-.328 2.625-.22.538-.575.807-1.067.807-.501 0-.859-.265-1.073-.793Zm-11.758-5.4c0 .624-.189 1.154-.567 1.592-.379.438-.91.738-1.593.902v.041c.807.1 1.417.347 1.832.739.415.387.622.911.622 1.572 0 .961-.349 1.711-1.046 2.249-.697.533-1.693.8-2.987.8-1.085 0-2.046-.18-2.885-.54v-1.798c.388.196.814.355 1.278.478.465.123.926.185 1.381.185.698 0 1.213-.119 1.545-.356.333-.237.5-.617.5-1.141 0-.47-.192-.802-.575-.998-.383-.196-.993-.294-1.832-.294h-.759v-1.62h.773c.774 0 1.34-.1 1.695-.301.36-.205.54-.554.54-1.046 0-.756-.474-1.135-1.422-1.135-.328 0-.663.055-1.005.164-.337.11-.713.299-1.128.568L8.55 9.847c.911-.657 1.998-.985 3.26-.985 1.035 0 1.85.21 2.448.63.601.418.902 1.002.902 1.75Zm1.333 3.513c0-1.978.417-3.45 1.251-4.416.839-.966 2.092-1.45 3.76-1.45.57 0 1.016.035 1.34.103v1.689a5.472 5.472 0 0 0-1.203-.137c-.725 0-1.317.11-1.778.328a2.21 2.21 0 0 0-1.025.97c-.228.43-.362 1.038-.403 1.826h.088c.452-.775 1.174-1.162 2.167-1.162.894 0 1.593.28 2.1.84.505.561.758 1.336.758 2.325 0 1.066-.3 1.912-.902 2.536-.602.62-1.436.93-2.502.93-.739 0-1.384-.171-1.935-.513-.547-.342-.97-.84-1.271-1.497-.297-.656-.445-1.447-.445-2.372Zm3.61 2.693c.45 0 .797-.15 1.039-.45.241-.306.362-.74.362-1.3 0-.487-.114-.87-.342-1.148-.223-.283-.563-.424-1.018-.424-.429 0-.796.139-1.101.417-.3.278-.451.602-.451.97 0 .543.141 1.001.424 1.375.287.373.649.56 1.087.56Zm14.923-3.141a1 1 0 1 0-1.052 1.701c1.155.713 1.902 1.45 2.362 2.2.456.74.664 1.543.664 2.45 0 1.704-1.251 3.48-3.813 4.979-2.526 1.479-6.123 2.552-10.27 2.9a1 1 0 0 0 .167 1.992c4.365-.366 8.268-1.5 11.114-3.166 2.81-1.645 4.802-3.95 4.802-6.706 0-1.236-.291-2.41-.96-3.498-.664-1.079-1.667-2.02-3.014-2.852Zm-29 2.044a1 1 0 1 0-1.052-1.702c-1.31.81-2.316 1.652-2.99 2.644C1.296 18.308 1 19.413 1 20.657c0 2.755 1.992 5.06 4.802 6.706 2.332 1.364 5.373 2.373 8.797 2.894l-1.746 1.48a1 1 0 0 0 1.294 1.526l3.5-2.967a1 1 0 0 0 .115-1.41l-3-3.533a1 1 0 0 0-1.524 1.294l1.343 1.583c-3.09-.503-5.765-1.42-7.768-2.593C4.25 24.137 3 22.362 3 20.657c0-.899.204-1.6.64-2.24.45-.666 1.195-1.33 2.386-2.066Z",clipRule:"evenodd"}))))},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/hint/hint-view.m.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".hint-view-m__root__f1b{border-radius:4px;background:#3a3a3b;padding:8px;max-width:280px;min-width:36px;min-height:36px;display:inline-flex;align-items:center;color:#fff;font-size:14px;line-height:20px;font-weight:400;text-align:center;overflow-wrap:break-word}.hint-view-m__arrow__c25{position:absolute;width:5.6568542495px;height:5.6568542495px;transform:rotate(45deg);background:#3a3a3b;top:var(--hint-arrow-top);left:var(--hint-arrow-left);right:var(--hint-arrow-right);bottom:var(--hint-arrow-bottom);z-index:-1}","",{version:3,sources:["webpack://./node_modules/@sima-land/ui-nucleons/hint/hint-view.m.scss","webpack://./node_modules/@sima-land/ui-nucleons/colors.scss"],names:[],mappings:"AAGA,wBACE,iBAAA,CACA,kBAAA,CACA,WAAA,CACA,eAAA,CACA,cAAA,CACA,eAAA,CACA,mBAAA,CACA,kBAAA,CACA,UAAA,CACA,cAAA,CACA,gBAAA,CACA,eAAA,CACA,iBAAA,CACA,wBAAA,CAGF,yBACE,iBAAA,CACA,oBAAA,CACA,qBAAA,CACA,uBAAA,CACA,kBCpBa,CDqBb,yBAAA,CACA,2BAAA,CACA,6BAAA,CACA,+BAAA,CACA,UAAA",sourcesContent:["@use 'sass:math';\n@use '../colors';\n\n.root {\n  border-radius: 4px;\n  background: colors.$basic-gray76;\n  padding: 8px;\n  max-width: 280px;\n  min-width: 36px;\n  min-height: 36px;\n  display: inline-flex;\n  align-items: center;\n  color: #fff;\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: 400;\n  text-align: center;\n  overflow-wrap: break-word;\n}\n\n.arrow {\n  position: absolute;\n  width: 1px * math.sqrt((4 * 4) + (4 * 4));\n  height: 1px * math.sqrt((4 * 4) + (4 * 4));\n  transform: rotate(45deg);\n  background: colors.$basic-gray76;\n  top: var(--hint-arrow-top);\n  left: var(--hint-arrow-left);\n  right: var(--hint-arrow-right);\n  bottom: var(--hint-arrow-bottom);\n  z-index: -1; // чтобы был скрыт при отсутствии позиционирования\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n$additional-crimson: #f4446b;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"hint-view-m__root__f1b",arrow:"hint-view-m__arrow__c25"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/rating/rating.m.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".rating-m__root__f38{display:flex;flex-wrap:nowrap}.rating-m__star__ef3{position:relative}.rating-m__star__ef3.rating-m__size-s__d6f{width:16px;height:16px}.rating-m__star__ef3.rating-m__size-s__d6f+.rating-m__star__ef3.rating-m__size-s__d6f{margin-left:4px}.rating-m__star__ef3.rating-m__size-m__b75{width:24px;height:24px}.rating-m__star__ef3.rating-m__size-m__b75+.rating-m__star__ef3.rating-m__size-m__b75{margin-left:6px}.rating-m__svg__eea{display:block;position:absolute;top:0;left:0;width:100%;height:100%;fill:#e0e0e0}.rating-m__svg__eea.rating-m__half__bc3{width:50%;fill:#ffab00}.rating-m__svg__eea.rating-m__full__a3e{fill:#ffab00}","",{version:3,sources:["webpack://./node_modules/@sima-land/ui-nucleons/rating/rating.m.scss","webpack://./node_modules/@sima-land/ui-nucleons/colors.scss"],names:[],mappings:"AAEA,qBACE,YAAA,CACA,gBAAA,CAGF,qBACE,iBAAA,CACA,2CACE,UAAA,CACA,WAAA,CACA,sFACE,eAAA,CAGJ,2CACE,UAAA,CACA,WAAA,CACA,sFACE,eAAA,CAKN,oBACE,aAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,YCtBa,CDuBb,wCACE,SAAA,CACA,YAAA,CAEF,wCACE,YCHe",sourcesContent:["@use '../colors';\n\n.root {\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.star {\n  position: relative;\n  &.size-s {\n    width: 16px;\n    height: 16px;\n    & + & {\n      margin-left: 4px;\n    }\n  }\n  &.size-m {\n    width: 24px;\n    height: 24px;\n    & + & {\n      margin-left: 6px;\n    }\n  }\n}\n\n.svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  fill: colors.$basic-gray12;\n  &.half {\n    width: 50%;\n    fill: colors.$additional-amber;\n  }\n  &.full {\n    fill: colors.$additional-amber;\n  }\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n$additional-crimson: #f4446b;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"rating-m__root__f38",star:"rating-m__star__ef3","size-s":"rating-m__size-s__d6f","size-m":"rating-m__size-m__b75",svg:"rating-m__svg__eea",half:"rating-m__half__bc3",full:"rating-m__full__a3e"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/@sima-land/ui-nucleons/hint/hint-view.m.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_hint_view_m_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/hint/hint-view.m.scss"),options={};options.styleTagTransform=_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_hint_view_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_hint_view_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_hint_view_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_hint_view_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0},"./node_modules/@sima-land/ui-nucleons/rating/rating.m.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_rating_m_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/rating/rating.m.scss"),options={};options.styleTagTransform=_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_rating_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_rating_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_rating_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_rating_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0}}]);