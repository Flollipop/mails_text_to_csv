import * as PropTypes from 'prop-types';
import React from 'react';

export function Button(props) {
  return <button onClick={props.onClick}>convert</button>;
}

Button.propTypes = { onClick: PropTypes.func };
