
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const { url } = require("inspector");


const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html")
});

app.post("/", function(req,res){
const firstName = req.body.fname;
const lastName = req.body.lname;
const email = req.body.email;

const data={
    members:[
        {
            email_adress:email,
            status: "subscribed",
            merge_field:{
                FNAME: firstName,
                LNAME: lastName
            }

        }
    ]
};
const jsonData = JSON.stringify(data);

    const url = "https://us17.api.mailchimp.com/3.0//lists/54e249b8cc";

    const options ={
        method: "POST",
        auth: "Prince:f5bd760ca7cffe5d78dee47486f71bda-us17"
    }
   const request= https.request(url,Options, function(responce){
        if(responce.statusCode ===200){
            res.send("Sucessfully subscribed!");
        }else{
            res.send("There is an error plese try again!");
        }
        responce.on("data", function(data){
            console.log(JSON.parse(data));
        })
})  
req.write(jsonData);
req.end();
})


app.listen(3000,function(){
    console.log("server id rinning perfectly on port 3000");
} );

// f5bd760ca7cffe5d78dee47486f71bda-us17

// 54e249b8cc