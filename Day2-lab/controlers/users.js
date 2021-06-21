const { where } = require('sequelize/types')
const User = require('../models/users')
const create = (data)=>{
    return User.create(data)
}
const findAll =()=>{
    return User.findAll()
}
const findById = (id)=>{
    return User.findOne ({where :{id}})
}
const editById =(id ,data)=>{
    return User.update(data ,{where :{id}})
}
const deleteById = (id)=>{
    return User.destroy({where :{id}})
}
module.exports ={
    create ,
    findAll , 
    findById ,
    editById , 
    deleteById
}