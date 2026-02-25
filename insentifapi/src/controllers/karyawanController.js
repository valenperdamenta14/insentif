const db = require("../config/db");

exports.getKaryawan = (req, res) => {
  const sql = "SELECT * FROM data_karyawan";

  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

exports.tambahKaryawan = (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: "Body kosong" });
  }

  const { nama, jabatan } = req.body;

  if (!nama || !jabatan) {
    return res.status(400).json({
      message: "Nama dan jabatan wajib diisi",
    });
  }

  const sql =
    "INSERT INTO data_karyawan (nama, jabatan) VALUES (?, ?)";

  db.query(sql, [nama, jabatan], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({
      message: "Karyawan berhasil ditambahkan",
      id_karyawan: result.insertId,
    });
  });
};

exports.updateKaryawan = (req, res) => {
  const { id } = req.params;
  const { nama, jabatan } = req.body;

  const sql =
    "UPDATE data_karyawan SET nama=?, jabatan=? WHERE id_karyawan=?";

  db.query(sql, [nama, jabatan, id], (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Karyawan berhasil diupdate" });
  });
};

exports.hapusKaryawan = (req, res) => {
  const { id } = req.params;

  const sql =
    "DELETE FROM data_karyawan WHERE id_karyawan=?";

  db.query(sql, [id], (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Karyawan berhasil dihapus" });
  });
};
