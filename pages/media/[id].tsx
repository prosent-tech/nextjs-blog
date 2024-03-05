import Layout from "@/components/Layout";
import Divider from "@/components/Divider";
import { client } from "../../libs/microcms";
import Aside from "@/components/Aside";
import Ad from "@/components/Ad";
import Ranking from "@/components/Ranking";
import Category from "@/components/Category";
import Tag from "@/components/Tag";
import Article from "@/components/Article";
import Content from "@/components/Content";
import rankingContents from "../../contents.json";
import { Meta } from "@/components/Meta";
import { usePathname } from "next/navigation";

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const newsData = await client.get({
    endpoint: "news",
    contentId: id,
  });
  const categoryData = await client.get({ endpoint: "categories" });
  const tagData = await client.get({ endpoint: "tags" });
  return {
    props: {
      news: newsData,
      category: categoryData.contents,
      tag: tagData.contents,
      rankingContents: rankingContents.contents,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.getAllContents({ endpoint: "news" });
  const paths = data.map((content: any) => `/media/${content.id}`);
  return { paths, fallback: false };
};

export default function MediaId({ news, category, tag, rankingContents }: any) {
  const pathname = usePathname();
  const url = process.env.NEXT_PUBLIC_APP_URL + pathname;
  return (
    <Layout>
      <Meta
        url={url}
        appUrl={url}
        ogImageUrl={news.ogImageUrl}
        ogType="website"
      />
      <Divider>
        <Content>
          <Article article={news} />
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
