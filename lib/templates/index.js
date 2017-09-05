import React from 'react';
import t from 'prop-types';

const icons = {
<% _.each(Object.keys(icons), function(icon, i) { %>  <%= icon %>: {
    className: '<%= icons[icon].className %>',
    viewBox: '<%= icons[icon].viewBox %>',
    path: (
      <g>
        <%= icons[icon].path %>
      </g>
    )
  }<% if (i < Object.keys(icons).length - 1) { %>, <% } %>
<% }) %>};

const Icon = ({ name, size, className, style, ...props }) => {
  const ChosenIcon = icons[name],
	width = (typeof size === 'number') ? size : size.width,
	height = (typeof size === 'number') ? size : size.height;

  if (!ChosenIcon) {
    throw new Error(`Cannot find icon '${name}'`);
  }

  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox={ChosenIcon.viewBox}
      style={{ ...style, width: width, height: height }}
      className={`${className ? className + ' ' : ''}Icon ${ChosenIcon.className}`}>
      {ChosenIcon.path}
    </svg>
  );
};

Icon.propTypes = {
  name: t.string,
  className: t.string,
  size: t.oneOfType([
	t.number,
	t.shape({
		width: t.number,
		height: t.number
	})
  ]),
  style: t.object
};

Icon.defaultProps = {
  size: 25
};

export default Icon;

<% _.each(Object.keys(icons), function(icon, i) {%>export const <%= icon %> = (props) => <Icon {...props} name="<%= icon %>" />;
<% }) %>
