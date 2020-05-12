import { parseMails } from './stringManipulation';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import createChaiJestDiff from 'chai-jest-diff';

chai.use(dirtyChai).use(createChaiJestDiff());

test('parseMail - no email', () => {
  const noMails = '1234 test.test.com qwerty@qwerty https://google.fr http://google.fr';
  const res = parseMails(noMails);
  chai.expect(res.length).to.be.equal(0);
});
