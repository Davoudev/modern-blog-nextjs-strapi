import { Lato, Open_Sans } from "next/font/google";
import "@/styles/styles.sass";
import Header from "@/components/header";
import Footer from "@/components/footer";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "headless_blog",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} ${lato.variable} ${openSans.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};
export default RootLayout;
