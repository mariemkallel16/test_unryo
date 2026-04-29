import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/users/";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // GET users
  const fetchUsers = async () => {
    try {
      const res = await axios.get(API_URL);
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // POST user
  const addUser = async () => {
    if (!name || !email) return;

    try {
      await axios.post(API_URL, { name, email });
      setName("");
      setEmail("");
      fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  // DELETE user
  const deleteUser = async (id) => {
    try {
      await axios.delete(`${API_URL}${id}`);
      fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Unryo Users</h1>

      <h2>Add User</h2>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={addUser}>Add</button>

      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;