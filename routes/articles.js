const express = require('express');

const router = express.Router();
const { celebrate, Joi } = require('celebrate');
const { getAllArticles, createArticle, deleteArticle } = require('../controllers/articles');
const auth = require('../middlewares/auth');
const { validateURL } = require('../middlewares/validations');

router.get('/articles', auth, getAllArticles);
router.post('/articles', auth, celebrate({
  body: Joi.object().keys({
    keyword: Joi.string().required(),
    title: Joi.string().required(),
    text: Joi.string().required(),
    date: Joi.string().required(),
    source: Joi.string().required(),
    link: Joi.string().required().custom(validateURL),
    image: Joi.string().required().custom(validateURL),
  }),
}), auth, createArticle);
router.delete('/articles/:articleId', auth, deleteArticle);

module.exports = router;
