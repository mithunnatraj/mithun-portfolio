export default function Experience() {
  return (
    <section id="experience" className="w-full">
      <div className="mb-12">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
          Work Experience
        </h2>
        <div className="h-1 w-20 bg-blue-500 rounded"></div>
      </div>
      
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
        {/* Junior QA Engineer */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-[var(--color-dark-card)] text-blue-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform hover:scale-110">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-colors shadow-lg">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <h3 className="font-bold text-xl text-white">Junior QA Engineer</h3>
              <span className="text-sm font-medium text-blue-400 mt-1 md:mt-0">Oct 2025 - Present</span>
            </div>
            <div className="text-gray-300 font-semibold mb-4 text-sm uppercase tracking-wider">Objectways Technologies</div>
            <ul className="list-disc list-outside ml-4 text-sm text-gray-400 space-y-2.5 leading-relaxed">
              <li>Executed functional, regression, smoke, and sanity testing on web and no-code applications including ChartApps, a Google Sheets-based dashboard and app builder platform.</li>
              <li>Designed, documented, and maintained detailed test cases and test plans based on business requirements and user stories.</li>
              <li>Identified, logged, and tracked defects in JIRA; collaborated with developers to verify fixes and performed re-testing until closure.</li>
              <li>Performed end-to-end testing of an internal project management tool covering task creation, assignment workflows, user role permissions, and dashboard reporting.</li>
              <li>Validated UI consistency, cross-browser compatibility, and responsive behavior across different environments.</li>
              <li>Participated in sprint planning, daily stand-ups, and defect triage meetings within an Agile/Scrum framework.</li>
            </ul>
          </div>
        </div>

        {/* Analyst */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-[var(--color-dark-card)] text-purple-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform hover:scale-110">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-colors shadow-lg">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <h3 className="font-bold text-xl text-white">Analyst</h3>
              <span className="text-sm font-medium text-purple-400 mt-1 md:mt-0">Mar 2024 - Oct 2025</span>
            </div>
            <div className="text-gray-300 font-semibold mb-4 text-sm uppercase tracking-wider">Objectways Technologies</div>
            <ul className="list-disc list-outside ml-4 text-sm text-gray-400 space-y-2.5 leading-relaxed">
              <li>Handled LLM tasks including prompt engineering, NER, data annotation, and model output evaluation.</li>
              <li>Processed and validated large datasets, ensuring data quality and consistency across project workflows.</li>
              <li>Annotated medical records using standard coding systems for compliant, structured documentation.</li>
            </ul>
          </div>
        </div>

        {/* Programmer Analyst Trainee */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-[var(--color-dark-card)] text-teal-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform hover:scale-110">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-xl border border-gray-800 hover:border-teal-500/50 transition-colors shadow-lg">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
              <h3 className="font-bold text-xl text-white">Programmer Analyst Trainee</h3>
              <span className="text-sm font-medium text-teal-400 mt-1 md:mt-0">Oct 2023 - Dec 2023</span>
            </div>
            <div className="text-gray-300 font-semibold mb-4 text-sm uppercase tracking-wider">Cognizant Technology Solutions</div>
            <ul className="list-disc list-outside ml-4 text-sm text-gray-400 space-y-2.5 leading-relaxed">
              <li>Worked on Salesforce CRM, developing and testing custom applications using Apex, SOQL, and Lightning Web Components.</li>
              <li>Conducted UI/UX testing for web applications built with HTML5, CSS3, JavaScript, and Bootstrap.</li>
              <li>Validated database records and queries using MySQL and SOQL to ensure backend data integrity.</li>
              <li>Applied problem-solving and debugging skills to identify and report defects in workflows and UI behavior.</li>
              <li>Gained hands-on experience with Unix, workflow automation, and front-end web development practices.</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}
