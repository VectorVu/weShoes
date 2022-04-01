const mongoose = require("mongoose");

const cart_product_Schema = new mongoose.Schema({
    cartId: mongoose.Types.ObjectId,
    productId: mongoose.Types.ObjectId,
    numberOfProduct: Number,
}, {
    timestamps: true
})
const cart_productModel = mongoose.model('Cart_Product', cart_product_Schema);
module.exports = cart_productModel;