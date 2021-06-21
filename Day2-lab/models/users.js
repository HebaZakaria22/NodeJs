const {DataTypes} = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define('users' , {
    username: {
        type: DataTypes.STRING,
        allowNull :false
    }
})
User.sync({});

module.exports = User