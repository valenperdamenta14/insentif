import StaffLayout from "../../layouts/StaffLayout";

export default function DashboardStaff() {
  const staff = {
    nama: "Nurul ",
    total: "20",
    periode: "Januari 2026",
  };

  return (
    <StaffLayout>
      <div className="grid grid-cols-3 gap-6 mb-8">
        <Card title="Nama Karyawan" value={staff.nama} />
        <Card title="Total Karyawan" value={staff.total} />
        <Card title="Periode" value={staff.periode} />
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
