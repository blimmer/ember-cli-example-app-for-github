import DS from 'ember-data';

export default DS.Model.extend({
  metric: DS.belongsTo(),
});
