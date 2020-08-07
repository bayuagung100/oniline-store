var mysqli = require('mysql');

//local
var conn = mysqli.createConnection({
    // host: 'localhost',
    // user: 'root',
    // password: '',
    // database: 'api-online-store'
    host: 'sql12.freemysqlhosting.net',
    user: 'sql12359147',
    password: 'hrjcWVpL5n',
    database: 'sql12359147'
});


conn.connect(function (err) {
    if(err) throw err;
});

module.exports = conn;
