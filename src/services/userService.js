import { raw } from "body-parser";
import db from "../models/index";

// Lấy danh sách tất cả người dùng
const getAllUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const users = await db.User.findAll({
        raw: false,
        attributes:{
          exclude: ['password']
        }
      });
      resolve({ errCode: 0, errMessage: 'Lấy danh sách người dùng thành công.', data: users });
    } catch (error) {
      reject({ errCode: 500, errMessage: 'Lỗi khi lấy danh sách người dùng.' });
    }
  });
};


// Lấy thông tin của một người dùng theo ID
const getUserById = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findByPk(
        userId, {
          attributes: {
            exclude: ['password'] 
            },
          raw: false
          },
      );
      console.log(1, user.dataValues);
      if (user) {
        resolve({ errCode: 0, errMessage: 'Lấy danh sách người dùng thành công.', data: user.dataValues });
      } else {
        reject({ errCode: 404, errMessage: 'Người dùng không tồn tại.' });
      }
    } catch (error) {
      console.error('userService - getUserById:', error);
      reject({ errCode: 500, errMessage: 'Lỗi khi lấy thông tin người dùng.' });
    }
  });
};

// Tạo một người dùng mới
const createUser = (userData) => {
  return new Promise(async (resolve, reject) => {
    const { username, email, password, avatar } = userData;
    try {
      const newUser = await db.User.create(
        { username:username, 
          email: email, 
          password:password, 
          avartar:avatar 
        });
        console.log(newUser.dataValues);
      resolve({ errCode: 0, errMessage: 'Tạo người dùng thành công.', data: newUser.dataValues });
    } catch (error) {
      console.error('userService - createUser:', error);
      reject({ errCode: 500, errMessage: 'Lỗi khi tạo người dùng.' });
    }
  });
};

// Cập nhật thông tin của một người dùng theo ID
const updateUserById = (userId, userData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findByPk(userId);

      if (user) {
        await db.User.update({ 
          username: userData.username,
          email: userData.email, 
          password: userData.password,
          avatar: userData.avatar
          },
          {
            where: {
              id: userId,
            },
          }
        );
        resolve({ errCode: 0, errMessage: 'Cập nhật thông tin người dùng thành công.', data: user });
      } else {
        reject({ errCode: 404, errMessage: 'Người dùng không tồn tại.' });
      }
    } catch (error) {
      console.error('userService - updateUserById:', error);
      reject({ errCode: 500, errMessage: 'Lỗi khi cập nhật thông tin người dùng.' });
    }
  });
};  

// Xóa một người dùng theo ID
const deleteUserById = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findByPk(userId);
      console.log(user);
      if (user) {
        await user.destroy();
        resolve({errCode: 0, errMessage: 'Người dùng đã bị xóa thành công.' });
      } else {
        reject({ errCode: 404, errMessage: 'Người dùng không tồn tại.' });
      }
    } catch (error) {
      console.error('userService - deleteUserById:', error);
      reject({ errCode: 500, errMessage: 'Lỗi khi xóa người dùng.' });
    }
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
