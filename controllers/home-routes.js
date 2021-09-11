const router = require("express").Router();
const { Collection, NFT } = require("../models");

//http://localhost:3001/

// Import the custom middleware
const withAuth = require("../utils/auth");

// GET homepage
router.get(
  "/",
  withAuth, //  WithAuth
  async (req, res) => {
    try {
      const dbCollectionData = await Collection.findAll({
        include: [
          {
            model: NFT,
            attributes: [
              "id",
              "title",
              "artist",
              "filename",
              "description",
              "collection_id",
            ],
          },
        ],
      });

      const collections = dbCollectionData.map((collection) =>
        collection.get({ plain: true })
      );
      res.render("marketpage", {
        collections,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
);

// GET login
router.get("/", async (req, res) => {
  try {
    const dbCollectionData = await Collection.findAll({
      include: [
        {
          model: NFT,
          attributes: [
            "id",
            "title",
            "artist",
            "filename",
            "description",
            "collection_id",
          ],
        },
      ],
    });

    const collections = dbCollectionData.map((collection) =>
      collection.get({ plain: true })
    );

    res.render("login", {
      collections,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//  GET ONE NFT
// router.get('/collection/:id', withAuth, async (req, res) => {
//   try {
//     const dbCollectionData = await Collection.findByPk(req.params.id, {
//       include: [
//         {
//           model: NFT,
//           attributes: [
//             'id',
//             'title',
//             'artist',
//             'filename',
//             'description',
//             'collection_id',
//           ]
//         }
//       ]
//     });
//     const collection = dbCollectionData.get({ plain: true });

//     res.json(collection)

//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// GET marketpage
router.get("/marketpage", withAuth, async (req, res) => {
  try {
    const dbCollectionData = await Collection.findAll({
      include: [
        {
          model: NFT,
          attributes: [
            "id",
            "title",
            "artist",
            "filename",
            "description",
            "collection_id",
          ],
        },
      ],
    });

    const collections = dbCollectionData.map((collection) =>
      collection.get({ plain: true })
    );
    res.render("marketpage", {
      collections,
      //   //  //  WHERE WE WILL PUT THE LOGGED IN // //
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET account
router.get("/account", withAuth, async (req, res) => {
  try {
    const dbCollectionData = await Collection.findAll({
      include: [
        {
          model: NFT,
          attributes: [
            "id",
            "title",
            "artist",
            "filename",
            "description",
            "collection_id",
          ],
        },
      ],
    });

    const collections = dbCollectionData.map((collection) =>
      collection.get({ plain: true })
    );
    res.render("account", {
      collections,
      //   //  //  WHERE WE WILL PUT THE LOGGED IN // //
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET cart
router.get("/cart", withAuth, async (req, res) => {
  try {
    const dbCollectionData = await Collection.findAll({
      include: [
        {
          model: NFT,
          attributes: [
            "id",
            "title",
            "artist",
            "filename",
            "description",
            "collection_id",
          ],
        },
      ],
    });

    const collections = dbCollectionData.map((collection) =>
      collection.get({ plain: true })
    );
    //
    res.render("cart", {
      collections,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET orders
router.get("/orders", withAuth, async (req, res) => {
  try {
    const dbCollectionData = await Collection.findAll({
      include: [
        {
          model: NFT,
          attributes: [
            "id",
            "title",
            "artist",
            "filename",
            "description",
            "collection_id",
          ],
        },
      ],
    });

    const collections = dbCollectionData.map((collection) =>
      collection.get({ plain: true })
    );
    res.render("orders", { collections });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//  //  Login //  //
router.get("/login", (req, res) => {
  res.render("login");
  if (req.session.loggedIn) {
    res.redirect("/api/nft");
    return;
  }
});

module.exports = router;
