export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  const primaries = server.createList('contact', 2);
  const additional = server.createList('contact', 4);

  server.create('event', {
    name: 'Event 1',
    primaryContactIds: primaries.map((c) => { return c.id; }),
    additionalContactIds: additional.map((c) => { return c.id; }),
  });
}
