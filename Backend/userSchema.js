const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: String,
    password: String
});

const UserModel = mongoose.model("users", userSchema);

module.exports = { UserModel };