import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Dishcovery",
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
