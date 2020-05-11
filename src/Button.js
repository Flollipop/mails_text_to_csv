import * as PropTypes from 'prop-types';
import React from 'react';

const buttonStyle = {};

export function Button(props) {
  return (
    <button style={buttonStyle} onClick={props.onClick}>
      convert
    </button>
  );
}

Button.propTypes = { onClick: PropTypes.func };
