import { parseMails } from './stringManipulation';

test('parseMail - no email', () => {
  const noMails = '1234 test.test.com qwerty@qwerty https://google.fr http://google.fr';
  const res = parseMails(noMails);
  expect(res.length).toBe(0);
});
