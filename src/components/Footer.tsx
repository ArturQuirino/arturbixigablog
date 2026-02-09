import Subscribe from "./Subscribe";

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Subscribe />
      </div>
      <div className="border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Artur Bixiga. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
