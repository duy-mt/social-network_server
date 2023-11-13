import bcrypt from "bcryptjs";
import db from "../models/index";

// Xử lý đăng nhập
const loginUser = (username, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findOne({ where: { email: email } });

      if (!user) {
        reject({ errCode: 500, errMessage: 'Tên người dùng không tồn tại.' });

      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        reject({ errCode: 500, errMessage: 'Mật khẩu không đúng.' });

      }

      resolve({ errCode: 200, errMessage: 'Đăng nhập thành công.', data: user });
    } catch (error) {
      reject({ errCode: 500, errMessage: 'Lỗi đăng nhập.' });

    }
  });
};

// Xử lý đăng xuất
const logoutUser = () => {
  return new Promise((resolve, reject) => {
    try {
      // Thực hiện các bước đăng xuất nếu cần
      resolve({ errCode: 200, errMessage: 'Đăng xuất thành công.'});
    } catch (error) {
      reject({ errCode: 500, errMessage: 'Lỗi đăng xuất.' });
    }
  });
};

// Đăng ký người dùng
const registerUser = async (username, password) => {
  return new Promise(async (resolve, reject) => {
    try {
 // Kiểm tra xem tên người dùng đã tồn tại chưa
    const existingUser = await db.User.findOne({ where: { username: username } });
    if (existingUser) {
      reject({ errCode: 404, errMessage: 'Tên người dùng đã tồn tại'});
    }
    const hashedPassword = await bcrypt.hash(password, 10);
     // Tạo người dùng mới
    const newUser = await db.User.create({ username: username, password: hashedPassword, email: email, avatar: avatar });
    resolve({ errCode: 200, errMessage: 'Đăng kí thành công.'});

    } catch(error) {
      cosole.log(error);
      reject({ errCode: 500, errMessage: 'Lỗi đăng xuất.' });

    }
  });
};

module.exports = {
  loginUser,
  logoutUser,
  registerUser
};
