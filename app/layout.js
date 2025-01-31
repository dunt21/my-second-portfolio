import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Portfolio - Suad Macaulay",
  description:
    "Showcasing the work and skills of a passionate frontend developer with a focus on web development, UX/UI design, and problem-solving",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.className} ${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
