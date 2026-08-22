import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const resendApiKey = process.env.RESEND_API_KEY;
const personalEmail = process.env.PERSONAL_EMAIL;

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: `Method ${req.method} not allowed. Please use POST.` });
  }

  // Validate server configuration
  if (!supabaseUrl || !supabaseServiceKey) {
    console.error('Supabase keys are missing in environment variables.');
    return res.status(500).json({ error: 'Database configuration is missing on the server.' });
  }
  if (!resendApiKey || !personalEmail) {
    console.error('Resend keys or personal email is missing in environment variables.');
    return res.status(500).json({ error: 'Email notification service is not configured on the server.' });
  }

  const { name, email, subject, message } = req.body;

  // Input validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required fields.' });
  }

  try {
    // 1. Save submission to Supabase DB
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const { error: dbError } = await supabase
      .from('contact_messages')
      .insert([{ name, email, subject: subject || 'No Subject', message }]);

    if (dbError) {
      console.error('Supabase Database Error:', dbError);
      throw new Error(`Database error: ${dbError.message}`);
    }

    // 2. Prepare HTML Email notification
    const emailSubject = subject ? `Portfolio Message: ${subject}` : `New Message from Portfolio: ${name}`;
    
    const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Portfolio Message</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0b0f19; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #f8fafc; -webkit-font-smoothing: antialiased;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #0b0f19; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #151a26; border: 1px solid #1f2937; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);">
          
          <!-- Top Gradient Accent -->
          <tr>
            <td height="6" style="background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);"></td>
          </tr>
          
          <!-- Header Area -->
          <tr>
            <td style="padding: 30px 40px; border-bottom: 1px solid #1f2937; text-align: left;">
              <h1 style="margin: 0; font-size: 20px; font-weight: 700; color: #f8fafc; letter-spacing: -0.025em; display: inline-block;">
                Mithun Portfolio
              </h1>
              <span style="float: right; font-size: 12px; color: #94a3b8; background-color: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.2); padding: 4px 8px; border-radius: 9999px; margin-top: 4px; font-weight: 500;">
                New Message
              </span>
            </td>
          </tr>
          
          <!-- Message Content Area -->
          <tr>
            <td style="padding: 40px 40px 30px 40px;">
              <p style="margin: 0 0 24px 0; font-size: 15px; line-height: 1.6; color: #e2e8f0;">
                You received a new message from your portfolio website:
              </p>
              
              <!-- Contact Details Block -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 30px; background-color: rgba(11, 15, 25, 0.5); border: 1px solid #1f2937; border-radius: 8px; padding: 20px;">
                <tr>
                  <td style="padding-bottom: 10px; width: 80px; font-size: 13px; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em;">From:</td>
                  <td style="padding-bottom: 10px; font-size: 14px; color: #f8fafc; font-weight: 500;">${escapeHtml(name)}</td>
                </tr>
                <tr>
                  <td style="padding-bottom: 10px; font-size: 13px; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em;">Email:</td>
                  <td style="padding-bottom: 10px; font-size: 14px; color: #3b82f6;"><a href="mailto:${escapeHtml(email)}" style="color: #3b82f6; text-decoration: none;">${escapeHtml(email)}</a></td>
                </tr>
                <tr>
                  <td style="font-size: 13px; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em;">Subject:</td>
                  <td style="font-size: 14px; color: #f8fafc; font-weight: 500;">${escapeHtml(subject || 'No Subject')}</td>
                </tr>
              </table>
              
              <!-- Actual Message -->
              <h3 style="margin: 0 0 12px 0; font-size: 13px; font-weight: 600; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.05em;">Message:</h3>
              <div style="background-color: rgba(11, 15, 25, 0.5); border: 1px solid #1f2937; border-radius: 8px; padding: 20px; font-size: 14px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap; font-style: italic;">
                "${escapeHtml(message)}"
              </div>
            </td>
          </tr>
          
          <!-- Actions / Button Area -->
          <tr>
            <td style="padding: 0 40px 40px 40px; text-align: center;">
              <a href="mailto:${escapeHtml(email)}?subject=Re: ${escapeHtml(subject || 'Portfolio Connection')}" style="display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); color: #ffffff; text-decoration: none; padding: 12px 28px; font-size: 14px; font-weight: 600; border-radius: 6px; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3); transition: all 0.2s ease;">
                Reply Directly via Email
              </a>
            </td>
          </tr>
          
          <!-- Footer Area -->
          <tr>
            <td style="padding: 20px 40px; background-color: #0b0f19; border-top: 1px solid #1f2937; text-align: center; font-size: 12px; color: #94a3b8;">
              This notification was automatically sent from your Portfolio website.
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    // 3. Send notification email using Resend
    const resend = new Resend(resendApiKey);
    const emailResult = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Resend standard free-tier sandbox domain
      to: personalEmail,
      subject: emailSubject,
      replyTo: email,
      html: htmlContent,
    });

    if (emailResult.error) {
      console.error('Resend API Error:', emailResult.error);
      throw new Error(`Email delivery failed: ${emailResult.error.message}`);
    }

    return res.status(200).json({ success: true, message: 'Message recorded and email sent!' });
  } catch (error) {
    console.error('Serverless Contact Endpoint Error:', error);
    return res.status(500).json({ error: error.message || 'Failed to complete contact form submission.' });
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
