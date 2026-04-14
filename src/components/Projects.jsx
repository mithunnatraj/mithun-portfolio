export default function Projects() {
  const projects = [
    {
      title: "ChartApps – No-Code Dashboard Builder",
      role: "QA Automation",
      tech: ["Playwright", "JIRA", "Google Sheets API", "Cross-Browser Testing"],
      points: [
        "Tested functional, regression, and UI aspects of a Google Sheets-based no-code dashboard platform; validated real-time data sync, chart rendering, filter logic, and cross-browser compatibility using Playwright automation.",
        "Reported and tracked UI and data inconsistencies in JIRA; re-verified fixes across multiple browser environments post-release."
      ]
    },
    {
      title: "Internal Project Management Tool",
      role: "E2E Testing",
      tech: ["Playwright", "RBAC", "JIRA", "E2E Testing"],
      points: [
        "Executed E2E testing of task workflows, user role permissions (RBAC), and dashboard reporting; automated regression suite with Playwright and managed defects through JIRA.",
        "Verified notification triggers, status transitions, and audit logs for task lifecycle management workflows."
      ]
    },
    {
      title: "Plasma Donor Web Application",
      role: "Full Stack & Testing",
      tech: ["HTML/CSS/JS", "Python", "IBM Cloud"],
      points: [
        "Built and tested a donation management web app using HTML, CSS, JavaScript, Python, and IBM Cloud; authored test cases for form validation and cloud integration."
      ]
    },
    {
      title: "Rescue Team Health Monitoring System",
      role: "Smart India Hackathon Finalist '22",
      tech: ["LoRa", "IoT", "Real-Time Dashboard"],
      points: [
        "Designed a LoRa-based health and location monitoring prototype; contributed to E2E testing of the real-time web and mobile dashboard."
      ]
    }
  ];

  return (
    <section id="projects" className="scroll-mt-24 w-full">
      <div className="mb-12">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4 inline-block relative group cursor-default">
          Projects
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="glass p-8 rounded-2xl border border-gray-800 hover:border-teal-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(20,184,166,0.15)] group">
            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-teal-300 transition-colors">{project.title}</h3>
            <div className="text-teal-400/80 text-sm font-semibold mb-4">{project.role}</div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-teal-500/10 text-teal-300 border border-teal-500/20 group-hover:bg-teal-500/20 transition-colors">
                  {t}
                </span>
              ))}
            </div>
            <ul className="space-y-3 text-gray-400 text-sm list-disc list-outside ml-4 group-hover:text-gray-300 transition-colors">
              {project.points.map((point, i) => (
                <li key={i} className="leading-relaxed">{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
