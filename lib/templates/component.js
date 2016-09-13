import React, { PropTypes } from 'react';
import classNames from 'classnames';

const <%= component %> = ({ size, className, style }) =>
  <svg
    width={size}
    height={size}
    viewBox="0 0 <%= defaultSize %> <%= defaultSize %>"
    style={{ ...style, width: size, height: size }}
    className={classNames('Icon Icon--<%= component %>', className)}>
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
