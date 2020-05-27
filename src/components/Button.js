import * as PropTypes from 'prop-types';
import React from 'react';

export const buttonTestId = 'button';

export function Button({ onClick, label, disabled }) {
  return (
    <button data-testid={buttonTestId} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = { onClick: PropTypes.func, label: PropTypes.string, disabled: PropTypes.bool };
