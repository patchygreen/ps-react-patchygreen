import React from 'react';
import PropTypes from 'prop-types';

function HelloWorld({message}) {
  return <div>Hello World {message}</div>
}

HelloWorld.propTypes = {
  message: PropTypes.string
}

export default HelloWorld;
