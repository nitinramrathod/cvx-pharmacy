import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/constants";
import { ArticleClient } from "./client";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.id === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — CVX Pharmacy`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.id === params.slug);
  if (!post) notFound();
  return <ArticleClient post={post} />;
}
