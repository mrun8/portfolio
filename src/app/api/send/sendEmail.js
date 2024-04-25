import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

const OAUTH_CREDENTIALS = {
  client_id: '919294857302-sd49qdhb9a8heqjai1p103ao6af7fc88.apps.googleusercontent.com',
  project_id: 'mrunporta',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_secret: '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',
  redirect_uris: ['urn:ietf:wg:oauth:2.0:oob', 'http://localhost'],
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    try {
      const oAuth2Client = new OAuth2Client(
        OAUTH_CREDENTIALS.client_id,
        OAUTH_CREDENTIALS.client_secret,
        OAUTH_CREDENTIALS.redirect_uris[0],
      );

      // Set your OAuth 2.0 access token here
      oAuth2Client.setCredentials({ access_token: 'your-access-token' });

      const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

      const mailOptions = {
        from: 'mrun0808@gmail.com',
        to: 'mrun0808@gmail.com', // Replace with your email address
        subject: `New message from ${email}: ${subject}`,
        text: `${message}\n\nFrom: ${email}`,
      };

      const encodedMessage = Buffer.from(`From: ${mailOptions.from}\r\n` +
        `To: ${mailOptions.to}\r\n` +
        `Subject: ${mailOptions.subject}\r\n\r\n${mailOptions.text}`)
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');

      await gmail.users.messages.send({
        userId: 'me',
        resource: {
          raw: encodedMessage,
        },
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}