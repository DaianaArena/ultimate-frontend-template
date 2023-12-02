"use client";

import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import { motion } from "framer-motion";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import { SiTailwindcss } from "react-icons/si";
import { IoLanguage } from "react-icons/io5";
import { MdOutlineAnimation } from "react-icons/md";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <>
      <section className="text-gray-400  body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <motion.h1
              className="sm:text-3xl text-2xl font-medium title-font text-gray-800 dark:text-white mb-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {t("title")}
            </motion.h1>
            <Header message={t("header")}></Header>

            <a 
                className="mt-3 text-pink-400 inline-flex items-center"
                href="https://github.com/DaianaArena/ultimate-frontend-template#ultimate-frontend-boilerplate"
                target="_blank"
                >
                {t("ctaDOCS")}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-pink-500 inline-flex"></div>
            </div>
          </div>

          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <Card 
              title={t("titleTW")}
              desc={t("descTW")}
              CTA={t("ctaDOCS")}
              icon={<SiTailwindcss size={50}/>}
              link="https://www.npmjs.com/package/next-themes#with-tailwind"
            />
            <Card 
              title={t("titleFM")}
              desc={t("descFM")}
              CTA={t("ctaDOCS")}
              icon={<MdOutlineAnimation size={50}/>}
              link="https://www.framer.com/motion/animation/"
            />
            <Card 
              title={t("titleT")}
              desc={t("descT")}
              CTA={t("ctaDOCS")}
              icon={<IoLanguage size={50}/>}
              link="https://next-intl-docs.vercel.app/docs/getting-started"
            />
            
          </div>
          <a href="https://github.com/new?template_name=ultimate-frontend-template&template_owner=DaianaArena" target="_blank" rel="noopener noreferrer">
            <button className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">
              {t("support")}
            </button>
          </a>
          
        </div>
      </section>
    </>
  );
}