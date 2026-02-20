"use client";
import Head from "next/head";

interface SeoProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export default function Seo({ title, description, image, url }: SeoProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
