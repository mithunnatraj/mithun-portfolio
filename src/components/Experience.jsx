export default function Experience() {
  return (
    <section id="experience" className="w-full">
      <div className="mb-12">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4 inline-block relative group cursor-default">
          Work Experience
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </h2>
        <div className="h-1 w-20 bg-blue-500 rounded mt-1"></div>
      </div>
      
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500/50 before:via-purple-500/50 before:to-transparent">
        
        {/* Junior QA Engineer */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-500/50 bg-[var(--color-dark-card)] text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-all duration-300 hover:scale-125 hover:bg-blue-500/10">
            <svg className="w-5 h-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-1">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <h3 className="font-bold text-xl text-white group-hover:text-blue-300 transition-colors">Junior QA Engineer</h3>
              <span className="text-sm font-medium px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 mt-2 md:mt-0 inline-block">Mar 2024 - Present</span>
            </div>
            <div className="text-gray-300 font-semibold mb-4 text-sm uppercase tracking-wider">Objectways Technologies</div>
            <ul className="list-disc list-outside ml-4 text-sm text-gray-400 space-y-2.5 leading-relaxed group-hover:text-gray-300 transition-colors">
              <li>Performed functional, regression, smoke, sanity, and API testing on web and no-code platforms including ChartApps (Google Sheets dashboard builder).</li>
              <li>Designed and maintained test cases, test plans, and RTM aligned with user stories and acceptance criteria; logged and tracked defects end-to-end in JIRA with root cause analysis.</li>
              <li>Conducted API testing using Postman to validate REST endpoints, request/response payloads, HTTP status codes, authentication, and data integrity.</li>
              <li>Automated E2E and regression test suites using Playwright (JavaScript); performed cross-browser testing across Chromium, Firefox, and WebKit.</li>
              <li>Implemented visual regression testing using Playwright screenshot comparisons to catch unintended UI changes between releases.</li>
              <li>Authored Gherkin feature files and acceptance criteria using the Cucumber BDD framework.</li>
              <li>Participated in Agile/Scrum ceremonies including sprint planning and retrospectives; prepared test summary reports each release cycle.</li>
              <li>Validated RBAC permissions, task workflows, and reporting dashboards for an internal project management tool through comprehensive E2E testing.</li>
            </ul>
          </div>
        </div>

        {/* Programmer Analyst Trainee */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-purple-500/50 bg-[var(--color-dark-card)] text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.3)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-all duration-300 hover:scale-125 hover:bg-purple-500/10">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:-translate-y-1">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <h3 className="font-bold text-xl text-white group-hover:text-purple-300 transition-colors">Programmer Analyst Trainee</h3>
              <span className="text-sm font-medium px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20 mt-2 md:mt-0 inline-block">Oct 2023 - Dec 2023</span>
            </div>
            <div className="text-gray-300 font-semibold mb-4 text-sm uppercase tracking-wider">Cognizant Technology Solutions</div>
            <ul className="list-disc list-outside ml-4 text-sm text-gray-400 space-y-2.5 leading-relaxed group-hover:text-gray-300 transition-colors">
              <li>Developed Salesforce CRM applications using Apex classes and triggers, SOQL queries, and Lightning Web Components (LWC) to deliver scalable business solutions.</li>
              <li>Configured Process Builder, Workflow Rules, custom objects, fields, page layouts, and validation rules to meet client-specific business requirements.</li>
              <li>Administered Salesforce security model including role hierarchy, profiles, and permission sets to control user access and enforce data visibility.</li>
              <li>Built and tested responsive web interfaces using HTML5, CSS3, JavaScript, and Bootstrap; performed data validation using SOQL and MySQL.</li>
              <li>Debugged Salesforce workflows, Apex logic, and UI components; completed the Salesforce Developer Catalyst Plus certification program.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}
