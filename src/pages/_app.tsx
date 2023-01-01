import "~/styles/globals.css";
import "~/styles/reset.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo
        title="next-typescript-template"
        canonical="サイトの正規のURL"
        description="デフォルトの説明文"
        openGraph={{
          type: "website等のタイプ",
          site_name: "サイト名",
          title: "next-typescript-template",
          description: "デフォルトの説明文",
          url: "url",
          images: [
            {
              url: "画像URL",
              width: 300,
              height: 600,
              alt: "alt"
            }
          ]
        }}
      />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
