const express=require("express")
const mongo=require("mongoose")
const app=express();
const cors=require("cors")
require("./mongo")
require("./model")
require("dotenv").config()
const db2=mongo.model("infoo")
const bodyParser=require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors())

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
  });



app.post("/getdata",(req,res)=>{


  var data= new db2();

  data.username=req.body.username
  data.email=req.body.email

  data.save().then(()=>{res.send({msg:"request has been listed!"})}).catch(()=>{console.log("error")})

})

app.listen(process.env.PORT || 5000,()=>{console.log("server is on")})

