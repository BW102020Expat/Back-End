
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {userId: 1, username: 'test', password: 'pass123', email: "test@gmail.com"},
        {userId: 2, username: 'user1', password: 'pass1', email: "user1@gmail.com"},
        {userId: 3, username: 'user2', password: 'pass2', email: "user2@gmail.com"},
      ]);
    });
};
