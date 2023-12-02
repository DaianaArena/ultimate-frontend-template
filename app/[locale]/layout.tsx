import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import "../[locale]/globals.css";
import Providers from "../../providers";
import Link from "next-intl/link";

//Icons
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";
import { SiBuymeacoffee } from "react-icons/si";

//Import images
import Image from "next/image";
import NavLogo from "../../public/logos/logo-chico.png";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";

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
      <body>
        <Providers>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <header className="text-gray-600 body-font">
              <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center md:justify-between">
                <a className=" w-52 flex title-font font-medium justify-center items-center text-gray-900 dark:text-white mb-4 md:mb-0">
                  <span className=" text-xl text-center  dark:text-white">
                    Ultimate Boilerplate
                  </span>
                </a>
                <nav className="  w-52  flex flex-wrap items-center text-base justify-center">
                  <Link
                    className="mx-5 hover:text-pink-700 dark:text-white"
                    href="/"
                    locale="en"
                  >
                    🇺🇸
                  </Link>
                  <p className="mx-5">|</p>
                  <Link
                    className="mx-5 hover:text-pink-700 dark:text-white"
                    href="/"
                    locale="es"
                  >
                    🇪🇸
                  </Link>
                </nav>
                <div className=" w-52 flex justify-center md:justify-end">
                  <ThemeSwitcher />
                </div>
                
              </div>
            </header>

            {children}

            <footer className="text-gray-400  body-font">
              <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                  <span className="ml-3 text-xl">
                    Daiana Arena Boilerplates
                  </span>
                </a>
                <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
                  © 2023 —
                  <a
                    href="https://twitter.com/knyttneve"
                    className="text-gray-500 ml-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @dai.tsx
                  </a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                  <a className="ml-3 text-gray-400">
                  <SiBuymeacoffee size={20}/>
                  </a>
                  <a className="ml-3 text-gray-400">
                  <TbWorldCode size={20}/>
                  </a>
                  <a className="ml-3">
                  <FaInstagram size={20}/>
                  </a>
                  <a className="ml-3 text-gray-400">
                  <FaLinkedinIn size={20}/>
                  </a>
                </span>
              </div>
            </footer>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
