import { useState } from "react";
import AdminLayout from "../../layouts/AdminLayout";

export default function InputNilai() {
  const [nilai, setNilai] = useState({
    nama: "",
    c1: "",
    c2: "",
    c3: "",
    c4: "",
  });

  const handleSubmit = () => {
    console.log("Data nilai:", nilai);
    alert("Nilai kinerja disimpan (dummy)");
    setNilai({ nama: "", c1: "", c2: "", c3: "", c4: "" });
  };

  return (
    <AdminLayout>
      <h2 className="text-xl font-semibold mb-4">Input Nilai Kinerja</h2>

      <div className="bg-white p-6 rounded shadow w-[500px] space-y-4">
        <input
          placeholder="Nama Karyawan"
          className="w-full border px-3 py-2 rounded"
          value={nilai.nama}
          onChange={(e) => setNilai({ ...nilai, nama: e.target.value })}
        />

        {["c1", "c2", "c3", "c4"].map((c) => (
          <input
            key={c}
            type="number"
            placeholder={`Nilai ${c.toUpperCase()} (%)`}
            className="w-full border px-3 py-2 rounded"
            value={nilai[c]}
            onChange={(e) =>
              setNilai({ ...nilai, [c]: e.target.value })
            }
          />
        ))}

        <button
          onClick={handleSubmit}
          className="w-full bg-green-600 text-white py-2 rounded"
        >
          Simpan Nilai
        </button>
      </div>
    </AdminLayout>
  );
}
