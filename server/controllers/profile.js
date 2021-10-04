const Users = require('../models/Users')
const errorHandler = require('../utils/errorHandler')

module.exports.test = function (req, res) {
    res.status(200).json({
        message: 'Profile controller'
    })
}

module.exports.getProfile =  async function (req, res) {
    try {
        const user = await Users.findById(req.params.id)
        res.status(200).json(user)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getAllProfile = async function (req, res) {
    try {
        const users = await Users.find({})
        res.status(200).json(users)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.updateProfile = async function(req, res) {
    const updated = {
        fname: req.body.fname,
        lname: req.body.lname,
        description: req.body.description,
    }
    if (req.file) {
        updated.photo = req.file.path
    }
    try {
        const user = await Users.findByIdAndUpdate(
            {_id: req.params.id},
            {$set: updated},
            {new: true}
        )
        res.status(200).json(user)
    } catch (e) {
        errorHandler(res, e)
    }
}