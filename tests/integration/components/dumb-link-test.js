import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('dumb-link', 'Integration | Component | dumb link', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{dumb-link}}`);

  assert.equal(this.$().text().trim(), 'Click Me');
});
