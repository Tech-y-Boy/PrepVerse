function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2026 PrepVerse. Built for students, by students.
        </p>
        <div className="flex gap-6 text-sm text-gray-500 dark:text-gray-400">
          <span className="hover:text-primary-600 cursor-pointer transition-colors">Privacy</span>
          <span className="hover:text-primary-600 cursor-pointer transition-colors">Terms</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;