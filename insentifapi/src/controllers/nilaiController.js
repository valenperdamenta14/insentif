const db = require("../config/db");

// Get all nilai
exports.getNilai = (req, res) => {
  db.query("SELECT * FROM data_nilai", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

// Get single nilai by id
exports.getNilaiById = (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM data_nilai WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results[0]);
  });
};

// Create new nilai
exports.createNilai = (req, res) => {
  const { nama, kehadiran, produktivitas, kualitas, disiplin, kesalahan, penyelesaian } = req.body;
  db.query(
    "INSERT INTO data_nilai (nama, kehadiran, produktivitas, kualitas, disiplin, kesalahan, penyelesaian) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [nama, kehadiran, produktivitas, kualitas, disiplin, kesalahan, penyelesaian],
    (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Data nilai berhasil ditambahkan", id: results.insertId });
    }
  );
};

// Update nilai
exports.updateNilai = (req, res) => {
  const { id } = req.params;
  const { nama, kehadiran, produktivitas, kualitas, disiplin, kesalahan, penyelesaian } = req.body;
  db.query(
    "UPDATE data_nilai SET nama=?, kehadiran=?, produktivitas=?, kualitas=?, disiplin=?, kesalahan=?, penyelesaian=? WHERE id=?",
    [nama, kehadiran, produktivitas, kualitas, disiplin, kesalahan, penyelesaian, id],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ message: "Data nilai berhasil diupdate" });
    }
  );
};

// Delete nilai
exports.deleteNilai = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM data_nilai WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Data nilai berhasil dihapus" });
  });
};
