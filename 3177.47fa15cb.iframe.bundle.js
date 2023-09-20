"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[3177,9586],{"./node_modules/@sima-land/ui-nucleons/stepper/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Stepper=void 0;const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),react_1=__webpack_require__("./node_modules/react/index.js"),Plus_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-quarks/icons/16x16/Stroked/Plus.js")),Minus_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-quarks/icons/16x16/Stroked/Minus.js")),stepper_module_scss_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-nucleons/stepper/stepper.module.scss")),cx=__importDefault(__webpack_require__("./node_modules/classnames/bind.js")).default.bind(stepper_module_scss_1.default);exports.Stepper=(0,react_1.forwardRef)((function Stepper({buttonClickBehavior,canAdd=!0,canSubtract=!0,className,disabled,plusDisabled=disabled,minusDisabled=disabled,readOnly,onAdd,onBlur,onChange,onFocus,onSubtract,size="m",style,value,failed,"data-testid":testId="stepper",...inputProps},forwardedRef){var _a,_b;const ref=(0,react_1.useRef)(null),[focused,setFocused]=(0,react_1.useState)(!1);(0,react_1.useImperativeHandle)(forwardedRef,(()=>ref.current));const noBlurOnMousedown=(0,react_1.useCallback)((event=>{focused&&event.target!==ref.current&&"prevent-input-blur"===buttonClickBehavior&&event.preventDefault()}),[focused,buttonClickBehavior]),rootClassName=cx("root",`size-${size}`,{disabled,focused,failed},className);return(0,jsx_runtime_1.jsxs)("div",{"data-testid":testId,style,className:rootClassName,onMouseDown:noBlurOnMousedown,children:[(0,jsx_runtime_1.jsx)("button",{tabIndex:-1,hidden:!canSubtract,disabled:null!==(_a=null!=minusDisabled?minusDisabled:disabled)&&void 0!==_a?_a:readOnly,className:cx("button"),"data-testid":"stepper:minus","aria-label":"Уменьшить",onMouseDown:noBlurOnMousedown,onClick:!canSubtract||minusDisabled||disabled||readOnly?void 0:onSubtract,children:(0,jsx_runtime_1.jsx)(Minus_1.default,{className:stepper_module_scss_1.default.svg})}),(0,jsx_runtime_1.jsx)("input",{...inputProps,ref,readOnly,"data-testid":"stepper:input",className:cx("input"),value,disabled,onChange,onFocus:e=>{setFocused(!0),null==onFocus||onFocus(e)},onBlur:e=>{setFocused(!1),null==onBlur||onBlur(e)}}),(0,jsx_runtime_1.jsx)("button",{tabIndex:-1,hidden:!canAdd,disabled:null!==(_b=null!=plusDisabled?plusDisabled:disabled)&&void 0!==_b?_b:readOnly,className:cx("button"),"data-testid":"stepper:plus","aria-label":"Увеличить",onMouseDown:noBlurOnMousedown,onClick:!canAdd||plusDisabled||disabled||readOnly?void 0:onAdd,children:(0,jsx_runtime_1.jsx)(Plus_1.default,{className:stepper_module_scss_1.default.svg})})]})}))},"./node_modules/@sima-land/ui-nucleons/text-button/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.TextButton=void 0;const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),bind_1=__importDefault(__webpack_require__("./node_modules/classnames/bind.js")),text_button_module_scss_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-nucleons/text-button/text-button.module.scss")),cx=bind_1.default.bind(text_button_module_scss_1.default);exports.TextButton=function TextButton({size="m",color="basic-blue",children,className,startIcon:StartIcon,endIcon:EndIcon,buttonRef,anchorRef,underline,disabled,iconGutter=8,"data-testid":testId="text-button",...restProps}){const rooClassName=cx("root",`color-${color}`,`size-${size}`,`icon-gutter-${iconGutter}`,underline&&"underline",disabled&&"disabled",className),content=(0,jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment,{children:[StartIcon&&(0,jsx_runtime_1.jsx)(StartIcon,{className:cx("icon-start")}),children,EndIcon&&(0,jsx_runtime_1.jsx)(EndIcon,{className:cx("icon-end")})]});let result;if("anchor"===restProps.as)result=(0,jsx_runtime_1.jsx)("a",{...restProps,ref:anchorRef,className:rooClassName,"data-testid":testId,children:content});else result=(0,jsx_runtime_1.jsx)("button",{...restProps,ref:buttonRef,className:rooClassName,disabled,"data-testid":testId,children:content});return result}},"./node_modules/@sima-land/ui-quarks/icons/16x16/Stroked/Minus.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsx)("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props,children:(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M2 8a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z",clipRule:"evenodd"})})));exports.default=ForwardRef},"./node_modules/@sima-land/ui-quarks/icons/16x16/Stroked/Plus.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsx)("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props,children:(0,jsx_runtime_1.jsx)("path",{d:"M9 3a1 1 0 0 0-2 0v4H3a1 1 0 0 0 0 2h4v4a1 1 0 1 0 2 0V9h4a1 1 0 1 0 0-2H9V3Z"})})));exports.default=ForwardRef},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/stepper/stepper.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".stepper-module__root__b85{display:flex;align-items:center;border:1px solid rgba(0,0,0,0);border-radius:4px;color:#212121;background:#ebebeb}.stepper-module__root__b85.stepper-module__focused__a08{border-color:#1f84db}.stepper-module__root__b85.stepper-module__disabled__e1f{color:#c2c2c2;border-color:#f5f5f5;background:#f5f5f5}.stepper-module__root__b85.stepper-module__failed__a81{color:#d50000}.stepper-module__root__b85.stepper-module__size-s__d70{--stepper-button-width: 24px;width:var(--stepper-width, 122px);height:40px}.stepper-module__root__b85.stepper-module__size-m__dea{--stepper-button-width: 32px;width:var(--stepper-width, 160px);height:48px}.stepper-module__input__be2{border:0;padding:0;background:inherit;outline:0;width:0;flex-grow:1;text-align:center;color:inherit;font:inherit;font-weight:600;height:100%;font-size:16px;line-height:24px}.stepper-module__button__b24{display:flex;align-items:center;border:0;padding:0;background:rgba(0,0,0,0);width:var(--stepper-button-width);height:100%;color:#212121;flex-shrink:0}.stepper-module__button__b24:first-child{justify-content:flex-end}.stepper-module__button__b24:last-child{justify-content:flex-start}.stepper-module__button__b24:not(.stepper-module__hidden__b1b):not(:disabled){cursor:pointer}.stepper-module__button__b24:disabled{color:#c2c2c2;pointer-events:none}.stepper-module__button__b24[hidden]{pointer-events:none;opacity:0}.stepper-module__svg__db3{fill:currentColor}","",{version:3,sources:["webpack://./node_modules/@sima-land/ui-nucleons/stepper/stepper.module.scss","webpack://./node_modules/@sima-land/ui-nucleons/colors.scss"],names:[],mappings:"AAEA,2BACE,YAAA,CACA,kBAAA,CACA,8BAAA,CACA,iBAAA,CACA,aCHa,CDIb,kBCGY,CDFZ,wDACE,oBCPS,CDSX,yDACE,aCJW,CDKX,oBCFU,CDGV,kBCHU,CDKZ,uDACE,aCDkB,CDGpB,uDACE,4BAAA,CACA,iCAAA,CACA,WAAA,CAEF,uDACE,4BAAA,CACA,iCAAA,CACA,WAAA,CAIJ,4BACE,QAAA,CACA,SAAA,CAGA,kBAAA,CACA,SAAA,CACA,OAAA,CACA,WAAA,CACA,iBAAA,CACA,aAAA,CACA,YAAA,CACA,eAAA,CACA,WAAA,CACA,cAAA,CACA,gBAAA,CAGF,6BACE,YAAA,CACA,kBAAA,CACA,QAAA,CACA,SAAA,CACA,wBAAA,CACA,iCAAA,CACA,WAAA,CACA,aCtDa,CDuDb,aAAA,CACA,yCACE,wBAAA,CAEF,wCACE,0BAAA,CAEF,8EACE,cAAA,CAEF,sCACE,aC7DW,CD8DX,mBAAA,CAEF,qCACE,mBAAA,CACA,SAAA,CAIJ,0BACE,iBAAA",sourcesContent:["@use '../colors';\n\n.root {\n  display: flex;\n  align-items: center;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  color: colors.$basic-gray87;\n  background: colors.$basic-gray8;\n  &.focused {\n    border-color: colors.$basic-blue;\n  }\n  &.disabled {\n    color: colors.$basic-gray24;\n    border-color: colors.$basic-gray4;\n    background: colors.$basic-gray4;\n  }\n  &.failed {\n    color: colors.$additional-deep-red;\n  }\n  &.size-s {\n    --stepper-button-width: 24px;\n    width: var(--stepper-width, 122px);\n    height: 40px;\n  }\n  &.size-m {\n    --stepper-button-width: 32px;\n    width: var(--stepper-width, 160px);\n    height: 48px;\n  }\n}\n\n.input {\n  border: 0;\n  padding: 0;\n\n  // не надо делать transparent: https://stackoverflow.com/q/43483363/13166471\n  background: inherit;\n  outline: 0;\n  width: 0;\n  flex-grow: 1;\n  text-align: center;\n  color: inherit;\n  font: inherit;\n  font-weight: 600;\n  height: 100%;\n  font-size: 16px;\n  line-height: 24px;\n}\n\n.button {\n  display: flex;\n  align-items: center;\n  border: 0;\n  padding: 0;\n  background: transparent;\n  width: var(--stepper-button-width);\n  height: 100%;\n  color: colors.$basic-gray87;\n  flex-shrink: 0;\n  &:first-child {\n    justify-content: flex-end;\n  }\n  &:last-child {\n    justify-content: flex-start;\n  }\n  &:not(.hidden):not(:disabled) {\n    cursor: pointer;\n  }\n  &:disabled {\n    color: colors.$basic-gray24;\n    pointer-events: none;\n  }\n  &[hidden] {\n    pointer-events: none;\n    opacity: 0;\n  }\n}\n\n.svg {\n  fill: currentColor;\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"stepper-module__root__b85",focused:"stepper-module__focused__a08",disabled:"stepper-module__disabled__e1f",failed:"stepper-module__failed__a81","size-s":"stepper-module__size-s__d70","size-m":"stepper-module__size-m__dea",input:"stepper-module__input__be2",button:"stepper-module__button__b24",hidden:"stepper-module__hidden__b1b",svg:"stepper-module__svg__db3"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/text-button/text-button.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".text-button-module__root__fdc{outline:none;border:none;margin:0;padding:0;width:auto;overflow:visible;background:rgba(0,0,0,0);color:inherit;font:inherit;line-height:normal;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;display:inline-flex;align-items:center;font-weight:600;white-space:nowrap;background:rgba(0,0,0,0);padding:0;border:0}.text-button-module__root__fdc::-moz-focus-inner{border:0;padding:0}.text-button-module__root__fdc:focus-visible{outline:2px solid #1f84db}.text-button-module__root__fdc,.text-button-module__root__fdc:link,.text-button-module__root__fdc:visited,.text-button-module__root__fdc:hover,.text-button-module__root__fdc:active{cursor:default;text-decoration:none;border-bottom-color:rgba(0,0,0,0)}.text-button-module__root__fdc.text-button-module__underline__f1f,.text-button-module__root__fdc:link.text-button-module__underline__f1f,.text-button-module__root__fdc:visited.text-button-module__underline__f1f,.text-button-module__root__fdc:hover.text-button-module__underline__f1f,.text-button-module__root__fdc:active.text-button-module__underline__f1f{box-shadow:inset 0 -1px 0 0 currentColor}.text-button-module__root__fdc:hover{cursor:pointer}.text-button-module__size-s__e7e{font-size:14px;line-height:20px}.text-button-module__size-m__c34{font-size:16px;line-height:24px}.text-button-module__icon-gutter-4__f5f{--text-button-icon-gutter: 4px}.text-button-module__icon-gutter-8__d93{--text-button-icon-gutter: 8px}.text-button-module__root__fdc.text-button-module__disabled__c1f{color:#c2c2c2;pointer-events:none}.text-button-module__root__fdc:not(.text-button-module__disabled__c1f).text-button-module__color-basic-blue__e6e{color:#1f84db}.text-button-module__root__fdc:not(.text-button-module__disabled__c1f).text-button-module__color-basic-blue__e6e:hover{color:#00599d}.text-button-module__root__fdc:not(.text-button-module__disabled__c1f).text-button-module__color-basic-gray87__f85{color:#212121}.text-button-module__root__fdc:not(.text-button-module__disabled__c1f).text-button-module__color-basic-gray87__f85:hover{color:#757575}.text-button-module__root__fdc:not(.text-button-module__disabled__c1f).text-button-module__color-basic-gray38__e61{color:#9e9e9e}.text-button-module__root__fdc:not(.text-button-module__disabled__c1f).text-button-module__color-basic-gray38__e61:hover{color:#757575}.text-button-module__root__fdc:not(.text-button-module__disabled__c1f).text-button-module__color-basic-white__a14{color:#fff}.text-button-module__root__fdc:not(.text-button-module__disabled__c1f).text-button-module__color-basic-white__a14:hover{color:#f5f5f5}.text-button-module__root__fdc:not(.text-button-module__disabled__c1f).text-button-module__color-additional-red__a9a{color:#fb3a2f}.text-button-module__root__fdc:not(.text-button-module__disabled__c1f).text-button-module__color-additional-red__a9a:hover{color:#d50000}.text-button-module__root__fdc:not(.text-button-module__disabled__c1f).text-button-module__color-additional-teal__f32{color:#09ab8b}.text-button-module__root__fdc:not(.text-button-module__disabled__c1f).text-button-module__color-additional-teal__f32:hover{color:#00c853}.text-button-module__icon-start__fa9,.text-button-module__icon-end__d89{flex-shrink:0;fill:currentColor}.text-button-module__icon-start__fa9{margin-right:var(--text-button-icon-gutter)}.text-button-module__icon-end__d89{margin-left:var(--text-button-icon-gutter)}","",{version:3,sources:["webpack://./node_modules/@sima-land/ui-nucleons/text-button/text-button.module.scss","webpack://./node_modules/@sima-land/ui-nucleons/utils.scss","webpack://./node_modules/@sima-land/ui-nucleons/colors.scss","webpack://./node_modules/@sima-land/ui-nucleons/link/link-util.scss"],names:[],mappings:"AAIA,+BCwCE,YAAA,CACA,WAAA,CACA,QAAA,CACA,SAAA,CACA,UAAA,CACA,gBAAA,CAEA,wBAAA,CAGA,aAAA,CACA,YAAA,CAGA,kBAAA,CAGA,8BAAA,CACA,+BAAA,CAGA,uBAAA,CD1DA,mBAAA,CACA,kBAAA,CACA,eAAA,CACA,kBAAA,CACA,wBAAA,CACA,SAAA,CACA,QAAA,CCuDA,iDACE,QAAA,CACA,SAAA,CAeF,6CAPA,yBAAA,CD7DF,qLAKE,cAAA,CACA,oBAAA,CACA,iCAAA,CACA,oWACE,wCAAA,CAIJ,qCACE,cAAA,CAGF,iCACE,cAAA,CACA,gBAAA,CAGF,iCACE,cAAA,CACA,gBAAA,CAGF,wCACE,8BAAA,CAGF,wCACE,8BAAA,CAIF,iEACE,aE7Ca,CF8Cb,mBAAA,CAGF,iHGtDI,aDDS,CCET,uHACE,aDkCiB,CFsBvB,mHGrDI,aDLW,CCMX,yHACE,aDJS,CF2Df,mHGpDI,aDNW,CCOX,yHACE,aDTS,CF+Df,kHGnDI,UDLU,CCMV,wHACE,aDTQ,CF8Dd,qHGlDI,aDNa,CCOb,2HACE,aDTgB,CF6DtB,sHGjDI,aDRc,CCSd,4HACE,aDTa,CF6DnB,wEAEE,aAAA,CACA,iBAAA,CAGF,qCACE,2CAAA,CAGF,mCACE,0CAAA",sourcesContent:["@use '../colors';\n@use '../utils';\n@use '../link/link-util';\n\n.root {\n  @include utils.reset-button;\n  @include utils.focus-visible;\n  display: inline-flex;\n  align-items: center;\n  font-weight: 600;\n  white-space: nowrap;\n  background: transparent;\n  padding: 0;\n  border: 0;\n  // ВАЖНО: не надо указывать здесь сброс margin так как его сложно перебить при сборке стилей\n}\n\n.root,\n.root:link,\n.root:visited,\n.root:hover,\n.root:active {\n  cursor: default;\n  text-decoration: none;\n  border-bottom-color: transparent;\n  &.underline {\n    box-shadow: inset 0 -1px 0 0 currentColor;\n  }\n}\n\n.root:hover {\n  cursor: pointer;\n}\n\n.size-s {\n  font-size: 14px;\n  line-height: 20px;\n}\n\n.size-m {\n  font-size: 16px;\n  line-height: 24px;\n}\n\n.icon-gutter-4 {\n  --text-button-icon-gutter: 4px;\n}\n\n.icon-gutter-8 {\n  --text-button-icon-gutter: 8px;\n}\n\n// ниже двойные классы для высокой специфичности в монолите\n.root.disabled {\n  color: colors.$basic-gray24;\n  pointer-events: none;\n}\n\n.root:not(.disabled).color-basic-blue {\n  @include link-util.color('basic-blue');\n}\n\n.root:not(.disabled).color-basic-gray87 {\n  @include link-util.color('basic-gray87');\n}\n\n.root:not(.disabled).color-basic-gray38 {\n  @include link-util.color('basic-gray38');\n}\n\n.root:not(.disabled).color-basic-white {\n  @include link-util.color('basic-white');\n}\n\n.root:not(.disabled).color-additional-red {\n  @include link-util.color('additional-red');\n}\n\n.root:not(.disabled).color-additional-teal {\n  @include link-util.color('additional-teal');\n}\n\n// иконки\n.icon-start,\n.icon-end {\n  flex-shrink: 0;\n  fill: currentColor;\n}\n\n.icon-start {\n  margin-right: var(--text-button-icon-gutter);\n}\n\n.icon-end {\n  margin-left: var(--text-button-icon-gutter);\n}\n","@use './colors';\n\n/**\n * Скрывает полосы прокрутки у элемента.\n */\n@mixin hidden-scrollbars {\n  scrollbar-width: none; // Firefox\n  overflow: -moz-scrollbars-none; // old Firefox\n  -ms-overflow-style: none; // IE, old Edge\n  &::-webkit-scrollbar {\n    display: none; // Chrome, Safari, Opera\n  }\n}\n\n/**\n * стилизует полосы прокрутки по дизайн-гайдам с ограничениями:\n * - в браузерах на основе webkit/blink (Chrome, Opera, Safari) полоса прокрутки не накладывается поверх контента\n * - в браузерах которые поддерживают только стандартизированный способ стилизации (Firefox) определяет только цвет ползунка\n */\n@mixin semi-stylized-scrollbars($bg-color: #fff) {\n  // firefox\n  scrollbar-width: thin;\n  scrollbar-color: colors.$basic-gray12 transparent;\n\n  // webkit\n  &::-webkit-scrollbar {\n    width: 12px;\n  }\n  &::-webkit-scrollbar-track {\n    background: $bg-color;\n    border-radius: 4px;\n  }\n  &::-webkit-scrollbar-thumb {\n    border: 4px solid $bg-color;\n    border-radius: 12px;\n    background: colors.$basic-gray12;\n  }\n}\n\n/**\n * Полный сброс стилей button до состояния сравнимого с div.\n * взято отсюда: https://gist.github.com/MoOx/9137295\n */\n@mixin reset-button {\n  outline: none;\n  border: none;\n  margin: 0;\n  padding: 0;\n  width: auto;\n  overflow: visible;\n\n  background: transparent;\n\n  /* inherit font & color from ancestor */\n  color: inherit;\n  font: inherit;\n\n  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */\n  line-height: normal;\n\n  /* Corrects font smoothing for webkit */\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n\n  /* Corrects inability to style clickable `input` types in iOS */\n  -webkit-appearance: none;\n\n  /* Remove excess padding and border in Firefox 4+ */\n  &::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n  }\n}\n\n/**\n * Добавляет стандартную визуальную подсветку состояния focus-visible.\n */\n@mixin focus-visible-style() {\n  outline: 2px solid colors.$basic-blue;\n}\n\n/**\n * Формирует стандартную визуальную подсветку для состояния focus-visible.\n */\n@mixin focus-visible() {\n  &:focus-visible {\n    @include focus-visible-style;\n  }\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n","@use '../colors';\n\n@mixin color($key) {\n  @if $key == 'basic-blue' {\n    color: colors.$basic-blue;\n    &:hover {\n      color: colors.$additional-deep-blue;\n    }\n  } @else if $key == 'basic-gray87' {\n    color: colors.$basic-gray87;\n    &:hover {\n      color: colors.$basic-gray54;\n    }\n  } @else if $key == 'basic-gray38' {\n    color: colors.$basic-gray38;\n    &:hover {\n      color: colors.$basic-gray54;\n    }\n  } @else if $key == 'basic-white' {\n    color: colors.$basic-white;\n    &:hover {\n      color: colors.$basic-gray4;\n    }\n  } @else if $key == 'additional-red' {\n    color: colors.$additional-red;\n    &:hover {\n      color: colors.$additional-deep-red;\n    }\n  } @else if $key == 'additional-teal' {\n    color: colors.$additional-teal;\n    &:hover {\n      color: colors.$additional-green;\n    }\n  } @else {\n    @warn '[link-color] No such color `#{$key}`.';\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"text-button-module__root__fdc",underline:"text-button-module__underline__f1f","size-s":"text-button-module__size-s__e7e","size-m":"text-button-module__size-m__c34","icon-gutter-4":"text-button-module__icon-gutter-4__f5f","icon-gutter-8":"text-button-module__icon-gutter-8__d93",disabled:"text-button-module__disabled__c1f","color-basic-blue":"text-button-module__color-basic-blue__e6e","color-basic-gray87":"text-button-module__color-basic-gray87__f85","color-basic-gray38":"text-button-module__color-basic-gray38__e61","color-basic-white":"text-button-module__color-basic-white__a14","color-additional-red":"text-button-module__color-additional-red__a9a","color-additional-teal":"text-button-module__color-additional-teal__f32","icon-start":"text-button-module__icon-start__fa9","icon-end":"text-button-module__icon-end__d89"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/@sima-land/ui-nucleons/stepper/stepper.module.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_stepper_module_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/stepper/stepper.module.scss"),options={};options.styleTagTransform=_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_stepper_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_stepper_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_stepper_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_stepper_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0},"./node_modules/@sima-land/ui-nucleons/text-button/text-button.module.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_text_button_module_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/text-button/text-button.module.scss"),options={};options.styleTagTransform=_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_text_button_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_text_button_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_text_button_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_text_button_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0}}]);