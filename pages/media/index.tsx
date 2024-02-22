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
  const newsData = await client.get({
    endpoint: "news",
    queries: { offset: 0, limit: 5 },
  });
  const categoryData = await client.get({ endpoint: "categories" });
  const tagData = await client.get({ endpoint: "tags" });
  return {
    props: {
      news: newsData.contents,
      category: categoryData.contents,
      tag: tagData.contents,
      totalCount: newsData.totalCount,
    },
  };
}

export default function Home({ news, category, tag, totalCount }: any) {
  return (
    <Layout>
      <Divider>
        <Contents contents={news} totalCount={totalCount} />
        <Aside>
          <Ad />
          <Ranking />
          <Category category={category} />
          <Tag tag={tag} />
        </Aside>
      </Divider>
    </Layout>
  );
}
