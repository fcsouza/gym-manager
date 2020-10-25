import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(400).json({ error: 'Token not informed' });
  }

  const [, token] = authorization.split(' ');

  try {
    const { id } = await jwt.verify(token, authConfig.secret);
    req.userId = id;
    return next();
  } catch (e) {
    return res.status(400).json({ error: 'Token is invalid!' });
  }
};
