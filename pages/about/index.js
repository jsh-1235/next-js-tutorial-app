import React from "react";
import Link from "next/link";
import Meta from "../../components/Meta";
import styles from "./About.module.css";

export default function about() {
  return (
    <>
      <Meta title="About" description="About page" />
      <div className={styles.wrapper}>
        <header className={styles.header}>Header</header>
        <main className={styles.main}>
          <aside className={styles.aside}>Aside</aside>
          <section className={styles.contents}>Contents</section>
        </main>
        <footer className={styles.footer}>
          <Link href="/">Footer</Link>
        </footer>
      </div>
    </>
  );
}
