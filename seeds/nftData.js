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
  {
    title: "PhotoBenny",
    artist:"adrian",
    collection_id: 3,
    filename: "Benny.png",
    description: "Photo of My Dog Benny"
  },
  {
    title: "Baby B",
    artist:"adrian",
    collection_id: 3,
    filename: "babyb.png",
    description: "Photo of Benny as puppy"
  },
  {
    title: "Bennersons",
    artist:"adrian",
    collection_id: 3,
    filename: "Bennersons.png",
    description: "Photo of My Dog Benny"
  },
  {
    title: "Bennoodles",
    artist:"adrian",
    collection_id: 3,
    filename: "Bennoodles.png",
    description: "Benny curled"
  },
  {
    title: "Beniot",
    artist:"adrian",
    collection_id: 3,
    filename: "Beniot.png",
    description: "Benny sitting"
  },
  {
    title: "PhotoBenny",
    artist:"adrian",
    collection_id: 3,
    filename: "Benny.png",
    description: "Photo of My Dog Benny"
  },
  {
    title: "Avaitor",
    artist:"adrian",
    collection_id: 4,
    filename: "cog1.png",
    description: "Glasses and a cig"
  },
  {
    title: "Fire",
    artist:"adrian",
    collection_id: 4,
    filename: "cog2.png",
    description: "Passed Hero"
  },
  {
    title: "Stealth",
    artist:"adrian",
    collection_id: 4,
    filename: "cog3.png",
    description: "Sneaky Sneaky"
  },
  {
    title: "Summer",
    artist:"adrian",
    collection_id: 4,
    filename: "cog4.png",
    description: "Beach hat and glasses"
  },
  {
    title: "Thug",
    artist:"adrian",
    collection_id: 4,
    filename: "cog5.png",
    description: "Tough guy with shades"
  },
  {
    title: "Bandit",
    artist:"adrian",
    collection_id: 4,
    filename: "cog6.png",
    description: "A well educated bandit"
  },
  {
    title: "Regular Text on a Black Background",
    artist: "Pat",
    collection_id: 5,
    filename: "regular-text.jpg",
    description: "Just text on a black background",
  },
  {
    title: "EXPENSIVE ORANGE TEXT on a Black Background",
    artist: "Pat",
    collection_id: 5,
    filename: "expensive-text.jpg",
    description: "This is more expensive because NFTs",
  },
  {
    title: "Regular Owl",
    artist: "Pat",
    collection_id: 6,
    filename: "regular-owl.jpg",
    description: "Just a plain owl from the OWL collection",
  },
  {
    title: "Inverted Owl",
    artist: "Pat",
    collection_id: 6,
    filename: "invert-owl.jpg",
    description: "Inverted owl from the OWL collection",
  },
  {
    title: "Fried Owl",
    artist: "Pat",
    collection_id: 6,
    filename: "fried-owl.jpg",
    description: "The rarest of owls, the inverted owl, from the OWL collection",
  },
  {
    title: "Hip Guy",
    artist: "Pat",
    collection_id: 7,
    filename: "hip-guy.jpg",
    description: "Just a hip guy from the HIP GUY collection",
  },
  {
    title: "30 Degree Hip Guy",
    artist: "Pat",
    collection_id: 7,
    filename: "hip-guy2.jpg",
    description: "THE PREMIUM 30 DEGREE ROTATED HIP GUY. The pinnacle of the HIP GUY collection",
  },
];

const seedNFT = () => NFT.bulkCreate(nftData);

module.exports = seedNFT;
