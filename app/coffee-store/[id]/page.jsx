"use client";
import Link from "next/link";
import React from "react";
import coffeeStoreData from "../../../data/coffee-store.json";
import styles from "./coffee-store.module.css";
import Image from "next/image";

const CoffeeStore = ({ params }) => {
  const store = coffeeStoreData.find(res => {
    return res.id.toString() === params.id;
  });

  // console.log("coffeeStore", store);
  const handledVote = () => {
    console.log("handledVote");
  };

  const { name, imgUrl, address, neighbourhood } = store;
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href='/'>← Back to home</Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          <Image
            // style={{ objectFit: "contain" }}
            width={600}
            height={360}
            alt={name}
            src={`${imgUrl}`}
            className={styles.storeImg}
          />
        </div>
        <div className={`glass ${styles.col2}`}>
          <div className={styles.iconWrapper}>
            <Image
              src='/icons/places.svg'
              alt='icon-places'
              width={24}
              height={24}
            />
            <p className={styles.text}>{address}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src='/icons/nearMe.svg'
              alt='icon-nearme'
              width={24}
              height={24}
            />
            <p className={styles.text}>{neighbourhood}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src='/icons/star.svg'
              alt='icon-star'
              width={24}
              height={24}
            />
            <p className={styles.text}>19</p>
          </div>
          <button className={styles.upvoteButton} onClick={handledVote}>
            Up vote!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeStore;
