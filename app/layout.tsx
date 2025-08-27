import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin", "thai"],
  variable: "--font-kanit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Calculator Varity 2025",
  description: "เครื่องคำนวณหลากหลาย by DTI",
  keywords: ["เครื่องคำนวณ", "BMI", "BMR", "Car Installment"],
  icons: {
    icon: "/calculator.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
