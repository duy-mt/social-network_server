import authService from "../services/authService";
// Xử lý đăng nhập
const processLogin = async (req, res) => {
    try {
      const { username, password } = req.body;
      const data = await authService.loginUser(username, password);
      if (data.errCode == 200){
        // req.logIn();
      }
      return res.status(data.errCode).json({
        errCode: data.errCode,
        message: data.errMessage,
        user: data.data ? data.data : {}
      }) 
    } catch(error) {
      console.error(error);
      res.status(500).json({ error: 'Lỗi khi đăng nhập.' });
    }
};

// Xử lý đăng xuất
const processLogout = async (req, res) => {
  try{
    const data = await authService.logoutUser();
    if (data.errCode == 200){
      // req.logOut();
    }
    return res.status(data.errCode).json({
      errCode: data.errCode,
      message: data.errMessage,
    }) 
  } catch(error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi cập nhật thông tin người dùng.' });
  }

};
const processRegister = (req, res) => {

  // authService
  //   .registerUser(username, password)
  //   .then((newUser) => {
  //     req.login(newUser, (err) => {
  //       if (err) {
  //         console.error('Error during login after registration:', err);
  //         res.render('register', { error: 'Lỗi khi đăng nhập sau khi đăng ký' });
  //       } else {
  //         res.redirect('/');
  //       }
  //     });
  //   })
  //   .catch((error) => {
  //     res.render('register', { error: error.message });
  //   });
  try {
    const { username, password, email, avatar } = req.body;
    const data = authService.registerUser(username, password, email, password);
    return res.status(data.errCode).json({
      errCode: data.errCode,
      message: data.errMessage,
    }) 
  }
  catch (error){
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi đăng kí thông tin người dùng.' });
  }
};

module.exports = {
  processLogin,
  processLogout,
  processRegister
};
