const models = require('../models/userModels');
const assert = require('assert');
//create an object that will store the middleware functions as methods, so we can export later
const loginController = {};



loginController.login = (req, res, next) =>{
    if(req.body.username === '' || req.body.password === '') return next('username or password not provided');
    models.User.findOne({username: req.body.username, password: req.body.password})
    .then((data)=> {
        res.locals.data = data;
        return next();
    })
    .catch(err => next(err))
}

//export our middleware functions
module.exports = loginController;