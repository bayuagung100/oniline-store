module.exports = function (app) {
  var url = require('./controller');
  var apiV1 = "/api/v1/";
  //url homenya
  app.route('/').get(url.index);

  app.route(apiV1+'city').get(url.city);

  app.route(apiV1+'province').get(url.province);

  app.route(apiV1+'subdistrict').get(url.subdistrict);

  app.route(apiV1+'sosmed').get(url.sosmed);

  app.route(apiV1+'sosmed').put(url.updatesosmed);

  app.route(apiV1+'infoweb').get(url.infoweb);

  app.route(apiV1+'infoweb').put(url.updateinfoweb);

  app.route(apiV1+'banklist').get(url.banklist);

  app.route(apiV1+'banklist').post(url.addbanklist);



  app.route(apiV1+'banklist/delete/:id').delete(url.deletebanklist);
  

  app.route(apiV1+'dt/banklist').get(url.dtbanklist);

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

};