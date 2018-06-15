export default function createReg(reg: RegExp | Function): Function {
  if (reg instanceof RegExp) {
    return (str: string) => reg.test(str);
  }

  if (typeof reg === 'function') {
    return reg;
  }
}
