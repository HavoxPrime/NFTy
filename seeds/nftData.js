const { NFT } = require("../models");

const nftData = [
  {
    title: "white space",
    artist: "Billy",
    collection_id: 1,
    filename: "white_space.png",
    description: "white picture",
  },
  {
    title: "black space",
    artist: "Billy",
    collection_id: 1,
    filename: "black_space.png",
    description: "black picture",
  },
  {
    title: "Blue Space",
    artist: "Bob",
    collection_id: 1,
    filename: "BlueSpace.png",
    description: "Blue Picture",
  },
  {
    title: "Radical Space",
    artist: "Chad",
    collection_id: 2,
    filename: "Rad.png",
    description: "A Radical picture dude!",
  },
  {
    title: "Political Space",
    artist: "Jimmie",
    collection_id: 2,
    filename: "pol.png",
    description: "A Picture Divided",
  },
  {
    title: "Alone Space",
    artist: "Sara",
    collection_id: 2,
    filename: "alone.png",
    description: "A Picture",
  },
];

const seedNFT = () => NFT.bulkCreate(nftData);

module.exports = seedNFT;
