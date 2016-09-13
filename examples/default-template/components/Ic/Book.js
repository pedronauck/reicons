import React, { PropTypes } from 'react';
import classNames from 'classnames';

const IcBook = ({ size, className, style }) =>
  <svg
    width={size}
    height={size}
    viewBox="0 0 30 30"
    style={{ ...style, width: size, height: size }}
    className={classNames('Icon Icon--IcBook', className)}>
    <path d="M22.737 26.842H6.947a.79.79 0 0 1 0-1.579h15.79a.79.79 0 0 1 0 1.58zm3.158-23.684a.79.79 0 0 0-.79.79v23.684a.79.79 0 0 1-.79.79H6.948a2.371 2.371 0 0 1-2.368-2.37 2.371 2.371 0 0 1 2.368-2.368h14.21a2.371 2.371 0 0 0 2.37-2.368V2.368A2.371 2.371 0 0 0 21.156 0H5.369A2.371 2.371 0 0 0 3 2.368v23.685A3.953 3.953 0 0 0 6.947 30h17.369a2.371 2.371 0 0 0 2.368-2.368V3.947a.79.79 0 0 0-.79-.79zM5.368 1.578h15.79a.79.79 0 0 1 .79.79v18.948a.79.79 0 0 1-.79.79H6.948c-.888 0-1.71.295-2.37.79V2.368a.79.79 0 0 1 .79-.79z" />
  </svg>;

IcBook.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object
};

IcBook.defaultProps = {
  size: 25
};

export default IcBook;
