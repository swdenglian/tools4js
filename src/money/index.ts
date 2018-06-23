export default class Money {
  value: Number = 0;

  constructor(number: Number = 0) {
    this.value = Number(number);
  }

  getCountElement(_number1: Number, _number2: Number) {
    let number1 = Number(_number1);
    let number2 = Number(_number2);
    let decimals1 = 0;
    let decimals2 = 0;
    let maxDec = 0;

    try { decimals1 = number1.toString().split('.')[1].length } catch (e) { decimals1 = 0 }
    try { decimals2 = number2.toString().split('.')[1].length } catch (e) { decimals2 = 0 }

    maxDec = Math.max(decimals1, decimals2);
    let diff = Math.abs(decimals1 - decimals2);
    let number1Str = number1.toString().replace('.', '');
    let number2Str = number2.toString().replace('.', '');

    for (let i = 0; i < diff; i++) {
      if (decimals1 < decimals2) {
        number1Str += '0';
      } else {
        number2Str += '0';
      }
    }

    return {
      number1: Number(number1Str),
      number2: Number(number2Str),
      maxDec
    };
  }

  /**
   * 加
   */
  add(number) {
    let countElement = this.getCountElement(this.value, number);
    this.value = (countElement.number1 + countElement.number2) / Math.pow(10, countElement.maxDec);
    return this;
  }

  /**
   * 减
   */
  subtract(number) {
    let countElement = this.getCountElement(this.value, number);
    this.value = (countElement.number1 - countElement.number2) / Math.pow(10, countElement.maxDec);
    return this;
  }

  /**
   * 乘
   */
  multiply(number) {
    let countElement = this.getCountElement(this.value, number);
    this.value = (countElement.number1 * countElement.number2) / Math.pow(100, countElement.maxDec);
    return this;
  }

  /**
   * 除
   */
  division(number) {
    let countElement = this.getCountElement(this.value, number);
    this.value = countElement.number1 / countElement.number2;
    return this;
  }

  getValue() {
    return this.value;
  }
}
