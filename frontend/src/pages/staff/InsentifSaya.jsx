import StaffLayout from "../../layouts/StaffLayout";

const riwayat = [
  {
    periode: "Januari 2026",
    yi: 0.9623,
    kategori: "Sangat Baik",
  },
  {
    periode: "Desember 2025",
    yi: 0.9156,
    kategori: "Baik",
  },
];

export default function InsentifSaya() {
  return (
    <StaffLayout>
      <h2 className="text-xl font-semibold mb-6">
        Insentif Saya
      </h2>

      <div className="bg-white rounded shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-3 py-2">Periode</th>
              <th className="border px-3 py-2">Nilai Yi</th>
              <th className="border px-3 py-2">Kategori</th>
            </tr>
          </thead>
          <tbody>
            {riwayat.map((r, i) => (
              <tr key={i} className="text-center">
                <td className="border px-3 py-2">
                  {r.periode}
                </td>
                <td className="border px-3 py-2">
                  {r.yi.toFixed(4)}
                </td>
                <td className="border px-3 py-2">
                  <span className="px-2 py-1 rounded text-xs bg-blue-600 text-white">
                    {r.kategori}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </StaffLayout>
  );
}
