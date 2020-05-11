import * as PropTypes from 'prop-types';
import React from 'react';

const buttonStyle = {
  display: 'flex',
  maxHeight: '40px',
  backgroundColor: '#01A7CA',
  color: 'white',
  border: 0,
};

export function Button(props) {
  return (
    <button style={buttonStyle} onClick={props.onClick}>
      convert
    </button>
  );
}

Button.propTypes = { onClick: PropTypes.func };
