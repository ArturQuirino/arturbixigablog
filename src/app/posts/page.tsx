import { getSortedPostsData } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function Posts() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-6 mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl">
          Todos os Posts
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl">
          Navegue por todos os artigos sobre desenvolvimento de software, arquitetura e design.
        </p>
      </div>
      
      <div className="grid gap-8 sm:grid-cols-2">
        {allPostsData.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
