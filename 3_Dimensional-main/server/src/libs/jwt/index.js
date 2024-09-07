const { sign, verify } = require('jsonwebtoken');

const jwtAccessKey = process.env.JWT_ACCESS_KEY;
const jwtRefreshToken = process.env.JWT_REFRESH_KEY;

module.exports = {
  generateAccessToken(userId) {
    return sign(userId, jwtAccessKey, { expiresIn: '1h' });
  },

  generateRefreshToken(userId) {
    return sign(userId, jwtAccessKey, { expiresIn: '30days' });
  },

  verifyAccessToken(token) {
    return verify(token, jwtRefreshToken);
  },

  verifyRefershToken(token) {
    return verify(token, jwtRefreshToken);
  },
};
