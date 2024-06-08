const Article = require('../models/article');

async function getAllArticles(req, res) {
  try {
    const articles = await Article.find({ owner: req.user._id });
    return res.json(articles);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error' });
  }
}

async function createArticle(req, res) {
  const {
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
  } = req.body;
  try {
    const newArticle = new Article({
      keyword,
      title,
      text,
      date,
      source,
      link,
      image,
      owner: req.user._id,
    });
    const article = await newArticle.save();
    return res.status(201).json(article);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error' });
  }
}

async function deleteArticle(req, res) {
  const { articleId } = req.params;
  try {
    const article = await Article.findById(articleId).select('+owner');
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    if (article.owner.toString() !== req.user._id) {
      return res.status(403).json({ message: 'Access denied, you are not the owner' });
    }
    await Article.findByIdAndDelete(articleId);
    return res.json({ message: 'Article  deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server Error' });
  }
}

module.exports = {
  getAllArticles,
  createArticle,
  deleteArticle,
};
