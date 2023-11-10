'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PrivacySettings extends Model {
    static associate(models) {
      // Định nghĩa các quan hệ với các models khác ở đây
      PrivacySettings.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
      // Thêm các quan hệ và cài đặt tùy theo yêu cầu của bạn
    }
  };
  PrivacySettings.init({
    profileVisibility: DataTypes.STRING, // Cài đặt quyền riêng tư cho hồ sơ
    postVisibility: DataTypes.STRING, // Cài đặt quyền riêng tư cho bài viết
    personalInfoVisibility: DataTypes.STRING, // Cài đặt quyền riêng tư cho thông tin cá nhân
    // Thêm cài đặt quyền riêng tư khác tùy theo yêu cầu
  }, {
    sequelize,
    modelName: 'PrivacySettings',
  });
  return PrivacySettings;
};
