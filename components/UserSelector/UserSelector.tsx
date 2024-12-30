"use client";

import Form from "next/form";
import Select from "react-select";
import "./UserSelector.css";

export default function UserSelector() {
  return (
    <div className="container">
      <Form action="">
        <div className="inputGroup">
          <label htmlFor="user" className="label">
            User
          </label>
          <Select
            id="user"
            placeholder="John Doe"
            className="selectInput"
          />
        </div>
      </Form>
    </div>
  );
}
