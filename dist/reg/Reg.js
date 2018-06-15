export default class Reg {
    constructor(reg) {
        this.reg = reg;
    }
    test(obj) {
        if (this.reg instanceof RegExp) {
            return this.reg.test(obj);
        }
        if (typeof this.reg === 'function') {
            return this.reg(obj);
        }
    }
}
