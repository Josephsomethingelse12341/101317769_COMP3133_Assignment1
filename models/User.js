const {model, Schema} = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        primary: true,
    },
    email:{
        type: String,
        unique: true,
    },
    password:{
        type: String,
    }
});

const user = model('User', UserSchema)
module.exports = user