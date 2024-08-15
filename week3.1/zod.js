const express = require("express");
const zod = require("zod");

const app = express();
const port = 5000;

const schema = zod.array(zod.number())

app.use(express.json())

app.post("/health-checkup", (req, res) => {
    const kidneys = req.body.kidneys;
    const responce = schema.safeParse(kidneys)
    if (!responce.success) {
        res.status(411).json({
            msg: "input is invalid"
        })
    } else {
        res.send({
            responce
        })
    }

    // const kidneyLength = kidneys.length;

    // res.send("you have "+ kidneyLength +" kidnys");
});

app.listen(port);