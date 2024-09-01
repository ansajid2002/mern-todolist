const { Pool } = require('pg');

const pool = new Pool ({
    user: "postgres",
    host: "localhost" ,
    port: 5432,
    database:"merntodo",
    password:"1234",
})

module.exports = pool