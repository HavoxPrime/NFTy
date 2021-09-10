const sequelize = require("../config/connection");
const seedCollection = require("./collectionData");
const seedNFT = require("./nftData");
const seedUser = require("./userData");


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCollection();

  await seedNFT();

  await seedUser();

  process.exit(0);
};

seedAll();
