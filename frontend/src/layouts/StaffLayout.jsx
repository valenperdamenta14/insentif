import NavbarStaff from "../components/NavbarStaff";
import SidebarStaff from "../components/SidebarStaff";

export default function StaffLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <SidebarStaff />

      <div className="flex-1 flex flex-col">
        <NavbarStaff />
      
          <main className="p-6">
            {children}
          </main>
      </div>
    </div>
  );
}
