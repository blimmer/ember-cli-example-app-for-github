/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';

describeComponent(
  'foo-bar',
  'FooBarComponent',
  {
    // Specify the other units that are required for this test
    needs: ['config:environment', 'service:keyboard'],
  },
  function() {
    it('can just create the subject', function() {
      let component = this.subject();
      expect(component).to.be.ok;
    });
  }
);
