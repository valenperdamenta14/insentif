import AdminLayout from "../../layouts/AdminLayout";

const dataLaporan = [
  {
    nama: "Andi",
    periode: "Januari 2026",
    yi: 0.9623,
    kategori: "Sangat Baik",
  },
  {
    nama: "Budi",
    periode: "Januari 2026",
    yi: 0.9012,
    kategori: "Baik",
  },
  {
    nama: "Citra",
    periode: "Januari 2026",
    yi: 0.8456,
    kategori: "Cukup Baik",
  },
];

export default function Laporan() {
  return (
    <AdminLayout>
      <h2 className="text-xl font-semibold mb-6">Laporan Insentif</h2>

      {/* filter */}
      <div className="bg-white p-4 rounded shadow mb-6 flex gap-4 items-center">
        <select className="border px-3 py-2 rounded">
          <option>Januari 2026</option>
          <option>Februari 2026</option>
        </select>

        <button
          onClick={() => alert("Export PDF (dummy)")}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Export PDF
        </button>
      </div>

      {/* tabel laporan */}
      <div className="bg-white rounded shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-3 py-2">Nama</th>
              <th className="border px-3 py-2">Periode</th>
              <th className="border px-3 py-2">Nilai Yi</th>
              <th className="border px-3 py-2">Kategori</th>
            </tr>
          </thead>
          <tbody>
            {dataLaporan.map((d, i) => (
              <tr key={i} className="text-center">
                <td className="border px-3 py-2">{d.nama}</td>
                <td className="border px-3 py-2">{d.periode}</td>
                <td className="border px-3 py-2">
                  {d.yi.toFixed(4)}
                </td>
                <td className="border px-3 py-2">
                  <span className="px-2 py-1 text-xs rounded bg-green-600 text-white">
                    {d.kategori}
                  </span>
                </td>
              </tr>
            ))}
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
