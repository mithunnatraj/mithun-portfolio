export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-[var(--color-dark-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Mithun Kumar
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">About</a>
            <a href="#experience" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Experience</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">Projects</a>
          </nav>
          <a href="https://www.linkedin.com/in/mithun-kumar-n/" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            Connect
          </a>
        </div>
      </div>
    </header>
  )
}
