import Layout from "@/components/Layout";
import Divider from "@/components/Divider";
import { client } from "../../libs/microcms";
import Aside from "@/components/Aside";
import Ranking from "@/components/Ranking";
import Category from "@/components/Category";
import Tag from "@/components/Tag";
import Article from "@/components/Article";
import Content from "@/components/Content";
import rankingContents from "../../contents.json";
import { Meta } from "@/components/Meta";
import { usePathname } from "next/navigation";
import Related from "@/components/Related";

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const newsData = await client.get({
    endpoint: "news",
    contentId: id,
  });
  const categoryData = await client.get({ endpoint: "categories" });
  const tagData = await client.get({ endpoint: "tags" });

  const relatedNewsData = await client.get({
    endpoint: "news",
    queries: { limit: 3, filters: "category[equals]" + newsData.category.id },
  });

  return {
    props: {
      news: newsData,
      category: categoryData.contents,
      tag: tagData.contents,
      relatedContents: relatedNewsData.contents,
      rankingContents: rankingContents.contents,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.getAllContents({ endpoint: "news" });
  const paths = data.map((content: any) => `/media/${content.id}`);
  return { paths, fallback: false };
};

export default function MediaId({
  news,
  category,
  tag,
  relatedContents,
  rankingContents,
}: any) {
  const pathname = usePathname();

  const url = process.env.NEXT_PUBLIC_APP_URL + pathname;

  return (
    <Layout>
      <Meta
        url={url}
        appUrl={url}
        ogImageUrl={news.image.url}
        ogType="article"
      />
      <Divider>
        <Content>
          <Article article={news} />
        </Content>
        <Aside>
          <Related contents={relatedContents} />
          <Ranking contents={rankingContents} />
          <Category category={category} />
          <Tag tag={tag} />
        </Aside>
      </Divider>
    </Layout>
  );
}
