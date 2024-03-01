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
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { getPathname } from "@/libs/utils";
import rankingContents from "../../../../../contents.json";

const PER_PAGE = 5;

export const getStaticProps = async (context: any) => {
  const categoryId = context.params.categoryId;
  const pageId = context.params.pageId;
  const newsData = await client.get({
    endpoint: "news",
    queries: {
      filters: `category[equals]${categoryId}`,
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
      rankingContents: rankingContents.contents,
      totalCount: newsData.totalCount,
    },
  };
};

export const getStaticPaths = async () => {
  const categoryData = await client.getAllContents({ endpoint: "categories" });
  const categoryPages = [];
  for (const content of categoryData) {
    const newsData = await client.get({
      endpoint: "news",
      queries: { filters: `category[equals]${content.id}` },
    });
    const categoryPageCount = Math.ceil(
      parseInt(newsData.totalCount) / PER_PAGE,
    );
    for (let page = 1; page <= categoryPageCount; page++) {
      categoryPages.push(`/media/category/${content.id}/page/${page}`);
    }
  }
  return { paths: categoryPages, fallback: false };
};

export default function TagPageId({ news, category, tag, rankingContents, totalCount }: any) {
  const router = useRouter();
  const { pageId } = router.query;
  const currentPage = Number(pageId);

  let pathname = usePathname();
  pathname = getPathname(pathname);

  return (
    <Layout>
      <Divider>
        <Content>
          <Articles articles={news} totalCount={totalCount} />
          <Pagination
            totalCount={totalCount}
            currentPage={currentPage}
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
