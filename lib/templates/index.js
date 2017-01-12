<% _.forEach(components, function(comp, i) { %>import <%= comp %> from './<%= comp.slice(0, 2) %>/<%= comp.slice(2, comp.length) %>';
<% }); %>
export {<% _.forEach(components, function(comp, index) { %>
  <%= comp %><% if (index !== components.length - 1) {%>,<% } %><% }); %>
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
