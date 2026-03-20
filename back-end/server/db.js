const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.getConnection()
    .then(() => console.log("Conectado ao MySQL com sucesso!"))
    .catch(err => console.error("Erro ao conectar no banco:", err));

module.exports = connection;