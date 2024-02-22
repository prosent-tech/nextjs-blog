import Link from "next/link";
import styles from "./index.module.css";

export default function Tag({ tag }: { tag: any }) {
  return (
    <div className={styles.tag}>
      <h1 className={styles.tagTitle}>タグ一覧</h1>
      <ul className={styles.unorderedList}>
        {tag.map((tag: any) => (
          <li className={styles.list} key={tag.id}>
            <Link href={`/media/tag/${tag.id}`} className={styles.link}>
              {tag.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
