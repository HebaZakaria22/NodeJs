const express =require('express')
const todos = require('../controlers/todos')

const router = express.Router()

router.post('/' , (req , res)=>{
    const {body} = req;
    todos.create(body)
    res.status(204).end()
})
router.get('/' , (req , res)=>{
    const allTodos = await todos.findAll()
    res.json(allTodos)
})
router.get('/:id' ,async (req , res)=>{
    const {id} = req.params
    const todo =await todos.findById(id)
    res.json(todo)
    if(!todo){
        res.status(404).end()
        return
    }
})
router.patch('/:id' ,async (req , res)=>{
    const {body , params:{id}} = req
    await todos.editById(id,body)
    res.status.end()
})
router.delete('/:id' , (req , res)=>{
    const {id} = req.params;
    await todos.deleteById(id)
    res.status.end()
})

module.exports =router
