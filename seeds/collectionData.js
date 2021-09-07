const { Collection } = require("../models");

const collectiondata = [
  {
    name: "avgJoe",
  },
  {
    name: "crazyJoe",
  },
];

const seedCollection = () => Collection.bulkCreate(collectiondata);

module.exports = seedCollection;
