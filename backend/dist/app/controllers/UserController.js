"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _yup = require('yup'); var Yup = _interopRequireWildcard(_yup);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      last_name: Yup.string().required(),
      phone_number: Yup.string().required(),
      got_to_know: Yup.string().required(),
      has_social: Yup.boolean().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ message: 'Os dados não foram preenchidos corretamente.' });
    }

    const itAlreadyExists = await _User2.default.findOne({
      where: { phone_number: req.body.phone_number },
    });

    if (itAlreadyExists) {
      return res.status(400).json({
        message: 'Já existe um usuário cadastrado com esse número de telefone.',
      });
    }

    const user = await _User2.default.create(req.body);

    return res.json(user);
  }

  async index(req, res) {
    const data = await _User2.default.findAll();

    return res.json(data);
  }
}

exports. default = new UserController();
