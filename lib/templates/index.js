<% _.forEach(components, function(comp, i) { %>import <%= comp %> from './<%= comp.slice(0, 2) %>/<%= comp.slice(2, comp.length) %>';
<% }); %>
export default {<% _.forEach(components, function(comp, index) { %>
  <%= comp %><% if (index !== components.length - 1) {%>,<% } %><% }); %>
}
