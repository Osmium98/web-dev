const express = require("express");

const app = express()
const port = 3002

app.use(express.json());

const users=[{
    name: "john",
    kidneys:[{
        healthy: false
    },{
        healthy: true
    }
]
}]

app.get("/",(req,res)=>{
    const johnKidney =users[0].kidneys;
    const numberOfKidneys =johnKidney.length;
    let numberOfHealthyKidneys = 0;
    for(let i=0;i<numberOfKidneys;i++){
        if(johnKidney[i].healthy){
            numberOfHealthyKidneys++;
        }

    }
    let numberOfUnhealthyKidneys = numberOfKidneys-numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
    // console.log(johnKidney)

})


app.post("/",(req,res)=>{
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done"
    })    
})


app.put("/",(req,res)=>{
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg:"Done"
    });
})

app.delete("/",(req,res)=>{
    const newkidneys = [];
    if(isThereAnyAtleastOneUnhealthyKidney()){
        for(let i=0;i<users[0].kidneys.length;i++){
            if(users[0].kidneys[i].healthy){
                newkidneys.push({
                    healthy:true
                })
            }
        }
        users[0].kidneys = newkidneys;
        res.json({
            msg:"done"
        })
    }else{
        res.status(411).json({
            msg: "you have no bad kidney"
        })
    }
    
})


function isThereAnyAtleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney;
}

app.listen(port)