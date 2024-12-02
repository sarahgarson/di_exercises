const express = require('express');
const router = express.Router();

// In-memory storage for blog posts
let posts = [];


router.get('/', (req, res) => {
    res.json(posts);
});


router.get('/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) {
        return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
});


router.post('/', (req, res) => {
    const { title, content } = req.body;
    
    if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required' });
    }

    const newPost = {
        id: posts.length + 1,
        title,
        content,
        timestamp: new Date().toISOString()
    };

    posts.push(newPost);
    res.status(201).json(newPost);
});


router.put('/:id', (req, res) => {
    const { title, content } = req.body;
    const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));

    if (postIndex === -1) {
        return res.status(404).json({ message: 'Post not found' });
    }

    if (!title || !content) {
        return res.status(400).json({ message: 'Title and content are required' });
    }

    posts[postIndex] = {
        ...posts[postIndex],
        title,
        content,
        timestamp: new Date().toISOString()
    };

    res.json(posts[postIndex]);
});


router.delete('/:id', (req, res) => {
    const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
    
    if (postIndex === -1) {
        return res.status(404).json({ message: 'Post not found' });
    }

    posts = posts.filter(p => p.id !== parseInt(req.params.id));
    res.status(204).send();
});

module.exports = router;
