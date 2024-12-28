"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();

  const getClassName = (path: string) => {
    return `${styles.link} ${pathname === path ? styles.active : ""}`;
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/edit-user" className={getClassName("/edit-user")}>
          Edit User
        </Link>
        <Link href="/users" className={getClassName("/users")}>
          Users
        </Link>
      </nav>
    </header>
  );
}
