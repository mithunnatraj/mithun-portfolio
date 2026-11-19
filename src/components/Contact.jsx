import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again later.');
      }
    } catch (err) {
      console.error('Contact Form Error:', err);
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <section id="contact" className="w-full">
      <div className="mb-12">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-4 inline-block relative group cursor-default">
          Get In Touch
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
        </h2>
        <p className="text-[var(--color-text-secondary)] max-w-2xl">
          Found a bug in my portfolio? Or want to discuss how to build bug-free software? Drop a message below! I promise this form has been smoke-tested, UAT-approved, and is regression-free.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        {/* Info Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass p-6 rounded-2xl border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300 shadow-md">
            <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
            <div className="space-y-5">
              
              {/* Email */}
              <a 
                href="mailto:mithunnatraj2@gmail.com" 
                className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0 group-hover:bg-blue-500/20 transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs text-[var(--color-text-secondary)] font-semibold uppercase tracking-wider">Email Me</span>
                  <span className="font-medium text-sm sm:text-base break-all">mithunnatraj2@gmail.com</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/mithun-kumar-n/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0 group-hover:bg-purple-500/20 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div>
                  <span className="block text-xs text-[var(--color-text-secondary)] font-semibold uppercase tracking-wider">LinkedIn</span>
                  <span className="font-medium text-sm sm:text-base">Mithun Kumar N</span>
                </div>
              </a>

              {/* Trailblazer */}
              <a 
                href="https://www.salesforce.com/trailblazer/mkumarn2" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 shrink-0 group-hover:bg-sky-500/20 transition-all">
                  <svg className="w-5 h-5" viewBox="0 0 640 512" fill="currentColor">
                    <path d="M248.89 245.64h-26.35c.69-5.16 3.32-14.12 13.64-14.12 6.75 0 11.97 3.82 12.71 14.12zm136.66-13.88c-.47 0-14.11-1.77-14.11 20s13.63 20 14.11 20c13 0 14.11-13.54 14.11-20 0-21.76-13.66-20-14.11-20zm-243.22 23.76a8.63 8.63 0 0 0-3.29 7.29c0 4.78 2.08 6.05 3.29 7.05 4.7 3.7 15.07 2.12 20.93.95v-16.94c-5.32-1.07-16.73-1.96-20.93 1.65zM640 232c0 87.58-80 154.39-165.36 136.43-18.37 33-70.73 70.75-132.2 41.63-41.16 96.05-177.89 92.18-213.81-5.17C8.91 428.78-50.19 266.52 53.36 205.61 18.61 126.18 76 32 167.67 32a124.24 124.24 0 0 1 98.56 48.7c20.7-21.4 49.4-34.81 81.15-34.81 42.34 0 79 23.52 98.8 58.57C539 63.78 640 132.69 640 232zm-519.55 31.8c0-11.76-11.69-15.17-17.87-17.17-5.27-2.11-13.41-3.51-13.41-8.94 0-9.46 17-6.66 25.17-2.12 0 0 1.17.71 1.64-.47.24-.7 2.36-6.58 2.59-7.29a1.13 1.13 0 0 0-.7-1.41c-12.33-7.63-40.7-8.51-40.7 12.7 0 12.46 11.49 15.44 17.88 17.17 4.72 1.58 13.17 3 13.17 8.7 0 4-3.53 7.06-9.17 7.06a31.76 31.76 0 0 1-19-6.35c-.47-.23-1.42-.71-1.65.71l-2.4 7.47c-.47.94.23 1.18.23 1.41 1.75 1.4 10.3 6.59 22.82 6.59 13.17 0 21.4-7.06 21.4-18.11zm32-42.58c-10.13 0-18.66 3.17-21.4 5.18a1 1 0 0 0-.24 1.41l2.59 7.06a1 1 0 0 0 1.18.7c.65 0 6.8-4 16.93-4 4 0 7.06.71 9.18 2.36 3.6 2.8 3.06 8.29 3.06 10.58-4.79-.3-19.11-3.44-29.41 3.76a16.92 16.92 0 0 0-7.34 14.54c0 5.9 1.51 10.4 6.59 14.35 12.24 8.16 36.28 2 38.1 1.41 1.58-.32 3.53-.66 3.53-1.88v-33.88c.04-4.61.32-21.64-22.78-21.64zM199 200.24a1.11 1.11 0 0 0-1.18-1.18H188a1.11 1.11 0 0 0-1.17 1.18v79a1.11 1.11 0 0 0 1.17 1.18h9.88a1.11 1.11 0 0 0 1.18-1.18zm55.75 28.93c-2.1-2.31-6.79-7.53-17.65-7.53-3.51 0-14.16.23-20.7 8.94-6.35 7.63-6.58 18.11-6.58 21.41 0 3.12.15 14.26 7.06 21.17 2.64 2.91 9.06 8.23 22.81 8.23 10.82 0 16.47-2.35 18.58-3.76.47-.24.71-.71.24-1.88l-2.35-6.83a1.26 1.26 0 0 0-1.41-.7c-2.59.94-6.35 2.82-15.29 2.82-17.42 0-16.85-14.74-16.94-16.7h37.17a1.23 1.23 0 0 0 1.17-.94c-.29 0 2.07-14.7-6.09-24.23zm36.69 52.69c13.17 0 21.41-7.06 21.41-18.11 0-11.76-11.7-15.17-17.88-17.17-4.14-1.66-13.41-3.38-13.41-8.94 0-3.76 3.29-6.35 8.47-6.35a38.11 38.11 0 0 1 16.7 4.23s1.18.71 1.65-.47c.23-.7 2.35-6.58 2.58-7.29a1.13 1.13 0 0 0-.7-1.41c-7.91-4.9-16.74-4.94-20.23-4.94-12 0-20.46 7.29-20.46 17.64 0 12.46 11.48 15.44 17.87 17.17 6.11 2 13.17 3.26 13.17 8.7 0 4-3.52 7.06-9.17 7.06a31.8 31.8 0 0 1-19-6.35 1 1 0 0 0-1.65.71l-2.35 7.52c-.47.94.23 1.18.23 1.41 1.72 1.4 10.33 6.59 22.79 6.59zM357.09 224c0-.71-.24-1.18-1.18-1.18h-11.76c0-.14.94-8.94 4.47-12.47 4.16-4.15 11.76-1.64 12-1.64 1.17.47 1.41 0 1.64-.47l2.83-7.77c.7-.94 0-1.17-.24-1.41-5.09-2-17.35-2.87-24.46 4.24-5.48 5.48-7 13.92-8 19.52h-8.47a1.28 1.28 0 0 0-1.17 1.18l-1.42 7.76c0 .7.24 1.17 1.18 1.17h8.23c-8.51 47.9-8.75 50.21-10.35 55.52-1.08 3.62-3.29 6.9-5.88 7.76-.09 0-3.88 1.68-9.64-.24 0 0-.94-.47-1.41.71-.24.71-2.59 6.82-2.83 7.53s0 1.41.47 1.41c5.11 2 13 1.77 17.88 0 6.28-2.28 9.72-7.89 11.53-12.94 2.75-7.71 2.81-9.79 11.76-59.74h12.23a1.29 1.29 0 0 0 1.18-1.18zm53.39 16c-.56-1.68-5.1-18.11-25.17-18.11-15.25 0-23 10-25.16 18.11-1 3-3.18 14 0 23.52.09.3 4.41 18.12 25.16 18.12 14.95 0 22.9-9.61 25.17-18.12 3.21-9.61 1.01-20.52 0-23.52zm45.4-16.7c-5-1.65-16.62-1.9-22.11 5.41v-4.47a1.11 1.11 0 0 0-1.18-1.17h-9.4a1.11 1.11 0 0 0-1.18 1.17v55.28a1.12 1.12 0 0 0 1.18 1.18h9.64a1.12 1.12 0 0 0 1.18-1.18v-27.77c0-2.91.05-11.37 4.46-15.05 4.9-4.9 12-3.36 13.41-3.06a1.57 1.57 0 0 0 1.41-.94 74 74 0 0 0 3.06-8 1.16 1.16 0 0 0-.47-1.41zm46.81 54.1l-2.12-7.29c-.47-1.18-1.41-.71-1.41-.71-4.23 1.82-10.15 1.89-11.29 1.89-4.64 0-17.17-1.13-17.17-19.76 0-6.23 1.85-19.76 16.47-19.76a34.85 34.85 0 0 1 11.52 1.65s.94.47 1.18-.71c.94-2.59 1.64-4.47 2.59-7.53.23-.94-.47-1.17-.71-1.17-11.59-3.87-22.34-2.53-27.76 0-1.59.74-16.23 6.49-16.23 27.52 0 2.9-.58 30.11 28.94 30.11a44.45 44.45 0 0 0 15.52-2.83 1.3 1.3 0 0 0 .47-1.42zm53.87-39.52c-.8-3-5.37-16.23-22.35-16.23-16 0-23.52 10.11-25.64 18.59a38.58 38.58 0 0 0-1.65 11.76c0 25.87 18.84 29.4 29.88 29.4 10.82 0 16.46-2.35 18.58-3.76.47-.24.71-.71.24-1.88l-2.36-6.83a1.26 1.26 0 0 0-1.41-.7c-2.59.94-6.35 2.82-15.29 2.82-17.42 0-16.85-14.74-16.93-16.7h37.16a1.25 1.25 0 0 0 1.18-.94c-.24-.01.94-7.07-1.41-15.54zm-23.29-6.35c-10.33 0-13 9-13.64 14.12H546c-.88-11.92-7.62-14.13-12.73-14.13z"/>
                  </svg>
                </div>
                <div>
                  <span className="block text-xs text-[var(--color-text-secondary)] font-semibold uppercase tracking-wider">Trailblazer Profile</span>
                  <span className="font-medium text-sm sm:text-base">Mithun Kumar N</span>
                </div>
              </a>


            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl border border-gray-800/50 hover:border-purple-500/20 transition-all duration-300 flex flex-col gap-6">
            
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-gray-300">Name <span className="text-red-400">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Bug Hunter / QA Engineer"
                  className="px-4 py-3 bg-[var(--color-dark-bg)]/85 text-white border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                  disabled={status === 'loading'}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-gray-300">Email <span className="text-red-400">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="e.g. tester@domain.com"
                  className="px-4 py-3 bg-[var(--color-dark-bg)]/85 text-white border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                  disabled={status === 'loading'}
                />
              </div>
            </div>

            {/* Row 2: Subject */}
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm font-semibold text-gray-300">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. High Severity bug in regression suite"
                className="px-4 py-3 bg-[var(--color-dark-bg)]/85 text-white border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                disabled={status === 'loading'}
              />
            </div>

            {/* Row 3: Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-gray-300">Message <span className="text-red-400">*</span></label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Enter your message details or describe the bug..."
                className="px-4 py-3 bg-[var(--color-dark-bg)]/85 text-white border border-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none"
                disabled={status === 'loading'}
              />
            </div>

            {/* Status alerts */}
            {status === 'success' && (
              <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-950/20 text-emerald-300 text-sm flex items-center gap-3">
                <svg className="w-5 h-5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Status 200 OK! Message validated, smoke-tested, and successfully logged in the database.</span>
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 rounded-xl border border-red-500/30 bg-red-950/20 text-red-300 text-sm flex items-center gap-3">
                <svg className="w-5 h-5 text-red-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className={`w-full py-4 px-6 rounded-xl font-bold text-white transition-all duration-300 cursor-pointer shadow-md select-none flex items-center justify-center gap-2
                ${status === 'loading' 
                  ? 'bg-gray-800/80 text-gray-500 cursor-not-allowed border border-gray-700/50' 
                  : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 active:scale-[0.98] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                }`}
            >
              {status === 'loading' ? (
                <>
                  <svg className="animate-bounce h-5 w-5 text-purple-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 8h-2.1c-.2-.7-.5-1.3-.9-1.9l1.7-1.7-1.4-1.4-2 2C13.5 4.4 12.8 4 12 4s-1.5.4-2.3 1l-2-2-1.4 1.4 1.7 1.7c-.4.6-.7 1.2-.9 1.9H5v2h2.1c0 .3-.1.7-.1 1v1H5v2h2v1c0 .3.1.7.1 1H5v2h2.1c.2.7.5 1.3.9 1.9l-1.7 1.7 1.4 1.4 2-2c.8.6 1.5 1 2.3 1s1.5-.4 2.3-1l2 2 1.4-1.4-1.7-1.7c.4-.6.7-1.2.9-1.9H19v-2h-2.1c0-.3.1-.7.1-1v-1h2v-2h-2v-1c0-.3-.1-.7-.1-1H19V8zm-4 4c0 1.7-1.3 3-3 3s-3-1.3-3-3v-2c0-1.7 1.3-3 3-3s3 1.3 3 3v2z" />
                  </svg>
                  <span>Smoke testing submission...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <svg className="w-4.5 h-4.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}
