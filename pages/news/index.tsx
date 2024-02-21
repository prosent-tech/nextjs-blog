import { client } from "../../libs/microcms";
import Layout from "../../components/Layout";
import Contents from "../../components/Contents";
import Divider from "../../components/Divider";
import Aside from "../../components/Aside";
import Ad from "../../components/Ad";
import Ranking from "@/components/Ranking";
import Category from "@/components/Category";
import Tag from "@/components/Tag";

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
      <Divider>
        {/* パンクズはどう分けるか */}
        <Contents />
        <Aside>
          <Ad />
          <Ranking />
          <Category />
          <Tag />
        </Aside>
      </Divider>
    </Layout>
  );
}
