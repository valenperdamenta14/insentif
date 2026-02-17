import { useState, useEffect } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import KaryawanModal from "../../components/KaryawanModal";
import {
  getKaryawan,
  tambahKaryawan,
  updateKaryawan,
  hapusKaryawan,
} from "../../services/karyawanService";

export default function DataKaryawan() {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const fetchData = async () => {
    const result = await getKaryawan();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (formData) => {
    if (editData) {
      await updateKaryawan(editData.id_karyawan, formData);
    } else {
      await tambahKaryawan(formData);
    }

    setIsOpen(false);
    setEditData(null);
    fetchData();
  };

  const handleEdit = (item) => {
    setEditData(item);
    setIsOpen(true);
  };

  const handleHapus = async (id) => {
    if (!window.confirm("Yakin ingin hapus?")) return;
    await hapusKaryawan(id);
    fetchData();
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-700">
          Data Karyawan
        </h2>

        <button
          onClick={() => {
            setEditData(null);
            setIsOpen(true);
          }}
          className="bg-blue-600 text-white px-5 py-2 rounded shadow hover:bg-blue-700"
        >
          + Tambah Data
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-4 py-3 border">No</th>
              <th className="px-4 py-3 border">Nama</th>
              <th className="px-4 py-3 border">Jabatan</th>
              <th className="px-4 py-3 border text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-400">
                  Tidak ada data
                </td>
              </tr>
            ) : (
              data.map((k, index) => (
                <tr key={k.id_karyawan} className="hover:bg-gray-50">
                  <td className="px-4 py-3 border">{index + 1}</td>
                  <td className="px-4 py-3 border">{k.nama}</td>
                  <td className="px-4 py-3 border">{k.jabatan}</td>
                  <td className="px-4 py-3 border text-center space-x-2">
                    <button
                      onClick={() => handleEdit(k)}
                      className="bg-yellow-400 text-white px-3 py-1 rounded text-xs"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleHapus(k.id_karyawan)}
                      className="bg-red-500 text-white px-3 py-1 rounded text-xs"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <KaryawanModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleSubmit}
        initialData={editData}
      />
    </AdminLayout>
  );
}
