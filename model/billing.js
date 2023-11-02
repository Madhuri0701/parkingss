const mongoose = require('mongoose')
const billingSchema = new mongoose.Schema({
    produts: {
        type: [mongoose.Schema.ObjectId],
        ref: 'product'
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'myuser1'
    }
})

module.exports = mongoose.model('billing', billingSchema) 