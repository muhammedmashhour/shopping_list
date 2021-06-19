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
  const {name, email, password} = req.body;

  Users.findOne({ email }).then(user => {
    if (user) res.status(400).json({'msg': 'email is already exists!'});
    const newUser = new Users({
      name,
      email,
      password
    });
    bcrypt.hash(password, 10).then(hashedPassword => {
      newUser.password = hashedPassword;
      newUser.save().then(result => {
        JWT.sign(
          {id: result._id},
          jwtSecret,
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.status(200).json({
              token,
              _id: result._id,
              name: result.name,
              email: result.email
            });
          }
        );
      });
    })
  })
})

module.exports = router;