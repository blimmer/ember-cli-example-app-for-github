export default function(server) {

  // Seed your development database using your factories. This
  // data will not be loaded in your tests.

  let posts = server.createList('post', 5);
  server.create('author', {
    posts: posts
  });
}
