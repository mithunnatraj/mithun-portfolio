import React, { useState, useEffect, useRef } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const turnstileContainerRef = useRef(null);
  const widgetIdRef = useRef(null);

  useEffect(() => {
    const loadTurnstile = () => {
      if (window.turnstile) {
        renderWidget();
        return;
      }

      // Add Turnstile script tag to the DOM
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      script.async = true;
      script.defer = true;
      script.id = 'cloudflare-turnstile-script';
      document.body.appendChild(script);

      script.onload = () => {
        renderWidget();
      };
    };

    const renderWidget = () => {
      const sitekey = import.meta.env.VITE_TURNSTILE_SITEKEY;
      if (!sitekey || sitekey === 'your-cloudflare-turnstile-sitekey-here') {
        console.warn('VITE_TURNSTILE_SITEKEY is missing or configured as placeholder.');
        return;
      }

      if (window.turnstile && turnstileContainerRef.current) {
        try {
          widgetIdRef.current = window.turnstile.render(turnstileContainerRef.current, {
            sitekey: sitekey,
            theme: 'dark',
            callback: (token) => {
              setTurnstileToken(token);
            },
            'expired-callback': () => {
              setTurnstileToken('');
            },
            'error-callback': () => {
              setTurnstileToken('');
            },
          });
        } catch (err) {
          console.error('Failed to render Turnstile widget:', err);
        }
      }
    };

    loadTurnstile();

    return () => {
      if (window.turnstile && widgetIdRef.current !== null) {
        window.turnstile.remove(widgetIdRef.current);
      }
    };
  }, []);

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

    if (!turnstileToken) {
      setStatus('error');
      setErrorMessage('Please complete the security check verification.');
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
        body: JSON.stringify({ ...formData, turnstileToken }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTurnstileToken('');
        if (window.turnstile && widgetIdRef.current !== null) {
          window.turnstile.reset(widgetIdRef.current);
        }
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again later.');
        if (window.turnstile && widgetIdRef.current !== null) {
          window.turnstile.reset(widgetIdRef.current);
          setTurnstileToken('');
        }
      }
    } catch (err) {
      console.error('Contact Form Error:', err);
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
      if (window.turnstile && widgetIdRef.current !== null) {
        window.turnstile.reset(widgetIdRef.current);
        setTurnstileToken('');
      }
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
                <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0 group-hover:bg-blue-500/20 transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
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

            {/* Turnstile Verification Widget */}
            <div className="flex justify-center w-full min-h-[65px] my-2">
              <div ref={turnstileContainerRef} id="cf-turnstile"></div>
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
