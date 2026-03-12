export default function Skills() {
  const skillCategories = [
    {
      title: "Testing & QA",
      skills: ["Functional Testing", "Regression", "Smoke & Sanity", "UAT", "API Testing"]
    },
    {
      title: "Tools & Platforms",
      skills: ["JIRA", "Postman", "Salesforce CRM", "IBM Cloud", "Git"]
    },
    {
      title: "Programming",
      skills: ["Python", "JavaScript", "SQL", "HTML5", "CSS3", "Unix/Linux"]
    },
    {
      title: "Domain Knowledge",
      skills: ["Data Annotation", "NER", "Prompt Engineering", "Agile / Scrum"]
    }
  ];

  return (
    <section id="skills" className="w-full">
      <div className="mb-12">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
          Technical Skills
        </h2>
        <div className="h-1 w-20 bg-purple-500 rounded"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="glass p-6 rounded-xl hover:bg-white/[0.02] transition-colors border border-gray-800/50">
            <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span key={i} className="px-3 py-1 text-sm bg-gray-800/50 text-gray-300 rounded-full border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-colors cursor-default">
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
