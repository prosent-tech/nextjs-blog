import { client } from "../../libs/microcms";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await client.get({
    endpoint: "news",
    contentId: id,
  });

  return {
    props: {
      news: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "news" });
  const paths = data.contents.map((content: any) => `/news/${content.id}`);
  return {
    paths,
    fallback: false,
  };
};

export default function NewsId(news: any) {
  console.log(news.news);
  return (
    <main className={styles.main}>
      <Image
        src={news.news.image.url}
        alt={news.news.title}
        width={news.news.image.width}
        height={news.news.image.height}
      />
      <h1 className={styles.title}>{news.news.title}</h1>
      <p>「{news.news.category.name}」</p>
      <p className={styles.publishedAt}>{news.news.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{ __html: `${news.news.content}` }}
        className={styles.post}
      ></div>
    </main>
  );
}
