import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'ember-cli-example-app-for-github/tests/helpers/start-app';

module('Acceptance | index', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('lists foos', function(assert) {
  server.createList('foo', 5);
  visit('/');

  andThen(function() {
    const foos = find('.foo');
    assert.equal(foos.length, 5);
  });
});
