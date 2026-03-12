export default function Footer() {
  return (
    <footer className="w-full py-8 mt-20 border-t border-[var(--color-dark-border)] bg-[#0b0f19]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Mithun Kumar N. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0 items-center">
          <a href="mailto:mithunnatraj2@gmail.com" className="hover:text-blue-400 transition-colors">
            mithunnatraj2@gmail.com
          </a>
          <span className="w-1 h-1 rounded-full bg-gray-600"></span>
          <a href="https://www.linkedin.com/in/mithun-kumar-n/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
