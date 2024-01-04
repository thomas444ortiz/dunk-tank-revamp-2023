const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://thomasortiz:codesmith@cluster0.zjkb3rw.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI)
.then(() => console.log('Connected to Mongo DB.'))
.catch(err => console.log(err));

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

const User = mongoose.model('User',userSchema);


module.exports = {
    User,
  };