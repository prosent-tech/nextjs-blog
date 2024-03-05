import styles from "./index.module.css";
import Link from "next/link";

export default function TableOfContents({ toc }: any) {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>目次</h4>
      <ul className={styles.lists}>
        {toc.map((data: any) => (
          <li
            key={data.id}
            className={`${styles.list} ${data.name == "h2" ? styles.listH2 : ""} ${data.name == "h3" ? styles.listH3 : ""}`}
          >
            <Link href={`#${data.id}`}>{data.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
