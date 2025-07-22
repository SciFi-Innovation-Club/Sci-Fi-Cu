// src/app/layout.js
import '../styles/globals.css';

export const metadata = {
  title: 'Sci-Fi Innovation Club',
  description: 'Official site of Sci-Fi Club, Chandigarh University',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-gray-950 text-white min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
