"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[5315],{"./src/mobile/components/person-info/__stories__/02-with-arbitrary-link.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithArbitraryLink:()=>WithArbitraryLink,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_moleculas_mobile_components_person_info__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/mobile/components/person-info/index.ts"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_sima_land_ui_nucleons_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/button/index.js"),_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/modal/index.js"),_sima_land_ui_nucleons_top_bar__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@sima-land/ui-nucleons/top-bar/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"mobile/PersonInfo",component:_sima_land_moleculas_mobile_components_person_info__WEBPACK_IMPORTED_MODULE_0__.P,parameters:{storySource:{source:"import { PersonInfo } from '@sima-land/moleculas/mobile/components/person-info';\nimport { useState } from 'react';\nimport { Button } from '@sima-land/ui-nucleons/button';\nimport { Modal, ModalBody } from '@sima-land/ui-nucleons/modal';\nimport { TopBar, navigationButtons } from '@sima-land/ui-nucleons/top-bar';\n\nexport default {\n  title: 'mobile/PersonInfo',\n  component: PersonInfo,\n  parameters: {\n    layout: 'padded',\n  },\n};\n\nexport function WithArbitraryLink() {\n  const [open, setOpen] = useState(false);\n\n  const person = {\n    personId: 123,\n    name: 'Сёмин Денис Геннадьевич (ежедневная отгрузка из Екатеринбурга)',\n    appointment: 'Менеджер по игрушке',\n    email: 'example@email.com',\n    skype: 'example@skype.com',\n    phoneHref: 'tel:88000000000;postd=8823',\n    phoneText: '88000000000 доб. 8823',\n    secondPhoneHref: 'tel:+7900000000',\n    secondPhoneText: '+7 (900) 000 000',\n    arbitraryLinkProps: {\n      href: 'test',\n      children: 'Профиль организатора',\n    },\n  };\n\n  return (\n    <>\n      <Button onClick={() => setOpen(true)}>Показать</Button>\n\n      {open && (\n        <Modal size='fullscreen'>\n          <TopBar buttons={navigationButtons({ onClose: () => setOpen(false) })} />\n          <ModalBody>\n            <PersonInfo {...person} />\n          </ModalBody>\n        </Modal>\n      )}\n    </>\n  );\n}\n\nWithArbitraryLink.storyName = 'С произвольной ссылкой';\n",locationsMap:{"with-arbitrary-link":{startLoc:{col:7,line:15},endLoc:{col:1,line:48},startBody:{col:7,line:15},endBody:{col:1,line:48}}}},layout:"padded"}},WithArbitraryLink=function WithArbitraryLink(){const[open,setOpen]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_button__WEBPACK_IMPORTED_MODULE_2__.z,{onClick:()=>setOpen(!0),children:"Показать"}),open&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_3__.u_,{size:"fullscreen",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_top_bar__WEBPACK_IMPORTED_MODULE_4__.TopBar,{buttons:(0,_sima_land_ui_nucleons_top_bar__WEBPACK_IMPORTED_MODULE_4__.navigationButtons)({onClose:()=>setOpen(!1)})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_3__.fe,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_moleculas_mobile_components_person_info__WEBPACK_IMPORTED_MODULE_0__.P,{personId:123,name:"Сёмин Денис Геннадьевич (ежедневная отгрузка из Екатеринбурга)",appointment:"Менеджер по игрушке",email:"example@email.com",skype:"example@skype.com",phoneHref:"tel:88000000000;postd=8823",phoneText:"88000000000 доб. 8823",secondPhoneHref:"tel:+7900000000",secondPhoneText:"+7 (900) 000 000",arbitraryLinkProps:{href:"test",children:"Профиль организатора"}})})]})]})};WithArbitraryLink.storyName="С произвольной ссылкой",WithArbitraryLink.parameters={...WithArbitraryLink.parameters,docs:{...WithArbitraryLink.parameters?.docs,source:{originalSource:"function WithArbitraryLink() {\n  const [open, setOpen] = useState(false);\n  const person = {\n    personId: 123,\n    name: 'Сёмин Денис Геннадьевич (ежедневная отгрузка из Екатеринбурга)',\n    appointment: 'Менеджер по игрушке',\n    email: 'example@email.com',\n    skype: 'example@skype.com',\n    phoneHref: 'tel:88000000000;postd=8823',\n    phoneText: '88000000000 доб. 8823',\n    secondPhoneHref: 'tel:+7900000000',\n    secondPhoneText: '+7 (900) 000 000',\n    arbitraryLinkProps: {\n      href: 'test',\n      children: 'Профиль организатора'\n    }\n  };\n  return <>\n      <Button onClick={() => setOpen(true)}>Показать</Button>\n\n      {open && <Modal size='fullscreen'>\n          <TopBar buttons={navigationButtons({\n        onClose: () => setOpen(false)\n      })} />\n          <ModalBody>\n            <PersonInfo {...person} />\n          </ModalBody>\n        </Modal>}\n    </>;\n}",...WithArbitraryLink.parameters?.docs?.source}}};const __namedExportsOrder=["WithArbitraryLink"]},"./src/mobile/components/person-info/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>PersonInfo});var bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),avatar=__webpack_require__("./node_modules/@sima-land/ui-nucleons/avatar/index.js"),box=__webpack_require__("./node_modules/@sima-land/ui-nucleons/box/index.js"),ui_nucleons_text=__webpack_require__("./node_modules/@sima-land/ui-nucleons/text/index.js"),styling=__webpack_require__("./node_modules/@sima-land/ui-nucleons/styling/index.js"),Mail=__webpack_require__("./node_modules/@sima-land/ui-quarks/dist/esm/icons/24x24/Stroked/Mail.js"),LogoSkype=__webpack_require__("./node_modules/@sima-land/ui-quarks/dist/esm/icons/24x24/Stroked/LogoSkype.js"),Phone=__webpack_require__("./node_modules/@sima-land/ui-quarks/dist/esm/icons/24x24/Stroked/Phone.js"),Mobile=__webpack_require__("./node_modules/@sima-land/ui-quarks/dist/esm/icons/24x24/Filled/Mobile.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),person_info_m=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/mobile/components/person-info/person-info.m.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(person_info_m.Z,options);const person_info_person_info_m=person_info_m.Z&&person_info_m.Z.locals?person_info_m.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(person_info_person_info_m);function PersonInfo({personId,name,appointment,photoUrl,email,skype,phoneHref,phoneText,secondPhoneHref,secondPhoneText,arbitraryLinkProps}){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:cx("avatar"),children:(0,jsx_runtime.jsx)(avatar.qE,{...(0,avatar.YS)({id:personId,name,image:photoUrl})})}),(0,jsx_runtime.jsx)("span",{className:cx("name"),children:name}),Boolean(appointment)&&(0,jsx_runtime.jsx)("span",{className:cx("appointment"),children:appointment}),arbitraryLinkProps&&(0,jsx_runtime.jsx)("div",{className:cx("profile-url"),children:(0,jsx_runtime.jsx)("a",{className:cx("link"),...arbitraryLinkProps})}),(0,jsx_runtime.jsxs)("div",{className:cx("items",styling.oY.bottom),children:[Boolean(email)&&(0,jsx_runtime.jsx)(CommunicateLink,{href:`mailto:${email}`,primaryText:email,secondaryText:"Электронная почта",icon:(0,jsx_runtime.jsx)(Mail.Z,{})}),Boolean(skype)&&(0,jsx_runtime.jsx)(CommunicateLink,{href:`skype:${skype}?chat`,primaryText:skype,secondaryText:"Skype",icon:(0,jsx_runtime.jsx)(LogoSkype.Z,{})}),Boolean(phoneText)&&(0,jsx_runtime.jsx)(CommunicateLink,{href:phoneHref,primaryText:phoneText,secondaryText:"Рабочий",icon:(0,jsx_runtime.jsx)(Phone.Z,{})}),Boolean(secondPhoneText)&&(0,jsx_runtime.jsx)(CommunicateLink,{href:secondPhoneHref,primaryText:secondPhoneText,secondaryText:"Сотовый",icon:(0,jsx_runtime.jsx)(Mobile.Z,{})})]})]})}function CommunicateLink({href,primaryText,secondaryText,icon}){return(0,jsx_runtime.jsxs)("a",{href,className:cx("item",styling.oY.top),children:[(0,jsx_runtime.jsxs)(box.x,{flex:"grow",children:[(0,jsx_runtime.jsx)(ui_nucleons_text.xv,{size:16,lineHeight:24,color:"basic-gray87",weight:600,children:primaryText}),(0,jsx_runtime.jsx)(box.x,{marginTop:1,children:(0,jsx_runtime.jsx)(ui_nucleons_text.xv,{size:14,lineHeight:20,color:"basic-gray38",children:secondaryText})})]}),(0,jsx_runtime.jsx)("div",{className:cx("icon-circle"),children:icon})]})}try{PersonInfo.displayName="PersonInfo",PersonInfo.__docgenInfo={description:"Информация о персоне.",displayName:"PersonInfo",props:{personId:{defaultValue:null,description:"Идентификатор.",name:"personId",required:!1,type:{name:"number | undefined"}},appointment:{defaultValue:null,description:"Специализация.",name:"appointment",required:!1,type:{name:"string | undefined"}},arbitraryLinkProps:{defaultValue:null,description:"Свойства произвольной ссылки.",name:"arbitraryLinkProps",required:!1,type:{name:"AnchorHTMLAttributes<HTMLAnchorElement> | undefined"}},email:{defaultValue:null,description:"Адрес электронной почты.",name:"email",required:!1,type:{name:"string | undefined"}},name:{defaultValue:null,description:"Имя.",name:"name",required:!1,type:{name:"string | undefined"}},phoneHref:{defaultValue:null,description:"Ссылка на рабочий номер телефона.",name:"phoneHref",required:!1,type:{name:"string | undefined"}},phoneText:{defaultValue:null,description:"Рабочий номер телефона.",name:"phoneText",required:!1,type:{name:"string | undefined"}},photoUrl:{defaultValue:null,description:"Ссылка на фото.",name:"photoUrl",required:!1,type:{name:"string | undefined"}},secondPhoneHref:{defaultValue:null,description:"Ссылка на сотовый номер телефона.",name:"secondPhoneHref",required:!1,type:{name:"string | undefined"}},secondPhoneText:{defaultValue:null,description:"Сотовый номер телефона.",name:"secondPhoneText",required:!1,type:{name:"string | undefined"}},skype:{defaultValue:null,description:"Адрес Skype-аккаунта.",name:"skype",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/mobile/components/person-info/person-info.tsx#PersonInfo"]={docgenInfo:PersonInfo.__docgenInfo,name:"PersonInfo",path:"src/mobile/components/person-info/person-info.tsx#PersonInfo"})}catch(__react_docgen_typescript_loader_error){}try{CommunicateLink.displayName="CommunicateLink",CommunicateLink.__docgenInfo={description:"Компонент блока-ссылки для связи.",displayName:"CommunicateLink",props:{href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string | undefined"}},primaryText:{defaultValue:null,description:"",name:"primaryText",required:!1,type:{name:"string | undefined"}},secondaryText:{defaultValue:null,description:"",name:"secondaryText",required:!1,type:{name:"string | undefined"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/mobile/components/person-info/person-info.tsx#CommunicateLink"]={docgenInfo:CommunicateLink.__docgenInfo,name:"CommunicateLink",path:"src/mobile/components/person-info/person-info.tsx#CommunicateLink"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/mobile/components/person-info/person-info.m.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".person-info-m__avatar__de8{display:flex;justify-content:center;margin-top:8px;--avatar-size: 64px}@media(min-width: 721px){.person-info-m__avatar__de8{--avatar-size: 104px;margin-top:56px}}.person-info-m__name__bad{display:-webkit-box;margin:12px auto 0;text-align:center;font-size:20px;line-height:28px;font-weight:600;color:#212121;word-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media(min-width: 721px){.person-info-m__name__bad{margin:32px auto 0;font-size:24px;line-height:32px}}.person-info-m__appointment__b85{display:block;max-width:260px;margin:2px auto 0;text-align:center;font-size:14px;line-height:20px;color:#9e9e9e}@media(min-width: 601px){.person-info-m__appointment__b85{max-width:none;margin:8px auto 0;font-size:16px;line-height:24px}}.person-info-m__profile-url__d01{display:flex;justify-content:center;margin-top:24px}@media(max-width: 720px){.person-info-m__profile-url__d01{margin-top:16px}}.person-info-m__profile-url__d01 .person-info-m__link__bf9{text-decoration:none;font-weight:600;font-size:14px;line-height:20px;color:#1f84db}.person-info-m__items__fee{display:flex;flex-wrap:wrap;margin:32px auto 0}@media(min-width: 601px){.person-info-m__items__fee{max-width:calc((100% - 112px)/8*6 + (80px))}}@media(min-width: 721px){.person-info-m__items__fee{max-width:498px;margin:56px auto 0}}@media(min-width: 841px){.person-info-m__items__fee{max-width:588px}}.person-info-m__item__c01{display:flex;width:100%;padding:16px;text-decoration:none}@media(min-width: 721px){.person-info-m__item__c01{padding:16px 0}}.person-info-m__icon-circle__fb3{background:#f5f5f5;border-radius:50%;width:48px;height:48px;display:flex;align-items:center;justify-content:center}","",{version:3,sources:["webpack://./src/mobile/components/person-info/person-info.m.scss","webpack://./node_modules/@sima-land/ui-nucleons/colors.scss"],names:[],mappings:"AAEA,4BACE,YAAA,CACA,sBAAA,CACA,cAAA,CACA,mBAAA,CACA,yBALF,4BAMI,oBAAA,CACA,eAAA,CAAA,CAIJ,0BACE,mBAAA,CACA,kBAAA,CACA,iBAAA,CACA,cAAA,CACA,gBAAA,CACA,eAAA,CACA,aChBa,CDiBb,oBAAA,CACA,oBAAA,CACA,2BAAA,CACA,eAAA,CACA,yBAZF,0BAaI,kBAAA,CACA,cAAA,CACA,gBAAA,CAAA,CAIJ,iCACE,aAAA,CACA,eAAA,CACA,iBAAA,CACA,iBAAA,CACA,cAAA,CACA,gBAAA,CACA,aC/Ba,CDgCb,yBARF,iCASI,cAAA,CACA,iBAAA,CACA,cAAA,CACA,gBAAA,CAAA,CAIJ,iCACE,YAAA,CACA,sBAAA,CACA,eAAA,CACA,yBAJF,iCAKI,eAAA,CAAA,CAEF,2DACE,oBAAA,CACA,eAAA,CACA,cAAA,CACA,gBAAA,CACA,aCzDS,CD6Db,2BACE,YAAA,CACA,cAAA,CACA,kBAAA,CACA,yBAJF,2BAKI,2CAAA,CAAA,CAEF,yBAPF,2BAQI,eAAA,CACA,kBAAA,CAAA,CAEF,yBAXF,2BAYI,eAAA,CAAA,CAIJ,0BACE,YAAA,CACA,UAAA,CACA,YAAA,CACA,oBAAA,CACA,yBALF,0BAMI,cAAA,CAAA,CAIJ,iCACE,kBC/EY,CDgFZ,iBAAA,CACA,UAAA,CACA,WAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA",sourcesContent:["@use 'node_modules/@sima-land/ui-nucleons/colors';\n\n.avatar {\n  display: flex;\n  justify-content: center;\n  margin-top: 8px;\n  --avatar-size: 64px;\n  @media (min-width: 721px) {\n    --avatar-size: 104px;\n    margin-top: 56px;\n  }\n}\n\n.name {\n  display: -webkit-box;\n  margin: 12px auto 0;\n  text-align: center;\n  font-size: 20px;\n  line-height: 28px;\n  font-weight: 600;\n  color: colors.$basic-gray87;\n  word-wrap: break-word;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  @media (min-width: 721px) {\n    margin: 32px auto 0;\n    font-size: 24px;\n    line-height: 32px;\n  }\n}\n\n.appointment {\n  display: block;\n  max-width: 260px;\n  margin: 2px auto 0;\n  text-align: center;\n  font-size: 14px;\n  line-height: 20px;\n  color: colors.$basic-gray38;\n  @media (min-width: 601px) {\n    max-width: none;\n    margin: 8px auto 0;\n    font-size: 16px;\n    line-height: 24px;\n  }\n}\n\n.profile-url {\n  display: flex;\n  justify-content: center;\n  margin-top: 24px;\n  @media (max-width: 720px) {\n    margin-top: 16px;\n  }\n  .link {\n    text-decoration: none;\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 20px;\n    color: colors.$basic-blue;\n  }\n}\n\n.items {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 32px auto 0;\n  @media (min-width: 601px) {\n    max-width: calc((100% - #{7 * 16px}) / 8 * 6 + (#{5 * 16px}));\n  }\n  @media (min-width: 721px) {\n    max-width: 498px;\n    margin: 56px auto 0;\n  }\n  @media (min-width: 841px) {\n    max-width: 588px;\n  }\n}\n\n.item {\n  display: flex;\n  width: 100%;\n  padding: 16px;\n  text-decoration: none;\n  @media (min-width: 721px) {\n    padding: 16px 0;\n  }\n}\n\n.icon-circle {\n  background: colors.$basic-gray4;\n  border-radius: 50%;\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n$additional-crimson: #f4446b;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={avatar:"person-info-m__avatar__de8",name:"person-info-m__name__bad",appointment:"person-info-m__appointment__b85","profile-url":"person-info-m__profile-url__d01",link:"person-info-m__link__bf9",items:"person-info-m__items__fee",item:"person-info-m__item__c01","icon-circle":"person-info-m__icon-circle__fb3"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);