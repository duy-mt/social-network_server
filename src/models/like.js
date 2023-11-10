'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate(models) {
      // Định nghĩa các quan hệ với các models khác ở đây
      Like.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'liker',
      });
      // Quan hệ với bài viết (hoặc bình luận) mà người dùng đã thích
      Like.belongsTo(models.Post, {
        foreignKey: 'postId',
        as: 'likedPost',
      });
      // Hoặc quan hệ với bình luận mà người dùng đã thích
      Like.belongsTo(models.Comment, {
        foreignKey: 'commentId',
        as: 'likedComment',
      });
      // Thêm các quan hệ và cài đặt tùy theo yêu cầu của bạn
    }
  };
  Like.init({
    // Thêm trường khác tùy theo yêu cầu
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn('NOW'), // Thời gian mặc định là thời điểm hiện tại
    },
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};
