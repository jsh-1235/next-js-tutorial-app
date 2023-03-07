import React from "react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import Meta from "../../components/Meta";
import styles from "./Posts.module.css";

function Header(props) {
  const color = "#afe3c0";

  return (
    <>
      <style jsx>
        {`
          div {
            height: 100%;
            font-size: 2rem;
            background-color: ${color};
            color: white;
            text-align: center;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            padding: 20px;
          }
        `}
      </style>
      <div>{props.id}</div>
    </>
  );
}

const Posts = (props) => {
  const router = useRouter();
  const { isFallback } = useRouter();

  const { id } = router.query;

  console.log(id, isFallback, router.pathname);

  // console.log(props);

  const handleBack = (e, path) => {
    console.log(e.target, path);

    e.preventDefault();

    // router.back();
  };

  return (
    <>
      <Meta title={id} description={props.post.title} />
      <div className={styles.container}>
        <Header id={props.post.title} />
        <section className={styles.contents}>{props.post.body}</section>
        <footer className={styles.footer}>
          <Link href="#" onClick={(e) => handleBack(e, "/")}>
            Back
          </Link>
        </footer>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts = await response.json();

  console.log("getStaticPaths");

  const paths = posts.map((post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

  const post = await response.json();

  console.log("getStaticProps");

  return {
    props: {
      post,
    },
  };
}

export default Posts;

// 동적 라우팅 (Dynamic Routing)
