<% _.forEach(components, function(component, index) { %>export <%= component %> from './<%= component.slice(0, 2) %>/<%= component.slice(2, component.length) %>';
<% }); %>
