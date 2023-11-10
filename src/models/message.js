'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate(models) {
      // Định nghĩa các quan hệ với các models khác ở đây
      Message.belongsTo(models.User, {
        foreignKey: 'senderId',
        as: 'sender',
      });
      Message.belongsTo(models.User, {
        foreignKey: 'recipientId',
        as: 'recipient',
      });
      // Thêm các quan hệ và cài đặt tùy theo yêu cầu của bạn
    }
  };
  Message.init({
    content: DataTypes.TEXT,
    // Thêm trường khác tùy theo yêu cầu
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};
