import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen relative flex"
      style={{
        backgroundImage: "url('/bg-landing.jpg')", // ganti nanti
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay biar teks kontras */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Logo kanan atas */}
      <div className="absolute top-6 right-6 z-10">
        <img
          src="/logo.png" // ganti logo kamu
          alt="Logo"
          className="w-28 h-auto bg-white p-2 rounded shadow"
        />
      </div>

      {/* Konten utama */}
      <div className="relative z-10 flex items-center w-full px-20">
        <div className="bg-white/95 backdrop-blur w-[540px] min-h-[280px] rounded-xl shadow-lg flex flex-col items-center justify-center gap-8 px-8">

          <h1 className="text-2xl font-semibold text-center text-gray-800 leading-snug">
            Karyawan Insentif  
            <br />
            CV. Mitra Lestari Plastik
          </h1>

          <button
            onClick={() => navigate("/login")}
            className="px-8 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 hover:scale-105 transition duration-200"
          >
            Mulai
          </button>

        </div>
      </div>
    </div>
  );
}
