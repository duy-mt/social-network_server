import authService from "../services/authService";
// Xử lý đăng nhập
const processLogin = (req, res) => {
  const { username, password } = req.body;

  authService
    .loginUser(username, password)
    .then((user) => {
      req.login(user, (err) => {
        if (err) {
          console.error('Error during login:', err);
          res.render('login', { error: 'Lỗi khi đăng nhập' });
        } else {
          res.redirect('/');
        }
      });
    })
    .catch((error) => {
      res.render('login', { error: error.message });
    });
};

// Xử lý đăng xuất
const processLogout = (req, res) => {
  authService
    .logoutUser()
    .then(() => {
      req.logout();
      res.redirect('/login');
    })
    .catch((error) => {
      console.error('Error during logout:', error);
      res.redirect('/'); // Chuyển hướng về trang chính hoặc trang lỗi tùy ý
    });
};

module.exports = {
  showLoginPage,
  processLogin,
  processLogout,
};
