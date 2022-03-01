const Pool = require("pg").Pool;    //created one object by which we can  connect our database.

const pool = new Pool({
    user: "postgres",
    password: "Dev@2608",
    host: "localhost",
    database: "pernstack",
    port: 5432
});

module.exports = pool;