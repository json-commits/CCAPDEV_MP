import db from '../models/db.js';
import Transaction from '../models/TransactionModel.js';
import Route from "../models/RouteModel.js";

const controller = {

    
    getFavicon: function (req, res) {
        res.status(204);
    },

    getIndex: function(req, res) {
        // your code here
        console.log("getIndex was ran.")
        // db.findMany(Transaction, null, null, function (result){
        //     if (result == null){
        //         res.render("index")
        //     }
        //     else{
        //         res.render("index", {transactions: result.map(result => result.toJSON())})
        //     }
        // })
        //     res.sendFile("C:\\Users\\json\\Documents\\JetBrains\\WebstormProjects\\CCAPDEV_MP\\views\\index.html");
        res.render("index", {user: true})
    },

    // getCheckRefNo: function(req, res) {
    //     // your code here
    //     console.log("getCheckRefNo was ran.")
    //     db.findOne(Transaction, {refno: req.query.REFNO}, null, function (result){
    //         res.send(result)
    //     })
    // },
    //
    // getAdd: function(req, res) {
    //     // your code here
    //     console.log("getAdd was ran.")
    //     let name = req.query.NAME
    //     let refno = req.query.REFNO
    //     let amount = req.query.AMOUNT
    //     let data = {name: name, refno: refno, amount: amount}
    //
    //     db.insertOne(Transaction, data,function(){
    //             res.render('partials/card', data, function(err, html){
    //                 res.send(html);
    //         })
    //     })
    // },
    //
    // getDelete: function (req, res) {
    //     // your code here
    //     console.log("getDelete was ran.")
    //     let refno = Number(req.query.REFNO)
    //     let data = {refno: refno}
    //     db.deleteOne(Transaction, data, function (){})
    // },

    getCompany(req, res) {
        console.log(`getCompany was ran on ${req.params.company}`)
        let r_company = req.params.company;
        db.findMany(Route, {company:r_company}, null, function(result){
            console.log(result)
            res.render("company", {company:r_company, routes: result.map(result => result.toJSON())})
        })
    }
}

export default controller;