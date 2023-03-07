import React from "react";

import styles from "./Nav.module.css";

import Link from "next/link";

export default function Nav() {
  return (
    <div className={styles.container}>
      <Link className={styles.link} href="/">
        Home
      </Link>
      <Link className={styles.link} href="/photos">
        Photos
      </Link>
      <Link className={styles.link} href="/rendering">
        Rendering
      </Link>
      <Link className={styles.link} href="/about">
        About
      </Link>
      <Link className={styles.link} href="/error">
        Error
      </Link>
    </div>
  );
}
