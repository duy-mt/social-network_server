'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Analytic extends Model {
    static associate(models) {
      // Định nghĩa các quan hệ với các models khác ở đây
      Analytic.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
      // Thêm các quan hệ và cài đặt tùy theo yêu cầu của bạn
    }
  };
  Analytic.init({
    pageName: DataTypes.STRING, // Tên trang hoặc mô tả dữ liệu phân tích
    viewCount: DataTypes.INTEGER, // Số lượt xem hoặc dữ liệu phân tích khác
    timestamp: DataTypes.DATE, // Thời gian truy cập hoặc thời gian dữ liệu phân tích
    // Thêm trường khác tùy theo yêu cầu
  }, {
    sequelize,
    modelName: 'Analytic',
  });
  return Analytic;
};
