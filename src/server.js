const mongoose = require('mongoose');
let connectionString = "mongodb+srv://23010101058:J6U9vWqWaX2tBRjf@clusterbyjd.nuavl.mongodb.net/walmart";

mongoose.connect(connectionString).then(()=>{
    const bodyParser = require('body-parser');
    const express = require('express');
    const cors = require('cors');
    const app = express();
    const prods = require('./prodSchema');
    const user = require('./userSchema');

    app.use(cors({
        origin: "http://localhost:3000"
    }));

    app.use(bodyParser.urlencoded());

    app.get("/user/:user",async (req,res)=>{
        let data = await user.findOne({username:req.params.user});
        console.log(data);
        if(data==null)
            res.send({status:"failed"});
        else
            res.send(data);
    });
    app.post("/user",async (req,res)=>{
        let {username,password} = req.body;
        console.log(req.body);
        
        let data = user({username:username, password:password,prod:[]});
        await data.save();
        res.send("saved data");
    });

    app.get("/user/:user/:product",async (req,res)=>{
        let porddata = await user.findOne({pord:req.params.product});
        let userdata = await user.findOne({username:req.params.user});
        console.log(proddata);
        
    });

    app.get("/product",async (req,res)=> {
        try {
            const product = await prods.find({tags: new RegExp(req.body.search,'i')});  // Use 'prods' to access the model
            res.send(JSON.stringify(product));
        } catch (err) {
            res.status(500).send("Error fetching products");
        }
    });

    app.get("/product/:name", async (req, res) => {
        const productName = req.params.name; // Get the product name from the URL parameter
        try {
            const product = await prods.findOne({ name: productName });
            if (product) {
                res.send(product);
            } else {
                res.status(404).send("Product not found");
            }
        } catch (err) {
            res.status(500).send("Error fetching product by name");
        }
    });

    app.post("/product", async (req,res)=>{
        const products = new prods ({
            ...req.body
        })
        await products.save();
        res.send(products);
    });
    // app.patch("/",(req,res)=>{

    // });
    app.delete("/product/:name", async (req, res) => {
        const productName = req.params.name; 
        try {
            const result = await prods.deleteOne({ name: productName });
            if (result.deletedCount > 0) {
                res.send(`Product with name ${productName} deleted successfully`);
            } else {
                res.status(404).send("Product not found");
            }
        } catch (err) {
            res.status(500).send("Error deleting product");
        }
    });

    app.listen(9999,()=>console.log("running on 9999"));

});
