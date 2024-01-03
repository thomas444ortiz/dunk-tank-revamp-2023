const express = require('express'); //import express
const app = express();
const path = require('path');

//serve everything from the build folder
// console.log(path.join(__dirname, '../build'));
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.listen(3000); //listens on port 3000 -> http://localhost:3000/  