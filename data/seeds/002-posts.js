
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('post').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('post').insert([
        {postId: 1, title: 'New York 10/2020', description: "Here is my description of NYC", imageURL: null,  username: 'user1'},
        {postId: 2, title: 'Chi-Town 9/2020', description: "Here is my description of Chicago", imageURL: null,  username: 'test'},
        {postId: 3, title: 'Philly 8/2020', description: "Here is my description of Philadelphia!", imageURL: null,  username: 'user2'}
      ]);
    });
};
