import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";
import { renderToc } from "../../libs/render-toc";
import TableOfContents from "../TableOfContents/tableOfContents";
import { useEffect, useState } from "react";
import Topic from "../Topic";

export default function Article({ article }: any) {
  article.publishedAt = new Date(article.publishedAt).toLocaleDateString(
    "ja-JP",
    { year: "numeric", month: "2-digit", day: "2-digit" },
  );

  const [toc, setToc] = useState([] as any[]);
  useEffect(() => {
    var body = "";
    article.topic?.map((topic: any) => {
      if (topic.fieldId === "richEditor") {
        body += topic.richEditor;
        const toc = renderToc(body);
        setToc(toc);
      }
    });
  }, [article.topic]);

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
              <a
                href={`http://twitter.com/share?url=${process.env.NEXT_PUBLIC_APP_URL}/media/${article.id}&text=${article.title}&via=Mimipo_Clinic&hashtags=Mimipoオンラインクリニック`}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <Image
                  src="https://blog.microcms.io/images/icon_x.svg"
                  alt="X"
                  width={32}
                  height={32}
                />
              </a>
            </li>
            <li className={styles.shareList}>
              <a
                href={`http://www.facebook.com/share.php?u=${process.env.NEXT_PUBLIC_APP_URL}/media/${article.id}`}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <Image
                  src="https://lab.timee.co.jp/assets/timee/img/common/icon_facebook.svg"
                  alt="Facebook"
                  width={32}
                  height={32}
                />
              </a>
            </li>
            <li className={styles.shareList}>
              <a
                href={`https://social-plugins.line.me/lineit/share?url=${process.env.NEXT_PUBLIC_APP_URL}/media/${article.id}`}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <Image
                  src="https://lab.timee.co.jp/assets/timee/img/common/icon_line.svg"
                  alt="LINE"
                  width={32}
                  height={32}
                />
              </a>
            </li>
            <li className={styles.shareList}>
              <a
                href={`http://b.hatena.ne.jp/entry/s/${process.env.NEXT_PUBLIC_APP_URL}/media/${article.id}`}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <Image
                  src="https://blog.microcms.io/images/icon_hatena.svg"
                  alt="はてなブックマーク"
                  width={32}
                  height={32}
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
            {article.author != undefined && (
              <span className={styles.author}>
                <Image
                  src="https://blog.microcms.io/images/icon_author.svg"
                  width={20}
                  height={20}
                  alt="Author"
                />
                {article.author}
              </span>
            )}
          </div>
          {article.topic !== null && <TableOfContents toc={toc} />}
          <Topic topic={article.topic} />
        </div>
      </div>
    </article>
  );
}
