import React from "react";
import Link from "next/link";
import Meta from "../../components/Meta";
import styles from "./Rendering.module.css";

export default function Rendering() {
  return (
    <>
      <Meta title="Rendering" description="Rendering page" />
      <div className={styles.container}>
        <Link className={styles.link} href="/rendering/ssg">
          SSG
        </Link>
        <Link className={styles.link} href="/rendering/ssr">
          SSR
        </Link>
        <Link className={styles.link} href="/rendering/csr">
          CSR
        </Link>
      </div>
    </>
  );
}
