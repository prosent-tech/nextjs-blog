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
import { usePathname } from "next/navigation";
import { getPathname } from "@/libs/utils";
import rankingContents from "../../../../contents.json";
import { Meta } from "@/components/Meta";

export const getStaticProps = async (context: any) => {
  const categoryId = context.params.categoryId;
  const newsData = await client.get({
    endpoint: "news",
    queries: { filters: `category[equals]${categoryId}` },
  });
  const categoryData = await client.get({ endpoint: "categories" });
  const tagData = await client.get({ endpoint: "tags" });
  return {
    props: {
      news: newsData.contents,
      category: categoryData.contents,
      tag: tagData.contents,
      rankingContents: rankingContents.contents,
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

export default function CategoryId({
  news,
  category,
  tag,
  rankingContents,
  totalCount,
}: any) {
  let pathname = usePathname();
  pathname = getPathname(pathname);

  const url = process.env.NEXT_PUBLIC_APP_URL + pathname;

  if (news.length === 0) {
    return (
      <Layout>
        <Meta
          url={url}
          appUrl={url}
          ogImageUrl=""
          ogType="article"
          robots={false}
        />
        <Divider>
          <Content>
            <h1>記事がありません</h1>
          </Content>
          <Aside>
            <Ad />
            <Ranking contents={rankingContents} />
            <Category category={category} />
            <Tag tag={tag} />
          </Aside>
        </Divider>
      </Layout>
    );
  }

  return (
    <Layout>
      <Meta url={url} appUrl={url} ogImageUrl="" ogType="article" />
      <Divider>
        <Content>
          <Articles articles={news} totalCount={totalCount} />
          <Pagination
            totalCount={totalCount}
            currentPage={1}
            pathname={pathname}
          />
        </Content>
        <Aside>
          <Ad />
          <Ranking contents={rankingContents} />
          <Category category={category} />
          <Tag tag={tag} />
        </Aside>
      </Divider>
    </Layout>
  );
}
