'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    static associate(models) {
      // Định nghĩa các quan hệ với các models khác ở đây
      Group.belongsTo(models.User, {
        foreignKey: 'founderId',
        as: 'founder',
      });
      // Thêm các quan hệ và cài đặt tùy theo yêu cầu của bạn
    }
  };
  Group.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    // Thêm trường khác tùy theo yêu cầu
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};
