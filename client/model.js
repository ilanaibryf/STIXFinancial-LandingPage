const mongo=require("mongoose");

const infoo=mongo.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
   
})

module.exports=mongo.model("infoo",infoo);