
export default class Timer {
  static MS_SECOND = 1000;
  static MS_MINUTE = Timer.MS_SECOND * 60;
  static MS_HOURE = Timer.MS_MINUTE * 60;
  static MS_DAY = Timer.MS_HOURE * 24;

  _value: Date = null;

  constructor(date?: Date | Number | string | Timer | null) {
    if (date instanceof Date) {
      // assign new Date to Timer when date is Invalid Date
      if (isNaN(date.getTime())) {
        this.setValue(new Date());
      } else {
        this.setValue(date);
      }
    }

    if (typeof (date) === 'number' || typeof (date) === 'string') {
      let toDate = new Date(date);
      // assign new Date to toDate when toDate is Invalid Date
      if (isNaN(toDate.getTime())) {
        toDate = new Date();
      }
      this.setValue(toDate);
    }

    if (date instanceof Timer) {
      this.setValue(date.getValue());
    }

    if (typeof (date) === 'undefined' || date === null) {
      this.setValue(new Date());
    }
  }

  getTime(): Number {
    return this.getValue().getTime();
  }

  getFirstDayOfMonth(): Timer {
    let firstDayOfMonth = new Date(this.getValue());
    firstDayOfMonth.setDate(1);
    firstDayOfMonth.setHours(0);
    firstDayOfMonth.setMinutes(0);
    firstDayOfMonth.setSeconds(0);
    return new Timer(firstDayOfMonth);
  }

  getLastDayOfMonth() {
    let year = this.getValue().getFullYear();
    let month = this.getValue().getMonth();
    let nexMonth = month + 1;
    let nexMonthFirthDay = new Date(year, nexMonth, 1);
    let lastDayOfMonth = new Date(nexMonthFirthDay.getTime() - Timer.MS_DAY);
    return new Timer(lastDayOfMonth);
  }

  format(fmt: string): string {
    let _fmt = fmt;
    let date = this.getValue();
    let o = {
      'M+': date.getMonth() + 1, //月份
      'd+': date.getDate(), //日
      'h+': date.getHours(), //小时
      'm+': date.getMinutes(), //分
      's+': date.getSeconds(), //秒
      'q+': Math.floor((date.getMonth() + 3) / 3), //季度
      'S': date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(_fmt)) _fmt = _fmt.replace(RegExp.$1, (String(date.getFullYear())).substr(4 - RegExp.$1.length));
    for (let k in o) {
      if (new RegExp('(' + k + ')').test(_fmt)) {
        _fmt = _fmt
          .replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr((String(o[k])).length)));
      }
    }
    return _fmt;
  }

  setValue(value: Date) {
    this._value = value;
  }

  getValue(): Date {
    return this._value;
  }
}