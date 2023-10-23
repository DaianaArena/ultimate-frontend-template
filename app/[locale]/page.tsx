'use client';
 
import {useTranslations} from 'next-intl';
import Link from 'next-intl/link'
import { motion } from "framer-motion"
import Header from './components/Header/Header';

 
export default function Index() {
  const t = useTranslations('Index');
  return (
<>
<div>
  <Link href="/" locale="en">
  🇺🇸
  </Link>
  |
  <Link href="/" locale="es">
  🇪🇸
  </Link>
  
  
</div>
<motion.h1
  className='dark:text-red-400'
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
>
  {t('title')}
</motion.h1>

<Header message={t('header')}/>
</>
  );
}

/*

  |
  <Link href="/pages/About/index.tsx">About</Link>
*/