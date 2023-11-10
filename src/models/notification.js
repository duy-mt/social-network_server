'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    static associate(models) {
      // Định nghĩa các quan hệ với các models khác ở đây
      Notification.belongsTo(models.User, {
        foreignKey: 'recipientId',
        as: 'recipient',
      });
      Notification.belongsTo(models.User, {
        foreignKey: 'actorId',
        as: 'actor',
      });
      // Thêm các quan hệ và cài đặt tùy theo yêu cầu của bạn
    }
  };
  Notification.init({
    content: DataTypes.STRING,
    // Thêm trường khác tùy theo yêu cầu
  }, {
    sequelize,
    modelName: 'Notification',
  });
  return Notification;
};
