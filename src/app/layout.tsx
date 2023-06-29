import "./globals.scss";
import { Montserrat } from "next/font/google";
import { Nav } from "@/components";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Yago Leão - Aulas de Dança",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`bg-marble text-carbon min-h-screen ${montserrat.className}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
