import { client } from "../../libs/microcms";
import { Inter } from "next/font/google";
import Link from "next/link";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Cards from "../../components/Cards";
import Sub from "../../components/Sub";
import Aside from "../../components/Aside";
import Ad from "../../components/Ad";

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
    <Layout>
      <Sub>
        <Cards />
        <Aside>
          <Ad />
        </Aside>
      </Sub>
      {/* <ul>
        {news.news.map((news: any) => (
          <li key={news.id}>
            <Link href={`/news/${news.id}`}>{news.title}</Link>
          </li>
        ))}
      </ul> */}
    </Layout>
  );
}
