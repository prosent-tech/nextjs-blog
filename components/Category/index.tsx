import Link from "next/link";
import styles from "./index.module.css";

export default function Category() {
  return (
    <div className={styles.category}>
      <h1 className={styles.categoryTitle}>カテゴリ一覧</h1>
      <ul>
        <li className={styles.list}>
          <Link href="/news/1" className={styles.link}>
            イソトレチノイン
          </Link>
        </li>
        <li className={styles.list}>
          <Link href="/news/1" className={styles.link}>
            イソトレチノイン
          </Link>
        </li>
        <li className={styles.list}>
          <Link href="/news/1" className={styles.link}>
            イソトレチノイン
          </Link>
        </li>
        <li className={styles.list}>
          <Link href="/news/1" className={styles.link}>
            イソトレチノイン
          </Link>
        </li>
      </ul>
    </div>
  );
}
