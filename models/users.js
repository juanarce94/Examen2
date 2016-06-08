/**
 * Created by Juan on 6/7/2016.
 */
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var userSchema = new Schema({
    name:     { type: String },
    password: { type: String },
    email:    { type: String },
    debit:    { type: Number }
});

module.exports = mongoose.model('User', userSchema);