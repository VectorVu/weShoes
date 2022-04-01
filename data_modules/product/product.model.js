const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    productCode: String,
    color: String,
    description: String,
    size: [],
    amount: Number,
    categoryId: mongoose.Types.ObjectId,
    imageUrl: String
}, {
    timestamps: true
})
const ProductModel = mongoose.model('Product', ProductSchema);
module.exports = ProductModel;
