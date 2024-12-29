"use client";

import Form from "next/form";
import Select from "react-select";
import styles from "./EditUserForm.module.css";

export default function EditUserForm() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        User Information
      </h2>

      <Form action="" className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="fullName" className={styles.label}>
            Full Name
          </label>
          <input 
            type="text"
            id="fullName"
            placeholder="John Doe"
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="department" className={styles.label}>
            Department
          </label>
          <Select
            id="department"
            placeholder="Digital Marketing"
            className={styles.selectInput}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="country" className={styles.label}>
            Country
          </label>
          <Select
            id="country"
            placeholder="United States"
            className={styles.selectInput}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="status" className={styles.label}>
            Status
          </label>
          <Select
            id="status"
            placeholder="Active"
            className={styles.selectInput}
          />
        </div>
      </Form>
    </div>
  );
}
