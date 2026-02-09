import { getPostData, getSortedPostsData } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostData(slug);
  return {
    title: `${post.title} - Artur Bixiga`,
    description: post.excerpt,
  };
}

import { Callout } from "@/components/ui/callout";
import { CodeBlock } from "@/components/ui/code-block";
import { Card } from "@/components/ui/card";
const components = {
  Callout,
  CodeBlock,
  Card,
};

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostData(slug);

  return (
    <article className="mx-auto">
      <div className="mb-8 flex gap-2 flex-col">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600 transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to blog
        </Link>

        <time className="text-gray-500" dateTime={post.date}>
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
      </div>

      {post.image && (
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden bg-gray-100 border border-gray-200 shadow-sm">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <MDXRemote source={post.content} components={components} />
      </div>
    </article>
  );
}
