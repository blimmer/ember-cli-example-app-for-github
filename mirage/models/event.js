import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  primaryContacts: hasMany('contact', { inverseOf: 'primaryContact' }),

  // if you uncomment this, it will stop working
  // additionalContacts: hasMany('contact', { inverseOf: 'additionalContact' }),
});
