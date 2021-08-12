const mysql = require('mysql');
const {
    promisify,
} = require('util');

const con = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB
});

const query = promisify(con.query.bind(con));

function runQuery(sql) {
    return query(sql);
}

module.exports = {
    runQuery,
};
