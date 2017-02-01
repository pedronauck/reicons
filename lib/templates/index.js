import React, { PropTypes } from 'react';

<% _.forEach(packages, ({ prefix, components }) => { %><% _.forEach(components, (comp) => { %>import <%= `${prefix}${comp}` %> from './<%= prefix %>/<%= comp %>'
<% }) %><% }) %>
export {<% _.forEach(packages, ({ prefix, components }) => { %><% _.forEach(components, (comp) => { %>
  <%= `${prefix}${comp}` %>,<% }) %><% }) %>
}

const Icon = ({ name, ...iconProps }) => {
  const ChosenIcon = exports[name];

  if (!ChosenIcon) {
    throw new Error(`Cannot find icon '${name}'`);
  }

  return <ChosenIcon {...iconProps} />;
};

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(exports))
};

export default Icon;
