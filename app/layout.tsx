import { ReactNode } from "react";
import "./globals.css";
import Navbar from "./components/features/navbar";
import Footer from "./components/features/footer";
import BoafoWidgetInitializer from "./components/BoafoWidgetInitializer";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>My Website</title>
        <meta name="description" content="Accessibility powered by Boafo" />
      </head>
      <body>
        <BoafoWidgetInitializer />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
