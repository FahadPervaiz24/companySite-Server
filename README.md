# VectorView Digital Website

A modern, premium website for VectorView Digital - a NYC-based development company specializing in mobile apps, web apps, and AI integrations.

## Features

- **Modern Design**: Premium, glassmorphism UI with Vanta.js animated backgrounds
- **Responsive**: Fully optimized for mobile and desktop
- **Contact Forms**: Working quote requests and contact forms
- **Email Integration**: Automatic email notifications to communications@vectorviewsoftware.com
- **Local Focus**: NYC-based messaging and branding

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Email (SMTP)

Create a `.env` file in the root directory with your SMTP credentials:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your@email.com
SMTP_PASS=your_app_password
```

**For Google Workspace:**
1. Enable 2-Factor Authentication on your Google account
2. Generate an App Password: Google Account → Security → App Passwords
3. Use the app password as `SMTP_PASS`

### 3. Start the Backend

```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

The backend will run on `http://localhost:3001`

### 4. Serve the Frontend

You can serve the HTML files using any static server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (install http-server globally)
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

### 5. Test the Forms

- **Get Quote Form**: Available on homepage and about page
- **Contact Form**: Available on contact page
- Both forms will send emails to `communications@vectorviewsoftware.com`

## File Structure

```
vector-view.webflow/
├── index.html          # Homepage
├── about.html          # About page
├── contact.html        # Contact page
├── server.js           # Backend API
├── package.json        # Dependencies
├── .env               # SMTP credentials (create this)
├── css/               # Stylesheets
├── js/                # JavaScript files
└── images/            # Images and assets
```

## API Endpoints

- `POST /api/quote` - Handle quote requests
- `POST /api/contact` - Handle contact form submissions

Both endpoints send emails to `communications@vectorviewsoftware.com`

## Development

- Backend runs on port 3001
- Frontend can be served on any port (8000 recommended)
- CORS is enabled for local development
- Forms include loading states and error handling

## Production Deployment

1. Set up your production server
2. Configure environment variables
3. Install dependencies: `npm install --production`
4. Start the server: `npm start`
5. Serve static files through your web server

## Support

For technical issues or questions, contact: communications@vectorviewsoftware.com 