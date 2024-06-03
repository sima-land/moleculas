"use strict";(self.webpackChunk_sima_land_moleculas=self.webpackChunk_sima_land_moleculas||[]).push([[6469],{"./node_modules/@sima-land/ui-nucleons/timer/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.B=void 0;var timer_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/timer/timer.js");Object.defineProperty(exports,"B",{enumerable:!0,get:function(){return timer_1.Timer}})},"./node_modules/@sima-land/ui-nucleons/timer/timer.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.Timer=void 0;const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),react_1=__webpack_require__("./node_modules/react/index.js"),utils_1=__webpack_require__("./node_modules/@sima-land/ui-nucleons/timer/utils.js");exports.Timer=function Timer({date,format=utils_1.formatDistance,timeout=1e3}){const[distance,setDistance]=(0,react_1.useState)((0,utils_1.getDistanceToNow)(date));return(0,react_1.useEffect)((()=>{const timerId=setInterval((()=>{setDistance((0,utils_1.getDistanceToNow)(date))}),timeout);return setDistance((0,utils_1.getDistanceToNow)(date)),()=>clearInterval(timerId)}),[timeout]),(0,jsx_runtime_1.jsx)(jsx_runtime_1.Fragment,{children:format(distance)})}},"./node_modules/@sima-land/ui-nucleons/timer/utils.js":(__unused_webpack_module,exports,__webpack_require__)=>{Object.defineProperty(exports,"__esModule",{value:!0}),exports.getDistanceToNow=exports.formatDistance=void 0;const formatDistanceToNowStrict_1=__webpack_require__("./node_modules/date-fns/formatDistanceToNowStrict.js"),isAfter_1=__webpack_require__("./node_modules/date-fns/isAfter.js"),isValid_1=__webpack_require__("./node_modules/date-fns/isValid.js"),parseISO_1=__webpack_require__("./node_modules/date-fns/parseISO.js"),UNITS=["day","hour","minute","second"];exports.formatDistance=function formatDistance({days,hours,minutes,seconds}){return[days,...[hours%24,minutes%60,seconds%60].map((s=>`${s}`.padStart(2,"0")))].join(":")},exports.getDistanceToNow=function getDistanceToNow(dateString){const date=(0,parseISO_1.parseISO)(dateString);let result={days:0,hours:0,minutes:0,seconds:0};if((0,isValid_1.isValid)(date)&&!(0,isAfter_1.isAfter)(new Date,date)){const[days,hours,minutes,seconds]=UNITS.map((unit=>parseInt((0,formatDistanceToNowStrict_1.formatDistanceToNowStrict)(date,{unit,roundingMethod:"floor"}).replace(/\D/g,""))));result={days,hours,minutes,seconds}}return result}},"./node_modules/date-fns/_lib/getRoundingMethod.js":(__unused_webpack_module,exports)=>{exports.getRoundingMethod=function getRoundingMethod(method){return number=>{const result=(method?Math[method]:Math.trunc)(number);return 0===result?0:result}}},"./node_modules/date-fns/compareAsc.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.compareAsc=function compareAsc(dateLeft,dateRight){const _dateLeft=(0,_index.toDate)(dateLeft),_dateRight=(0,_index.toDate)(dateRight),diff=_dateLeft.getTime()-_dateRight.getTime();return diff<0?-1:diff>0?1:diff};var _index=__webpack_require__("./node_modules/date-fns/toDate.js")},"./node_modules/date-fns/formatDistanceStrict.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.formatDistanceStrict=function formatDistanceStrict(date,baseDate,options){const defaultOptions=(0,_index2.getDefaultOptions)(),locale=options?.locale??defaultOptions.locale??_index.defaultLocale,comparison=(0,_index5.compareAsc)(date,baseDate);if(isNaN(comparison))throw new RangeError("Invalid time value");const localizeOptions=Object.assign({},options,{addSuffix:options?.addSuffix,comparison});let dateLeft,dateRight;comparison>0?(dateLeft=(0,_index7.toDate)(baseDate),dateRight=(0,_index7.toDate)(date)):(dateLeft=(0,_index7.toDate)(date),dateRight=(0,_index7.toDate)(baseDate));const roundingMethod=(0,_index3.getRoundingMethod)(options?.roundingMethod??"round"),milliseconds=dateRight.getTime()-dateLeft.getTime(),minutes=milliseconds/_index6.millisecondsInMinute,timezoneOffset=(0,_index4.getTimezoneOffsetInMilliseconds)(dateRight)-(0,_index4.getTimezoneOffsetInMilliseconds)(dateLeft),dstNormalizedMinutes=(milliseconds-timezoneOffset)/_index6.millisecondsInMinute,defaultUnit=options?.unit;let unit;unit=defaultUnit||(minutes<1?"second":minutes<60?"minute":minutes<_index6.minutesInDay?"hour":dstNormalizedMinutes<_index6.minutesInMonth?"day":dstNormalizedMinutes<_index6.minutesInYear?"month":"year");if("second"===unit){const seconds=roundingMethod(milliseconds/1e3);return locale.formatDistance("xSeconds",seconds,localizeOptions)}if("minute"===unit){const roundedMinutes=roundingMethod(minutes);return locale.formatDistance("xMinutes",roundedMinutes,localizeOptions)}if("hour"===unit){const hours=roundingMethod(minutes/60);return locale.formatDistance("xHours",hours,localizeOptions)}if("day"===unit){const days=roundingMethod(dstNormalizedMinutes/_index6.minutesInDay);return locale.formatDistance("xDays",days,localizeOptions)}if("month"===unit){const months=roundingMethod(dstNormalizedMinutes/_index6.minutesInMonth);return 12===months&&"month"!==defaultUnit?locale.formatDistance("xYears",1,localizeOptions):locale.formatDistance("xMonths",months,localizeOptions)}{const years=roundingMethod(dstNormalizedMinutes/_index6.minutesInYear);return locale.formatDistance("xYears",years,localizeOptions)}};var _index=__webpack_require__("./node_modules/date-fns/_lib/defaultLocale.js"),_index2=__webpack_require__("./node_modules/date-fns/_lib/defaultOptions.js"),_index3=__webpack_require__("./node_modules/date-fns/_lib/getRoundingMethod.js"),_index4=__webpack_require__("./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js"),_index5=__webpack_require__("./node_modules/date-fns/compareAsc.js"),_index6=__webpack_require__("./node_modules/date-fns/constants.js"),_index7=__webpack_require__("./node_modules/date-fns/toDate.js")},"./node_modules/date-fns/formatDistanceToNowStrict.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.formatDistanceToNowStrict=function formatDistanceToNowStrict(date,options){return(0,_index.formatDistanceStrict)(date,Date.now(),options)};var _index=__webpack_require__("./node_modules/date-fns/formatDistanceStrict.js")},"./node_modules/date-fns/isAfter.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.isAfter=function isAfter(date,dateToCompare){const _date=(0,_index.toDate)(date),_dateToCompare=(0,_index.toDate)(dateToCompare);return _date.getTime()>_dateToCompare.getTime()};var _index=__webpack_require__("./node_modules/date-fns/toDate.js")},"./node_modules/date-fns/parseISO.js":(__unused_webpack_module,exports,__webpack_require__)=>{exports.parseISO=function parseISO(argument,options){const additionalDigits=options?.additionalDigits??2,dateStrings=function splitDateString(dateString){const dateStrings={},array=dateString.split(patterns.dateTimeDelimiter);let timeString;if(array.length>2)return dateStrings;/:/.test(array[0])?timeString=array[0]:(dateStrings.date=array[0],timeString=array[1],patterns.timeZoneDelimiter.test(dateStrings.date)&&(dateStrings.date=dateString.split(patterns.timeZoneDelimiter)[0],timeString=dateString.substr(dateStrings.date.length,dateString.length)));if(timeString){const token=patterns.timezone.exec(timeString);token?(dateStrings.time=timeString.replace(token[1],""),dateStrings.timezone=token[1]):dateStrings.time=timeString}return dateStrings}(argument);let date;if(dateStrings.date){const parseYearResult=function parseYear(dateString,additionalDigits){const regex=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+additionalDigits)+"})|(\\d{2}|[+-]\\d{"+(2+additionalDigits)+"})$)"),captures=dateString.match(regex);if(!captures)return{year:NaN,restDateString:""};const year=captures[1]?parseInt(captures[1]):null,century=captures[2]?parseInt(captures[2]):null;return{year:null===century?year:100*century,restDateString:dateString.slice((captures[1]||captures[2]).length)}}(dateStrings.date,additionalDigits);date=function parseDate(dateString,year){if(null===year)return new Date(NaN);const captures=dateString.match(dateRegex);if(!captures)return new Date(NaN);const isWeekDate=!!captures[4],dayOfYear=parseDateUnit(captures[1]),month=parseDateUnit(captures[2])-1,day=parseDateUnit(captures[3]),week=parseDateUnit(captures[4]),dayOfWeek=parseDateUnit(captures[5])-1;if(isWeekDate)return function validateWeekDate(_year,week,day){return week>=1&&week<=53&&day>=0&&day<=6}(0,week,dayOfWeek)?function dayOfISOWeekYear(isoWeekYear,week,day){const date=new Date(0);date.setUTCFullYear(isoWeekYear,0,4);const fourthOfJanuaryDay=date.getUTCDay()||7,diff=7*(week-1)+day+1-fourthOfJanuaryDay;return date.setUTCDate(date.getUTCDate()+diff),date}(year,week,dayOfWeek):new Date(NaN);{const date=new Date(0);return function validateDate(year,month,date){return month>=0&&month<=11&&date>=1&&date<=(daysInMonths[month]||(isLeapYearIndex(year)?29:28))}(year,month,day)&&function validateDayOfYearDate(year,dayOfYear){return dayOfYear>=1&&dayOfYear<=(isLeapYearIndex(year)?366:365)}(year,dayOfYear)?(date.setUTCFullYear(year,month,Math.max(dayOfYear,day)),date):new Date(NaN)}}(parseYearResult.restDateString,parseYearResult.year)}if(!date||isNaN(date.getTime()))return new Date(NaN);const timestamp=date.getTime();let offset,time=0;if(dateStrings.time&&(time=function parseTime(timeString){const captures=timeString.match(timeRegex);if(!captures)return NaN;const hours=parseTimeUnit(captures[1]),minutes=parseTimeUnit(captures[2]),seconds=parseTimeUnit(captures[3]);if(!function validateTime(hours,minutes,seconds){if(24===hours)return 0===minutes&&0===seconds;return seconds>=0&&seconds<60&&minutes>=0&&minutes<60&&hours>=0&&hours<25}(hours,minutes,seconds))return NaN;return hours*_index.millisecondsInHour+minutes*_index.millisecondsInMinute+1e3*seconds}(dateStrings.time),isNaN(time)))return new Date(NaN);if(!dateStrings.timezone){const dirtyDate=new Date(timestamp+time),result=new Date(0);return result.setFullYear(dirtyDate.getUTCFullYear(),dirtyDate.getUTCMonth(),dirtyDate.getUTCDate()),result.setHours(dirtyDate.getUTCHours(),dirtyDate.getUTCMinutes(),dirtyDate.getUTCSeconds(),dirtyDate.getUTCMilliseconds()),result}if(offset=function parseTimezone(timezoneString){if("Z"===timezoneString)return 0;const captures=timezoneString.match(timezoneRegex);if(!captures)return 0;const sign="+"===captures[1]?-1:1,hours=parseInt(captures[2]),minutes=captures[3]&&parseInt(captures[3])||0;if(!function validateTimezone(_hours,minutes){return minutes>=0&&minutes<=59}(0,minutes))return NaN;return sign*(hours*_index.millisecondsInHour+minutes*_index.millisecondsInMinute)}(dateStrings.timezone),isNaN(offset))return new Date(NaN);return new Date(timestamp+time+offset)};var _index=__webpack_require__("./node_modules/date-fns/constants.js");const patterns={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},dateRegex=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,timeRegex=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,timezoneRegex=/^([+-])(\d{2})(?::?(\d{2}))?$/;function parseDateUnit(value){return value?parseInt(value):1}function parseTimeUnit(value){return value&&parseFloat(value.replace(",","."))||0}const daysInMonths=[31,null,31,30,31,30,31,31,30,31,30,31];function isLeapYearIndex(year){return year%400==0||year%4==0&&year%100!=0}}}]);