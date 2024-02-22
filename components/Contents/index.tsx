import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

export type ContentsProps = {
  contents: Content[];
};

export type Content = {
  id: string;
  title: string;
  subtitle: string;
  publishedAt: string;
  author: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
  category: {
    id: string;
    name: string;
  };
};

export const Contents: React.FC<ContentsProps> = ({ contents }) => {
  contents.map((content) => {
    content.publishedAt = new Date(content.publishedAt).toLocaleDateString();
  }, []);

  return (
    <div className={styles.contents}>
      <ul className={styles.breadcrumb}>
        <li className={styles.breadcrumbList}>
          <a href="">記事一覧</a>
        </li>
      </ul>
      <ul className={styles.unorderedList}>
        {contents.map((content, index) => (
          <li className={styles.list} key={index}>
            <Link href={`/news/${content.id}`} className={styles.link}>
              <picture>
                <source />
                <Image
                  src={content.image.url}
                  alt="news1"
                  width={1200}
                  height={630}
                  className={styles.ogimage}
                />
              </picture>
              <dl className={styles.content}>
                <dt className={styles.title}>{content.title}</dt>
                <dd>
                  <div className={styles.upper}>
                    <span className={styles.category}>
                      {content.category.name}
                    </span>
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.timestamp}>
                      <Image
                        src="https://blog.microcms.io/images/icon_clock.svg"
                        width={20}
                        height={20}
                        alt=""
                      />
                      <time dateTime={content.publishedAt}>
                        {content.publishedAt}
                      </time>
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
                </dd>
              </dl>
            </Link>
          </li>
        ))}
      </ul>
      {/* ページネーション */}
      <div className={styles.pagination}>
        <ul className={styles.pager}>
          <li className={`${styles.page} ${styles.active}`}>
            <Link href="/news/1">1</Link>
          </li>
          <li className={styles.page}>
            <Link href="/news/1">2</Link>
          </li>
          <li className={styles.page}>
            <Link href="/news/1">3</Link>
          </li>
          <li className="omission">...</li>
          <li className={styles.page}>
            <Link href="/news/1">38</Link>
          </li>
          <li className={`${styles.page} ${styles.arrow}`}>
            <Link href="/news/1">
              <Image
                src="https://blog.microcms.io/images/icon_arrow_right.svg"
                width="20"
                height="24"
                alt=""
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
