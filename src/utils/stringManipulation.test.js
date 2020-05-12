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

const mailTemplate = n => `email${n}@email.com`;
// generate array of emails using mailTemplate like for n = 3 the returned array equals ['email0@email.com', 'email1@email.com', 'email2@email.com']
const mailsArrayGenerator = n => Array.apply(null, { length: n }).map(Function.call, mailTemplate);
const mailsArray = mailsArrayGenerator(1000);

// create a big string with 1000 mails formatted like <email0@email.com>;<email1@email.com>;<email2@email.com>; ... ;<email997@email.com>;<email998@email.com>;<email999@email.com>
const lotOfFormattedMails = `<${mailsArray.join('>;<')}>`;

test('parseMail - 1000 emails', () => {
  const res = parseMails(lotOfFormattedMails);
  chai.expect(res.length).to.be.equal(1000);
  chai.expect(res.map(x => x.mail)).to.deep.equal(mailsArray);
});
