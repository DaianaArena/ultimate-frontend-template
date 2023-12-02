import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import "../[locale]/globals.css";
import Providers from "../../providers";
import { ReactNode } from 'react';

interface LocaleLayoutProps {
  children: ReactNode;
  params: {
    locale: string; // O el tipo correcto según tus necesidades
  };
}



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

export default async function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
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
