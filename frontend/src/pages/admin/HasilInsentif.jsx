import AdminLayout from "../../layouts/AdminLayout";

// dummy hasil MOORA
const dataMoora = [
  { nama: "Andi", yi: 0.9623 },
  { nama: "Budi", yi: 0.9012 },
  { nama: "Citra", yi: 0.8456 },
  { nama: "Dewi", yi: 0.7821 },
];

// fungsi kategori insentif
const getKategori = (yi) => {
  if (yi >= 0.96) return "Sangat Baik";
  if (yi >= 0.9) return "Baik";
  if (yi >= 0.8) return "Cukup Baik";
  return "Kurang Baik";
};

export default function HasilInsentif() {
  // sorting ranking
  const hasil = [...dataMoora]
    .sort((a, b) => b.yi - a.yi)
    .map((item, index) => ({
      ...item,
      ranking: index + 1,
      kategori: getKategori(item.yi),
    }));

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
              <tr key={h.nama} className="text-center">
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
                  <span className="text-green-600 font-medium">
                    Disetujui
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* catatan */}
      <p className="text-sm text-gray-500 mt-4">
        * Data diurutkan berdasarkan nilai preferensi (Yi) tertinggi
        menggunakan metode MOORA.
      </p>
    </AdminLayout>
  );
}
