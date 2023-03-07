import React from "react";
import Link from "next/link";
import Meta from "../../components/Meta";
import styles from "./Rendering.module.css";

function SSR({ posts }) {
  return (
    <div className={styles.content}>
      <Meta title="ssr" description="Sever Side Rendering" />
      <div className={styles.title}>
        <Link href="/rendering" style={{ fontSize: "inherit" }}>
          SSR
        </Link>
      </div>
      <div className={styles.list}>
        <ul>
          {posts?.map((post) => {
            return (
              <li key={post.id}>
                <Link className={styles.a} href={`/posts/${post.id}`}>
                  {post.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts = await response.json();

  // console.log(posts);

  return {
    props: {
      posts,
    },
  };
}

export default SSR;
