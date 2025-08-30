import "./globals.css";
import Providers from "./Provider";

export const metadata = {
  title: "Focus & Habits",
  description: "A productivity app to help you focus and build habits.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
