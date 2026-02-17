import AdminLayout from "../../layouts/AdminLayout";

const bobot = {
  c1: 0.25,
  c2: 0.35,
  c3: 0.2,
  c4: 0.2,
};

const data = [
  { nama: "Andi", c1: 90, c2: 92, c3: 88, c4: 95 },
  { nama: "Budi", c1: 85, c2: 90, c3: 80, c4: 88 },
];

export default function PerhitunganMoora() {
  const normalisasi = (key) =>
    Math.sqrt(data.reduce((sum, d) => sum + d[key] ** 2, 0));

  const hasil = data.map((d) => {
    const yi =
      (d.c1 / normalisasi("c1")) * bobot.c1 +
      (d.c2 / normalisasi("c2")) * bobot.c2 +
      (d.c3 / normalisasi("c3")) * bobot.c3 +
      (d.c4 / normalisasi("c4")) * bobot.c4;

    return { ...d, yi: yi.toFixed(4) };
  });

  const kategori = (yi) => {
    if (yi >= 0.96) return "Sangat Baik";
    if (yi >= 0.9) return "Baik";
    if (yi >= 0.8) return "Cukup Baik";
    return "Kurang Baik";
  };

  return (
    <AdminLayout>
      <h2 className="text-xl font-semibold mb-4">
        Perhitungan MOORA
      </h2>

      <table className="w-full bg-white rounded shadow text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Nama</th>
            <th className="p-2 border">Nilai Yi</th>
            <th className="p-2 border">Kategori</th>
          </tr>
        </thead>
        <tbody>
          {hasil.map((h) => (
            <tr key={h.nama}>
              <td className="p-2 border">{h.nama}</td>
              <td className="p-2 border">{h.yi}</td>
              <td className="p-2 border">
                {kategori(h.yi)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}
