import { parseMails } from './stringManipulation';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import createChaiJestDiff from 'chai-jest-diff';

chai.use(dirtyChai).use(createChaiJestDiff());

const basicStringTest = mail => `123 test.test.com ${mail} https://google.fr http://google.fr`;
const notAMail = 'qwerty@qwerty';
const mail1 = 'mail@mail.fr';
const noMail = basicStringTest(notAMail);
const withMail = basicStringTest(mail1);

test('parseMail - no email', () => {
  const res = parseMails(noMail);
  chai.expect(res.length).to.be.equal(0);
});

test('parseMail - 1 email', () => {
  const res = parseMails(withMail);
  chai.expect(res.length).to.be.equal(1);
  chai.expect(res[0].mail).to.be.equal(mail1);
});

const mails = ['email1@email.fr'];
