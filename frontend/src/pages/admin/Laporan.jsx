import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { getNilai } from "../../services/nilaiService";

export default function Laporan() {
  const [data, setData] = useState([]);
  const [hasil, setHasil] = useState([]);
  const [periode, setPeriode] = useState("Januari 2026");

  const bobot = {
    kehadiran: 0.20,
    produktivitas: 0.25,
    kualitas: 0.15,
    disiplin: 0.20,
    kesalahan: 0.10,
    penyelesaian: 0.10,
  };

  useEffect(() => {
    fetchData();
  }, [periode]);

  const fetchData = async () => {
    const res = await getNilai();
    setData(res);
    hitungMoora(res);
  };

  const hitungMoora = (dataset) => {
    if (!dataset || dataset.length === 0) return;

    const akar = {};
    Object.keys(bobot).forEach((key) => {
      akar[key] = Math.sqrt(
        dataset.reduce((sum, item) => sum + Math.pow(item[key], 2), 0)
      );
    });

    const perhitungan = dataset.map((item) => {
      const norm = {};
      Object.keys(bobot).forEach((key) => {
        norm[key] = item[key] / akar[key];
      });

      const benefit =
        norm.kehadiran * bobot.kehadiran +
        norm.produktivitas * bobot.produktivitas +
        norm.kualitas * bobot.kualitas +
        norm.disiplin * bobot.disiplin;

      const cost =
        norm.kesalahan * bobot.kesalahan +
        norm.penyelesaian * bobot.penyelesaian;

      const yi = benefit - cost;

      return {
        ...item,
        yi,
        kategori: getKategori(yi),
        periode,
      };
    });

    const sorted = perhitungan.sort((a, b) => b.yi - a.yi);

    setHasil(sorted);
  };

  const getKategori = (yi) => {
    if (yi >= 0.18) return "Sangat Baik";
    if (yi >= 0.15) return "Baik";
    if (yi >= 0.13) return "Cukup Baik";
    return "Kurang Baik";
  };

  const handleExport = () => {
    alert("Fitur Export PDF akan dibuat selanjutnya 🔥");
  };

  return (
    <AdminLayout>
      <h2 className="text-xl font-semibold mb-6">
        Laporan Insentif
      </h2>

      {/* Filter */}
      <div className="bg-white p-4 rounded shadow mb-6 flex gap-4 items-center">
        <select
          value={periode}
          onChange={(e) => setPeriode(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option>Januari 2026</option>
          <option>Februari 2026</option>
          <option>Maret 2026</option>
        </select>

        <button
          onClick={handleExport}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Export PDF
        </button>
      </div>

      {/* Tabel */}
      <div className="bg-white rounded shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-3 py-2">No</th>
              <th className="border px-3 py-2">Nama</th>
              <th className="border px-3 py-2">Periode</th>
              <th className="border px-3 py-2">Nilai Yi</th>
              <th className="border px-3 py-2">Kategori</th>
            </tr>
          </thead>
          <tbody>
            {hasil.map((d, i) => (
              <tr key={d.id} className="text-center">
                <td className="border px-3 py-2">{i + 1}</td>
                <td className="border px-3 py-2">{d.nama}</td>
                <td className="border px-3 py-2">{d.periode}</td>
                <td className="border px-3 py-2">
                  {d.yi.toFixed(4)}
                </td>
                <td className="border px-3 py-2">
                  <span
                    className={`px-2 py-1 text-xs rounded text-white ${
                      d.kategori === "Sangat Baik"
                        ? "bg-green-600"
                        : d.kategori === "Baik"
                        ? "bg-blue-600"
                        : d.kategori === "Cukup Baik"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                  >
                    {d.kategori}
                  </span>
                </td>
              </tr>
            ))}

            {hasil.length === 0 && (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500">
                  Data belum tersedia
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-gray-500 mt-4">
        * Laporan menampilkan hasil perhitungan insentif karyawan
        berdasarkan metode MOORA per periode.
      </p>
    </AdminLayout>
  );
}
