import { raw } from "body-parser";
import db from "../models/index";

// Lấy danh sách tất cả người dùng
const getAllPosts = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const posts = await db.Post.findAll({
        raw: false,
        attributes:{
          exclude: ['password']
        }
      });
      resolve({ errCode: 0, errMessage: 'Lấy danh sách người dùng thành công.', data: posts });
    } catch (error) {
      reject({ errCode: 500, errMessage: 'Lỗi khi lấy danh sách người dùng.' });
    }
  });
};


// Lấy thông tin của một người dùng theo ID
const getPostById = (postId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const post = await db.Post.findByPk(
        postId, {
          attributes: {
            exclude: ['password'] 
            },
          raw: false
          },
      );
      console.log(1, post.dataValues);
      if (post) {
        resolve({ errCode: 0, errMessage: 'Lấy danh sách người dùng thành công.', data: post.dataValues });
      } else {
        reject({ errCode: 404, errMessage: 'Người dùng không tồn tại.' });
      }
    } catch (error) {
      console.error('postService - getpostById:', error);
      reject({ errCode: 500, errMessage: 'Lỗi khi lấy thông tin người dùng.' });
    }
  });
};

// Tạo một người dùng mới
const createPost = (postData) => {
  return new Promise(async (resolve, reject) => {
    const { postname, email, password, avatar } = postData;
    try {
      const newpost = await db.Post.create(
        { postname:postname, 
          email: email, 
          password:password, 
          avartar:avatar 
        });
        console.log(newpost.dataValues);
      resolve({ errCode: 0, errMessage: 'Tạo người dùng thành công.', data: newpost.dataValues });
    } catch (error) {
      console.error('postService - createpost:', error);
      reject({ errCode: 500, errMessage: 'Lỗi khi tạo người dùng.' });
    }
  });
};

// Cập nhật thông tin của một người dùng theo ID
const updatePostById = (postId, postData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const post = await db.Post.findByPk(postId);

      if (post) {
        await db.post.update({ 
          postname: postData.postname,
          email: postData.email, 
          password: postData.password,
          avatar: postData.avatar
          },
          {
            where: {
              id: postId,
            },
          }
        );
        resolve({ errCode: 0, errMessage: 'Cập nhật thông tin người dùng thành công.', data: post });
      } else {
        reject({ errCode: 404, errMessage: 'Người dùng không tồn tại.' });
      }
    } catch (error) {
      console.error('postService - updatepostById:', error);
      reject({ errCode: 500, errMessage: 'Lỗi khi cập nhật thông tin người dùng.' });
    }
  });
};  

// Xóa một người dùng theo ID
const deletePostById = (postId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const post = await db.Post.findByPk(postId);
      console.log(post);
      if (post) {
        await post.destroy();
        resolve({errCode: 0, errMessage: 'Người dùng đã bị xóa thành công.' });
      } else {
        reject({ errCode: 404, errMessage: 'Người dùng không tồn tại.' });
      }
    } catch (error) {
      console.error('postService - deletepostById:', error);
      reject({ errCode: 500, errMessage: 'Lỗi khi xóa người dùng.' });
    }
  });
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePostById,
  deletePostById,
};
