import './globals.css'; // If you have any global styles
import { Inter } from 'next/font/google'; // Example of custom font

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'St Peter Application',
  description: 'Track the journey of applications',
  icons: {
    icon: '/icons/StPeter-512x512.png', // Define the favicon
  },
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4CAF50" />
        <meta name="description" content="Track the journey of applications" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Add any additional meta tags for social media sharing or SEO */}
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
