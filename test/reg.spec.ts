import * as reg from '../src/reg';

test('mobile reg', () => {
  expect(reg.mobile('13110762781')).toBe(true);
  expect(reg.mobile('123')).toBe(false);
});

test('phone reg', () => {
  expect(reg.phone('020-12345678')).toBe(true);
  expect(reg.phone('123')).toBe(false);
});

test('email reg', () => {
  expect(reg.email('denglian1008@163.com')).toBe(true);
  expect(reg.email('111')).toBe(false);
});

test('postCode reg', () => {
  expect(reg.postCode('354000')).toBe(true);
  expect(reg.postCode('1')).toBe(false);
});

test('idCard reg', () => {
  expect(reg.idCard('230804197011188242')).toBe(true);
  expect(reg.idCard('230804197011188241')).toBe(false);
});


test('url reg', () => {
  expect(reg.url('http://www.baidu.com?xxx=111&&a=22#/sss')).toBe(true);
  expect(reg.url('adsf')).toBe(false);
});
