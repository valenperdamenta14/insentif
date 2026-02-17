import { useNavigate } from "react-router-dom";

export default function NavbarStaff() {
  const navigate = useNavigate();

  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">
      <div>
        <h1 className="font-semibold text-gray-700">
          Dashboard Staff
        </h1>
        <p className="text-sm text-gray-500">
          Periode: Januari 2026
        </p>
      </div>

      <button
        onClick={() => navigate("/login")}
        className="text-sm bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </header>
  );
}
