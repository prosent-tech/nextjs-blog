import styles from "./index.module.css";
import Image from "next/image";

export default function Content({ content }: any) {
  return (
    <div className={styles.content}>
      <Image
        src={content.image.url}
        alt={content.title}
        width={content.image.width}
        height={content.image.height}
      />
      <h1 className={styles.title}>{content.title}</h1>
      <p>「{content.category.name}」</p>
      <p className={styles.publishedAt}>{content.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{ __html: `${content.content}` }}
        className={styles.post}
      ></div>
    </div>
  );
}
