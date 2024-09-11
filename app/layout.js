import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

// Use Nunito Sans for a modern, clean look
const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Collabify",
  description: "Next-Gen collaboration platform",
  date: "2024-08-22",
  author: "Ankit, Rage, Vinita",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={nunitoSans.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
