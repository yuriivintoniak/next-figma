"use client";

import Select from "react-select";
import { SingleValue } from "react-select";
import { User } from "@/types/user";
import "./UserSelector.css";

export default function UserSelector({
  users,
  onChange,
}: {
  users: User[];
  onChange: (
    selectedOption: SingleValue<{ value: string, label: string }>
  ) => void;
}) {
  const options = users.map((user) => ({ 
    value: user.name, 
    label: user.name,
  }));

  return (
    <div className="container">
      <div className="inputGroup">
        <label htmlFor="user" className="label">
          User
        </label>
        <Select
          id="user"
          options={options}
          onChange={onChange}
          className="selectInput"
          placeholder="Select a name..."
        />
      </div>
    </div>
  );
}
