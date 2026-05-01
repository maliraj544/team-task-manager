import { useState } from "react";

function App() {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const API = "https://team-task-manager-production-bd3f.up.railway.app";

  const login = async () => {
    const res = await fetch(`${API}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    setToken(data.token);
    alert("Logged in!");
  };

  const createProject = async () => {
    await fetch(`${API}/api/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        name: "Frontend Project",
        description: "From UI"
      })
    });
    alert("Project created!");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Team Task Manager</h2>

      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <br />
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
      <br />
      <button onClick={login}>Login</button>

      <hr />

      <button onClick={createProject}>Create Project</button>
    </div>
  );
}

export default App;