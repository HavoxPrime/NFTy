const router = require('express').Router();
const { Collection, Nft, User } = require('../models')

//http://localhost:3001/

// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all NFTS for homepage
router.get('/', async (req, res) => {
  try {
   const dbNftData = await Nft.findAll({
        attributes: ["id","title","artist","fileName","description"],
        include: [
            {
                model: Collection,
                attributes: ["id","name"],
            },
        ],
    })
    const nfts = dbNftData.map((nft) =>
    nft.get({plain:true})
    );

    res.render('homepage', {
        nfts,
        loggedIn:req.session.loggedIn,
    });''

} catch (err) {
      console.log(err);
      res.status(500).json(err);
};

// GET one NFT for Gallery? Shop?
router.get('/nft/:id', withAuth, async (req, res) => {
  try {
    const dbNftData = await Nft.findByPk(req.params.id, {
      include: [
        {
          model: Collection,
          attributes: [
            'id',
            'name',
          ],
        },
      ],
    });

    const nfts = dbNftData.get({ plain: true });
            //  //  //  //  NEED HANDLEBARS //  //  //  //  //  
    res.render('gallery', { 
        nfts, 
        loggedIn: req.session.loggedIn 
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one Collection
// Use the custom middleware before allowing the user to access the painting
router.get('/collection/:id', withAuth, async (req, res) => {
  try {
    const dbCollectionData = await Collection.findByPk(req.params.id);

    const collection = dbCollectionData.get({ plain: true });
            //  //  //  //  NEED HANDLEBARS //  //  //  //  //  
    res.render('painting', { collection, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;