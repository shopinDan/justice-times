const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/Users')
const errorHandler = require('../utils/errorHandler')
const keys = require('../config/keys')

module.exports.register = async function(req, res) {
    const candidate = await User.findOne({email: req.body.email})

    if (candidate) {
        res.status(409).json({
            message: 'Такой email уже занят'
        })
    } else {
        const salt = bcrypt.genSaltSync(10)
        const password = req.body.password
        const user = new User({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            password: bcrypt.hashSync(password, salt)
        })

        try {
            await user.save()
            res.status(201).json(user)
        } catch (e) {
            errorHandler(res, e)
        }
    }
}

module.exports.login = async function(req, res) {
    const candidate = await User.findOne({email: req.body.email})
    if (candidate) {
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
        if (passwordResult) {
            const token = jwt.sign({
                fname: candidate.fname,
                lname: candidate.lname,
                email: candidate.email,
                userId: candidate._id,
                description: candidate.description,
                photo: candidate.photo
            }, keys.jwt, {expiresIn: 60 * 60})
            res.status(200).json({
                token: `Bearer ${token}`,
                userId: candidate._id
            })
        } else {
            res.status(401).json({
                message: 'Пароли не совпадают'
            })
        }
    } else {
        res.status(404).json({
            message: 'Нет такого пользователя'
        })
    }
}

module.exports.test = function (req, res) {
    res.status(200).json({
        message: 'Auth controller'
    })
}