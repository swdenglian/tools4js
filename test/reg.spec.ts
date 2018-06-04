import * as reg from '../src/reg';

test('mobile reg', () => {
  expect(reg.mobile.test('13110762781')).toBe(true);
  expect(reg.mobile.test('123')).toBe(false);
});

test('email reg', () => {
  expect(reg.email.test('denglian1008@163.com')).toBe(true);
  expect(reg.email.test('111')).toBe(false);
});

test('postCode reg', () => {
  expect(reg.postCode.test('354000')).toBe(true);
  expect(reg.postCode.test('1')).toBe(false);
});

test('idCard reg', () => {
  expect(reg.idCard.test('230804197011188242')).toBe(true);
  expect(reg.idCard.test('230804197011188241')).toBe(false);
});

// test('bankCard reg', () => {
//   expect(reg.idCard.test('6217002710000684874')).toBe(true);
//   expect(reg.idCard.test('6217002710000684')).toBe(false);
// });
