<% _.forEach(packages, ({ prefix, components }) => { %><% _.forEach(components, (comp) => { %>import <%= `${prefix}${comp}` %> from './<%= prefix %>/<%= comp %>'
<% }) %><% }) %>
export default {<% _.forEach(packages, ({ prefix, components }) => { %><% _.forEach(components, (comp) => { %>
  <%= `${prefix}${comp}` %>,<% }) %><% }) %>
}
