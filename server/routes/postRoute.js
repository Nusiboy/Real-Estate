const express = require("express");
const { fetchPosts, publishPost } = require("../controllers/postController");
const router = express.Router();

router.get('/fetchposts', fetchPosts)
router.post('/publishpost', publishPost)

module.exports = router;
