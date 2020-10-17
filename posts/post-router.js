const router = require('express').Router();

const Post = require('./post-model.js');
const commentRouter = require('./comments/comments-router.js');

router.use('/comments', commentRouter);

router.get('/', (req, res) => {
    Post.find()
        .then(post => {
            res.status(200).json(post)
        })
        .catch(error => {
            res.status(500).json({ error: "Something went wrong while retrieving the post", error: error.message });
        });
});

router.post('/', validatePostInput, (req, res) => {
    const post = req.body;

    Post.add(post)
        .then(post => {
            res.status(201).json(post);
        })
        .catch(error => {
            res.status(500).json({ message: "Something went wrong while posting this Post", error: error.message });
        });
});

router.get('/:id', validatePostId, (req, res) => {
    const id = req.params.id;

    Post.findById(id)
        .then(post => {
            res.status(200).json(post);
        })
        .catch(error => {
            res.status(500).json({ message: "Something went wrong while retrieving this Post", error: error.message});
        });
});

router.put('/:id', validatePostId, (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    Post.update(changes, id)
        .then(post => {
            res.status(203).json(post);
        })
        .catch(error => {
            res.status(500).json({ message: "Something went wrong while updating this post", error: error.message });
        })
});

router.delete('/:id', validatePostId, (req, res) => {
    const id = req.params.id;

    Post.remove(id)
        .then(stat => {
            res.status(205).json(stat);
        })
        .catch(error => {
            res.status(500).json({ message: "Something went wrong while removing this Post", error: error.message });
        })
})

router.get('/:id/comments', validatePostId, (req, res) => {
    const id = req.params.id;

    Post.findCommentsFromPost(id)
        .then(comments => {
            res.status(200).json(comments);
        })
        .catch(error => {
            res.status(500).json({ message: "Something went wrong while retreiving this comments", error: error.message });
        })
});

router.post('/:id/comments', validatePostId, validateCommentInput, (req, res) => {
    const id = req.params.id;
    const newComment = req.body;

    Post.addComment(id, newComment)
        .then(comment => {
            res.status(201).json(comment);
        })
        .catch(error => {
            res.status(500).json({ message: "Something went wrong while adding this comment", error: error.message });
        });
});

function validatePostId(req, res, next) {
    Post.findById(req.params.id)
        .then(post => {
            if(post) {
                next();
            }
            else {
                res.status(404).json({ message: "Could not find this post, please make sure this is a valid post id" });
            }
        })
        .catch(error => {
            res.status(500).json({ message: "Something went wrong while retreiving this post", error: error.message });
        });
};

function validatePostInput(req, res, next) {
    const post = req.body;

    if(post.title === undefined || post.description === undefined || post.categoryId === undefined) {
        res.status(404).json({ message: "Title, description, and/or categoryId are missing" });
    }
    else {
        next();
    }
};

function validateCommentInput(req, res, next) {
    const comment = req.body;

    if(comment.comment === undefined) {
        res.status(404).json({ message: "Please add a valid commment" });
    }
    else {
        next();
    }
};

module.exports = router;