/*! For license information please see 1648.1d061abb.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[1648],{"./node_modules/@sima-land/ui-nucleons/helpers/define-slots.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.defineSlots=void 0;const react_1=__webpack_require__("./node_modules/react/index.js");exports.defineSlots=function defineSlots(children,dict){const allKeys=Object.keys(dict);return react_1.Children.toArray(children).reduce(((result,item)=>{if((0,react_1.isValidElement)(item))for(const key of allKeys)if(!result[key]&&(value=item,type=dict[key],value.type===type)){result[key]=item;break}var value,type;return result}),{})}},"./node_modules/@sima-land/ui-nucleons/helpers/get-declination.js":(__unused_webpack_module,exports)=>{"use strict";function getDeclination(number,titles){const positiveNumber=Math.abs(number);return titles[positiveNumber%100>4&&positiveNumber%100<20?2:[2,0,1,1,1,2][positiveNumber%10<5?positiveNumber%10:5]]}exports.pd=void 0,exports.pd=getDeclination},"./node_modules/@sima-land/ui-nucleons/helpers/is-browser.js":(__unused_webpack_module,exports)=>{"use strict";function isBrowser(){return"undefined"!=typeof window}Object.defineProperty(exports,"__esModule",{value:!0}),exports.isBrowser=void 0,exports.isBrowser=isBrowser,exports.default=isBrowser},"./node_modules/@sima-land/ui-nucleons/helpers/is-touch-device.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.isTouchDevice=void 0;const is_browser_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/helpers/is-browser.js");exports.isTouchDevice=function isTouchDevice(){return(0,is_browser_1.isBrowser)()&&"ontouchstart"in window}},"./node_modules/@sima-land/ui-nucleons/helpers/layer.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useLayer=exports.LayerProvider=void 0;const react_1=__webpack_require__("./node_modules/react/index.js"),LayerContext=(0,react_1.createContext)(0);exports.LayerProvider=LayerContext.Provider,exports.useLayer=function useLayer(){return(0,react_1.useContext)(LayerContext)}},"./node_modules/@sima-land/ui-nucleons/hooks/identity.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useIdentityRef=void 0;const react_1=__webpack_require__("./node_modules/react/index.js");exports.useIdentityRef=value=>{const ref=(0,react_1.useRef)(value);return ref.current=value,ref}},"./node_modules/@sima-land/ui-nucleons/hooks/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useIsomorphicLayoutEffect=exports.useOutsideClick=exports.useInfiniteScroll=exports.useIsTouchDevice=void 0;const react_1=__webpack_require__("./node_modules/react/index.js"),is_touch_device_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/helpers/is-touch-device.js"),on_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/helpers/on.js"),identity_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/hooks/identity.js");exports.useIsTouchDevice=function useIsTouchDevice(){const[isTouch,setTouch]=(0,react_1.useState)(!1);return(0,react_1.useEffect)((()=>{setTouch((0,is_touch_device_1.isTouchDevice)())}),[]),isTouch},exports.useInfiniteScroll=function useInfiniteScroll(ref,{onFullScroll,threshold=0},moreDeps){const callbackRef=(0,identity_1.useIdentityRef)(onFullScroll);(0,react_1.useEffect)((()=>{const element=ref.current;if(element)return(0,on_1.on)(element,"scroll",(event=>{var _a;const{scrollTop,clientHeight,scrollHeight}=event.target;threshold+scrollTop+clientHeight>=scrollHeight&&(null===(_a=callbackRef.current)||void 0===_a||_a.call(callbackRef,event))}))}),[ref,threshold,...moreDeps||[]])},exports.useOutsideClick=function useOutsideClick(elementRef,callback){const innerRef=(0,identity_1.useIdentityRef)(elementRef),callbackRef=(0,identity_1.useIdentityRef)(callback);(0,react_1.useEffect)((()=>(0,on_1.on)(document.documentElement,"click",(event=>{var _a;const arg=innerRef.current,refs=Array.isArray(arg)?arg:[arg];let isOutsideClick=!0;for(const{current:element}of refs)if(element&&event.target instanceof Node&&(element===event.target||element.contains(event.target))){isOutsideClick=!1;break}isOutsideClick&&(null===(_a=callbackRef.current)||void 0===_a||_a.call(callbackRef,event))}),{capture:!0})),[])},exports.useIsomorphicLayoutEffect="undefined"!=typeof window?react_1.useLayoutEffect:react_1.useEffect},"./node_modules/@sima-land/ui-nucleons/plate/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Plate=void 0;const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),react_1=__webpack_require__("./node_modules/react/index.js"),shadows_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/styling/shadows.js"),shapes_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/styling/shapes.js"),classnames_1=__importDefault(__webpack_require__("./node_modules/classnames/index.js")),plate_module_scss_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-nucleons/plate/plate.module.scss"));exports.Plate=(0,react_1.forwardRef)((function Plate({className,children,rounds="s",shadow="z1","data-testid":testId="plate",...restProps},ref){return(0,jsx_runtime_1.jsx)("div",{ref,className:(0,classnames_1.default)(plate_module_scss_1.default.root,className,shadow&&shadows_1.BoxShadow[shadow],"s"===rounds&&shapes_1.SmallRounds.all,"m"===rounds&&shapes_1.MediumRounds.all),"data-testid":testId,children,...restProps})}))},"./node_modules/@sima-land/ui-nucleons/stepper/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Stepper=void 0;const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),react_1=__webpack_require__("./node_modules/react/index.js"),Plus_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-quarks/icons/16x16/Stroked/Plus.js")),Minus_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-quarks/icons/16x16/Stroked/Minus.js")),stepper_module_scss_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-nucleons/stepper/stepper.module.scss")),cx=__importDefault(__webpack_require__("./node_modules/classnames/bind.js")).default.bind(stepper_module_scss_1.default);exports.Stepper=(0,react_1.forwardRef)((function Stepper({buttonClickBehavior,canAdd=!0,canSubtract=!0,className,disabled,plusDisabled=disabled,minusDisabled=disabled,readOnly,onAdd,onBlur,onChange,onFocus,onSubtract,size="m",style,value,failed,"data-testid":testId="stepper",...inputProps},forwardedRef){var _a,_b;const ref=(0,react_1.useRef)(null),[focused,setFocused]=(0,react_1.useState)(!1);(0,react_1.useImperativeHandle)(forwardedRef,(()=>ref.current));const noBlurOnMousedown=(0,react_1.useCallback)((event=>{focused&&event.target!==ref.current&&"prevent-input-blur"===buttonClickBehavior&&event.preventDefault()}),[focused,buttonClickBehavior]),rootClassName=cx("root",`size-${size}`,{disabled,focused,failed},className);return(0,jsx_runtime_1.jsxs)("div",{"data-testid":testId,style,className:rootClassName,onMouseDown:noBlurOnMousedown,children:[(0,jsx_runtime_1.jsx)("button",{tabIndex:-1,hidden:!canSubtract,disabled:null!==(_a=null!=minusDisabled?minusDisabled:disabled)&&void 0!==_a?_a:readOnly,className:cx("button"),"data-testid":"stepper:minus","aria-label":"Уменьшить",onMouseDown:noBlurOnMousedown,onClick:!canSubtract||minusDisabled||disabled||readOnly?void 0:onSubtract,children:(0,jsx_runtime_1.jsx)(Minus_1.default,{className:stepper_module_scss_1.default.svg})}),(0,jsx_runtime_1.jsx)("input",{...inputProps,ref,readOnly,"data-testid":"stepper:input",className:cx("input"),value,disabled,onChange,onFocus:e=>{setFocused(!0),null==onFocus||onFocus(e)},onBlur:e=>{setFocused(!1),null==onBlur||onBlur(e)}}),(0,jsx_runtime_1.jsx)("button",{tabIndex:-1,hidden:!canAdd,disabled:null!==(_b=null!=plusDisabled?plusDisabled:disabled)&&void 0!==_b?_b:readOnly,className:cx("button"),"data-testid":"stepper:plus","aria-label":"Увеличить",onMouseDown:noBlurOnMousedown,onClick:!canAdd||plusDisabled||disabled||readOnly?void 0:onAdd,children:(0,jsx_runtime_1.jsx)(Plus_1.default,{className:stepper_module_scss_1.default.svg})})]})}))},"./node_modules/@sima-land/ui-nucleons/styling/shapes.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.MediumRounds=exports.SmallRounds=void 0;const shapes_module_scss_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-nucleons/styling/shapes.module.scss"));exports.SmallRounds={all:shapes_module_scss_1.default["rounds-sm__all"],top:shapes_module_scss_1.default["rounds-sm__t"],right:shapes_module_scss_1.default["rounds-sm__r"],bottom:shapes_module_scss_1.default["rounds-sm__b"],left:shapes_module_scss_1.default["rounds-sm__l"],topLeft:shapes_module_scss_1.default["rounds-sm__t-l"],topRight:shapes_module_scss_1.default["rounds-sm__t-r"],bottomLeft:shapes_module_scss_1.default["rounds-sm__b-l"],bottomRight:shapes_module_scss_1.default["rounds-sm__b-r"]},exports.MediumRounds={all:shapes_module_scss_1.default["rounds-md__all"],top:shapes_module_scss_1.default["rounds-md__t"],right:shapes_module_scss_1.default["rounds-md__r"],bottom:shapes_module_scss_1.default["rounds-md__b"],left:shapes_module_scss_1.default["rounds-md__l"],topLeft:shapes_module_scss_1.default["rounds-md__t-l"],topRight:shapes_module_scss_1.default["rounds-md__t-r"],bottomLeft:shapes_module_scss_1.default["rounds-md__b-l"],bottomRight:shapes_module_scss_1.default["rounds-md__b-r"]}},"./node_modules/@sima-land/ui-quarks/icons/16x16/Stroked/Minus.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsx)("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props,children:(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M2 8a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z",clipRule:"evenodd"})})));exports.default=ForwardRef},"./node_modules/@sima-land/ui-quarks/icons/16x16/Stroked/Plus.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsx)("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props,children:(0,jsx_runtime_1.jsx)("path",{d:"M9 3a1 1 0 0 0-2 0v4H3a1 1 0 0 0 0 2h4v4a1 1 0 1 0 2 0V9h4a1 1 0 1 0 0-2H9V3Z"})})));exports.default=ForwardRef},"./node_modules/@sima-land/ui-quarks/icons/24x24/Filled/Favorite.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",ref,...props,children:(0,jsx_runtime_1.jsx)("path",{d:"M19.657 4.01C17.018 2.174 13.76 3.031 12 5.132c-1.759-2.1-5.018-2.968-7.657-1.122-1.4.98-2.279 2.632-2.339 4.376-.14 3.958 3.299 7.13 8.547 11.996l.1.091c.76.704 1.93.704 2.689-.01l.11-.102c5.248-4.855 8.676-8.027 8.546-11.985-.06-1.734-.94-3.386-2.339-4.366Z"})})));exports.Z=ForwardRef},"./node_modules/@sima-land/ui-quarks/icons/64x64/Stroked/EighteenPlus.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsx)("svg",{width:64,height:64,viewBox:"0 0 64 64",ref,...props,children:(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M54.827 19.2h-2.56v-7.253h-7.254v-2.56h7.254V2.133h2.56v7.254h7.253v2.56h-7.253V19.2ZM36.27 27.224c.656.744 1.866 1.487 3.634 2.23 1.589-.675 2.713-1.4 3.374-2.178a4.07 4.07 0 0 0 .992-2.72c0-1.137-.402-2.041-1.208-2.712-.805-.67-1.914-1.004-3.324-1.004-1.39 0-2.478.337-3.267 1.013-.789.675-1.184 1.577-1.184 2.702 0 1.037.328 1.927.983 2.67Zm-.65 7.02c-.744.872-1.116 1.917-1.116 3.133 0 1.351.463 2.404 1.391 3.16.928.755 2.23 1.13 3.909 1.13 1.656 0 2.944-.392 3.865-1.18.923-.79 1.385-1.87 1.385-3.245 0-1.092-.433-2.063-1.3-2.913-.867-.851-2.378-1.676-4.533-2.476-1.656.72-2.856 1.518-3.6 2.391Zm-2.049-6.386c-.666-1.018-1-2.159-1-3.421 0-1.79.652-3.218 1.958-4.282 1.305-1.065 3.052-1.597 5.242-1.597 2.222 0 3.983.524 5.283 1.572 1.3 1.047 1.95 2.495 1.95 4.342 0 1.216-.372 2.325-1.117 3.328-.744 1.002-1.933 1.914-3.567 2.736 1.978.956 3.384 1.962 4.217 3.016.834 1.053 1.25 2.272 1.25 3.657 0 2.05-.706 3.685-2.116 4.907-1.412 1.222-3.345 1.833-5.8 1.833-2.6 0-4.6-.578-6-1.731-1.4-1.155-2.1-2.79-2.1-4.908 0-2.826 1.7-5.029 5.1-6.606-1.534-.877-2.634-1.826-3.3-2.846ZM32 64C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0c3.73 0 7.313.638 10.642 1.812.025.568.025 2.677.025 2.668C39.347 3.183 35.779 2.56 32 2.56 15.74 2.56 2.56 15.74 2.56 32S15.74 61.44 32 61.44 61.44 48.26 61.44 32c0-3.769-.708-7.372-1.999-10.685 1.412.018 2.489.018 2.737.015A31.943 31.943 0 0 1 64 32c0 17.673-14.327 32-32 32ZM16.829 25.89l-1.466-1.925 6.45-5.052h2.332v24.698h-2.7V26.008c0-1.464.044-2.849.134-4.155-.234.236-.495.485-.784.744-.288.259-1.61 1.357-3.966 3.293Z",clipRule:"evenodd"})})));exports.Z=ForwardRef},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/plate/plate.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".plate-module__root__a44{background:#fff}","",{version:3,sources:["webpack://./node_modules/@sima-land/ui-nucleons/plate/plate.module.scss"],names:[],mappings:"AAAA,yBACE,eAAA",sourcesContent:[".root {\n  background: #fff;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"plate-module__root__a44"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/stepper/stepper.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".stepper-module__root__b85{display:flex;align-items:center;border:1px solid rgba(0,0,0,0);border-radius:4px;color:#212121;background:#ebebeb}.stepper-module__root__b85.stepper-module__focused__a08{border-color:#1f84db}.stepper-module__root__b85.stepper-module__disabled__e1f{color:#c2c2c2;border-color:#f5f5f5;background:#f5f5f5}.stepper-module__root__b85.stepper-module__failed__a81{color:#d50000}.stepper-module__root__b85.stepper-module__size-s__d70{--stepper-button-width: 24px;width:var(--stepper-width, 122px);height:40px}.stepper-module__root__b85.stepper-module__size-m__dea{--stepper-button-width: 32px;width:var(--stepper-width, 160px);height:48px}.stepper-module__input__be2{border:0;padding:0;background:inherit;outline:0;width:0;flex-grow:1;text-align:center;color:inherit;font:inherit;font-weight:600;height:100%;font-size:16px;line-height:24px}.stepper-module__button__b24{display:flex;align-items:center;border:0;padding:0;background:rgba(0,0,0,0);width:var(--stepper-button-width);height:100%;color:#212121;flex-shrink:0}.stepper-module__button__b24:first-child{justify-content:flex-end}.stepper-module__button__b24:last-child{justify-content:flex-start}.stepper-module__button__b24:not(.stepper-module__hidden__b1b):not(:disabled){cursor:pointer}.stepper-module__button__b24:disabled{color:#c2c2c2;pointer-events:none}.stepper-module__button__b24[hidden]{pointer-events:none;opacity:0}.stepper-module__svg__db3{fill:currentColor}","",{version:3,sources:["webpack://./node_modules/@sima-land/ui-nucleons/stepper/stepper.module.scss","webpack://./node_modules/@sima-land/ui-nucleons/colors.scss"],names:[],mappings:"AAEA,2BACE,YAAA,CACA,kBAAA,CACA,8BAAA,CACA,iBAAA,CACA,aCHa,CDIb,kBCGY,CDFZ,wDACE,oBCPS,CDSX,yDACE,aCJW,CDKX,oBCFU,CDGV,kBCHU,CDKZ,uDACE,aCDkB,CDGpB,uDACE,4BAAA,CACA,iCAAA,CACA,WAAA,CAEF,uDACE,4BAAA,CACA,iCAAA,CACA,WAAA,CAIJ,4BACE,QAAA,CACA,SAAA,CAGA,kBAAA,CACA,SAAA,CACA,OAAA,CACA,WAAA,CACA,iBAAA,CACA,aAAA,CACA,YAAA,CACA,eAAA,CACA,WAAA,CACA,cAAA,CACA,gBAAA,CAGF,6BACE,YAAA,CACA,kBAAA,CACA,QAAA,CACA,SAAA,CACA,wBAAA,CACA,iCAAA,CACA,WAAA,CACA,aCtDa,CDuDb,aAAA,CACA,yCACE,wBAAA,CAEF,wCACE,0BAAA,CAEF,8EACE,cAAA,CAEF,sCACE,aC7DW,CD8DX,mBAAA,CAEF,qCACE,mBAAA,CACA,SAAA,CAIJ,0BACE,iBAAA",sourcesContent:["@use '../colors';\n\n.root {\n  display: flex;\n  align-items: center;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  color: colors.$basic-gray87;\n  background: colors.$basic-gray8;\n  &.focused {\n    border-color: colors.$basic-blue;\n  }\n  &.disabled {\n    color: colors.$basic-gray24;\n    border-color: colors.$basic-gray4;\n    background: colors.$basic-gray4;\n  }\n  &.failed {\n    color: colors.$additional-deep-red;\n  }\n  &.size-s {\n    --stepper-button-width: 24px;\n    width: var(--stepper-width, 122px);\n    height: 40px;\n  }\n  &.size-m {\n    --stepper-button-width: 32px;\n    width: var(--stepper-width, 160px);\n    height: 48px;\n  }\n}\n\n.input {\n  border: 0;\n  padding: 0;\n\n  // не надо делать transparent: https://stackoverflow.com/q/43483363/13166471\n  background: inherit;\n  outline: 0;\n  width: 0;\n  flex-grow: 1;\n  text-align: center;\n  color: inherit;\n  font: inherit;\n  font-weight: 600;\n  height: 100%;\n  font-size: 16px;\n  line-height: 24px;\n}\n\n.button {\n  display: flex;\n  align-items: center;\n  border: 0;\n  padding: 0;\n  background: transparent;\n  width: var(--stepper-button-width);\n  height: 100%;\n  color: colors.$basic-gray87;\n  flex-shrink: 0;\n  &:first-child {\n    justify-content: flex-end;\n  }\n  &:last-child {\n    justify-content: flex-start;\n  }\n  &:not(.hidden):not(:disabled) {\n    cursor: pointer;\n  }\n  &:disabled {\n    color: colors.$basic-gray24;\n    pointer-events: none;\n  }\n  &[hidden] {\n    pointer-events: none;\n    opacity: 0;\n  }\n}\n\n.svg {\n  fill: currentColor;\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"stepper-module__root__b85",focused:"stepper-module__focused__a08",disabled:"stepper-module__disabled__e1f",failed:"stepper-module__failed__a81","size-s":"stepper-module__size-s__d70","size-m":"stepper-module__size-m__dea",input:"stepper-module__input__be2",button:"stepper-module__button__b24",hidden:"stepper-module__hidden__b1b",svg:"stepper-module__svg__db3"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/styling/shapes.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".shapes-module__rounds-sm__all__ce1{border-radius:4px}.shapes-module__rounds-sm__t__a20{border-top-left-radius:4px;border-top-right-radius:4px}.shapes-module__rounds-sm__l__f37{border-top-left-radius:4px;border-bottom-left-radius:4px}.shapes-module__rounds-sm__b__e3b{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.shapes-module__rounds-sm__r__d31{border-top-right-radius:4px;border-bottom-right-radius:4px}.shapes-module__rounds-sm__b-l__a45{border-bottom-left-radius:4px}.shapes-module__rounds-sm__b-r__c51{border-bottom-right-radius:4px}.shapes-module__rounds-sm__t-l__b4e{border-top-left-radius:4px}.shapes-module__rounds-sm__t-r__ae1{border-top-right-radius:4px}.shapes-module__rounds-md__all__b34{border-radius:8px}.shapes-module__rounds-md__t__cf0{border-top-left-radius:8px;border-top-right-radius:8px}.shapes-module__rounds-md__l__cfe{border-top-left-radius:8px;border-bottom-left-radius:8px}.shapes-module__rounds-md__b__fd3{border-bottom-left-radius:8px;border-bottom-right-radius:8px}.shapes-module__rounds-md__r__a5d{border-top-right-radius:8px;border-bottom-right-radius:8px}.shapes-module__rounds-md__b-l__a9f{border-bottom-left-radius:8px}.shapes-module__rounds-md__b-r__d17{border-bottom-right-radius:8px}.shapes-module__rounds-md__t-l__b89{border-top-left-radius:8px}.shapes-module__rounds-md__t-r__c87{border-top-right-radius:8px}","",{version:3,sources:["webpack://./node_modules/@sima-land/ui-nucleons/styling/shapes.module.scss"],names:[],mappings:"AAME,oCACE,iBAPI,CASN,kCACE,0BAVI,CAWJ,2BAXI,CAaN,kCACE,0BAdI,CAeJ,6BAfI,CAiBN,kCACE,6BAlBI,CAmBJ,8BAnBI,CAqBN,kCACE,2BAtBI,CAuBJ,8BAvBI,CAyBN,oCACE,6BA1BI,CA4BN,oCACE,8BA7BI,CA+BN,oCACE,0BAhCI,CAkCN,oCACE,2BAnCI,CAMN,oCACE,iBAPI,CASN,kCACE,0BAVI,CAWJ,2BAXI,CAaN,kCACE,0BAdI,CAeJ,6BAfI,CAiBN,kCACE,6BAlBI,CAmBJ,8BAnBI,CAqBN,kCACE,2BAtBI,CAuBJ,8BAvBI,CAyBN,oCACE,6BA1BI,CA4BN,oCACE,8BA7BI,CA+BN,oCACE,0BAhCI,CAkCN,oCACE,2BAnCI",sourcesContent:["$sizes: (\n  sm: 4px,\n  md: 8px,\n);\n\n@each $key, $value in $sizes {\n  .rounds-#{$key}__all {\n    border-radius: $value;\n  }\n  .rounds-#{$key}__t {\n    border-top-left-radius: $value;\n    border-top-right-radius: $value;\n  }\n  .rounds-#{$key}__l {\n    border-top-left-radius: $value;\n    border-bottom-left-radius: $value;\n  }\n  .rounds-#{$key}__b {\n    border-bottom-left-radius: $value;\n    border-bottom-right-radius: $value;\n  }\n  .rounds-#{$key}__r {\n    border-top-right-radius: $value;\n    border-bottom-right-radius: $value;\n  }\n  .rounds-#{$key}__b-l {\n    border-bottom-left-radius: $value;\n  }\n  .rounds-#{$key}__b-r {\n    border-bottom-right-radius: $value;\n  }\n  .rounds-#{$key}__t-l {\n    border-top-left-radius: $value;\n  }\n  .rounds-#{$key}__t-r {\n    border-top-right-radius: $value;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"rounds-sm__all":"shapes-module__rounds-sm__all__ce1","rounds-sm__t":"shapes-module__rounds-sm__t__a20","rounds-sm__l":"shapes-module__rounds-sm__l__f37","rounds-sm__b":"shapes-module__rounds-sm__b__e3b","rounds-sm__r":"shapes-module__rounds-sm__r__d31","rounds-sm__b-l":"shapes-module__rounds-sm__b-l__a45","rounds-sm__b-r":"shapes-module__rounds-sm__b-r__c51","rounds-sm__t-l":"shapes-module__rounds-sm__t-l__b4e","rounds-sm__t-r":"shapes-module__rounds-sm__t-r__ae1","rounds-md__all":"shapes-module__rounds-md__all__b34","rounds-md__t":"shapes-module__rounds-md__t__cf0","rounds-md__l":"shapes-module__rounds-md__l__cfe","rounds-md__b":"shapes-module__rounds-md__b__fd3","rounds-md__r":"shapes-module__rounds-md__r__a5d","rounds-md__b-l":"shapes-module__rounds-md__b-l__a9f","rounds-md__b-r":"shapes-module__rounds-md__b-r__d17","rounds-md__t-l":"shapes-module__rounds-md__t-l__b89","rounds-md__t-r":"shapes-module__rounds-md__t-r__c87"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/@sima-land/ui-nucleons/plate/plate.module.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_plate_module_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/plate/plate.module.scss"),options={};options.styleTagTransform=_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_plate_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_plate_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_plate_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_plate_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0},"./node_modules/@sima-land/ui-nucleons/stepper/stepper.module.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_stepper_module_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/stepper/stepper.module.scss"),options={};options.styleTagTransform=_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_stepper_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_stepper_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_stepper_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_stepper_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0},"./node_modules/@sima-land/ui-nucleons/styling/shapes.module.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_shapes_module_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/styling/shapes.module.scss"),options={};options.styleTagTransform=_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_shapes_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_shapes_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_shapes_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_shapes_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0}}]);