/* jshint expr:true */

import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';

describe('Unit | Component | my component', function() {
  setupComponentTest('my-component', {
    // Specify the other units that are required for this test
    needs: ['service:my-service']
  });

  it('renders', function() {
    // creates the component instance
    let component = this.subject();
    // renders the component on the page
    this.render();
    expect(component).to.be.ok;
    expect(this.$()).to.have.length(1);
  });

  it('shows the injected service variable', function() {
    // creates the component instance
    this.subject();
    // renders the component on the page
    this.render();
    expect(this.$('h1').text().trim()).to.equal('foobarbaz');
  });
});
