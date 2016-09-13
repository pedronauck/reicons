import React, { PropTypes } from 'react';
import classNames from 'classnames';

const IcLocation = ({ size, className, style }) =>
  <svg
    width={size}
    height={size}
    viewBox="0 0 30 30"
    style={{ ...style, width: size, height: size }}
    className={classNames('Icon Icon--IcLocation', className)}>
    <path d="M14.828 2.069c-4.278 0-7.759 3.602-7.759 8.029 0 3.463 5.02 12.344 7.759 16.799 2.738-4.455 7.758-13.336 7.758-16.8 0-4.426-3.48-8.028-7.758-8.028zm0 27.931l-.824-1.253C13.636 28.188 5 14.996 5 9.857 5 4.42 9.409 0 14.828 0s9.827 4.421 9.827 9.856c0 5.14-8.636 18.332-9.004 18.89L14.828 30zm0-22.759a2.59 2.59 0 0 0-2.587 2.587 2.59 2.59 0 0 0 2.587 2.586 2.59 2.59 0 0 0 2.586-2.586 2.59 2.59 0 0 0-2.586-2.587zm0 6.207a3.625 3.625 0 0 1-3.621-3.62 3.625 3.625 0 0 1 3.62-3.621 3.625 3.625 0 0 1 3.621 3.62 3.625 3.625 0 0 1-3.62 3.621z" />
  </svg>;

IcLocation.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object
};

IcLocation.defaultProps = {
  size: 25
};

export default IcLocation;
