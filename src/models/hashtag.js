'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hashtag extends Model {
    static associate(models) {
      // Định nghĩa các quan hệ với các models khác ở đây
      Hashtag.belongsToMany(models.Post, {
        through: 'PostHashtag', // Tên bảng trung gian
        foreignKey: 'hashtagId',
        as: 'posts',
      });
      // Thêm các quan hệ và cài đặt tùy theo yêu cầu của bạn
    }
  };
  Hashtag.init({
    name: DataTypes.STRING,
    usageCount: DataTypes.INTEGER,
    // Thêm trường khác tùy theo yêu cầu
  }, {
    sequelize,
    modelName: 'Hashtag',
  });
  return Hashtag;
};
