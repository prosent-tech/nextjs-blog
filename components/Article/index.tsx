import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";

export default function Article({ article }: any) {
  article.publishedAt = new Date(article.publishedAt).toLocaleDateString();
  return (
    <article className={styles.content}>
      <div className={styles.ogimageWrap}>
        <picture>
          <source />
          <Image
            src={article.image.url}
            alt={article.title}
            width={article.image.width}
            height={article.image.height}
            className={styles.ogimage}
          />
        </picture>
      </div>

      <ul className={styles.breadcrumb}>
        <li className={styles.breadcrumbList}>
          <Link href="/media">記事一覧</Link>
        </li>
        <li className={styles.breadcrumbList}>
          <Link href={`/media/category/${article.category.id}`}>
            {article.category.name}
          </Link>
        </li>
      </ul>

      <div className={styles.main}>
        <div className={styles.share}></div>
        <div className={styles.container}>
          <h1 className={styles.title}>{article.title}</h1>
          <div className={styles.upper}>
            <span className={styles.category}>{article.category.name}</span>
          </div>
          <div className={styles.meta}>
            <span className={styles.timestamp}>
              <Image
                src="https://blog.microcms.io/images/icon_clock.svg"
                width={20}
                height={20}
                alt=""
              />
              <time dateTime={article.publishedAt}>{article.publishedAt}</time>
            </span>
            <span className={styles.author}>
              <Image
                src="https://blog.microcms.io/images/icon_author.svg"
                width={20}
                height={20}
                alt=""
              />
              {article.author}
            </span>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: `${article.content}` }}
            className={styles.post}
          ></div>
        </div>
      </div>
    </article>
  );
}
