import userService from "../services/userService";

// Lấy danh sách tất cả người dùng
const getAllUsers = async (req, res) => {
  try {
    const data = await userService.getAllUsers();
    return res.status(200).json({
        errCode: data.errCode,
        message: data.errMessage,
        user: data.data ? data.data : {}
    }) 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lấy danh sách người dùng.' });
  }
};


// Lấy thông tin của một người dùng theo ID
const getUserById = async (req, res) => {
  const userId = req.query.userId;
  console.log("in controller get user by id");
  try {
    const data = await userService.getUserById(userId);
      return res.status(200).json({
        errCode: data.errCode,
        message: data.errMessage,
        user: data.data ? data.data : {}
      }) 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lấy thông tin người dùng.' });
  }
};

// Tạo một người dùng mới
const createUser = async (req, res) => {
  try {
    const data = await userService.createUser(req.body);
    return res.status(200).json({
      errCode: data.errCode,
      message: data.errMessage,
      user: data.data ? data.data : {}
    }) 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi tạo người dùng.' });
  }
};

// Cập nhật thông tin của một người dùng theo ID
const updateUserById = async (req, res) => {
  const userId = req.query.userId;
  let body = {}
  body['username'] = req.body.username;
  body['email'] = req.body.username;
  body['password'] = req.body.username;
  body['avatar'] = req.body.username;

  try {
    const data = await userService.updateUserById(userId, body);
    return res.status(200).json({
      errCode: data.errCode,
      message: data.errMessage,
      user: data.user ? data.user : {}
    }) 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi cập nhật thông tin người dùng.' });
  }
};

// Xóa một người dùng theo ID
const deleteUserById = async (req, res) => {
  const userId = req.query.userId;
  try {
    const data = await userService.deleteUserById(userId);
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
  getAllUsers:getAllUsers,
  getUserById:getUserById,
  createUser:createUser,
  updateUserById:updateUserById,
  deleteUserById:deleteUserById,
};
