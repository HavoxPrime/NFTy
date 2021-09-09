const router = require('express').Router();
const { NFT, Collection} = require("../../models");

    // GET all collections
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
    res.json(collections);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

    //  GET collection by ID

router.get('/:id',
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

    res.json(collection)

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


module.exports = router;