import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { allUsersRequest, searchUsersRequest } from "../api";
import { useAuth } from "../hooks";

import styles from "../styles/user.module.css";

function User() {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const auth = useAuth();
  useEffect(() => {
    if (!searchText) {
      getAllUsers();
    }
  }, [users]);

  const getAllUsers = async () => {
    const res = await allUsersRequest();
    if (res.success) {
      setUsers(res.data.usersList);
    }
  };

  const getSearchedUsers = async (username) => {
    const res = await searchUsersRequest(username);
    if (res.success) {
      setUsers(res.data.usersList);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchText) {
      getAllUsers();
      return;
    }
    getSearchedUsers(searchText);
  };

  if (auth.user == null) {
    return <Navigate to="/login" />;
  }
  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            className={styles.searchInput}
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            placeholder="Search User"
          />
          <input type="submit" className={styles.searchButton} value="Search" />
        </form>
      </div>
      <div>
        {users.map((user, index) => {
          return (
            <div className={styles.userWrapper} key={index}>
              <img src="./assets/profile.png" width="90" height="90" />
              <div className={styles.userDetails}>
                <p>Name : {user.name}</p>
                <p>Username : {user.username}</p>
                <p>Email : {user.email}</p>
                <p>Contact : {user.contact}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default User;
