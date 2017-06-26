import PropTypes from 'prop-types';
import React from 'react';
import scss from './Button.scss';

const { string } = PropTypes;


const button = ({
  title,
  style,
}) => (
  <button
    className={style}
  >
    {title}
  </button>
);

button.defaultProps = {
  style: `${scss.button} ${scss.buttonLarge}`,
  title: 'Hello World',
};

button.propTypes = {
  style: string,
  title: string,
};

export default button;
