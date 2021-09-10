const router = require("express").Router();

const { NFT, User, Collection } = require("../../models");

router.get("/:artist", (req, res) => {
  NFT.findOne({
    where: {
      artist: req.params.artist,
    },
    attributes: ["id", "title", "filename", "description"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
      {
        model: Collection,
        attributes: ["id"],
      },
    ],
  })

    .then((nftData) => {
      if (!nftData) {
        res.status(404).json({ message: "No NFTs found with this artist" });
        return;
      }
      res.json(nftData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
