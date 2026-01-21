import { getSortedPostsData } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Writing
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          Thoughts on software development, design, and technology.
        </p>
      </section>
      
      <div className="grid gap-10 sm:grid-cols-1 lg:gap-x-8">
        {allPostsData.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
