const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Collection = require("./Collection");

class UserWorks extends Model {}

UserWorks.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_name: {
      type: DataTypes.STRING,
      references: {
        model: "User",
        key: "username",
      },
    },
    collection_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Collection",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "nft",
  }
);

module.exports = UserWorks;
