import { client } from "../../../libs/microcms";
import Ad from "@/components/Ad";
import Aside from "@/components/Aside";
import Category from "@/components/Category";
import { Contents } from "@/components/Contents";
import Divider from "@/components/Divider";
import Layout from "@/components/Layout";
import Ranking from "@/components/Ranking";
import Tag from "@/components/Tag";

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const newsData = await client.get({
    endpoint: "news",
    queries: { filters: `category[equals]${id}` },
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
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "categories" });
  const paths = data.contents.map(
    (content: any) => `/media/category/${content.id}`,
  );
  return { paths, fallback: false };
};

export default function CategoryId({ news, category, tag, totalCount }: any) {
  if (news.length === 0) {
    return (
      <Layout>
        <Divider>
          <h1>記事がありません</h1>
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
