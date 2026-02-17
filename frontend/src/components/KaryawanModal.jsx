import { useEffect, useState } from "react";

export default function KaryawanModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}) {
  const [nama, setNama] = useState("");
  const [jabatan, setJabatan] = useState("");

  useEffect(() => {
    if (initialData) {
      setNama(initialData.nama);
      setJabatan(initialData.jabatan);
    } else {
      setNama("");
      setJabatan("");
    }
  }, [initialData]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white w-96 rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">
          {initialData ? "Edit Karyawan" : "Tambah Karyawan"}
        </h3>

        <div className="space-y-3">
          <input
            type="text"
            placeholder="Nama"
            className="w-full border px-3 py-2 rounded"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
          <input
            type="text"
            placeholder="Jabatan"
            className="w-full border px-3 py-2 rounded"
            value={jabatan}
            onChange={(e) => setJabatan(e.target.value)}
          />
        </div>

        <div className="flex justify-end gap-3 mt-5">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-400 text-white rounded"
          >
            Batal
          </button>
          <button
            onClick={() => onSubmit({ nama, jabatan })}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}
