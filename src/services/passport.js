import passport from "passport";
const LocalStrategy = require('passport-local').Strategy;
import bcrypt from "bcryptjs";
import db from '../models/index';


passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await db.User.findOne({ where: { username: username } });
      if (!user) {
        return done(null, false, { message: 'Tên người dùng không tồn tại' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return done(null, false, { message: 'Mật khẩu không đúng' });
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.User.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

module.exports = passport;
