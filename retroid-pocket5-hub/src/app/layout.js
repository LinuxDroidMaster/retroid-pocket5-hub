import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Retroid Pocket 5 Hub",
  description:
    "Your ultimate source for the best tutorials and videos on retro handhelds and the Retroid Pocket 5.",
  icons: {
    icon: "/images/favicon-rp5.webp", // cambia esto si aún usas el mismo favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* La fuente se carga aquí, el favicon se define mediante metadata */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
        />
      </head>
      <body className="bg-background text-foreground font-retro transition-colors duration-300">
        <Navbar />
        <main className="min-h-screen p-4">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
