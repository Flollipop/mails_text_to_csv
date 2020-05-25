import React from 'react';
import ReactDOM from 'react-dom';
import { Button, buttonTestId } from './Button';
import { render, screen, fireEvent } from '@testing-library/react';

test('render button - smoke test', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders button test label', () => {
  const labelToTest = 'button label';
  const { getByTestId } = render(<Button label={labelToTest} />);
  expect(getByTestId(buttonTestId)).toHaveTextContent(labelToTest);
});

test('renders button test label', () => {
  const handleClose = jest.fn();
  const labelToTest = 'button label';
  const { getByTestId } = render(<Button label={labelToTest} onClick={handleClose} />);

  expect(getByTestId(buttonTestId)).toBeTruthy();
  fireEvent.click(screen.getByTestId(buttonTestId));
  expect(handleClose).toHaveBeenCalledTimes(1);
});
