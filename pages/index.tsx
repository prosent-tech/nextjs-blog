import { client } from "../libs/microcms";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  const data = await client.get({
    endpoint: "news",
    queries: { limit: 10 },
  });
  console.log(data.contents);
  return {
    props: {
      news: data.contents,
    },
  };
}

export default function Home(news: any) {
  console.log(news.news);
  return (
    <div>
      <h1>News</h1>
      <ul>
        {news.news.map((news: any) => (
          <li key={news.id}>
            <Link href={`/news/${news.id}`}>{news.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
