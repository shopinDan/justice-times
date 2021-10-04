const express = require('express')
const router = express.Router()

const controller = require('../controllers/profile')
const passport = require('passport')
const upload = require('../middleware/upload')

router.get('/', controller.getAllProfile)
router.get('/:id', passport.authenticate('jwt', {session: false}), controller.getProfile)
router.patch('/:id', passport.authenticate('jwt', {session: false}),  upload.single('image'), controller.updateProfile)

module.exports = router