const express = require('express');
const router = express.Router();

const users = [{ name: 'Kyle' }, { name: 'Sally' }, { name: 'Gary' }];
// router.use(logger);

//list of users
router.get('/', (req, res) => {
  //   console.log(req.query.name); //this takes the name from the query

  const nameArr = [];
  const getNames = () => {
    for (let i = 0; i < users.length; i++) {
      console.log(users[i].name);
      nameArr.push(users[i].name);
    }
  };
  getNames();
  res.render('users/users', { nameArr });
  //   console.log(testy);
});

//new user form
router.get('/new', (req, res) => {
  res.render('users/new');
});

router.post('/', (req, res) => {
  const isValid = true;

  if (isValid) {
    users.push({ name: req.body.firstName }); //typo caused this not to update
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log('Error');
    res.render('users/new', { name: req.body.firstName });
  }
});

//dynamic parameters need to be below
router
  .route('/:id')
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get User with ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update User wit ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User with ID ${req.params.id}`);
  });

router.param('id', (req, res, next, id) => {
  req.user = users[id];
  next();
});

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

module.exports = router;
