const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    data: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const User = mongoose.model('Item', itemSchema);

module.exports = User;