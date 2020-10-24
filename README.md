# common-functions

##### 该 JS 主要自定义和收录 公共函数, 主要如下:

###### 未分类:

- `isNullOrEmptiyOrUndefined(obj)` : 判读是否为 null , '', undefined.

###### Date:

- `Date().builder()`: 构建自定义时间, `year(year)`.`month(month)`.`day(date)`.`hours(hours)`.`minutes(minutes)`.`build()`.
- `Date().plusMinutes(minutesToAdd)`: 返回一个当前时间累加 `minutes` 后的时间.
- `Date().plusDays(daysToAdd)`: 返回一个当前时间累加 `days` 后的时间.
- `Date().plusWeeks(weeksToAdd)`: 返回一个当前时间累加 `weeks` 后的时间.
- `Date().plusMonths(monthsToAdd)`: 返回一个当前时间累加 `months` 后的时间.
- `Date().plusYears(yearsToAdd)`: 返回一个当前时间累加 `years` 后的时间.
- `Date().minusMinutes(minutesToAdd)`: 返回一个当前时间累减 `minutes` 后的时间.
- `Date().minusDays(daysToAdd)`: 返回一个当前时间累减`days` 后的时间.
- `Date().minusWeeks(weeksToAdd)`: 返回一个当前时间累减 `weeks` 后的时间.
- `Date().minusMonths(monthsToAdd)`: 返回一个当前时间累减 `months` 后的时间.
- `Date().minusYears(yearsToAdd)`: 返回一个当前时间累减 `years` 后的时间.
- `Date().format(mask)`: 时间格式化.
- `Date().isAfterOrEquals(date)`: 当前时间是否大于或等于需对比时间.
- `Date().isAfter(date)`: 当前时间是否大于需对比时间.
- `Date().isBeforeOrEquals(date)`: 当前时间是否小于或等于需对比时间.
- `Date().isBefore(date)`: 当前时间是否小于需对比时间.
- `Date().getLastDayOfMonth()`: 当前时间当月的最后一天 `date number`.

###### serializtion:

- `$(form).serializeTableToObjectList()`: 序列化 `form > table` 中数据行为 `JSON List` 并返回. 

