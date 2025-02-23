import ValidUsers from "./ValidUsers";
import { useUser } from "./UserContext";

function UserSelection() {
  const { selectedUser, loginUser, logoutUser } = useUser();
  console.log("UserSelection values:", { selectedUser, loginUser, logoutUser });

  return (
    <div className="User-selection">
      <h2>Select a User</h2>
      <ValidUsers selectedUser={selectedUser} setSelectedUser={loginUser} />
      {selectedUser && (
        <p className="selected-user">
          Logged in as: <strong>{selectedUser}</strong>
        </p>
      )}
      {selectedUser && (
        <button onClick={() => logoutUser()} className="logout-button">
          Log Out
        </button>
      )}
    </div>
  );
}

export default UserSelection;
