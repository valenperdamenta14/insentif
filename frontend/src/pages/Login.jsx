import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Username dan password wajib diisi");
      return;
    }

    // 🔹 SIMULASI ROLE
    const role = username === "admin" ? "admin" : "staff";

    // simpan ke localStorage
    localStorage.setItem(
      "user",
      JSON.stringify({
        username,
        role,
      })
    );

    // 🔹 ROLE-BASED REDIRECT
    if (role === "admin") {
      navigate("/dashboard");
    } else {
      navigate("/dashboardstaff");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow w-[360px]"
      >
        <h1 className="text-xl font-semibold mb-4 text-center">
          Login
        </h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full border px-3 py-2 rounded mb-3"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border px-3 py-2 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Login
        </button>

        <p className="text-xs text-gray-500 mt-3 text-center">
          login sebagai <b>admin</b> atau <b>staff</b>
        </p>
      </form>
    </div>
  );
}
