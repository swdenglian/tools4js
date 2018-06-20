# money
钱的相关操作

# API

```js
  console.log('加法：');
  console.log(1.79 + 0.12);
  console.log(new Money(1.79).add(0.12).getValue());

  console.log('减法：');
  console.log(2.01 - 0.12);
  console.log(new Money(2.01).subtract(0.12).getValue());

  console.log('乘：');
  console.log(1.01 * 1.3);
  console.log(new Money(1.01).multiply(1.3).getValue());

  console.log('除：');
  console.log(0.69 / 10);
  console.log(new Money(0.69).division(10).getValue());
```