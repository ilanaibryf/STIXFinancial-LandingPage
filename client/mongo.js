const mongo=require("mongoose")

mongo.Promise=global.Promise;  
mongo.connect("mongodb+srv://sanan:sanansanan@cluster0.0uxie.mongodb.net/app?retryWrites=true&w=majority",{ useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true }).then(()=>{console.log("DataBase is Connected")}).catch(()=>{
    console.log("Database is not connected")
})   