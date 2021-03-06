const express = require('express');
const app = express();

app.use(express.json())

app.get('/',(req , res)=>{
    res.send('hello')
})
const todos =[];

app.post('/todos' , (req , res)=>{
    todos.push(req.body)
    res.status(204).end()
})
app.get('/todos',(req , res)=>{
    res.json(todos)
})

app.get('/todos/:id', (req  , res)=>{
    const { id } = req.params
    const todo = todos.find((todo)=> +todo.id === +id)
    if(!todo){
        res.status(404).end()
        return
    }
    res.json(todo)
})

app.listen(3000 ,()=>{
    console.log(`server is up and running on:http://localhost:${3000}`)
})