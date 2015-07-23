import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'ember-cli-example-app-for-github/tests/helpers/start-app';

var application;

module('Acceptance | index', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('loads embedded posts', function(assert) {
  let posts = server.createList('post', 5);
  server.create('author', {
    posts: posts
  });

  visit('/');

  andThen(function() {
    assert.equal(find('.post').length, 5);
  });
});
