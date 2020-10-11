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
        let buildDate = new Date();debugger
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
 * Date.plusMinutes()
 */
if (isNullOrEmptyOrUndefined(Date.prototype.plusMinutes)) {
    Date.prototype.plusMinutes = function (minutesToAdd) {
        this.setMinutes(this.getMinutes() + minutesToAdd);
    }
}

/**
 * Date.plusDays()
 */
if (isNullOrEmptyOrUndefined(Date.prototype.plusDays)) {
    Date.prototype.plusDays = function (daysToAdd) {
        this.setDate(this.getDate() + daysToAdd);
    }
}

/**
 * Date.plusWeeks()
 */
if (isNullOrEmptyOrUndefined(Date.prototype.plusWeeks)) {
    Date.prototype.plusWeeks = function (weeksToAdd) {
        const sunDays = weeksToAdd * 7;
        this.setDate(this.getDate() + sunDays);
    }
}

/**
 * Date.plusMonths()
 */
if (isNullOrEmptyOrUndefined(Date.prototype.plusMonths)) {
    Date.prototype.plusMonths = function (monthsToAdd) {
        this.setMonth(this.getMonth() + monthsToAdd);
    }
}

/**
 * Date.plusYears()
 */
if (isNullOrEmptyOrUndefined(Date.prototype.plusYears)) {
    Date.prototype.plusYears = function (yearsToAdd) {
        this.setFullYear(this.getFullYear() + yearsToAdd);
    }
}

/**
 * Date.minusMinutes()
 */
if (isNullOrEmptyOrUndefined(Date.prototype.minusMinutes)) {
    Date.prototype.minusMinutes = function (minutesToSubtract) {
        this.setMinutes(this.getMinutes() - minutesToSubtract);
    }
}

/**
 * Date.minusDays()
 */
if (isNullOrEmptyOrUndefined(Date.prototype.minusDays)) {
    Date.prototype.minusDays = function (daysToSubtract) {
        this.setDate(this.getDate() - daysToSubtract);
    }
}

/**
 * Date.minusWeeks()
 */
if (isNullOrEmptyOrUndefined(Date.prototype.minusWeeks)) {
    Date.prototype.minusWeeks = function (weeksToSubtract) {
        const sunDays = weeksToSubtract * 7;
        this.setDate(this.getDate() - sunDays);
    }
}

/**
 * Date.minusMonths()
 */
if (isNullOrEmptyOrUndefined(Date.prototype.minusMonths)) {
    Date.prototype.minusMonths = function (monthsToSubtract) {
        this.setMonth(this.getMonth() - monthsToSubtract);
    }
}

/**
 * Date.minusYears()
 */
if (isNullOrEmptyOrUndefined(Date.prototype.minusYears)) {
    Date.prototype.minusYears = function (yearsToSubtract) {
        this.setFullYear(this.getFullYear() - yearsToSubtract);
    }
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