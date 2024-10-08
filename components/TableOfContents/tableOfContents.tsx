import styles from "./index.module.css";

export default function TableOfContents({ toc }: any) {
  return (
    <div className={styles.tableOfContents}>
      <p className={styles.title}>目次</p>
      <ul className={styles.lists}>
        {toc.map((data: any) => (
          <li
            key={data.id}
            className={`${styles.list} ${data.name == "h2" ? styles.listH2 : ""} ${data.name == "h3" ? styles.listH3 : ""}`}
          >
            <a href={`#${data.id}`} title={data.text}>
              {data.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
