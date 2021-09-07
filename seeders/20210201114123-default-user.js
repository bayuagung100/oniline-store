'use strict';
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
// const hash = bcrypt.hashSync("bayuagung123", salt);
// const cekHash = bcrypt.compareSync("bayuagung123", hash);
// console.log(hash)
// console.log(cekHash)
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [{
      firstname: 'Bayu',
      lastname: 'Agung',
      email: 'bayuagung100@gmail.com',
      password: bcrypt.hashSync("bayuagung123", salt),
      role_id: 0,
      // createdAt: new Date(),
      // updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
