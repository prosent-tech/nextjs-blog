import { client } from "../../libs/microcms";
import Layout from "../../components/Layout";
import { Articles } from "../../components/Articles";
import Divider from "../../components/Divider";
import Aside from "../../components/Aside";
import Ad from "../../components/Ad";
import Ranking from "@/components/Ranking";
import Category from "@/components/Category";
import Tag from "@/components/Tag";
import Content from "@/components/Content";
import Pagination from "@/components/Pagination";
import { usePathname } from "next/navigation";
import { getPathname } from "../../libs/utils";
import rankingContents from "../../contents.json";
import { Meta } from "@/components/Meta";

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
      rankingContents: rankingContents.contents,
      totalCount: newsData.totalCount,
    },
  };
}

export default function Home({
  news,
  category,
  tag,
  rankingContents,
  totalCount,
}: any) {
  let pathname = usePathname();
  pathname = getPathname(pathname);

  const url = process.env.NEXT_PUBLIC_APP_URL + pathname;

  return (
    <Layout>
      <Meta
        url={url}
        appUrl={url}
        ogImageUrl={news.image.url}
        ogType="article"
        robots={false}
      />
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
