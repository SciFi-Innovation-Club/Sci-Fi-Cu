import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { firstName, lastName, email, subject, message } = await req.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return Response.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Set up transporter (use real email + app password)
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // Gmail App Password
      },
    });

    // Compose message to your team
    const mailOptions = {
      from: process.env.EMAIL_USER, // Use your email as sender
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER, // your club/team email
      replyTo: email, // Set reply-to as the form submitter's email
      subject: `🚀 New Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1a1a2e, #16213e); color: white; border-radius: 10px; overflow: hidden;">
          <div style="background: linear-gradient(90deg, #3b82f6, #8b5cf6); padding: 20px; text-align: center;">
            <h1 style="margin: 0; color: white;">✨ Sci-Fi Innovation Club</h1>
            <h2 style="margin: 10px 0 0 0; color: #e2e8f0;">New Contact Form Submission</h2>
          </div>
          
          <div style="padding: 30px;">
            <div style="background: rgba(59, 130, 246, 0.1); border-left: 4px solid #3b82f6; padding: 15px; margin-bottom: 20px; border-radius: 5px;">
              <h3 style="margin: 0 0 10px 0; color: #60a5fa;">Contact Information</h3>
              <p style="margin: 5px 0;"><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #60a5fa;">${email}</a></p>
              <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
            </div>
            
            <div style="background: rgba(139, 92, 246, 0.1); border-left: 4px solid #8b5cf6; padding: 15px; border-radius: 5px;">
              <h3 style="margin: 0 0 15px 0; color: #a78bfa;">Message</h3>
              <p style="line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding: 20px; background: rgba(34, 197, 94, 0.1); border-radius: 5px; text-align: center;">
              <p style="margin: 0; color: #4ade80;">
                <strong>🎯 Quick Actions:</strong><br>
                Reply directly to this email to respond to ${firstName}
              </p>
            </div>
          </div>
          
          <div style="background: rgba(0, 0, 0, 0.3); padding: 15px; text-align: center; font-size: 12px; color: #94a3b8;">
            Sent from the Sci-Fi Innovation Club website contact form<br>
            Chandigarh University | ${new Date().toLocaleString()}
          </div>
        </div>
      `,
    };

    // Send confirmation email to the person who submitted the form
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: '🚀 Thank you for contacting Sci-Fi Innovation Club!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1a1a2e, #16213e); color: white; border-radius: 10px; overflow: hidden;">
          <div style="background: linear-gradient(90deg, #3b82f6, #8b5cf6); padding: 20px; text-align: center;">
            <h1 style="margin: 0; color: white;">✨ Sci-Fi Innovation Club</h1>
            <h2 style="margin: 10px 0 0 0; color: #e2e8f0;">Message Received!</h2>
          </div>
          
          <div style="padding: 30px;">
            <p style="font-size: 18px; margin-bottom: 20px;">Hi ${firstName},</p>
            
            <p style="line-height: 1.6; margin-bottom: 20px;">
              Thank you for reaching out to the Sci-Fi Innovation Club! We've received your message and are excited to connect with you.
            </p>
            
            <div style="background: rgba(59, 130, 246, 0.1); border-left: 4px solid #3b82f6; padding: 15px; margin: 20px 0; border-radius: 5px;">
              <h3 style="margin: 0 0 10px 0; color: #60a5fa;">Your Message Summary</h3>
              <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
              <p style="margin: 5px 0;"><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <p style="line-height: 1.6; margin-bottom: 20px;">
              Our team will review your message and get back to you within <strong>12 hours</strong>. 
              In the meantime, feel free to explore our social media channels:
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://www.instagram.com/scifiinnovationclub/" style="display: inline-block; margin: 0 10px; padding: 10px 20px; background: linear-gradient(45deg, #e91e63, #f06292); color: white; text-decoration: none; border-radius: 25px; font-weight: bold;">📸 Instagram</a>
              <a href="https://www.linkedin.com/company/103704187" style="display: inline-block; margin: 0 10px; padding: 10px 20px; background: linear-gradient(45deg, #0077b5, #00a0dc); color: white; text-decoration: none; border-radius: 25px; font-weight: bold;">💼 LinkedIn</a>
            </div>
            
            <p style="line-height: 1.6; margin-bottom: 0;">
              Ready to join our cosmic journey? We can't wait to explore the future together! 🌟
            </p>
          </div>
          
          <div style="background: rgba(0, 0, 0, 0.3); padding: 15px; text-align: center; font-size: 12px; color: #94a3b8;">
            Sci-Fi Innovation Club | Chandigarh University<br>
            Exploring the Future Today ✨
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(mailOptions),
      transporter.sendMail(confirmationMailOptions)
    ]);

    return Response.json({ 
      success: true, 
      message: 'Emails sent successfully' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
