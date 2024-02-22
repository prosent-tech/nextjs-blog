import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";

export default function Ranking() {
  return (
    <div className={styles.ranking}>
      <h1 className={styles.rankingTitle}>人気の記事</h1>
      <ul className={styles.list}>
        <li>
          <Link href="/media/1" className={styles.link}>
            <picture>
              <source />
              <Image
                src="https://images.blog.microcms.io/assets/f5d83e38f9374219900ef1b0cc4d85cd/50040d5d7c2e41b1a5ec9b0c313cb498/0430-01.png?w=560&fm=webp"
                alt="news1"
                width={1200}
                height={630}
                className={styles.ogimage}
              />
            </picture>
            <p className={styles.title}>
              イソトレチノインって何？その効果をご紹介します
            </p>
          </Link>
        </li>
        {/*  */}
        <li>
          <Link href="/media/1" className={styles.link}>
            <picture>
              <source />
              <Image
                src="https://images.blog.microcms.io/assets/f5d83e38f9374219900ef1b0cc4d85cd/50040d5d7c2e41b1a5ec9b0c313cb498/0430-01.png?w=560&fm=webp"
                alt="news1"
                width={1200}
                height={630}
                className={styles.ogimage}
              />
            </picture>
            <p className={styles.title}>
              イソトレチノインって何？その効果をご紹介します
            </p>
          </Link>
        </li>
        <li>
          <Link href="/media/1" className={styles.link}>
            <picture>
              <source />
              <Image
                src="https://images.blog.microcms.io/assets/f5d83e38f9374219900ef1b0cc4d85cd/50040d5d7c2e41b1a5ec9b0c313cb498/0430-01.png?w=560&fm=webp"
                alt="news1"
                width={1200}
                height={630}
                className={styles.ogimage}
              />
            </picture>
            <p className={styles.title}>
              イソトレチノインって何？その効果をご紹介します
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
}
