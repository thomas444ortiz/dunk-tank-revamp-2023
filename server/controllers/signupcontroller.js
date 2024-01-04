const models = require('../models/userModels');

//create an object that will store the middleware functions as methods, so we can export later
const signupController = {};

//function to get all users
signupController.getAllUsers = (req, res, next) => {
    res.locals.data = "placeholder for data, get all users worked"
    next();
}

//create a function to create a new user
signupController.createUser = (req, res, next) => {
    res.locals.data = 'hardcoded nodemon'

    // console.log(models.User.insertOne);

    // models.User.insertOne({username: req.body.username, password: req.body.password})
    // .then((data)=> {
    //     console.log(data);
    //     return next();
    // })
    // .catch(err => next(err));
    next();
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