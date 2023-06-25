import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";

const Card = ({ name, imgUrl, href }) => {
  return (
    <Link className={styles.cardLink} href={href}>
      <div className={`${styles.container} glass`}>
        <div className={styles.cardHeaderWrapper}>
          <h2 className={styles.cardHeader}> {name}</h2>
        </div>
        <div className={styles.cardImageWrapper}>
          <Image
            alt='coffee-image'
            className={styles.cardImage}
            src={imgUrl}
            width={260}
            height={160}
          />
        </div>
      </div>
    </Link>
  );
};

export default Card;
