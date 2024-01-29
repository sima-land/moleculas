"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[2925],{"./node_modules/@sima-land/ui-nucleons/colors/index.js":(__unused_webpack_module,exports)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.COLORS=exports.COLOR=void 0,exports.COLOR={"basic-blue":"#1f84db","basic-gray87":"#212121","basic-gray76":"#3a3a3b","basic-gray66":"#545455","basic-gray54":"#757575","basic-gray38":"#9e9e9e","basic-gray24":"#c2c2c2","basic-gray12":"#e0e0e0","basic-gray8":"#ebebeb","basic-gray4":"#f5f5f5","basic-gray2":"#fafafa","basic-white":"#fff","additional-deep-red":"#d50000","additional-red":"#fb3a2f","additional-light-red":"#feebea","additional-dark-teal":"#089176","additional-teal":"#09ab8b","additional-green":"#00c853","additional-light-green":"#64dd17","additional-lime":"#aeea00","additional-faded-green":"#eff9ea","additional-pink":"#e82e5c","additional-purple":"#b52ea8","additional-violet":"#902bd0","additional-deep-purple":"#634bdf","additional-electric-blue":"#2962ff","additional-light-blue":"#0091ea","additional-cyan":"#00b8d4","additional-sky":"#e4f1f9","additional-deep-orange":"#ff7200","additional-amber":"#ffab00","additional-yellow":"#ffd600","additional-gold":"#d5a43b","additional-brown":"#795548","additional-blue-gray":"#607d8b","additional-deep-blue":"#00599d","additional-dark-blue":"#002b41","additional-unlit-blue":"#1b75c2"},exports.COLORS=new Map(Object.entries(exports.COLOR))},"./src/desktop/components/product-card/__stories__/10-test-multiple-hover.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TestMultipleHover:()=>TestMultipleHover,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_moleculas_desktop_components_product_card__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/desktop/components/product-card/index.ts"),_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/common/components/product-info/index.tsx"),_sima_land_moleculas_common_components_badge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/common/components/badge/index.tsx"),_sima_land_ui_nucleons_stepper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/stepper/index.js"),_sima_land_ui_quarks_icons_24x24_Stroked_Favorite__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@sima-land/ui-quarks/icons/24x24/Stroked/Favorite.js"),_cup_jpg__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/desktop/components/product-card/__stories__/cup.jpg"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"desktop/ProductCard",component:_sima_land_moleculas_desktop_components_product_card__WEBPACK_IMPORTED_MODULE_0__.Il,parameters:{storySource:{source:"import { ProductCard, reduceBaseInfo } from '@sima-land/moleculas/desktop/components/product-card';\nimport { ProductInfo, Parts } from '@sima-land/moleculas/common/components/product-info';\nimport { Badge, BadgeProps } from '@sima-land/moleculas/common/components/badge';\nimport { Stepper } from '@sima-land/ui-nucleons/stepper';\nimport FavSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Favorite';\nimport cupSrc from './cup.jpg';\nexport default {\n  title: 'desktop/ProductCard',\n  component: ProductCard,\n  parameters: {\n    layout: 'padded',\n    docs: {\n      description: {\n        component: 'Компонент карточки товара'\n      }\n    }\n  }\n};\nfunction SomeCard() {\n  const badges: BadgeProps[] = [{\n    color: '#b52ea8',\n    fields: [{\n      type: 'text',\n      value: '-56%'\n    }]\n  }, {\n    color: '#ff7200',\n    fields: [{\n      type: 'text',\n      value: '3 по цене 2'\n    }]\n  }, {\n    color: '#2962ff',\n    fields: [{\n      type: 'text',\n      value: 'Товар месяца'\n    }]\n  }, {\n    color: '#00b8d4',\n    fields: [{\n      type: 'text',\n      value: 'Акция'\n    }]\n  }];\n  return <div style={{\n    width: '200px'\n  }}>\n      <ProductCard reduceBaseInfo={elem => reduceBaseInfo(elem, {\n      hideImageButtons: false\n    })}>\n        <ProductInfo>\n          {/* Изображение */}\n          <Parts.Image src={cupSrc} href='https://www.sima-land.ru'>\n            <Parts.ImageButton icon={FavSVG} position={{\n            x: 'left',\n            y: 'top'\n          }} hint='Добавить в избранное' hintDirection='right' />\n          </Parts.Image>\n\n          {/* Шильдики */}\n          <Parts.Badges lineLimit={2}>\n            {badges.map((badge, badgeIndex) => <Badge key={badgeIndex} {...badge} />)}\n          </Parts.Badges>\n\n          {/* Цены */}\n          <Parts.Prices price={99876543.21} oldPrice={99987654.32} currencyGrapheme='₽' />\n\n          {/* Название */}\n          <Parts.Title href='https://www.sima-land.ru'>\n            Ножницы портновские, с прорезиненной ручкой, 20 см, цвет чёрный/серый\n          </Parts.Title>\n\n          {/* Ссылка под названием */}\n          <Parts.TrademarkLink href='https://www.sima-land.ru/offers/'>\n            Торговая марка Сима-ленд\n          </Parts.TrademarkLink>\n\n          {/* Рейтинг */}\n          <Parts.RatingCounter value={4.7} reviewCount={52} />\n\n          {/* Произвольный контент */}\n          <Parts.Footer>\n            <Parts.CartControl stepText='По 5 шт' markupText='Комплектация + 50 ₽ при покупке до 20 шт'>\n              <Stepper defaultValue={12} size='s' style={{\n              width: '122px'\n            }} />\n            </Parts.CartControl>\n          </Parts.Footer>\n        </ProductInfo>\n      </ProductCard>\n    </div>;\n}\nexport function TestMultipleHover() {\n  return <div style={{\n    display: 'flex',\n    gap: '32px',\n    flexWrap: 'wrap',\n    padding: '32px'\n  }}>\n      {[...Array(10).keys()].map(index => <SomeCard key={index} />)}\n    </div>;\n}\nTestMultipleHover.storyName = 'Тест: показ/скрытие всплывающей карточки';\nTestMultipleHover.parameters = {\n  ...TestMultipleHover.parameters,\n  docs: {\n    ...TestMultipleHover.parameters?.docs,\n    source: {\n      originalSource: \"function TestMultipleHover() {\\n  return <div style={{\\n    display: 'flex',\\n    gap: '32px',\\n    flexWrap: 'wrap',\\n    padding: '32px'\\n  }}>\\n      {[...Array(10).keys()].map(index => <SomeCard key={index} />)}\\n    </div>;\\n}\",\n      ...TestMultipleHover.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{"test-multiple-hover":{startLoc:{col:7,line:93},endLoc:{col:1,line:102},startBody:{col:7,line:93},endBody:{col:1,line:102}}}},layout:"padded",docs:{description:{component:"Компонент карточки товара"}}}};function SomeCard(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{style:{width:"200px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_moleculas_desktop_components_product_card__WEBPACK_IMPORTED_MODULE_0__.Il,{reduceBaseInfo:elem=>(0,_sima_land_moleculas_desktop_components_product_card__WEBPACK_IMPORTED_MODULE_0__.Rs)(elem,{hideImageButtons:!1}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.ww,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Image,{src:_cup_jpg__WEBPACK_IMPORTED_MODULE_5__,href:"https://www.sima-land.ru",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.ImageButton,{icon:_sima_land_ui_quarks_icons_24x24_Stroked_Favorite__WEBPACK_IMPORTED_MODULE_4__.Z,position:{x:"left",y:"top"},hint:"Добавить в избранное",hintDirection:"right"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Badges,{lineLimit:2,children:[{color:"#b52ea8",fields:[{type:"text",value:"-56%"}]},{color:"#ff7200",fields:[{type:"text",value:"3 по цене 2"}]},{color:"#2962ff",fields:[{type:"text",value:"Товар месяца"}]},{color:"#00b8d4",fields:[{type:"text",value:"Акция"}]}].map(((badge,badgeIndex)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_moleculas_common_components_badge__WEBPACK_IMPORTED_MODULE_2__.C,{...badge},badgeIndex)))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Prices,{price:99876543.21,oldPrice:99987654.32,currencyGrapheme:"₽"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Title,{href:"https://www.sima-land.ru",children:"Ножницы портновские, с прорезиненной ручкой, 20 см, цвет чёрный/серый"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.TrademarkLink,{href:"https://www.sima-land.ru/offers/",children:"Торговая марка Сима-ленд"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.RatingCounter,{value:4.7,reviewCount:52}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Footer,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.CartControl,{stepText:"По 5 шт",markupText:"Комплектация + 50 ₽ при покупке до 20 шт",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_ui_nucleons_stepper__WEBPACK_IMPORTED_MODULE_3__.v,{defaultValue:12,size:"s",style:{width:"122px"}})})})]})})})}SomeCard.displayName="SomeCard";const TestMultipleHover=function TestMultipleHover(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{style:{display:"flex",gap:"32px",flexWrap:"wrap",padding:"32px"},children:[...Array(10).keys()].map((index=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(SomeCard,{},index)))})};TestMultipleHover.displayName="TestMultipleHover",TestMultipleHover.storyName="Тест: показ/скрытие всплывающей карточки",TestMultipleHover.parameters={...TestMultipleHover.parameters,docs:{...TestMultipleHover.parameters?.docs,source:{originalSource:"function TestMultipleHover() {\n  return <div style={{\n    display: 'flex',\n    gap: '32px',\n    flexWrap: 'wrap',\n    padding: '32px'\n  }}>\n      {[...Array(10).keys()].map(index => <SomeCard key={index} />)}\n    </div>;\n}",...TestMultipleHover.parameters?.docs?.source}}};const __namedExportsOrder=["TestMultipleHover"]},"./src/desktop/components/product-card/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{zs:()=>HoverCard,Il:()=>ProductCard,Rs:()=>reduceBaseInfo,lG:()=>reduceHoverInfo});var react=__webpack_require__("./node_modules/react/index.js"),product_info=__webpack_require__("./src/common/components/product-info/index.tsx"),plate=__webpack_require__("./node_modules/@sima-land/ui-nucleons/plate/index.js"),helpers=__webpack_require__("./node_modules/@sima-land/ui-nucleons/helpers/index.js"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),product_card_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/desktop/components/product-card/product-card.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(product_card_module.Z,options);const product_card_product_card_module=product_card_module.Z&&product_card_module.Z.locals?product_card_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(product_card_product_card_module);function ProductCard({reduceBaseInfo:reduceBaseInfoProp=reduceBaseInfo,reduceHoverInfo:reduceHoverInfoProp=reduceHoverInfo,children,className,...props}){const[hovered,toggle]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)("div",{...props,"data-testid":"product-card",className:cx("root",className),onMouseEnter:()=>toggle(!0),onMouseLeave:()=>toggle(!1),children:[(0,jsx_runtime.jsx)("div",{"data-testid":"product-card:info",children:reduceBaseInfoProp(children)}),hovered&&(0,jsx_runtime.jsx)(HoverCard,{children:reduceHoverInfoProp(children)})]})}ProductCard.displayName="ProductCard";const HoverCard=(0,react.forwardRef)(((props,ref)=>{const layer=(0,helpers.sJ)()+1;return(0,jsx_runtime.jsx)(plate.Plate,{...props,style:{...props.style,zIndex:layer},ref,rounds:"m",shadow:"z4",className:cx("card",props.className),"data-testid":"product-card:hover-card"})}));function reduceBaseInfo(element,{hideImageButtons=!0,hideFooter=!0}={}){return(0,react.cloneElement)(element,{children:react.Children.map(element.props.children,(child=>{let result;if((0,react.isValidElement)(child))switch(!0){case Boolean(child.type===product_info.QL.Image&&hideImageButtons):result=(0,react.cloneElement)(child,{children:"function"==typeof hideImageButtons?react.Children.toArray(child.props.children).filter(hideImageButtons):void 0});break;case Boolean(child.type===product_info.QL.Footer&&hideFooter):result=null;break;default:result=child}return result}))})}function reduceHoverInfo(element){return(0,react.cloneElement)(element,{children:react.Children.map(element.props.children,(child=>{let result;if((0,react.isValidElement)(child))if(child.type===product_info.QL.Image)result=(0,react.cloneElement)(child,{opacity:1});else result=child;return result}))})}try{ProductCard.displayName="ProductCard",ProductCard.__docgenInfo={description:"Карточка данных товара с расширенной инф-ой при наведении.",displayName:"ProductCard",props:{children:{defaultValue:null,description:"Содержимое.",name:"children",required:!0,type:{name:"ProductCardChildren"}},reduceBaseInfo:{defaultValue:null,description:"Получив содержимое должен вернуть то что будет выведено без наведения.",name:"reduceBaseInfo",required:!1,type:{name:"((children: ProductCardChildren) => ReactNode) | undefined"}},reduceHoverInfo:{defaultValue:null,description:"Получив содержимое должен вернуть то что будет выведено во всплывающей карточке.",name:"reduceHoverInfo",required:!1,type:{name:"((children: ProductCardChildren) => ReactNode) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/desktop/components/product-card/product-card.tsx#ProductCard"]={docgenInfo:ProductCard.__docgenInfo,name:"ProductCard",path:"src/desktop/components/product-card/product-card.tsx#ProductCard"})}catch(__react_docgen_typescript_loader_error){}try{reduceBaseInfo.displayName="reduceBaseInfo",reduceBaseInfo.__docgenInfo={description:"Фильтрует содержимое карточки для вывода состояния без наведения.",displayName:"reduceBaseInfo",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/desktop/components/product-card/product-card.tsx#reduceBaseInfo"]={docgenInfo:reduceBaseInfo.__docgenInfo,name:"reduceBaseInfo",path:"src/desktop/components/product-card/product-card.tsx#reduceBaseInfo"})}catch(__react_docgen_typescript_loader_error){}try{reduceHoverInfo.displayName="reduceHoverInfo",reduceHoverInfo.__docgenInfo={description:"Получив содержимое карточки фильтрует/меняет его для вывода в карточке при наведении.",displayName:"reduceHoverInfo",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/desktop/components/product-card/product-card.tsx#reduceHoverInfo"]={docgenInfo:reduceHoverInfo.__docgenInfo,name:"reduceHoverInfo",path:"src/desktop/components/product-card/product-card.tsx#reduceHoverInfo"})}catch(__react_docgen_typescript_loader_error){}try{HoverCard.displayName="HoverCard",HoverCard.__docgenInfo={description:"",displayName:"HoverCard",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/desktop/components/product-card/product-card.tsx#HoverCard"]={docgenInfo:HoverCard.__docgenInfo,name:"HoverCard",path:"src/desktop/components/product-card/product-card.tsx#HoverCard"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/desktop/components/product-card/product-card.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".product-card-module__root__a46{position:relative;max-width:400px}.product-card-module__card__f0c{position:absolute;top:-16px;left:-16px;padding:16px 16px 24px;width:calc(100% + 32px)}","",{version:3,sources:["webpack://./src/desktop/components/product-card/product-card.module.scss"],names:[],mappings:"AAAA,gCACE,iBAAA,CACA,eAAA,CAGF,gCACE,iBAAA,CACA,SAAA,CACA,UAAA,CACA,sBAAA,CACA,uBAAA",sourcesContent:[".root {\n  position: relative;\n  max-width: 400px;\n}\n\n.card {\n  position: absolute;\n  top: -16px;\n  left: -16px;\n  padding: 16px 16px 24px;\n  width: calc(100% + 32px);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"product-card-module__root__a46",card:"product-card-module__card__f0c"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/desktop/components/product-card/__stories__/cup.jpg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/cup.a9fe6c2f.jpg"}}]);