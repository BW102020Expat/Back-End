
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('post').del()
    .then(function () {
      // Inserts seed entries
      return knex('post').insert([
        {title: 'New York 10/2020', description: "Here is my description of NYC", imageURL: null,  username: 'user1'},
        {title: 'Chi-Town 9/2020', description: "Here is my description of Chicago", imageURL: null,  username: 'test'},
        {title: 'Philly 8/2020', description: "Here is my description of Philadelphia!", imageURL: null,  username: 'user2'}
      ]);
    });
};
