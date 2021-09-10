const User = require("./User");
const Collection = require("./Collection");
const NFT = require("./Nft");

Collection.hasMany(NFT, {
  foreignKey: "collection_id",
});

NFT.belongsTo(Collection, {
  foreignKey: "collection_id",
});


module.exports = { User, Collection, NFT };
