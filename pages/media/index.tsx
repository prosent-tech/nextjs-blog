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
  let pathname = usePathname();
  pathname = getPathname(pathname);

  return (
    <Layout>
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
          <Ranking />
          <Category category={category} />
          <Tag tag={tag} />
        </Aside>
      </Divider>
    </Layout>
  );
}
