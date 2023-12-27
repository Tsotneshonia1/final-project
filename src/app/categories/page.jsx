import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("There is no data");
  }

  return res.json();
};

async function Categories() {
  const data = await getData();

  return (
    <div className={styles.mainContainer}>
      {data.map((singleCategories) => (
        <Link href={`/categories/${singleCategories.id}`} className={styles.container}>
          <div className={styles.imageContainer}>
            <Image
              src={singleCategories.images[0]}
              alt="categories Image"
              width={400}
              height={200}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{singleCategories.title}</h1>
            <p className={styles.desc}>{singleCategories.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Categories;