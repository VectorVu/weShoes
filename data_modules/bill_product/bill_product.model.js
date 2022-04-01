const mongoose = require("mongoose");

const bill_product_Schema = new mongoose.Schema({
    billId: mongoose.Types.ObjectId,
    productId: mongoose.Types.ObjectId,
    numberOfProduct: Number,
}, {
    timestamps: true
})
const bill_productModel = mongoose.model('bill_product', bill_product_Schema);
module.exports = bill_productModel;