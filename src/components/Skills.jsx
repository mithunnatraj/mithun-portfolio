// Actual image/logo URLs from official CDNs (Devicon, SimpleIcons, Iconify)
const SKILL_IMAGE_MAP = {
  // Tools & Automation (Devicon / SimpleIcons)
  "Playwright (JavaScript)": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg",
  "Playwright": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg",
  "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  "Jira": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  "Google Sheets": "https://cdn.simpleicons.org/googlesheets/34A853",
  "Google Antigravity": "https://cdn.simpleicons.org/google/4285F4",
  "Gherkin": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cucumber/cucumber-plain.svg",
  "BDD": "https://api.iconify.design/lucide/git-branch.svg?color=%2310b981",

  // API Testing
  "HTTP Status Codes": "https://api.iconify.design/lucide/binary.svg?color=%233b82f6",

  // AI Tools
  "Gemini": "https://api.iconify.design/simple-icons/googlegemini.svg?color=%234e88f5",
  "ChatGPT": "https://api.iconify.design/simple-icons/openai.svg?color=%2310b981",
  "Claude": "https://api.iconify.design/simple-icons/anthropic.svg?color=%23d97757",

  // Programming
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",

  // Manual Testing
  "Functional Testing": "https://api.iconify.design/lucide/check-circle-2.svg?color=%2310b981",
  "Regression Testing": "https://api.iconify.design/lucide/rotate-ccw.svg?color=%2306b6d4",
  "Smoke Testing": "https://api.iconify.design/lucide/flame.svg?color=%23f59e0b",
  "Sanity Testing": "https://api.iconify.design/lucide/activity.svg?color=%23ec4899",
  "UAT": "https://api.iconify.design/lucide/user-check.svg?color=%238b5cf6",
  "End-to-End Testing": "https://api.iconify.design/lucide/workflow.svg?color=%236366f1",
  "Black-Box Testing": "https://api.iconify.design/lucide/box.svg?color=%23a855f7",
  "Exploratory Testing": "https://api.iconify.design/lucide/compass.svg?color=%2314b8a6",
  "Cross-Browser Testing": "https://api.iconify.design/lucide/globe.svg?color=%2338bdf8",
  "UI/UX Testing": "https://api.iconify.design/lucide/layout.svg?color=%23d946ef",
  "Positive and Negative Test Case Design": "https://api.iconify.design/lucide/plus-circle.svg?color=%2322c55e",
  "Positive & Negative Testing": "https://api.iconify.design/lucide/plus-circle.svg?color=%2322c55e",
  "Boundary Value Analysis": "https://api.iconify.design/lucide/sliders.svg?color=%23f97316",
  "Equivalence Partitioning": "https://api.iconify.design/lucide/grid.svg?color=%233b82f6",
  "Compatibility Testing": "https://api.iconify.design/lucide/laptop.svg?color=%23eab308",

  // Test Management & Reporting
  "Test Plan": "https://api.iconify.design/lucide/clipboard-list.svg?color=%233b82f6",
  "Test Strategy": "https://api.iconify.design/lucide/target.svg?color=%23a855f7",
  "Test Case Design": "https://api.iconify.design/lucide/file-edit.svg?color=%2360a5fa",
  "Test Scenario Design": "https://api.iconify.design/lucide/git-commit.svg?color=%2338bdf8",
  "Test Execution Reporting": "https://api.iconify.design/lucide/bar-chart-3.svg?color=%23818cf8",
  "Test Summary Reports": "https://api.iconify.design/lucide/file-text.svg?color=%23a78bfa",
  "Defect Life Cycle": "https://api.iconify.design/lucide/repeat.svg?color=%23f97316",
  "Defect Tracking": "https://api.iconify.design/lucide/bug.svg?color=%23f43f5e",
  "Bug Triage": "https://api.iconify.design/lucide/filter.svg?color=%23eab308",
  "Root Cause Analysis (RCA)": "https://api.iconify.design/lucide/search.svg?color=%23ef4444",

  // Process & Methodologies
  "SDLC": "https://api.iconify.design/lucide/code-2.svg?color=%2306b6d4",
  "STLC": "https://api.iconify.design/lucide/flask-conical.svg?color=%2310b981",
  "Agile QA Methodologies": "https://api.iconify.design/lucide/refresh-cw.svg?color=%233b82f6",
  "Scrum": "https://api.iconify.design/lucide/kanban-square.svg?color=%238b5cf6",
  "Sprint Planning": "https://api.iconify.design/lucide/calendar.svg?color=%2338bdf8",
  "Backlog Refinement": "https://api.iconify.design/lucide/layers.svg?color=%23f59e0b",
  "Daily Stand-ups": "https://api.iconify.design/lucide/messages-square.svg?color=%2310b981",
  "Sprint Retrospectives": "https://api.iconify.design/lucide/history.svg?color=%23ec4899"
};

