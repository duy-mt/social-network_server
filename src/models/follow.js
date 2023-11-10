'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Follow extends Model {
    static associate(models) {
      // Định nghĩa các quan hệ với các models khác ở đây
      Follow.belongsTo(models.User, {
        foreignKey: 'followerId',
        as: 'follower',
      });
      Follow.belongsTo(models.User, {
        foreignKey: 'followingId',
        as: 'following',
      });
      // Thêm các quan hệ và cài đặt tùy theo yêu cầu của bạn
    }
  };
  Follow.init({
    // Thêm trường khác tùy theo yêu cầu
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Following', // Giá trị mặc định có thể thay đổi tùy theo yêu cầu
    },
  }, {
    sequelize,
    modelName: 'Follow',
  });
  return Follow;
};
