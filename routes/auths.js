const express = require('express');
const { celebrate, Joi } = require('celebrate');

const router = express.Router();
const { signup, signin } = require('../controllers/auths');

router.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    name: Joi.string().min(2).max(30),
  }),
}), signup);
router.post('/signin', signin);

module.exports = router;
