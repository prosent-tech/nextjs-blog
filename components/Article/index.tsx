import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";
import RichEditor from "../RichEditor";

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
        <div className={styles.share}>
          <ul className={styles.shareLists}>
            <li className={styles.shareList}>
              <a href="" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://blog.microcms.io/images/icon_x.svg"
                  alt="X"
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li className={styles.shareList}>
              <a href="" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://lab.timee.co.jp/assets/timee/img/common/icon_facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li className={styles.shareList}>
              <a href="" target="_blank" rel="noopener noreferrer">
                <Image
                  src="https://blog.microcms.io/images/icon_hatena.svg"
                  alt="はてなブックマーク"
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li className={styles.shareList}></li>
          </ul>
        </div>
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
                alt="Clock"
              />
              <time dateTime={article.publishedAt}>{article.publishedAt}</time>
            </span>
            <span className={styles.author}>
              <Image
                src="https://blog.microcms.io/images/icon_author.svg"
                width={20}
                height={20}
                alt="Author"
              />
              {article.author}
            </span>
          </div>
          <RichEditor content={article.content} />
        </div>
      </div>
    </article>
  );
}
