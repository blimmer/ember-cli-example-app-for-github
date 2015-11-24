import Ember from 'ember';
import stateFor from 'ember-state-services/state-for';

export default Ember.Component.extend({
  model2: Ember.computed(function() {
    return Ember.Object.create({
      bar: 'initial bar'
    });
  }),

  data: stateFor('bar', 'model2')
});
