'use client';
import {useTranslations} from 'next-intl';
import Link from 'next-intl/link'
export default function About() {
  const t = useTranslations('Index');
  return (
<>
<div>
  <Link href="/pages/About" locale="en">
    English
  </Link>
  |
  <Link href="/pages/About" locale="es">
    Spanish
  </Link>
  
  
</div>
<h1>{t('title')}</h1>
</>
  );
  }