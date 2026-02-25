const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const karyawanRoutes = require("./routes/karyawanRoutes");
app.use("/karyawan", karyawanRoutes);

const nilaiRoutes = require("./routes/nilaiRoutes");
app.use("/nilai", nilaiRoutes);

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

module.exports = app;