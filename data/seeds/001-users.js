
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'test', password: 'pass123', email: "test@gmail.com"},
        { username: 'user1', password: 'pass1', email: "user1@gmail.com"},
        { username: 'user2', password: 'pass2', email: "user2@gmail.com"},
      ]);
    });
};
