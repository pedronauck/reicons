import React, { PropTypes } from 'react';
import classNames from 'classnames';

const IcSearch = ({ size, className, style }) =>
  <svg
    width={size}
    height={size}
    viewBox="0 0 30 30"
    style={{ ...style, width: size, height: size }}
    className={classNames('Icon Icon--IcSearch', className)}>
    <path d="M10.725.015c5.961 0 10.812 4.845 10.812 10.803 0 1.957-.53 3.789-1.446 5.374l9.082 9.073a2.815 2.815 0 0 1 0 3.985c-.55.55-1.27.826-1.993.826a2.81 2.81 0 0 1-1.994-.826l-9.082-9.073a10.74 10.74 0 0 1-5.38 1.444c-5.965 0-10.816-4.845-10.816-10.803C-.092 4.86 4.762.015 10.725.015zm15.79 27.907a.94.94 0 1 0 1.33-1.327l-8.844-8.838c-.405.481-.85.925-1.33 1.33l8.844 8.835zm-15.79-8.18c4.924 0 8.93-4.003 8.93-8.924 0-4.92-4.006-8.924-8.93-8.924-4.927 0-8.934 4.004-8.934 8.924.002 4.92 4.007 8.924 8.934 8.924zM5.775 5.746a.94.94 0 0 1 1.33 1.329 5.3 5.3 0 0 0 0 7.487.939.939 0 1 1-1.33 1.328c-2.8-2.796-2.8-7.346 0-10.144z" />
  </svg>;

IcSearch.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object
};

IcSearch.defaultProps = {
  size: 25
};

export default IcSearch;
