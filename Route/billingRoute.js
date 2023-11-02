const {getBilling,postBilling} = require('../Controller/billingController')
const auth = require('../middleware/auth')

const route = require('express').Router()

route.get('/',getBilling)

route.post('/',auth,postBilling)


module.exports = route