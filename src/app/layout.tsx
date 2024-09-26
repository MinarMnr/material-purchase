"use client";
import "./globals.css";
import store from "./reducers/store";
import { Provider } from "react-redux";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.variable}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
