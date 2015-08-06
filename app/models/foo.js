import DS from 'ember-data';

const async = true;

export default DS.Model.extend({
  bars: DS.hasMany('bar', {async})
});
