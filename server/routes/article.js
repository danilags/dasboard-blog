var express = require('express');
var router = express.Router();
var contArticle = require('../controllers/article');

// router.post('/login', contUser.loginUser)
router.get('/', contArticle.getAll)
router.post('/', contArticle.createArticle)


module.exports = router;
