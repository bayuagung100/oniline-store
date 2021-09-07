module.exports = function (app, io) {
  // console.log("io", io)
  // console.log("app", app)
  var soc = require('./controllerSocket');
  io.on('connection', function (socket) {
    console.log('New client connected!');
    // soc.googleCalendar(soc.googleCalendar(socket))
  })

  var url = require('./controller');
  var apiV1 = "/api/v1/";
  //url homenya
  app.route('/').get(url.index);

  //admin api
  app.route(apiV1 + 'city').get(url.city);
  app.route(apiV1 + 'province').get(url.province);
  app.route(apiV1 + 'subdistrict').get(url.subdistrict);
  app.route(apiV1 + 'categorylist').get(url.categorylist);
  app.route(apiV1 + 'colorlist').get(url.colorlist);
  app.route(apiV1 + 'sizelist').get(url.sizelist);

  //setting
  app.route(apiV1 + 'sosmed').get(url.sosmed);
  app.route(apiV1 + 'sosmed').put(url.updatesosmed);
  app.route(apiV1 + 'infoweb').get(url.infoweb);
  app.route(apiV1 + 'infoweb').put(url.updateinfoweb);
  app.route(apiV1 + 'banklist').get(url.banklist);
  app.route(apiV1 + 'banklist').post(url.addbanklist);
  app.route(apiV1 + 'banklist/:id').get(url.banklistbyid);
  app.route(apiV1 + 'banklist').put(url.updatebanklist);
  app.route(apiV1 + 'banklist/:id').delete(url.deletebanklist);
  //end setting

  //member
  app.route(apiV1 + 'memberlist/:id').get(url.memberlistbyid);
  //end member

  //message
  app.route(apiV1 + 'messagelist/:id').get(url.messagelistbyid);
  //end message

  //online-store
  app.route(apiV1 + 'produk').post(url.addproduk);
  app.route(apiV1 + 'produk/:id').get(url.produkbyid);
  app.route(apiV1 + 'produk').put(url.updateproduk);
  app.route(apiV1 + 'slide').put(url.updateslide);
  app.route(apiV1 + 'produk/:id').delete(url.deleteproduk);
  //end online-store


  //datatables
  app.route(apiV1 + 'dt/produk').get(url.dtproduk);
  app.route(apiV1 + 'dt/banklist').get(url.dtbanklist);
  app.route(apiV1 + 'dt/memberlist').get(url.dtmemberlist);
  app.route(apiV1 + 'dt/messagelist').get(url.dtmessagelist);
  //end datatables

  //end admin api


  //store api
  app.route(apiV1 + 'home/slideshow').get(url.homeslide);
  app.route(apiV1 + 'home/isotope').get(url.homeisotope);
  app.route(apiV1 + 'home/allproduk').get(url.homeallproduk);
  //end store api


  // app.route(apiV1+'users/:id').get(url.userbyid);

  // app.route(apiV1+'auth').post(url.auth);

  // app.route(apiV1+'upload').post(url.upload);

  // //url create user
  // app.route('/user').post(url.createuser);

  // // //url update user
  // app.route('/user').put(url.updateuser);

  // // //url delete user
  // app.route('/user').delete(url.deleteuser);

  // app.route(apiV1+'genre').get(url.genres);

  // app.route(apiV1+'producer').get(url.producers);

  // app.route(apiV1+'season').get(url.seasons);

  // app.route(apiV1+'type').get(url.types);



  var apiV2 = "/api/v2/";
  var User = require('./sequelize/User');
  app.get('/test', function (io) {
    console.log("io.socket", io.socket)
  })

  // app.route(apiV2+'users').post(User.create);
  // app.route(apiV2+'users').get(User.findAll);
  // app.route(apiV2+'users/:id').get(User.findOne);
  app.route(apiV2+'auth').post(User.auth);

  app.route(apiV2 + 'dt/userlist').get(User.DtUser);
};