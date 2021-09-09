const router = require('express').Router();
const { Collection, NFT } = require('../models');

//http://localhost:3001/

// Import the custom middleware
// const withAuth = require('../utils/auth');

// GET all NFTS for homepage
router.get('/', async (req, res) => {
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
//  //  //  //  NEED HANDLEBARS //  //  //  //  //
    //res.json({message: 'HIT!'}) // temp message
     res.render('menu', {
       collections,
    //   //  //  WHERE WE WILL PUT THE LOGGED IN // //
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

  //  GET ONE NFT
router.get('/collection/:id',
//  withAuth, //  // comment this back in when auth is setup
 async (req, res) => {

  try {
    const dbCollectionData = await Collection.findByPk(req.params.id, {
      include: [
        {
          model: NFT,
          attributes: [
            'id',
            'title',
            'artist',
            'filename',
            'description',
            'collection_id',
          ]
        }
      ]
    });
    const collection = dbCollectionData.get({ plain: true });

    //  //  NEED HANDLEBARS
    // res.render('collection', { collection, loggedIn: req.session.loggedIn });

    res.json(collection)

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


//  //  Login //  //  
router.get('/login', (req, res) => {
  //  //  NEED HANDLEBARS
  // if (req.session.loggedIn) {
  //   res.redirect('/');
  //   return;
  // }

  // res.render('login');
});


module.exports = router;