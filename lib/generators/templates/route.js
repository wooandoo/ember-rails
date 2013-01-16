<%= application_name.camelize %>.Router.reopen({
  location: 'hash', // or 'history'
  rootURL: '/'
});

<%= application_name.camelize %>.<%= class_name %>Route = Ember.Route.extend({

});
