import AdminLayout from "../../layouts/AdminLayout";

export default function DataKriteria() {
  const kriteria = [
    {
      no: 1,
      kode: "C1",
      kriteria: "Kehadiran",
      jenis: "Benefit",
      bobot: "20%",
    },
    {
      no: 2,
      kode: "C2",
      kriteria: "Produktivitas Kerja (target & jumlah produksi)",
      jenis: "Benefit",
      bobot: "25%",
    },
    {
      no: 3,
      kode: "C3",
      kriteria: "Kualitas Hasil Kerja",
      jenis: "Benefit",
      bobot: "15%",
    },
    {
      no: 4,
      kode: "C4",
      kriteria: "Kedisplinan",
      jenis: "Benefit",
      bobot: "20%",
    },
    {
      no: 5,
      kode: "C5",
      kriteria: "Jumlah Kesalahan Produksi",
      jenis: "Cost",
      bobot: "10%",
    },
    {
      no: 6,
      kode: "C6",
      kriteria: "Waktu Penyelesaian Pekerjaan",
      jenis: "Cost",
      bobot: "10%",
    },
  ];

  return (
    <AdminLayout>
      <h2 className="text-xl font-semibold mb-6">Data Kriteria</h2>

      <div className="bg-white rounded shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-3 py-2">No</th>
              <th className="border px-3 py-2">Kode Kriteria</th>
              <th className="border px-3 py-2">Kriteria</th>
              <th className="border px-3 py-2">Jenis</th>
              <th className="border px-3 py-2">Bobot</th>
            </tr>
          </thead>
          <tbody>
            {kriteria.map((k) => (
              <tr key={k.kode} className="text-center">
                <td className="border px-3 py-2 font-semibold">
                  {k.no}
                </td>
                <td className="border px-3 py-2">{k.kode}</td>
                <td className="border px-3 py-2">{k.kriteria}</td>
                <td className="border px-3 py-2">{k.jenis}</td>
                <td className="border px-3 py-2">{k.bobot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-gray-500 mt-4">
        * Bobot kriteria bersifat tetap (fixed) sesuai kebijakan
        perusahaan.
      </p>
    </AdminLayout>
  );
}
