// frontend/src/pages/Dashboard.js
import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:5000/api/auth/check", {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setMessage("Welcome to Dashboard ✅"))
      .catch(() => setMessage("Unauthorized ❌"));
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>{message}</p>
    </div>
  );
}
