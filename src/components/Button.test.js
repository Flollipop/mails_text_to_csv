import React from 'react';
import ReactDOM from 'react-dom';
import { Button, buttonTestId } from './Button';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';

afterEach(cleanup);

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

test('renders button test onClick', () => {
  const onClick = jest.fn();
  const labelToTest = 'button label';
  const { getByTestId } = render(<Button label={labelToTest} onClick={onClick} />);

  expect(getByTestId(buttonTestId)).toBeTruthy();
  fireEvent.click(screen.getByTestId(buttonTestId));
  expect(onClick).toHaveBeenCalledTimes(1);
});

test('renders disabled button test no onClick call', () => {
  const onClick = jest.fn();
  const labelToTest = 'button label';
  const { getByTestId } = render(<Button label={labelToTest} onClick={onClick} disabled={true} />);

  expect(getByTestId(buttonTestId)).toBeTruthy();
  fireEvent.click(screen.getByTestId(buttonTestId));
  expect(onClick).toHaveBeenCalledTimes(0);
});

test('button snapshot', () => {
  const tree = renderer.create(<Button label='button' />).toJSON();
  expect(tree).toMatchSnapshot();
});
