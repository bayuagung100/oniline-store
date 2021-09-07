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
exports.isotope = function (filters, layout, res, status="200") {

    var data = {
        'status': status,
        'filters': filters,
        'layout': layout
    };
    res.header("Access-Control-Allow-Origin", "*");
    res.json(data);
    res.end();
};

exports.produk = function (message, res, status="200") {

    var data = {
        'status': status,
        'message': message
    };

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


exports.datatables = function (values, res) {

    var data = {
        'data': values
    };
    res.header("Access-Control-Allow-Origin", "*");
    res.json(data);
    res.end();
};

exports.optionList = function (values, res) {

    var data = {
        'results': values
    };
    res.header("Access-Control-Allow-Origin", "*");
    res.json(data);
    res.end();
};