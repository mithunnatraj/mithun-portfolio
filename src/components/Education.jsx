export default function Education() {
  return (
    <section id="education" className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="mb-8">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
              Academic History
            </h2>
            <div className="h-1 w-20 bg-blue-500 rounded"></div>
          </div>
          
          <div className="space-y-6">
            <div className="glass p-6 rounded-xl border border-gray-800 relative overflow-hidden group hover:-translate-y-1 transition-transform cursor-default">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500"></div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">B.E in Electronics and Communication</h3>
                  <div className="text-gray-400 font-medium">Karpagam Institute of Technology (Anna University)</div>
                </div>
                <div className="sm:text-right shrink-0">
                  <div className="text-sm font-medium text-blue-400 mb-1">Nov 2023</div>
                  <div className="text-sm text-gray-500">Coimbatore, Tamil Nadu</div>
                </div>
              </div>
              
              <div className="inline-block px-3 py-1 bg-green-500/10 text-green-400 rounded-md text-sm font-semibold border border-green-500/20">
                CGPA: 7.54
              </div>
            </div>

            <div className="glass p-6 rounded-xl border border-gray-800 relative overflow-hidden group hover:-translate-y-1 transition-transform cursor-default">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-purple-500"></div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">XII - Maths, Biology</h3>
                  <div className="text-gray-400 font-medium">St. Theresa's Matriculation Higher Secondary School</div>
                </div>
                <div className="sm:text-right shrink-0">
                  <div className="text-sm font-medium text-purple-400 mb-1">March 2019</div>
                  <div className="text-sm text-gray-500">Karur, Tamil Nadu</div>
                </div>
              </div>
              
              <div className="inline-block px-3 py-1 bg-purple-500/10 text-purple-400 rounded-md text-sm font-semibold border border-purple-500/20">
                62.83%
              </div>
            </div>

            <div className="glass p-6 rounded-xl border border-gray-800 relative overflow-hidden group hover:-translate-y-1 transition-transform cursor-default">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-teal-500"></div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">X - General</h3>
                  <div className="text-gray-400 font-medium">St. Theresa's Matriculation Higher Secondary School</div>
                </div>
                <div className="sm:text-right shrink-0">
                  <div className="text-sm font-medium text-teal-400 mb-1">March 2017</div>
                  <div className="text-sm text-gray-500">Karur, Tamil Nadu</div>
                </div>
              </div>

              <div className="inline-block px-3 py-1 bg-teal-500/10 text-teal-400 rounded-md text-sm font-semibold border border-teal-500/20">
                89.2%
              </div>
            </div>
          </div>
        </div>

        <div>
           <div className="mb-8">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 mb-4">
              Certifications & Life
            </h2>
            <div className="h-1 w-20 bg-purple-500 rounded"></div>
          </div>
          <ul className="space-y-4 mb-10">
            {[
              "Cybersecurity Analyst Job Simulation – TCS & Forage (2024)",
              "Cognizant ReCogNurize 2.0 Salesforce Shaolin Certification (2022)",
              "Responsive Web Design – freeCodeCamp (2021)",
              "JavaScript Algorithms and Data Structures – freeCodeCamp (2021)",
              "Python – GUVI (2021)",
              "Cybersecurity Essentials – Cisco Networking Academy (2021)"
            ].map((cert, idx) => (
              <li key={idx} className="flex items-start glass p-4 rounded-xl border border-gray-800/50 hover:border-purple-500/30 transition-colors">
                <svg className="w-6 h-6 text-purple-500 mt-0.5 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300 text-sm font-medium">{cert}</span>
              </li>
            ))}
          </ul>

          <div className="relative w-full h-64 rounded-3xl overflow-hidden glass border border-gray-700/50 shadow-xl group flex items-center justify-center bg-gray-900/50">
             <img 
               src="/profile2.jpg" 
               alt="Speaking Engagement" 
               className="absolute w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
               onError={(e) => {
                 e.target.style.display = 'none';
                 e.target.nextElementSibling.style.display = 'block';
               }} 
             />
             <div className="hidden text-center text-gray-500 p-6 z-10">
               <p className="text-sm font-mono">Image placefolder for: `profile2.jpg`</p>
               <p className="text-xs mt-2">Add image to public folder to view.</p>
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none z-0"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
