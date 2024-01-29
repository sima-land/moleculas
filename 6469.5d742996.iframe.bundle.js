"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[6469],{"./node_modules/@sima-land/ui-nucleons/timer/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.B=void 0;var timer_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/timer/timer.js");Object.defineProperty(exports,"B",{enumerable:!0,get:function(){return timer_1.Timer}})},"./node_modules/@sima-land/ui-nucleons/timer/timer.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Timer=void 0;const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),react_1=__webpack_require__("./node_modules/react/index.js"),utils_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/timer/utils.js");exports.Timer=function Timer({date,format=utils_1.formatDistance,timeout=1e3}){const[distance,setDistance]=(0,react_1.useState)((0,utils_1.getDistanceToNow)(date));return(0,react_1.useEffect)((()=>{const timerId=setInterval((()=>{setDistance((0,utils_1.getDistanceToNow)(date))}),timeout);return setDistance((0,utils_1.getDistanceToNow)(date)),()=>clearInterval(timerId)}),[timeout]),(0,jsx_runtime_1.jsx)(jsx_runtime_1.Fragment,{children:format(distance)})}},"./node_modules/@sima-land/ui-nucleons/timer/utils.js":function(__unused_webpack_module,exports,__webpack_require__){var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.getDistanceToNow=exports.formatDistance=void 0;const formatDistanceToNowStrict_1=__importDefault(__webpack_require__("./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js")),isAfter_1=__importDefault(__webpack_require__("./node_modules/date-fns/esm/isAfter/index.js")),isValid_1=__importDefault(__webpack_require__("./node_modules/date-fns/esm/isValid/index.js")),parseISO_1=__importDefault(__webpack_require__("./node_modules/date-fns/esm/parseISO/index.js")),UNITS=["day","hour","minute","second"];exports.formatDistance=function formatDistance({days,hours,minutes,seconds}){return[days,...[hours%24,minutes%60,seconds%60].map((s=>`${s}`.padStart(2,"0")))].join(":")},exports.getDistanceToNow=function getDistanceToNow(dateString){const date=(0,parseISO_1.default)(dateString);let result={days:0,hours:0,minutes:0,seconds:0};if((0,isValid_1.default)(date)&&!(0,isAfter_1.default)(new Date,date)){const[days,hours,minutes,seconds]=UNITS.map((unit=>parseInt((0,formatDistanceToNowStrict_1.default)(date,{unit,roundingMethod:"floor"}).replace(/\D/g,""))));result={days,hours,minutes,seconds}}return result}},"./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>formatDistanceToNowStrict});var _lib_defaultOptions=__webpack_require__("./node_modules/date-fns/esm/_lib/defaultOptions/index.js"),getTimezoneOffsetInMilliseconds=__webpack_require__("./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js"),toDate=__webpack_require__("./node_modules/date-fns/esm/toDate/index.js"),requiredArgs=__webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");var _lib_assign=__webpack_require__("./node_modules/date-fns/esm/_lib/assign/index.js");var defaultLocale=__webpack_require__("./node_modules/date-fns/esm/_lib/defaultLocale/index.js"),MILLISECONDS_IN_MINUTE=6e4,MINUTES_IN_DAY=1440,MINUTES_IN_MONTH=30*MINUTES_IN_DAY,MINUTES_IN_YEAR=365*MINUTES_IN_DAY;function formatDistanceStrict(dirtyDate,dirtyBaseDate,options){var _ref,_options$locale,_options$roundingMeth;(0,requiredArgs.Z)(2,arguments);var defaultOptions=(0,_lib_defaultOptions.j)(),locale=null!==(_ref=null!==(_options$locale=null==options?void 0:options.locale)&&void 0!==_options$locale?_options$locale:defaultOptions.locale)&&void 0!==_ref?_ref:defaultLocale.Z;if(!locale.formatDistance)throw new RangeError("locale must contain localize.formatDistance property");var comparison=function compareAsc(dirtyDateLeft,dirtyDateRight){(0,requiredArgs.Z)(2,arguments);var dateLeft=(0,toDate.Z)(dirtyDateLeft),dateRight=(0,toDate.Z)(dirtyDateRight),diff=dateLeft.getTime()-dateRight.getTime();return diff<0?-1:diff>0?1:diff}(dirtyDate,dirtyBaseDate);if(isNaN(comparison))throw new RangeError("Invalid time value");var dateLeft,dateRight,localizeOptions=(0,_lib_assign.Z)(function cloneObject(object){return(0,_lib_assign.Z)({},object)}(options),{addSuffix:Boolean(null==options?void 0:options.addSuffix),comparison});comparison>0?(dateLeft=(0,toDate.Z)(dirtyBaseDate),dateRight=(0,toDate.Z)(dirtyDate)):(dateLeft=(0,toDate.Z)(dirtyDate),dateRight=(0,toDate.Z)(dirtyBaseDate));var roundingMethodFn,roundingMethod=String(null!==(_options$roundingMeth=null==options?void 0:options.roundingMethod)&&void 0!==_options$roundingMeth?_options$roundingMeth:"round");if("floor"===roundingMethod)roundingMethodFn=Math.floor;else if("ceil"===roundingMethod)roundingMethodFn=Math.ceil;else{if("round"!==roundingMethod)throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");roundingMethodFn=Math.round}var unit,milliseconds=dateRight.getTime()-dateLeft.getTime(),minutes=milliseconds/MILLISECONDS_IN_MINUTE,dstNormalizedMinutes=(milliseconds-((0,getTimezoneOffsetInMilliseconds.Z)(dateRight)-(0,getTimezoneOffsetInMilliseconds.Z)(dateLeft)))/MILLISECONDS_IN_MINUTE,defaultUnit=null==options?void 0:options.unit;if("second"===(unit=defaultUnit?String(defaultUnit):minutes<1?"second":minutes<60?"minute":minutes<MINUTES_IN_DAY?"hour":dstNormalizedMinutes<MINUTES_IN_MONTH?"day":dstNormalizedMinutes<MINUTES_IN_YEAR?"month":"year")){var seconds=roundingMethodFn(milliseconds/1e3);return locale.formatDistance("xSeconds",seconds,localizeOptions)}if("minute"===unit){var roundedMinutes=roundingMethodFn(minutes);return locale.formatDistance("xMinutes",roundedMinutes,localizeOptions)}if("hour"===unit){var hours=roundingMethodFn(minutes/60);return locale.formatDistance("xHours",hours,localizeOptions)}if("day"===unit){var days=roundingMethodFn(dstNormalizedMinutes/MINUTES_IN_DAY);return locale.formatDistance("xDays",days,localizeOptions)}if("month"===unit){var months=roundingMethodFn(dstNormalizedMinutes/MINUTES_IN_MONTH);return 12===months&&"month"!==defaultUnit?locale.formatDistance("xYears",1,localizeOptions):locale.formatDistance("xMonths",months,localizeOptions)}if("year"===unit){var years=roundingMethodFn(dstNormalizedMinutes/MINUTES_IN_YEAR);return locale.formatDistance("xYears",years,localizeOptions)}throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}function formatDistanceToNowStrict(dirtyDate,options){return(0,requiredArgs.Z)(1,arguments),formatDistanceStrict(dirtyDate,Date.now(),options)}},"./node_modules/date-fns/esm/isAfter/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>isAfter});var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/date-fns/esm/toDate/index.js"),_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js");function isAfter(dirtyDate,dirtyDateToCompare){(0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.Z)(2,arguments);var date=(0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.Z)(dirtyDate),dateToCompare=(0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.Z)(dirtyDateToCompare);return date.getTime()>dateToCompare.getTime()}},"./node_modules/date-fns/esm/parseISO/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>parseISO});var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/date-fns/esm/constants/index.js"),_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/date-fns/esm/_lib/requiredArgs/index.js"),_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/date-fns/esm/_lib/toInteger/index.js");function parseISO(argument,options){var _options$additionalDi;(0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.Z)(1,arguments);var additionalDigits=(0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.Z)(null!==(_options$additionalDi=null==options?void 0:options.additionalDigits)&&void 0!==_options$additionalDi?_options$additionalDi:2);if(2!==additionalDigits&&1!==additionalDigits&&0!==additionalDigits)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof argument&&"[object String]"!==Object.prototype.toString.call(argument))return new Date(NaN);var date,dateStrings=function splitDateString(dateString){var timeString,dateStrings={},array=dateString.split(patterns.dateTimeDelimiter);if(array.length>2)return dateStrings;/:/.test(array[0])?timeString=array[0]:(dateStrings.date=array[0],timeString=array[1],patterns.timeZoneDelimiter.test(dateStrings.date)&&(dateStrings.date=dateString.split(patterns.timeZoneDelimiter)[0],timeString=dateString.substr(dateStrings.date.length,dateString.length)));if(timeString){var token=patterns.timezone.exec(timeString);token?(dateStrings.time=timeString.replace(token[1],""),dateStrings.timezone=token[1]):dateStrings.time=timeString}return dateStrings}(argument);if(dateStrings.date){var parseYearResult=function parseYear(dateString,additionalDigits){var regex=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+additionalDigits)+"})|(\\d{2}|[+-]\\d{"+(2+additionalDigits)+"})$)"),captures=dateString.match(regex);if(!captures)return{year:NaN,restDateString:""};var year=captures[1]?parseInt(captures[1]):null,century=captures[2]?parseInt(captures[2]):null;return{year:null===century?year:100*century,restDateString:dateString.slice((captures[1]||captures[2]).length)}}(dateStrings.date,additionalDigits);date=function parseDate(dateString,year){if(null===year)return new Date(NaN);var captures=dateString.match(dateRegex);if(!captures)return new Date(NaN);var isWeekDate=!!captures[4],dayOfYear=parseDateUnit(captures[1]),month=parseDateUnit(captures[2])-1,day=parseDateUnit(captures[3]),week=parseDateUnit(captures[4]),dayOfWeek=parseDateUnit(captures[5])-1;if(isWeekDate)return function validateWeekDate(_year,week,day){return week>=1&&week<=53&&day>=0&&day<=6}(0,week,dayOfWeek)?function dayOfISOWeekYear(isoWeekYear,week,day){var date=new Date(0);date.setUTCFullYear(isoWeekYear,0,4);var fourthOfJanuaryDay=date.getUTCDay()||7,diff=7*(week-1)+day+1-fourthOfJanuaryDay;return date.setUTCDate(date.getUTCDate()+diff),date}(year,week,dayOfWeek):new Date(NaN);var date=new Date(0);return function validateDate(year,month,date){return month>=0&&month<=11&&date>=1&&date<=(daysInMonths[month]||(isLeapYearIndex(year)?29:28))}(year,month,day)&&function validateDayOfYearDate(year,dayOfYear){return dayOfYear>=1&&dayOfYear<=(isLeapYearIndex(year)?366:365)}(year,dayOfYear)?(date.setUTCFullYear(year,month,Math.max(dayOfYear,day)),date):new Date(NaN)}(parseYearResult.restDateString,parseYearResult.year)}if(!date||isNaN(date.getTime()))return new Date(NaN);var offset,timestamp=date.getTime(),time=0;if(dateStrings.time&&(time=function parseTime(timeString){var captures=timeString.match(timeRegex);if(!captures)return NaN;var hours=parseTimeUnit(captures[1]),minutes=parseTimeUnit(captures[2]),seconds=parseTimeUnit(captures[3]);if(!function validateTime(hours,minutes,seconds){if(24===hours)return 0===minutes&&0===seconds;return seconds>=0&&seconds<60&&minutes>=0&&minutes<60&&hours>=0&&hours<25}(hours,minutes,seconds))return NaN;return hours*_constants_index_js__WEBPACK_IMPORTED_MODULE_2__.vh+minutes*_constants_index_js__WEBPACK_IMPORTED_MODULE_2__.yJ+1e3*seconds}(dateStrings.time),isNaN(time)))return new Date(NaN);if(!dateStrings.timezone){var dirtyDate=new Date(timestamp+time),result=new Date(0);return result.setFullYear(dirtyDate.getUTCFullYear(),dirtyDate.getUTCMonth(),dirtyDate.getUTCDate()),result.setHours(dirtyDate.getUTCHours(),dirtyDate.getUTCMinutes(),dirtyDate.getUTCSeconds(),dirtyDate.getUTCMilliseconds()),result}return offset=function parseTimezone(timezoneString){if("Z"===timezoneString)return 0;var captures=timezoneString.match(timezoneRegex);if(!captures)return 0;var sign="+"===captures[1]?-1:1,hours=parseInt(captures[2]),minutes=captures[3]&&parseInt(captures[3])||0;if(!function validateTimezone(_hours,minutes){return minutes>=0&&minutes<=59}(0,minutes))return NaN;return sign*(hours*_constants_index_js__WEBPACK_IMPORTED_MODULE_2__.vh+minutes*_constants_index_js__WEBPACK_IMPORTED_MODULE_2__.yJ)}(dateStrings.timezone),isNaN(offset)?new Date(NaN):new Date(timestamp+time+offset)}var patterns={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},dateRegex=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,timeRegex=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,timezoneRegex=/^([+-])(\d{2})(?::?(\d{2}))?$/;function parseDateUnit(value){return value?parseInt(value):1}function parseTimeUnit(value){return value&&parseFloat(value.replace(",","."))||0}var daysInMonths=[31,null,31,30,31,30,31,31,30,31,30,31];function isLeapYearIndex(year){return year%400==0||year%4==0&&year%100!=0}}}]);