const router = require('express').Router();
const { Collection, NFT } = require('../models');

//http://localhost:3001/

// Import the custom middleware
// const withAuth = require('../utils/auth');

 
router.get('/login', (req, res) => {
   //  NEED HANDLEBARS
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


module.exports = router;