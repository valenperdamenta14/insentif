-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 26, 2026 at 06:22 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `insentif`
--

-- --------------------------------------------------------

--
-- Table structure for table `data_karyawan`
--

CREATE TABLE `data_karyawan` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `jabatan` enum('Admin Gudang','Admin Barang','Kepala Gudang','') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `data_karyawan`
--

INSERT INTO `data_karyawan` (`id`, `nama`, `jabatan`) VALUES
(1, 'Tripam Budi', 'Admin Barang'),
(2, 'Rizal', 'Kepala Gudang'),
(3, 'Sukiman', 'Admin Barang'),
(4, 'Mario', 'Admin Barang'),
(5, 'Zulkarnain', 'Admin Barang'),
(6, 'Rasidin', 'Kepala Gudang'),
(7, 'Yamin', 'Admin Barang'),
(8, 'Gufron', 'Admin Barang'),
(9, 'Kasiadi', 'Admin Barang'),
(10, 'Disky', 'Admin Barang'),
(11, 'Wagimin', 'Admin Gudang'),
(12, 'Ijun', 'Admin Barang'),
(13, 'Xixu', 'Admin Gudang'),
(14, 'Budianto', 'Admin Barang'),
(15, 'Irul', 'Admin Barang'),
(16, 'Ewin', 'Admin Gudang'),
(17, 'Dedek', 'Admin Gudang'),
(18, 'Sahyudi', 'Admin Gudang'),
(19, 'Handoko', 'Admin Gudang'),
(20, 'Rahmadani', 'Admin Gudang');

-- --------------------------------------------------------

--
-- Table structure for table `data_nilai`
--

CREATE TABLE `data_nilai` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `kehadiran` int(11) NOT NULL,
  `produktivitas` int(11) NOT NULL,
  `kualitas` int(11) NOT NULL,
  `disiplin` int(11) NOT NULL,
  `kesalahan` int(11) NOT NULL,
  `penyelesaian` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `data_nilai`
--

INSERT INTO `data_nilai` (`id`, `nama`, `kehadiran`, `produktivitas`, `kualitas`, `disiplin`, `kesalahan`, `penyelesaian`) VALUES
(1, 'Tripam', 96, 85, 89, 93, 85, 86),
(2, 'Rizal', 100, 83, 92, 100, 96, 78),
(3, 'Sukiman', 100, 96, 87, 100, 78, 96),
(4, 'Mario', 90, 85, 86, 98, 87, 87),
(5, 'Zulkarnain', 80, 80, 93, 100, 96, 98),
(6, 'Rasidin', 87, 83, 84, 86, 65, 87),
(7, 'Yamin', 70, 81, 76, 87, 78, 97),
(8, 'Gufron', 90, 97, 90, 90, 92, 85),
(9, 'Kasiadi', 83, 78, 82, 89, 79, 64),
(10, 'Disky', 85, 90, 93, 94, 84, 89),
(11, 'Wagimin', 93, 73, 87, 82, 67, 87),
(12, 'Ijun', 92, 82, 79, 89, 74, 93),
(13, 'Xixu', 85, 89, 79, 89, 74, 93),
(14, 'Budianto', 76, 89, 90, 85, 78, 85),
(15, 'Irul', 75, 84, 93, 76, 83, 73),
(16, 'Ewin', 86, 93, 87, 72, 91, 76),
(17, 'Dedek', 78, 87, 95, 84, 83, 84),
(18, 'Sahyudi', 93, 93, 64, 81, 78, 83),
(19, 'Handoko', 78, 98, 78, 86, 89, 82),
(20, 'Rahmadani', 82, 86, 86, 78, 73, 84);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('super_admin','staff') NOT NULL,
  `refresh_token` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nama`, `username`, `password`, `role`, `refresh_token`, `created_at`, `updated_at`) VALUES
(3, 'Windi', 'windi', '$2b$10$vmnXEjxst1yQlU4OfevWe.Z2oINLDiqdhwtCXJqV5EpQ3eukrjIei', 'super_admin', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzcxOTk1NDE3LCJleHAiOjE3NzI2MDAyMTd9.Sc0potITvbShaYkSeBOi1scApXxDdaH_fGn02DYDYlE', '2026-02-18 14:33:12', '2026-02-25 04:56:57'),
(4, 'Nurul', 'nurul', '$2b$10$D3iRVyYl4DG7DHyyyqyOZuAgyqRnAGzBg9Td8SJnLkLjx2ZYsjj2m', 'staff', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNzcxOTk1NjUwLCJleHAiOjE3NzI2MDA0NTB9.G9XMp3PHwZRntF-l4U95vV__cA8DKd4f7LlIazg7OOA', '2026-02-18 14:35:24', '2026-02-25 05:00:50');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `data_karyawan`
--
ALTER TABLE `data_karyawan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `data_nilai`
--
ALTER TABLE `data_nilai`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
