"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[210],{"./node_modules/@sima-land/ui-nucleons/stepper/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.v=void 0;var stepper_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/stepper/stepper.js");Object.defineProperty(exports,"v",{enumerable:!0,get:function(){return stepper_1.Stepper}})},"./node_modules/@sima-land/ui-nucleons/stepper/stepper.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.Stepper=void 0;const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),react_1=__webpack_require__("./node_modules/react/index.js"),Plus_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-quarks/dist/cjs/icons/16x16/Stroked/Plus.js")),Minus_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-quarks/dist/cjs/icons/16x16/Stroked/Minus.js")),bind_1=__importDefault(__webpack_require__("./node_modules/classnames/bind.js")),stepper_m_scss_1=__importDefault(__webpack_require__("./node_modules/@sima-land/ui-nucleons/stepper/stepper.m.scss")),cx=bind_1.default.bind(stepper_m_scss_1.default);exports.Stepper=(0,react_1.forwardRef)((function Stepper({buttonClickBehavior,canAdd=!0,canSubtract=!0,className,disabled,plusDisabled=disabled,minusDisabled=disabled,readOnly,onAdd,onBlur,onChange,onFocus,onSubtract,size="m",style,value,failed,"data-testid":testId="stepper",...inputProps},forwardedRef){var _a,_b;const ref=(0,react_1.useRef)(null),[focused,setFocused]=(0,react_1.useState)(!1);(0,react_1.useImperativeHandle)(forwardedRef,(()=>ref.current));const noBlurOnMousedown=(0,react_1.useCallback)((event=>{focused&&event.target!==ref.current&&"prevent-input-blur"===buttonClickBehavior&&event.preventDefault()}),[focused,buttonClickBehavior]),rootClassName=cx("root",`size-${size}`,{disabled,focused,failed},className);return(0,jsx_runtime_1.jsxs)("div",{"data-testid":testId,style,className:rootClassName,onMouseDown:noBlurOnMousedown,children:[(0,jsx_runtime_1.jsx)("button",{tabIndex:-1,hidden:!canSubtract,disabled:null!==(_a=null!=minusDisabled?minusDisabled:disabled)&&void 0!==_a?_a:readOnly,className:cx("button"),"data-testid":"stepper:minus","aria-label":"Уменьшить",onMouseDown:noBlurOnMousedown,onClick:!canSubtract||minusDisabled||disabled||readOnly?void 0:onSubtract,children:(0,jsx_runtime_1.jsx)(Minus_1.default,{className:stepper_m_scss_1.default.svg})}),(0,jsx_runtime_1.jsx)("input",{...inputProps,ref,readOnly,"data-testid":"stepper:input",className:cx("input"),value,disabled,onChange,onFocus:e=>{setFocused(!0),null==onFocus||onFocus(e)},onBlur:e=>{setFocused(!1),null==onBlur||onBlur(e)}}),(0,jsx_runtime_1.jsx)("button",{tabIndex:-1,hidden:!canAdd,disabled:null!==(_b=null!=plusDisabled?plusDisabled:disabled)&&void 0!==_b?_b:readOnly,className:cx("button"),"data-testid":"stepper:plus","aria-label":"Увеличить",onMouseDown:noBlurOnMousedown,onClick:!canAdd||plusDisabled||disabled||readOnly?void 0:onAdd,children:(0,jsx_runtime_1.jsx)(Plus_1.default,{className:stepper_m_scss_1.default.svg})})]})}))},"./node_modules/@sima-land/ui-quarks/dist/cjs/icons/16x16/Stroked/Minus.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.prototype.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__("./node_modules/react/index.js")),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>React.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props},React.createElement("path",{fillRule:"evenodd",d:"M2 8a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z",clipRule:"evenodd"}))));exports.default=ForwardRef},"./node_modules/@sima-land/ui-quarks/dist/cjs/icons/16x16/Stroked/Plus.js":function(__unused_webpack_module,exports,__webpack_require__){var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(o,v){Object.defineProperty(o,"default",{enumerable:!0,value:v})}:function(o,v){o.default=v}),__importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)"default"!==k&&Object.prototype.hasOwnProperty.call(mod,k)&&__createBinding(result,mod,k);return __setModuleDefault(result,mod),result};Object.defineProperty(exports,"__esModule",{value:!0});const React=__importStar(__webpack_require__("./node_modules/react/index.js")),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>React.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props},React.createElement("path",{d:"M9 3a1 1 0 0 0-2 0v4H3a1 1 0 0 0 0 2h4v4a1 1 0 1 0 2 0V9h4a1 1 0 1 0 0-2H9V3Z"}))));exports.default=ForwardRef},"./node_modules/@sima-land/ui-quarks/dist/esm/icons/24x24/Stroked/ComparisonAdd.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",ref,...props},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M2 6a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM2 11a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 15a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2H3ZM18 13a1 1 0 1 1 2 0v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2Z"}))))},"./node_modules/@sima-land/ui-quarks/dist/esm/icons/24x24/Stroked/Favorite.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",ref,...props},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M19.657 4.01C17.018 2.174 13.76 3.031 12 5.132c-1.759-2.1-5.018-2.968-7.657-1.122-1.4.98-2.279 2.632-2.339 4.376-.14 3.958 3.299 7.13 8.547 11.996l.1.091c.76.704 1.93.704 2.689-.01l.11-.102c5.248-4.855 8.676-8.027 8.546-11.985-.06-1.734-.94-3.386-2.339-4.366ZM12.1 18.862l-.1.102-.1-.102C7.142 14.466 4.003 11.559 4.003 8.61c0-2.04 1.5-3.57 3.499-3.57 1.22 0 2.415.634 3.122 1.593.333.451.817.814 1.378.814.564 0 1.05-.367 1.385-.821.702-.955 1.894-1.586 3.111-1.586 2 0 3.5 1.53 3.5 3.57 0 2.947-3.14 5.855-7.898 10.25Z"}))))},"./node_modules/@sima-land/ui-quarks/dist/esm/icons/24x24/Stroked/MagnifierPlus.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",ref,...props},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M10.5 9a1 1 0 1 1 2 0v1.5H14a1 1 0 1 1 0 2h-1.5V14a1 1 0 1 1-2 0v-1.5H9a1 1 0 1 1 0-2h1.5V9Z"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M11.5 3a8.5 8.5 0 1 0 5.262 15.176l3.53 3.531a1 1 0 0 0 1.415-1.414l-3.531-3.531A8.5 8.5 0 0 0 11.5 3ZM5 11.5a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0Z",clipRule:"evenodd"}))))},"./src/common/components/product-info/__stories__/09-with-carousel.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithCarousel:()=>WithCarousel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/common/components/product-info/index.ts"),_sima_land_moleculas_common_components_badge__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/common/components/badge/index.ts"),_sima_land_ui_nucleons_stepper__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/stepper/index.js"),_sima_land_ui_nucleons_carousel__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/carousel/index.js"),_sima_land_ui_nucleons_layout__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/layout/index.js"),_sima_land_ui_nucleons_hooks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/hooks/index.js"),_sima_land_moleculas_common_hooks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/common/hooks/index.ts"),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/react/index.js"),_sima_land_ui_quarks_icons_24x24_Stroked_Favorite__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@sima-land/ui-quarks/dist/esm/icons/24x24/Stroked/Favorite.js"),_sima_land_ui_quarks_icons_24x24_Stroked_MagnifierPlus__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@sima-land/ui-quarks/dist/esm/icons/24x24/Stroked/MagnifierPlus.js"),_sima_land_ui_quarks_icons_24x24_Stroked_ComparisonAdd__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@sima-land/ui-quarks/dist/esm/icons/24x24/Stroked/ComparisonAdd.js"),_images_strawberries_jpg__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./src/common/components/product-info/__stories__/images/strawberries.jpg"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"common/ProductInfo",component:_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_0__.ww,parameters:{storySource:{source:"import { ProductInfo, Parts } from '@sima-land/moleculas/common/components/product-info';\nimport { Badge } from '@sima-land/moleculas/common/components/badge';\nimport { Stepper } from '@sima-land/ui-nucleons/stepper';\nimport { Carousel } from '@sima-land/ui-nucleons/carousel';\nimport { Layout } from '@sima-land/ui-nucleons/layout';\nimport { useBreakpoint } from '@sima-land/ui-nucleons/hooks';\nimport { useClientWidth } from '@sima-land/moleculas/common/hooks';\nimport { useRef } from 'react';\nimport FavoriteSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Favorite';\nimport MagnifierPlusSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/MagnifierPlus';\nimport ComparisonAddSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/ComparisonAdd';\nimport strawberries from './images/strawberries.jpg';\n\nexport default {\n  title: 'common/ProductInfo',\n  component: ProductInfo,\n  parameters: {\n    layout: 'padded',\n  },\n};\n\nconst items = Array(20).fill(0);\n\nexport function WithCarousel() {\n  const ms = useBreakpoint('ms+');\n  const mm = useBreakpoint('mm+');\n  const xs = useBreakpoint('xs+');\n  const l = useBreakpoint('l+');\n\n  const itemRef = useRef<HTMLDivElement>(null);\n  const itemWidth = useClientWidth(itemRef);\n\n  const colGap = '16px';\n  let colCount = 2;\n\n  if (ms) {\n    colCount = 3;\n  }\n  if (mm) {\n    colCount = 4;\n  }\n  if (xs) {\n    colCount = 6;\n  }\n\n  return (\n    <Layout>\n      <Carousel\n        infinite={false}\n        draggable={false}\n        items={items}\n        withControls={itemWidth === null ? false : undefined}\n        controlProps={{\n          size: l ? 'l' : 's',\n          ...(itemWidth !== null && { style: { top: `${itemWidth / 2}px` } }),\n        }}\n        renderItem={(item, itemIndex) => (\n          <div\n            ref={itemIndex === 0 ? itemRef : null}\n            style={{\n              flexShrink: 0,\n              maxWidth: `calc((100% - ${colGap} * ${colCount - 1}) / ${colCount})`,\n              marginLeft: itemIndex === 0 ? 0 : colGap,\n            }}\n          >\n            <ProductInfo>\n              <Parts.Image src={strawberries} href='https://www.sima-land.ru'>\n                <Parts.ImageButton\n                  icon={FavoriteSVG}\n                  position={{ x: 'left', y: 'top' }}\n                  hint='Добавить в избранное'\n                  hintDirection='right'\n                />\n                <Parts.ImageButton\n                  icon={MagnifierPlusSVG}\n                  position={{ x: 'right', y: 'top' }}\n                  hint='Быстрый просмотр'\n                />\n                <Parts.ImageButton\n                  icon={ComparisonAddSVG}\n                  position={{ x: 'right', y: 'bottom' }}\n                  hint='Сравнить'\n                />\n              </Parts.Image>\n\n              <Parts.Badges lineLimit={1}>\n                <Badge shape='round' color='#b52ea8' fields={[{ type: 'text', value: '-56%' }]} />\n                <Badge\n                  shape='round'\n                  color='#ff7200'\n                  fields={[{ type: 'text', value: '3 по цене 2' }]}\n                />\n                <Badge\n                  shape='round'\n                  color='#2962ff'\n                  fields={[{ type: 'text', value: 'Товар месяца' }]}\n                />\n                <Badge shape='round' color='#00b8d4' fields={[{ type: 'text', value: 'Акция' }]} />\n              </Parts.Badges>\n\n              <Parts.Prices price={250.48} oldPrice={320.96} currencyGrapheme='₽' />\n\n              <Parts.Title href='https://www.sima-land.ru'>\n                Земляника садовая Сан Андреас, P9 горшок, 1 шт, Лето 2024\n              </Parts.Title>\n\n              <Parts.SecondaryInfo>Арт. 9073174</Parts.SecondaryInfo>\n\n              <Parts.TrademarkLink href='https://www.sima-land.ru'>\n                Торговая марка Сима-ленд\n              </Parts.TrademarkLink>\n\n              <Parts.RatingCounter value={4.5} reviewCount={28} />\n\n              <Parts.Footer>\n                <Parts.CartControl\n                  stepText='По 1 шт'\n                  markupText='Комплектация + 50 ₽ при покупке до 20 шт'\n                >\n                  <Stepper defaultValue={3} size='s' style={{ width: '122px' }} />\n                </Parts.CartControl>\n              </Parts.Footer>\n            </ProductInfo>\n          </div>\n        )}\n      />\n    </Layout>\n  );\n}\n\nWithCarousel.storyName = 'Карусель';\n",locationsMap:{"with-carousel":{startLoc:{col:7,line:24},endLoc:{col:1,line:129},startBody:{col:7,line:24},endBody:{col:1,line:129}}}},layout:"padded"}},items=Array(20).fill(0),WithCarousel=function WithCarousel(){const ms=(0,_sima_land_ui_nucleons_hooks__WEBPACK_IMPORTED_MODULE_5__.useBreakpoint)("ms+"),mm=(0,_sima_land_ui_nucleons_hooks__WEBPACK_IMPORTED_MODULE_5__.useBreakpoint)("mm+"),xs=(0,_sima_land_ui_nucleons_hooks__WEBPACK_IMPORTED_MODULE_5__.useBreakpoint)("xs+"),l=(0,_sima_land_ui_nucleons_hooks__WEBPACK_IMPORTED_MODULE_5__.useBreakpoint)("l+"),itemRef=(0,react__WEBPACK_IMPORTED_MODULE_7__.useRef)(null),itemWidth=(0,_sima_land_moleculas_common_hooks__WEBPACK_IMPORTED_MODULE_6__.T7)(itemRef);let colCount=2;return ms&&(colCount=3),mm&&(colCount=4),xs&&(colCount=6),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_sima_land_ui_nucleons_layout__WEBPACK_IMPORTED_MODULE_4__.Layout,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_sima_land_ui_nucleons_carousel__WEBPACK_IMPORTED_MODULE_3__.l,{infinite:!1,draggable:!1,items,withControls:null!==itemWidth&&void 0,controlProps:{size:l?"l":"s",...null!==itemWidth&&{style:{top:itemWidth/2+"px"}}},renderItem:(item,itemIndex)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",{ref:0===itemIndex?itemRef:null,style:{flexShrink:0,maxWidth:`calc((100% - 16px * ${colCount-1}) / ${colCount})`,marginLeft:0===itemIndex?0:"16px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_0__.ww,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_0__.QL.Image,{src:_images_strawberries_jpg__WEBPACK_IMPORTED_MODULE_11__,href:"https://www.sima-land.ru",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_0__.QL.ImageButton,{icon:_sima_land_ui_quarks_icons_24x24_Stroked_Favorite__WEBPACK_IMPORTED_MODULE_8__.Z,position:{x:"left",y:"top"},hint:"Добавить в избранное",hintDirection:"right"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_0__.QL.ImageButton,{icon:_sima_land_ui_quarks_icons_24x24_Stroked_MagnifierPlus__WEBPACK_IMPORTED_MODULE_9__.Z,position:{x:"right",y:"top"},hint:"Быстрый просмотр"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_0__.QL.ImageButton,{icon:_sima_land_ui_quarks_icons_24x24_Stroked_ComparisonAdd__WEBPACK_IMPORTED_MODULE_10__.Z,position:{x:"right",y:"bottom"},hint:"Сравнить"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_0__.QL.Badges,{lineLimit:1,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_sima_land_moleculas_common_components_badge__WEBPACK_IMPORTED_MODULE_1__.C,{shape:"round",color:"#b52ea8",fields:[{type:"text",value:"-56%"}]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_sima_land_moleculas_common_components_badge__WEBPACK_IMPORTED_MODULE_1__.C,{shape:"round",color:"#ff7200",fields:[{type:"text",value:"3 по цене 2"}]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_sima_land_moleculas_common_components_badge__WEBPACK_IMPORTED_MODULE_1__.C,{shape:"round",color:"#2962ff",fields:[{type:"text",value:"Товар месяца"}]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_sima_land_moleculas_common_components_badge__WEBPACK_IMPORTED_MODULE_1__.C,{shape:"round",color:"#00b8d4",fields:[{type:"text",value:"Акция"}]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_0__.QL.Prices,{price:250.48,oldPrice:320.96,currencyGrapheme:"₽"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_0__.QL.Title,{href:"https://www.sima-land.ru",children:"Земляника садовая Сан Андреас, P9 горшок, 1 шт, Лето 2024"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_0__.QL.SecondaryInfo,{children:"Арт. 9073174"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_0__.QL.TrademarkLink,{href:"https://www.sima-land.ru",children:"Торговая марка Сима-ленд"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_0__.QL.RatingCounter,{value:4.5,reviewCount:28}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_0__.QL.Footer,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_0__.QL.CartControl,{stepText:"По 1 шт",markupText:"Комплектация + 50 ₽ при покупке до 20 шт",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_sima_land_ui_nucleons_stepper__WEBPACK_IMPORTED_MODULE_2__.v,{defaultValue:3,size:"s",style:{width:"122px"}})})})]})})})})};WithCarousel.storyName="Карусель",WithCarousel.parameters={...WithCarousel.parameters,docs:{...WithCarousel.parameters?.docs,source:{originalSource:"function WithCarousel() {\n  const ms = useBreakpoint('ms+');\n  const mm = useBreakpoint('mm+');\n  const xs = useBreakpoint('xs+');\n  const l = useBreakpoint('l+');\n  const itemRef = useRef<HTMLDivElement>(null);\n  const itemWidth = useClientWidth(itemRef);\n  const colGap = '16px';\n  let colCount = 2;\n  if (ms) {\n    colCount = 3;\n  }\n  if (mm) {\n    colCount = 4;\n  }\n  if (xs) {\n    colCount = 6;\n  }\n  return <Layout>\n      <Carousel infinite={false} draggable={false} items={items} withControls={itemWidth === null ? false : undefined} controlProps={{\n      size: l ? 'l' : 's',\n      ...(itemWidth !== null && {\n        style: {\n          top: `${itemWidth / 2}px`\n        }\n      })\n    }} renderItem={(item, itemIndex) => <div ref={itemIndex === 0 ? itemRef : null} style={{\n      flexShrink: 0,\n      maxWidth: `calc((100% - ${colGap} * ${colCount - 1}) / ${colCount})`,\n      marginLeft: itemIndex === 0 ? 0 : colGap\n    }}>\n            <ProductInfo>\n              <Parts.Image src={strawberries} href='https://www.sima-land.ru'>\n                <Parts.ImageButton icon={FavoriteSVG} position={{\n            x: 'left',\n            y: 'top'\n          }} hint='Добавить в избранное' hintDirection='right' />\n                <Parts.ImageButton icon={MagnifierPlusSVG} position={{\n            x: 'right',\n            y: 'top'\n          }} hint='Быстрый просмотр' />\n                <Parts.ImageButton icon={ComparisonAddSVG} position={{\n            x: 'right',\n            y: 'bottom'\n          }} hint='Сравнить' />\n              </Parts.Image>\n\n              <Parts.Badges lineLimit={1}>\n                <Badge shape='round' color='#b52ea8' fields={[{\n            type: 'text',\n            value: '-56%'\n          }]} />\n                <Badge shape='round' color='#ff7200' fields={[{\n            type: 'text',\n            value: '3 по цене 2'\n          }]} />\n                <Badge shape='round' color='#2962ff' fields={[{\n            type: 'text',\n            value: 'Товар месяца'\n          }]} />\n                <Badge shape='round' color='#00b8d4' fields={[{\n            type: 'text',\n            value: 'Акция'\n          }]} />\n              </Parts.Badges>\n\n              <Parts.Prices price={250.48} oldPrice={320.96} currencyGrapheme='₽' />\n\n              <Parts.Title href='https://www.sima-land.ru'>\n                Земляника садовая Сан Андреас, P9 горшок, 1 шт, Лето 2024\n              </Parts.Title>\n\n              <Parts.SecondaryInfo>Арт. 9073174</Parts.SecondaryInfo>\n\n              <Parts.TrademarkLink href='https://www.sima-land.ru'>\n                Торговая марка Сима-ленд\n              </Parts.TrademarkLink>\n\n              <Parts.RatingCounter value={4.5} reviewCount={28} />\n\n              <Parts.Footer>\n                <Parts.CartControl stepText='По 1 шт' markupText='Комплектация + 50 ₽ при покупке до 20 шт'>\n                  <Stepper defaultValue={3} size='s' style={{\n              width: '122px'\n            }} />\n                </Parts.CartControl>\n              </Parts.Footer>\n            </ProductInfo>\n          </div>} />\n    </Layout>;\n}",...WithCarousel.parameters?.docs?.source}}};const __namedExportsOrder=["WithCarousel"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/stepper/stepper.m.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".stepper-m__root__c7c{display:flex;align-items:center;border:1px solid rgba(0,0,0,0);border-radius:4px;color:#212121;background:#ebebeb}.stepper-m__root__c7c.stepper-m__focused__d2f{border-color:#1f84db}.stepper-m__root__c7c.stepper-m__disabled__e53{color:#c2c2c2;border-color:#f5f5f5;background:#f5f5f5}.stepper-m__root__c7c.stepper-m__failed__a89{color:#d50000}.stepper-m__root__c7c.stepper-m__size-s__e8c{--stepper-button-width: 24px;width:var(--stepper-width, 122px);height:40px}.stepper-m__root__c7c.stepper-m__size-m__f86{--stepper-button-width: 32px;width:var(--stepper-width, 160px);height:48px}.stepper-m__input__c76{border:0;padding:0;background:inherit;outline:0;width:0;flex-grow:1;text-align:center;color:inherit;font:inherit;font-weight:600;height:100%;font-size:16px;line-height:24px}.stepper-m__button__cd6{display:flex;align-items:center;border:0;padding:0;background:rgba(0,0,0,0);width:var(--stepper-button-width);height:100%;color:#212121;flex-shrink:0}.stepper-m__button__cd6:first-child{justify-content:flex-end}.stepper-m__button__cd6:last-child{justify-content:flex-start}.stepper-m__button__cd6:not(.stepper-m__hidden__f6c):not(:disabled){cursor:pointer}.stepper-m__button__cd6:disabled{color:#c2c2c2;pointer-events:none}.stepper-m__button__cd6[hidden]{pointer-events:none;opacity:0}.stepper-m__svg__de6{fill:currentColor}","",{version:3,sources:["webpack://./node_modules/@sima-land/ui-nucleons/stepper/stepper.m.scss","webpack://./node_modules/@sima-land/ui-nucleons/colors.scss"],names:[],mappings:"AAEA,sBACE,YAAA,CACA,kBAAA,CACA,8BAAA,CACA,iBAAA,CACA,aCHa,CDIb,kBCGY,CDFZ,8CACE,oBCPS,CDSX,+CACE,aCJW,CDKX,oBCFU,CDGV,kBCHU,CDKZ,6CACE,aCDkB,CDGpB,6CACE,4BAAA,CACA,iCAAA,CACA,WAAA,CAEF,6CACE,4BAAA,CACA,iCAAA,CACA,WAAA,CAIJ,uBACE,QAAA,CACA,SAAA,CAGA,kBAAA,CACA,SAAA,CACA,OAAA,CACA,WAAA,CACA,iBAAA,CACA,aAAA,CACA,YAAA,CACA,eAAA,CACA,WAAA,CACA,cAAA,CACA,gBAAA,CAGF,wBACE,YAAA,CACA,kBAAA,CACA,QAAA,CACA,SAAA,CACA,wBAAA,CACA,iCAAA,CACA,WAAA,CACA,aCtDa,CDuDb,aAAA,CACA,oCACE,wBAAA,CAEF,mCACE,0BAAA,CAEF,oEACE,cAAA,CAEF,iCACE,aC7DW,CD8DX,mBAAA,CAEF,gCACE,mBAAA,CACA,SAAA,CAIJ,qBACE,iBAAA",sourcesContent:["@use '../colors';\n\n.root {\n  display: flex;\n  align-items: center;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  color: colors.$basic-gray87;\n  background: colors.$basic-gray8;\n  &.focused {\n    border-color: colors.$basic-blue;\n  }\n  &.disabled {\n    color: colors.$basic-gray24;\n    border-color: colors.$basic-gray4;\n    background: colors.$basic-gray4;\n  }\n  &.failed {\n    color: colors.$additional-deep-red;\n  }\n  &.size-s {\n    --stepper-button-width: 24px;\n    width: var(--stepper-width, 122px);\n    height: 40px;\n  }\n  &.size-m {\n    --stepper-button-width: 32px;\n    width: var(--stepper-width, 160px);\n    height: 48px;\n  }\n}\n\n.input {\n  border: 0;\n  padding: 0;\n\n  // не надо делать transparent: https://stackoverflow.com/q/43483363/13166471\n  background: inherit;\n  outline: 0;\n  width: 0;\n  flex-grow: 1;\n  text-align: center;\n  color: inherit;\n  font: inherit;\n  font-weight: 600;\n  height: 100%;\n  font-size: 16px;\n  line-height: 24px;\n}\n\n.button {\n  display: flex;\n  align-items: center;\n  border: 0;\n  padding: 0;\n  background: transparent;\n  width: var(--stepper-button-width);\n  height: 100%;\n  color: colors.$basic-gray87;\n  flex-shrink: 0;\n  &:first-child {\n    justify-content: flex-end;\n  }\n  &:last-child {\n    justify-content: flex-start;\n  }\n  &:not(.hidden):not(:disabled) {\n    cursor: pointer;\n  }\n  &:disabled {\n    color: colors.$basic-gray24;\n    pointer-events: none;\n  }\n  &[hidden] {\n    pointer-events: none;\n    opacity: 0;\n  }\n}\n\n.svg {\n  fill: currentColor;\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n$additional-crimson: #f4446b;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"stepper-m__root__c7c",focused:"stepper-m__focused__d2f",disabled:"stepper-m__disabled__e53",failed:"stepper-m__failed__a89","size-s":"stepper-m__size-s__e8c","size-m":"stepper-m__size-m__f86",input:"stepper-m__input__c76",button:"stepper-m__button__cd6",hidden:"stepper-m__hidden__f6c",svg:"stepper-m__svg__de6"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/@sima-land/ui-nucleons/stepper/stepper.m.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__),_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_stepper_m_scss__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./node_modules/@sima-land/ui-nucleons/stepper/stepper.m.scss"),options={};options.styleTagTransform=_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default(),options.setAttributes=_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default(),options.insert=_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null,"head"),options.domAPI=_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default(),options.insertStyleElement=_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_stepper_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z,options);const __WEBPACK_DEFAULT_EXPORT__=_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_stepper_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z&&_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_stepper_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals?_css_loader_dist_cjs_js_ruleSet_1_rules_17_use_1_sass_loader_dist_cjs_js_stepper_m_scss__WEBPACK_IMPORTED_MODULE_6__.Z.locals:void 0},"./src/common/components/product-info/__stories__/images/strawberries.jpg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/strawberries.1c68602c.jpg"}}]);