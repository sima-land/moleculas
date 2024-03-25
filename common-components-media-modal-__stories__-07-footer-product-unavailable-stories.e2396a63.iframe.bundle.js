"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[8958],{"./src/common/components/media-modal/__stories__/07-footer-product-unavailable.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ExampleFooterProductUnavailable:()=>ExampleFooterProductUnavailable,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/common/components/media-modal/index.ts"),_sima_land_ui_nucleons_layout__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/layout/index.js"),_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/modal/index.js"),_sima_land_ui_nucleons_top_bar__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/top-bar/index.js"),_mocks_thumbnails_vase_jpg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/common/components/media-modal/__mocks__/thumbnails/vase.jpg"),_sima_land_ui_nucleons_text_button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/text-button/index.js"),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/index.js"),_sima_land_ui_quarks_icons_16x16_Stroked_Check__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@sima-land/ui-quarks/icons/16x16/Stroked/Check.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"common/MediaLayout",parameters:{storySource:{source:"import {\n  MediaLayout,\n  MediaHeader,\n  MediaMain,\n  MediaAside,\n  MediaFooter,\n  ProductBrief,\n} from '@sima-land/moleculas/common/components/media-modal';\nimport { Layout } from '@sima-land/ui-nucleons/layout';\nimport { Modal, ModalBody, getResponsiveModalProps } from '@sima-land/ui-nucleons/modal';\nimport { TopBar, navigationButtons } from '@sima-land/ui-nucleons/top-bar';\nimport vase from '../__mocks__/thumbnails/vase.jpg';\nimport { TextButton } from '@sima-land/ui-nucleons/text-button';\nimport { useState } from 'react';\nimport CheckSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Check';\n\nexport default {\n  title: 'common/MediaLayout',\n  parameters: {\n    layout: 'fullscreen',\n  },\n};\n\nexport function ExampleFooterProductUnavailable() {\n  const [added, setAdded] = useState(false);\n\n  const styles = {\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n    background: 'rgb(33, 33, 33, 0.16)',\n  };\n\n  return (\n    <Modal {...getResponsiveModalProps({ size: 'fullscreen' })}>\n      <TopBar size='unset' buttons={navigationButtons({ onClose: () => void 0 })} />\n      <ModalBody>\n        <MediaLayout>\n          <MediaHeader>\n            <div style={{ ...styles, width: '100%', height: '40px' }}>Header</div>\n          </MediaHeader>\n\n          <MediaMain>\n            <div style={{ ...styles, position: 'absolute', width: '100%', height: '100%' }}>\n              Main\n            </div>\n          </MediaMain>\n\n          <MediaAside>\n            <div style={{ ...styles, width: '100%', height: '100%', minHeight: '40px' }}>Aside</div>\n          </MediaAside>\n\n          <MediaFooter>\n            <Layout disabledOn={['xs', 's', 'm', 'l', 'xl']}>\n              <ProductBrief\n                href='https://sima-land.ru'\n                imageSrc={vase}\n                title='Игровая приставка Sony PlayStation 5 Digital 3,5 ГГц модифицированная'\n                priceReplacer={\n                  <>\n                    <div style={{ marginBottom: '8px' }}>Нет в наличии</div>\n\n                    <TextButton\n                      size='s'\n                      style={{ display: 'flex' }}\n                      color={added ? 'additional-teal' : 'basic-blue'}\n                      startIcon={added ? CheckSVG : undefined}\n                      onClick={() => setAdded(a => !a)}\n                    >\n                      {added ? 'В листе ожидания' : 'В лист ожидания'}\n                    </TextButton>\n                  </>\n                }\n              />\n            </Layout>\n          </MediaFooter>\n        </MediaLayout>\n      </ModalBody>\n    </Modal>\n  );\n}\n\nExampleFooterProductUnavailable.storyName = 'Футер с товаром не в наличии';\n",locationsMap:{"example-footer-product-unavailable":{startLoc:{col:7,line:24},endLoc:{col:1,line:81},startBody:{col:7,line:24},endBody:{col:1,line:81}}}},layout:"fullscreen"}},ExampleFooterProductUnavailable=function ExampleFooterProductUnavailable(){const[added,setAdded]=(0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(!1),styles={display:"flex",justifyContent:"center",alignItems:"center",background:"rgb(33, 33, 33, 0.16)"};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_2__.u_,{...(0,_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_2__.B1)({size:"fullscreen"}),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_ui_nucleons_top_bar__WEBPACK_IMPORTED_MODULE_3__.TopBar,{size:"unset",buttons:(0,_sima_land_ui_nucleons_top_bar__WEBPACK_IMPORTED_MODULE_3__.navigationButtons)({onClose:()=>{}})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_2__.fe,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.bu,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.Ei,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{style:{...styles,width:"100%",height:"40px"},children:"Header"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.xT,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{style:{...styles,position:"absolute",width:"100%",height:"100%"},children:"Main"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.nm,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{style:{...styles,width:"100%",height:"100%",minHeight:"40px"},children:"Aside"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.CT,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_ui_nucleons_layout__WEBPACK_IMPORTED_MODULE_1__.Layout,{disabledOn:["xs","s","m","l","xl"],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_moleculas_common_components_media_modal__WEBPACK_IMPORTED_MODULE_0__.Q_,{href:"https://sima-land.ru",imageSrc:_mocks_thumbnails_vase_jpg__WEBPACK_IMPORTED_MODULE_4__,title:"Игровая приставка Sony PlayStation 5 Digital 3,5 ГГц модифицированная",priceReplacer:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{style:{marginBottom:"8px"},children:"Нет в наличии"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_ui_nucleons_text_button__WEBPACK_IMPORTED_MODULE_5__.A,{size:"s",style:{display:"flex"},color:added?"additional-teal":"basic-blue",startIcon:added?_sima_land_ui_quarks_icons_16x16_Stroked_Check__WEBPACK_IMPORTED_MODULE_7__.Z:void 0,onClick:()=>setAdded((a=>!a)),children:added?"В листе ожидания":"В лист ожидания"})]})})})})]})})]})};ExampleFooterProductUnavailable.storyName="Футер с товаром не в наличии",ExampleFooterProductUnavailable.parameters={...ExampleFooterProductUnavailable.parameters,docs:{...ExampleFooterProductUnavailable.parameters?.docs,source:{originalSource:"function ExampleFooterProductUnavailable() {\n  const [added, setAdded] = useState(false);\n  const styles = {\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n    background: 'rgb(33, 33, 33, 0.16)'\n  };\n  return <Modal {...getResponsiveModalProps({\n    size: 'fullscreen'\n  })}>\n      <TopBar size='unset' buttons={navigationButtons({\n      onClose: () => void 0\n    })} />\n      <ModalBody>\n        <MediaLayout>\n          <MediaHeader>\n            <div style={{\n            ...styles,\n            width: '100%',\n            height: '40px'\n          }}>Header</div>\n          </MediaHeader>\n\n          <MediaMain>\n            <div style={{\n            ...styles,\n            position: 'absolute',\n            width: '100%',\n            height: '100%'\n          }}>\n              Main\n            </div>\n          </MediaMain>\n\n          <MediaAside>\n            <div style={{\n            ...styles,\n            width: '100%',\n            height: '100%',\n            minHeight: '40px'\n          }}>Aside</div>\n          </MediaAside>\n\n          <MediaFooter>\n            <Layout disabledOn={['xs', 's', 'm', 'l', 'xl']}>\n              <ProductBrief href='https://sima-land.ru' imageSrc={vase} title='Игровая приставка Sony PlayStation 5 Digital 3,5 ГГц модифицированная' priceReplacer={<>\n                    <div style={{\n                marginBottom: '8px'\n              }}>Нет в наличии</div>\n\n                    <TextButton size='s' style={{\n                display: 'flex'\n              }} color={added ? 'additional-teal' : 'basic-blue'} startIcon={added ? CheckSVG : undefined} onClick={() => setAdded(a => !a)}>\n                      {added ? 'В листе ожидания' : 'В лист ожидания'}\n                    </TextButton>\n                  </>} />\n            </Layout>\n          </MediaFooter>\n        </MediaLayout>\n      </ModalBody>\n    </Modal>;\n}",...ExampleFooterProductUnavailable.parameters?.docs?.source}}};const __namedExportsOrder=["ExampleFooterProductUnavailable"]},"./src/common/components/media-modal/__mocks__/thumbnails/vase.jpg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/vase.8ec5f9e4.jpg"}}]);