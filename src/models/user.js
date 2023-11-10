'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Định nghĩa các quan hệ với các models khác ở đây
    }
  };
  User.init({
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    // Thêm các trường khác tùy theo yêu cầu của bạn
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
