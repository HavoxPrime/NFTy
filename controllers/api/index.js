const router = require("express").Router();

const collectionRoutes = require("./collection-routes.js");
const nftRoutes = require("./nft-routes");
const userRoutes = require("./user-routes");
//const userWorksRoutes = require("./userworks-routes");

router.use("/collection", collectionRoutes);
router.use("/nft", nftRoutes);
router.use("/user", userRoutes);
//router.use("/userworks", userWorksRoutes);

module.exports = router;
