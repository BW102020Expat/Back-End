const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    addComment,
    findCommentsFrompost
}

function find() {
    return db('post')
    // .join("categories", "categories.categoryId", "=", "post.categoryId")    
    .select("post.postId", "post.title", "post.description", "post.imageURL", "post.username")
    .orderBy("post.postId")
}; 

function findById(id) {
    return db('post').where({ postId: id }).first()
    // .join("categories", "categories.categoryId", "=", "post.categoryId")      
    .select("post.postId", "post.title", "post.description", "post.imageURL", "post.username");
};

function add(post) {
    return db('post').insert(post).returning('postId')
        .then(ids => {
            return findById(ids[0]);
        });
};

function update(changes, id) {
    return db('post').where({ postId: id }).update(changes)
        .then(() => {
            return findById(id);
        });
};

function remove(id) {
    return db('post').where({ postId: id }).del()
        .then(count => {
            if(count) {
                return "Successfully Removed";
            }
            else {
                return "ERROR";
            }
        });
};

function addComment(id, comment) {
    comment.postId = id;

    return db('comments').insert(comment).returning('commentId')
        .then(([ids]) => {
            return db('post')
            .join('comments', 'post.postId', "=", 'comments.postId')
            .select('post.title as postTitle', 'comments.commentId', 'comments.comment')
            .where({ 'comments.commentId': ids })
            .first();
        });
};

function findCommentsFrompost(id) {
    return db('post')
        .join('comments', 'post.postId', "=", 'comments.postId')
        .select('post.title as postTitle', 'comments.commentId', 'comments.comment',)
        .where({ 'post.postId': id })
};