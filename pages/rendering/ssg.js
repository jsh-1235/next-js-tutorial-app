import React from "react";
import Link from "next/link";
import Meta from "../../components/Meta";
import styles from "./Rendering.module.css";

function SSG({ posts }) {
  return (
    <div className={styles.content}>
      <Meta title="ssg" description="Static Site Generation" />
      <div className={styles.title}>
        <Link href="/rendering" style={{ fontSize: "inherit" }}>
          SSG
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

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts = await response.json();

  // console.log(posts);

  return {
    props: {
      posts,
    },
  };
}

export default SSG;
