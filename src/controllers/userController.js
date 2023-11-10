import userService from "../services/userService";

// Lấy danh sách tất cả người dùng
const getAllUsers = async (req, res) => {
  try {
    const data = await userService.getAllUsers;
    return res.status(data.errCode).json({
        errCode: data.errCode,
        message: data.errMessage,
        user: data.user ? data.user : {}
    }) 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lấy danh sách người dùng.' });
  }
};

// Lấy thông tin của một người dùng theo ID
const getUserById = async (req, res) => {
  const userId = req.params.userId;
  try {
    const data = await userService.getUserById;
      return res.status(data.errCode).json({
        errCode: data.errCode,
        message: data.errMessage,
        user: data.user ? data.user : {}
      }) 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lấy thông tin người dùng.' });
  }
};

// Tạo một người dùng mới
const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const data = await userService.createUser;
    return res.status(data.errCode).json({
      errCode: data.errCode,
      message: data.errMessage,
      user: data.newUser ? data.newUser : {}
    }) 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi tạo người dùng.' });
  }
};

// Cập nhật thông tin của một người dùng theo ID
const updateUserById = async (req, res) => {
  const userId = req.params.userId;
  const { username, email, password } = req.body;
  try {
    const data = await userService.updateUserById;
    return res.status(data.errCode).json({
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
  const userId = req.params.userId;
  try {
    const data = await userService.deleteUserById;
    return res.status(data.errCode).json({
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
