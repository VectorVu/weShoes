const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    userId: mongoose.Types.ObjectId,
    totalCosts: Number,
}, {
    timestamps: true
})
const cartModel = mongoose.model('Cart', CartSchema);
module.exports = cartModel;