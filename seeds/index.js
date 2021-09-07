const sequelize = require("../config/connection");
const seedCollection = require("./collectionData");
const seedNFT = require("./nftData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCollection();

  await seedNFT();

  process.exit(0);
};

seedAll();
