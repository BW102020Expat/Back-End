
exports.up = function(knex) {
    return knex.schema
    .createTable('users', tbl => {
        tbl.increments('userId');
        tbl.string('username', 100).notNullable().unique();
        tbl.string('password', 100).notNullable();
        tbl.string('email', 100).notNullable().unique();
    })
    .createTable('post', tbl => {
        tbl.increments('postId');
        tbl.string('title', 200).notNullable();
        tbl.string('description', 500).notNullable();
        tbl.string('imageURL');
        tbl.string('username')
            .references('username')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
    .createTable('comments', tbl => {
        tbl.increments('commentId');
        tbl.string('comment').notNullable();
        tbl.integer('postId')
            .references('postId')
            .inTable('post')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('posts')
    .dropTableIfExists('users')
    .dropTableIfExists('comments');
};
