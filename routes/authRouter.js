const express = require('express')
const { getSignup, postSignup, postSignin, getSignin } = require('../controllers/user-auth')
// const { validateSignin } = require('../middlewares/input-validate')
const router = express.Router()

router.route('/signin').get(getSignin).post(postSignin)
router.route('/signup').get(getSignup).post(postSignup)

module.exports = router