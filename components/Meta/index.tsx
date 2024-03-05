import Head from "next/head";

type OGType = "website" | "product" | "profile" | "article";

export type MetaData = {
  title?: string | undefined;
  description?: string | undefined;
  url: string | undefined;
  appUrl: string | undefined;
  robots?: boolean;
  keywords?: string;
  ogImageUrl: string;
  ogType: OGType;
};

export const Meta: React.FC<MetaData> = ({
  title = "美肌メディア by Mimipo",
  description = "美肌になりたいあなたのためのメディア",
  keywords = "美肌,美容,メディア,ニュース,ブログ",
  url = "",
  appUrl = "",
  robots = true,
  ogImageUrl = "",
  ogType = "article",
}) => {
  return (
    <Head>
      <meta name="author" content="Prosent Inc." />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
      />
      <meta name="format-detection" content="telephone=no" />
      <meta name="google-site-verification" content="" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta
        name="robots"
        content={robots ? "index, follow" : "noindex, nofollow"}
      />
      <meta property="og:site_name" content="美肌メディア by Mimipo" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImageUrl} />
      {/* Facebook */}
      <meta property="fb:app_id" content="" />
      {/* Twitter */}
      <meta name="twitter:card" content="sumarry_large_image" />
      <meta name="twitter:site" content="" />
      <meta name="twitter:creator" content="" />
      <meta name="twitter:app:name:iphone" content="" />
      <meta name="twitter:app:id:iphone" content="" />
      <meta name="twitter:app:name:googleplay" content="" />
      <meta name="twitter:app:id:googleplay" content="" />
      <meta name="twitter:app:url:iphone" content={appUrl} />
      <meta name="twitter:app:url:googleplay" content={appUrl} />
      <link rel="canonical" href={url} />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  );
};
