import mongoose from "mongoose";

const RouteSchema = new mongoose.Schema({
    // your code here
    company: String,
    terminal: String,
    destination: String,
    schedule: String,
    price: Number,
});

const Route = mongoose.model('Route', RouteSchema);

export default Route;