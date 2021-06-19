const router = require('express').Router();
const Users = require('../../models/users.model');
const bcrypt = require('bcrypt');
const config = require('config');
const jwtSecret = config.get('jwt_secret');
const JWT = require('jsonwebtoken');

// @route   POST api/users
// @desc    Create New User
// @access  Public
router.post('/', (req, res) => {
  const {email, password} = req.body;

  Users.findOne({ email }).then(user => {
    if (!user) res.status(400).send({'msg': 'user doesn"t exist!'});
    

    bcrypt.compare(password, user.password).then(isMatched => {
      if (!isMatched) return res.status(400).send({'msg': 'password is incorrect!'})
    })

    JWT.sign(
      {id: user._id},
      jwtSecret,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.status(200).send({
          token,
          _id: user._id,
          name: user.name,
          email: user.email,
        });
      }
    );


  })
})

module.exports = router;