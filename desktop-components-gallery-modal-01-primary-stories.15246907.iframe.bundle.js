"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[2996],{"./docs/stories/desktop/components/gallery-modal/01-primary.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_moleculas_desktop_components_gallery_modal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/desktop/components/gallery-modal/index.ts"),_fixture__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./docs/stories/desktop/components/gallery-modal/fixture.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"desktop/GalleryModal",component:_sima_land_moleculas_desktop_components_gallery_modal__WEBPACK_IMPORTED_MODULE_0__.Y,parameters:{storySource:{source:"import { GalleryModal } from '@sima-land/moleculas/desktop/components/gallery-modal';\nimport { data } from './fixture';\n\nexport default {\n  title: 'desktop/GalleryModal',\n  component: GalleryModal,\n  parameters: {\n    layout: 'padded',\n  },\n};\n\nexport function Primary() {\n  return (\n    <GalleryModal\n      media={data.media}\n      onClose={() => {\n        console.log('Окно закрыто');\n      }}\n      onVideoEvent={event => {\n        console.log(`Событие видео \"${event.type}\"`);\n      }}\n    />\n  );\n}\n\nPrimary.storyName = 'Простой пример';\n",locationsMap:{primary:{startLoc:{col:7,line:12},endLoc:{col:1,line:24},startBody:{col:7,line:12},endBody:{col:1,line:24}}}},layout:"padded"}},Primary=function Primary(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_sima_land_moleculas_desktop_components_gallery_modal__WEBPACK_IMPORTED_MODULE_0__.Y,{media:_fixture__WEBPACK_IMPORTED_MODULE_1__.a.media,onClose:()=>{console.log("Окно закрыто")},onVideoEvent:event=>{console.log(`Событие видео "${event.type}"`)}})};Primary.storyName="Простой пример",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"function Primary() {\n  return <GalleryModal media={data.media} onClose={() => {\n    console.log('Окно закрыто');\n  }} onVideoEvent={event => {\n    console.log(`Событие видео \"${event.type}\"`);\n  }} />;\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]}}]);