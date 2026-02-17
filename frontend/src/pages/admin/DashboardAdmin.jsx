import { useEffect, useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { getKaryawan } from "../../services/karyawanService";
import { getNilai } from "../../services/nilaiService";

export default function DashboardAdmin() {
  const [totalKaryawan, setTotalKaryawan] = useState(0);
  const [totalNilai, setTotalNilai] = useState(0);
  const [totalDisetujui, setTotalDisetujui] = useState(0);

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
    const karyawan = await getKaryawan();
    const nilai = await getNilai();

    setTotalKaryawan(karyawan.length);
    setTotalNilai(nilai.length);

    if (nilai.length > 0) {
      const disetujui = hitungMoora(nilai);
      setTotalDisetujui(disetujui);
    }
  };

  const hitungMoora = (dataset) => {
    const akar = {};
    Object.keys(bobot).forEach((key) => {
      akar[key] = Math.sqrt(
        dataset.reduce((sum, item) => sum + Math.pow(item[key], 2), 0)
      );
    });

    const hasil = dataset.map((item) => {
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

      return benefit - cost;
    });

    // Hitung yang lolos threshold skripsi
    return hasil.filter((yi) => yi > 0.134).length;
  };

  return (
    <AdminLayout>
      <h2 className="text-2xl font-semibold mb-6">
        Ringkasan Dashboard
      </h2>

      <div className="grid grid-cols-4 gap-6 mb-8">
        <Card title="Total Karyawan" value={totalKaryawan} />
        <Card title="Total Data Nilai" value={totalNilai} />
        <Card title="Total Disetujui" value={totalDisetujui} />
        <Card title="Status MOORA" value="Aktif" />
      </div>
    </AdminLayout>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white p-5 rounded shadow hover:shadow-lg transition">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-2xl font-semibold mt-2">{value}</h3>
    </div>
  );
}
