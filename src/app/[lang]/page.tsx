import Image from "next/image";
import { getDictionary } from "../i18n/dictionaries";
import { Lang, languages } from "../i18n/config";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="font-sans flex justify-center">
      <LanguageSwitcher currentLang={lang} />
      <main className="grid grid-cols-12 container mt-20 gap-10">
        

        

        

        

        

        
        

        <ul className="flex gap-4 items-center col-span-6 rounded-2xl bg-foreground p-10">
          <li className="text-white text-xl font-bold border-r pr-4">
            {dict.sections.languages}
          </li>
          <li className="text-4xl">🇧🇴</li>
          <li className="text-4xl">🇬🇧</li>
          <li className="text-4xl">🇺🇸</li>
        </ul>
      </main>
    </div>
  );
}