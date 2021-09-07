const router = require('express').Router();

//http://localhost:3001/
router.get('/', async (req,res) => {
res.send("HIT ME!")
});


module.exports = router;