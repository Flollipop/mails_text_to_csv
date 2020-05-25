import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

test('render button - smoke test', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button />, div);
  ReactDOM.unmountComponentAtNode(div);
});
