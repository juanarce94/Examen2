/**
 * Created by Juan on 6/7/2016.
 */
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var transactionSchema = new Schema({
    id: {type: Number},
    user: {type: String},
    date: {type: String},
    savingMethod: {type: String, enum:['Credit','Debit']},
    amount: {type: Number},
    active: { type: Boolean}

});

var userSchema = new Schema({
    name:     { type: String },
    password: { type: String },
    email:    { type: String },
    debit:    { type: Number }
});

module.exports = mongoose.model('User', userSchema);
module.exports = mongoose.model('Transaction', transactionSchema);