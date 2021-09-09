const router = require('express').Router();
const { NFT, User, Collection} = require("../../models");

    //  3001/api/nft

    //  GET ALL
router.get('/', (req,res)=> {
    NFT.findAll({
        attributes: ["id","title","artist","filename","description"],
        include: [
            {
                model: Collection,
                attributes: ["id","name"],
            },
        ],
    })

    .then((nftData) => res.json(nftData))

    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    })
});

    //  GET by id
router.get('/:id',(req,res)=> {
    NFT.findOne({
        where: {
            id:req.params.id,
        },
    attributes:["id","title","artist","filename","description"],
    include: [
      {
            model: Collection,
            attributes: ["id","name"],
      },
    ],
  })

    .then((nftData)=> {
        if(!nftData){
            res.status(404).json({message: "No NFTs found with this id"});
            return;
        }
        res.json(nftData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    })
});


    //  Create new
router.post('/', (req,res)=> {
    NFT.create(req.body)
        .then((nft) => {
            //  If no collection tags respond
            res.status(200).json(nft);    
        })
        .then((collectionIds) => res.status(200).json(collectionIds))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        })
})


    //  Delete NFT by ID
router.delete('/:id',(req,res) => {
    NFT.destroy({
        where: {
            id:req.params.id,
        },
    })
    .then((nftData) => {
        if(!nftData){
            res.status(404).json({message: "No NFTs found with this id"});
            return;
        }
        res.json(nftData);
    })
    .catch((err)=> {
        console.log(err);
        res.status(500).json(err);
    })
})


module.exports = router;