"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[5646],{"./docs/stories/desktop/components/gallery-modal/06-with-review-not-affect.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithReviewNotAffect:()=>WithReviewNotAffect,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_moleculas_desktop_components_gallery_modal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/desktop/components/gallery-modal/index.ts"),_sima_land_ui_nucleons_link__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/link/index.js"),_fixture__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./docs/stories/desktop/components/gallery-modal/fixture.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"desktop/GalleryModal",component:_sima_land_moleculas_desktop_components_gallery_modal__WEBPACK_IMPORTED_MODULE_0__.Y,parameters:{storySource:{source:"import { GalleryModal } from '@sima-land/moleculas/desktop/components/gallery-modal';\nimport { Link } from '@sima-land/ui-nucleons/link';\nimport { data } from './fixture';\n\nexport default {\n  title: 'desktop/GalleryModal',\n  component: GalleryModal,\n  parameters: {\n    layout: 'padded',\n  },\n};\n\nconst longText =\n  'Двухшовная, однотонная, без логотипа, без посторонних запахов. На ребенке(1,5г.) сидит #отлично, на глаза не сползает, а взрослому-мала, уши не закрывает. Возможно, если взрослый будет лысый, то - норм), но если волосы все таки есть, то пиши пропало. Не понравилась, слишком мягкая, не держится на голове, все время съезжает. В результате абсолютно мокрая голова и куча потерянного времени, чтобы постоянно ее поправлять. Под водой крокодил смотрится эпично, очень забавно)) слому-мала, уши не закрывает. Возможно, если взрослый будет лысый, то - норм), но если волосы все таки есть, то пиши пропало. Не понравилась, слишком мягкая, не держится на голове, все время съезжает. В результате абсолютно мокрая голова и куча потерянного времени, чтобы постоянно ее поправлять. Под водой крокодил смотрится эпично, очень забавно)) слому-мала, уши не закрывает. Возможно, если взрослый будет лысый, то - норм), но если волосы все таки есть, то пиши пропало. Не понравилась, слишком мягкая, не держится на голове, все время съезжает. В результате абсолютно мокрая голова и куча потерянного времени, чтобы постоянно ее поправлять. Под водой крокодил смотрится эпично, очень забавно)) слому-мала, уши не закрывает. Возможно, если взрослый будет лысый, то - норм), но если волосы все таки есть, то пиши пропало. Не понравилась, слишком мягкая, не держится на голове, все время съезжает. В результате абсолютно мокрая голова и куча потерянного времени, чтобы постоянно ее поправлять. Под водой крокодил смотрится эпично, очень забавно))';\n\nexport function WithReviewNotAffect() {\n  const markup = (\n    <>\n      {longText\n        .replace(/(#[А-яA-z0-9]+)/g, '{divider}$1{divider}')\n        .split('{divider}')\n        .map((item, index) =>\n          item.startsWith('#') ? (\n            <Link key={index} href='https://sima-land.ru/'>\n              {item}\n            </Link>\n          ) : (\n            item\n          ),\n        )}\n    </>\n  );\n\n  return (\n    <GalleryModal\n      media={data.media}\n      onClose={() => {\n        console.log('Окно закрыто');\n      }}\n      review={{\n        notAffectRating: true,\n        rating: 3.2,\n        author: 'Пелагеевская Вероника Сергеевна',\n        content: markup,\n      }}\n      onGoToReview={() => {\n        console.log('Нажата кнопка перехода к отзыву');\n      }}\n      onVideoEvent={event => {\n        console.log(`Событие видео \"${event.type}\"`);\n      }}\n    />\n  );\n}\n\nWithReviewNotAffect.storyName = 'Отзыв не влияет на рейтинг';\n",locationsMap:{"with-review-not-affect":{startLoc:{col:7,line:16},endLoc:{col:1,line:54},startBody:{col:7,line:16},endBody:{col:1,line:54}}}},layout:"padded"}},WithReviewNotAffect=function WithReviewNotAffect(){const markup=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:"Двухшовная, однотонная, без логотипа, без посторонних запахов. На ребенке(1,5г.) сидит #отлично, на глаза не сползает, а взрослому-мала, уши не закрывает. Возможно, если взрослый будет лысый, то - норм), но если волосы все таки есть, то пиши пропало. Не понравилась, слишком мягкая, не держится на голове, все время съезжает. В результате абсолютно мокрая голова и куча потерянного времени, чтобы постоянно ее поправлять. Под водой крокодил смотрится эпично, очень забавно)) слому-мала, уши не закрывает. Возможно, если взрослый будет лысый, то - норм), но если волосы все таки есть, то пиши пропало. Не понравилась, слишком мягкая, не держится на голове, все время съезжает. В результате абсолютно мокрая голова и куча потерянного времени, чтобы постоянно ее поправлять. Под водой крокодил смотрится эпично, очень забавно)) слому-мала, уши не закрывает. Возможно, если взрослый будет лысый, то - норм), но если волосы все таки есть, то пиши пропало. Не понравилась, слишком мягкая, не держится на голове, все время съезжает. В результате абсолютно мокрая голова и куча потерянного времени, чтобы постоянно ее поправлять. Под водой крокодил смотрится эпично, очень забавно)) слому-мала, уши не закрывает. Возможно, если взрослый будет лысый, то - норм), но если волосы все таки есть, то пиши пропало. Не понравилась, слишком мягкая, не держится на голове, все время съезжает. В результате абсолютно мокрая голова и куча потерянного времени, чтобы постоянно ее поправлять. Под водой крокодил смотрится эпично, очень забавно))".replace(/(#[А-яA-z0-9]+)/g,"{divider}$1{divider}").split("{divider}").map(((item,index)=>item.startsWith("#")?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_sima_land_ui_nucleons_link__WEBPACK_IMPORTED_MODULE_1__.Link,{href:"https://sima-land.ru/",children:item},index):item))});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_sima_land_moleculas_desktop_components_gallery_modal__WEBPACK_IMPORTED_MODULE_0__.Y,{media:_fixture__WEBPACK_IMPORTED_MODULE_2__.a.media,onClose:()=>{console.log("Окно закрыто")},review:{notAffectRating:!0,rating:3.2,author:"Пелагеевская Вероника Сергеевна",content:markup},onGoToReview:()=>{console.log("Нажата кнопка перехода к отзыву")},onVideoEvent:event=>{console.log(`Событие видео "${event.type}"`)}})};WithReviewNotAffect.storyName="Отзыв не влияет на рейтинг",WithReviewNotAffect.parameters={...WithReviewNotAffect.parameters,docs:{...WithReviewNotAffect.parameters?.docs,source:{originalSource:"function WithReviewNotAffect() {\n  const markup = <>\n      {longText.replace(/(#[А-яA-z0-9]+)/g, '{divider}$1{divider}').split('{divider}').map((item, index) => item.startsWith('#') ? <Link key={index} href='https://sima-land.ru/'>\n              {item}\n            </Link> : item)}\n    </>;\n  return <GalleryModal media={data.media} onClose={() => {\n    console.log('Окно закрыто');\n  }} review={{\n    notAffectRating: true,\n    rating: 3.2,\n    author: 'Пелагеевская Вероника Сергеевна',\n    content: markup\n  }} onGoToReview={() => {\n    console.log('Нажата кнопка перехода к отзыву');\n  }} onVideoEvent={event => {\n    console.log(`Событие видео \"${event.type}\"`);\n  }} />;\n}",...WithReviewNotAffect.parameters?.docs?.source}}};const __namedExportsOrder=["WithReviewNotAffect"]}}]);