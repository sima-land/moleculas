"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[9045],{"./src/desktop/components/promotion-card/__stories__/01-primary.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_moleculas_desktop_components_promotion_card__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/desktop/components/promotion-card/index.ts"),date_fns__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/date-fns/addHours.mjs"),date_fns__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/date-fns/addYears.mjs"),date_fns__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/date-fns/addDays.mjs"),_images_cactus_jpg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/desktop/components/promotion-card/__stories__/images/cactus.jpg"),_images_cherry_jpg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/desktop/components/promotion-card/__stories__/images/cherry.jpg"),_images_phone_jpg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/desktop/components/promotion-card/__stories__/images/phone.jpg"),_images_ice_cream_cone_jpg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/desktop/components/promotion-card/__stories__/images/ice-cream-cone.jpg"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"desktop/PromotionCard",component:_sima_land_moleculas_desktop_components_promotion_card__WEBPACK_IMPORTED_MODULE_0__.Db,parameters:{storySource:{source:"import {\n  PromotionCard,\n  PromotionCardProps,\n} from '@sima-land/moleculas/desktop/components/promotion-card';\nimport { addDays, addHours, addYears } from 'date-fns';\nimport cactus from './images/cactus.jpg';\nimport cherry from './images/cherry.jpg';\nimport phone from './images/phone.jpg';\nimport cone from './images/ice-cream-cone.jpg';\n\nexport default {\n  title: 'desktop/PromotionCard',\n  component: PromotionCard,\n  parameters: {\n    layout: 'padded',\n  },\n};\n\nconst demoItems: PromotionCardProps[] = [\n  {\n    href: 'https://www.sima-land.ru',\n    imageSrc: cactus,\n    title: '3 уточки по цене 2-х',\n    subtitle:\n      'При покупке 2-х уточек из акции 3-я в подарок. При покупке 2-х уточек из акции 3-я в подарок',\n    dueDate: addHours(new Date(), 3),\n    promotionType: '3-by-2',\n  },\n  {\n    href: 'https://www.sima-land.ru',\n    imageSrc: cherry,\n    title: '-20% на плюшевых кроликов',\n    subtitle: 'При покупке товаров из акции от 5 000 ₽ ',\n    dueDate: addYears(new Date(), 5),\n    promotionType: 'volume-discount',\n    volumeDiscount: 23,\n  },\n  {\n    href: 'https://www.sima-land.ru',\n    imageSrc: phone,\n    title: 'Специальные цены на термосы',\n    subtitle: 'При покупке от 5 000 ₽',\n    dueDate: addDays(new Date(), 7),\n    promotionType: 'special',\n  },\n  {\n    href: 'https://www.sima-land.ru',\n    imageSrc: cone,\n    title: 'Особые условия заказа: вот прям натурально особые, по другому не скажет',\n    subtitle: 'При покупке чего-либо там какие-то условия',\n    dueDate: addDays(new Date(), 21),\n    postfix: 'Особая акция',\n  },\n];\n\nexport function Primary() {\n  return (\n    <div style={{ display: 'flex', flexWrap: 'wrap', padding: '32px' }}>\n      {demoItems.map((props, index) => (\n        <PromotionCard\n          key={index}\n          style={{ width: '320px', margin: '0 32px 32px 0', flexShrink: 0 }}\n          {...props}\n        />\n      ))}\n    </div>\n  );\n}\n\nPrimary.storyName = 'Простой пример';\n",locationsMap:{primary:{startLoc:{col:7,line:56},endLoc:{col:1,line:68},startBody:{col:7,line:56},endBody:{col:1,line:68}}}},layout:"padded"}},demoItems=[{href:"https://www.sima-land.ru",imageSrc:_images_cactus_jpg__WEBPACK_IMPORTED_MODULE_1__,title:"3 уточки по цене 2-х",subtitle:"При покупке 2-х уточек из акции 3-я в подарок. При покупке 2-х уточек из акции 3-я в подарок",dueDate:(0,date_fns__WEBPACK_IMPORTED_MODULE_6__.T)(new Date,3),promotionType:"3-by-2"},{href:"https://www.sima-land.ru",imageSrc:_images_cherry_jpg__WEBPACK_IMPORTED_MODULE_2__,title:"-20% на плюшевых кроликов",subtitle:"При покупке товаров из акции от 5 000 ₽ ",dueDate:(0,date_fns__WEBPACK_IMPORTED_MODULE_7__.B)(new Date,5),promotionType:"volume-discount",volumeDiscount:23},{href:"https://www.sima-land.ru",imageSrc:_images_phone_jpg__WEBPACK_IMPORTED_MODULE_3__,title:"Специальные цены на термосы",subtitle:"При покупке от 5 000 ₽",dueDate:(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.E)(new Date,7),promotionType:"special"},{href:"https://www.sima-land.ru",imageSrc:_images_ice_cream_cone_jpg__WEBPACK_IMPORTED_MODULE_4__,title:"Особые условия заказа: вот прям натурально особые, по другому не скажет",subtitle:"При покупке чего-либо там какие-то условия",dueDate:(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.E)(new Date,21),postfix:"Особая акция"}],Primary=function Primary(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:{display:"flex",flexWrap:"wrap",padding:"32px"},children:demoItems.map(((props,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_moleculas_desktop_components_promotion_card__WEBPACK_IMPORTED_MODULE_0__.Db,{style:{width:"320px",margin:"0 32px 32px 0",flexShrink:0},...props},index)))})};Primary.storyName="Простой пример",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"function Primary() {\n  return <div style={{\n    display: 'flex',\n    flexWrap: 'wrap',\n    padding: '32px'\n  }}>\n      {demoItems.map((props, index) => <PromotionCard key={index} style={{\n      width: '320px',\n      margin: '0 32px 32px 0',\n      flexShrink: 0\n    }} {...props} />)}\n    </div>;\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]}}]);