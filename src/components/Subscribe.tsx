export default function Subscribe() {
  return (
    <div className="max-w-xl mx-auto my-12 p-6 bg-gray-50 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 rounded-lg">
      <h3 className="font-bold text-xl mb-2 text-gray-900 dark:text-gray-100">Subscribe to the newsletter</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
        Get the latest posts delivered right to your inbox.
      </p>
      <form
        action="https://buttondown.com/api/emails/embed-subscribe/arturbixigablog"
        method="post"
        target="popupwindow"
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="bd-email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Enter your email
          </label>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              name="email"
              id="bd-email"
              placeholder="you@example.com"
              className="px-3 py-2 bg-white dark:bg-black border border-gray-300 dark:border-neutral-700 rounded-md flex-1 text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
              required 
            />
            <input
              type="submit"
              value="Subscribe"
              className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-md text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 cursor-pointer transition-colors"
            />
          </div>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-500 text-center sm:text-left">
          <a href="https://buttondown.com/refer/arturbixigablog" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Powered by Buttondown.
          </a>
        </p>
      </form>
    </div>
  );
}
