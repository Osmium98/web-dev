const express = require('express');
const { createTodo } = require('./types');
const { todo } = require('./db');
const cors =require("cors")
const app = express()

app.use(express.json())
app.use(cors())


app.post("/todo", async (req, res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if (!parsePayload.success) {
        res.status(403).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }

    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "todo created"
    })
})
app.get("/todo",async (req, res) => {
//    const todos = await todo.find({});
   res.json({
    todos:[]
   })

})
app.put("/completed",async (req, res) => {
    const updatePayload = req.body;
    const parsePayload = updatePayload.safeParse(updatePayload)

    if (!parsePayload.success) {
        res.status(403).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    await todo.update({
        _id:updatePayload.id
    },{
           completed:true 
        
    })
    res.json({
        msg:"Todo marked as completed"
    })
})

app.listen(3000);
