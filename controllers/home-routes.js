const router = require("express").Router();
const { Collection, NFT } = require("../models");

//http://localhost:3001/

// Import the custom middleware
const withAuth = require("../utils/auth");

  //  GET ALL NFTS for homepage

  router.get('/', async (req,res) => {
    try{
      let nfts = await NFT.findAll({
        attributes: ["id","title","artist","filename","description"],
        include: [
            {
                model: Collection,
                attributes: ["id","name"],
            },
        ],
    });
    
      res.render('menu', {
        nfts
      })

    } catch (err){
      console.log(err)
      res.status(500).json(err);
    }
  })

  //  IF they click the collections link, get collections to cards
    router.get('/collections', async (req,res) => {
      try {
          const dbCollectionData = await Collection.findAll({
            include: [
              {
                model: NFT,
                attributes: ['id', 'title','artist','filename','description','collection_id'],
              },
            ],
          });

          const collections = dbCollectionData.map((collection) =>
            collection.get({ plain: true })
          );
          res.render('menu', {collections});

        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      })

  //  If user clicks cart, go to cart
  router.get('/cart', async (req,res) => {
    res.render('cart')
  })

    //  Have cart add to user collections? 
  router.post('/cart', async (req,res) => {

  })


//  //  Login //  //
router.get("/login", (req, res) => {
  res.render("login");
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
});


module.exports = router;
