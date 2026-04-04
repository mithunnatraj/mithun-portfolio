export default function Skills() {
  const skillCategories = [
    {
      title: "Testing Types",
      skills: ["Functional", "Regression", "Smoke", "Sanity", "UAT", "API Testing", "End-to-End (E2E)", "Visual Regression", "Cross-Browser Testing"]
    },
    {
      title: "Testing Tools",
      skills: ["JIRA", "Postman", "Playwright", "Cucumber", "Gherkin", "BDD Framework"]
    },
    {
      title: "Salesforce",
      skills: ["Apex", "SOQL", "Lightning Web Components (LWC)", "Salesforce CRM", "Process Builder", "Workflow Automation", "Custom Objects", "Validation Rules", "Role Hierarchy", "Profiles", "Permission Sets"]
    },
    {
      title: "Test Artifacts",
      skills: ["Test Plan", "Test Cases", "Test Scripts", "Test Summary Report", "RTM"]
    },
    {
      title: "Programming",
      skills: ["JavaScript", "SQL", "HTML5", "CSS3", "Bootstrap", "Git", "Unix/Linux"]
    },
    {
      title: "SDLC & Platforms",
      skills: ["SDLC", "STLC", "Agile", "Scrum", "IBM Cloud", "Web Applications", "Google Sheets (ChartApps)"]
    }
  ];

  return (
    <section id="skills" className="w-full">
      <div className="mb-12">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4 inline-block relative group cursor-default">
          Technical Skills
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </h2>
        <div className="h-1 w-20 bg-purple-500 rounded mt-1"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="glass p-6 rounded-2xl hover:bg-white/[0.04] transition-all duration-300 border border-gray-800/50 hover:border-purple-500/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 group">
            <h3 className="text-xl font-bold text-white mb-5 group-hover:text-purple-300 transition-colors">{category.title}</h3>
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill, i) => (
                <span key={i} className="px-3.5 py-1.5 text-sm font-medium bg-gray-800/60 text-gray-300 rounded-lg border border-gray-700/80 hover:border-blue-400 hover:text-blue-300 hover:bg-blue-900/10 transition-all duration-300 cursor-default shadow-sm hover:shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
