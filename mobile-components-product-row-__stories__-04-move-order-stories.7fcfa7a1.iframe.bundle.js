"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[6146],{"./src/mobile/components/product-row/__stories__/04-move-order.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MoveOrder:()=>MoveOrder,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_moleculas_mobile_components_product_row__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/mobile/components/product-row/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"mobile/ProductRow",component:_sima_land_moleculas_mobile_components_product_row__WEBPACK_IMPORTED_MODULE_0__.B,parameters:{storySource:{source:"import { ProductRow, ProductRowProps } from '@sima-land/moleculas/mobile/components/product-row';\nimport { ReactNode } from 'react';\n\nexport default {\n  title: 'mobile/ProductRow',\n  component: ProductRow,\n  parameters: {\n    layout: 'padded',\n  },\n};\n\nconst productData: ProductRowProps = {\n  itemUrl: 'https://www.sima-land.ru',\n  imageUrl: 'https://cdn3.static1-sima-land.com/items/4243920/0/280.jpg?v=1584652193',\n  name: 'Достаточно длинное тестовое название (возможно оно даже не влезет полностью)',\n  sid: 123456,\n  count: 12,\n  unit: 'шт.',\n  currencyGrapheme: 'р',\n  commonPrice: 1234 * 12,\n  itemPrice: 1234,\n};\n\nfunction Container({ children }: { children: ReactNode }) {\n  return <div style={{ width: '480px', margin: '80px auto' }}>{children}</div>;\n}\n\nexport function MoveOrder() {\n  return (\n    <Container>\n      <ProductRow {...productData} movedOrderId={20304} />\n    </Container>\n  );\n}\n\nMoveOrder.storyName = 'Перемещен в заказ';\n",locationsMap:{"move-order":{startLoc:{col:7,line:28},endLoc:{col:1,line:34},startBody:{col:7,line:28},endBody:{col:1,line:34}}}},layout:"padded"}},productData={itemUrl:"https://www.sima-land.ru",imageUrl:"https://cdn3.static1-sima-land.com/items/4243920/0/280.jpg?v=1584652193",name:"Достаточно длинное тестовое название (возможно оно даже не влезет полностью)",sid:123456,count:12,unit:"шт.",currencyGrapheme:"р",commonPrice:14808,itemPrice:1234};function Container({children}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{width:"480px",margin:"80px auto"},children})}const MoveOrder=function MoveOrder(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Container,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sima_land_moleculas_mobile_components_product_row__WEBPACK_IMPORTED_MODULE_0__.B,{...productData,movedOrderId:20304})})};MoveOrder.storyName="Перемещен в заказ",MoveOrder.parameters={...MoveOrder.parameters,docs:{...MoveOrder.parameters?.docs,source:{originalSource:"function MoveOrder() {\n  return <Container>\n      <ProductRow {...productData} movedOrderId={20304} />\n    </Container>;\n}",...MoveOrder.parameters?.docs?.source}}};const __namedExportsOrder=["MoveOrder"]},"./src/mobile/components/product-row/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>ProductRow});var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),product_row_m=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/mobile/components/product-row/product-row.m.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(product_row_m.Z,options);const product_row_product_row_m=product_row_m.Z&&product_row_m.Z.locals?product_row_m.Z.locals:void 0;var bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),ui_nucleons_link=__webpack_require__("./node_modules/@sima-land/ui-nucleons/link/index.js"),price=__webpack_require__("./node_modules/@sima-land/ui-nucleons/price/index.js"),box=__webpack_require__("./node_modules/@sima-land/ui-nucleons/box/index.js"),ui_nucleons_text=__webpack_require__("./node_modules/@sima-land/ui-nucleons/text/index.js"),stroked_svg=__webpack_require__("./node_modules/@sima-land/ui-nucleons/stroked-svg/index.js"),More=__webpack_require__("./node_modules/@sima-land/ui-quarks/dist/esm/icons/24x24/Filled/More.js"),Favorite=__webpack_require__("./node_modules/@sima-land/ui-quarks/dist/esm/icons/24x24/Filled/Favorite.js"),Stroked_Favorite=__webpack_require__("./node_modules/@sima-land/ui-quarks/dist/esm/icons/24x24/Stroked/Favorite.js"),colors=__webpack_require__("./node_modules/@sima-land/ui-nucleons/colors/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(product_row_product_row_m);function ProductRow({itemUrl,imageUrl,name,sid,isWished,count,unit,initialCount,movedOrderId,notInStock,currencyGrapheme,commonPrice,itemPrice,onWishButtonClick,onActionsClick,isFetchingWishItems}){return(0,jsx_runtime.jsxs)("div",{className:cx("wrapper"),children:[(0,jsx_runtime.jsxs)("div",{className:cx("image-wrapper"),children:[(0,jsx_runtime.jsx)(ui_nucleons_link.Link,{href:itemUrl,children:(0,jsx_runtime.jsx)("img",{src:imageUrl,className:cx("image")})}),onWishButtonClick&&(0,jsx_runtime.jsx)(stroked_svg.Y,{className:cx("wish-button"),fill:isWished?colors.COLORS.get("additional-red"):void 0,component:isWished?Favorite.Z:Stroked_Favorite.Z,onClick:isFetchingWishItems?void 0:onWishButtonClick})]}),(0,jsx_runtime.jsxs)("div",{className:cx("info-column"),children:[(0,jsx_runtime.jsx)(ui_nucleons_link.Link,{href:itemUrl,className:cx("link"),color:"basic-gray87",children:(0,jsx_runtime.jsx)(ui_nucleons_text.xv,{weight:600,children:name})}),(0,jsx_runtime.jsx)(box.x,{marginTop:2,children:(0,jsx_runtime.jsxs)(ui_nucleons_text.xv,{color:"basic-gray38",children:["Арт.: ",sid]})}),Boolean(initialCount)&&(0,jsx_runtime.jsx)(box.x,{marginTop:2,children:(0,jsx_runtime.jsxs)(ui_nucleons_text.xv,{element:"div",size:12,children:[(0,jsx_runtime.jsx)("div",{children:`Было в заказе: ${initialCount} ${unit}`}),(0,jsx_runtime.jsx)("div",{children:`Вы получите: ${count} ${unit}`})]})}),Boolean(itemPrice)&&(0,jsx_runtime.jsx)(box.x,{marginTop:2,children:(0,jsx_runtime.jsxs)(ui_nucleons_text.xv,{element:"div",weight:600,size:12,children:[(0,jsx_runtime.jsx)(price.tA,{value:itemPrice,currencyGrapheme}),` × ${count} ${unit}`]})}),Boolean(commonPrice&&itemPrice)&&(0,jsx_runtime.jsx)(box.x,{marginTop:4,children:(0,jsx_runtime.jsx)(ui_nucleons_text.xv,{element:"div",weight:600,children:(0,jsx_runtime.jsx)(price.tA,{value:commonPrice,currencyGrapheme})})}),Boolean(movedOrderId)&&(0,jsx_runtime.jsxs)(box.x,{marginTop:2,children:[(0,jsx_runtime.jsx)(ui_nucleons_text.xv,{element:"div",color:"basic-gray38",children:"Перемещен в заказ"}),(0,jsx_runtime.jsxs)(ui_nucleons_link.Link,{children:["№",movedOrderId]})]}),notInStock&&(0,jsx_runtime.jsx)(box.x,{marginTop:2,children:(0,jsx_runtime.jsx)(ui_nucleons_text.xv,{element:"div",color:"basic-gray38",children:"Нет на складе"})})]}),(0,jsx_runtime.jsx)("div",{className:cx("action-button"),children:(0,jsx_runtime.jsx)(More.Z,{onClick:onActionsClick})})]})}try{ProductRow.displayName="ProductRow",ProductRow.__docgenInfo={description:"Карточка товара для вертикальных списков товаров.",displayName:"ProductRow",props:{commonPrice:{defaultValue:null,description:"Общая сумма товара.",name:"commonPrice",required:!0,type:{name:"number"}},count:{defaultValue:null,description:"Количество товара, которое будет доставлено.",name:"count",required:!1,type:{name:"number | undefined"}},currencyGrapheme:{defaultValue:null,description:"Символ валюты.",name:"currencyGrapheme",required:!0,type:{name:"string"}},imageUrl:{defaultValue:null,description:"Ссылка на картинку товара.",name:"imageUrl",required:!0,type:{name:"string"}},initialCount:{defaultValue:null,description:"Изначально добавленное количество товара при заказе.",name:"initialCount",required:!1,type:{name:"number | undefined"}},isFetchingWishItems:{defaultValue:null,description:"Признак загрузки добавления товара в список избранного.",name:"isFetchingWishItems",required:!1,type:{name:"boolean | undefined"}},isWished:{defaultValue:null,description:"Товар добавлен в избранное.",name:"isWished",required:!1,type:{name:"boolean | undefined"}},itemPrice:{defaultValue:null,description:"Цена товара за единицу.",name:"itemPrice",required:!0,type:{name:"number"}},itemUrl:{defaultValue:null,description:"Ссылка на страницу товара.",name:"itemUrl",required:!0,type:{name:"string"}},movedOrderId:{defaultValue:null,description:"Id заказа в который перемещен товар.",name:"movedOrderId",required:!1,type:{name:"number | undefined"}},name:{defaultValue:null,description:"Название товара.",name:"name",required:!0,type:{name:"string"}},notInStock:{defaultValue:null,description:"Признак товара не в наличии.",name:"notInStock",required:!1,type:{name:"boolean | undefined"}},onActionsClick:{defaultValue:null,description:"Обработчик нажатия на кнопку действий над товаром.",name:"onActionsClick",required:!1,type:{name:"(() => void) | undefined"}},onWishButtonClick:{defaultValue:null,description:"Обработчик добавления/удаления в избранное.",name:"onWishButtonClick",required:!1,type:{name:"(() => void) | undefined"}},sid:{defaultValue:null,description:"Артикул товара.",name:"sid",required:!0,type:{name:"number"}},unit:{defaultValue:null,description:"Единицы измерения.",name:"unit",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/mobile/components/product-row/product-row.tsx#ProductRow"]={docgenInfo:ProductRow.__docgenInfo,name:"ProductRow",path:"src/mobile/components/product-row/product-row.tsx#ProductRow"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/mobile/components/product-row/product-row.m.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".product-row-m__wrapper__bd5{display:flex;font-size:14px}.product-row-m__wrapper__bd5:not(:last-of-type){border-bottom:1px solid #e0e0e0}.product-row-m__image-wrapper__cd1{flex-shrink:0;margin-right:12px;margin-left:16px;position:relative;width:120px}@media(min-width: 720px){.product-row-m__image-wrapper__cd1{margin-left:0}}.product-row-m__image-wrapper__cd1 .product-row-m__image__b1d{height:auto;max-width:100%}.product-row-m__image-wrapper__cd1 .product-row-m__wish-button__a0e{position:absolute;right:10px;top:11px}.product-row-m__info-column__c55{flex-grow:1}.product-row-m__link__be5{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;line-clamp:2}.product-row-m__action-button__ec1{padding:20px;margin:-28px -12px;align-self:baseline}@media(min-width: 720px){.product-row-m__action-button__ec1{margin:-28px -20px}}","",{version:3,sources:["webpack://./src/mobile/components/product-row/product-row.m.scss"],names:[],mappings:"AAEA,6BACE,YAAA,CACA,cAAA,CACA,gDACE,+BAAA,CAIJ,mCACE,aAAA,CACA,iBAAA,CACA,gBAAA,CACA,iBAAA,CACA,WAAA,CAEA,yBAPF,mCAQI,aAAA,CAAA,CAEF,8DACE,WAAA,CACA,cAAA,CAEF,oEACE,iBAAA,CACA,UAAA,CACA,QAAA,CAIJ,iCACE,WAAA,CAGF,0BACE,eAAA,CACA,sBAAA,CACA,mBAAA,CACA,oBAAA,CACA,2BAAA,CACA,YAAA,CAGF,mCACE,YAAA,CACA,kBAAA,CACA,mBAAA,CACA,yBAJF,mCAKI,kBAAA,CAAA",sourcesContent:["@use 'node_modules/@sima-land/ui-nucleons/colors';\n\n.wrapper {\n  display: flex;\n  font-size: 14px;\n  &:not(:last-of-type) {\n    border-bottom: 1px solid colors.$basic-gray12;\n  }\n}\n\n.image-wrapper {\n  flex-shrink: 0;\n  margin-right: 12px;\n  margin-left: 16px;\n  position: relative;\n  width: 120px;\n\n  @media (min-width: 720px) {\n    margin-left: 0;\n  }\n  .image {\n    height: auto;\n    max-width: 100%;\n  }\n  .wish-button {\n    position: absolute;\n    right: 10px;\n    top: 11px;\n  }\n}\n\n.info-column {\n  flex-grow: 1;\n}\n\n.link {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  line-clamp: 2;\n}\n\n.action-button {\n  padding: 20px;\n  margin: -28px -12px;\n  align-self: baseline;\n  @media (min-width: 720px) {\n    margin: -28px -20px;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={wrapper:"product-row-m__wrapper__bd5","image-wrapper":"product-row-m__image-wrapper__cd1",image:"product-row-m__image__b1d","wish-button":"product-row-m__wish-button__a0e","info-column":"product-row-m__info-column__c55",link:"product-row-m__link__be5","action-button":"product-row-m__action-button__ec1"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);