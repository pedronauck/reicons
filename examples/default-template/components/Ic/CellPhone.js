import React, { PropTypes } from 'react';
import classNames from 'classnames';

const IcCellPhone = ({ size, className, style }) =>
  <svg
    width={size}
    height={size}
    viewBox="0 0 30 30"
    style={{ ...style, width: size, height: size }}
    className={classNames('Icon Icon--IcCellPhone', className)}>
    <path d="M23.438 26.875c0 1.38-1.009 2.5-2.25 2.5H8.813c-1.243 0-2.25-1.12-2.25-2.5V3.125c0-1.38 1.007-2.5 2.25-2.5h12.374c1.242 0 2.25 1.12 2.25 2.5v23.75zm0-21.25H6.563h16.875zM15 27.5c.31 0 .563-.28.563-.625s-.252-.625-.563-.625c-.31 0-.563.28-.563.625s.252.625.563.625zm8.438-3.125H6.563h16.875zm-11.25-21.25h5.624-5.625z" stroke="#000" />
  </svg>;

IcCellPhone.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object
};

IcCellPhone.defaultProps = {
  size: 25
};

export default IcCellPhone;
