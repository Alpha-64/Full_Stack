const db = require("../config/db");

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

module.exports = {
  createUser,
  findByEmailOrPhone,
};
