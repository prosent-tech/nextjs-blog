import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";

export default function Ranking({ contents }: { contents: any }) {
  return (
    <div className={styles.ranking}>
      <h4 className={styles.rankingTitle}>人気の記事</h4>
      <ul className={styles.unorderedList}>
        {contents.map((content: any) => (
          <li className={styles.list} key={content.id}>
            <Link href={`/media/${content.id}`} className={styles.link}>
              <picture>
                <source />
                <Image
                  src={content.image.url}
                  alt={content.title}
                  width={1200}
                  height={630}
                  className={styles.ogimage}
                />
              </picture>
              <p className={styles.title}>{content.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
