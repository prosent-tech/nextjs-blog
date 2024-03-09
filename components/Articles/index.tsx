import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

export type ArticlesProps = {
  articles: Article[];
  totalCount: number;
};

export type Tag = {
  id: string;
  name: string;
};

export type Article = {
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
  tags: Tag[];
};

export const Articles: React.FC<ArticlesProps> = ({ articles }) => {
  articles.map((article) => {
    article.publishedAt = new Date(article.publishedAt).toLocaleDateString(
      "ja-JP",
      { year: "numeric", month: "2-digit", day: "2-digit" },
    );
  }, []);

  return (
    <div className={styles.articles}>
      <ul className={styles.breadcrumb}>
        <li className={styles.breadcrumbList}>
          <a href="">記事一覧</a>
        </li>
      </ul>
      <ul className={styles.unorderedList}>
        {articles.map((article, index) => (
          <li className={styles.list} key={index}>
            <Link href={`/media/${article.id}`} className={styles.link}>
              <picture>
                <source />
                <Image
                  src={article.image.url}
                  alt="news1"
                  width={1200}
                  height={630}
                  className={styles.ogimage}
                />
              </picture>
              <dl className={styles.content}>
                <dt className={styles.title}>{article.title}</dt>
                <dd>
                  <div className={styles.upper}>
                    <span className={styles.category}>
                      {article.category.name}
                    </span>
                    {article.tags.map((tag) => (
                      <ul className={styles.tag} key={tag.id}>
                        <li>
                          <span>{tag.name}</span>
                        </li>
                      </ul>
                    ))}
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.timestamp}>
                      <Image
                        src="https://blog.microcms.io/images/icon_clock.svg"
                        width={20}
                        height={20}
                        alt=""
                      />
                      <time dateTime={article.publishedAt}>
                        {article.publishedAt}
                      </time>
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
                </dd>
              </dl>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
