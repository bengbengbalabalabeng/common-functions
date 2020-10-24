const isNullOrEmptyOrUndefined = (obj) => {
    return obj === undefined || obj === null || obj === '';
}

/**
 * Date.builder()
 *     .year()
 *     .month()
 *     .day()
 *     .hours()
 *     .minutes()
 *     .build()
 */
if (isNullOrEmptyOrUndefined(Date.prototype.builder)) {
    Date.prototype.builder = function () {
        return new DateBuilder();
    }
}
class DateBuilder {
    year (year) {
        this.year = year;
        return this;
    };
    month (month) {
        this.month = month - 1;
        return this;
    };
    day (day) {
        this.day = day;
        return this;
    };
    hours (hours) {
        this.hour = hours;
        return this;
    };
    mintues (mintues) {
        this.mintue = mintues;
        return this;
    };
    build () {
        let buildDate = new Date();
        if (!isNullOrEmptyOrUndefined(this.year)) {
            buildDate.setFullYear(this.year);
        }
        if (!isNullOrEmptyOrUndefined(this.month)) {
            buildDate.setMonth(this.month);
        }
        if (!isNullOrEmptyOrUndefined(this.day)) {
            buildDate.setDate(this.day);
        }
        if (!isNullOrEmptyOrUndefined(this.hour)) {
            buildDate.setHours(this.hour);
        }
        if (!isNullOrEmptyOrUndefined(this.mintue)) {
            buildDate.setMinutes(this.mintue);
        }
        buildDate.setMilliseconds(0);
        buildDate.setSeconds(0);
        return buildDate;
    };
}

/**
 * 时间加减
 * <p />
 * 仿照 Java 8 - Local[Date/DateTime] 中 [plus/minus] 方法
 *
 * @since 2020/10/12
 */
if (!Object.prototype.hasOwnProperty("plusMinutes")) {
	Object.defineProperty(Date.prototype, "plusMinutes", {
		configurable: true, enumerable: false, writable: true,
		value: function (minutesToAdd) {
			let newDate = new Date(this);
			newDate.setMinutes(newDate.getMinutes() + minutesToAdd);
			return newDate;
		}
	});
}
if (!Object.prototype.hasOwnProperty("plusDays")) {
	Object.defineProperty(Date.prototype, "plusDays", {
		configurable: true, enumerable: false, writable: true,
		value: function (daysToAdd) {
			let newDate = new Date(this);
			newDate.setDate(newDate.getDate() + daysToAdd);
			return newDate;
		}
	});
}
if (!Object.prototype.hasOwnProperty("plusWeeks")) {
	Object.defineProperty(Date.prototype, "plusWeeks", {
		configurable: true, enumerable: false, writable: true,
		value: function (weeksToAdd) {
			const sunDays = weeksToAdd * 7;
			let newDate = new Date(this);
			newDate.setDate(newDate.getDate() + sunDays);
			return newDate;
		}
	});
}
if (!Object.prototype.hasOwnProperty("plusMonths")) {
	Object.defineProperty(Date.prototype, "plusMonths", {
		configurable: true, enumerable: false, writable: true,
		value: function (monthsToAdd) {
			let newDate = new Date(this);
			newDate.setMonth(newDate.getMonth() + monthsToAdd);
			return newDate;
		}
	});
}
if (!Object.prototype.hasOwnProperty("plusYears")) {
	Object.defineProperty(Date.prototype, "plusYears", {
		configurable: true, enumerable: false, writable: true,
		value: function (yearsToAdd) {
			let newDate = new Date(this);
			newDate.setFullYear(newDate.getFullYear() + yearsToAdd);
			return newDate;
		}
	});
}

