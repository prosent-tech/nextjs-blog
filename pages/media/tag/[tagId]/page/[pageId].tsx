import { client } from "../../../../../libs/microcms";
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

const PER_PAGE = 5;

export const getStaticProps = async (context: any) => {
  const tagId = context.params.tagId;
  const pageId = context.params.pageId;
  const newsData = await client.get({
    endpoint: "news",
    queries: {
      filters: `tags[contains]${tagId}`,
      offset: (pageId - 1) * PER_PAGE,
      limit: PER_PAGE,
    },
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
  let totalCount: number = 0;
  const tagData = await client.get({ endpoint: "tags" });
  for (const content of tagData.contents) {
    const newsData = await client.get({
      endpoint: "news",
      queries: { filters: `tags[contains]${content.id}` },
    });
    totalCount += parseInt(newsData.totalCount);
  }
  const tagPages = [];
  for (const content of tagData.contents) {
    const newsData = await client.get({
      endpoint: "news",
      queries: { filters: `tags[contains]${content.id}` },
    });
    const tagPageCount = Math.ceil(parseInt(newsData.totalCount) / PER_PAGE);
    for (let page = 1; page <= tagPageCount; page++) {
      tagPages.push(`/media/tag/${content.id}/page/${page}`);
    }
  }
  return { paths: tagPages, fallback: false };
};

export default function TagPageId({ news, category, tag, totalCount }: any) {
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
