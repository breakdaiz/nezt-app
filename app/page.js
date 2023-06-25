"use client";
import Banner from "@/components/Banner";
import styles from "./page.module.css";
import Image from "next/image";
import Card from "@/components/Card";
import coffee_stores from "../data/coffee-store.json";

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log("btn click ");
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Banner
          handleOnClick={handleOnBannerBtnClick}
          buttonText='View stores nearby'
        />
        <div className={styles.heroImage}>
          <Image
            alt='banner'
            src='/static/hero-image.png'
            width={700}
            height={400}
          />
        </div>
        {coffee_stores.length > 0 && (
          <>
            <h2 className={styles.heading2}>Toronto stores</h2>
            <div className={styles.cardLayout}>
              {coffee_stores.map(res => (
                <Card
                  key={res.id}
                  className={styles.card}
                  href={`/coffee-store/${res.id}`}
                  imgUrl={res.imgUrl}
                  name={res.name}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