if (!Object.prototype.hasOwnProperty("minusMinutes")) {
	Object.defineProperty(Date.prototype, "minusMinutes", {
		configurable: true, enumerable: false, writable: true,
		value: function (minutesToSubtract) {
			let newDate = new Date(this);
			newDate.setMinutes(newDate.getMinutes() - minutesToSubtract);
			return newDate;
		}
	});
}
if (!Object.prototype.hasOwnProperty("minusDays")) {
	Object.defineProperty(Date.prototype, "minusDays", {
		configurable: true, enumerable: false, writable: true,
		value: function (daysToSubtract) {
			let newDate = new Date(this);
			newDate.setDate(newDate.getDate() - daysToSubtract);
			return newDate;
		}
	});
}
if (!Object.prototype.hasOwnProperty("minusWeeks")) {
	Object.defineProperty(Date.prototype, "minusWeeks", {
		configurable: true, enumerable: false, writable: true,
		value: function (weeksToSubtract) {
			const sunDays = weeksToSubtract * 7;
			let newDate = new Date(this);
			newDate.setDate(newDate.getDate() - weeksToSubtract);
			return newDate;
		}
	});
}
if (!Object.prototype.hasOwnProperty("minusMonths")) {
	Object.defineProperty(Date.prototype, "minusMonths", {
		configurable: true, enumerable: false, writable: true,
		value: function (monthsToSubtract) {
			let newDate = new Date(this);
			newDate.setMonth(newDate.getMonth() - monthsToSubtract);
			return newDate;
		}
	});
}
if (!Object.prototype.hasOwnProperty("minusYears")) {
	Object.defineProperty(Date.prototype, "minusYears", {
		configurable: true, enumerable: false, writable: true,
		value: function (yearsToSubtract) {
			let newDate = new Date(this);
			newDate.setFullYear(newDate.getFullYear() - yearsToSubtract);
			return newDate;
		}
	});
}

/**
 * Date.format()
 */
if (isNullOrEmptyOrUndefined(Date.prototype.format)) {
    Date.prototype.format = function (mask) {
        var d = this;
        var zeroize = function (value, length) {
            if (!length) length = 2;
            value = String(value);
            for (var i = 0, zeros = ''; i < (length - value.length); i++) {
                zeros += '0';
            }
            return zeros + value;
        };

        return mask.replace(/"[^"]*"|'[^']*'|\b(?:d{1,4}|m{1,4}|yy(?:yy)?|([hHMstT])\1?|[lLZ])\b/g, function ($0) {
            switch ($0) {
                case 'd': return d.getDate();
                case 'dd': return zeroize(d.getDate());
                case 'ddd': return ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'][d.getDay()];
                case 'dddd': return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][d.getDay()];
                case 'M': return d.getMonth() + 1;
                case 'MM': return zeroize(d.getMonth() + 1);
                case 'MMM': return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][d.getMonth()];
                case 'MMMM': return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][d.getMonth()];
                case 'yy': return String(d.getFullYear()).substr(2);
                case 'yyyy': return d.getFullYear();
                case 'h': return d.getHours() % 12 || 12;
                case 'hh': return zeroize(d.getHours() % 12 || 12);
                case 'HH': return d.getHours();
                case 'm': return d.getMinutes();
                case 'mm': return zeroize(d.getMinutes());
                case 's': return d.getSeconds();
                case 'ss': return zeroize(d.getSeconds());
                case 'l': return zeroize(d.getMilliseconds(), 3);
                case 'L': var m = d.getMilliseconds();
                    if (m > 99) m = Math.round(m / 10);
                    return zeroize(m);
                case 'tt': return d.getHours() < 12 ? 'am' : 'pm';
                case 'TT': return d.getHours() < 12 ? 'AM' : 'PM';
                case 'Z': return d.toUTCString().match(/[A-Z]+$/);
                // Return quoted strings with the surrounding quotes removed     
                default: return $0.substr(1, $0.length - 2);
            }
        });
    }
}

/**
 * 返回当月最后一天
 */
