"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[9058],{"./node_modules/@sima-land/ui-nucleons/context/viewport.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.ViewportContext=void 0;const react_1=__webpack_require__("./node_modules/react/index.js");exports.ViewportContext=(0,react_1.createContext)((0,react_1.createRef)())},"./node_modules/@sima-land/ui-nucleons/modal/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Modal=void 0;const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),utils_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/modal/utils.js"),slots_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/modal/slots.js"),modal_overlay_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/modal-overlay/index.js"),plate_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/plate/index.js"),define_slots_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/helpers/define-slots.js"),utils_2=__webpack_require__("./node_modules/@sima-land/ui-nucleons/modal-overlay/utils.js"),bind_1=__importDefault(__webpack_require__("./node_modules/classnames/bind.js")),modal_module_scss_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-nucleons/modal/modal.module.scss")),cx=bind_1.default.bind(modal_module_scss_1.default);function Modal({children,height,onClose,scrollDisableOptions,size="m",footerStub="fullscreen"!==size,withScrollDisable=!1,"data-testid":testId="modal"}){const overlayClickBind=(0,utils_2.useExactClick)(onClose),fullscreen="fullscreen"===size,{header,content,footer,overlap}=(0,define_slots_1.defineSlots)(children,{header:slots_1.ModalHeader,content:slots_1.ModalBody,footer:slots_1.ModalFooter,overlap:slots_1.ModalOverlap}),style={"--modal-height":"number"==typeof height&&Number.isFinite(height)?`${Math.min(696,height)}px`:void 0};return(0,jsx_runtime_1.jsx)(modal_overlay_1.ModalOverlay,{className:cx("overlay"),...overlayClickBind,children:(0,jsx_runtime_1.jsx)(plate_1.Plate,{rounds:null,shadow:fullscreen?null:"z4",style,className:cx("modal",`size-${size}`,header&&"has-header",footer&&"has-footer"),"data-testid":testId,children:(0,jsx_runtime_1.jsxs)(utils_1.ModalContext.Provider,{value:{withScrollDisable,scrollDisableOptions,topBarSize:"unset",bottomBarSize:"unset"},children:[header,content,footer,!footer&&footerStub&&(0,jsx_runtime_1.jsx)("div",{className:cx("footer-stub")}),overlap&&(0,jsx_runtime_1.jsx)("div",{className:cx("overlap-content"),"data-testid":"modal:overlap",children:overlap})]})})})}exports.Modal=Modal,Modal.Header=slots_1.ModalHeader,Modal.Body=slots_1.ModalBody,Modal.Footer=slots_1.ModalFooter,Modal.Overlap=slots_1.ModalOverlap},"./node_modules/@sima-land/ui-nucleons/modal/slots.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ModalOverlap=exports.ModalFooter=exports.ModalBody=exports.ModalHeader=void 0;const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),react_1=__webpack_require__("./node_modules/react/index.js"),top_bar_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/top-bar/index.js"),utils_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/top-bar/utils.js"),bottom_bar_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/bottom-bar/index.js"),custom_scrollbar_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/_internal/custom-scrollbar/index.js"),viewport_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/context/viewport.js"),utils_2=__webpack_require__("./node_modules/@sima-land/ui-nucleons/modal/utils.js"),page_scroll_lock_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/_internal/page-scroll-lock/index.js"),bind_1=__importDefault(__webpack_require__("./node_modules/classnames/bind.js")),modal_module_scss_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-nucleons/modal/modal.module.scss")),cx=bind_1.default.bind(modal_module_scss_1.default);exports.ModalHeader=function ModalHeader({className,onBack,onClose,buttons,...rest}){const{topBarSize}=(0,react_1.useContext)(utils_2.ModalContext);return(0,jsx_runtime_1.jsx)(top_bar_1.TopBar,{...rest,size:topBarSize,buttons:(0,utils_1.navigationButtons)({buttons,onBack,onClose}),className:cx("header",className)})},exports.ModalBody=function ModalBody({children,onFullScroll,fullScrollThreshold}){const viewportRef=(0,react_1.useRef)(null),scrollableRef=(0,react_1.useRef)(null),osComponentRef=(0,react_1.useRef)(null),{withScrollDisable,scrollDisableOptions}=(0,react_1.useContext)(utils_2.ModalContext);return(0,react_1.useImperativeHandle)(scrollableRef,(()=>(0,custom_scrollbar_1.getViewport)(osComponentRef.current))),(0,react_1.useImperativeHandle)(viewportRef,(()=>(0,custom_scrollbar_1.getViewport)(osComponentRef.current))),(0,page_scroll_lock_1.usePageScrollLock)(scrollableRef,{lockEnabled:withScrollDisable,...scrollDisableOptions}),(0,jsx_runtime_1.jsx)(viewport_1.ViewportContext.Provider,{value:viewportRef,children:(0,jsx_runtime_1.jsx)(custom_scrollbar_1.CustomScrollbar,{inFlexBox:!0,osComponentRef,className:modal_module_scss_1.default.body,overflow:{x:"hidden",y:"scroll"},onFullScroll,fullScrollThreshold,children})})},exports.ModalFooter=function ModalFooter({className,...rest}){const{bottomBarSize}=(0,react_1.useContext)(utils_2.ModalContext);return(0,jsx_runtime_1.jsx)(bottom_bar_1.BottomBar,{...rest,size:bottomBarSize,className:cx("footer",className)})},exports.ModalOverlap=function ModalOverlap({children}){return(0,jsx_runtime_1.jsx)(jsx_runtime_1.Fragment,{children})}},"./node_modules/@sima-land/ui-nucleons/modal/utils.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.ModalContext=void 0;const react_1=__webpack_require__("./node_modules/react/index.js");exports.ModalContext=(0,react_1.createContext)({})},"./node_modules/@sima-land/ui-nucleons/rating/index.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Rating=void 0;const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),utils_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/rating/utils.js"),bind_1=__importDefault(__webpack_require__("./node_modules/classnames/bind.js")),Star_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-quarks/icons/16x16/Filled/Star.js")),rating_module_scss_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-nucleons/rating/rating.module.scss")),cx=bind_1.default.bind(rating_module_scss_1.default);exports.Rating=({size="s",value,className,"data-testid":testId="rating",...restProps})=>(0,jsx_runtime_1.jsx)("div",{...restProps,className:cx("root",className),"data-testid":testId,"data-rating":value,children:(0,utils_1.getStars)(Math.min(5,value),5).map(((type,index)=>(0,jsx_runtime_1.jsx)(Star,{type,size},index)))});const Star=({type,size})=>(0,jsx_runtime_1.jsxs)("div",{className:cx("star",`size-${size}`),children:["empty"===type&&(0,jsx_runtime_1.jsx)(Star_1.default,{className:cx("svg")}),"half"===type&&(0,jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment,{children:[(0,jsx_runtime_1.jsx)(Star_1.default,{className:cx("svg")}),(0,jsx_runtime_1.jsx)(Star_1.default,{className:cx("svg","half"),preserveAspectRatio:"xMinYMin slice"})]}),"full"===type&&(0,jsx_runtime_1.jsx)(Star_1.default,{className:cx("svg","full")})]})},"./node_modules/@sima-land/ui-nucleons/rating/utils.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.getStars=void 0;const roundHalf=value=>Math.round(2*value)/2;exports.getStars=(value,count)=>[...Array(count).keys()].reduce((acc=>(acc.total>=1?acc.stars.push("full"):acc.total>0?acc.stars.push("half"):acc.stars.push("empty"),acc.total--,acc)),{total:roundHalf(value),stars:[]}).stars},"./node_modules/@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/TurnLeft.js":(__unused_webpack_module,exports,__webpack_require__)=>{const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsxs)("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props,children:[(0,jsx_runtime_1.jsx)("g",{clipPath:"url(#prefix__clip0_5876_1441)",children:(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M12 1a1 1 0 0 0-1-1H5a1 1 0 0 0-.928 1.371l2 5a1 1 0 0 0 1.856-.742L6.78 2.757C8.743 3.88 10 5.839 10 8c0 2.829-2.153 5.311-5.226 6.026a1 1 0 0 0 .452 1.948C9.054 15.084 12 11.907 12 8c0-2.393-1.106-4.512-2.842-6H11a1 1 0 0 0 1-1Z",clipRule:"evenodd"})}),(0,jsx_runtime_1.jsx)("defs",{children:(0,jsx_runtime_1.jsx)("clipPath",{id:"prefix__clip0_5876_1441",children:(0,jsx_runtime_1.jsx)("path",{d:"M0 0h16v16H0z"})})})]})));exports.Z=ForwardRef},"./node_modules/@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/TurnRight.js":(__unused_webpack_module,exports,__webpack_require__)=>{const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsxs)("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props,children:[(0,jsx_runtime_1.jsx)("g",{clipPath:"url(#prefix__clip0_5876_1440)",children:(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M4 1a1 1 0 0 1 1-1h6a1 1 0 0 1 .928 1.371l-2 5a1 1 0 0 1-1.856-.742L9.22 2.757C7.257 3.88 6 5.839 6 8c0 2.829 2.153 5.311 5.226 6.026a1 1 0 0 1-.453 1.948C6.947 15.084 4 11.907 4 8c0-2.393 1.106-4.512 2.842-6H5a1 1 0 0 1-1-1Z",clipRule:"evenodd"})}),(0,jsx_runtime_1.jsx)("defs",{children:(0,jsx_runtime_1.jsx)("clipPath",{id:"prefix__clip0_5876_1440",children:(0,jsx_runtime_1.jsx)("path",{d:"M0 0h16v16H0z"})})})]})));exports.Z=ForwardRef},"./node_modules/@sima-land/ui-quarks/icons/24x24/Filled/Play.js":(__unused_webpack_module,exports,__webpack_require__)=>{const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",ref,...props,children:(0,jsx_runtime_1.jsx)("path",{d:"M5 19.29V4.71a1 1 0 0 1 1.49-.872l12.96 7.29a1 1 0 0 1 0 1.744l-12.96 7.29A1 1 0 0 1 5 19.29Z"})})));exports.Z=ForwardRef},"./node_modules/@sima-land/ui-quarks/icons/40x40/Filled/Pause.js":(__unused_webpack_module,exports,__webpack_require__)=>{const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsx)("svg",{width:40,height:40,viewBox:"0 0 40 40",ref,...props,children:(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M8 9a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1H8Zm17 0a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1h-7Z",clipRule:"evenodd"})})));exports.Z=ForwardRef},"./node_modules/@sima-land/ui-quarks/icons/40x40/Filled/Round360.js":(__unused_webpack_module,exports,__webpack_require__)=>{const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsx)("svg",{width:40,height:40,viewBox:"0 0 40 40",ref,...props,children:(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M30.63 17.879c.574-.839.861-2.13.861-3.876 0-1.686-.296-2.967-.889-3.842-.587-.875-1.458-1.312-2.61-1.312-1.186 0-2.063.419-2.633 1.257-.57.834-.854 2.133-.854 3.897 0 1.69.292 2.969.875 3.835.588.866 1.458 1.299 2.611 1.299 1.19 0 2.07-.42 2.639-1.258Zm-3.712-1.237c-.21-.534-.314-1.413-.314-2.64 0-1.225.107-2.104.32-2.638.215-.538.57-.806 1.067-.806.488 0 .841.268 1.06.806.223.534.335 1.413.335 2.639 0 1.212-.11 2.087-.328 2.625-.22.538-.575.807-1.067.807-.501 0-.859-.265-1.073-.793Zm-11.758-5.4c0 .624-.189 1.154-.567 1.592-.379.438-.91.738-1.593.902v.041c.807.1 1.417.347 1.832.739.415.387.622.911.622 1.572 0 .961-.349 1.711-1.046 2.249-.697.533-1.693.8-2.987.8-1.085 0-2.046-.18-2.885-.54v-1.798c.388.196.814.355 1.278.478.465.123.926.185 1.381.185.698 0 1.213-.119 1.545-.356.333-.237.5-.617.5-1.141 0-.47-.192-.802-.575-.998-.383-.196-.993-.294-1.832-.294h-.759v-1.62h.773c.774 0 1.34-.1 1.695-.301.36-.205.54-.554.54-1.046 0-.756-.474-1.135-1.422-1.135-.328 0-.663.055-1.005.164-.337.11-.713.299-1.128.568L8.55 9.847c.911-.657 1.998-.985 3.26-.985 1.035 0 1.85.21 2.448.63.601.418.902 1.002.902 1.75Zm1.333 3.513c0-1.978.417-3.45 1.251-4.416.839-.966 2.092-1.45 3.76-1.45.57 0 1.016.035 1.34.103v1.689a5.472 5.472 0 0 0-1.203-.137c-.725 0-1.317.11-1.778.328a2.21 2.21 0 0 0-1.025.97c-.228.43-.362 1.038-.403 1.826h.088c.452-.775 1.174-1.162 2.167-1.162.894 0 1.593.28 2.1.84.505.561.758 1.336.758 2.325 0 1.066-.3 1.912-.902 2.536-.602.62-1.436.93-2.502.93-.739 0-1.384-.171-1.935-.513-.547-.342-.97-.84-1.271-1.497-.297-.656-.445-1.447-.445-2.372Zm3.61 2.693c.45 0 .797-.15 1.039-.45.241-.306.362-.74.362-1.3 0-.487-.114-.87-.342-1.148-.223-.283-.563-.424-1.018-.424-.429 0-.796.139-1.101.417-.3.278-.451.602-.451.97 0 .543.141 1.001.424 1.375.287.373.649.56 1.087.56Zm14.923-3.141a1 1 0 1 0-1.052 1.701c1.155.713 1.902 1.45 2.362 2.2.456.74.664 1.543.664 2.45 0 1.704-1.251 3.48-3.813 4.979-2.526 1.479-6.123 2.552-10.27 2.9a1 1 0 0 0 .167 1.992c4.365-.366 8.268-1.5 11.114-3.166 2.81-1.645 4.802-3.95 4.802-6.706 0-1.236-.291-2.41-.96-3.498-.664-1.079-1.667-2.02-3.014-2.852Zm-29 2.044a1 1 0 1 0-1.052-1.702c-1.31.81-2.316 1.652-2.99 2.644C1.296 18.308 1 19.413 1 20.657c0 2.755 1.992 5.06 4.802 6.706 2.332 1.364 5.373 2.373 8.797 2.894l-1.746 1.48a1 1 0 0 0 1.294 1.526l3.5-2.967a1 1 0 0 0 .115-1.41l-3-3.533a1 1 0 0 0-1.524 1.294l1.343 1.583c-3.09-.503-5.765-1.42-7.768-2.593C4.25 24.137 3 22.362 3 20.657c0-.899.204-1.6.64-2.24.45-.666 1.195-1.33 2.386-2.066Z",clipRule:"evenodd"})})));exports.Z=ForwardRef},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/modal/modal.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".modal-module__overlay__e05{display:flex;align-items:center;justify-content:center}.modal-module__modal__fc2{flex-shrink:0;position:relative;margin:auto;display:flex;flex-direction:column;z-index:1;background-color:#fff}@media(max-width: 1023px){.modal-module__modal__fc2{width:100%;height:100%;max-height:100%}.modal-module__modal__fc2.modal-module__has-header__c71{--modal-header-height: 64px}.modal-module__modal__fc2.modal-module__has-header__c71 .modal-module__header__bce{--top-bar-height: 64px;--top-bar-title-size: 16px;--top-bar-title-height: 24px;--top-bar-gutter: 24px;--top-bar-icon-button-width: 60px}.modal-module__modal__fc2.modal-module__has-footer__aa4{--modal-footer-height: 72px}.modal-module__modal__fc2.modal-module__has-footer__aa4 .modal-module__footer__b68{--bottom-bar-height: 72px;--clean-group-height: 72px}}@media(min-width: 1024px){.modal-module__modal__fc2:not(.modal-module__size-fullscreen__d2a){height:var(--modal-height, auto);max-height:min(696px, calc(100vh - 32px));min-height:232px;border-radius:8px}.modal-module__modal__fc2:not(.modal-module__size-fullscreen__d2a).modal-module__has-header__c71{--modal-header-height: 64px}.modal-module__modal__fc2:not(.modal-module__size-fullscreen__d2a).modal-module__has-header__c71 .modal-module__header__bce{--top-bar-height: 64px;--top-bar-title-size: 16px;--top-bar-title-height: 24px;--top-bar-gutter: 24px;--top-bar-icon-button-width: 60px}.modal-module__modal__fc2:not(.modal-module__size-fullscreen__d2a).modal-module__has-footer__aa4{--modal-footer-height: 72px}.modal-module__modal__fc2:not(.modal-module__size-fullscreen__d2a).modal-module__has-footer__aa4 .modal-module__footer__b68{--bottom-bar-height: 72px;--clean-group-height: 72px}.modal-module__modal__fc2:not(.modal-module__size-fullscreen__d2a).modal-module__size-s__f90{width:480px}.modal-module__modal__fc2:not(.modal-module__size-fullscreen__d2a).modal-module__size-m__f93{width:640px}.modal-module__modal__fc2:not(.modal-module__size-fullscreen__d2a).modal-module__size-l__a09{width:768px}.modal-module__modal__fc2:not(.modal-module__size-fullscreen__d2a).modal-module__size-xl__f76{width:960px}.modal-module__modal__fc2.modal-module__size-fullscreen__d2a{width:100%;height:100%;max-height:100%}.modal-module__modal__fc2.modal-module__size-fullscreen__d2a.modal-module__has-header__c71{--modal-header-height: 80px}.modal-module__modal__fc2.modal-module__size-fullscreen__d2a.modal-module__has-header__c71 .modal-module__header__bce{--top-bar-height: 80px;--top-bar-title-size: 16px;--top-bar-title-height: 24px;--top-bar-gutter: 40px;--top-bar-icon-button-width: 76px;--top-bar-title-only-size: 20px;--top-bar-title-only-height: 28px}.modal-module__modal__fc2.modal-module__size-fullscreen__d2a.modal-module__has-footer__aa4{--modal-footer-height: 80px}.modal-module__modal__fc2.modal-module__size-fullscreen__d2a.modal-module__has-footer__aa4 .modal-module__footer__b68{--bottom-bar-height: 80px;--clean-group-height: 80px}}.modal-module__header__bce{border-radius:8px 8px 0 0;flex-shrink:0}.modal-module__body__df0{flex-grow:1}.modal-module__footer__b68{flex-shrink:0;border-radius:0 0 8px 8px;overflow:hidden}.modal-module__footer-stub__e91{flex-shrink:0;border-radius:0 0 8px 8px;height:16px;background:#fff}.modal-module__overlap-content__fc1{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.modal-module__overlap-content__fc1 *{pointer-events:auto}","",{version:3,sources:["webpack://./node_modules/@sima-land/ui-nucleons/modal/modal.module.scss","webpack://./node_modules/@sima-land/ui-nucleons/breakpoints.scss","webpack://./node_modules/@sima-land/ui-nucleons/top-bar/top-bar-util.scss","webpack://./node_modules/@sima-land/ui-nucleons/bottom-bar/bottom-bar-util.scss","webpack://./node_modules/@sima-land/ui-nucleons/clean-buttons/clean-buttons-util.scss"],names:[],mappings:"AAwDA,4BACE,YAAA,CACA,kBAAA,CACA,sBAAA,CAGF,0BACE,aAAA,CACA,iBAAA,CACA,WAAA,CACA,YAAA,CACA,qBAAA,CACA,SAAA,CACA,qBAAA,CCxCE,0BDiCJ,0BA/CE,UAAA,CACA,WAAA,CACA,eAAA,CAIA,wDACE,2BAAA,CACA,mFEVF,sBAAA,CACA,0BAAA,CACA,4BAAA,CACA,sBAAA,CACA,iCAAA,CFsBA,wDACE,2BAAA,CACA,mFG7BF,yBAAA,CCHA,0BAAA,CAAA,CHUE,0BDyDA,mEApEF,gCAAA,CACA,yCAAA,CACA,gBAAA,CACA,iBAAA,CAUA,iGACE,2BAAA,CACA,4HEVF,sBAAA,CACA,0BAAA,CACA,4BAAA,CACA,sBAAA,CACA,iCAAA,CFsBA,iGACE,2BAAA,CACA,4HG7BF,yBAAA,CCHA,0BAAA,CJuEI,6FACE,WAAA,CAEF,6FACE,WAAA,CAEF,6FACE,WAAA,CAEF,8FACE,WAAA,CAGJ,6DA9EF,UAAA,CACA,WAAA,CACA,eAAA,CAaA,2FACE,2BAAA,CACA,sHEXF,sBAAA,CACA,0BAAA,CACA,4BAAA,CACA,sBAAA,CACA,iCAAA,CACA,+BAAA,CACA,iCAAA,CFqBA,2FACE,2BAAA,CACA,sHGjCF,yBAAA,CCJA,0BAAA,CAAA,CJwFF,2BACE,yBAAA,CACA,aAAA,CAGF,yBACE,WAAA,CAGF,2BACE,aAAA,CACA,yBAAA,CACA,eAAA,CAGF,gCACE,aAAA,CACA,yBAAA,CACA,WAAA,CACA,eAAA,CAGF,oCACE,iBAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,mBAAA,CACA,sCACE,mBAAA",sourcesContent:["@use '../colors';\n@use '../breakpoints';\n@use '../top-bar/top-bar-util';\n@use '../bottom-bar/bottom-bar-util';\n\n$modal-max-height: 696px;\n\n@mixin regular-modal {\n  height: var(--modal-height, auto);\n  max-height: min(#{$modal-max-height}, calc(100vh - 32px));\n  min-height: 232px;\n  border-radius: 8px;\n}\n\n@mixin fullscreen-modal {\n  width: 100%;\n  height: 100%;\n  max-height: 100%;\n}\n\n@mixin medium-header {\n  &.has-header {\n    --modal-header-height: #{top-bar-util.$size-m-height};\n    .header {\n      @include top-bar-util.size-m;\n    }\n  }\n}\n\n@mixin large-header {\n  &.has-header {\n    --modal-header-height: #{top-bar-util.$size-xl-height};\n    .header {\n      @include top-bar-util.size-xl;\n    }\n  }\n}\n\n@mixin medium-footer {\n  &.has-footer {\n    --modal-footer-height: #{bottom-bar-util.$size-m-height};\n    .footer {\n      @include bottom-bar-util.size-m;\n    }\n  }\n}\n\n@mixin large-footer {\n  &.has-footer {\n    --modal-footer-height: #{bottom-bar-util.$size-l-height};\n    .footer {\n      @include bottom-bar-util.size-l;\n    }\n  }\n}\n\n.overlay {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.modal {\n  flex-shrink: 0;\n  position: relative; // для overlap\n  margin: auto; // для корректной прокрутки во flex-контейнере\n  display: flex;\n  flex-direction: column;\n  z-index: 1;\n  background-color: #fff;\n  @include breakpoints.down('xs') {\n    @include fullscreen-modal;\n    @include medium-header;\n    @include medium-footer;\n  }\n  @include breakpoints.up('xs') {\n    &:not(.size-fullscreen) {\n      @include regular-modal;\n      @include medium-header;\n      @include medium-footer;\n      &.size-s {\n        width: 480px;\n      }\n      &.size-m {\n        width: 640px;\n      }\n      &.size-l {\n        width: 768px;\n      }\n      &.size-xl {\n        width: 960px;\n      }\n    }\n    &.size-fullscreen {\n      @include fullscreen-modal;\n      @include large-header;\n      @include large-footer;\n    }\n  }\n}\n\n.header {\n  border-radius: 8px 8px 0 0;\n  flex-shrink: 0;\n}\n\n.body {\n  flex-grow: 1;\n}\n\n.footer {\n  flex-shrink: 0;\n  border-radius: 0 0 8px 8px;\n  overflow: hidden;\n}\n\n.footer-stub {\n  flex-shrink: 0;\n  border-radius: 0 0 8px 8px;\n  height: 16px;\n  background: #fff;\n}\n\n.overlap-content {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  * {\n    pointer-events: auto;\n  }\n}\n",'$map: (\n  mxs: 0,\n  ms: 480px,\n  mm: 720px,\n  ml: 840px,\n  xs: 1024px,\n  s: 1280px,\n  m: 1440px,\n  l: 1600px,\n  xl: 1920px,\n) !default;\n\n/**\n * ВАЖНО: здесь должны быть только утилиты позволяющие применить стили ">=" либо "<" начала диапазона (breakpoint range).\n * Не должно возникать ситуаций в которых нужно применить стили "<=" или ">" начала диапазона.\n */\n\n@mixin greaterThanOrEqual($breakpoint) {\n  @if map-has-key($map, $breakpoint) {\n    @media (min-width: map-get($map, $breakpoint)) {\n      @content;\n    }\n  } @else {\n    @warn \'No such breakpoint `#{$breakpoint}`. Available values: #{map-keys($map)}.\';\n  }\n}\n\n@mixin lessThan($breakpoint) {\n  @if map-has-key($map, $breakpoint) {\n    @media (max-width: (map-get($map, $breakpoint) - 1px)) {\n      @content;\n    }\n  } @else {\n    @warn \'No such breakpoint `#{$breakpoint}`. Available values: #{map-keys($map)}.\';\n  }\n}\n\n@mixin gte($args...) {\n  @include greaterThanOrEqual($args...) {\n    @content;\n  }\n}\n\n@mixin lt($args...) {\n  @include lessThan($args...) {\n    @content;\n  }\n}\n\n/** @deprecated */\n@mixin up($args...) {\n  @include greaterThanOrEqual($args...) {\n    @content;\n  }\n}\n\n/** @deprecated */\n@mixin down($args...) {\n  @include lessThan($args...) {\n    @content;\n  }\n}\n',"$size-s-height: 56px;\n$size-m-height: 64px;\n$size-xl-height: 80px;\n\n@mixin size-s {\n  --top-bar-height: #{$size-s-height};\n  --top-bar-title-size: 16px;\n  --top-bar-title-height: 24px;\n  --top-bar-gutter: 16px;\n  --top-bar-icon-button-width: 52px;\n}\n\n@mixin size-m {\n  --top-bar-height: #{$size-m-height};\n  --top-bar-title-size: 16px;\n  --top-bar-title-height: 24px;\n  --top-bar-gutter: 24px;\n  --top-bar-icon-button-width: 60px;\n}\n\n@mixin size-xl {\n  --top-bar-height: #{$size-xl-height};\n  --top-bar-title-size: 16px;\n  --top-bar-title-height: 24px;\n  --top-bar-gutter: 40px;\n  --top-bar-icon-button-width: 76px;\n  --top-bar-title-only-size: 20px;\n  --top-bar-title-only-height: 28px;\n}\n","@use '../clean-buttons/clean-buttons-util';\n\n$size-s-height: 64px;\n$size-m-height: 72px;\n$size-l-height: 80px;\n\n@mixin size-s {\n  --bottom-bar-height: #{$size-s-height};\n  @include clean-buttons-util.size-s;\n}\n\n@mixin size-m {\n  --bottom-bar-height: #{$size-m-height};\n  @include clean-buttons-util.size-m;\n}\n\n@mixin size-l {\n  --bottom-bar-height: #{$size-l-height};\n  @include clean-buttons-util.size-l;\n}\n","$size-s-height: 64px;\n$size-m-height: 72px;\n$size-l-height: 80px;\n\n@mixin size-s {\n  --clean-group-height: #{$size-s-height};\n}\n\n@mixin size-m {\n  --clean-group-height: #{$size-m-height};\n}\n\n@mixin size-l {\n  --clean-group-height: #{$size-l-height};\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={overlay:"modal-module__overlay__e05",modal:"modal-module__modal__fc2","has-header":"modal-module__has-header__c71",header:"modal-module__header__bce","has-footer":"modal-module__has-footer__aa4",footer:"modal-module__footer__b68","size-fullscreen":"modal-module__size-fullscreen__d2a","size-s":"modal-module__size-s__f90","size-m":"modal-module__size-m__f93","size-l":"modal-module__size-l__a09","size-xl":"modal-module__size-xl__f76",body:"modal-module__body__df0","footer-stub":"modal-module__footer-stub__e91","overlap-content":"modal-module__overlap-content__fc1"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/rating/rating.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".rating-module__root__f4e{display:flex;flex-wrap:nowrap}.rating-module__star__df9{position:relative}.rating-module__star__df9.rating-module__size-s__bc7{width:16px;height:16px}.rating-module__star__df9.rating-module__size-s__bc7+.rating-module__star__df9.rating-module__size-s__bc7{margin-left:4px}.rating-module__star__df9.rating-module__size-m__b38{width:24px;height:24px}.rating-module__star__df9.rating-module__size-m__b38+.rating-module__star__df9.rating-module__size-m__b38{margin-left:6px}.rating-module__svg__f22{display:block;position:absolute;top:0;left:0;width:100%;height:100%;fill:#e0e0e0}.rating-module__svg__f22.rating-module__half__c24{width:50%;fill:#ffab00}.rating-module__svg__f22.rating-module__full__d85{fill:#ffab00}","",{version:3,sources:["webpack://./node_modules/@sima-land/ui-nucleons/rating/rating.module.scss","webpack://./node_modules/@sima-land/ui-nucleons/colors.scss"],names:[],mappings:"AAEA,0BACE,YAAA,CACA,gBAAA,CAGF,0BACE,iBAAA,CACA,qDACE,UAAA,CACA,WAAA,CACA,0GACE,eAAA,CAGJ,qDACE,UAAA,CACA,WAAA,CACA,0GACE,eAAA,CAKN,yBACE,aAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,YCtBa,CDuBb,kDACE,SAAA,CACA,YCDe,CDGjB,kDACE,YCJe",sourcesContent:["@use '../colors';\n\n.root {\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.star {\n  position: relative;\n  &.size-s {\n    width: 16px;\n    height: 16px;\n    & + & {\n      margin-left: 4px;\n    }\n  }\n  &.size-m {\n    width: 24px;\n    height: 24px;\n    & + & {\n      margin-left: 6px;\n    }\n  }\n}\n\n.svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  fill: colors.$basic-gray12;\n  &.half {\n    width: 50%;\n    fill: colors.$additional-amber;\n  }\n  &.full {\n    fill: colors.$additional-amber;\n  }\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"rating-module__root__f4e",star:"rating-module__star__df9","size-s":"rating-module__size-s__bc7","size-m":"rating-module__size-m__b38",svg:"rating-module__svg__f22",half:"rating-module__half__c24",full:"rating-module__full__d85"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/@sima-land/ui-nucleons/modal/modal.module.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_modal_module_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/modal/modal.module.scss"),options={};options.styleTagTransform=_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_modal_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_modal_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_modal_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_modal_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0},"./node_modules/@sima-land/ui-nucleons/rating/rating.module.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_rating_module_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/rating/rating.module.scss"),options={};options.styleTagTransform=_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_rating_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_rating_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_rating_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_css_loader_dist_cjs_js_ruleSet_1_rules_15_use_1_sass_loader_dist_cjs_js_rating_module_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0}}]);