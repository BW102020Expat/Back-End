
exports.up = function(knex) {
  return knex.schema
    .createTable('comments', tbl => {
        tbl.increments('commentId');
        tbl.string('comment').notNullable();
        tbl.integer('postID');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('comments');
};
