
exports.up = function(knex) {
  return knex.schema
    .createTable('comments', tbl => {
        tbl.increments('commentId');
        tbl.string('comment').notNullable();
        tbl.integer('postId');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('comments');
};
