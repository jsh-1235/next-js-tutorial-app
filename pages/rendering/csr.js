import React, { useState, useEffect } from "react";
import Link from "next/link";
import Meta from "../../components/Meta";
import styles from "./Rendering.module.css";

import axios from "axios";

function CSR(props) {
  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const posts = await response.json();

    setPosts(posts);
  };

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log(props);

    // getPosts();

    setPosts(props.posts);
  }, [props]);

  useEffect(() => {
    // console.log(posts);
  }, [posts]);

  return (
    <div className={styles.content}>
      <Meta title="csr" description="Client Side Rendering" />
      <div className={styles.title}>
        <Link href="/rendering" style={{ fontSize: "inherit" }}>
          CSR
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

CSR.getInitialProps = async function () {
  console.log("getInitialProps");

  const result = await axios.get("https://jsonplaceholder.typicode.com/posts");

  return {
    posts: result.data,
  };
};

export default CSR;
