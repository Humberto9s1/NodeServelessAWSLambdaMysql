const mysql = require('mysql')
const connection  = mysql.createPool({
    host: "employeemodule.cx9jcjnv1yee.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "Sua Senha ",
    database: "nome da schema"
})

module.exports = connection