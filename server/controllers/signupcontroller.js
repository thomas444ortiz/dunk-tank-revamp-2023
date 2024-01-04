const models = require('../models/userModels');
const assert = require('assert');
//create an object that will store the middleware functions as methods, so we can export later
const signupController = {};

//function to get all users
signupController.getAllUsers = (req, res, next) => {
    models.User.find()
    .then((data)=> {
        res.locals.data = data;
        return next();
    })
    .catch(err => next(err));
}

//create a function to create a new user
signupController.createUser = (req, res, next) => {
    console.log(req.body);

    models.User.create({username: `${req.body.username}`, password: `${req.body.password}`})
    .then((data) => {
        console.log('inserted')
        res.locals.data = data;
        return next();
    })
    .catch(err => {
        console.log(err);
        return next(err)
    })
}

//function to update user info
signupController.updateUser = (req, res, next) => {
    res.locals.data = "placeholder for data, update existing user worked"
    next();
}

//function to delete a user
signupController.deleteUser = (req, res, next) => {
    res.locals.data = "placeholder for data, delete user worked"
    next();
}

//export our middleware functions
module.exports = signupController;