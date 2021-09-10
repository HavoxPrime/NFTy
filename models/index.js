const User = require("./User");
const Collection = require("./Collection");
const NFT = require("./Nft");
const UserWorks = require("./UserWorks");

Collection.hasMany(NFT, {
  foreignKey: "collection_id",
});

NFT.belongsTo(Collection, {
  foreignKey: "collection_id",
});

UserWorks.belongsTo(User, {
  foreignKey: "user_name",
});

module.exports = { User, Collection, NFT };
