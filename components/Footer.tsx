export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-24">
      <div className="max-w-3xl mx-auto px-6 py-8 flex items-center justify-between text-sm text-gray-400">
        <span>© {new Date().getFullYear()} Nick Wang</span>
        <div className="flex items-center gap-5">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors">LinkedIn</a>
          <a href="mailto:nickwang947@gmail.com" className="hover:text-gray-700 transition-colors">nickwang947@gmail.com</a>
        </div>
      </div>
    </footer>
  );
}
