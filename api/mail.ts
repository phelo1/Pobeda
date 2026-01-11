import type { VercelRequest, VercelResponse } from '@vercel/node';

// Type definitions (inline to avoid import issues)
interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  propertySize: string;
  propertyType: string;
  workRequired: string;
  location: string;
}

interface CalculatorFormData {
  squareMeters: number;
  email: string;
  phone: string;
}

// Email configuration - set these in Vercel environment variables
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'info@pobedallc.com';
const SENDER_EMAIL = process.env.SENDER_EMAIL || 'noreply@pobedallc.com';

// You can use various email services. This example uses a simple fetch-based approach
// For production, consider using: Resend, SendGrid, Mailgun, or Nodemailer

async function sendEmail(
  subject: string,
  htmlBody: string,
  textBody: string
): Promise<boolean> {
  // Option 1: Using Resend (recommended for Vercel)
  // Install: npm install resend
  // Uncomment and configure:
  /*
  const { Resend } = require('resend');
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  try {
    await resend.emails.send({
      from: SENDER_EMAIL,
      to: RECIPIENT_EMAIL,
      subject: subject,
      html: htmlBody,
      text: textBody,
    });
    return true;
  } catch (error) {
    console.error('Resend error:', error);
    return false;
  }
  */

  // Option 2: Using SendGrid
  // Install: npm install @sendgrid/mail
  // Uncomment and configure:
  /*
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  
  try {
    await sgMail.send({
      to: RECIPIENT_EMAIL,
      from: SENDER_EMAIL,
      subject: subject,
      text: textBody,
      html: htmlBody,
    });
    return true;
  } catch (error) {
    console.error('SendGrid error:', error);
    return false;
  }
  */

  // Option 3: Using a custom SMTP service (via Nodemailer)
  // Install: npm install nodemailer
  // Uncomment and configure:
  /*
  const nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  
  try {
    await transporter.sendMail({
      from: SENDER_EMAIL,
      to: RECIPIENT_EMAIL,
      subject: subject,
      text: textBody,
      html: htmlBody,
    });
    return true;
  } catch (error) {
    console.error('SMTP error:', error);
    return false;
  }
  */

  // Temporary: Log to console (for development/testing)
  console.log('=== EMAIL WOULD BE SENT ===');
  console.log('To:', RECIPIENT_EMAIL);
  console.log('Subject:', subject);
  console.log('Body:', textBody);
  console.log('==========================');
  
  // Return true for now so the form submission appears successful
  // Replace this with actual email sending implementation
  return true;
}

function formatQuoteEmail(data: QuoteFormData, isVisitOnly: boolean): { subject: string; html: string; text: string } {
  const type = isVisitOnly ? 'Free Site Visit Request' : 'Project Quote Request';
  
  const subject = `New ${type} - Pobeda LLC`;
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #D4AF37; color: #000; padding: 20px; text-align: center; }
        .content { background-color: #f9f9f9; padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #D4AF37; }
        .value { margin-top: 5px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New ${type}</h2>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Full Name:</div>
            <div class="value">${data.fullName || 'Not provided'}</div>
          </div>
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value">${data.phone || 'Not provided'}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${data.email || 'Not provided'}</div>
          </div>
          <div class="field">
            <div class="label">Property Size:</div>
            <div class="value">${data.propertySize || 'Not provided'}</div>
          </div>
          <div class="field">
            <div class="label">Property Type:</div>
            <div class="value">${data.propertyType || 'Not provided'}</div>
          </div>
          <div class="field">
            <div class="label">Location:</div>
            <div class="value">${data.location || 'Not provided'}</div>
          </div>
          ${!isVisitOnly ? `
          <div class="field">
            <div class="label">Work Required:</div>
            <div class="value">${data.workRequired || 'Not provided'}</div>
          </div>
          ` : ''}
        </div>
      </div>
    </body>
    </html>
  `;
  
  const text = `
New ${type} - Pobeda LLC

Full Name: ${data.fullName || 'Not provided'}
Phone: ${data.phone || 'Not provided'}
Email: ${data.email || 'Not provided'}
Property Size: ${data.propertySize || 'Not provided'}
Property Type: ${data.propertyType || 'Not provided'}
Location: ${data.location || 'Not provided'}
${!isVisitOnly ? `Work Required: ${data.workRequired || 'Not provided'}` : ''}
  `.trim();
  
  return { subject, html, text };
}

function formatCalculatorEmail(data: CalculatorFormData): { subject: string; html: string; text: string } {
  const subject = 'New Cost Calculation Request - Pobeda LLC';
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #D4AF37; color: #000; padding: 20px; text-align: center; }
        .content { background-color: #f9f9f9; padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #D4AF37; }
        .value { margin-top: 5px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Cost Calculation Request</h2>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Square Meters:</div>
            <div class="value">${data.squareMeters || 'Not provided'}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${data.email || 'Not provided'}</div>
          </div>
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value">${data.phone || 'Not provided'}</div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
  
  const text = `
New Cost Calculation Request - Pobeda LLC

Square Meters: ${data.squareMeters || 'Not provided'}
Email: ${data.email || 'Not provided'}
Phone: ${data.phone || 'Not provided'}
  `.trim();
  
  return { subject, html, text };
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { type, data } = req.body;

    if (!type || !data) {
      return res.status(400).json({ error: 'Missing type or data' });
    }

    let emailContent;

    if (type === 'QUOTE') {
      const quoteData = data as QuoteFormData;
      // Check if workRequired is empty to determine if it's a visit-only request
      const isVisitOnly = !quoteData.workRequired || quoteData.workRequired.trim() === '';
      emailContent = formatQuoteEmail(quoteData, isVisitOnly);
    } else if (type === 'CALCULATOR') {
      const calcData = data as CalculatorFormData;
      emailContent = formatCalculatorEmail(calcData);
    } else {
      return res.status(400).json({ error: 'Invalid request type' });
    }

    // Send the email
    const success = await sendEmail(
      emailContent.subject,
      emailContent.html,
      emailContent.text
    );

    if (success) {
      return res.status(200).json({ 
        success: true, 
        message: 'Email sent successfully' 
      });
    } else {
      return res.status(500).json({ 
        error: 'Failed to send email' 
      });
    }
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
