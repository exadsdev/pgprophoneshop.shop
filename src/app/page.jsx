
import React from "react";
import Pages from "./components/Pages";
import Sliders from "./components/Sliders";
import Item from "./components/Item";
import Header from "./components/Header";
import Videos from "./components/Videos";

export const metadata = {
  title:
    "PG-Phone | สมาร์ทโฟน Android สเปคแรง ราคาสุดคุ้ม แบตอึด เล่นเกมไม่มีสะดุด",
  description:
    "PG Phone | มือถือราคาคุ้มค่า โปรโมชั่นแรง ส่งตรงถึงหน้าบ้าน ซื้อขายมือถือออนไลน์ ราคาดี ของแท้ 100% จัดส่งเร็ว สั่งซื้อง่าย",
  keywords:
    "PG-Phone, มือถือ, สมาร์ทโฟน, ร้านขายมือถือ, ราคามือถือ, ซื้อมือถือออนไลน์, ผ่อนมือถือ, PG-V9, PG-V9 PRO, mypgphone.com",
  openGraph: {
    title:
      "PG-Phone | สมาร์ทโฟน Android สเปคแรง ราคาสุดคุ้ม แบตอึด เล่นเกมไม่มีสะดุด",
    description:
      "PG Phone | มือถือราคาคุ้มค่า โปรโมชั่นแรง ส่งตรงถึงหน้าบ้าน ซื้อขายมือถือออนไลน์ ราคาดี ของแท้ 100% จัดส่งเร็ว สั่งซื้อง่าย",
    url: "https://www.mypgphone.com",
    siteName: "mypgphone.com",
    images: [
      {
        url: "https://www.mypgphone.com/images/reviwe.jpg",
        width: 1200,
        height: 630,
        alt: "PG Phone",
      },
    ],
    type: "website",
    locale: "th_TH",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "PG-Phone | สมาร์ทโฟน Android สเปคแรง ราคาสุดคุ้ม แบตอึด เล่นเกมไม่มีสะดุด",
    description:
      "PG Phone | มือถือราคาคุ้มค่า โปรโมชั่นแรง ส่งตรงถึงหน้าบ้าน ซื้อขายมือถือออนไลน์ ราคาดี ของแท้ 100% จัดส่งเร็ว สั่งซื้อง่าย",
    images: ["https://www.mypgphone.com/images/reviwe.jpg"],
  },
};

export default function Page() {
  return (
    <>
      {/* ✅ Structured Data: Product + Website + SearchAction */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org/",
              "@type": "Product",
              name: "PG-Phone",
              image: [
                "https://www.mypgphone.com/images/reviwe.jpg",
                "https://www.mypgphone.com/images/reviwe.jpg",
              ],
              description:
                "PG Phone | มือถือราคาคุ้มค่า โปรโมชั่นแรง ส่งตรงถึงหน้าบ้าน ซื้อขายมือถือออนไลน์ ราคาดี ของแท้ 100% จัดส่งเร็ว สั่งซื้อง่าย",
              brand: {
                "@type": "Brand",
                name: "PG-Phone",
              },
              offers: {
                "@type": "Offer",
                url: "https://www.mypgphone.com/",
                priceCurrency: "THB",
                price: "9900",
                priceValidUntil: "2025-02-18",
                itemCondition: "https://schema.org/NewCondition",
                availability: "https://schema.org/InStock",
                seller: {
                  "@type": "Organization",
                  name: "PG-Phone",
                  url: "https://www.mypgphone.com",
                  logo: "https://www.mypgphone.com/img/logo.png",
                },
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "mypgphone.com",
              url: "https://www.mypgphone.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.mypgphone.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
          ]),
        }}
      />

   
      <meta
        name="google-site-verification"
        content="ryOmDGaWXKrwl4E9xiLHh2maGVlmpjzyFN8m9QfAyyM"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="shortcut icon"
        href="https://www.mypgphone.com/favicon.ico"
        type="image/x-icon"
      />
      <link rel="canonical" href="https://www.mypgphone.com" />

    
      <Header />
      <Videos />
      <Pages />
      <Sliders />
      <Item />
    </>
  );
}
