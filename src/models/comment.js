'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      // Định nghĩa các quan hệ với các models khác ở đây
      Comment.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'commenter',
      });
      Comment.belongsTo(models.Post, {
        foreignKey: 'postId',
        as: 'post',
      });
      // Thêm các quan hệ và cài đặt tùy theo yêu cầu của bạn
    }
  };
  Comment.init({
    content: DataTypes.TEXT,
    // Thêm trường khác tùy theo yêu cầu
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
