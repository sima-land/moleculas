"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[1600],{"./node_modules/@sima-land/ui-nucleons/pagination/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.a2=exports.tl=void 0;var pagination_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/pagination/pagination.js");Object.defineProperty(exports,"tl",{enumerable:!0,get:function(){return pagination_1.Pagination}});var pagination_item_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/pagination/pagination-item.js");var utils_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/pagination/utils.js");Object.defineProperty(exports,"a2",{enumerable:!0,get:function(){return utils_1.validatePaginationState}})},"./node_modules/@sima-land/ui-nucleons/pagination/pagination-item.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.PaginationItem=void 0;const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),bind_1=__importDefault(__webpack_require__("./node_modules/classnames/bind.js")),pagination_item_m_scss_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-nucleons/pagination/pagination-item.m.scss")),cx=bind_1.default.bind(pagination_item_m_scss_1.default);exports.PaginationItem=function PaginationItem({rootRef,checked,disabled,children,rounds,onClick,className,href,role=href?void 0:"button",...rest}){return(0,jsx_runtime_1.jsx)("a",{"aria-disabled":disabled||void 0,"aria-current":checked||void 0,...rest,ref:rootRef,href:disabled?void 0:href,role,className:cx("root",`rounds-${rounds}`,{checked,disabled},className),onClick:disabled?void 0:onClick,children})}},"./node_modules/@sima-land/ui-nucleons/pagination/pagination.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Pagination=void 0;const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),react_1=__webpack_require__("./node_modules/react/index.js"),utils_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/pagination/utils.js"),pagination_item_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/pagination/pagination-item.js"),Left_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/Left.js")),Right_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/Right.js")),bind_1=__importDefault(__webpack_require__("./node_modules/classnames/bind.js")),pagination_m_scss_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-nucleons/pagination/pagination.m.scss")),cx=bind_1.default.bind(pagination_m_scss_1.default);function renderPaginationItem(button,getProps){return(0,jsx_runtime_1.jsx)(pagination_item_1.PaginationItem,{...getProps()})}exports.Pagination=function Pagination({rootRef,current:currentProp,total:totalProp,onPageChange,getItems=utils_1.getPaginationItems,renderItem=renderPaginationItem,className,...restProps}){const{current,total}=(0,react_1.useMemo)((()=>(0,utils_1.validatePaginationState)({current:currentProp,total:totalProp})),[currentProp,totalProp]),items=(0,react_1.useMemo)((()=>getItems({current,total})),[current,total,getItems]),onChangeRef=(0,react_1.useRef)(onPageChange);onChangeRef.current=onPageChange;const getItemProps=(0,react_1.useCallback)(((item,index,userProps={})=>{const onClick=event=>{var _a,_b;item.value!==current&&(null===(_a=onChangeRef.current)||void 0===_a||_a.call(onChangeRef,event,item)),null===(_b=userProps.onClick)||void 0===_b||_b.call(userProps,event)};if("page"===item.type){let rounds;return 0===index||"prev"===items[index-1].type?rounds=1===total?"all":"left":index!==items.length-1&&"next"!==items[index+1].type||(rounds="right"),{rounds,checked:item.value===current,"aria-label":`Перейти на страницу ${item.value}`,children:item.value,...userProps,onClick,className:cx("page",userProps.className,item.value>999&&"large")}}return"prev"===item.type?{rounds:"all",disabled:current<=1,"aria-label":"Предыдущая страница",children:(0,jsx_runtime_1.jsx)(Left_1.default,{fill:"currentColor"}),...userProps,onClick,className:cx("prev",userProps.className)}:"more"===item.type?{"aria-label":`Перейти на страницу ${item.value}`,children:"…",...userProps,onClick,className:cx("page",userProps.className)}:"next"===item.type?{rounds:"all",disabled:current>=total,"aria-label":"Следующая страница",children:(0,jsx_runtime_1.jsx)(Right_1.default,{fill:"currentColor"}),...userProps,onClick,className:cx("next",userProps.className)}:{}}),[current,total,items]);return(0,jsx_runtime_1.jsx)("div",{ref:rootRef,className:cx("root",className),role:"navigation","aria-label":"Навигация по страницам",...restProps,children:items.map(((item,index)=>(0,jsx_runtime_1.jsx)(react_1.Fragment,{children:renderItem(item,(userProps=>getItemProps(item,index,userProps)))},index)))})}},"./node_modules/@sima-land/ui-nucleons/pagination/utils.js":(__unused_webpack_module,exports)=>{function getNumbersAround({current,range:rangeSize,total}){const pageNumbers=[],readyRange=Math.min(rangeSize,total)||0;let startIndex=current-Math.floor(readyRange/2)-readyRange%2;startIndex<1?startIndex=0:startIndex+readyRange>total&&(startIndex=total-readyRange);for(let i=startIndex;i<startIndex+readyRange;i++)pageNumbers.push(i+1);return pageNumbers}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getNumbersAround=exports.getPaginationItems=exports.validatePaginationState=void 0,exports.validatePaginationState=function validatePaginationState({total,current}){return{total:Number.isFinite(total)?total:0,current:Number.isFinite(current)?current:0}},exports.getPaginationItems=function getPaginationItems({total,current},{arrows=!0}={}){const items=getNumbersAround({total,current,range:7}).map((value=>({type:"page",value}))),size=items.length;switch(total>7&&(1!==items[0].value&&items.splice(0,2,{type:"page",value:1},{type:"more",value:items[2].value-1}),items[size-1].value!==total&&items.splice(-2,2,{type:"more",value:items[size-2].value},{type:"page",value:total})),arrows){case!0:items.unshift({type:"prev",value:Math.max(1,current-1)}),items.push({type:"next",value:Math.min(total,current+1)});break;case"active":1!==current&&items.unshift({type:"prev",value:Math.max(1,current-1)}),current!==total&&items.push({type:"next",value:Math.min(total,current+1)})}return items},exports.getNumbersAround=getNumbersAround},"./node_modules/@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/Left.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsx)("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props,children:(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M9.659 3.247a1 1 0 0 1 .094 1.412L6.829 8l2.924 3.341a1 1 0 0 1-1.506 1.318l-3.5-4a1 1 0 0 1 0-1.317l3.5-4a1 1 0 0 1 1.412-.095Z",clipRule:"evenodd"})})));exports.default=ForwardRef},"./node_modules/@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/Right.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0});const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsx)("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props,children:(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M6.341 12.753a1 1 0 0 1-.094-1.412L9.171 8 6.247 4.659a1 1 0 0 1 1.506-1.317l3.5 4a1 1 0 0 1 0 1.317l-3.5 4a1 1 0 0 1-1.412.094Z",clipRule:"evenodd"})})));exports.default=ForwardRef},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/pagination/pagination-item.m.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".pagination-item-m__root__c44{--pagination-item-color: #212121;--pagination-item-background: #fff;--pagination-item-border-color: #e0e0e0;--pagination-item-font-size: 14px;--pagination-item-line-height: 20px;width:40px;height:40px;flex-shrink:0;color:var(--pagination-item-color);background:var(--pagination-item-background);box-shadow:inset 0 0 0 1px var(--pagination-item-border-color);font-size:var(--pagination-item-font-size);line-height:var(--pagination-item-line-height);font-weight:600;display:flex;align-items:center;justify-content:center;text-align:center;overflow:hidden;text-decoration:none;font-style:normal}.pagination-item-m__root__c44.pagination-item-m__checked__eab{cursor:default;--pagination-item-color: #fff;--pagination-item-background: #212121;--pagination-item-border-color: #212121}.pagination-item-m__root__c44.pagination-item-m__disabled__dc5{--pagination-item-color: #c2c2c2;--pagination-item-background: #fff;--pagination-item-border-color: #e0e0e0}.pagination-item-m__root__c44:not(.pagination-item-m__checked__eab):not(.pagination-item-m__disabled__dc5):hover{cursor:pointer;--pagination-item-background: #f5f5f5}.pagination-item-m__root__c44.pagination-item-m__rounds-all__c68{border-radius:4px}.pagination-item-m__root__c44.pagination-item-m__rounds-left__a0c{border-radius:4px 0 0 4px}.pagination-item-m__root__c44.pagination-item-m__rounds-right__da7{border-radius:0 4px 4px 0}","",{version:3,sources:["webpack://./node_modules/@sima-land/ui-nucleons/pagination/pagination-item.m.scss"],names:[],mappings:"AAEA,8BACE,gCAAA,CACA,kCAAA,CACA,uCAAA,CACA,iCAAA,CACA,mCAAA,CACA,UAAA,CACA,WAAA,CACA,aAAA,CACA,kCAAA,CACA,4CAAA,CACA,8DAAA,CACA,0CAAA,CACA,8CAAA,CACA,eAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,oBAAA,CACA,iBAAA,CACA,8DACE,cAAA,CACA,6BAAA,CACA,qCAAA,CACA,uCAAA,CAEF,+DACE,gCAAA,CACA,kCAAA,CACA,uCAAA,CAEF,iHACE,cAAA,CACA,qCAAA,CAEF,iEACE,iBAAA,CAEF,kEACE,yBAAA,CAEF,mEACE,yBAAA",sourcesContent:["@use '../colors';\n\n.root {\n  --pagination-item-color: #{colors.$basic-gray87};\n  --pagination-item-background: #fff;\n  --pagination-item-border-color: #{colors.$basic-gray12};\n  --pagination-item-font-size: 14px;\n  --pagination-item-line-height: 20px;\n  width: 40px;\n  height: 40px;\n  flex-shrink: 0;\n  color: var(--pagination-item-color);\n  background: var(--pagination-item-background);\n  box-shadow: inset 0 0 0 1px var(--pagination-item-border-color);\n  font-size: var(--pagination-item-font-size);\n  line-height: var(--pagination-item-line-height);\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  overflow: hidden;\n  text-decoration: none;\n  font-style: normal;\n  &.checked {\n    cursor: default;\n    --pagination-item-color: #fff;\n    --pagination-item-background: #{colors.$basic-gray87};\n    --pagination-item-border-color: #{colors.$basic-gray87};\n  }\n  &.disabled {\n    --pagination-item-color: #{colors.$basic-gray24};\n    --pagination-item-background: #fff;\n    --pagination-item-border-color: #{colors.$basic-gray12};\n  }\n  &:not(.checked):not(.disabled):hover {\n    cursor: pointer;\n    --pagination-item-background: #{colors.$basic-gray4};\n  }\n  &.rounds-all {\n    border-radius: 4px;\n  }\n  &.rounds-left {\n    border-radius: 4px 0 0 4px;\n  }\n  &.rounds-right {\n    border-radius: 0 4px 4px 0;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"pagination-item-m__root__c44",checked:"pagination-item-m__checked__eab",disabled:"pagination-item-m__disabled__dc5","rounds-all":"pagination-item-m__rounds-all__c68","rounds-left":"pagination-item-m__rounds-left__a0c","rounds-right":"pagination-item-m__rounds-right__da7"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/pagination/pagination.m.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".pagination-m__root__a74{display:flex}.pagination-m__prev__f17+.pagination-m__page__f80,.pagination-m__prev__f17+.pagination-m__next__d88{margin-left:8px}.pagination-m__page__f80+.pagination-m__next__d88{margin-left:8px}.pagination-m__page__f80+.pagination-m__page__f80{margin-left:-1px}.pagination-m__large__fe3{--pagination-item-font-size: 12px;--pagination-item-line-height: 16px}","",{version:3,sources:["webpack://./node_modules/@sima-land/ui-nucleons/pagination/pagination.m.scss"],names:[],mappings:"AAAA,yBACE,YAAA,CAGF,oGAEE,eAAA,CAGF,kDACE,eAAA,CAGF,kDACE,gBAAA,CAGF,0BACE,iCAAA,CACA,mCAAA",sourcesContent:[".root {\n  display: flex;\n}\n\n.prev + .page,\n.prev + .next {\n  margin-left: 8px;\n}\n\n.page + .next {\n  margin-left: 8px;\n}\n\n.page + .page {\n  margin-left: -1px;\n}\n\n.large {\n  --pagination-item-font-size: 12px;\n  --pagination-item-line-height: 16px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"pagination-m__root__a74",prev:"pagination-m__prev__f17",page:"pagination-m__page__f80",next:"pagination-m__next__d88",large:"pagination-m__large__fe3"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/@sima-land/ui-nucleons/pagination/pagination-item.m.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_pagination_item_m_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/pagination/pagination-item.m.scss"),options={};options.styleTagTransform=_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_pagination_item_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_pagination_item_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_pagination_item_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_pagination_item_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0},"./node_modules/@sima-land/ui-nucleons/pagination/pagination.m.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_pagination_m_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/pagination/pagination.m.scss"),options={};options.styleTagTransform=_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_pagination_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_pagination_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_pagination_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_pagination_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0}}]);