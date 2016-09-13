import React, { PropTypes } from 'react';
import classNames from 'classnames';

const IcCalendar = ({ size, className, style }) =>
  <svg
    width={size}
    height={size}
    viewBox="0 0 30 30"
    style={{ ...style, width: size, height: size }}
    className={classNames('Icon Icon--IcCalendar', className)}>
    <path d="M27.5 2.813h-4.063V.937a.937.937 0 1 0-1.875 0v1.875h-5.625V.938a.937.937 0 1 0-1.874 0v1.875H8.436V.937a.937.937 0 1 0-1.874 0v1.875H2.5a2.5 2.5 0 0 0-2.5 2.5V27.5A2.5 2.5 0 0 0 2.5 30h25a2.5 2.5 0 0 0 2.5-2.5V5.312c0-1.381-1.118-2.5-2.5-2.5zm.625 24.687c0 .345-.28.625-.624.625h-25a.626.626 0 0 1-.626-.625V5.312c0-.344.28-.625.625-.625h4.063v1.875a.937.937 0 1 0 1.875 0V4.688h5.624v1.875a.937.937 0 1 0 1.876 0V4.688h5.624v1.875a.937.937 0 1 0 1.875 0V4.688h4.064c.344 0 .624.28.624.625V27.5zM6.562 11.25h3.75v2.813h-3.75V11.25zm0 4.688h3.75v2.812h-3.75v-2.813zm0 4.687h3.75v2.813h-3.75v-2.813zm6.563 0h3.75v2.813h-3.75v-2.813zm0-4.688h3.75v2.813h-3.75v-2.813zm0-4.687h3.75v2.813h-3.75V11.25zm6.563 9.375h3.75v2.813h-3.75v-2.813zm0-4.688h3.75v2.813h-3.75v-2.813zm0-4.687h3.75v2.813h-3.75V11.25z" />
  </svg>;

IcCalendar.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object
};

IcCalendar.defaultProps = {
  size: 25
};

export default IcCalendar;
