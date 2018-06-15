export default function createReg(reg) {
    if (reg instanceof RegExp) {
        return (str) => reg.test(str);
    }
    if (typeof reg === 'function') {
        return reg;
    }
}
