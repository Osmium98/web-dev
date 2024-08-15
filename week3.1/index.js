

const express = require("express");

const app = express();
const port=3000;
/*
app.get("/health-checkup", (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if ( username != "subham" || password != "pass") {
        res.status(400).json({
            msg: "somethings up with your input"
        })
        return;

    }
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({
            msg: "somethings up with your input"
        })

    }
    res.json({
        msg: "Your Kidney is Healthy"
    })

});

app.listen(port)
*/


function userMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != "subham" || password != "pass"){ 
        res.status(403).json({
            msg: "Incorrect inputs"
        })
    }else{
        next();
    }
}
function KidneyMiddleware(req,res,next){
    const kidneyId = req.query.kidneyId;

    if(kidneyId != 1 && kidneyId != 2){
        res.status(403).json({
            msg: "Incorrect inputs"
        })
    }else{
        next();
    }
}

app.get("/health-checkup",userMiddleware,KidneyMiddleware,(req,res)=>{
    res.send("Your kidney is healthy")
})

app.listen(port)