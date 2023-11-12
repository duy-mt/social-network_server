import bcrypt from "bcryptjs";
import db from "../models/index";

// Xử lý đăng nhập
const loginUser = (username, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findOne({ where: { email: email } });

      if (!user) {
        reject(new Error('Tên người dùng không tồn tại'));
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        reject(new Error('Mật khẩu không đúng'));
      }

      resolve(user);
    } catch (error) {
      reject(new Error('Lỗi khi đăng nhập: ' + error.message));
    }
  });
};

// Xử lý đăng xuất
const logoutUser = () => {
  return new Promise((resolve, reject) => {
    try {
      // Thực hiện các bước đăng xuất nếu cần
      resolve();
    } catch (error) {
      reject(new Error('Lỗi khi đăng xuất: ' + error.message));
    }
  });
};

module.exports = {
  loginUser,
  logoutUser,
};
