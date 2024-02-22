import Link from "next/link";
import styles from "./index.module.css";

export default function Category({ category }: any) {
  return (
    <div className={styles.category}>
      <h1 className={styles.categoryTitle}>カテゴリ一覧</h1>
      <ul>
        {category.map((category: any) => (
          <li className={styles.list} key={category.id}>
            <Link
              href={`/media/category/${category.id}`}
              className={styles.link}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
