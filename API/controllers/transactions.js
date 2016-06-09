/**
 * Created by Juan on 6/8/2016.
 */
var Transaction  = mongoose.model('Transaction');

exports.findAllTransactionByUser = function(req, res) {
    Transaction.findOne({ 'user': req.params.name }, function (err, transactions) {
        if (err) res.send(500, err.message);
        console.log('%s.', transactions.name)
        res.status(200).jsonp(transactions);
    })
};

exports.updateTransaction = function(req, res) {
    Transaction.findAllTransactionByUser(req.params.name, function(err, transaction) {
        transaction.id =            req.body.id;
        transaction.user =          req.body.name;
        transaction.date =          req.body.date;
        transaction.savingMethod =  req.body.savingMethod;
        transaction.amount =        req.body.amount;
        transaction.active =        req.body.active;

        transaction.save(function(err) {
            if(err) return res.status(500).send(err.message);
            res.status(200).jsonp(transaction);
        });
    });
};

exports.addTransaction = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var transaction = new Transaction({
        id:             req.body.id,
        user:           req.body.user,
        date:           req.body.date,
        savingMethod:   req.body.savingMethod,
        amount:         req.body.amount,
        active:         req.body.active
    });

    transaction.save(function(err, user) {
        if(err) return res.status(500).send( err.message);
        res.status(200).jsonp(user);
    });
};

exports.deleteAllTransactions = function(req, res) {
    Transaction.remove(function(err, transactions) {
        if(err) res.send(500, err.message);

        console.log('DELETE /transaction')
        res.status(200).jsonp(transactions);
    });
};
exports.deleteAllUsers = function(req, res) {
    User.remove(function(err, transactions) {
        if(err) res.send(500, err.message);

        console.log('DELETE /users')
        res.status(200).jsonp(transactions);
    });
};
