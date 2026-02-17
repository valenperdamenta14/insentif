import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import DataKaryawan from "./pages/admin/DataKaryawan";
import InputNilai from "./pages/admin/InputNilai";
import PerhitunganMoora from "./pages/admin/PerhitunganMoora";
import HasilInsentif from "./pages/admin/HasilInsentif";
import DataKriteria from "./pages/admin/DataKriteria";
import Laporan from "./pages/admin/Laporan";
import DashboardStaff from "./pages/staff/DashboardStaff";
import InsentifSaya from "./pages/staff/InsentifSaya";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />

        {/* admin */}
        <Route path="/dashboard" element={<DashboardAdmin />} />
        <Route path="/karyawan" element={<DataKaryawan />} />
        <Route path="/input-nilai" element={<InputNilai />} />
        <Route path="/moora" element={<PerhitunganMoora />} />
        <Route path="/hasil" element={<HasilInsentif />} />
        <Route path="/kriteria" element={<DataKriteria />} />
        <Route path="/laporan" element={<Laporan />} />

        {/* staff */}
        <Route path="/dashboardstaff" element={<DashboardStaff />} />
        <Route path="/insentif-saya" element={<InsentifSaya />} />
      </Routes>
    </BrowserRouter>
  );
}
