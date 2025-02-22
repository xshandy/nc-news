import { useState, useEffect } from "react";
import { fetchUsers } from "../api";

function ValidUsers({ selectedUser, setSelectedUser }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers().then((userData) => {
      setUsers(userData);
    });
  }, []);

  return (
    <select
      value={selectedUser || ""}
      onChange={(e) => setSelectedUser(e.target.value)}
      className="select-user"
    >
      <option value="" disabled>
        Select a user
      </option>
      {users.map((user) => (
        <option key={user.username} value={user.username}>
          {user.username}
        </option>
      ))}
    </select>
  );
}

export default ValidUsers;
