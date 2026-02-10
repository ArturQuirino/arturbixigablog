import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  return (
    <header className="bg-background/80 backdrop-blur-md sticky top-0 z-10 border-b border-text-secondary/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter text-text-primary hover:text-brand-text transition-colors">
          Artur Bixiga
        </Link>
        <nav className="flex gap-6 items-center">
          <Link href="/" className="text-sm font-medium text-text-secondary hover:text-brand-text transition-colors">
            Blog
          </Link>
          <Link href="/about" className="text-sm font-medium text-text-secondary hover:text-brand-text transition-colors">
            About
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
