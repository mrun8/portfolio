import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    // Create a transporter with your email service credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mrun0808@gmail.com',
        pass: 'Mrunali@#08',
      },
    });

    // Define the email options
    const mailOptions = {
      from: 'mrun0808@gmail.com',
      to: email,
      subject,
      text: message,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}