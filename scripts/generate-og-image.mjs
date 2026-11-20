import { chromium } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const outputPath = path.join(projectRoot, 'public', 'og-image.png');

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    width: 1200px;
    height: 630px;
    background: #080B12;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: #F8FAFC;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-font-smoothing: antialiased;
  }

  /* Ambient glowing orbs */
  .orb-1 {
    position: absolute;
    top: -120px;
    left: -100px;
    width: 550px;
    height: 550px;
    background: radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, rgba(56, 189, 248, 0) 70%);
    filter: blur(40px);
    pointer-events: none;
  }
  .orb-2 {
    position: absolute;
    bottom: -150px;
    right: -100px;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(168, 85, 247, 0) 70%);
    filter: blur(50px);
    pointer-events: none;
  }
  .orb-3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 400px;
    background: radial-gradient(ellipse, rgba(30, 41, 59, 0.5) 0%, transparent 75%);
    pointer-events: none;
  }

  /* Grid pattern */
  .grid-pattern {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
  }

  /* Card wrapper */
  .card {
    position: relative;
    width: 1120px;
    height: 550px;
    background: rgba(13, 20, 36, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 28px;
    padding: 44px 52px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
  }

  /* Top row */
  .top-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .brand {
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .logo-box {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    background: rgba(56, 189, 248, 0.12);
    border: 1px solid rgba(56, 189, 248, 0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 20px rgba(56, 189, 248, 0.25);
  }
  .logo-box svg {
    width: 28px;
    height: 28px;
  }
  .brand-text h2 {
    font-size: 20px;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #F8FAFC;
  }
  .brand-text p {
    font-size: 13px;
    font-weight: 500;
    color: #94A3B8;
  }
  .status-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 18px;
    border-radius: 9999px;
    background: rgba(16, 185, 129, 0.1);
    border: 1px solid rgba(16, 185, 129, 0.3);
    color: #34D399;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.02em;
  }
  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 9999px;
    background: #10B981;
    box-shadow: 0 0 10px #10B981;
  }

  /* Hero Content */
  .main-content {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .badge-tag {
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 14px;
    border-radius: 9999px;
    background: rgba(56, 189, 248, 0.1);
    border: 1px solid rgba(56, 189, 248, 0.25);
    color: #38BDF8;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
  .heading {
    font-size: 46px;
    font-weight: 800;
    line-height: 1.15;
    letter-spacing: -0.03em;
    color: #FFFFFF;
  }
  .gradient-text {
    background: linear-gradient(135deg, #38BDF8 0%, #818CF8 50%, #C084FC 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .role-sub {
    font-size: 22px;
    font-weight: 600;
    color: #CBD5E1;
    margin-top: -4px;
  }
  .desc {
    font-size: 16px;
    line-height: 1.55;
    color: #94A3B8;
    max-width: 980px;
    margin-top: 2px;
  }

  /* Metric cards */
  .metrics-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-top: 4px;
  }
  .metric-card {
    background: rgba(15, 23, 42, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 16px;
    padding: 14px 18px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .metric-value {
    font-size: 22px;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: #38BDF8;
  }
  .metric-label {
    font-size: 12px;
    font-weight: 500;
    color: #94A3B8;
    line-height: 1.3;
  }

  /* Bottom bar */
  .bottom-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 14px;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
  }
  .tags {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .pill {
    padding: 5px 12px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    font-size: 12px;
    font-weight: 500;
    color: #CBD5E1;
  }
  .domain {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    font-weight: 600;
    color: #38BDF8;
    letter-spacing: -0.01em;
  }
</style>
</head>
<body>
  <div class="orb-1"></div>
  <div class="orb-2"></div>
  <div class="orb-3"></div>
  <div class="grid-pattern"></div>

  <div class="card">
    <div class="top-row">
      <div class="brand">
        <div class="logo-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 4c.6-1.3 1.8-2 3-2M12 4C11.4 2.7 10.2 2 9 2" />
            <rect x="8" y="6" width="8" height="12" rx="4" fill="rgba(56,189,248,0.2)" />
            <path d="M10 6a2 2 0 0 1 4 0" />
            <path d="M8 9H4M8 12H4M8 15H4" />
            <path d="M16 9h4M16 12h4M16 15h4" />
            <line x1="12" y1="10" x2="12" y2="18" />
          </svg>
        </div>
        <div class="brand-text">
          <h2>Mithun Kumar N</h2>
          <p>QA Engineer Portfolio</p>
        </div>
      </div>
      <div class="status-pill">
        <span class="status-dot"></span>
        Open to Opportunities
      </div>
    </div>

    <div class="main-content">
      <div class="badge-tag">Quality Assurance & Testing</div>
      <h1 class="heading">Hi, I'm <span class="gradient-text">Mithun Kumar N</span></h1>
      <div class="role-sub">QA Engineer • 2+ Years Experience</div>
      <p class="desc">
        Detail-oriented QA Engineer specializing in manual testing of web applications, functional & regression testing, Postman API validation, and test automation. Proven track record in defect discovery, test scenario design, and root-cause analysis.
      </p>
    </div>

    <div class="metrics-row">
      <div class="metric-card">
        <div class="metric-value">2+ Years</div>
        <div class="metric-label">Hands-on QA Experience</div>
      </div>
      <div class="metric-card">
        <div class="metric-value">300+ Bugs</div>
        <div class="metric-label">Defects Logged in Jira with RCA</div>
      </div>
      <div class="metric-card">
        <div class="metric-value">200+ Cases</div>
        <div class="metric-label">Test Scenarios Executed / Release</div>
      </div>
      <div class="metric-card">
        <div class="metric-value">Agile / Scrum</div>
        <div class="metric-label">Sprint-Ready QA Delivery</div>
      </div>
    </div>

    <div class="bottom-row">
      <div class="tags">
        <span class="pill">Functional Testing</span>
        <span class="pill">Regression & Smoke</span>
        <span class="pill">Postman API</span>
        <span class="pill">Playwright</span>
        <span class="pill">Jira & STLC</span>
      </div>
      <div class="domain">
        <span>🔗 mithunkumar-qa.vercel.app</span>
      </div>
    </div>
  </div>
</body>
</html>`;

async function generate() {
  console.log('Launching browser to render OpenGraph banner...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 2 // Generates crisp high-DPI 2400x1260 image
  });

  await page.setContent(htmlContent, { waitUntil: 'networkidle' });
  await page.screenshot({ path: outputPath, type: 'png' });
  await browser.close();

  console.log('Successfully generated OpenGraph image at:', outputPath);
}

generate().catch(err => {
  console.error('Failed to generate OpenGraph image:', err);
  process.exit(1);
});
