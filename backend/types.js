const zod = require("zod");
const createTodo = zod.object({
    title: zod.string().max(30),
    description: zod.string(),
})

const updateTodo = zod.object({
    id: zod.string(),
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo,
}
/*
    {
        title: string, 
        description: string,
    },
    {
        id: string,
    }
*/