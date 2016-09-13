import React, { PropTypes } from 'react';

const <%= component %> = ({ className, size, style }) =>
  <svg
    width={size}
    height={size}
    viewBox="0 0 <%= defaultSize %> <%= defaultSize %>"
    style={{ ...style, width: size, height: size }}
    className={`${className + ' ' || ''}Icon Icon--<%= component %>`}>
    <%= svgContent %>
  </svg>;

<%= component %>.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object
};

<%= component %>.defaultProps = {
  size: 25
};

export default <%= component %>;
