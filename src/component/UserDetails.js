import React from "react";
import data from "../data/userData.json";
import "./UserDetails.css";
import { selectlogin } from "../features/counter/loginSlice";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function UserDetails() {
  let loggedin = useSelector(selectlogin);
  const history = useHistory();
  loggedin = window.sessionStorage.getItem("login")
    ? window.sessionStorage.getItem("login")
    : loggedin;
  return (
    <div>
      {loggedin ? (
        <div className="users">
          <div className="users__header">
            <h1>User Details</h1>
          </div>
          <div className="users__body">
            <table className="userTable">
              <thead>
                <tr>
                  <th>SNO</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Mail</th>
                  <th>PhoneNo</th>
                </tr>
              </thead>
              <tbody>
                {data.users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.gender}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneNo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        history.push("/")
      )}
    </div>
  );
}

export default UserDetails;
