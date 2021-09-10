const { Collection } = require("../models");

const collectiondata = [
  {
    name: "avgJoe",
  },
  {
    name: "crazyJoe",
  },
  {
    name: "Benny",
  },
  {
    name: "HeadsUp"
  },
  {
    name: "TEXT"
  },
  {
    name: "OWL"
  },
  {
    name: "HIP GUY"
  },
];

const seedCollection = () => Collection.bulkCreate(collectiondata);

module.exports = seedCollection;
