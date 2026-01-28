import { getSortedPostsData } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  const allPostsData = getSortedPostsData();
  const latestPost = allPostsData[0];
  const otherPosts = allPostsData.slice(1, 4); // Show next 3 posts

  return (
    <div className="space-y-20 pb-20">
      {latestPost && <Hero post={latestPost} />}
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-gray-900">The Visual Method</h2>
            <p className="text-gray-500">Recent deep dives into frontend architecture.</p>
          </div>
          <Link href="/posts" className="text-sm font-medium text-purple-600 hover:text-purple-500 flex items-center">
            View all posts
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {otherPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
