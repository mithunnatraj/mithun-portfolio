export default function Projects() {
  const projects = [
    {
      title: "Plasma Donor Web Application",
      tech: ["HTML", "CSS", "JS", "Python", "IBM Cloud"],
      points: [
        "Developed and tested a web application to facilitate plasma donation for medical purposes.",
        "Designed test cases covering form validation, user registration flows, and cloud integration endpoints."
      ]
    },
    {
      title: "Rescue Team Health Monitoring System",
      tech: ["Smart India Hackathon Finalist '22", "LoRa", "IoT"],
      points: [
        "Designed a prototype using LoRa technology to monitor health and location tracking without internet connectivity.",
        "Contributed to end-to-end testing of the live dashboard used for real-time sensor data."
      ]
    }
  ];

  return (
    <section id="projects" className="w-full">
      <div className="mb-12">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
          Projects
        </h2>
        <div className="h-1 w-20 bg-teal-500 rounded"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="glass p-8 rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-all hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-500/10 text-blue-400">
                  {t}
                </span>
              ))}
            </div>
            <ul className="space-y-3 text-gray-400 text-sm list-disc list-inside">
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
