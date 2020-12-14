var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    reppass : String,
    dateof : String,
    gender : String,
    address : String,
    mobnum: String
}
);
module.exports = mongoose.model('user', UserSchema);