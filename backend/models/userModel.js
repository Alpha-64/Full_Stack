const db = require("../config/db");
const jwt = require("jsonwebtoken");

const createUser = (userData, callback) => {
  const {
    name,
    email,
    phone,
    password,
    role = "user",
    google_id = null,
    created_at = new Date(),
    updated_at = new Date(),
    status = "active",
  } = userData;

  const sql = `INSERT INTO users (name, email, phone, password, role, created_at, updated_at, status, google_id) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(
    sql,
    [
      name,
      email,
      phone,
      password,
      role,
      created_at,
      updated_at,
      status,
      google_id,
    ],
    callback
  );
};

const findByEmailOrPhone = (mailOrPhone, callback) => {
  const sql = `SELECT * FROM users WHERE email = ? OR phone = ?`;
  db.query(sql, [mailOrPhone, mailOrPhone], callback);
};

function generateJWT(user) {
  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
}
// Find or create user from Google login
async function findOrCreateGoogleUser(payload) {
  const { sub: google_id, email, name } = payload;

  const [rows] = await db.query(
    'SELECT * FROM users WHERE google_id = ?',
    [google_id]
  );

  let user;

  if (rows.length > 0) {
    user = rows[0];
  } else {
    const [result] = await db.query(
      'INSERT INTO users (name, email, google_id, login_type created_at, updated_at ) VALUES (?, ?, ?, ?, NOW(), NOW())',
      [name, email, google_id, 'google']
    );

    const [newUserRows] = await db.query('SELECT * FROM users WHERE id = ?', [result.insertId]);
    user = newUserRows[0];
  }

  user.token = generateJWT(user);
  return user;
}

module.exports = {
  createUser,
  findByEmailOrPhone,
  findOrCreateGoogleUser
};
