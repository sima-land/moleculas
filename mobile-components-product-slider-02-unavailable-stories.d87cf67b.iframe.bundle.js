"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[930],{"./docs/stories/mobile/components/product-slider/02-unavailable.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Unavailable:()=>Unavailable,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_moleculas_mobile_components_product_slider__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/mobile/components/product-slider/index.ts"),_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/common/components/product-info/index.ts"),_sima_land_ui_nucleons_layout__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/layout/index.js"),_fixture__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./docs/stories/mobile/components/product-slider/fixture.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"mobile/ProductSlider",component:_sima_land_moleculas_mobile_components_product_slider__WEBPACK_IMPORTED_MODULE_0__.O,parameters:{storySource:{source:"import { ProductSlider } from '@sima-land/moleculas/mobile/components/product-slider';\nimport { ReactNode } from 'react';\nimport { ProductInfo, Parts } from '@sima-land/moleculas/common/components/product-info';\nimport { MobileLayout } from '@sima-land/ui-nucleons/layout';\nimport { items } from './fixture';\n\nexport default {\n  title: 'mobile/ProductSlider',\n  component: ProductSlider,\n  parameters: {\n    layout: 'fullscreen',\n  },\n};\n\nconst Placeholder = () => (\n  <div\n    style={{\n      height: '40px',\n      borderRadius: '4px',\n      background: '#eee',\n      marginTop: '20px',\n      marginBottom: '20px',\n    }}\n  />\n);\n\nconst Bootstrap = ({ children }: { children?: ReactNode }) => (\n  <>\n    <MobileLayout>\n      <Placeholder />\n    </MobileLayout>\n    {children}\n    <MobileLayout>\n      <Placeholder />\n    </MobileLayout>\n  </>\n);\n\nexport function Unavailable() {\n  return (\n    <Bootstrap>\n      <ProductSlider>\n        {items.map((item, index) => (\n          <ProductInfo key={index} restriction='unavailable'>\n            <Parts.Image src={item.imageSrc} href={item.url} />\n\n            <Parts.Prices\n              price={item.price}\n              oldPrice={item.oldPrice}\n              currencyGrapheme={item.currencyGrapheme}\n              unavailableReason='Товара нет в наличии'\n            />\n\n            <Parts.Title href={item.url}>{item.name}</Parts.Title>\n\n            <Parts.Footer>\n              <Parts.WaitListAddButton\n                onClick={() => alert('Представим добавление в лист ожидания...')}\n              />\n            </Parts.Footer>\n          </ProductInfo>\n        ))}\n      </ProductSlider>\n    </Bootstrap>\n  );\n}\n\nUnavailable.storyName = 'Недоступные товары';\n",locationsMap:{unavailable:{startLoc:{col:7,line:39},endLoc:{col:1,line:66},startBody:{col:7,line:39},endBody:{col:1,line:66}}}},layout:"fullscreen"}},Placeholder=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{height:"40px",borderRadius:"4px",background:"#eee",marginTop:"20px",marginBottom:"20px"}}),Bootstrap=({children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_ui_nucleons_layout__WEBPACK_IMPORTED_MODULE_2__.MobileLayout,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Placeholder,{})}),children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_ui_nucleons_layout__WEBPACK_IMPORTED_MODULE_2__.MobileLayout,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Placeholder,{})})]}),Unavailable=function Unavailable(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Bootstrap,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_moleculas_mobile_components_product_slider__WEBPACK_IMPORTED_MODULE_0__.O,{children:_fixture__WEBPACK_IMPORTED_MODULE_3__.e.map(((item,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.ww,{restriction:"unavailable",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Image,{src:item.imageSrc,href:item.url}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Prices,{price:item.price,oldPrice:item.oldPrice,currencyGrapheme:item.currencyGrapheme,unavailableReason:"Товара нет в наличии"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Title,{href:item.url,children:item.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Footer,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.WaitListAddButton,{onClick:()=>alert("Представим добавление в лист ожидания...")})})]},index)))})})};Unavailable.storyName="Недоступные товары",Unavailable.parameters={...Unavailable.parameters,docs:{...Unavailable.parameters?.docs,source:{originalSource:"function Unavailable() {\n  return <Bootstrap>\n      <ProductSlider>\n        {items.map((item, index) => <ProductInfo key={index} restriction='unavailable'>\n            <Parts.Image src={item.imageSrc} href={item.url} />\n\n            <Parts.Prices price={item.price} oldPrice={item.oldPrice} currencyGrapheme={item.currencyGrapheme} unavailableReason='Товара нет в наличии' />\n\n            <Parts.Title href={item.url}>{item.name}</Parts.Title>\n\n            <Parts.Footer>\n              <Parts.WaitListAddButton onClick={() => alert('Представим добавление в лист ожидания...')} />\n            </Parts.Footer>\n          </ProductInfo>)}\n      </ProductSlider>\n    </Bootstrap>;\n}",...Unavailable.parameters?.docs?.source}}};const __namedExportsOrder=["Unavailable"]},"./docs/stories/mobile/components/product-slider/fixture.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>items});const items=[{name:"Ножницы портновские, 19 см, цвет чёрный",imageSrc:"https://cdn3.static1-sima-land.com/items/3572134/0/280.jpg?v=1594121833",imageAlt:"Ножницы портновские, 19 см, цвет чёрный, Ножницы",url:"",price:261,currencyGrapheme:"₽",oldPrice:void 0,trademark:{name:"Торговая марка Сима-ленд",url:"https://sima-land.ru"}},{name:"Ножницы портновские",imageSrc:"https://cdn3.static1-sima-land.com/items/2300382/0/280.jpg?v=1594121798",imageAlt:"Ножницы портновские, 31 см, цвет чёрный/голубой, Ножницы",url:"",price:322,currencyGrapheme:"₽",oldPrice:void 0},{name:"Ножницы портновские, 21,5 см, цвет чёрный/голубой",imageSrc:"https://cdn3.static1-sima-land.com/items/2300383/0/280.jpg?v=1594121773",imageAlt:"Ножницы портновские, 21,5 см, цвет чёрный/голубой, Ножницы",url:"",price:238,currencyGrapheme:"₽",oldPrice:void 0,badges:[{color:"#b52ea8",fields:[{type:"text",value:"-56%"}]},{color:"#ff7200",fields:[{type:"text",value:"3 по цене 2"}]},{color:"#2962ff",fields:[{type:"text",value:"Товар месяца"}]},{color:"#00b8d4",fields:[{type:"text",value:"Акция"}]}],trademark:{name:"Торговая марка Привет",url:"https://sima-land.ru"}},{name:"Ножницы портновские, 23 см, цвет МИКС",imageSrc:"https://cdn3.static1-sima-land.com/items/1550239/0/280.jpg?v=1600179085",imageAlt:"Ножницы портновские, 23 см, цвет МИКС, Ножницы",url:"",price:171,currencyGrapheme:"₽",oldPrice:void 0},{name:"Ножницы портновские, одинаковые кольца, 23 см, цвет чёрный",imageSrc:"https://cdn3.static1-sima-land.com/items/4002852/0/280.jpg?v=1594121894",imageAlt:"Ножницы портновские, одинаковые кольца, 23 см, цвет чёрный, Ножницы",url:"",price:483,currencyGrapheme:"₽",oldPrice:void 0},{name:"Ножницы портновские, 22,5 см, цвет чёрный",imageSrc:"https://cdn3.static1-sima-land.com/items/4005918/0/280.jpg?v=1594121898",imageAlt:"Ножницы портновские, 22,5 см, цвет чёрный, Ножницы",url:"",price:988,currencyGrapheme:"₽",oldPrice:void 0,badges:[{color:"#2962ff",fields:[{type:"text",value:"Товар месяца"}]},{color:"#00b8d4",fields:[{type:"text",value:"Акция"}]}]},{name:"Ножницы портновские, 22 см, цвет серебряный",imageSrc:"https://cdn3.static1-sima-land.com/items/2300389/0/280.jpg?v=1594121830",imageAlt:"Ножницы портновские, 22 см, цвет серебряный, Ножницы",url:"",price:619,currencyGrapheme:"₽",oldPrice:void 0},{name:"Ножницы портновские, с увеличенным углом наклона, 27 см, цвет чёрный",imageSrc:"https://cdn3.static1-sima-land.com/items/2117838/0/280.jpg?v=1594121766",imageAlt:"Ножницы портновские, с увеличенным углом наклона, 27 см, цвет чёрный, Ножницы",url:"",price:539,currencyGrapheme:"₽",oldPrice:595},{name:"Ножницы портновские, с прорезиненной ручкой, 20 см, цвет чёрный/серый",imageSrc:"https://cdn3.static1-sima-land.com/items/1108673/0/280.jpg?v=1594103956",imageAlt:"Ножницы портновские, с прорезиненной ручкой, 20 см, цвет чёрный/серый, Ножницы",url:"",price:59922332,currencyGrapheme:"₽",oldPrice:71721323},{name:"Ножницы портновские, скошенное лезвие, 15 см, цвет серебряный",imageSrc:"https://cdn3.static1-sima-land.com/items/4150936/0/280.jpg?v=1580193932",imageAlt:"Ножницы портновские, скошенное лезвие, 15 см, цвет серебряный, Ножницы",url:"",price:253,currencyGrapheme:"₽",oldPrice:void 0}]},"./src/mobile/components/product-slider/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>ProductSlider});var react=__webpack_require__("./node_modules/react/index.js"),hooks=__webpack_require__("./node_modules/@sima-land/ui-nucleons/hooks/index.js"),touch_slider=__webpack_require__("./node_modules/@sima-land/ui-nucleons/touch-slider/index.js"),product_info=__webpack_require__("./src/common/components/product-info/index.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),product_slider_m=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/mobile/components/product-slider/product-slider.m.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(product_slider_m.Z,options);const product_slider_product_slider_m=product_slider_m.Z&&product_slider_m.Z.locals?product_slider_m.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ProductSlider=({children,onInViewport,onNeedRequest})=>{const rootRef=(0,react.useRef)(null),options=(0,react.useMemo)((()=>({rootMargin:"200px 0px 200px 0px"})),[]);return(0,hooks.useIntersection)(rootRef,(entry=>{entry.isIntersecting&&onNeedRequest?.()}),options),(0,hooks.useIntersection)(rootRef,(entry=>{entry.isIntersecting&&onInViewport?.()})),(0,jsx_runtime.jsx)("div",{ref:rootRef,"data-testid":"product-slider:root",children:(0,jsx_runtime.jsx)(touch_slider.L,{children:(0,jsx_runtime.jsx)(product_info.QL.FooterContext.Provider,{value:{className:product_slider_product_slider_m.footer},children:react.Children.toArray(children).reduce(((list,item)=>((0,react.isValidElement)(item)&&item.type===product_info.ww&&list.push((0,jsx_runtime.jsx)("div",{className:product_slider_product_slider_m.item,"data-testid":"product-slider:item",children:item},item.key)),list)),[])})})})};try{ProductSlider.displayName="ProductSlider",ProductSlider.__docgenInfo={description:"Слайдер товаров.",displayName:"ProductSlider",props:{children:{defaultValue:null,description:"Товары.",name:"children",required:!1,type:{name:"ItemElement | ItemElement[] | undefined"}},onInViewport:{defaultValue:null,description:"Функция, вызываемая при попадании компонента в поле видимости.",name:"onInViewport",required:!1,type:{name:"(() => void) | undefined"}},onNeedRequest:{defaultValue:null,description:"Функция, инициализирующая загрузку рекомендаций.",name:"onNeedRequest",required:!1,type:{name:"(() => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/mobile/components/product-slider/product-slider.tsx#ProductSlider"]={docgenInfo:ProductSlider.__docgenInfo,name:"ProductSlider",path:"src/mobile/components/product-slider/product-slider.tsx#ProductSlider"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/mobile/components/product-slider/product-slider.m.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".product-slider-m__item__acd{display:flex;flex-direction:column;position:relative;flex-shrink:0;width:160px}@media(min-width: 720px){.product-slider-m__item__acd{width:196px}}.product-slider-m__item__acd:not(:last-child){margin-right:16px}.product-slider-m__footer__b84{margin-top:auto;padding-top:16px}","",{version:3,sources:["webpack://./src/mobile/components/product-slider/product-slider.m.scss","webpack://./node_modules/@sima-land/ui-nucleons/breakpoints.scss"],names:[],mappings:"AAEA,6BACE,YAAA,CACA,qBAAA,CACA,iBAAA,CACA,aAAA,CACA,WAAA,CCgBE,yBDrBJ,6BAOI,WAAA,CAAA,CAEF,8CACE,iBAAA,CAIJ,+BACE,eAAA,CACA,gBAAA",sourcesContent:["@use 'node_modules/@sima-land/ui-nucleons/breakpoints';\n\n.item {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  flex-shrink: 0;\n  width: 160px;\n  @include breakpoints.up('mm') {\n    width: 196px;\n  }\n  &:not(:last-child) {\n    margin-right: 16px;\n  }\n}\n\n.footer {\n  margin-top: auto;\n  padding-top: 16px;\n}\n",'/* stylelint-disable length-zero-no-unit */\n$map: (\n  // ВАЖНО: тут именно 0px а не 0 - в Safari нельзя использовать @media (min-width: 0)\n  mxs: 0px,\n\n  ms: 480px,\n  mm: 720px,\n  ml: 840px,\n  xs: 1024px,\n  s: 1280px,\n  m: 1440px,\n  l: 1600px,\n  xl: 1920px\n) !default;\n/* stylelint-enable length-zero-no-unit */\n\n/**\n * ВАЖНО: здесь должны быть только утилиты позволяющие применить стили ">=" либо "<" начала диапазона (breakpoint range).\n * Не должно возникать ситуаций в которых нужно применить стили "<=" или ">" начала диапазона.\n */\n\n@mixin greaterThanOrEqual($breakpoint) {\n  @if map-has-key($map, $breakpoint) {\n    @media (min-width: map-get($map, $breakpoint)) {\n      @content;\n    }\n  } @else {\n    @warn \'No such breakpoint `#{$breakpoint}`. Available values: #{map-keys($map)}.\';\n  }\n}\n\n@mixin lessThan($breakpoint) {\n  @if map-has-key($map, $breakpoint) {\n    @media (max-width: (map-get($map, $breakpoint) - 1px)) {\n      @content;\n    }\n  } @else {\n    @warn \'No such breakpoint `#{$breakpoint}`. Available values: #{map-keys($map)}.\';\n  }\n}\n\n@mixin gte($args...) {\n  @include greaterThanOrEqual($args...) {\n    @content;\n  }\n}\n\n@mixin lt($args...) {\n  @include lessThan($args...) {\n    @content;\n  }\n}\n\n/** @deprecated */\n@mixin up($args...) {\n  @include greaterThanOrEqual($args...) {\n    @content;\n  }\n}\n\n/** @deprecated */\n@mixin down($args...) {\n  @include lessThan($args...) {\n    @content;\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={item:"product-slider-m__item__acd",footer:"product-slider-m__footer__b84"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);