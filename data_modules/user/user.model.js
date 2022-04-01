const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    userName: String,
    email: String,
    phoneNumber: String,
    address: String,
    imageUrl: String,
}, {
    timestamps: true
})
const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;
