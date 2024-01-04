const express = require('express');
const router = express.Router();
//import middleware functions below
const loginController = require('../controllers/logincontroller');

/*---> AS A REMINDER, EVERYTHING HERE IS PREPENDED BY THE '/signup' ROUTE <---*/

//this function gets all users (purely for development and debugging)
router.post('/',
    loginController.login,
    (req, res) => {
        return res.status(200).json(res.locals.data);
    }
);

//export all the routes defined above to the server.js file where they are consolidated
module.exports = router;