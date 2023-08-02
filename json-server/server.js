require('dotenv').config();
const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const bcrypt = require('bcryptjs');

const router = jsonServer.router(path.join(__dirname, './db.json'));
const auth = require('json-server-auth');
const middlewares = jsonServer.defaults();

server.db = router.db;
const JSON_SERVER_PORT = process.env.JSON_SERVER_PORT || 7000;

const rules = auth.rewriter({
  // Permission rules
  users: 660,
  notifications: 660,
});

server.use(middlewares);
server.use(rules);
server.use(auth);
server.use(router);
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST' && req.paht === '/login') {
    const { email, password } = req.body;

    const { db } = req.app;

    const user = db.get('users').find({ email, password }).value();

    if (!user) {
      res.status(400).jsonp("User doesn't exist");
      return;
    }

    bcrypt
      .compare(password, user.password)
      .then((same) => {
        if (!same) {
          res.status(400).jsonp("User doesn't exist");
          return;
        }
        res.status(200);
        return;
      })
      .catch((err) => {
        if (err === 400) res.status(400).jsonp('Incorrect password');
        else next(err);
      });
  }

  next();
});
server.listen(JSON_SERVER_PORT, () => {
  console.log(`JSON Server is running on port ${JSON_SERVER_PORT}`); // eslint-disable-line
});
