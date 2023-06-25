"use client";
import Banner from "@/components/Banner";
import styles from "./page.module.css";
import Image from "next/image";
import Card from "@/components/Card";

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
          <Image src='/static/hero-image.png' width={700} height={400} />
        </div>
        <div className={styles.cardLayout}>
          <Card
            className={styles.card}
            href='/coffee-store/darkhorse-coffee'
            imgUrl='/static/hero-image.png'
            name='DarkHorse Coffee'
          />
          <Card
            className={styles.card}
            href='/coffee-store/darkhorse-coffee'
            imgUrl='/static/hero-image.png'
            name='DarkHorse Coffee'
          />

          <Card
            className={styles.card}
            href='/coffee-store/darkhorse-coffee'
            imgUrl='/static/hero-image.png'
            name='DarkHorse Coffee'
          />
          <Card
            className={styles.card}
            href='/coffee-store/darkhorse-coffee'
            imgUrl='/static/hero-image.png'
            name='DarkHorse Coffee'
          />

          <Card
            className={styles.card}
            href='/coffee-store/darkhorse-coffee'
            imgUrl='/static/hero-image.png'
            name='DarkHorse Coffee'
          />

          <Card
            className={styles.card}
            href='/coffee-store/darkhorse-coffee'
            imgUrl='/static/hero-image.png'
            name='DarkHorse Coffee'
          />
        </div>
      </main>
    </div>
  );
}
