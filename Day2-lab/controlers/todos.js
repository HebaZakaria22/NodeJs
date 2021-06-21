const { where } = require('sequelize/types')
const Todo = require('../models/todos')
const create = (data)=>{
    return Todo.create(data)
}
const findAll =()=>{
    return Todo.findAll()
}
const findById = (id)=>{
    return Todo.findOne ({where :{id} , include :'user'})
}
const editById =(id ,data)=>{
    return Todo.update(data ,{where :{id}})
}
const deleteById = (id)=>{
    return Todo.destroy({where :{id}})
}
module.exports ={
    create ,
    findAll , 
    findById ,
    editById , 
    deleteById
}