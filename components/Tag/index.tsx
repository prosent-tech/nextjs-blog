import Link from "next/link";
import styles from "./index.module.css";

export default function Tag() {
  return (
    <div className={styles.tag}>
      <h1 className={styles.tagTitle}>タグ一覧</h1>
      <ul className={styles.unorderedList}>
        <li className={styles.list}>
          <Link href="/news/1" className={styles.link}>
            おでこニキビ
          </Link>
        </li>
        <li className={styles.list}>
          <Link href="/news/1" className={styles.link}>
            ニキビ跡
          </Link>
        </li>
        <li className={styles.list}>
          <Link href="/news/1" className={styles.link}>
            イソトレチノイン
          </Link>
        </li>
        <li className={styles.list}>
          <Link href="/news/1" className={styles.link}>
            化粧水
          </Link>
        </li>
      </ul>
    </div>
  );
}
