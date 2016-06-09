/**
 * Created by Juan on 6/7/2016.
 */

var User  = mongoose.model('User');

exports.findAllUsers = function(req, res) {
    User.find(function(err, users) {
        if(err) res.send(500, err.message);

        console.log('GET /users')
        res.status(200).jsonp(users);
    });
};

exports.findByName = function(req, res) {

    User.findOne({ 'name': req.params.name }, function (err, users) {
        if (err) res.send(500, err.message);
        console.log('%s.', users.name)
        res.status(200).jsonp(users);
    })
};

//DELETE All
exports.deleteAllUsers = function(req, res) {
    User.remove(function(err, users) {
        if(err) res.send(500, err.message);

        console.log('DELETE /users')
        res.status(200).jsonp(users);
    });
};

exports.addUser = function(req, res) {
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

exports.deleteUser = function(req, res) {
    User.findByName(req.params.name, function(err, user) {
        user.remove(function(err) {
            if(err) return res.status(500).send(err.message);
            res.status(200).send();
        })
    });
};
