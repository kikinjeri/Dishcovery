import "./globals.css";
import "../components/styles/components.css";

import Header from "@/components/Header";

export const metadata = {
  title: "Dishcover",
  description: "Discover the best dishes in your city",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
