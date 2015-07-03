import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
  canProve: Ember.computed(function() {
    return true;
  })
});
