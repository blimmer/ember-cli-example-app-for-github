import Ember from 'ember';
import { EKMixin, EKOnInsertMixin, keyDown } from 'ember-keyboard';
import { task } from 'ember-concurrency';

const { on } = Ember;

export default Ember.Component.extend(EKMixin, EKOnInsertMixin, {
  _hotkeySubmit: on(keyDown('Enter+cmd'), function() {
    this.get('myTask').perform();
  }),

  // If you comment this task out, everything will work fine
  myTask: task(function* () {
    // logic
  }).drop(), // drop extra keystrokes while this is exectuing

  someMethodINeedToUnitTest() {
    // yes, arguably I could create a separate file and unit test it there,
    // but for the sake of this bug, let's assume I don't want to do this.
  },
});
