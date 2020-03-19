"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('./app/controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _SessionController = require('./app/controllers/SessionController'); var _SessionController2 = _interopRequireDefault(_SessionController);
var _auth = require('./app/middlewares/auth'); var _auth2 = _interopRequireDefault(_auth);

const routes = new (0, _express.Router)();

routes.get('/', (req, res) => res.send('ok'));

routes.post('/create', _UserController2.default.store);
routes.post('/login', _SessionController2.default.store);

routes.use(_auth2.default);

routes.get('/auth', (req, res) =>
  res.json({ message: "You're authenticated." })
);

routes.get('/data', _UserController2.default.index);

exports. default = routes;
