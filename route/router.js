const express = require('express')
const router = express.Router()
const {get,payment} = require('../controller/main')

router.route('/').patch(payment).get(get)

module.exports = router