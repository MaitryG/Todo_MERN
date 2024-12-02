
const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types");
const{ todos } = require("./db");

app.use(express.json());
app.post("/signin", function(req, res) {

})

app.post("/signup", function(req, res) {

})

app.get("/alltodos", async function(req, res)  {
    const response = await todos.find({})
    res.json({
        todos: response
    })
})

app.post("/addtodo", async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success){
        res.status(411).json({
            message: "You sent the wrong inputs",
        })
        return;
    }

    //put it in mongodb
    await todos.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    })
    res.json({
        msg: "Todo created",
    })

})

app.put("/completed", async function(req, res) {
    const updatedPayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatedPayload);
    if (!parsedPayload.success){
        req.status(411).json({
            message: "You sent the wrong inputs",
        })
        return;
    }

    await todos.updateOne({
        _id: req.body.id,

    }, {
        completed: true,
    })

    res.json({
        msg: "Your todo was marked as completed"
    })
})

app.listen(3000);

