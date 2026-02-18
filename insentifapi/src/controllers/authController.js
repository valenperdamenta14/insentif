const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// LOGIN
exports.login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: "Username dan password wajib diisi",
    });
  }

  const sql = "SELECT * FROM users WHERE username = ?";

  db.query(sql, [username], async (err, result) => {
    if (err) return res.status(500).json({ message: "Server error" });

    if (result.length === 0) {
      return res.status(401).json({ message: "User tidak ditemukan" });
    }

    const user = result[0];

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ message: "Password salah" });
    }

    // ACCESS TOKEN
    const accessToken = jwt.sign(
      { id: user.id, role: user.role },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );

    // REFRESH TOKEN
    const refreshToken = jwt.sign(
      { id: user.id },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "7d" }
    );

    // simpan refresh token ke database
    db.query(
      "UPDATE users SET refresh_token = ? WHERE id = ?",
      [refreshToken, user.id]
    );

    res.json({
      message: "Login berhasil",
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        nama: user.nama,
        role: user.role,
      },
    });
  });
};

// REGISTER
exports.register = async (req, res) => {
  const { nama, username, password, role } = req.body;

  if (!nama || !username || !password || !role) {
    return res.status(400).json({
      message: "Semua field wajib diisi",
    });
  }

  try {
    // cek username sudah ada atau belum
    db.query(
      "SELECT * FROM users WHERE username = ?",
      [username],
      async (err, result) => {
        if (err) return res.status(500).json({ message: "Server error" });

        if (result.length > 0) {
          return res.status(400).json({
            message: "Username sudah digunakan",
          });
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // insert user
        db.query(
          "INSERT INTO users (nama, username, password, role) VALUES (?, ?, ?, ?)",
          [nama, username, hashedPassword, role],
          (err) => {
            if (err) return res.status(500).json({ message: "Insert gagal" });

            res.status(201).json({
              message: "User berhasil dibuat",
            });
          }
        );
      }
    );
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};