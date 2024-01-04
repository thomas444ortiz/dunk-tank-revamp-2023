const express = require('express'); //import express
const app = express();
const path = require('path');

//import our routes here
const signupRouter = require('./routes/signup');
const loginRouter = require('./routes/login');

/*---> EVERYTHING BELOW HERE TAKES IN REQUESTS FROM THE SERVER, DOES SOMETHING, AND RESPONDS <---*/
app.use(express.json()); //parses all json requests automatically
app.use(express.urlencoded()); //parses incoming requests with URL-encoded payloads


//serve everything from the build folder
app.use('/build', express.static(path.join(__dirname, '../build')));
//serve index.html to any get request on the path '/'
app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

//define our signup route handler. all logic can be found in the signup.js file in the routes folder
app.use('/signup', signupRouter);
app.use('/login', loginRouter);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

//define global error handler
app.use((err, req, res, next) => {
    console.log(err);
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

app.listen(3000);