"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[8958],{"./src/common/components/media-modal/__stories__/07-footer-product-unavailable.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ExampleFooterProductUnavailable:()=>ExampleFooterProductUnavailable,__namedExportsOrder:()=>__namedExportsOrder,default:()=>_07_footer_product_unavailable_stories});var media_modal=__webpack_require__("./src/common/components/media-modal/index.ts"),layout=__webpack_require__("./node_modules/@sima-land/ui-nucleons/layout/index.js"),modal=__webpack_require__("./node_modules/@sima-land/ui-nucleons/modal/index.js"),top_bar=__webpack_require__("./node_modules/@sima-land/ui-nucleons/top-bar/index.js"),vase=__webpack_require__("./src/common/components/media-modal/__mocks__/thumbnails/vase.jpg"),text_button=__webpack_require__("./node_modules/@sima-land/ui-nucleons/text-button/index.js"),react=__webpack_require__("./node_modules/react/index.js");const Check=(0,react.forwardRef)(((props,ref)=>react.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props},react.createElement("path",{fillRule:"evenodd",d:"M14.669 2.257a1 1 0 0 1 .074 1.412l-9 10a1 1 0 0 1-1.459.03l-3-3.078a1 1 0 0 1 1.432-1.396l2.255 2.313 8.286-9.207a1 1 0 0 1 1.412-.074Z",clipRule:"evenodd"}))));var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _07_footer_product_unavailable_stories={title:"common/MediaLayout",parameters:{storySource:{source:"import {\n  MediaLayout,\n  MediaHeader,\n  MediaMain,\n  MediaAside,\n  MediaFooter,\n  ProductBrief,\n} from '@sima-land/moleculas/common/components/media-modal';\nimport { Layout } from '@sima-land/ui-nucleons/layout';\nimport { Modal, ModalBody, getResponsiveModalProps } from '@sima-land/ui-nucleons/modal';\nimport { TopBar, navigationButtons } from '@sima-land/ui-nucleons/top-bar';\nimport vase from '../__mocks__/thumbnails/vase.jpg';\nimport { TextButton } from '@sima-land/ui-nucleons/text-button';\nimport { useState } from 'react';\nimport CheckSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Check';\n\nexport default {\n  title: 'common/MediaLayout',\n  parameters: {\n    layout: 'fullscreen',\n  },\n};\n\nexport function ExampleFooterProductUnavailable() {\n  const [added, setAdded] = useState(false);\n\n  const styles = {\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n    background: 'rgb(33, 33, 33, 0.16)',\n  };\n\n  return (\n    <Modal {...getResponsiveModalProps({ size: 'fullscreen' })}>\n      <TopBar size='unset' buttons={navigationButtons({ onClose: () => void 0 })} />\n      <ModalBody>\n        <MediaLayout>\n          <MediaHeader>\n            <div style={{ ...styles, width: '100%', height: '40px' }}>Header</div>\n          </MediaHeader>\n\n          <MediaMain>\n            <div style={{ ...styles, position: 'absolute', width: '100%', height: '100%' }}>\n              Main\n            </div>\n          </MediaMain>\n\n          <MediaAside>\n            <div style={{ ...styles, width: '100%', height: '100%', minHeight: '40px' }}>Aside</div>\n          </MediaAside>\n\n          <MediaFooter>\n            <Layout disabledOn={['xs', 's', 'm', 'l', 'xl']}>\n              <ProductBrief\n                href='https://sima-land.ru'\n                imageSrc={vase}\n                imageProps={{ style: { opacity: 0.44 } }}\n                title='Игровая приставка Sony PlayStation 5 Digital 3,5 ГГц модифицированная'\n                priceReplacer={\n                  <>\n                    <div style={{ marginBottom: '8px' }}>Нет в наличии</div>\n\n                    <TextButton\n                      size='s'\n                      style={{ display: 'flex' }}\n                      color={added ? 'additional-teal' : 'basic-blue'}\n                      startIcon={added ? CheckSVG : undefined}\n                      onClick={() => setAdded(a => !a)}\n                    >\n                      {added ? 'В листе ожидания' : 'В лист ожидания'}\n                    </TextButton>\n                  </>\n                }\n              />\n            </Layout>\n          </MediaFooter>\n        </MediaLayout>\n      </ModalBody>\n    </Modal>\n  );\n}\n\nExampleFooterProductUnavailable.storyName = 'Футер с товаром не в наличии';\n",locationsMap:{"example-footer-product-unavailable":{startLoc:{col:7,line:24},endLoc:{col:1,line:82},startBody:{col:7,line:24},endBody:{col:1,line:82}}}},layout:"fullscreen"}},ExampleFooterProductUnavailable=function ExampleFooterProductUnavailable(){const[added,setAdded]=(0,react.useState)(!1),styles={display:"flex",justifyContent:"center",alignItems:"center",background:"rgb(33, 33, 33, 0.16)"};return(0,jsx_runtime.jsxs)(modal.u_,{...(0,modal.B1)({size:"fullscreen"}),children:[(0,jsx_runtime.jsx)(top_bar.TopBar,{size:"unset",buttons:(0,top_bar.navigationButtons)({onClose:()=>{}})}),(0,jsx_runtime.jsx)(modal.fe,{children:(0,jsx_runtime.jsxs)(media_modal.bu,{children:[(0,jsx_runtime.jsx)(media_modal.Ei,{children:(0,jsx_runtime.jsx)("div",{style:{...styles,width:"100%",height:"40px"},children:"Header"})}),(0,jsx_runtime.jsx)(media_modal.xT,{children:(0,jsx_runtime.jsx)("div",{style:{...styles,position:"absolute",width:"100%",height:"100%"},children:"Main"})}),(0,jsx_runtime.jsx)(media_modal.nm,{children:(0,jsx_runtime.jsx)("div",{style:{...styles,width:"100%",height:"100%",minHeight:"40px"},children:"Aside"})}),(0,jsx_runtime.jsx)(media_modal.CT,{children:(0,jsx_runtime.jsx)(layout.Layout,{disabledOn:["xs","s","m","l","xl"],children:(0,jsx_runtime.jsx)(media_modal.Q_,{href:"https://sima-land.ru",imageSrc:vase,imageProps:{style:{opacity:.44}},title:"Игровая приставка Sony PlayStation 5 Digital 3,5 ГГц модифицированная",priceReplacer:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{style:{marginBottom:"8px"},children:"Нет в наличии"}),(0,jsx_runtime.jsx)(text_button.A,{size:"s",style:{display:"flex"},color:added?"additional-teal":"basic-blue",startIcon:added?Check:void 0,onClick:()=>setAdded((a=>!a)),children:added?"В листе ожидания":"В лист ожидания"})]})})})})]})})]})};ExampleFooterProductUnavailable.storyName="Футер с товаром не в наличии",ExampleFooterProductUnavailable.parameters={...ExampleFooterProductUnavailable.parameters,docs:{...ExampleFooterProductUnavailable.parameters?.docs,source:{originalSource:"function ExampleFooterProductUnavailable() {\n  const [added, setAdded] = useState(false);\n  const styles = {\n    display: 'flex',\n    justifyContent: 'center',\n    alignItems: 'center',\n    background: 'rgb(33, 33, 33, 0.16)'\n  };\n  return <Modal {...getResponsiveModalProps({\n    size: 'fullscreen'\n  })}>\n      <TopBar size='unset' buttons={navigationButtons({\n      onClose: () => void 0\n    })} />\n      <ModalBody>\n        <MediaLayout>\n          <MediaHeader>\n            <div style={{\n            ...styles,\n            width: '100%',\n            height: '40px'\n          }}>Header</div>\n          </MediaHeader>\n\n          <MediaMain>\n            <div style={{\n            ...styles,\n            position: 'absolute',\n            width: '100%',\n            height: '100%'\n          }}>\n              Main\n            </div>\n          </MediaMain>\n\n          <MediaAside>\n            <div style={{\n            ...styles,\n            width: '100%',\n            height: '100%',\n            minHeight: '40px'\n          }}>Aside</div>\n          </MediaAside>\n\n          <MediaFooter>\n            <Layout disabledOn={['xs', 's', 'm', 'l', 'xl']}>\n              <ProductBrief href='https://sima-land.ru' imageSrc={vase} imageProps={{\n              style: {\n                opacity: 0.44\n              }\n            }} title='Игровая приставка Sony PlayStation 5 Digital 3,5 ГГц модифицированная' priceReplacer={<>\n                    <div style={{\n                marginBottom: '8px'\n              }}>Нет в наличии</div>\n\n                    <TextButton size='s' style={{\n                display: 'flex'\n              }} color={added ? 'additional-teal' : 'basic-blue'} startIcon={added ? CheckSVG : undefined} onClick={() => setAdded(a => !a)}>\n                      {added ? 'В листе ожидания' : 'В лист ожидания'}\n                    </TextButton>\n                  </>} />\n            </Layout>\n          </MediaFooter>\n        </MediaLayout>\n      </ModalBody>\n    </Modal>;\n}",...ExampleFooterProductUnavailable.parameters?.docs?.source}}};const __namedExportsOrder=["ExampleFooterProductUnavailable"]},"./src/common/components/media-modal/__mocks__/thumbnails/vase.jpg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/vase.8ec5f9e4.jpg"}}]);