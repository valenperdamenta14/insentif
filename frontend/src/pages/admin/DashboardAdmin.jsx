import AdminLayout from "../../layouts/AdminLayout";

export default function DashboardAdmin() {
  return (
    <AdminLayout>
      <h2 className="text-2xl font-semibold mb-6">
        Ringkasan Dashboard
      </h2>

      {/* cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <Card title="Total Karyawan" value="xx" />
        <Card title="Periode Aktif" value="xx xxxx" />
        <Card title="Status MOORA" value="xx" />
        <Card title="Rata-rata Nilai" value="-" />
      </div>

      {/* tabel ringkas */}
      <div className="bg-white rounded shadow p-6">
        <h3 className="font-semibold mb-4">
          Hasil Insentif Terbaru
        </h3>

        <table className="w-full text-sm border">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-3 py-2">Nama</th>
              <th className="border px-3 py-2">Nilai Yi</th>
              <th className="border px-3 py-2">Kategori</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2">-</td>
              <td className="border px-3 py-2">-</td>
              <td className="border px-3 py-2">-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white p-5 rounded shadow">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-2xl font-semibold mt-2">{value}</h3>
    </div>
  );
}
