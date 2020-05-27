import React from 'react';
import ReactDOM from 'react-dom';
import { Footer } from './Footer';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

test('render footer - smoke test', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('github link', () => {
  const { getByText } = render(<Footer />);
  const linkElement = getByText('See the code');

  expect(linkElement.href).toBe('https://github.com/Flollipop/mails_text_to_csv');
  expect(linkElement).toBeInTheDocument();
});

test('Footer snapshot', () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
