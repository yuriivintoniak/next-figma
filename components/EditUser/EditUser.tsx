"use client";

import { useState } from "react";
import { SingleValue } from "react-select";
import { User } from "@/interfaces/user.intarface";
import { UserData } from "@/interfaces/user.intarface";
import styles from "./EditUser.module.css";
import UserSelector from "@/components/UserSelector/UserSelector";
import EditUserForm from "@/components/EditUserForm/EditUserForm";
import ActionButtons from "@/components/ActionButtons/ActionButtons";

function EditUser({ users }: UserData) {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleUserChange = (selectedOption: SingleValue<{ value: string; label: string }>) => {
    const userData = users.find((user) => user.name === selectedOption?.value);
    setSelectedUser(userData || null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.editUserBox}>
        <h1 className={styles.editUserTitle}>
          Edit User
        </h1>
        <UserSelector users={users} onChange={handleUserChange} />
        <EditUserForm user={selectedUser} />
        <ActionButtons />
      </div>
    </div>
  );
}

export default EditUser;
