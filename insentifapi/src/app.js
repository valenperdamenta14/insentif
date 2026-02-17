const express = require("express");
const cors = require("cors");

const app = express();

// middleware WAJIB
app.use(cors());
app.use(express.json());

// routes
const karyawanRoutes = require("./routes/karyawanRoutes");
app.use("/karyawan", karyawanRoutes);

const nilaiRoutes = require("./routes/nilaiRoutes");
app.use("/nilai", nilaiRoutes);

module.exports = app;
