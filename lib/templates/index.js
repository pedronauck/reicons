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
  name: PropTypes.oneOf(exports.keys())
};

export default Icon;
