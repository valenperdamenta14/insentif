import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { getNilai } from "../../services/nilaiService";

export default function PerhitunganMoora() {
  const [data, setData] = useState([]);
  const [hasil, setHasil] = useState([]);

  const bobot = {
    kehadiran: 0.20,
    produktivitas: 0.25,
    kualitas: 0.15,
    disiplin: 0.20,
    kesalahan: 0.10,      // COST
    penyelesaian: 0.10,   // COST
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getNilai();
    setData(res);
  };

  const hitungMoora = () => {
    if (data.length === 0) {
      alert("Data nilai masih kosong!");
      return;
    }

    // Hitung akar tiap kolom
    const akar = {};
    Object.keys(bobot).forEach((key) => {
      akar[key] = Math.sqrt(
        data.reduce((sum, item) => sum + Math.pow(item[key], 2), 0)
      );
    });

    const perhitungan = data.map((item) => {
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
      };
    });

    setHasil(perhitungan);
  };

  return (
    <AdminLayout>
      <h2 className="text-xl font-semibold mb-4">
        Perhitungan MOORA
      </h2>

      <button
        onClick={hitungMoora}
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Hitung MOORA
      </button>

      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded shadow text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">No</th>
              <th className="p-2 border">Nama</th>
              <th className="p-2 border">Nilai Yi</th>
            </tr>
          </thead>
          <tbody>
            {hasil.map((item, index) => (
              <tr key={item.id}>
                <td className="p-2 border text-center">
                  {index + 1}
                </td>
                <td className="p-2 border">{item.nama}</td>
                <td className="p-2 border text-center">
                  {item.yi.toFixed(3)}
                </td>
              </tr>
            ))}

            {hasil.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center p-4 text-gray-500">
                  Klik tombol "Hitung MOORA" untuk melihat hasil
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
