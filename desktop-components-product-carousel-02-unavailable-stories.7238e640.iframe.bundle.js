"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[6249],{"./node_modules/@sima-land/ui-quarks/dist/esm/icons/24x24/Stroked/Favorite.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",ref,...props},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M19.657 4.01C17.018 2.174 13.76 3.031 12 5.132c-1.759-2.1-5.018-2.968-7.657-1.122-1.4.98-2.279 2.632-2.339 4.376-.14 3.958 3.299 7.13 8.547 11.996l.1.091c.76.704 1.93.704 2.689-.01l.11-.102c5.248-4.855 8.676-8.027 8.546-11.985-.06-1.734-.94-3.386-2.339-4.366ZM12.1 18.862l-.1.102-.1-.102C7.142 14.466 4.003 11.559 4.003 8.61c0-2.04 1.5-3.57 3.499-3.57 1.22 0 2.415.634 3.122 1.593.333.451.817.814 1.378.814.564 0 1.05-.367 1.385-.821.702-.955 1.894-1.586 3.111-1.586 2 0 3.5 1.53 3.5 3.57 0 2.947-3.14 5.855-7.898 10.25Z"}))))},"./docs/stories/desktop/components/product-carousel/02-unavailable.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Unavailable:()=>Unavailable,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_moleculas_desktop_components_product_carousel__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/desktop/components/product-carousel/index.ts"),_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/common/components/product-info/index.ts"),_sima_land_moleculas_common_components_badge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/common/components/badge/index.ts"),_sima_land_ui_nucleons_layout__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/layout/index.js"),_sima_land_ui_quarks_icons_24x24_Stroked_Favorite__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@sima-land/ui-quarks/dist/esm/icons/24x24/Stroked/Favorite.js"),_fixture__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./docs/stories/desktop/components/product-carousel/fixture.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"desktop/ProductCarousel",component:_sima_land_moleculas_desktop_components_product_carousel__WEBPACK_IMPORTED_MODULE_0__.G,parameters:{storySource:{source:"import { ProductCarousel } from '@sima-land/moleculas/desktop/components/product-carousel';\nimport { ProductInfo, Parts } from '@sima-land/moleculas/common/components/product-info';\nimport { Badge } from '@sima-land/moleculas/common/components/badge';\nimport { ReactNode } from 'react';\nimport { Layout } from '@sima-land/ui-nucleons/layout';\nimport FavSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Favorite';\nimport { items } from './fixture';\n\nexport default {\n  title: 'desktop/ProductCarousel',\n  component: ProductCarousel,\n  parameters: {\n    layout: 'fullscreen',\n  },\n};\n\nconst Placeholder = () => (\n  <div style={{ borderRadius: 4, background: '#eee', height: 40, margin: '20px 0' }} />\n);\n\nconst DemoBlock = ({ children }: { children: ReactNode }) => (\n  <Layout>\n    <Placeholder />\n    {children}\n    <Placeholder />\n  </Layout>\n);\n\nexport function Unavailable() {\n  return (\n    <DemoBlock>\n      <ProductCarousel>\n        {items.map((item, index) => (\n          <ProductInfo key={index} restriction='unavailable'>\n            <Parts.Image src={item.imageSrc} href={item.url}>\n              <Parts.ImageButton\n                icon={FavSVG}\n                position={{ x: 'left', y: 'top' }}\n                hint='Добавить в избранное'\n                hintDirection='right'\n              />\n            </Parts.Image>\n\n            {item.badges && (\n              <Parts.Badges lineLimit={1}>\n                {item.badges.map((badge, badgeIndex) => (\n                  <Badge key={badgeIndex} {...badge} />\n                ))}\n              </Parts.Badges>\n            )}\n\n            <Parts.Prices\n              price={item.price}\n              oldPrice={item.oldPrice}\n              currencyGrapheme={item.currencyGrapheme}\n              unavailableReason='Товара нет в наличии'\n            />\n\n            <Parts.Title href={item.url}>{item.name}</Parts.Title>\n\n            <Parts.Footer>\n              <Parts.WaitListAddButton onClick={() => alert('Так и быть, добавим...')} />\n            </Parts.Footer>\n          </ProductInfo>\n        ))}\n      </ProductCarousel>\n    </DemoBlock>\n  );\n}\n\nUnavailable.storyName = 'Нет в наличии';\n",locationsMap:{unavailable:{startLoc:{col:7,line:29},endLoc:{col:1,line:69},startBody:{col:7,line:29},endBody:{col:1,line:69}}}},layout:"fullscreen"}},Placeholder=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{style:{borderRadius:4,background:"#eee",height:40,margin:"20px 0"}}),DemoBlock=({children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_sima_land_ui_nucleons_layout__WEBPACK_IMPORTED_MODULE_3__.Layout,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Placeholder,{}),children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Placeholder,{})]}),Unavailable=function Unavailable(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(DemoBlock,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_moleculas_desktop_components_product_carousel__WEBPACK_IMPORTED_MODULE_0__.G,{children:_fixture__WEBPACK_IMPORTED_MODULE_5__.e.map(((item,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.ww,{restriction:"unavailable",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Image,{src:item.imageSrc,href:item.url,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.ImageButton,{icon:_sima_land_ui_quarks_icons_24x24_Stroked_Favorite__WEBPACK_IMPORTED_MODULE_4__.Z,position:{x:"left",y:"top"},hint:"Добавить в избранное",hintDirection:"right"})}),item.badges&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Badges,{lineLimit:1,children:item.badges.map(((badge,badgeIndex)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_moleculas_common_components_badge__WEBPACK_IMPORTED_MODULE_2__.C,{...badge},badgeIndex)))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Prices,{price:item.price,oldPrice:item.oldPrice,currencyGrapheme:item.currencyGrapheme,unavailableReason:"Товара нет в наличии"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Title,{href:item.url,children:item.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Footer,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.WaitListAddButton,{onClick:()=>alert("Так и быть, добавим...")})})]},index)))})})};Unavailable.storyName="Нет в наличии",Unavailable.parameters={...Unavailable.parameters,docs:{...Unavailable.parameters?.docs,source:{originalSource:"function Unavailable() {\n  return <DemoBlock>\n      <ProductCarousel>\n        {items.map((item, index) => <ProductInfo key={index} restriction='unavailable'>\n            <Parts.Image src={item.imageSrc} href={item.url}>\n              <Parts.ImageButton icon={FavSVG} position={{\n            x: 'left',\n            y: 'top'\n          }} hint='Добавить в избранное' hintDirection='right' />\n            </Parts.Image>\n\n            {item.badges && <Parts.Badges lineLimit={1}>\n                {item.badges.map((badge, badgeIndex) => <Badge key={badgeIndex} {...badge} />)}\n              </Parts.Badges>}\n\n            <Parts.Prices price={item.price} oldPrice={item.oldPrice} currencyGrapheme={item.currencyGrapheme} unavailableReason='Товара нет в наличии' />\n\n            <Parts.Title href={item.url}>{item.name}</Parts.Title>\n\n            <Parts.Footer>\n              <Parts.WaitListAddButton onClick={() => alert('Так и быть, добавим...')} />\n            </Parts.Footer>\n          </ProductInfo>)}\n      </ProductCarousel>\n    </DemoBlock>;\n}",...Unavailable.parameters?.docs?.source}}};const __namedExportsOrder=["Unavailable"]},"./docs/stories/desktop/components/product-carousel/fixture.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>items});const items=[{name:"Ножницы портновские, 19 см, цвет чёрный",imageSrc:"https://cdn3.static1-sima-land.com/items/3572134/0/280.jpg?v=1594121833",url:"https://www.sima-land.ru/",price:261,currencyGrapheme:"₽",oldPrice:void 0},{name:"Ткань тюлевая, ширина 300 см, сетка",imageSrc:"https://cdn3.static1-sima-land.com/items/4661073/0/1600.jpg?v=1604914605",url:"https://www.sima-land.ru/",price:495,currencyGrapheme:"₽",oldPrice:void 0,trademark:{name:'Торговая марка "Сима-ленд"',url:"https://www.sima-land.ru/"}},{name:"Ножницы портновские, 21,5 см, цвет чёрный/голубой",imageSrc:"https://cdn3.static1-sima-land.com/items/2300383/0/280.jpg?v=1594121773",url:"https://www.sima-land.ru/",price:238,currencyGrapheme:"₽",oldPrice:void 0,badges:[{color:"#b52ea8",fields:[{type:"text",value:"-56%"}]},{color:"#ff7200",fields:[{type:"text",value:"3 по цене 2"}]},{color:"#2962ff",fields:[{type:"text",value:"Товар месяца"}]},{color:"#00b8d4",fields:[{type:"text",value:"Акция"}]}]},{name:"Ножницы портновские, 23 см, цвет МИКС",imageSrc:"https://cdn3.static1-sima-land.com/items/1550239/0/280.jpg?v=1600179085",url:"https://www.sima-land.ru/",price:171,currencyGrapheme:"₽",oldPrice:void 0},{name:"Ножницы портновские, одинаковые кольца, 23 см, цвет чёрный",imageSrc:"https://cdn3.static1-sima-land.com/items/4002852/0/280.jpg?v=1594121894",url:"https://www.sima-land.ru/",price:483,currencyGrapheme:"₽",oldPrice:void 0},{name:"Ножницы портновские, 22,5 см, цвет чёрный",imageSrc:"https://cdn3.static1-sima-land.com/items/4005918/0/280.jpg?v=1594121898",url:"https://www.sima-land.ru/",price:988,currencyGrapheme:"₽",oldPrice:void 0},{name:"Ножницы портновские, 22 см, цвет серебряный",imageSrc:"https://cdn3.static1-sima-land.com/items/2300389/0/280.jpg?v=1594121830",url:"https://www.sima-land.ru/",price:619,currencyGrapheme:"₽",oldPrice:void 0},{name:"Ножницы портновские, с увеличенным углом наклона, 27 см, цвет чёрный",imageSrc:"https://cdn3.static1-sima-land.com/items/2117838/0/280.jpg?v=1594121766",url:"https://www.sima-land.ru/",price:539,currencyGrapheme:"₽",oldPrice:595},{name:"Ножницы портновские, с прорезиненной ручкой, 20 см, цвет чёрный/серый",imageSrc:"https://cdn3.static1-sima-land.com/items/1108673/0/280.jpg?v=1594103956",url:"https://www.sima-land.ru/",price:599,currencyGrapheme:"₽",oldPrice:717},{name:"Ножницы портновские, скошенное лезвие, 15 см, цвет серебряный",imageSrc:"https://cdn3.static1-sima-land.com/items/4150936/0/280.jpg?v=1580193932",url:"https://www.sima-land.ru/",price:253,currencyGrapheme:"₽",oldPrice:void 0}]},"./src/desktop/components/product-carousel/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>ProductCarousel});var react=__webpack_require__("./node_modules/react/index.js"),carousel=__webpack_require__("./node_modules/@sima-land/ui-nucleons/carousel/index.js"),hooks=__webpack_require__("./src/common/hooks/index.ts"),ui_nucleons_hooks=__webpack_require__("./node_modules/@sima-land/ui-nucleons/hooks/index.js"),product_info=__webpack_require__("./src/common/components/product-info/index.ts"),helpers=__webpack_require__("./node_modules/@sima-land/ui-nucleons/helpers/index.js"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),product_carousel_m=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/desktop/components/product-carousel/product-carousel.m.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(product_carousel_m.Z,options);const product_carousel_product_carousel_m=product_carousel_m.Z&&product_carousel_m.Z.locals?product_carousel_m.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(product_carousel_product_carousel_m),getSizeClasses=size=>size&&"unset"!==size?[`size-xs-${size.xs||4}`,`size-s-${size.s||3}`,`size-m-${size.m||2}`,`size-l-${size.l||2}`,`size-xl-${size.xl||2}`]:[];function ProductCarousel({infinite=!0,className,itemSize={xs:4,s:3,m:2,l:2,xl:2},itemProps,onInViewport,onNeedRequest,children}){const layer=(0,helpers.useLayer)(),needBigArrows=(0,ui_nucleons_hooks.useMedia)("(min-width: 1600px)"),rootRef=(0,react.useRef)(null),items=react.Children.toArray(children).reduce(((acc,item)=>((0,react.isValidElement)(item)&&item.type===product_info.ww&&acc.push(item),acc)),[]),firstItemRef=(0,react.useRef)(null),itemWidth=(0,hooks.T7)(firstItemRef,[items.length]),options=(0,react.useMemo)((()=>({rootMargin:"200px 0px 200px 0px"})),[]);return(0,ui_nucleons_hooks.useIntersection)(rootRef,(entry=>{entry.isIntersecting&&onNeedRequest&&onNeedRequest()}),options),(0,ui_nucleons_hooks.useIntersection)(rootRef,(entry=>{entry.isIntersecting&&onInViewport&&onInViewport()})),(0,jsx_runtime.jsx)("div",{ref:rootRef,className:cx("root",className),"data-testid":"product-carousel:root",children:items.length>0&&(0,jsx_runtime.jsx)(carousel.l,{infinite,step:3,draggable:!1,items,withControls:null!==itemWidth&&void 0,controlProps:null!==itemWidth?{size:needBigArrows?"l":"s",style:{zIndex:layer+2,top:itemWidth/2+"px"}}:void 0,renderItem:(item,realIndex)=>(0,jsx_runtime.jsx)(CarouselItem,{rootRef:0===realIndex?firstItemRef:void 0,className:cx(getSizeClasses(itemSize),itemProps?.className),style:itemProps?.style,children:item})})})}function CarouselItem({rootRef,className,children,style}){return(0,jsx_runtime.jsx)("div",{ref:rootRef,"data-testid":"product-carousel:item",className:cx("item",className),style,children})}try{ProductCarousel.displayName="ProductCarousel",ProductCarousel.__docgenInfo={description:"Карусель рекомендованных товаров.",displayName:"ProductCarousel",props:{className:{defaultValue:null,description:"CSS-класс для корневого элемента.",name:"className",required:!1,type:{name:"string | undefined"}},children:{defaultValue:null,description:"Элементы карусели.",name:"children",required:!1,type:{name:"ReactNode"}},itemSize:{defaultValue:{value:"{ xs: 4, s: 3, m: 2, l: 2, xl: 2 }"},description:"Настройки размера элемента карусели.",name:"itemSize",required:!1,type:{name:'"unset" | ItemSize | undefined'}},onInViewport:{defaultValue:null,description:"Сработает при попадании карусели во viewport.",name:"onInViewport",required:!1,type:{name:"(() => void) | undefined"}},onNeedRequest:{defaultValue:null,description:"Сработает при попадании карусели в область достаточно близкую к viewport'у.",name:"onNeedRequest",required:!1,type:{name:"(() => void) | undefined"}},itemProps:{defaultValue:null,description:"Предоставит свойства для элемента карусели.",name:"itemProps",required:!1,type:{name:"{ style?: CSSProperties | undefined; className?: string | undefined; } | undefined"}},infinite:{defaultValue:{value:"true"},description:'Активирует "бесконечную" прокрутку карусели.',name:"infinite",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/desktop/components/product-carousel/product-carousel.tsx#ProductCarousel"]={docgenInfo:ProductCarousel.__docgenInfo,name:"ProductCarousel",path:"src/desktop/components/product-carousel/product-carousel.tsx#ProductCarousel"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/desktop/components/product-carousel/product-carousel.m.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".product-carousel-m__root__fc2{position:relative;width:100%}.product-carousel-m__item__b8f{flex-shrink:0}.product-carousel-m__item__b8f:not(:last-child){margin-right:32px}@media(min-width: 1024px){.product-carousel-m__size-xs-2__f8d{width:calc((100% - (((12 / 2) - 1) * 32px))*(2 / 12))}.product-carousel-m__size-xs-3__d9d{width:calc((100% - (((12 / 3) - 1) * 32px))*(3 / 12))}.product-carousel-m__size-xs-4__c62{width:calc((100% - (((12 / 4) - 1) * 32px))*(4 / 12))}}@media(max-width: 1023px){.product-carousel-m__size-xs-2__f8d{width:calc((100% - (((12 / 2) - 1) * 32px))*(2 / 12))}.product-carousel-m__size-xs-3__d9d{width:calc((100% - (((12 / 3) - 1) * 32px))*(3 / 12))}.product-carousel-m__size-xs-4__c62{width:calc((100% - (((12 / 4) - 1) * 32px))*(4 / 12))}}@media(min-width: 1280px){.product-carousel-m__size-s-2__a9c{width:calc((100% - (((12 / 2) - 1) * 32px))*(2 / 12))}.product-carousel-m__size-s-3__e90{width:calc((100% - (((12 / 3) - 1) * 32px))*(3 / 12))}.product-carousel-m__size-s-4__ab2{width:calc((100% - (((12 / 4) - 1) * 32px))*(4 / 12))}}@media(min-width: 1440px){.product-carousel-m__size-m-2__da2{width:calc((100% - (((12 / 2) - 1) * 32px))*(2 / 12))}.product-carousel-m__size-m-3__f07{width:calc((100% - (((12 / 3) - 1) * 32px))*(3 / 12))}.product-carousel-m__size-m-4__c13{width:calc((100% - (((12 / 4) - 1) * 32px))*(4 / 12))}}@media(min-width: 1600px){.product-carousel-m__size-l-2__f9f{width:calc((100% - (((12 / 2) - 1) * 32px))*(2 / 12))}.product-carousel-m__size-l-3__ab0{width:calc((100% - (((12 / 3) - 1) * 32px))*(3 / 12))}.product-carousel-m__size-l-4__bfb{width:calc((100% - (((12 / 4) - 1) * 32px))*(4 / 12))}}@media(min-width: 1920px){.product-carousel-m__size-xl-2__a80{width:calc((100% - (((12 / 2) - 1) * 32px))*(2 / 12))}.product-carousel-m__size-xl-3__cf0{width:calc((100% - (((12 / 3) - 1) * 32px))*(3 / 12))}.product-carousel-m__size-xl-4__cd3{width:calc((100% - (((12 / 4) - 1) * 32px))*(4 / 12))}}","",{version:3,sources:["webpack://./src/desktop/components/product-carousel/product-carousel.m.scss","webpack://./node_modules/@sima-land/ui-nucleons/breakpoints.scss"],names:[],mappings:"AAeA,+BACE,iBAAA,CACA,UAAA,CAGF,+BACE,aAAA,CACA,gDACE,iBAnBK,CCmBL,0BDdA,oCACE,qDAAA,CADF,oCACE,qDAAA,CADF,oCACE,qDAAA,CAAA,CCuBF,0BDxBA,oCACE,qDAAA,CADF,oCACE,qDAAA,CADF,oCACE,qDAAA,CAAA,CCaF,0BDdA,mCACE,qDAAA,CADF,mCACE,qDAAA,CADF,mCACE,qDAAA,CAAA,CCaF,0BDdA,mCACE,qDAAA,CADF,mCACE,qDAAA,CADF,mCACE,qDAAA,CAAA,CCaF,0BDdA,mCACE,qDAAA,CADF,mCACE,qDAAA,CADF,mCACE,qDAAA,CAAA,CCaF,0BDdA,oCACE,qDAAA,CADF,oCACE,qDAAA,CADF,oCACE,qDAAA,CAAA",sourcesContent:["@use 'node_modules/@sima-land/ui-nucleons/breakpoints';\n@use 'node_modules/@sima-land/ui-nucleons/colors';\n\n$breakpoints: 'xs', 's', 'm', 'l', 'xl';\n$gutter: 32px;\n\n@mixin sizes($key) {\n  // в соответствии с гайдами ширина может быть 2/3/4\n  @for $i from 2 through 4 {\n    .size-#{$key}-#{$i} {\n      width: calc((100% - (((12 / #{$i}) - 1) * #{$gutter})) * (#{$i} / 12));\n    }\n  }\n}\n\n.root {\n  position: relative;\n  width: 100%;\n}\n\n.item {\n  flex-shrink: 0;\n  &:not(:last-child) {\n    margin-right: $gutter;\n  }\n}\n\n@each $key in $breakpoints {\n  @include breakpoints.up($key) {\n    @include sizes($key);\n  }\n  @if $key == 'xs' {\n    @include breakpoints.down($key) {\n      @include sizes($key);\n    }\n  }\n}\n",'/* stylelint-disable length-zero-no-unit */\n$map: (\n  // ВАЖНО: тут именно 0px а не 0 - в Safari нельзя использовать @media (min-width: 0)\n  mxs: 0px,\n\n  ms: 480px,\n  mm: 720px,\n  ml: 840px,\n  xs: 1024px,\n  s: 1280px,\n  m: 1440px,\n  l: 1600px,\n  xl: 1920px\n) !default;\n/* stylelint-enable length-zero-no-unit */\n\n/**\n * ВАЖНО: здесь должны быть только утилиты позволяющие применить стили ">=" либо "<" начала диапазона (breakpoint range).\n * Не должно возникать ситуаций в которых нужно применить стили "<=" или ">" начала диапазона.\n */\n\n@mixin greaterThanOrEqual($breakpoint) {\n  @if map-has-key($map, $breakpoint) {\n    @media (min-width: map-get($map, $breakpoint)) {\n      @content;\n    }\n  } @else {\n    @warn \'No such breakpoint `#{$breakpoint}`. Available values: #{map-keys($map)}.\';\n  }\n}\n\n@mixin lessThan($breakpoint) {\n  @if map-has-key($map, $breakpoint) {\n    @media (max-width: (map-get($map, $breakpoint) - 1px)) {\n      @content;\n    }\n  } @else {\n    @warn \'No such breakpoint `#{$breakpoint}`. Available values: #{map-keys($map)}.\';\n  }\n}\n\n@mixin gte($args...) {\n  @include greaterThanOrEqual($args...) {\n    @content;\n  }\n}\n\n@mixin lt($args...) {\n  @include lessThan($args...) {\n    @content;\n  }\n}\n\n/** @deprecated */\n@mixin up($args...) {\n  @include greaterThanOrEqual($args...) {\n    @content;\n  }\n}\n\n/** @deprecated */\n@mixin down($args...) {\n  @include lessThan($args...) {\n    @content;\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"product-carousel-m__root__fc2",item:"product-carousel-m__item__b8f","size-xs-2":"product-carousel-m__size-xs-2__f8d","size-xs-3":"product-carousel-m__size-xs-3__d9d","size-xs-4":"product-carousel-m__size-xs-4__c62","size-s-2":"product-carousel-m__size-s-2__a9c","size-s-3":"product-carousel-m__size-s-3__e90","size-s-4":"product-carousel-m__size-s-4__ab2","size-m-2":"product-carousel-m__size-m-2__da2","size-m-3":"product-carousel-m__size-m-3__f07","size-m-4":"product-carousel-m__size-m-4__c13","size-l-2":"product-carousel-m__size-l-2__f9f","size-l-3":"product-carousel-m__size-l-3__ab0","size-l-4":"product-carousel-m__size-l-4__bfb","size-xl-2":"product-carousel-m__size-xl-2__a80","size-xl-3":"product-carousel-m__size-xl-3__cf0","size-xl-4":"product-carousel-m__size-xl-4__cd3"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);