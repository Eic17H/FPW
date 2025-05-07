const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'cineva',
    password: 'iloSona',
    port: 5432,
})

module.exports = pool;