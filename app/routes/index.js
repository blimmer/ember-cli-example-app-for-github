import Ember from 'ember';
import {faker} from 'ember-cli-mirage';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('foo');
  },

  actions: {
    changeName(foo) {
      foo.set('name', faker.name.firstName());
      foo.save();
    }
  }
});
