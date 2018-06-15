export default class Reg {
    reg: ((obj: any) => Boolean) | RegExp;
    constructor(reg: ((obj: any) => Boolean) | RegExp);
    test(obj: any): Boolean;
}
