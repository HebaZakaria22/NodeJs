const {sequelize} = require('sequelize')

var config = {
    user: '...',
    password: '...',
    server: '192.168.1.101',
    driver: 'tedious',
    database: 'MYDB',
    options: {
        instanceName: 'sql'
    }
};
const sequelize = new sequlize(config)

module.exports = sequelize