var mysqli = require('mysql');

//local
var conn = mysqli.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'api-online-store'
});


conn.connect(function (err) {
    if(err) throw err;
});

module.exports = conn;