if (!Object.prototype.hasOwnProperty("getLastDayOfMonth")) {
	Object.defineProperty(Date.prototype, "getLastDayOfMonth", {
		configurable: true, enumerable: false, writable: true,
		value: function () {
			let dayOfMonths = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
			let newDate = new Date(this);
			dayOfMonths[1] = (((newDate.getFullYear() % 100 !== 0) && (newDate.getFullYear() % 4 === 0)) || (newDate.getFullYear() % 400 === 0)) ? 29 : 28;
			return dayOfMonths[newDate.getMonth()];
		}
	});
}


/**
 *  两个时间大小判断 [after/before/equals]
 */
if(!Object.prototype.hasOwnProperty("isAfterOrEquals")) {
	Object.defineProperty(Date.prototype, "isAfterOrEquals", {
		configurable: true, enumerable: false, writable: true,
		value: function (date) {
			return this >= date;
		}
	});
}
if(!Object.prototype.hasOwnProperty("isAfter")) {
	Object.defineProperty(Date.prototype, "isAfter", {
		configurable: true, enumerable: false, writable: true,
		value: function (date) {
			return this > date;
		}
	});
}
if(!Object.prototype.hasOwnProperty("isBefore")) {
	Object.defineProperty(Date.prototype, "isBefore", {
		configurable: true, enumerable: false, writable: true,
		value: function (date) {
			return this < date;
		}
	});
}
if(!Object.prototype.hasOwnProperty("isBeforeOrEquals")) {
	Object.defineProperty(Date.prototype, "isBeforeOrEquals", {
		configurable: true, enumerable: false, writable: true,
		value: function (date) {
			return this <= date;
		}
	});
}
if(!Object.prototype.hasOwnProperty("isEquals")) {
	Object.defineProperty(Date.prototype, "isEquals", {
		configurable: true, enumerable: false, writable: true,
		value: function (date) {
			return this === date;
		}
	});
}


/**
 * 中断操作，（如 特殊循环等...）
 */
class InterruptException {
	get getMessage() {
		console.log("Interrupt exception");
	}
}

/**
 * 序列化 form table 数据成 object list
 */
$.fn.serializeTableToObjectList = function () {
	let arr = [];
	let $selfTable = this;
	let allArr = $selfTable.serializeArray();
	const trCount = $selfTable.find('tbody tr').length;
	if (trCount === 1) {
		const nonNullSize = allArr.filter(item => !isNullOrEmptyOrUndefined(item.value)).length;
		if (nonNullSize !== 0) {
			let obj = {};
			allArr.forEach(item => {
				obj[item.name] = item.value;
			});
			arr.push(obj);
		}
		return arr;
	}

	// 多行是否全部为空
	const nonNullSize = allArr.filter(item => !isNullOrEmptyOrUndefined(item.value)).length;
	if (nonNullSize === 0) {
		return arr;
	}
	let allArrCount = allArr.length;
	// Object 参数的个数
	const propSize = allArrCount / trCount;
	let tempCount = propSize;
	let obj = {};
	allArr.forEach((item, index) => {
		if (tempCount === index) {
			// 单行数据为空，不计入总 arr
			let flag = false;
			try {
				for (const key in obj) {
					if (!isNullOrEmptyOrUndefined(obj[key])) {
						flag = true;
						throw new InterruptException();
					}
				}
			} catch (e) {}
			if (flag) {
				arr.push(obj);
			}

			obj = {};
			tempCount += propSize;
		}
		if ((index + 1) === allArrCount) {
			// 单行数据为空，不计入总 arr
			let flag = false;
			try {
				for (const key in obj) {
					if (!isNullOrEmptyOrUndefined(obj[key])) {
						flag = true;
						throw new InterruptException();
					}
				}
			} catch (e) {}

			obj[item.name] = item.value;
			if (flag) {
				arr.push(obj);
			}
			obj = {};
		}
		obj[item.name] = item.value;
	});

	return arr;
}


/**
 *  创建类似于 UUID 的(理论上)唯一标识
 * @returns {string}
 */
const S4 = () => {
	return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}
const GUID = (prefix) => {
	return (prefix + S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}
