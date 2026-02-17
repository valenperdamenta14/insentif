import { useState } from "react";

export default function TambahNilaiModal({ onClose, onSave }) {
  const [form, setForm] = useState({
    nama: "",
    kehadiran: "",
    produktivitas: "",
    kualitas: "",
    disiplin: "",
    kesalahan: "",
    penyelesaian: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    onSave(form);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-[500px]">
        <h3 className="text-xl font-semibold mb-4">Tambah Nilai</h3>

        <div className="grid grid-cols-2 gap-3">
          <input name="nama" placeholder="Nama" className="border p-2 rounded" onChange={handleChange} />
          <input name="kehadiran" type="number" placeholder="Kehadiran" className="border p-2 rounded" onChange={handleChange} />
          <input name="produktivitas" type="number" placeholder="Produktivitas" className="border p-2 rounded" onChange={handleChange} />
          <input name="kualitas" type="number" placeholder="Kualitas" className="border p-2 rounded" onChange={handleChange} />
          <input name="disiplin" type="number" placeholder="Disiplin" className="border p-2 rounded" onChange={handleChange} />
          <input name="kesalahan" type="number" placeholder="Kesalahan" className="border p-2 rounded" onChange={handleChange} />
          <input name="penyelesaian" type="number" placeholder="Penyelesaian" className="border p-2 rounded" onChange={handleChange} />
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={onClose}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Batal
          </button>
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}
