'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      // Định nghĩa các quan hệ với các models khác ở đây
      Post.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'author',
      });
      // Thêm các quan hệ và cài đặt tùy theo yêu cầu của bạn
    }
  };
  Post.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    // Thêm trường khác tùy theo yêu cầu
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};
