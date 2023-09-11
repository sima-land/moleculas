/*! For license information please see desktop-components-product-card-__stories__-index-stories.eb3179fb.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[2294],{"./node_modules/@sima-land/ui-nucleons/colors/index.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.COLORS=void 0;exports.COLORS=new Map(Object.entries({"basic-blue":"#1f84db","basic-gray87":"#212121","basic-gray76":"#3a3a3b","basic-gray66":"#545455","basic-gray54":"#757575","basic-gray38":"#9e9e9e","basic-gray24":"#c2c2c2","basic-gray12":"#e0e0e0","basic-gray8":"#ebebeb","basic-gray4":"#f5f5f5","basic-gray2":"#fafafa","basic-white":"#fff","additional-deep-red":"#d50000","additional-red":"#fb3a2f","additional-light-red":"#feebea","additional-teal":"#09ab8b","additional-green":"#00c853","additional-light-green":"#64dd17","additional-lime":"#aeea00","additional-faded-green":"#eff9ea","additional-pink":"#e82e5c","additional-purple":"#b52ea8","additional-violet":"#902bd0","additional-deep-purple":"#634bdf","additional-electric-blue":"#2962ff","additional-light-blue":"#0091ea","additional-cyan":"#00b8d4","additional-sky":"#e4f1f9","additional-deep-orange":"#ff7200","additional-amber":"#ffab00","additional-yellow":"#ffd600","additional-gold":"#d5a43b","additional-brown":"#795548","additional-blue-gray":"#607d8b","additional-deep-blue":"#00599d","additional-dark-blue":"#002b41"}))},"./src/desktop/components/product-card/__stories__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NotEnough:()=>NotEnough,Primary:()=>Primary,TestHover:()=>TestHover,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_moleculas_desktop_components_product_card__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/desktop/components/product-card/index.tsx"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/common/components/product-info/index.tsx"),_sima_land_moleculas_common_components_badge__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/common/components/badge/index.tsx"),_sima_land_ui_nucleons_stepper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/stepper/index.js"),_sima_land_ui_nucleons_colors__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/colors/index.js"),_sima_land_ui_quarks_icons_24x24_Filled_Favorite__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@sima-land/ui-quarks/icons/24x24/Filled/Favorite.js"),_sima_land_ui_quarks_icons_24x24_Stroked_Favorite__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@sima-land/ui-quarks/icons/24x24/Stroked/Favorite.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"desktop/ProductCard",component:_sima_land_moleculas_desktop_components_product_card__WEBPACK_IMPORTED_MODULE_0__.Il,parameters:{storySource:{source:"import { ProductCard } from '@sima-land/moleculas/desktop/components/product-card';\nimport { ReactNode, useState } from 'react';\nimport { ProductInfo, Parts } from '@sima-land/moleculas/common/components/product-info';\nimport { Badge, BadgeProps } from '@sima-land/moleculas/common/components/badge';\nimport { Stepper } from '@sima-land/ui-nucleons/stepper';\nimport { COLORS } from '@sima-land/ui-nucleons/colors';\nimport FavSVG from '@sima-land/ui-quarks/icons/24x24/Filled/Favorite';\nimport NotFavSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Favorite';\nexport default {\n  title: 'desktop/ProductCard',\n  component: ProductCard,\n  parameters: {\n    layout: 'padded',\n    docs: {\n      description: {\n        component: 'Компонент карточки товара'\n      }\n    }\n  }\n};\nconst badges: BadgeProps[] = [{\n  color: '#b52ea8',\n  fields: [{\n    type: 'text',\n    value: '-56%'\n  }]\n}, {\n  color: '#ff7200',\n  fields: [{\n    type: 'text',\n    value: '3 по цене 2'\n  }]\n}, {\n  color: '#2962ff',\n  fields: [{\n    type: 'text',\n    value: 'Товар месяца'\n  }]\n}, {\n  color: '#00b8d4',\n  fields: [{\n    type: 'text',\n    value: 'Акция'\n  }]\n}];\nconst data = {\n  name: 'Ножницы портновские, с прорезиненной ручкой, 20 см, цвет чёрный/серый',\n  imageSrc: 'https://loremflickr.com/360/360',\n  url: 'https://www.sima-land.ru',\n  price: 99876543.21,\n  oldPrice: 99987654.32,\n  currencyGrapheme: '₽',\n  badges,\n  trademark: {\n    name: 'Торговая марка Сима-ленд',\n    url: 'https://www.sima-land.ru'\n  }\n};\nconst Bootstrap = ({\n  children\n}: {\n  children?: ReactNode;\n}) => <div style={{\n  width: '200px',\n  margin: '20px'\n}}>{children}</div>;\nexport const Primary = () => {\n  const [wished, toggleWish] = useState<boolean>(false);\n  return <Bootstrap>\n      <ProductCard>\n        <ProductInfo>\n          <Parts.Image src={data.imageSrc} href={data.url} onClick={e => {\n          e.preventDefault();\n          console.log('Клик: ссылка на товар (изображение)');\n        }}>\n            <Parts.ImageButton icon={wished ? FavSVG : NotFavSVG} hint={wished ? 'Убрать из избранного' : 'Добавить в избранное'} fill={wished ? COLORS.get('additional-red') : undefined} onClick={() => {\n            toggleWish(a => !a);\n            console.log('Клик: добавить в избранное');\n          }} data-testid='favorite-button' />\n          </Parts.Image>\n\n          {data.badges && <Parts.Badges lineLimit={2}>\n              {data.badges.map((badge, badgeIndex) => <Badge key={badgeIndex} {...badge} onClick={() => console.log('Клик: шильдик')} />)}\n            </Parts.Badges>}\n\n          <Parts.Prices price={data.price} oldPrice={data.oldPrice} currencyGrapheme={data.currencyGrapheme} />\n\n          <Parts.Title href={data.url} onClick={e => {\n          e.preventDefault();\n          console.log('Клик: ссылка на товар');\n        }}>\n            {data.name}\n          </Parts.Title>\n\n          <Parts.TrademarkLink href={data.trademark.url} onClick={e => {\n          e.preventDefault();\n          console.log('Клик: ссылка на торговую марку');\n        }}>\n            {data.trademark.name}\n          </Parts.TrademarkLink>\n\n          <Parts.RatingCounter value={4.7} reviewCount={52} />\n\n          <Parts.Footer>\n            <Parts.CartControl stepText='По 5 шт' markupText='Комплектация + 50 ₽ при покупке до 20 шт'>\n              <Stepper defaultValue={12} size='s' style={{\n              width: '122px'\n            }} />\n            </Parts.CartControl>\n          </Parts.Footer>\n        </ProductInfo>\n      </ProductCard>\n    </Bootstrap>;\n};\nPrimary.storyName = 'Простой пример';\nexport const NotEnough = () => {\n  const [wished, toggleWish] = useState<boolean>(false);\n  return <Bootstrap>\n      <ProductCard>\n        <ProductInfo restriction='unavailable'>\n          <Parts.Image src={data.imageSrc} href={data.url} onClick={e => {\n          e.preventDefault();\n          console.log('Клик: ссылка на товар (изображение)');\n        }}>\n            <Parts.ImageButton icon={wished ? FavSVG : NotFavSVG} hint={wished ? 'Убрать из избранного' : 'Добавить в избранное'} fill={wished ? COLORS.get('additional-red') : undefined} onClick={() => {\n            toggleWish(a => !a);\n            console.log('Клик: добавить в избранное');\n          }} data-testid='favorite-button' />\n          </Parts.Image>\n\n          <Parts.Badges lineLimit={1}>\n            {data.badges.map((badge, index) => <Badge key={index} {...badge} onClick={() => console.log('Клик: шильдик')} />)}\n          </Parts.Badges>\n\n          <Parts.Prices price={data.price} oldPrice={data.oldPrice} currencyGrapheme={data.currencyGrapheme} unavailableReason='Товара нет в наличии' />\n\n          <Parts.Title href={data.url} onClick={e => {\n          e.preventDefault();\n          console.log('Клик: ссылка на товар');\n        }}>\n            {data.name}\n          </Parts.Title>\n\n          <Parts.TrademarkLink href={data.trademark.url} onClick={e => {\n          e.preventDefault();\n          console.log('Клик: ссылка на торговую марку');\n        }}>\n            {data.trademark.name}\n          </Parts.TrademarkLink>\n\n          <Parts.Footer>\n            <Parts.WaitListAddButton />\n          </Parts.Footer>\n        </ProductInfo>\n      </ProductCard>\n    </Bootstrap>;\n};\nNotEnough.storyName = 'Товара нет в наличии';\nexport const TestHover = () => <div style={{\n  display: 'flex',\n  gap: '8px',\n  flexWrap: 'wrap'\n}}>\n    {[...Array(10).keys()].map(index => <Primary key={index} />)}\n  </div>;\nTestHover.storyName = 'Тест: показ/скрытие всплывающей карточки';\nPrimary.parameters = {\n  ...Primary.parameters,\n  docs: {\n    ...Primary.parameters?.docs,\n    source: {\n      originalSource: \"() => {\\n  const [wished, toggleWish] = useState<boolean>(false);\\n  return <Bootstrap>\\n      <ProductCard>\\n        <ProductInfo>\\n          <Parts.Image src={data.imageSrc} href={data.url} onClick={e => {\\n          e.preventDefault();\\n          console.log('\\u041A\\u043B\\u0438\\u043A: \\u0441\\u0441\\u044B\\u043B\\u043A\\u0430 \\u043D\\u0430 \\u0442\\u043E\\u0432\\u0430\\u0440 (\\u0438\\u0437\\u043E\\u0431\\u0440\\u0430\\u0436\\u0435\\u043D\\u0438\\u0435)');\\n        }}>\\n            <Parts.ImageButton icon={wished ? FavSVG : NotFavSVG} hint={wished ? '\\u0423\\u0431\\u0440\\u0430\\u0442\\u044C \\u0438\\u0437 \\u0438\\u0437\\u0431\\u0440\\u0430\\u043D\\u043D\\u043E\\u0433\\u043E' : '\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C \\u0432 \\u0438\\u0437\\u0431\\u0440\\u0430\\u043D\\u043D\\u043E\\u0435'} fill={wished ? COLORS.get('additional-red') : undefined} onClick={() => {\\n            toggleWish(a => !a);\\n            console.log('\\u041A\\u043B\\u0438\\u043A: \\u0434\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C \\u0432 \\u0438\\u0437\\u0431\\u0440\\u0430\\u043D\\u043D\\u043E\\u0435');\\n          }} data-testid='favorite-button' />\\n          </Parts.Image>\\n\\n          {data.badges && <Parts.Badges lineLimit={2}>\\n              {data.badges.map((badge, badgeIndex) => <Badge key={badgeIndex} {...badge} onClick={() => console.log('\\u041A\\u043B\\u0438\\u043A: \\u0448\\u0438\\u043B\\u044C\\u0434\\u0438\\u043A')} />)}\\n            </Parts.Badges>}\\n\\n          <Parts.Prices price={data.price} oldPrice={data.oldPrice} currencyGrapheme={data.currencyGrapheme} />\\n\\n          <Parts.Title href={data.url} onClick={e => {\\n          e.preventDefault();\\n          console.log('\\u041A\\u043B\\u0438\\u043A: \\u0441\\u0441\\u044B\\u043B\\u043A\\u0430 \\u043D\\u0430 \\u0442\\u043E\\u0432\\u0430\\u0440');\\n        }}>\\n            {data.name}\\n          </Parts.Title>\\n\\n          <Parts.TrademarkLink href={data.trademark.url} onClick={e => {\\n          e.preventDefault();\\n          console.log('\\u041A\\u043B\\u0438\\u043A: \\u0441\\u0441\\u044B\\u043B\\u043A\\u0430 \\u043D\\u0430 \\u0442\\u043E\\u0440\\u0433\\u043E\\u0432\\u0443\\u044E \\u043C\\u0430\\u0440\\u043A\\u0443');\\n        }}>\\n            {data.trademark.name}\\n          </Parts.TrademarkLink>\\n\\n          <Parts.RatingCounter value={4.7} reviewCount={52} />\\n\\n          <Parts.Footer>\\n            <Parts.CartControl stepText='\\u041F\\u043E 5 \\u0448\\u0442' markupText='\\u041A\\u043E\\u043C\\u043F\\u043B\\u0435\\u043A\\u0442\\u0430\\u0446\\u0438\\u044F + 50 \\u20BD \\u043F\\u0440\\u0438 \\u043F\\u043E\\u043A\\u0443\\u043F\\u043A\\u0435 \\u0434\\u043E 20 \\u0448\\u0442'>\\n              <Stepper defaultValue={12} size='s' style={{\\n              width: '122px'\\n            }} />\\n            </Parts.CartControl>\\n          </Parts.Footer>\\n        </ProductInfo>\\n      </ProductCard>\\n    </Bootstrap>;\\n}\",\n      ...Primary.parameters?.docs?.source\n    }\n  }\n};\nNotEnough.parameters = {\n  ...NotEnough.parameters,\n  docs: {\n    ...NotEnough.parameters?.docs,\n    source: {\n      originalSource: \"() => {\\n  const [wished, toggleWish] = useState<boolean>(false);\\n  return <Bootstrap>\\n      <ProductCard>\\n        <ProductInfo restriction='unavailable'>\\n          <Parts.Image src={data.imageSrc} href={data.url} onClick={e => {\\n          e.preventDefault();\\n          console.log('\\u041A\\u043B\\u0438\\u043A: \\u0441\\u0441\\u044B\\u043B\\u043A\\u0430 \\u043D\\u0430 \\u0442\\u043E\\u0432\\u0430\\u0440 (\\u0438\\u0437\\u043E\\u0431\\u0440\\u0430\\u0436\\u0435\\u043D\\u0438\\u0435)');\\n        }}>\\n            <Parts.ImageButton icon={wished ? FavSVG : NotFavSVG} hint={wished ? '\\u0423\\u0431\\u0440\\u0430\\u0442\\u044C \\u0438\\u0437 \\u0438\\u0437\\u0431\\u0440\\u0430\\u043D\\u043D\\u043E\\u0433\\u043E' : '\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C \\u0432 \\u0438\\u0437\\u0431\\u0440\\u0430\\u043D\\u043D\\u043E\\u0435'} fill={wished ? COLORS.get('additional-red') : undefined} onClick={() => {\\n            toggleWish(a => !a);\\n            console.log('\\u041A\\u043B\\u0438\\u043A: \\u0434\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C \\u0432 \\u0438\\u0437\\u0431\\u0440\\u0430\\u043D\\u043D\\u043E\\u0435');\\n          }} data-testid='favorite-button' />\\n          </Parts.Image>\\n\\n          <Parts.Badges lineLimit={1}>\\n            {data.badges.map((badge, index) => <Badge key={index} {...badge} onClick={() => console.log('\\u041A\\u043B\\u0438\\u043A: \\u0448\\u0438\\u043B\\u044C\\u0434\\u0438\\u043A')} />)}\\n          </Parts.Badges>\\n\\n          <Parts.Prices price={data.price} oldPrice={data.oldPrice} currencyGrapheme={data.currencyGrapheme} unavailableReason='\\u0422\\u043E\\u0432\\u0430\\u0440\\u0430 \\u043D\\u0435\\u0442 \\u0432 \\u043D\\u0430\\u043B\\u0438\\u0447\\u0438\\u0438' />\\n\\n          <Parts.Title href={data.url} onClick={e => {\\n          e.preventDefault();\\n          console.log('\\u041A\\u043B\\u0438\\u043A: \\u0441\\u0441\\u044B\\u043B\\u043A\\u0430 \\u043D\\u0430 \\u0442\\u043E\\u0432\\u0430\\u0440');\\n        }}>\\n            {data.name}\\n          </Parts.Title>\\n\\n          <Parts.TrademarkLink href={data.trademark.url} onClick={e => {\\n          e.preventDefault();\\n          console.log('\\u041A\\u043B\\u0438\\u043A: \\u0441\\u0441\\u044B\\u043B\\u043A\\u0430 \\u043D\\u0430 \\u0442\\u043E\\u0440\\u0433\\u043E\\u0432\\u0443\\u044E \\u043C\\u0430\\u0440\\u043A\\u0443');\\n        }}>\\n            {data.trademark.name}\\n          </Parts.TrademarkLink>\\n\\n          <Parts.Footer>\\n            <Parts.WaitListAddButton />\\n          </Parts.Footer>\\n        </ProductInfo>\\n      </ProductCard>\\n    </Bootstrap>;\\n}\",\n      ...NotEnough.parameters?.docs?.source\n    }\n  }\n};\nTestHover.parameters = {\n  ...TestHover.parameters,\n  docs: {\n    ...TestHover.parameters?.docs,\n    source: {\n      originalSource: \"() => <div style={{\\n  display: 'flex',\\n  gap: '8px',\\n  flexWrap: 'wrap'\\n}}>\\n    {[...Array(10).keys()].map(index => <Primary key={index} />)}\\n  </div>\",\n      ...TestHover.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{primary:{startLoc:{col:23,line:67},endLoc:{col:1,line:114},startBody:{col:23,line:67},endBody:{col:1,line:114}},"not-enough":{startLoc:{col:25,line:116},endLoc:{col:1,line:157},startBody:{col:25,line:116},endBody:{col:1,line:157}},"test-hover":{startLoc:{col:25,line:159},endLoc:{col:8,line:165},startBody:{col:25,line:159},endBody:{col:8,line:165}}}},layout:"padded",docs:{description:{component:"Компонент карточки товара"}}}},data={name:"Ножницы портновские, с прорезиненной ручкой, 20 см, цвет чёрный/серый",imageSrc:"https://loremflickr.com/360/360",url:"https://www.sima-land.ru",price:99876543.21,oldPrice:99987654.32,currencyGrapheme:"₽",badges:[{color:"#b52ea8",fields:[{type:"text",value:"-56%"}]},{color:"#ff7200",fields:[{type:"text",value:"3 по цене 2"}]},{color:"#2962ff",fields:[{type:"text",value:"Товар месяца"}]},{color:"#00b8d4",fields:[{type:"text",value:"Акция"}]}],trademark:{name:"Торговая марка Сима-ленд",url:"https://www.sima-land.ru"}},Bootstrap=({children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{style:{width:"200px",margin:"20px"},children});Bootstrap.displayName="Bootstrap";const Primary=()=>{const[wished,toggleWish]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Bootstrap,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_moleculas_desktop_components_product_card__WEBPACK_IMPORTED_MODULE_0__.Il,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_2__.ww,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_2__.QL.Image,{src:data.imageSrc,href:data.url,onClick:e=>{e.preventDefault(),console.log("Клик: ссылка на товар (изображение)")},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_2__.QL.ImageButton,{icon:wished?_sima_land_ui_quarks_icons_24x24_Filled_Favorite__WEBPACK_IMPORTED_MODULE_6__.Z:_sima_land_ui_quarks_icons_24x24_Stroked_Favorite__WEBPACK_IMPORTED_MODULE_7__.Z,hint:wished?"Убрать из избранного":"Добавить в избранное",fill:wished?_sima_land_ui_nucleons_colors__WEBPACK_IMPORTED_MODULE_5__.COLORS.get("additional-red"):void 0,onClick:()=>{toggleWish((a=>!a)),console.log("Клик: добавить в избранное")},"data-testid":"favorite-button"})}),data.badges&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_2__.QL.Badges,{lineLimit:2,children:data.badges.map(((badge,badgeIndex)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_moleculas_common_components_badge__WEBPACK_IMPORTED_MODULE_3__.C,{...badge,onClick:()=>console.log("Клик: шильдик")},badgeIndex)))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_2__.QL.Prices,{price:data.price,oldPrice:data.oldPrice,currencyGrapheme:data.currencyGrapheme}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_2__.QL.Title,{href:data.url,onClick:e=>{e.preventDefault(),console.log("Клик: ссылка на товар")},children:data.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_2__.QL.TrademarkLink,{href:data.trademark.url,onClick:e=>{e.preventDefault(),console.log("Клик: ссылка на торговую марку")},children:data.trademark.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_2__.QL.RatingCounter,{value:4.7,reviewCount:52}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_2__.QL.Footer,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_2__.QL.CartControl,{stepText:"По 5 шт",markupText:"Комплектация + 50 ₽ при покупке до 20 шт",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_ui_nucleons_stepper__WEBPACK_IMPORTED_MODULE_4__.Stepper,{defaultValue:12,size:"s",style:{width:"122px"}})})})]})})})};Primary.displayName="Primary",Primary.storyName="Простой пример";const NotEnough=()=>{const[wished,toggleWish]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Bootstrap,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_moleculas_desktop_components_product_card__WEBPACK_IMPORTED_MODULE_0__.Il,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_2__.ww,{restriction:"unavailable",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_2__.QL.Image,{src:data.imageSrc,href:data.url,onClick:e=>{e.preventDefault(),console.log("Клик: ссылка на товар (изображение)")},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_2__.QL.ImageButton,{icon:wished?_sima_land_ui_quarks_icons_24x24_Filled_Favorite__WEBPACK_IMPORTED_MODULE_6__.Z:_sima_land_ui_quarks_icons_24x24_Stroked_Favorite__WEBPACK_IMPORTED_MODULE_7__.Z,hint:wished?"Убрать из избранного":"Добавить в избранное",fill:wished?_sima_land_ui_nucleons_colors__WEBPACK_IMPORTED_MODULE_5__.COLORS.get("additional-red"):void 0,onClick:()=>{toggleWish((a=>!a)),console.log("Клик: добавить в избранное")},"data-testid":"favorite-button"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_2__.QL.Badges,{lineLimit:1,children:data.badges.map(((badge,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_moleculas_common_components_badge__WEBPACK_IMPORTED_MODULE_3__.C,{...badge,onClick:()=>console.log("Клик: шильдик")},index)))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_2__.QL.Prices,{price:data.price,oldPrice:data.oldPrice,currencyGrapheme:data.currencyGrapheme,unavailableReason:"Товара нет в наличии"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_2__.QL.Title,{href:data.url,onClick:e=>{e.preventDefault(),console.log("Клик: ссылка на товар")},children:data.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_2__.QL.TrademarkLink,{href:data.trademark.url,onClick:e=>{e.preventDefault(),console.log("Клик: ссылка на торговую марку")},children:data.trademark.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_2__.QL.Footer,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_2__.QL.WaitListAddButton,{})})]})})})};NotEnough.displayName="NotEnough",NotEnough.storyName="Товара нет в наличии";const TestHover=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[...Array(10).keys()].map((index=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(Primary,{},index)))});TestHover.displayName="TestHover",TestHover.storyName="Тест: показ/скрытие всплывающей карточки",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"() => {\n  const [wished, toggleWish] = useState<boolean>(false);\n  return <Bootstrap>\n      <ProductCard>\n        <ProductInfo>\n          <Parts.Image src={data.imageSrc} href={data.url} onClick={e => {\n          e.preventDefault();\n          console.log('Клик: ссылка на товар (изображение)');\n        }}>\n            <Parts.ImageButton icon={wished ? FavSVG : NotFavSVG} hint={wished ? 'Убрать из избранного' : 'Добавить в избранное'} fill={wished ? COLORS.get('additional-red') : undefined} onClick={() => {\n            toggleWish(a => !a);\n            console.log('Клик: добавить в избранное');\n          }} data-testid='favorite-button' />\n          </Parts.Image>\n\n          {data.badges && <Parts.Badges lineLimit={2}>\n              {data.badges.map((badge, badgeIndex) => <Badge key={badgeIndex} {...badge} onClick={() => console.log('Клик: шильдик')} />)}\n            </Parts.Badges>}\n\n          <Parts.Prices price={data.price} oldPrice={data.oldPrice} currencyGrapheme={data.currencyGrapheme} />\n\n          <Parts.Title href={data.url} onClick={e => {\n          e.preventDefault();\n          console.log('Клик: ссылка на товар');\n        }}>\n            {data.name}\n          </Parts.Title>\n\n          <Parts.TrademarkLink href={data.trademark.url} onClick={e => {\n          e.preventDefault();\n          console.log('Клик: ссылка на торговую марку');\n        }}>\n            {data.trademark.name}\n          </Parts.TrademarkLink>\n\n          <Parts.RatingCounter value={4.7} reviewCount={52} />\n\n          <Parts.Footer>\n            <Parts.CartControl stepText='По 5 шт' markupText='Комплектация + 50 ₽ при покупке до 20 шт'>\n              <Stepper defaultValue={12} size='s' style={{\n              width: '122px'\n            }} />\n            </Parts.CartControl>\n          </Parts.Footer>\n        </ProductInfo>\n      </ProductCard>\n    </Bootstrap>;\n}",...Primary.parameters?.docs?.source}}},NotEnough.parameters={...NotEnough.parameters,docs:{...NotEnough.parameters?.docs,source:{originalSource:"() => {\n  const [wished, toggleWish] = useState<boolean>(false);\n  return <Bootstrap>\n      <ProductCard>\n        <ProductInfo restriction='unavailable'>\n          <Parts.Image src={data.imageSrc} href={data.url} onClick={e => {\n          e.preventDefault();\n          console.log('Клик: ссылка на товар (изображение)');\n        }}>\n            <Parts.ImageButton icon={wished ? FavSVG : NotFavSVG} hint={wished ? 'Убрать из избранного' : 'Добавить в избранное'} fill={wished ? COLORS.get('additional-red') : undefined} onClick={() => {\n            toggleWish(a => !a);\n            console.log('Клик: добавить в избранное');\n          }} data-testid='favorite-button' />\n          </Parts.Image>\n\n          <Parts.Badges lineLimit={1}>\n            {data.badges.map((badge, index) => <Badge key={index} {...badge} onClick={() => console.log('Клик: шильдик')} />)}\n          </Parts.Badges>\n\n          <Parts.Prices price={data.price} oldPrice={data.oldPrice} currencyGrapheme={data.currencyGrapheme} unavailableReason='Товара нет в наличии' />\n\n          <Parts.Title href={data.url} onClick={e => {\n          e.preventDefault();\n          console.log('Клик: ссылка на товар');\n        }}>\n            {data.name}\n          </Parts.Title>\n\n          <Parts.TrademarkLink href={data.trademark.url} onClick={e => {\n          e.preventDefault();\n          console.log('Клик: ссылка на торговую марку');\n        }}>\n            {data.trademark.name}\n          </Parts.TrademarkLink>\n\n          <Parts.Footer>\n            <Parts.WaitListAddButton />\n          </Parts.Footer>\n        </ProductInfo>\n      </ProductCard>\n    </Bootstrap>;\n}",...NotEnough.parameters?.docs?.source}}},TestHover.parameters={...TestHover.parameters,docs:{...TestHover.parameters?.docs,source:{originalSource:"() => <div style={{\n  display: 'flex',\n  gap: '8px',\n  flexWrap: 'wrap'\n}}>\n    {[...Array(10).keys()].map(index => <Primary key={index} />)}\n  </div>",...TestHover.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","NotEnough","TestHover"]},"./src/desktop/components/product-card/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{zs:()=>HoverCard,Il:()=>ProductCard});var react=__webpack_require__("./node_modules/react/index.js"),product_info=__webpack_require__("./src/common/components/product-info/index.tsx"),plate=__webpack_require__("./node_modules/@sima-land/ui-nucleons/plate/index.js"),helpers_layer=__webpack_require__("./node_modules/@sima-land/ui-nucleons/helpers/layer.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),product_card_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/desktop/components/product-card/product-card.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(product_card_module.Z,options);const product_card_product_card_module=product_card_module.Z&&product_card_module.Z.locals?product_card_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const HoverCard=(0,react.forwardRef)(((props,ref)=>{const layer=(0,helpers_layer.useLayer)()+1;return(0,jsx_runtime.jsx)(plate.Plate,{...props,style:{...props.style,zIndex:layer},ref,rounds:"m",shadow:"z4",className:classnames_default()(product_card_product_card_module.card,props.className),"data-testid":"product-card:hover-card"})})),ProductCard=({children,className,...props})=>{const[hovered,toggle]=(0,react.useState)(!1);return(0,jsx_runtime.jsxs)("div",{...props,"data-testid":"product-card",className:classnames_default()(product_card_product_card_module.root,className),onMouseEnter:()=>toggle(!0),onMouseLeave:()=>toggle(!1),children:[(0,jsx_runtime.jsx)("div",{"data-testid":"product-card:info",children:reduceBaseInfo(children)}),hovered&&(0,jsx_runtime.jsx)(HoverCard,{children:reduceHoverInfo(children)})]})};ProductCard.displayName="ProductCard";const reduceBaseInfo=el=>(0,react.cloneElement)(el,{children:react.Children.map(el.props.children,(child=>{let result;if((0,react.isValidElement)(child))switch(child.type){case product_info.QL.Image:result=(0,react.cloneElement)(child,{children:void 0});break;case product_info.QL.Footer:result=null;break;default:result=child}return result}))}),reduceHoverInfo=el=>(0,react.cloneElement)(el,{children:react.Children.map(el.props.children,(child=>(0,react.isValidElement)(child)&&child.type===product_info.QL.Image?(0,react.cloneElement)(child,{opacity:1}):child))});try{HoverCard.displayName="HoverCard",HoverCard.__docgenInfo={description:"",displayName:"HoverCard",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/desktop/components/product-card/index.tsx#HoverCard"]={docgenInfo:HoverCard.__docgenInfo,name:"HoverCard",path:"src/desktop/components/product-card/index.tsx#HoverCard"})}catch(__react_docgen_typescript_loader_error){}try{ProductCard.displayName="ProductCard",ProductCard.__docgenInfo={description:"Карточка данных товара с расширенной инф-ой при наведении.",displayName:"ProductCard",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/desktop/components/product-card/index.tsx#ProductCard"]={docgenInfo:ProductCard.__docgenInfo,name:"ProductCard",path:"src/desktop/components/product-card/index.tsx#ProductCard"})}catch(__react_docgen_typescript_loader_error){}try{reduceBaseInfo.displayName="reduceBaseInfo",reduceBaseInfo.__docgenInfo={description:"Фильтрует содержимое карточки для вывода состояния без наведения.",displayName:"reduceBaseInfo",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/desktop/components/product-card/index.tsx#reduceBaseInfo"]={docgenInfo:reduceBaseInfo.__docgenInfo,name:"reduceBaseInfo",path:"src/desktop/components/product-card/index.tsx#reduceBaseInfo"})}catch(__react_docgen_typescript_loader_error){}try{reduceHoverInfo.displayName="reduceHoverInfo",reduceHoverInfo.__docgenInfo={description:"Получив содержимое карточки фильтрует/меняет его для вывода в карточке при наведении.",displayName:"reduceHoverInfo",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/desktop/components/product-card/index.tsx#reduceHoverInfo"]={docgenInfo:reduceHoverInfo.__docgenInfo,name:"reduceHoverInfo",path:"src/desktop/components/product-card/index.tsx#reduceHoverInfo"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/desktop/components/product-card/product-card.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".product-card-module__root__a46{position:relative;max-width:400px}.product-card-module__card__f0c{position:absolute;top:-16px;left:-16px;padding:16px 16px 24px;width:calc(100% + 32px)}","",{version:3,sources:["webpack://./src/desktop/components/product-card/product-card.module.scss"],names:[],mappings:"AAAA,gCACE,iBAAA,CACA,eAAA,CAGF,gCACE,iBAAA,CACA,SAAA,CACA,UAAA,CACA,sBAAA,CACA,uBAAA",sourcesContent:[".root {\n  position: relative;\n  max-width: 400px;\n}\n\n.card {\n  position: absolute;\n  top: -16px;\n  left: -16px;\n  padding: 16px 16px 24px;\n  width: calc(100% + 32px);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"product-card-module__root__a46",card:"product-card-module__card__f0c"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);