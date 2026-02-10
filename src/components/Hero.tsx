import Link from 'next/link';
import Image from 'next/image';
import { PostData } from '@/lib/posts';

interface HeroProps {
  post: PostData;
}

export default function Hero({ post }: HeroProps) {
  return (
    <section className="flex flex-col items-center text-center py-16 space-y-8">
      <div className="space-y-4 max-w-3xl">
        <div className="flex justify-center">
          <span className="px-3 py-1 text-xs font-semibold tracking-wider text-brand-text uppercase bg-background border border-brand-text/20 rounded-full">
            Engineering Notebook
          </span>
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight text-text-primary sm:text-6xl">
          Visual Architecture for <br />
          Senior Developers
        </h1>
        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
          I turn complex concepts into simple mental models. <br />
          No fluff, just diagrams and code.
        </p>
        <div className="pt-4">
          <Link href={`/posts/${post.slug}`} className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors">
            Read Latest Post
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>

      <Link href={`/posts/${post.slug}`} className="relative w-full max-w-5xl mt-12 aspect-video rounded-xl overflow-hidden shadow-2xl border border-text-secondary/20 block group">
         <Image
            src={post.image || '/placeholder_image.png'}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white text-left">
            <h2 className="text-2xl font-bold group-hover:text-brand-text transition-colors">{post.title}</h2>
            <p className="mt-2 text-gray-200 line-clamp-2">{post.excerpt}</p>
          </div>
      </Link>
    </section>
  );
}
