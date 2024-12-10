import React, { useState } from "react";
import Link from "next/link";
import "./Header.css";

const Header: React.FC = () => {
  const [active, setActive] = useState<string>("");

  return (
    <header className="header">
      <div className="nav">
        <Link href="/edit-user">
          <button
            onClick={() => setActive("edit-user")}
            className={`button ${active === "edit-user" ? "active" : ""}`}
          >
            Edit User
          </button>
        </Link>
        <Link href="/users">
          <button
            onClick={() => setActive("users")}
            className={`button ${active === "users" ? "active" : ""}`}
          >
            Users
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
