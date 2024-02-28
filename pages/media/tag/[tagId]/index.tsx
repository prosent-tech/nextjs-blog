import { client } from "../../../../libs/microcms";
import Ad from "@/components/Ad";
import Aside from "@/components/Aside";
import Category from "@/components/Category";
import { Articles } from "@/components/Articles";
import Divider from "@/components/Divider";
import Layout from "@/components/Layout";
import Ranking from "@/components/Ranking";
import Tag from "@/components/Tag";
import Content from "@/components/Content";
import Pagination from "@/components/Pagination";

export const getStaticProps = async (context: any) => {
  const tagId = context.params.tagId;
  const newsData = await client.get({
    endpoint: "news",
    queries: { filters: `tags[contains]${tagId}` },
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
  const data = await client.get({ endpoint: "tags" });
  const paths = data.contents.map((content: any) => `/media/tag/${content.id}`);
  return { paths, fallback: false };
};

export default function TagId({ news, category, tag, totalCount }: any) {
  if (news.length === 0) {
    return (
      <Layout>
        <Divider>
          <Content>
            <h1>記事がありません</h1>
          </Content>
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
        <Content>
          <Articles articles={news} totalCount={totalCount} />
          <Pagination totalCount={totalCount} currentPage={1} />
        </Content>
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
