import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import Pagination from "../Pagination";

export type ContentsProps = {
  contents: Content[];
  totalCount: number;
};

export type Tag = {
  id: string;
  name: string;
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
  tags: Tag[];
};

export const Contents: React.FC<ContentsProps> = ({ contents, totalCount }) => {
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
            <Link href={`/media/${content.id}`} className={styles.link}>
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
                    {content.tags.map((tag) => (
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
      <Pagination totalCount={totalCount} />
    </div>
  );
};
