"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

class User extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: _sequelize2.default.STRING,
        last_name: _sequelize2.default.STRING,
        phone_number: _sequelize2.default.STRING,
        got_to_know: _sequelize2.default.STRING,
        has_social: _sequelize2.default.BOOLEAN,
        social_media: {
          type: _sequelize2.default.ARRAY(_sequelize2.default.BOOLEAN),
        },
      },
      {
        sequelize,
      }
    );
  }
}

exports. default = User;
