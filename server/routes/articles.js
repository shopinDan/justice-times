const express = require('express')
const router = express.Router()

const controller = require('../controllers/articles')
const passport = require('passport')
const upload = require('../middleware/upload')

router.get('/', controller.getAllArticles)
router.post('/', passport.authenticate('jwt', {session: false}), upload.single('image'), controller.createArticle)
router.patch('/:id',controller.getArticleById)

module.exports = router