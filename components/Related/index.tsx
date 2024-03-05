import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";

export default function Related({ contents }: { contents: any }) {
  if (contents.length === 0) {
    return (
      <div>
        <h1>記事がありません</h1>
      </div>
    );
  }

  return (
    <div className={styles.related}>
      <h1 className={styles.relatedTitle}>関連記事</h1>
      <ul className={styles.list}>
        {contents.map((content: any) => (
          <li key={content.id}>
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
