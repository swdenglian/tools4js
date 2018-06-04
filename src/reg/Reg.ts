export default class Reg {
  reg: ((obj: any) => Boolean) | RegExp;

  constructor(reg: ((obj: any) => Boolean) | RegExp) {
    this.reg = reg;
  }

  test(obj: any) {
    if (this.reg instanceof RegExp) {
      return this.reg.test(obj);
    }

    if (typeof this.reg === 'function') {
      return this.reg(obj);
    }
  }
}
