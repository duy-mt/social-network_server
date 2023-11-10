'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      // Định nghĩa các quan hệ với các models khác ở đây
      Event.belongsTo(models.User, {
        foreignKey: 'organizerId',
        as: 'organizer',
      });
      // Thêm các quan hệ và cài đặt tùy theo yêu cầu của bạn
    }
  };
  Event.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE,
    // Thêm trường khác tùy theo yêu cầu
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};
