const Articles = require('../models/Articles')
const errorHandler = require('../utils/errorHandler')


module.exports.test = function (req, res) {
    res.status(200).json({
        message: 'Article controller'
    })
}

module.exports.getAllArticles =  async function (req, res) {
    try {
        const articles = await Articles.find({})
        res.status(200).json(articles)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.createArticle = async function(req, res) {
    const article = new Articles({
        title: req.body.title,
        category: req.body.category,
        description: req.body.description,
        imageSrc: req.file ? req.file.path : '',
        user: req.user.id
    })
    try {
        await article.save()
        res.status(201).json(article)
    } catch (e) {
        errorHandler(res, e)
    }
}
module.exports.getArticleById = async function(req, res) {
    const myArticle = await Articles.findOne({_id: req.params.id})
    try {
        const article = await Articles.findByIdAndUpdate(
            {_id: req.params.id },
            {$set: {views: myArticle.views + 1 }},
            {new: true}
        )
        res.status(200).json(article)
    } catch (e) {
        errorHandler(res, e)
    }
}
