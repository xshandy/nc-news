import { createContext, useState, useContext } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [selectedUser, setSelectedUser] = useState(
    localStorage.getItem("selectedUser") || ""
  );

  const loginUser = (username) => {
    setSelectedUser(username);
    localStorage.setItem("selectedUser", username);
  };

  const logoutUser = () => {
    setSelectedUser("");
    localStorage.removeItem("selectedUser");
  };

  return (
    <UserContext.Provider value={{ selectedUser, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  return useContext(UserContext);
}

export { UserProvider, useUser };
