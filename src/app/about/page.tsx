import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Artur Bixiga',
  description: 'About Artur Bixiga',
};

export default function About() {
  return (
    <div className="prose prose-lg dark:prose-invert mx-auto">
      <h1>About Me</h1>
      <p>
        Hello! I&apos;m Artur Bixiga. This is my personal blog where I share my thoughts and experiences.
      </p>
      <p>
        I am passionate about technology and building things for the web.
      </p>
    </div>
  );
}
