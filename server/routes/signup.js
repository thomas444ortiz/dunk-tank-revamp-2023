const express = require('express');
const router = express.Router();
//import middleware functions below
const signupController = require('../controllers/signupcontroller');

/*---> AS A REMINDER, EVERYTHING HERE IS PREPENDED BY THE '/signup' ROUTE <---*/

//this function gets all users (purely for development and debugging)
router.get('/',
    signupController.getAllUsers,
    (req, res) => {
        // console.log(res.locals.data);
        return res.status(200).json(res.locals.data);
    }
);

//this function creates a new user
router.post('/',
    signupController.createUser,
    (req, res) => {
        return res.status(200).json(res.locals.data);
    }
);

//this function edits an existing users information
router.patch('/',
    signupController.updateUser,
    (req, res) => {
        // console.log(res.locals.data);
        return res.status(200).json(res.locals.data);
    }
);

//this function deletes a user
router.delete('/',
    signupController.deleteUser,
    (req, res) => {
        // console.log(res.locals.data);
        return res.status(200).json(res.locals.data);
    }
);

//export all the routes defined above to the server.js file where they are consolidated
module.exports = router;