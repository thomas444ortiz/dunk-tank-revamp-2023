const express = require('express');
const router = express.Router();
//import middleware functions below
const signupController = require('../controllers/signupcontroller');

/*---> AS A REMINDER, EVERYTHING HERE IS PREPENDED BY THE '/signup' ROUTE <---*/

//this function gets all users (purely for development and debugging)
router.get('/',
    signupController.getAllUsers,
    (req, res) => {
        res.status(200).send(res.locals.data);
    }
);

//this function creates a new user
router.post('/',
    signupController.createUser,
    (req, res) => {
        res.status(200).send(res.locals.data);
    }
);

//this function edits an existing users information
router.patch('/',
    signupController.updateUser,
    (req, res) => {
        res.status(200).send(res.locals.data);
    }
);

//this function deletes a user
router.delete('/',
    signupController.deleteUser,
    (req, res) => {
        res.status(200).send(res.locals.data);
    }
);


//export all the routes defined above to the server.js file where they are consolidated
module.exports = router;