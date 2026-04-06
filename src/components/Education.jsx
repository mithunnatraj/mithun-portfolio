export default function Education() {
  const certifications = [
    "Cognizant ReCogNurize 2.0 – Salesforce Shaolin Certification (2022)",
    "Cybersecurity Analyst Job Simulation – TCS & Forage (2024)",
    "JavaScript Algorithms and Data Structures – freeCodeCamp (2021)",
    "Responsive Web Design – freeCodeCamp (2021)",
    "Cybersecurity Essentials – Cisco Networking Academy (2021)",
    "Finalist – Smart India Hackathon 2022",
    "Participant – Google Developer Group Cloud Community Day, Coimbatore (2022)"
  ];

  return (
    <section id="education" className="scroll-mt-24 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <div className="mb-10">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4 inline-block relative group cursor-default">
              Academic History
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="glass p-8 rounded-2xl border border-gray-800 relative overflow-hidden group hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(59,130,246,0.15)] transition-all duration-300 cursor-default">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-400 to-purple-600"></div>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">B.E. – Electronics & Communication Engineering</h3>
                  <div className="text-gray-400 font-medium">Karpagam Institute of Technology</div>
                </div>
                <div className="sm:text-right shrink-0">
                  <div className="text-sm font-bold px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 mb-2 inline-block">Nov 2023</div>
                  <div className="text-sm text-gray-500 block">Coimbatore, Tamil Nadu</div>
                </div>
              </div>
              
              <div className="inline-block px-4 py-1.5 bg-green-500/10 text-green-400 rounded-lg text-sm font-bold border border-green-500/20 shadow-[0_0_10px_rgba(34,197,94,0.1)]">
                CGPA: 7.54
              </div>
            </div>
          </div>
        </div>

        <div>
           <div className="mb-10">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-4 inline-block relative group cursor-default">
              Certifications & Achievements
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </h2>
          </div>
          
          <ul className="space-y-3 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px before:h-full before:w-[2px] before:bg-gradient-to-b before:from-purple-500/50 before:via-pink-500/30 before:to-transparent">
            {certifications.map((cert, idx) => (
              <li key={idx} className="relative flex items-center pl-8 group">
                <div className="absolute left-0 w-6 h-6 rounded-full bg-[var(--color-dark-bg)] border-2 border-purple-500/50 flex items-center justify-center group-hover:border-purple-400 group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                  <div className="w-2 h-2 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="glass p-4 rounded-xl border border-gray-800/50 group-hover:border-purple-500/30 group-hover:bg-purple-900/10 transition-all duration-300 w-full ml-2 shadow-sm group-hover:shadow-[0_5px_15px_rgba(168,85,247,0.1)]">
                  <span className="text-gray-300 text-sm font-medium leading-relaxed group-hover:text-white transition-colors">{cert}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
