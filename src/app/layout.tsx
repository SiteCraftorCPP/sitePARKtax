import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Подключение к Яндекс Доставке — работа водителем и курьером | Грузовой, Экспресс",
  description: "Подключаем водителей и курьеров к Яндекс.Доставке. Грузовой, экспресс, пеший, вело и авто тарифы. Быстрое подключение, стабильные выплаты.",
  keywords: "Яндекс.Доставка, Яндекс Доставка, работа в Яндекс Доставке, тарифы Яндекс Доставка, подключение к Яндекс Доставке, регистрация в Яндекс Доставке, водитель Яндекс Доставка, курьер Яндекс Доставка, работа курьером Яндекс, работа водителем Яндекс Доставка, заработок в Яндекс Доставке, доход Яндекс Доставка, выплаты Яндекс Доставка, Яндекс Доставка грузовой, грузовой тариф Яндекс, грузоперевозки Яндекс Доставка, работа на грузовой машине Яндекс, Яндекс Доставка кузов S, кузов M, кузов L, кузов XL, малый кузов, средний кузов, большой кузов, Яндекс Доставка ГАЗель, грузовая ГАЗель Яндекс, Яндекс Доставка LADA Largus, Яндекс Доставка Ларгус, Яндекс Доставка Ford Transit, Renault Master Яндекс Доставка, Peugeot Boxer Яндекс Доставка, Citroen Jumper Яндекс Доставка, Яндекс Доставка экспресс, тариф Экспресс Яндекс, срочная доставка Яндекс, быстрая доставка Яндекс, курьер на машине Яндекс Доставка, доставка на легковой машине Яндекс, пеший курьер Яндекс Доставка, велокурьер Яндекс Доставка, курьер на велосипеде Яндекс Доставка, Яндекс Доставка для водителей, Яндекс Доставка для курьеров",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Подключение к Яндекс Доставке — работа водителем и курьером | Грузовой, Экспресс",
    description: "Подключаем водителей и курьеров к Яндекс.Доставке. Грузовой, экспресс, пеший, вело и авто тарифы. Быстрое подключение, стабильные выплаты.",
    type: "website",
    locale: "ru_RU",
    siteName: "Полный Газ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        {children}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(106305535, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true,
              ecommerce:"dataLayer"
            });
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/106305535" style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>
      </body>
    </html>
  );
}
