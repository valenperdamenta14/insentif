const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
const karyawanRoutes = require("./routes/karyawanRoutes");
app.use("/karyawan", karyawanRoutes);

const nilaiRoutes = require("./routes/nilaiRoutes");
app.use("/nilai", nilaiRoutes);

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

module.exports = app;