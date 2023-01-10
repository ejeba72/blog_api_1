const { Router } = require('express');
// const { getAllUsersLogic } = require('../controllers/devController');

const router = Router();

// router.route('/').get(getAllUsersLogic);

// module.exports = { devRouter: router };

router.get('/', (req, res) => {
  try {
    console.log(`hello, world`);
    res.send(`My name is Optimus Prime`);
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
});

module.exports = { devRouter: router };
