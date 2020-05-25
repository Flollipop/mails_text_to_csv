import * as PropTypes from 'prop-types';
import React from 'react';

export const buttonTestId = 'button';

export function Button({ onClick, label }) {
  return (
    <button data-testid={buttonTestId} onClick={onClick}>
      {label}
    </button>
  );
}

Button.propTypes = { onClick: PropTypes.func, label: PropTypes.string };
