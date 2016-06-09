/**
 * Created by Juan on 6/7/2016.
 */
var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');


var userModel = require('./models/users');
var UserCtrl = require('./controllers/users');
var transactionCtrl = require('./controllers/transactions');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

mongoose.connect('mongodb://localhost/users', function(err) {
    console.log('start');
    if(err) {
        console.log('ERROR: connecting to Database. ' + err);
    }
    console.log('finish');

});

var router = express.Router();

router.get('/', function(req, res) {
    res.send("Hello World!");
});

//Ligo las funciones con el API
router.route('/users')
    .get(UserCtrl.findAllUsers)
    .post(UserCtrl.addUser)
    .delete(UserCtrl.deleteAllUsers);

router.route('/users/:name')
    .get(UserCtrl.findByName)
    .put(UserCtrl.updateUser)
    .delete(UserCtrl.deleteUser);

router.route('/transactions/:name')
    .get(transactionCtrl.findAllTransactionByUser)
    .put(transactionCtrl.updateTransaction);

router.route('/transactions')
    .post(transactionCtrl.addTransaction)
    .delete(transactionCtrl.deleteAllTransactions);



app.use(router);

//app.use('/api',users);

app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
});

