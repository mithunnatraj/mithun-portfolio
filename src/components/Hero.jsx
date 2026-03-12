import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="w-full min-h-[85vh] flex flex-col md:flex-row items-center justify-between gap-12 relative pt-10">
      <div className={`flex-1 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-wide">
          Available for new opportunities
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Hi, I'm <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600">
            Mithun Kumar N
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 font-semibold mb-8">
          Junior QA Engineer
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl leading-relaxed mb-10">
          Detail-oriented Junior QA Engineer with hands-on experience in software quality assurance, test planning, test case design, and defect tracking. Proficient in functional, regression, smoke, and sanity testing.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#experience" className="px-8 py-3.5 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-colors shadow-lg shadow-white/10">
            View Experience
          </a>
          <a href="https://www.linkedin.com/in/mithun-kumar-n/" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-xl border border-gray-600 hover:border-gray-400 hover:bg-gray-800 text-white font-bold transition-all flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
      
      <div className={`flex-1 flex justify-center md:justify-end transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="relative w-72 h-72 md:w-96 md:h-96 group">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          <div className="relative w-full h-full rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-gray-700/50 glass shadow-2xl">
            <img 
              src="/profile1.jpg" 
              alt="Mithun Kumar N" 
              className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out" 
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://ui-avatars.com/api/?name=Mithun+Kumar+N&background=0D8ABC&color=fff&size=512";
              }} 
            />
          </div>
          
          {/* Decorative floating elements */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500/10 backdrop-blur-md border border-blue-500/20 rounded-2xl animate-bounce" style={{ animationDuration: '3s' }}></div>
          <div className="absolute -top-6 -right-6 w-16 h-16 bg-purple-500/10 backdrop-blur-md border border-purple-500/20 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        </div>
      </div>
    </section>
  )
}
