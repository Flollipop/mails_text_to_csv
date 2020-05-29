import { createVirtualFileForDownload } from './download';

test('createVirtualFileForDownload', () => {
  window.URL.createObjectURL = jest.fn();
  const mLink = { href: '', setAttribute: jest.fn(), click: jest.fn(), style: {} };
  const createElementSpyOn = jest.spyOn(document, 'createElement').mockReturnValueOnce(mLink);
  document.body.appendChild = jest.fn();
  document.body.removeChild = jest.fn();

  createVirtualFileForDownload('fake data');

  expect(createElementSpyOn).toBeCalledWith('a');
  expect(document.body.appendChild).toBeCalledWith(mLink);
  expect(mLink.click).toBeCalledTimes(1);
  expect(document.body.removeChild).toBeCalledWith(mLink);
  expect(mLink.setAttribute).toBeCalledWith('download', 'emails.csv');
  expect(document.body.appendChild).toBeCalledWith(mLink);
  expect(mLink.click).toBeCalledTimes(1);
});
