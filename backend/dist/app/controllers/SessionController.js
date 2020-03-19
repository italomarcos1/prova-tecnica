"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _Admin = require('../models/Admin'); var _Admin2 = _interopRequireDefault(_Admin);

var _auth = require('../../config/auth'); var _auth2 = _interopRequireDefault(_auth);

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ message: 'A validação falhou.' });
    }

    const { email, password } = req.body;
    const admin = await _Admin2.default.findOne({ where: { email } });

    if (!admin) {
      return res
        .status(400)
        .json({ message: 'Esse administrador não está cadastrado.' });
    }
    console.log('checa senha');
    if (!(await admin.checkPassword(password))) {
      return res
        .status(401)
        .json({ message: 'A senha informada está incorreta' });
    }

    console.log('passou?');

    const { id, name } = admin;

    return res.json({
      admin: { id, name },
      token: _jsonwebtoken2.default.sign({ id }, _auth2.default.secret, {
        expiresIn: _auth2.default.expiresIn,
      }),
    });
  }
}

exports. default = new SessionController();
