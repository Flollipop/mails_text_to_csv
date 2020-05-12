import * as PropTypes from 'prop-types';
import React from 'react';

export function Button({ onClick, label }) {
  return <button onClick={onClick}>{label}</button>;
}

Button.propTypes = { onClick: PropTypes.func, label: PropTypes.string };
