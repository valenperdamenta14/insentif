import AdminLayout from "../../layouts/AdminLayout";

export default function DataKriteria() {
  const kriteria = [
    {
      kode: "C1",
      nama: "Kehadiran",
      bobot: "25%",
      jenis: "Benefit",
      skala: "0 – 100 (%)",
    },
    {
      kode: "C2",
      nama: "Produktivitas Kerja",
      bobot: "35%",
      jenis: "Benefit",
      skala: "0 – 100 (%)",
    },
    {
      kode: "C3",
      nama: "Kualitas Hasil Kerja",
      bobot: "20%",
      jenis: "Benefit",
      skala: "0 – 100 (%)",
    },
    {
      kode: "C4",
      nama: "Kedisiplinan",
      bobot: "20%",
      jenis: "Benefit",
      skala: "0 – 100 (%)",
    },
  ];

  return (
    <AdminLayout>
      <h2 className="text-xl font-semibold mb-6">Data Kriteria</h2>

      <div className="bg-white rounded shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-3 py-2">Kode</th>
              <th className="border px-3 py-2">Nama Kriteria</th>
              <th className="border px-3 py-2">Bobot</th>
              <th className="border px-3 py-2">Jenis</th>
              <th className="border px-3 py-2">Skala</th>
            </tr>
          </thead>
          <tbody>
            {kriteria.map((k) => (
              <tr key={k.kode} className="text-center">
                <td className="border px-3 py-2 font-semibold">
                  {k.kode}
                </td>
                <td className="border px-3 py-2 text-left">
                  {k.nama}
                </td>
                <td className="border px-3 py-2">{k.bobot}</td>
                <td className="border px-3 py-2">{k.jenis}</td>
                <td className="border px-3 py-2">{k.skala}</td>
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
