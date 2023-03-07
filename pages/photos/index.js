import React from "react";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import Link from "next/link";
import Meta from "../../components/Meta";

import styles from "./Photos.module.css";

function Photos(props) {
  const router = useRouter();

  console.log(router.pathname);

  console.log(props);

  return (
    <>
      <Meta title="Photos" description="Photos page" />
      <ul className={styles.container}>
        {props.photos?.map((photo) => {
          return (
            <li key={photo.id}>
              <Link href={`/photos/${photo.id}`}>
                <Image src={photo.thumbnailUrl} width={150} height={150} title={photo.title} alt={photo.title} />
                <div>{photo.title}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export async function getStaticProps({ params }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`);

  const photos = await response.json();

  console.log("getStaticProps");

  return {
    props: {
      photos,
    },
  };
}

export default Photos;
