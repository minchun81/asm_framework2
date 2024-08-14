const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401); // Nếu không có token, trả về 401 Unauthorized

  jwt.verify(token, process.env.MY_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Nếu token không hợp lệ, trả về 403 Forbidden
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
