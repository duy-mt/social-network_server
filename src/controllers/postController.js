import postService from "../services/postService";
import postService from "../services/postService";


// Lấy danh sách tất cả bài post
const getAllPosts = async (req, res) => {
  try {
    const data = await postService.getAllPosts();
    return res.status(200).json({
        errCode: data.errCode,
        message: data.errMessage,
        post: data.data ? data.data : {}
    }) 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lấy danh sách người dùng.' });
  }
};


// Lấy thông tin của một post theo ID
const getPostById = async (req, res) => {
  const postId = req.query.postId;
  try {
    const data = await postService.getPostById(postId);
      return res.status(200).json({
        errCode: data.errCode,
        message: data.errMessage,
        post: data.data ? data.data : {}
      }) 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lấy thông tin người dùng.' });
  }
};

// Tạo một bài post mới
const createPost = async (req, res) => {
  try {
    const data = await postService.createPost(req.body);
    return res.status(200).json({
      errCode: data.errCode,
      message: data.errMessage,
      post: data.data ? data.data : {}
    }) 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi tạo người dùng.' });
  }
};

// Cập nhật thông tin của một bài post theo ID
const updatePostById = async (req, res) => {
  const postId = req.query.postId;
  let body = {}
  body['postname'] = req.body.postname;
  body['email'] = req.body.postname;
  body['password'] = req.body.postname;
  body['avatar'] = req.body.postname;

  try {
    const data = await postService.updatePostById(postId, body);
    return res.status(200).json({
      errCode: data.errCode,
      message: data.errMessage,
      post: data.post ? data.post : {}
    }) 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi cập nhật thông tin người dùng.' });
  }
};

// Xóa một bài post theo ID
const deletePostById = async (req, res) => {
  const postId = req.query.postId;
  try {
    const data = await postService.deletePostById(postId);
    return res.status(200).json({
      errCode: data.errCode,
      message: data.errMessage,
    }) 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi xóa người dùng.' });
  }
};

module.exports = {
    getAllPosts:getAllPosts,
    getPostById:getPostById,
    createPost:createPost,
    updatePostById:updatePostById,
    deletePostById:deletePostById,
};
