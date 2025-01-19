"use client";

import { useState } from "react";
import { SingleValue } from "react-select";
import { User } from "@/types/user";
import users from "@/data/users.json";
import UserSelector from "@/components/UserSelector/UserSelector";
import EditUserForm from "@/components/EditUserForm/EditUserForm";
import ActionButtons from "@/components/ActionButtons/ActionButtons";

export default function EditUser() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleUserChange = (selectedOption: SingleValue<{ value: string; label: string }>) => {
    const userData = users.find((user) => user.name === selectedOption?.value);
    setSelectedUser(userData || null);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border-2 border-solid border-gray-300">
        <h1 className="text-xl font-medium text-center my-16 uppercase">
          Edit User
        </h1>
        <UserSelector users={users} onChange={handleUserChange} />
        <EditUserForm user={selectedUser} />
        <ActionButtons />
      </div>
    </div>
  );
}
