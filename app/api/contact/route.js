import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { email, subject, message } = await request.json()

    if (!email || !subject || !message) {
      return Response.json({ error: 'All fields are required' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"Clear Sky Coaching" <${process.env.GMAIL_USER}>`,
      to: 'clearskycoachmichelle@gmail.com',
      replyTo: email,
      subject: `New enquiry: ${subject}`,
      text: `From: ${email}\n\n${message}`,
      html: `
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return Response.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