export default function Skills() {
  // Exact 8 categories & items directly from Resume:
  const skillCategories = [
    {
      title: "Manual Testing",
      skills: [
        "Functional Testing",
        "Regression Testing",
        "Smoke Testing",
        "Sanity Testing",
        "UAT",
        "End-to-End Testing",
        "Black-Box Testing",
        "Exploratory Testing",
        "Cross-Browser Testing",
        "UI/UX Testing",
        "Positive and Negative Test Case Design",
        "Boundary Value Analysis",
        "Equivalence Partitioning",
        "Compatibility Testing"
      ]
    },
    {
      title: "Test Management & Reporting",
      skills: [
        "Test Plan",
        "Test Strategy",
        "Test Case Design",
        "Test Scenario Design",
        "Test Execution Reporting",
        "Test Summary Reports",
        "Defect Life Cycle",
        "Defect Tracking",
        "Bug Triage",
        "Root Cause Analysis (RCA)"
      ]
    },
    {
      title: "Process & Methodologies",
      skills: [
        "SDLC",
        "STLC",
        "Agile QA Methodologies",
        "Scrum",
        "Sprint Planning",
        "Backlog Refinement",
        "Daily Stand-ups",
        "Sprint Retrospectives"
      ]
    },
    {
      title: "Tools",
      skills: [
        "Jira",
        "Postman",
        "Playwright",
        "Git",
        "GitHub",
        "VS Code",
        "Google Antigravity",
        "Google Sheets"
      ]
    },
    {
      title: "Automation",
      skills: [
        "Playwright (JavaScript)",
        "Gherkin",
        "BDD"
      ]
    },
    {
      title: "API Testing",
      skills: [
        "Postman",
        "HTTP Status Codes"
      ]
    },
    {
      title: "Programming",
      skills: [
        "JavaScript",
        "HTML5",
        "CSS3"
      ]
    },
    {
      title: "AI Tools",
      skills: [
        "Gemini",
        "ChatGPT",
        "Claude"
      ]
    }
  ];

  return (
    <section className="w-full">
      <div className="mb-12">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4 inline-block relative group cursor-default">
          Technical Skills
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </h2>
      </div>

      {/* Balanced 2-Column Responsive Grid across all viewport resolutions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="glass p-6 rounded-2xl flex flex-col justify-between border border-gray-800/60 hover:border-purple-500/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.25)] transition-all duration-300 group hover:-translate-y-0.5"
          >
            <div>
              <div className="mb-5 pb-3 border-b border-gray-800/60">
                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-medium bg-gray-800/60 text-gray-200 rounded-lg border border-gray-700/70 hover:border-blue-400/80 hover:text-white hover:bg-blue-900/20 hover:scale-[1.02] transition-all duration-200 cursor-default shadow-sm select-none"
                  >
                    <img
                      src={SKILL_IMAGE_MAP[skill] || "https://api.iconify.design/lucide/check-circle-2.svg?color=%2310b981"}
                      alt={skill}
                      loading="lazy"
                      className="w-4 h-4 object-contain shrink-0"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <span className="whitespace-nowrap">{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
