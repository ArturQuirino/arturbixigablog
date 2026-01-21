import Link from 'next/link';
import { PostData } from '@/lib/posts';
import { format, parseISO } from 'date-fns';

export default function PostCard({ post }: { post: PostData }) {
  return (
    <article className="group relative flex flex-col space-y-2">
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <time dateTime={post.date}>{format(parseISO(post.date), 'LLLL d, yyyy')}</time>
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors">
        <Link href={`/posts/${post.slug}`}>
          <span className="absolute inset-0" />
          {post.title}
        </Link>
      </h2>
      <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
        {post.excerpt}
      </p>
      <div className="text-sm font-medium text-blue-600 pt-2">
        Read more →
      </div>
    </article>
  );
}
