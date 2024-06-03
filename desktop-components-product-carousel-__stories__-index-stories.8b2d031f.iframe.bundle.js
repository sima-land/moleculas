"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[4479],{"./src/desktop/components/product-carousel/__stories__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Adult:()=>Adult,CustomItemSize:()=>CustomItemSize,DeferredData:()=>DeferredData,FewItems:()=>FewItems,Primary:()=>Primary,Unavailable:()=>Unavailable,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_moleculas_desktop_components_product_carousel__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/desktop/components/product-carousel/index.ts"),_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/common/components/product-info/index.ts"),_sima_land_moleculas_common_components_badge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/common/components/badge/index.ts"),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),_sima_land_ui_nucleons_layout__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/layout/index.js"),_sima_land_ui_nucleons_stepper__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/stepper/index.js"),_sima_land_ui_nucleons_button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/button/index.js"),_sima_land_ui_quarks_icons_24x24_Stroked_Favorite__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@sima-land/ui-quarks/dist/esm/icons/24x24/Stroked/Favorite.js"),_sima_land_ui_quarks_icons_24x24_Stroked_ComparisonAdd__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@sima-land/ui-quarks/dist/esm/icons/24x24/Stroked/ComparisonAdd.js"),_test_test_items__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/desktop/components/product-carousel/__test__/test-items.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"desktop/ProductCarousel",component:_sima_land_moleculas_desktop_components_product_carousel__WEBPACK_IMPORTED_MODULE_0__.G,parameters:{storySource:{source:"import { ProductCarousel } from '@sima-land/moleculas/desktop/components/product-carousel';\nimport { ProductInfo, Parts } from '@sima-land/moleculas/common/components/product-info';\nimport { Badge } from '@sima-land/moleculas/common/components/badge';\nimport { ReactNode, useState } from 'react';\nimport { Layout } from '@sima-land/ui-nucleons/layout';\nimport { Stepper } from '@sima-land/ui-nucleons/stepper';\nimport { Button } from '@sima-land/ui-nucleons/button';\nimport FavSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Favorite';\nimport ComparisonAddSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/ComparisonAdd';\nimport { items } from '../__test__/test-items';\n\nexport default {\n  title: 'desktop/ProductCarousel',\n  component: ProductCarousel,\n  parameters: {\n    layout: 'fullscreen',\n    docs: {\n      description: {\n        component: 'Компонент карусели рекомендаций',\n      },\n    },\n  },\n};\n\nconst Placeholder = () => (\n  <div style={{ borderRadius: 4, background: '#eee', height: 40, margin: '20px 0' }} />\n);\n\nconst DemoBlock = ({ children }: { children: ReactNode }) => (\n  <Layout>\n    <Placeholder />\n    {children}\n    <Placeholder />\n  </Layout>\n);\n\nexport function Primary() {\n  return (\n    <DemoBlock>\n      <ProductCarousel>\n        {items.map((item, index) => (\n          <ProductInfo key={index}>\n            <Parts.Image src={item.imageSrc} href={item.url}>\n              <Parts.ImageButton\n                icon={FavSVG}\n                position={{ x: 'left', y: 'top' }}\n                hint='Добавить в избранное'\n                hintDirection='right'\n              />\n              <Parts.ImageButton\n                icon={ComparisonAddSVG}\n                position={{ x: 'right', y: 'top' }}\n                hint='Добавить в сравнение'\n                hintDirection='left'\n              />\n            </Parts.Image>\n\n            {item.badges && (\n              <Parts.Badges lineLimit={1}>\n                {item.badges.map((badge, badgeIndex) => (\n                  <Badge key={badgeIndex} {...badge} />\n                ))}\n              </Parts.Badges>\n            )}\n\n            <Parts.Prices\n              price={item.price}\n              oldPrice={item.oldPrice}\n              currencyGrapheme={item.currencyGrapheme}\n            />\n\n            <Parts.Title href={item.url}>{item.name}</Parts.Title>\n\n            <Parts.RatingCounter value={4.7} reviewCount={52} />\n\n            <Parts.Footer>\n              <Parts.CartControl\n                stepText='По 5 шт'\n                markupText='Комплектация + 50 ₽ при покупке до 20 шт'\n              >\n                <Stepper defaultValue={3} size='s' style={{ width: '122px' }} />\n              </Parts.CartControl>\n            </Parts.Footer>\n          </ProductInfo>\n        ))}\n      </ProductCarousel>\n    </DemoBlock>\n  );\n}\n\nPrimary.storyName = 'Простой пример';\n\nexport function Unavailable() {\n  return (\n    <DemoBlock>\n      <ProductCarousel>\n        {items.map((item, index) => (\n          <ProductInfo key={index} restriction='unavailable'>\n            <Parts.Image src={item.imageSrc} href={item.url}>\n              <Parts.ImageButton\n                icon={FavSVG}\n                position={{ x: 'left', y: 'top' }}\n                hint='Добавить в избранное'\n                hintDirection='right'\n              />\n            </Parts.Image>\n\n            {item.badges && (\n              <Parts.Badges lineLimit={1}>\n                {item.badges.map((badge, badgeIndex) => (\n                  <Badge key={badgeIndex} {...badge} />\n                ))}\n              </Parts.Badges>\n            )}\n\n            <Parts.Prices\n              price={item.price}\n              oldPrice={item.oldPrice}\n              currencyGrapheme={item.currencyGrapheme}\n              unavailableReason='Товара нет в наличии'\n            />\n\n            <Parts.Title href={item.url}>{item.name}</Parts.Title>\n\n            <Parts.Footer>\n              <Parts.WaitListAddButton onClick={() => alert('Так и быть, добавим...')} />\n            </Parts.Footer>\n          </ProductInfo>\n        ))}\n      </ProductCarousel>\n    </DemoBlock>\n  );\n}\n\nUnavailable.storyName = 'Нет в наличии';\n\nexport function Adult() {\n  return (\n    <DemoBlock>\n      <ProductCarousel>\n        {items.map((item, index) => (\n          <ProductInfo key={index} restriction='adult'>\n            <Parts.Image src={item.imageSrc} href={item.url}>\n              <Parts.ImageButton\n                icon={FavSVG}\n                position={{ x: 'left', y: 'top' }}\n                hint='Добавить в избранное'\n                hintDirection='right'\n              />\n            </Parts.Image>\n\n            <Parts.Prices\n              price={item.price}\n              oldPrice={item.oldPrice}\n              currencyGrapheme={item.currencyGrapheme}\n            />\n\n            <Parts.Title href={item.url}>{item.name}</Parts.Title>\n\n            <Parts.Footer>\n              <Parts.AdultConfirmButton onClick={() => alert('Поверим на слово...')} />\n            </Parts.Footer>\n          </ProductInfo>\n        ))}\n      </ProductCarousel>\n    </DemoBlock>\n  );\n}\n\nAdult.storyName = 'Товары для взрослых';\n\nexport function DeferredData() {\n  const [ready, setReady] = useState<boolean>(false);\n\n  return (\n    <DemoBlock>\n      <Button onClick={() => setReady(true)} size='s' style={{ marginBottom: 20 }}>\n        Загрузить\n      </Button>\n\n      <ProductCarousel>\n        {(ready ? items : []).map((item, index) => (\n          <ProductInfo key={index}>\n            <Parts.Image\n              src={item.imageSrc}\n              href={item.url}\n              onClick={e => {\n                e.preventDefault();\n                console.log('Клик: ссылка на товар (изображение)');\n              }}\n            >\n              <Parts.ImageButton\n                icon={FavSVG}\n                position={{ x: 'left', y: 'top' }}\n                hint='Добавить в избранное'\n                hintDirection='right'\n              />\n            </Parts.Image>\n\n            {item.badges && (\n              <Parts.Badges lineLimit={1}>\n                {item.badges.map((badge, badgeIndex) => (\n                  <Badge key={badgeIndex} {...badge} onClick={() => console.log('Клик: шильдик')} />\n                ))}\n              </Parts.Badges>\n            )}\n\n            <Parts.Prices\n              price={item.price}\n              oldPrice={item.oldPrice}\n              currencyGrapheme={item.currencyGrapheme}\n            />\n\n            <Parts.Title\n              href={item.url}\n              onClick={e => {\n                e.preventDefault();\n                console.log('Клик: ссылка на товар');\n              }}\n            >\n              {item.name}\n            </Parts.Title>\n\n            <Parts.Footer>\n              <Parts.CartControl\n                stepText='По 5 шт'\n                markupText='Комплектация + 50 ₽ при покупке до 20 шт'\n              >\n                <Stepper defaultValue={3} size='s' style={{ width: '122px' }} />\n              </Parts.CartControl>\n            </Parts.Footer>\n          </ProductInfo>\n        ))}\n      </ProductCarousel>\n    </DemoBlock>\n  );\n}\n\nDeferredData.storyName = 'Тест: загрузка после mount';\n\nexport function FewItems() {\n  return (\n    <DemoBlock>\n      <ProductCarousel>\n        {items.slice(0, 4).map((item, index) => (\n          <ProductInfo key={index}>\n            <Parts.Image\n              src={item.imageSrc}\n              href={item.url}\n              onClick={e => {\n                e.preventDefault();\n                console.log('Клик: ссылка на товар (изображение)');\n              }}\n            >\n              <Parts.ImageButton\n                icon={FavSVG}\n                position={{ x: 'left', y: 'top' }}\n                hint='Добавить в избранное'\n                hintDirection='right'\n              />\n            </Parts.Image>\n\n            {item.badges && (\n              <Parts.Badges lineLimit={1}>\n                {item.badges.map((badge, badgeIndex) => (\n                  <Badge key={badgeIndex} {...badge} onClick={() => console.log('Клик: шильдик')} />\n                ))}\n              </Parts.Badges>\n            )}\n\n            <Parts.Prices\n              price={item.price}\n              oldPrice={item.oldPrice}\n              currencyGrapheme={item.currencyGrapheme}\n            />\n\n            <Parts.Title\n              href={item.url}\n              onClick={e => {\n                e.preventDefault();\n                console.log('Клик: ссылка на товар');\n              }}\n            >\n              {item.name}\n            </Parts.Title>\n\n            <Parts.Footer>\n              <Parts.CartControl\n                stepText='По 5 шт'\n                markupText='Комплектация + 50 ₽ при покупке до 20 шт'\n              >\n                <Stepper defaultValue={3} size='s' style={{ width: '122px' }} />\n              </Parts.CartControl>\n            </Parts.Footer>\n          </ProductInfo>\n        ))}\n      </ProductCarousel>\n    </DemoBlock>\n  );\n}\n\nFewItems.storyName = 'Мало товаров для прокрутки';\n\nexport function CustomItemSize() {\n  return (\n    <div style={{ margin: '40px', width: '400px' }}>\n      <ProductCarousel\n        itemSize='unset'\n        itemProps={{ style: { width: 'calc((400px / 2) - 16px)' } }}\n      >\n        {items.map((item, index) => (\n          <ProductInfo key={index}>\n            <Parts.Image src={item.imageSrc} href={item.url}>\n              <Parts.ImageButton\n                icon={FavSVG}\n                position={{ x: 'left', y: 'top' }}\n                hint='Добавить в избранное'\n                hintDirection='right'\n              />\n            </Parts.Image>\n\n            {item.badges && (\n              <Parts.Badges lineLimit={1}>\n                {item.badges.map((badge, badgeIndex) => (\n                  <Badge key={badgeIndex} {...badge} />\n                ))}\n              </Parts.Badges>\n            )}\n\n            <Parts.Prices\n              price={item.price}\n              oldPrice={item.oldPrice}\n              currencyGrapheme={item.currencyGrapheme}\n            />\n\n            <Parts.Title href={item.url}>{item.name}</Parts.Title>\n\n            <Parts.Footer>\n              <Parts.CartControl stepText='По 5 шт'>\n                <Stepper defaultValue={3} size='s' style={{ width: '122px' }} />\n              </Parts.CartControl>\n            </Parts.Footer>\n          </ProductInfo>\n        ))}\n      </ProductCarousel>\n    </div>\n  );\n}\n\nCustomItemSize.storyName = 'Пример: пользовательский размер элемента';\n",locationsMap:{primary:{startLoc:{col:7,line:37},endLoc:{col:1,line:89},startBody:{col:7,line:37},endBody:{col:1,line:89}},unavailable:{startLoc:{col:7,line:93},endLoc:{col:1,line:133},startBody:{col:7,line:93},endBody:{col:1,line:133}},adult:{startLoc:{col:7,line:137},endLoc:{col:1,line:168},startBody:{col:7,line:137},endBody:{col:1,line:168}},"deferred-data":{startLoc:{col:7,line:172},endLoc:{col:1,line:237},startBody:{col:7,line:172},endBody:{col:1,line:237}},"few-items":{startLoc:{col:7,line:241},endLoc:{col:1,line:300},startBody:{col:7,line:241},endBody:{col:1,line:300}},"custom-item-size":{startLoc:{col:7,line:304},endLoc:{col:1,line:348},startBody:{col:7,line:304},endBody:{col:1,line:348}}}},layout:"fullscreen",docs:{description:{component:"Компонент карусели рекомендаций"}}}},Placeholder=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{style:{borderRadius:4,background:"#eee",height:40,margin:"20px 0"}}),DemoBlock=({children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_sima_land_ui_nucleons_layout__WEBPACK_IMPORTED_MODULE_4__.Layout,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(Placeholder,{}),children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(Placeholder,{})]}),Primary=function Primary(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(DemoBlock,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_desktop_components_product_carousel__WEBPACK_IMPORTED_MODULE_0__.G,{children:_test_test_items__WEBPACK_IMPORTED_MODULE_9__.e.map(((item,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.ww,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Image,{src:item.imageSrc,href:item.url,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.ImageButton,{icon:_sima_land_ui_quarks_icons_24x24_Stroked_Favorite__WEBPACK_IMPORTED_MODULE_7__.Z,position:{x:"left",y:"top"},hint:"Добавить в избранное",hintDirection:"right"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.ImageButton,{icon:_sima_land_ui_quarks_icons_24x24_Stroked_ComparisonAdd__WEBPACK_IMPORTED_MODULE_8__.Z,position:{x:"right",y:"top"},hint:"Добавить в сравнение",hintDirection:"left"})]}),item.badges&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Badges,{lineLimit:1,children:item.badges.map(((badge,badgeIndex)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_badge__WEBPACK_IMPORTED_MODULE_2__.C,{...badge},badgeIndex)))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Prices,{price:item.price,oldPrice:item.oldPrice,currencyGrapheme:item.currencyGrapheme}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Title,{href:item.url,children:item.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.RatingCounter,{value:4.7,reviewCount:52}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Footer,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.CartControl,{stepText:"По 5 шт",markupText:"Комплектация + 50 ₽ при покупке до 20 шт",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_ui_nucleons_stepper__WEBPACK_IMPORTED_MODULE_5__.v,{defaultValue:3,size:"s",style:{width:"122px"}})})})]},index)))})})};Primary.storyName="Простой пример";const Unavailable=function Unavailable(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(DemoBlock,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_desktop_components_product_carousel__WEBPACK_IMPORTED_MODULE_0__.G,{children:_test_test_items__WEBPACK_IMPORTED_MODULE_9__.e.map(((item,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.ww,{restriction:"unavailable",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Image,{src:item.imageSrc,href:item.url,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.ImageButton,{icon:_sima_land_ui_quarks_icons_24x24_Stroked_Favorite__WEBPACK_IMPORTED_MODULE_7__.Z,position:{x:"left",y:"top"},hint:"Добавить в избранное",hintDirection:"right"})}),item.badges&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Badges,{lineLimit:1,children:item.badges.map(((badge,badgeIndex)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_badge__WEBPACK_IMPORTED_MODULE_2__.C,{...badge},badgeIndex)))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Prices,{price:item.price,oldPrice:item.oldPrice,currencyGrapheme:item.currencyGrapheme,unavailableReason:"Товара нет в наличии"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Title,{href:item.url,children:item.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Footer,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.WaitListAddButton,{onClick:()=>alert("Так и быть, добавим...")})})]},index)))})})};Unavailable.storyName="Нет в наличии";const Adult=function Adult(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(DemoBlock,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_desktop_components_product_carousel__WEBPACK_IMPORTED_MODULE_0__.G,{children:_test_test_items__WEBPACK_IMPORTED_MODULE_9__.e.map(((item,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.ww,{restriction:"adult",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Image,{src:item.imageSrc,href:item.url,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.ImageButton,{icon:_sima_land_ui_quarks_icons_24x24_Stroked_Favorite__WEBPACK_IMPORTED_MODULE_7__.Z,position:{x:"left",y:"top"},hint:"Добавить в избранное",hintDirection:"right"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Prices,{price:item.price,oldPrice:item.oldPrice,currencyGrapheme:item.currencyGrapheme}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Title,{href:item.url,children:item.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Footer,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.AdultConfirmButton,{onClick:()=>alert("Поверим на слово...")})})]},index)))})})};Adult.storyName="Товары для взрослых";const DeferredData=function DeferredData(){const[ready,setReady]=(0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(DemoBlock,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_ui_nucleons_button__WEBPACK_IMPORTED_MODULE_6__.z,{onClick:()=>setReady(!0),size:"s",style:{marginBottom:20},children:"Загрузить"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_desktop_components_product_carousel__WEBPACK_IMPORTED_MODULE_0__.G,{children:(ready?_test_test_items__WEBPACK_IMPORTED_MODULE_9__.e:[]).map(((item,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.ww,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Image,{src:item.imageSrc,href:item.url,onClick:e=>{e.preventDefault(),console.log("Клик: ссылка на товар (изображение)")},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.ImageButton,{icon:_sima_land_ui_quarks_icons_24x24_Stroked_Favorite__WEBPACK_IMPORTED_MODULE_7__.Z,position:{x:"left",y:"top"},hint:"Добавить в избранное",hintDirection:"right"})}),item.badges&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Badges,{lineLimit:1,children:item.badges.map(((badge,badgeIndex)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_badge__WEBPACK_IMPORTED_MODULE_2__.C,{...badge,onClick:()=>console.log("Клик: шильдик")},badgeIndex)))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Prices,{price:item.price,oldPrice:item.oldPrice,currencyGrapheme:item.currencyGrapheme}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Title,{href:item.url,onClick:e=>{e.preventDefault(),console.log("Клик: ссылка на товар")},children:item.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Footer,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.CartControl,{stepText:"По 5 шт",markupText:"Комплектация + 50 ₽ при покупке до 20 шт",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_ui_nucleons_stepper__WEBPACK_IMPORTED_MODULE_5__.v,{defaultValue:3,size:"s",style:{width:"122px"}})})})]},index)))})]})};DeferredData.storyName="Тест: загрузка после mount";const FewItems=function FewItems(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(DemoBlock,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_desktop_components_product_carousel__WEBPACK_IMPORTED_MODULE_0__.G,{children:_test_test_items__WEBPACK_IMPORTED_MODULE_9__.e.slice(0,4).map(((item,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.ww,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Image,{src:item.imageSrc,href:item.url,onClick:e=>{e.preventDefault(),console.log("Клик: ссылка на товар (изображение)")},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.ImageButton,{icon:_sima_land_ui_quarks_icons_24x24_Stroked_Favorite__WEBPACK_IMPORTED_MODULE_7__.Z,position:{x:"left",y:"top"},hint:"Добавить в избранное",hintDirection:"right"})}),item.badges&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Badges,{lineLimit:1,children:item.badges.map(((badge,badgeIndex)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_badge__WEBPACK_IMPORTED_MODULE_2__.C,{...badge,onClick:()=>console.log("Клик: шильдик")},badgeIndex)))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Prices,{price:item.price,oldPrice:item.oldPrice,currencyGrapheme:item.currencyGrapheme}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Title,{href:item.url,onClick:e=>{e.preventDefault(),console.log("Клик: ссылка на товар")},children:item.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Footer,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.CartControl,{stepText:"По 5 шт",markupText:"Комплектация + 50 ₽ при покупке до 20 шт",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_ui_nucleons_stepper__WEBPACK_IMPORTED_MODULE_5__.v,{defaultValue:3,size:"s",style:{width:"122px"}})})})]},index)))})})};FewItems.storyName="Мало товаров для прокрутки";const CustomItemSize=function CustomItemSize(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{style:{margin:"40px",width:"400px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_desktop_components_product_carousel__WEBPACK_IMPORTED_MODULE_0__.G,{itemSize:"unset",itemProps:{style:{width:"calc((400px / 2) - 16px)"}},children:_test_test_items__WEBPACK_IMPORTED_MODULE_9__.e.map(((item,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.ww,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Image,{src:item.imageSrc,href:item.url,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.ImageButton,{icon:_sima_land_ui_quarks_icons_24x24_Stroked_Favorite__WEBPACK_IMPORTED_MODULE_7__.Z,position:{x:"left",y:"top"},hint:"Добавить в избранное",hintDirection:"right"})}),item.badges&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Badges,{lineLimit:1,children:item.badges.map(((badge,badgeIndex)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_badge__WEBPACK_IMPORTED_MODULE_2__.C,{...badge},badgeIndex)))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Prices,{price:item.price,oldPrice:item.oldPrice,currencyGrapheme:item.currencyGrapheme}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Title,{href:item.url,children:item.name}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.Footer,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_moleculas_common_components_product_info__WEBPACK_IMPORTED_MODULE_1__.QL.CartControl,{stepText:"По 5 шт",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_sima_land_ui_nucleons_stepper__WEBPACK_IMPORTED_MODULE_5__.v,{defaultValue:3,size:"s",style:{width:"122px"}})})})]},index)))})})};CustomItemSize.storyName="Пример: пользовательский размер элемента",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"function Primary() {\n  return <DemoBlock>\n      <ProductCarousel>\n        {items.map((item, index) => <ProductInfo key={index}>\n            <Parts.Image src={item.imageSrc} href={item.url}>\n              <Parts.ImageButton icon={FavSVG} position={{\n            x: 'left',\n            y: 'top'\n          }} hint='Добавить в избранное' hintDirection='right' />\n              <Parts.ImageButton icon={ComparisonAddSVG} position={{\n            x: 'right',\n            y: 'top'\n          }} hint='Добавить в сравнение' hintDirection='left' />\n            </Parts.Image>\n\n            {item.badges && <Parts.Badges lineLimit={1}>\n                {item.badges.map((badge, badgeIndex) => <Badge key={badgeIndex} {...badge} />)}\n              </Parts.Badges>}\n\n            <Parts.Prices price={item.price} oldPrice={item.oldPrice} currencyGrapheme={item.currencyGrapheme} />\n\n            <Parts.Title href={item.url}>{item.name}</Parts.Title>\n\n            <Parts.RatingCounter value={4.7} reviewCount={52} />\n\n            <Parts.Footer>\n              <Parts.CartControl stepText='По 5 шт' markupText='Комплектация + 50 ₽ при покупке до 20 шт'>\n                <Stepper defaultValue={3} size='s' style={{\n              width: '122px'\n            }} />\n              </Parts.CartControl>\n            </Parts.Footer>\n          </ProductInfo>)}\n      </ProductCarousel>\n    </DemoBlock>;\n}",...Primary.parameters?.docs?.source}}},Unavailable.parameters={...Unavailable.parameters,docs:{...Unavailable.parameters?.docs,source:{originalSource:"function Unavailable() {\n  return <DemoBlock>\n      <ProductCarousel>\n        {items.map((item, index) => <ProductInfo key={index} restriction='unavailable'>\n            <Parts.Image src={item.imageSrc} href={item.url}>\n              <Parts.ImageButton icon={FavSVG} position={{\n            x: 'left',\n            y: 'top'\n          }} hint='Добавить в избранное' hintDirection='right' />\n            </Parts.Image>\n\n            {item.badges && <Parts.Badges lineLimit={1}>\n                {item.badges.map((badge, badgeIndex) => <Badge key={badgeIndex} {...badge} />)}\n              </Parts.Badges>}\n\n            <Parts.Prices price={item.price} oldPrice={item.oldPrice} currencyGrapheme={item.currencyGrapheme} unavailableReason='Товара нет в наличии' />\n\n            <Parts.Title href={item.url}>{item.name}</Parts.Title>\n\n            <Parts.Footer>\n              <Parts.WaitListAddButton onClick={() => alert('Так и быть, добавим...')} />\n            </Parts.Footer>\n          </ProductInfo>)}\n      </ProductCarousel>\n    </DemoBlock>;\n}",...Unavailable.parameters?.docs?.source}}},Adult.parameters={...Adult.parameters,docs:{...Adult.parameters?.docs,source:{originalSource:"function Adult() {\n  return <DemoBlock>\n      <ProductCarousel>\n        {items.map((item, index) => <ProductInfo key={index} restriction='adult'>\n            <Parts.Image src={item.imageSrc} href={item.url}>\n              <Parts.ImageButton icon={FavSVG} position={{\n            x: 'left',\n            y: 'top'\n          }} hint='Добавить в избранное' hintDirection='right' />\n            </Parts.Image>\n\n            <Parts.Prices price={item.price} oldPrice={item.oldPrice} currencyGrapheme={item.currencyGrapheme} />\n\n            <Parts.Title href={item.url}>{item.name}</Parts.Title>\n\n            <Parts.Footer>\n              <Parts.AdultConfirmButton onClick={() => alert('Поверим на слово...')} />\n            </Parts.Footer>\n          </ProductInfo>)}\n      </ProductCarousel>\n    </DemoBlock>;\n}",...Adult.parameters?.docs?.source}}},DeferredData.parameters={...DeferredData.parameters,docs:{...DeferredData.parameters?.docs,source:{originalSource:"function DeferredData() {\n  const [ready, setReady] = useState<boolean>(false);\n  return <DemoBlock>\n      <Button onClick={() => setReady(true)} size='s' style={{\n      marginBottom: 20\n    }}>\n        Загрузить\n      </Button>\n\n      <ProductCarousel>\n        {(ready ? items : []).map((item, index) => <ProductInfo key={index}>\n            <Parts.Image src={item.imageSrc} href={item.url} onClick={e => {\n          e.preventDefault();\n          console.log('Клик: ссылка на товар (изображение)');\n        }}>\n              <Parts.ImageButton icon={FavSVG} position={{\n            x: 'left',\n            y: 'top'\n          }} hint='Добавить в избранное' hintDirection='right' />\n            </Parts.Image>\n\n            {item.badges && <Parts.Badges lineLimit={1}>\n                {item.badges.map((badge, badgeIndex) => <Badge key={badgeIndex} {...badge} onClick={() => console.log('Клик: шильдик')} />)}\n              </Parts.Badges>}\n\n            <Parts.Prices price={item.price} oldPrice={item.oldPrice} currencyGrapheme={item.currencyGrapheme} />\n\n            <Parts.Title href={item.url} onClick={e => {\n          e.preventDefault();\n          console.log('Клик: ссылка на товар');\n        }}>\n              {item.name}\n            </Parts.Title>\n\n            <Parts.Footer>\n              <Parts.CartControl stepText='По 5 шт' markupText='Комплектация + 50 ₽ при покупке до 20 шт'>\n                <Stepper defaultValue={3} size='s' style={{\n              width: '122px'\n            }} />\n              </Parts.CartControl>\n            </Parts.Footer>\n          </ProductInfo>)}\n      </ProductCarousel>\n    </DemoBlock>;\n}",...DeferredData.parameters?.docs?.source}}},FewItems.parameters={...FewItems.parameters,docs:{...FewItems.parameters?.docs,source:{originalSource:"function FewItems() {\n  return <DemoBlock>\n      <ProductCarousel>\n        {items.slice(0, 4).map((item, index) => <ProductInfo key={index}>\n            <Parts.Image src={item.imageSrc} href={item.url} onClick={e => {\n          e.preventDefault();\n          console.log('Клик: ссылка на товар (изображение)');\n        }}>\n              <Parts.ImageButton icon={FavSVG} position={{\n            x: 'left',\n            y: 'top'\n          }} hint='Добавить в избранное' hintDirection='right' />\n            </Parts.Image>\n\n            {item.badges && <Parts.Badges lineLimit={1}>\n                {item.badges.map((badge, badgeIndex) => <Badge key={badgeIndex} {...badge} onClick={() => console.log('Клик: шильдик')} />)}\n              </Parts.Badges>}\n\n            <Parts.Prices price={item.price} oldPrice={item.oldPrice} currencyGrapheme={item.currencyGrapheme} />\n\n            <Parts.Title href={item.url} onClick={e => {\n          e.preventDefault();\n          console.log('Клик: ссылка на товар');\n        }}>\n              {item.name}\n            </Parts.Title>\n\n            <Parts.Footer>\n              <Parts.CartControl stepText='По 5 шт' markupText='Комплектация + 50 ₽ при покупке до 20 шт'>\n                <Stepper defaultValue={3} size='s' style={{\n              width: '122px'\n            }} />\n              </Parts.CartControl>\n            </Parts.Footer>\n          </ProductInfo>)}\n      </ProductCarousel>\n    </DemoBlock>;\n}",...FewItems.parameters?.docs?.source}}},CustomItemSize.parameters={...CustomItemSize.parameters,docs:{...CustomItemSize.parameters?.docs,source:{originalSource:"function CustomItemSize() {\n  return <div style={{\n    margin: '40px',\n    width: '400px'\n  }}>\n      <ProductCarousel itemSize='unset' itemProps={{\n      style: {\n        width: 'calc((400px / 2) - 16px)'\n      }\n    }}>\n        {items.map((item, index) => <ProductInfo key={index}>\n            <Parts.Image src={item.imageSrc} href={item.url}>\n              <Parts.ImageButton icon={FavSVG} position={{\n            x: 'left',\n            y: 'top'\n          }} hint='Добавить в избранное' hintDirection='right' />\n            </Parts.Image>\n\n            {item.badges && <Parts.Badges lineLimit={1}>\n                {item.badges.map((badge, badgeIndex) => <Badge key={badgeIndex} {...badge} />)}\n              </Parts.Badges>}\n\n            <Parts.Prices price={item.price} oldPrice={item.oldPrice} currencyGrapheme={item.currencyGrapheme} />\n\n            <Parts.Title href={item.url}>{item.name}</Parts.Title>\n\n            <Parts.Footer>\n              <Parts.CartControl stepText='По 5 шт'>\n                <Stepper defaultValue={3} size='s' style={{\n              width: '122px'\n            }} />\n              </Parts.CartControl>\n            </Parts.Footer>\n          </ProductInfo>)}\n      </ProductCarousel>\n    </div>;\n}",...CustomItemSize.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Unavailable","Adult","DeferredData","FewItems","CustomItemSize"]}}]);