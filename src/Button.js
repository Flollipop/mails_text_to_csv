import * as PropTypes from 'prop-types';
import React from 'react';

export function Button({ onClick }) {
  return <button onClick={onClick}>convert</button>;
}

Button.propTypes = { onClick: PropTypes.func };
