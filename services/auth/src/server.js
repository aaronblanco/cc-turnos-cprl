const express = require('express'); const bcrypt = require('bcryptjs'); const cors = require('cors'); const { createToken, authenticate, allow } = require('../../shared/auth');
const app = express(); app.use(cors()); app.use(express.json());
const users = [
  { id: 'usr-recepcion', username: 'recepcion', name: 'Ana Recepcion', role: 'recepcion', passwordHash: bcrypt.hashSync('Recepcion123!', 10) },
  { id: 'usr-operador', username: 'operador', name: 'Luis Operador', role: 'operador', passwordHash: bcrypt.hashSync('Operador123!', 10) },
  { id: 'usr-admin', username: 'admin', name: 'Marta Administracion', role: 'admin', passwordHash: bcrypt.hashSync('Admin123!', 10) }
];
app.get('/health', (_, res) => res.json({ service: 'auth', status: 'ok' }));
app.post('/api/auth/login', (req, res) => { const user = users.find((item) => item.username === req.body.username); if (!user || !bcrypt.compareSync(String(req.body.password || ''), user.passwordHash)) return res.status(401).json({ error: 'INVALID_CREDENTIALS', message: 'Usuario o contrasena incorrectos' }); res.json({ token: createToken(user), user: { id: user.id, username: user.username, name: user.name, role: user.role } }); });
app.get('/api/users/me', authenticate, (req, res) => res.json({ user: req.user }));
app.get('/api/users', authenticate, allow('admin'), (_, res) => res.json({ items: users.map(({ passwordHash, ...user }) => user) }));
const port = Number(process.env.AUTH_PORT || 4001); if (require.main === module) app.listen(port, () => console.log(`auth-service listening on ${port}`)); module.exports = app;