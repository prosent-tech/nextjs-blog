import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";

export default function Content({ content }: any) {
  content.publishedAt = new Date(content.publishedAt).toLocaleDateString();
  return (
    <article className={styles.content}>
      <div className={styles.ogimageWrap}>
        <picture>
          <source />
          <Image
            src={content.image.url}
            alt={content.title}
            width={content.image.width}
            height={content.image.height}
            className={styles.ogimage}
          />
        </picture>
      </div>
      {/* パンクズ */}
      <ul className={styles.breadcrumb}>
        <li className={styles.breadcrumbList}>
          <Link href="/media">記事一覧</Link>
        </li>
        <li className={styles.breadcrumbList}>
          <Link href={`/media/category/${content.category.id}`}>{content.category.name}</Link>
        </li>
      </ul>

      <div className={styles.main}>
        <div className={styles.share}></div>
        <div className={styles.container}>
          {/* タイトル & 詳細 */}
          <h1 className={styles.title}>{content.title}</h1>
          <div className={styles.upper}>
            <span className={styles.category}>{content.category.name}</span>
          </div>
          <div className={styles.meta}>
            <span className={styles.timestamp}>
              <Image
                src="https://blog.microcms.io/images/icon_clock.svg"
                width={20}
                height={20}
                alt=""
              />
              <time dateTime={content.publishedAt}>{content.publishedAt}</time>
            </span>
            <span className={styles.author}>
              <Image
                src="https://blog.microcms.io/images/icon_author.svg"
                width={20}
                height={20}
                alt=""
              />
              {content.author}
            </span>
          </div>
          {/* 目次 */}

          {/* Wrapper */}
          <div
            dangerouslySetInnerHTML={{ __html: `${content.content}` }}
            className={styles.post}
          ></div>
        </div>
      </div>
    </article>
  );
}
