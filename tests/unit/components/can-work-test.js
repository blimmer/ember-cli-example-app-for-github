import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('can-work', 'Unit | Component | can work', {
  // Specify the other units that are required for this test
  needs: ['ability:work', 'helper:can'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});
