import { NavLink } from "react-router-dom";

const menu = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Data Karyawan", path: "/karyawan" },
  { name: "Data Kriteria", path: "/kriteria" },
  { name: "Input Nilai", path: "/input-nilai" },
  { name: "Perhitungan MOORA", path: "/moora" },
  { name: "Hasil Insentif", path: "/hasil" },
  { name: "Laporan", path: "/laporan" },
];

export default function SidebarAdmin() {
  return (
    <aside className="w-64 bg-blue-700 text-white flex flex-col">
      <div className="p-5 text-xl font-semibold border-b border-blue-600">
        Admin Panel
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded transition ${
                isActive
                  ? "bg-blue-900"
                  : "hover:bg-blue-600"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
