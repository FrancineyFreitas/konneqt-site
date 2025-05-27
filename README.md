# Konneqt - Cybersecurity Solutions

A modern web application for Konneqt, a leading provider of cybersecurity solutions. Built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- Responsive design for all devices
- Modern UI with Tailwind CSS
- TypeScript for type safety
- Server-side rendering with Next.js
- Integration with WordPress API for blog/news
- Dynamic product pages
- Contact form
- Mega menu navigation

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:**
  - Headless UI
  - Hero Icons
  - React Icons
- **CMS Integration:** WordPress API

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/konneqt.git
   cd konneqt
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory and add:
   ```
   NEXT_PUBLIC_WORDPRESS_API_URL=your-wordpress-api-url
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── news/              # News/blog pages
│   ├── products/          # Product pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   └── layout/           # Layout components
└── styles/               # Global styles
    └── globals.css       # Global CSS

public/                   # Static assets
└── images/              # Image assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## WordPress Integration

The news/blog section integrates with a WordPress backend using the WordPress REST API. To set up:

1. Ensure your WordPress site has REST API enabled
2. Configure CORS if needed
3. Update the API URL in the environment variables

## Deployment

This project can be deployed to any platform that supports Next.js applications, such as:

- Vercel (recommended)
- Netlify
- AWS Amplify
- Custom server

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any inquiries, please reach out to contact@konneqt.com 