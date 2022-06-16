import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
    // your code here
    name: String,
    refno: Number,
    amount: Number
});

const Transaction = mongoose.model('Transaction', TransactionSchema);

export default Transaction;