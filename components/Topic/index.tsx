import Link from "next/link";
import RichEditor from "../RichEditor";
import styles from "./index.module.css";
import Image from "next/image";

export default function Topic({ topic }: any) {
  topic?.map((topic: any) => {
    if (topic.fieldId === "article") {
      topic.article.publishedAt = new Date(
        topic.article.publishedAt,
      ).toLocaleDateString();
    }
  });

  // TODO: カスタムフィールドの種類によって表示を変える
  return (
    <>
      {topic?.map((topic: any, index: any) => (
        <div key={index}>
          {topic?.fieldId === "text" && <p>{topic.text}</p>}
          {topic?.fieldId === "richEditor" && (
            <RichEditor content={topic.richEditor} />
          )}
          {topic?.fieldId === "html" && <RichEditor content={topic.html} />}
          {topic?.fieldId === "article" && (
            <Link href={`/media/${topic.article.id}`} className={styles.link}>
              <picture>
                <source />
                <Image
                  src={topic.article.image.url}
                  alt={topic.article.title}
                  width={1200}
                  height={630}
                  className={styles.ogimage}
                />
              </picture>

              <div>
                <span className={styles.timestamp}>
                  <Image
                    src="https://blog.microcms.io/images/icon_clock.svg"
                    width={20}
                    height={20}
                    alt=""
                  />
                  <time dateTime={topic.article.publishedAt}>
                    {topic.article.publishedAt}
                  </time>
                </span>
                <p className={styles.title}>{topic.article.title}</p>
              </div>
            </Link>
          )}
        </div>
      ))}
    </>
  );
}
