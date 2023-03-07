import React from "react";
import { useRouter } from "next/dist/client/router";
import Meta from "../../../components/Meta";
import Image from "next/image";
import Link from "next/link";
import styles from "./Photo.module.css";

const Photo = (props) => {
  const router = useRouter();
  const { isFallback } = useRouter();

  const { id } = router.query;

  console.log(id, isFallback, router.pathname);

  const { title, url } = props.photo;

  console.log(title, url);

  return (
    <>
      <Meta title={id} description={title} />
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <Link href="/photos">
          <Image className={styles.image} src={url} width={600} height={600} alt={title} title={title} />
        </Link>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_end=10");

  const photos = await response.json();

  console.log("getStaticPaths");

  const paths = photos.map((photo) => {
    return {
      params: {
        id: photo.id.toString(),
      },
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${params.id}`);

  const photo = await response.json();

  console.log("getStaticProps");

  return {
    props: {
      photo,
    },
  };
}

export default Photo;
