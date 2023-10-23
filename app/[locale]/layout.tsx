
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import '../[locale]/globals.css'
import Providers from '../../providers'



//Import images
import Image from 'next/image'
import NavLogo from '../../public/logos/logo-chico.png'
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';

//List of pages in this project
const Links = [
  {
    label: "Home",
    route: "/"
  },
  {
    label: "About",
    route: "/pages/About"
  }

]

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'de'}];
}
 
export default async function LocaleLayout({children, params: {locale}}) {
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
          <ThemeSwitcher />
          {children}
        </NextIntlClientProvider>

          </Providers> 
        
       
      </body>
    </html>
  );
}