export default class Timer {
    constructor(date) {
        this._value = null;
        if (date instanceof Date) {
            if (isNaN(date.getTime())) {
                this.setValue(new Date());
            }
            else {
                this.setValue(date);
            }
        }
        if (typeof (date) === 'number' || typeof (date) === 'string') {
            let toDate = new Date(date);
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
    getTime() {
        return this.getValue().getTime();
    }
    getFirstDayOfMonth() {
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
    format(fmt) {
        let _fmt = fmt;
        let date = this.getValue();
        let o = {
            'M+': date.getMonth() + 1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds(),
            'q+': Math.floor((date.getMonth() + 3) / 3),
            'S': date.getMilliseconds()
        };
        if (/(y+)/.test(_fmt))
            _fmt = _fmt.replace(RegExp.$1, (String(date.getFullYear())).substr(4 - RegExp.$1.length));
        for (let k in o) {
            if (new RegExp('(' + k + ')').test(_fmt)) {
                _fmt = _fmt
                    .replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr((String(o[k])).length)));
            }
        }
        return _fmt;
    }
    setValue(value) {
        this._value = value;
    }
    getValue() {
        return this._value;
    }
}
Timer.MS_SECOND = 1000;
Timer.MS_MINUTE = Timer.MS_SECOND * 60;
Timer.MS_HOURE = Timer.MS_MINUTE * 60;
Timer.MS_DAY = Timer.MS_HOURE * 24;
