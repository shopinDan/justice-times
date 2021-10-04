module.exports.countWatch = async function (req, res) {

    const myArticle = await Category.find({_id: req.params.id})

    let updated = {
        count: myArticle[0].count + 1
    }

    try {
        const category = await Category.findOneAndUpdate(
            {_id: req.params.id},
            {$set: updated},
            {new: true}
        )
        res.status(200).json(category)
    } catch (e) {
        errorHandler(res, e)
    }
}

