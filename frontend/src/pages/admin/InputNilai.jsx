import { useState, useEffect } from "react";
import AdminLayout from "../../layouts/AdminLayout";
import TambahNilaiModal from "../../components/TambahNilaiModal";
import {
  getNilai,
  createNilai,
  updateNilai,
  deleteNilai,
} from "../../services/nilaiService";

export default function InputNilai() {
  const [data, setData] = useState([]);
  const [showTambah, setShowTambah] = useState(false);
  const [editData, setEditData] = useState(null);

  const fetchData = async () => {
    const res = await getNilai();
    setData(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSave = async (form) => {
    await createNilai(form);
    setShowTambah(false);
    fetchData();
  };

  const handleUpdate = async () => {
    await updateNilai(editData.id, editData);
    setEditData(null);
    fetchData();
  };

  const handleDelete = async (id) => {
    await deleteNilai(id);
    fetchData();
  };

  return (
    <AdminLayout>
      <h2 className="text-2xl font-bold mb-6 text-gray-700">
        Data Nilai Karyawan
      </h2>

      <button
        onClick={() => setShowTambah(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        + Tambah Nilai
      </button>

      {/* Modal Tambah */}
      {showTambah && (
        <TambahNilaiModal
          onClose={() => setShowTambah(false)}
          onSave={handleSave}
        />
      )}

      {/* Modal Edit */}
      {editData && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-[500px]">
            <h3 className="text-xl font-semibold mb-4">Edit Nilai</h3>

            <div className="grid grid-cols-2 gap-3">
              {Object.keys(editData).map((key) =>
                key !== "id" ? (
                  <input
                    key={key}
                    name={key}
                    value={editData[key]}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        [key]: e.target.value,
                      })
                    }
                    className="border p-2 rounded"
                  />
                ) : null
              )}
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setEditData(null)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Batal
              </button>
              <button
                onClick={handleUpdate}
                className="bg-yellow-500 text-white px-4 py-2 rounded"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TABEL */}
      <div className="bg-white rounded shadow overflow-x-auto">
        <table className="w-full text-sm text-center">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">No</th>
              <th className="p-3 border">Nama</th>
              <th className="p-3 border">Kehadiran</th>
              <th className="p-3 border">Produktivitas</th>
              <th className="p-3 border">Kualitas</th>
              <th className="p-3 border">Disiplin</th>
              <th className="p-3 border">Kesalahan</th>
              <th className="p-3 border">Penyelesaian</th>
              <th className="p-3 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="p-2 border">{index + 1}</td>
                <td className="p-2 border">{item.nama}</td>
                <td className="p-2 border">{item.kehadiran}</td>
                <td className="p-2 border">{item.produktivitas}</td>
                <td className="p-2 border">{item.kualitas}</td>
                <td className="p-2 border">{item.disiplin}</td>
                <td className="p-2 border">{item.kesalahan}</td>
                <td className="p-2 border">{item.penyelesaian}</td>
                <td className="p-2 border flex justify-center gap-2">
                  <button
                    onClick={() => setEditData(item)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded text-xs"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded text-xs"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}

            {data.length === 0 && (
              <tr>
                <td colSpan="9" className="p-4 text-gray-500">
                  Belum ada data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
