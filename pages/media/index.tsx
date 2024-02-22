import { client } from "../../libs/microcms";
import Layout from "../../components/Layout";
import { Contents } from "../../components/Contents";
import Divider from "../../components/Divider";
import Aside from "../../components/Aside";
import Ad from "../../components/Ad";
import Ranking from "@/components/Ranking";
import Category from "@/components/Category";
import Tag from "@/components/Tag";

export async function getStaticProps() {
  const data = await client.get({
    endpoint: "news",
    queries: { offset: 0, limit: 5 },
  });
  return {
    props: {
      news: data.contents,
      totalCount: data.totalCount,
    },
  };
}

export default function Home({ news, totalCount }: any) {
  return (
    <Layout>
      <Divider>
        <Contents contents={news} totalCount={totalCount} />
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
