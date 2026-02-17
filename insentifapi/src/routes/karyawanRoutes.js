const express = require("express");
const router = express.Router();

const {
  getKaryawan,
  tambahKaryawan,
  updateKaryawan,
  hapusKaryawan,
} = require("../controllers/karyawanController");

router.get("/", getKaryawan);
router.post("/", tambahKaryawan);
router.put("/:id", updateKaryawan);
router.delete("/:id", hapusKaryawan);

module.exports = router;
