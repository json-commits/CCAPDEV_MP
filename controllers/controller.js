import db from '../models/db.js';
import Route from "../models/RouteModel.js";
import Routes from "../routes/routes.js";

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
    getAdd: function(req, res) {
        // your code here
        console.log("getAdd was ran.")
        let company = req.query.CMP;
        let terminal = req.query.TML;
        let destination = req.query.DST;
        let schedule = req.query.SCHD;
        let price = req.query.PRC;
        let data = {company: company, terminal: terminal, destination: destination, schedule: schedule, price: price}

        db.insertOne(Route, data,function(){})
    },

    getDelete: function (req, res) {
        // your code here
        console.log("getDelete was ran.")
        let refno = Number(req.query.REFNO)
        let data = {refno: refno}
        db.deleteOne(Route, data, function (){})
    },


    getCompany(req, res) {
        console.log(`getCompany was ran looking for ${req.params.company}`)
        let r_company = req.params.company;
        db.findMany(Route, {company:r_company}, null, function(result){
            res.render("company", {company:r_company, routes: result.map(result => result.toJSON())})
        })
    },

    getAdmin(req, res){
        console.log(`getAdmin was ran.`)
        // if(user.admin != true){
        //     alert("You don't have access to this page!");
        // }
        db.findMany(Route, null, null, function(result){
            res.render("admin", {routes: result.map(result => result.toJSON())})
        })
    }
}

export default controller;