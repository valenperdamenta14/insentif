import { useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";

export default function DataKaryawan() {
  const [data, setData] = useState([
    { id: 1, nama: "Andi", jabatan: "Operator" },
    { id: 2, nama: "Budi", jabatan: "Staff Produksi" },
  ]);

  const [nama, setNama] = useState("");
  const [jabatan, setJabatan] = useState("");

  const tambahData = () => {
    if (!nama || !jabatan) return alert("Lengkapi data");
    setData([...data, { id: Date.now(), nama, jabatan }]);
    setNama("");
    setJabatan("");
  };

  return (
    <AdminLayout>
      <h2 className="text-xl font-semibold mb-4">Data Karyawan</h2>

      {/* form */}
      <div className="bg-white p-4 rounded shadow mb-6 flex gap-4">
        <input
          placeholder="Nama"
          className="border px-3 py-2 rounded w-1/3"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <input
          placeholder="Jabatan"
          className="border px-3 py-2 rounded w-1/3"
          value={jabatan}
          onChange={(e) => setJabatan(e.target.value)}
        />
        <button
          onClick={tambahData}
          className="bg-blue-600 text-white px-4 rounded"
        >
          Tambah
        </button>
      </div>

      {/* table */}
      <table className="w-full bg-white rounded shadow text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Nama</th>
            <th className="p-2 border">Jabatan</th>
          </tr>
        </thead>
        <tbody>
          {data.map((k) => (
            <tr key={k.id}>
              <td className="p-2 border">{k.nama}</td>
              <td className="p-2 border">{k.jabatan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}
