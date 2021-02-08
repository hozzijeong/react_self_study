const mongoose = require('mongoose');
 
const Schema = mongoose.Schema;
 
const Stock = new Schema({
    stock_name: {
        type: String
    },
    stock_ticket: {
        type: String
    },
    stock_value: {
        type: Number
    }
});
 
module.exports = mongoose.model('stock',Stock);