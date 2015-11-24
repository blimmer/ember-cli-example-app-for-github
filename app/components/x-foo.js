import Ember from 'ember';
import stateFor from 'ember-state-services/state-for';

export default Ember.Component.extend({
  model1: Ember.computed(function() {
    return Ember.Object.create({
      foo: 'initial foo'
    });
  }),

  data: stateFor('foo', 'model1')
});
