import StaffLayout from "../../layouts/StaffLayout";

export default function DashboardStaff() {
  // dummy data staff login
  const staff = {
    nama: "Andi",
    periode: "Januari 2026",
    yi: 0.9623,
    kategori: "Sangat Baik",
  };

  return (
    <StaffLayout>
      <div className="grid grid-cols-3 gap-6 mb-8">
        <Card title="Nama Karyawan" value={staff.nama} />
        <Card title="Periode" value={staff.periode} />
        <Card title="Kategori Insentif" value={staff.kategori} />
      </div>

      <div className="bg-white p-6 rounded shadow w-[500px]">
        <h3 className="font-semibold mb-4">Detail Insentif</h3>

        <table className="w-full text-sm">
          <tbody>
            <tr>
              <td className="py-2">Nilai Yi</td>
              <td className="py-2 font-semibold">
                {staff.yi.toFixed(4)}
              </td>
            </tr>
            <tr>
              <td className="py-2">Kategori</td>
              <td className="py-2">{staff.kategori}</td>
            </tr>
            <tr>
              <td className="py-2">Status</td>
              <td className="py-2 text-green-600">
                Disetujui
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </StaffLayout>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white p-5 rounded shadow">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-xl font-semibold mt-2">{value}</h3>
    </div>
  );
}
