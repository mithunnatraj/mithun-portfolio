export default function Projects() {
  const projects = [
    {
      title: "Internal People Management Tool",
      role: "Objectways Technologies | Mar 2024 – Nov 2026",
      tech: ["Playwright", "Postman", "RBAC", "Jira", "API Testing"],
      points: [
        "Tested task workflows, role-based access control (RBAC) permissions, dashboard reports, notifications, and audit logs; supported regression suite execution and defect tracking in Jira.",
        "Developing practical skills in Playwright with JavaScript for selected end-to-end test scenarios and in API testing using Postman to validate HTTP response status codes."
      ]
    },
    {
      title: "ChartApps – No-Code Dashboard Builder",
      role: "Objectways Technologies | Mar 2024 – Mar 2026",
      tech: ["Functional Testing", "Regression Testing", "UI Testing", "Jira", "Cross-Browser"],
      points: [
        "Performed functional, regression, and UI testing of a Google Sheets-based dashboard platform, validating real-time data sync, chart rendering, and filters across browsers.",
        "Tracked UI and data-related defects in Jira and verified fixes through retesting."
      ]
    },
    {
      title: "OW Recorder – Egocentric Video Recording App",
      role: "Objectways Technologies | Mar 2026 – Aug 2026",
      tech: ["Data Capture Testing", "Session Management", "Cross-Device", "Jira", "Regression"],
      points: [
        "Tested recording workflows, data capture accuracy, and session management across devices and environments.",
        "Reported defects in Jira and verified fixes through structured retesting cycles."
      ]
    },
    {
      title: "Objectways, ChartApps and Liceum Website Testing",
      role: "Objectways Technologies | Jun 2026 – Aug 2026",
      tech: ["UI/UX Testing", "Cross-Browser Testing", "Responsive Design", "Content Accuracy"],
      points: [
        "Tested navigation, responsiveness, content accuracy, and cross-browser rendering; reported layout issues and broken links."
      ]
    },
    {
      title: "Plasma Donor Web Application",
      role: "Karpagam Institute of Technology | 2022",
      tech: ["HTML5", "CSS3", "JavaScript", "Python", "IBM Cloud"],
      points: [
        "Built and tested a donation management web app using HTML, CSS, JavaScript, Python, and IBM Cloud; authored test cases for form validation."
      ]
    },
    {
      title: "Rescue Team Health Monitoring System",
      role: "Smart India Hackathon Finalist | 2022",
      tech: ["LoRa", "Real-Time Dashboard", "E2E Testing", "IoT"],
      points: [
        "Designed a LoRa-based health and location monitoring prototype and contributed to end-to-end testing of the real-time web and mobile dashboard."
      ]
    }
  ];

  return (
    <section className="w-full">
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
