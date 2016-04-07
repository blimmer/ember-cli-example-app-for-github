import { ActiveModelSerializer } from 'ember-cli-mirage';

export default ActiveModelSerializer.extend({
  include: ['metrics'],
});
