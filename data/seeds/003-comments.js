
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {comment: 'Good point, this will help keep the yard sales under control',username: 'test',  postId: 1},
        {comment: 'How fun! We will be there.', username: 'test', postId: 2},
        {comment: 'Lovely! I will bring cole slaw and homemade cookies.', username: 'test', postId: 2},
        {comment: 'Thanks for mentioning this, my son tripped the other day.', username: 'test', postId: 3}
      ]);
    });
};
