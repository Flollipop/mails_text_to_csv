import React from 'react';
import ReactDOM from 'react-dom';
import Converter from './Converter';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { buttonTestId } from './Button';

afterEach(cleanup);

test('render converter - smoke test', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Converter />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('user enter input in textArea', () => {
  render(<Converter />);
  const textArea = screen.getByTestId('textArea');
  const userInput = 'test to test test@test.fr';
  fireEvent.change(textArea, { target: { value: userInput } });
  expect(textArea.value).toEqual(userInput);
});

test('user enter input in and click button', () => {
  // must mock createObjectURL to avoid error un jest environment
  window.URL.createObjectURL = jest.fn();
  render(<Converter />);
  const textArea = screen.getByTestId('textArea');
  const userInput = 'test to test test@test.fr';
  fireEvent.change(textArea, { target: { value: userInput } });
  expect(textArea.value).toEqual(userInput);
  fireEvent.click(screen.getByTestId(buttonTestId));
});

test('initial state', () => {
  render(<Converter />);
  expect(screen.getByTestId('button')).toBeDisabled();
});
