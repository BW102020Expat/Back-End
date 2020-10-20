
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {comment: 'Good point, this will help keep the yard sales under control', postId: 1},
        {comment: 'How fun! We will be there.', postId: 2},
        {comment: 'Lovely! I will bring cole slaw and homemade cookies.', postId: 2},
        {comment: 'Thanks for mentioning this, my son tripped the other day.', postId: 3}
      ]);
    });
};
