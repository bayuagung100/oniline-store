exports.ok = function (values, res, status="200") {

    var data = {
        'status': status,
        'results': values
    };
    var api = {
        data: data
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.json(data);
    res.end();
};

exports.auth = function (session, values, res) {
    var data = {
        'status': 200,
        'sessions': session,
        'values': values
    };
    var api = {
        data: data
    }
    // res.writeHead(200, { 'Access-Control-Allow-Origin': '*', });
    res.json(api);
    res.end();
};
