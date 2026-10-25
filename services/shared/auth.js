const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'cc-turnos-local-secret-change-me';
function createToken(user) { return jwt.sign({ sub: user.id, username: user.username, role: user.role, name: user.name }, secret, { expiresIn: '8h' }); }
function authenticate(req, res, next) {
  const value = req.headers.authorization || '';
  if (!value.startsWith('Bearer ')) return res.status(401).json({ error: 'AUTH_REQUIRED', message: 'Se requiere autenticacion' });
  try { req.user = jwt.verify(value.slice(7), secret); next(); } catch { return res.status(401).json({ error: 'AUTH_INVALID', message: 'La sesion no es valida' }); }
}
function allow(...roles) { return (req, res, next) => roles.includes(req.user.role) ? next() : res.status(403).json({ error: 'FORBIDDEN', message: 'No tienes permisos para esta operacion' }); }
module.exports = { createToken, authenticate, allow };