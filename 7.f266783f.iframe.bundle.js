(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1157:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"OverlayScrollbarsComponent",(function(){return OverlayScrollbarsComponent}));__webpack_require__(652),__webpack_require__(33),__webpack_require__(104),__webpack_require__(61),__webpack_require__(65),__webpack_require__(62),__webpack_require__(94),__webpack_require__(122),__webpack_require__(28),__webpack_require__(24),__webpack_require__(7),__webpack_require__(11);var react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__),overlayscrollbars__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(201),overlayscrollbars__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(overlayscrollbars__WEBPACK_IMPORTED_MODULE_13__);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var OverlayScrollbarsComponent=function OverlayScrollbarsComponent(_ref){var _ref$options=_ref.options,options=void 0===_ref$options?{}:_ref$options,extensions=_ref.extensions,className=_ref.className,children=_ref.children,rest=_objectWithoutProperties(_ref,["options","extensions","className","children"]),osTargetRef=react__WEBPACK_IMPORTED_MODULE_12___default.a.useRef(),osInstance=react__WEBPACK_IMPORTED_MODULE_12___default.a.useRef();return react__WEBPACK_IMPORTED_MODULE_12___default.a.useEffect((function(){return osInstance.current=overlayscrollbars__WEBPACK_IMPORTED_MODULE_13___default()(osTargetRef.current,options,extensions),mergeHostClassNames(osInstance.current,className),function(){overlayscrollbars__WEBPACK_IMPORTED_MODULE_13___default.a.valid(osInstance.current)&&(osInstance.current.destroy(),osInstance.current=null)}}),[]),react__WEBPACK_IMPORTED_MODULE_12___default.a.useEffect((function(){overlayscrollbars__WEBPACK_IMPORTED_MODULE_13___default.a.valid(osInstance.current)&&osInstance.current.options(options)}),[options]),react__WEBPACK_IMPORTED_MODULE_12___default.a.useEffect((function(){overlayscrollbars__WEBPACK_IMPORTED_MODULE_13___default.a.valid(osInstance.current)&&mergeHostClassNames(osInstance.current,className)}),[className]),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",_extends({className:"os-host"},rest,{ref:osTargetRef}),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",{className:"os-resize-observer-host"}),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",{className:"os-padding"},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",{className:"os-viewport"},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",{className:"os-content"},children))),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",{className:"os-scrollbar os-scrollbar-horizontal "},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",{className:"os-scrollbar-track"},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",{className:"os-scrollbar-handle"}))),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",{className:"os-scrollbar os-scrollbar-vertical"},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",{className:"os-scrollbar-track"},react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",{className:"os-scrollbar-handle"}))),react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div",{className:"os-scrollbar-corner"}))};function mergeHostClassNames(osInstance,className){if(overlayscrollbars__WEBPACK_IMPORTED_MODULE_13___default.a.valid(osInstance)){var host=osInstance.getElements().host,regex=new RegExp("(^os-host([-_].+|)$)|".concat(osInstance.options().className.replace(/\s/g,"$|"),"$"),"g"),osClassNames=host.className.split(" ").filter((function(name){return name.match(regex)})).join(" ");host.className="".concat(osClassNames," ").concat(className||"")}}OverlayScrollbarsComponent.displayName="OverlayScrollbarsComponent",__webpack_exports__.default=OverlayScrollbarsComponent}}]);