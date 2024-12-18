import "./globals.css";

export const metadata = {
  title: "Projeto",
  description: "Primeira aplicação Bootstrap",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}