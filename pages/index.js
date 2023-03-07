import React from "react";
import Meta from "../components/Meta";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Meta title="Home" description="Home page" />
      Home
    </div>
  );
}
