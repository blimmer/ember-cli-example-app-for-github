import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  primaryContacts: DS.hasMany('contact'),
  additionalContacts: DS.hasMany('contact'),
});
