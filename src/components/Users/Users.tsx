import React from "react";
import { User } from "../../../types";
import "./Users.css"

type UsersProps = {
  users: User[];
};

const Users: React.FC<UsersProps> = ({ users }) => {
  const headers = ["Name", "Status", "Department", "Country"];

  return (
    <div className="users-page">
      <h1 className="page-title">Users</h1>

      <div className="user-list">
        {headers.map((header) => (
          <div key={header} className="user-header">
            {header}
          </div>
        ))}

        {users.map((user) => (
          <>
            <div className="user-value">{user.name}</div>
            <div className="user-value">{user.status.name}</div>
            <div className="user-value">{user.department.name}</div>
            <div className="user-value">{user.country.name}</div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Users;
