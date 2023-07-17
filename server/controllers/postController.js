const Post = require('../models/postModel');

const fetchPosts = async (req, res) => {
  try {
    const allPosts = await Post.find({});
    res.status(200).json(allPosts);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
  
  const publishPost = async (req, res) => {
    try {
      const postExists = await Post.findOne({ title: req.body.title });
      if (postExists) {
        return res.status(400).json("Post already exists!");
      }
      const newPost = await Post.create(req.body);
      return res.status(200).json(newPost);
    } catch (err) {
      res.status(500).json(err.message);
    }
  };
  
  module.exports = { fetchPosts, publishPost };