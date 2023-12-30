"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Purchase = ({ params }) => {
  const [purchaseItem, setpurchaseItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imgCounter, setImgCounter] = useState(0);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${params.id}`)
      .then((response) => response.json())
      .then((json) => {
        setpurchaseItem(json);
        setLoading(false);
      });
  }, []);

  const handleNextImage = () => {
    if (imgCounter == 2) {
      return;
    } else {
      setImgCounter(imgCounter + 1);
    }
  };

  const handlePrevImage = () => {
    if (imgCounter == 0) {
      return;
    } else {
      setImgCounter(imgCounter - 1);
    }
  };
  return (
    <div className={styles.container}>
      {loading && <div>please wait...</div>}
      {purchaseItem && (
        <div>
          <div className={styles.top}>
            <div className={styles.info}>
              <h1 className={styles.title}>{purchaseItem.title}</h1>
              <p className={styles.desc}>{purchaseItem.description}</p>
              <div className={styles.author}>
                <Image
                  src={purchaseItem.category.image}
                  alt="image"
                  width={40}
                  height={40}
                  className={styles.avatar}
                />
                <span className={styles.username}>{purchaseItem.name}</span>
              </div>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src={purchaseItem.images[imgCounter]}
                alt=""
                fill={true}
                className={styles.image}
              />
              <button
                onClick={handlePrevImage}
                className={`${styles.imgButton} ${styles.prevButton}`}
              >
                წინა ფოტო
              </button>
              <button
                onClick={handleNextImage}
                className={`${styles.imgButton} ${styles.nextButton}`}
              >
                შემდეგი ფოტო
              </button>
            </div>
          </div>
          <div className={styles.content}>
            <p className={styles.text}>${purchaseItem.price}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Purchase;
