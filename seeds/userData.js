const { User } = require("../models");

const userData = [
  {
    username: "Joe",
    email:"J@gmail.com",
    password:"Joe123"
  },
  {
    username: "C-Jay",
    email:"CJ@gmail.com",
    password:"CJay123"
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
