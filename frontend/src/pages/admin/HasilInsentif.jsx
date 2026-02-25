import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { getNilai } from "../../services/nilaiService";

export default function HasilInsentif() {
  const [data, setData] = useState([]);
  const [hasil, setHasil] = useState([]);

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
  }, []);

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

      return { ...item, yi };
    });

    const sorted = perhitungan
      .sort((a, b) => b.yi - a.yi)
      .map((item, index) => ({
        ...item,
        ranking: index + 1,
        kategori: getKategori(item.yi),
        status: item.yi > 0.134 ? "Disetujui" : "Tidak Disetujui",
      }));

    setHasil(sorted);
  };

  const getKategori = (yi) => {
    if (yi >= 0.18) return "Sangat Baik";
    if (yi >= 0.15) return "Baik";
    if (yi >= 0.13) return "Cukup Baik";
    return "Kurang Baik";
  };

  return (
    <AdminLayout>
      <h2 className="text-xl font-semibold mb-6">
        Hasil Insentif & Ranking Karyawan
      </h2>

      <div className="bg-white rounded shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-3 py-2">Ranking</th>
              <th className="border px-3 py-2">Nama Karyawan</th>
              <th className="border px-3 py-2">Nilai Yi</th>
              <th className="border px-3 py-2">Kategori Insentif</th>
              <th className="border px-3 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {hasil.map((h) => (
              <tr key={h.id} className="text-center">
                <td className="border px-3 py-2 font-semibold">
                  {h.ranking}
                </td>
                <td className="border px-3 py-2">{h.nama}</td>
                <td className="border px-3 py-2">
                  {h.yi.toFixed(4)}
                </td>
                <td className="border px-3 py-2">
                  <span
                    className={`px-2 py-1 rounded text-white text-xs
                      ${
                        h.kategori === "Sangat Baik"
                          ? "bg-green-600"
                          : h.kategori === "Baik"
                          ? "bg-blue-600"
                          : h.kategori === "Cukup Baik"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                  >
                    {h.kategori}
                  </span>
                </td>
                <td className="border px-3 py-2">
                  <span
                    className={`font-medium ${
                      h.status === "Disetujui"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {h.status}
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
        * Data diurutkan berdasarkan nilai preferensi (Yi) tertinggi
        menggunakan metode MOORA.
      </p>
    </AdminLayout>
  );
}
