import { Timer } from '../src';

test('timer helloWorld', () => {
  expect(new Timer().helloWorld()).toBe('helloWorld');
});
