const router = require('express').Router();

const Items = require('../../models/items.model');

const auth = require('../../middlewares/auth');

// @route   GET api/items
// @desc    Create A GET
// @access  Public
router.get('/', (req, res) => {
  console.log(req.user);
  Items.find({})
  .sort({ date: 1 })
  .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create A POST
// @access  Public
router.post('/add', auth, (req, res) => {
  console.log(req.user);
  const newItem = new Items({title: req.body.title});
  newItem.save().then(items => res.json(items)).catch(err => res.json(err));
});

// @route   DELETE api/items
// @desc    Create A DELETE
// @access  Public
router.delete('/:id', auth, (req, res) => {
  Items.findById(req.params.id).then(item => {
    item.remove()
    .then(() => res.json({success: true}))
    .catch(err => res.json({success: false}))
  })
})

module.exports = router;