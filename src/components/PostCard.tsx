import Link from "next/link";
import Image from "next/image";
import { PostData } from "@/lib/posts";

interface Props {
  post: PostData;
}

export default function PostCard({ post }: Props) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 bg-white">
      <div className="relative h-48 w-full bg-gray-100">
        <Image
          src={post.image || "/placeholder_image.png"}
          alt={post.title}
          fill
          className="object-cover"
        />
        {/* Optional: Add a category badge if available in post data */}
        {/* <div className="absolute top-4 left-4">
          <span className="px-2 py-1 text-xs font-bold tracking-wider uppercase bg-white rounded text-gray-800">
            Category
          </span>
        </div> */}
      </div>
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center text-xs text-gray-500 mb-3">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
          {post.readTime && (
            <>
              <span className="mx-1">&middot;</span>
              <span>{post.readTime}</span>
            </>
          )}
        </div>
        <Link href={`/posts/${post.slug}`} className="block mt-2">
          <h3 className="text-xl font-semibold text-gray-900 hover:text-purple-600 transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="mt-3 text-base text-gray-500 line-clamp-3 flex-1">
          {post.excerpt}
        </p>
        <div className="mt-6">
          <Link
            href={`/posts/${post.slug}`}
            className="text-sm font-medium text-purple-600 hover:text-purple-500 flex items-center"
          >
            Read Analysis
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
