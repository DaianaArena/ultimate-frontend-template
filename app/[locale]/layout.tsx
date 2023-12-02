import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import "../[locale]/globals.css";
import Providers from "../../providers";




//Import images
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

//List of pages in this project
const Links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/pages/About",
  },
];

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export default async function LocaleLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <title>Ultimate frontend boilerplate</title>
      </head>
      <body>
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar />

            {children}

            <Footer/>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
