"use client";

import { Routes, Route } from "react-router-dom";
import EditUser from "@/components/EditUser/EditUser";
import Users from "@/components/Users/Users";
import usersData from "../../data/users.json";

const Index = () => {
  return (
    <Routes>
      <Route path="/edit-user" element={<EditUser />} />
      <Route path="/users" element={<Users users={usersData} />} />
    </Routes>
  );
};

export default Index;
