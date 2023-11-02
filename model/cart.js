const mongoose = require('mongoose')
const cartSchema = new mongoose.Schema({
    produts: {
        type: [mongoose.Schema.ObjectId],
        ref: 'product'
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'myuser1'
    }
})

module.exports = mongoose.model('cart', cartSchema) 