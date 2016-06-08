/**
 * Created by Juan on 6/7/2016.
 */
//File: controllers/users.js
var mongoose = require('mongoose');
var User  = mongoose.model('User');

//GET - Return all users in the DB
exports.findAllUsers = function(req, res) {
    User.find(function(err, users) {
        if(err) res.send(500, err.message);

        console.log('GET /users')
        res.status(200).jsonp(users);
    });
};

//GET - Return a TVShow with specified ID
exports.findByName = function(req, res) {
    User.findByName(req.params.name, function(err, user) {
        if(err) return res.send(500, err.message);

        console.log('GET /user/' + req.params.id);
        res.status(200).jsonp(user);
    });
};

//POST - Insert a new TVShow in the DB
exports.assUser = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var user = new User({
        name:         req.body.name,
        password:     req.body.password,
        email:        req.body.email,
        debit:        req.body.debit
    });

    user.save(function(err, user) {
        if(err) return res.status(500).send( err.message);
        res.status(200).jsonp(user);
    });
};

//PUT - Update a register already exists
exports.updateUser = function(req, res) {
    User.findByName(req.params.name, function(err, user) {
        user.name =         req.body.name;
        user.password =     req.body.password;
        user.email =        req.body.email;
        user.debit =        req.body.debit;

        user.save(function(err) {
            if(err) return res.status(500).send(err.message);
            res.status(200).jsonp(user);
        });
    });
};