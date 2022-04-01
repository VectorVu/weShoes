const mongoose = require("mongoose");

const BillSchema = new mongoose.Schema({
    userId: mongoose.Types.ObjectId,
    totalCosts: Number,
}, {
    timestamps: true
})
const billModel = mongoose.model('bill', BillSchema);
module.exports = billModel;