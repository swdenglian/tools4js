import { Timer } from '../src';

test('getTime', () => {
  let dateString = '2018/06/02';
  expect(new Timer(dateString).getTime()).toBe(new Date(dateString).getTime());
});

test('format', () => {
  let dateString = '2018/06/02';
  expect(new Timer(dateString).format('yyyy/MM/dd')).toBe(dateString);
});

test('new Timer', () => {
  let dateString = '2018/06/02';
  let date = new Date(dateString);

  expect(new Timer(dateString).format('yyyy/MM/dd')).toBe(dateString);
  expect(new Timer(date).format('yyyy/MM/dd')).toBe(dateString);
});

test('getFirstDatOfMonth', () => {
  let dateString = '2018/06/02';
  expect(new Timer(dateString).getFirstDayOfMonth().format('yyyy/MM/dd')).toBe('2018/06/01');
});

test('getLastDateOfMonth', () => {
  let dateString = '2018/06/02';
  expect(new Timer(dateString).getLastDayOfMonth().format('yyyy/MM/dd')).toBe('2018/06/30');
});
