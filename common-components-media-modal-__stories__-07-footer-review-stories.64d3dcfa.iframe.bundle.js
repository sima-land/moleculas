"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[3793],{"./src/common/components/media-modal/__stories__/07-footer-review.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ExampleFooterReview:()=>ExampleFooterReview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/common/components/media-modal/index.ts"),_sima_land_ui_nucleons_layout__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/layout/index.js"),_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/modal/index.js"),_sima_land_ui_nucleons_text_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/text-button/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"common/MediaLayout",parameters:{storySource:{source:"import { MediaLayout, MediaHeader, MediaMain, MediaAside, MediaFooter, Review } from '@sima-land/moleculas/common/components/media-modal';\nimport { Layout } from '@sima-land/ui-nucleons/layout';\nimport { Modal } from '@sima-land/ui-nucleons/modal';\nimport { TextButton } from '@sima-land/ui-nucleons/text-button';\nexport default {\n  title: 'common/MediaLayout',\n  parameters: {\n    layout: 'fullscreen'\n  }\n};\nexport function ExampleFooterReview() {\n  const styles = {\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n    background: 'rgb(33, 33, 33, 0.24)'\n  };\n  return <Modal size='fullscreen' footerStub={false}>\n      <Modal.Header onClose={() => void 0} />\n      <Modal.Body>\n        <MediaLayout>\n          <MediaHeader>\n            <div style={{\n            ...styles,\n            width: '100%',\n            height: '40px'\n          }}>Header</div>\n          </MediaHeader>\n\n          <MediaMain>\n            <div style={{\n            ...styles,\n            position: 'absolute',\n            width: '100%',\n            height: '100%'\n          }}>\n              Main\n            </div>\n          </MediaMain>\n\n          <MediaAside>\n            <div style={{\n            ...styles,\n            width: '100%',\n            height: '100%',\n            minHeight: '40px'\n          }}>Aside</div>\n          </MediaAside>\n\n          <MediaFooter>\n            <Layout disabledOn={['xs', 's', 'm', 'l', 'xl']}>\n              <Review rating={4} author='Пелагеевская Вероника Сергеевна' button={<TextButton size='s'>Перейти к отзыву</TextButton>}>\n                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus tempora tenetur\n                sapiente quisquam. Repellendus labore enim dicta natus sunt, saepe ab rem nostrum\n                architecto, veritatis porro at harum, est tempora molestiae excepturi? Neque\n                excepturi temporibus omnis veniam delectus libero adipisci ipsam quibusdam, nesciunt\n                facilis ea quae facere commodi placeat architecto.\n              </Review>\n            </Layout>\n          </MediaFooter>\n        </MediaLayout>\n      </Modal.Body>\n    </Modal>;\n}\nExampleFooterReview.storyName = 'Футер с отзывом';\nExampleFooterReview.parameters = {\n  ...ExampleFooterReview.parameters,\n  docs: {\n    ...ExampleFooterReview.parameters?.docs,\n    source: {\n      originalSource: \"function ExampleFooterReview() {\\n  const styles = {\\n    display: 'flex',\\n    justifyContent: 'center',\\n    alignItems: 'center',\\n    background: 'rgb(33, 33, 33, 0.24)'\\n  };\\n  return <Modal size='fullscreen' footerStub={false}>\\n      <Modal.Header onClose={() => void 0} />\\n      <Modal.Body>\\n        <MediaLayout>\\n          <MediaHeader>\\n            <div style={{\\n            ...styles,\\n            width: '100%',\\n            height: '40px'\\n          }}>Header</div>\\n          </MediaHeader>\\n\\n          <MediaMain>\\n            <div style={{\\n            ...styles,\\n            position: 'absolute',\\n            width: '100%',\\n            height: '100%'\\n          }}>\\n              Main\\n            </div>\\n          </MediaMain>\\n\\n          <MediaAside>\\n            <div style={{\\n            ...styles,\\n            width: '100%',\\n            height: '100%',\\n            minHeight: '40px'\\n          }}>Aside</div>\\n          </MediaAside>\\n\\n          <MediaFooter>\\n            <Layout disabledOn={['xs', 's', 'm', 'l', 'xl']}>\\n              <Review rating={4} author='\\u041F\\u0435\\u043B\\u0430\\u0433\\u0435\\u0435\\u0432\\u0441\\u043A\\u0430\\u044F \\u0412\\u0435\\u0440\\u043E\\u043D\\u0438\\u043A\\u0430 \\u0421\\u0435\\u0440\\u0433\\u0435\\u0435\\u0432\\u043D\\u0430' button={<TextButton size='s'>\\u041F\\u0435\\u0440\\u0435\\u0439\\u0442\\u0438 \\u043A \\u043E\\u0442\\u0437\\u044B\\u0432\\u0443</TextButton>}>\\n                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus tempora tenetur\\n                sapiente quisquam. Repellendus labore enim dicta natus sunt, saepe ab rem nostrum\\n                architecto, veritatis porro at harum, est tempora molestiae excepturi? Neque\\n                excepturi temporibus omnis veniam delectus libero adipisci ipsam quibusdam, nesciunt\\n                facilis ea quae facere commodi placeat architecto.\\n              </Review>\\n            </Layout>\\n          </MediaFooter>\\n        </MediaLayout>\\n      </Modal.Body>\\n    </Modal>;\\n}\",\n      ...ExampleFooterReview.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{"example-footer-review":{startLoc:{col:7,line:11},endLoc:{col:1,line:64},startBody:{col:7,line:11},endBody:{col:1,line:64}}}},layout:"fullscreen"}},ExampleFooterReview=function ExampleFooterReview(){const styles={display:"flex",justifyContent:"center",alignItems:"center",background:"rgb(33, 33, 33, 0.24)"};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_2__.Modal,{size:"fullscreen",footerStub:!1,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_2__.Modal.Header,{onClose:()=>{}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_2__.Modal.Body,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.bu,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.Ei,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{...styles,width:"100%",height:"40px"},children:"Header"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.xT,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{...styles,position:"absolute",width:"100%",height:"100%"},children:"Main"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.nm,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{...styles,width:"100%",height:"100%",minHeight:"40px"},children:"Aside"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.CT,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_ui_nucleons_layout__WEBPACK_IMPORTED_MODULE_1__.Layout,{disabledOn:["xs","s","m","l","xl"],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.Cq,{rating:4,author:"Пелагеевская Вероника Сергеевна",button:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_ui_nucleons_text_button__WEBPACK_IMPORTED_MODULE_3__.TextButton,{size:"s",children:"Перейти к отзыву"}),children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus tempora tenetur sapiente quisquam. Repellendus labore enim dicta natus sunt, saepe ab rem nostrum architecto, veritatis porro at harum, est tempora molestiae excepturi? Neque excepturi temporibus omnis veniam delectus libero adipisci ipsam quibusdam, nesciunt facilis ea quae facere commodi placeat architecto."})})})]})})]})};ExampleFooterReview.displayName="ExampleFooterReview",ExampleFooterReview.storyName="Футер с отзывом",ExampleFooterReview.parameters={...ExampleFooterReview.parameters,docs:{...ExampleFooterReview.parameters?.docs,source:{originalSource:"function ExampleFooterReview() {\n  const styles = {\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n    background: 'rgb(33, 33, 33, 0.24)'\n  };\n  return <Modal size='fullscreen' footerStub={false}>\n      <Modal.Header onClose={() => void 0} />\n      <Modal.Body>\n        <MediaLayout>\n          <MediaHeader>\n            <div style={{\n            ...styles,\n            width: '100%',\n            height: '40px'\n          }}>Header</div>\n          </MediaHeader>\n\n          <MediaMain>\n            <div style={{\n            ...styles,\n            position: 'absolute',\n            width: '100%',\n            height: '100%'\n          }}>\n              Main\n            </div>\n          </MediaMain>\n\n          <MediaAside>\n            <div style={{\n            ...styles,\n            width: '100%',\n            height: '100%',\n            minHeight: '40px'\n          }}>Aside</div>\n          </MediaAside>\n\n          <MediaFooter>\n            <Layout disabledOn={['xs', 's', 'm', 'l', 'xl']}>\n              <Review rating={4} author='Пелагеевская Вероника Сергеевна' button={<TextButton size='s'>Перейти к отзыву</TextButton>}>\n                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus tempora tenetur\n                sapiente quisquam. Repellendus labore enim dicta natus sunt, saepe ab rem nostrum\n                architecto, veritatis porro at harum, est tempora molestiae excepturi? Neque\n                excepturi temporibus omnis veniam delectus libero adipisci ipsam quibusdam, nesciunt\n                facilis ea quae facere commodi placeat architecto.\n              </Review>\n            </Layout>\n          </MediaFooter>\n        </MediaLayout>\n      </Modal.Body>\n    </Modal>;\n}",...ExampleFooterReview.parameters?.docs?.source}}};const __namedExportsOrder=["ExampleFooterReview"]}}]);