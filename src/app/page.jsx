import React from "react";
import Pages from "./components/Pages";
import Sliders from "./components/Sliders";
import Item from "./components/Item";
import Header from "./components/Header";
import Videos from "./components/Videos";

// ✅ Metadata (Next.js 13+ ใช้ได้)
export const metadata = {
  title:
    "PG-Phone | สมาร์ทโฟน Android สเปคแรง ราคาสุดคุ้ม แบตอึด เล่นเกมไม่มีสะดุด",
  description:
    "PG Phone | มือถือราคาคุ้มค่า โปรโมชั่นแรง ส่งตรงถึงหน้าบ้าน ซื้อขายมือถือออนไลน์ ราคาดี ของแท้ 100% จัดส่งเร็ว สั่งซื้อง่าย",
  keywords: [
    "PG-Phone",
    "มือถือ",
    "สมาร์ทโฟน",
    "ร้านขายมือถือ",
    "ราคามือถือ",
    "ซื้อมือถือออนไลน์",
    "ผ่อนมือถือ",
    "PG-V9",
    "PG-V9 PRO",
  ],
  openGraph: {
    title:
      "PG-Phone | สมาร์ทโฟน Android สเปคแรง ราคาสุดคุ้ม แบตอึด เล่นเกมไม่มีสะดุด",
    description:
      "PG Phone | มือถือราคาคุ้มค่า โปรโมชั่นแรง ส่งตรงถึงหน้าบ้าน ซื้อขายมือถือออนไลน์ ราคาดี ของแท้ 100% จัดส่งเร็ว สั่งซื้อง่าย",
    url: "https://www.pgprophone.shop",
    siteName: "PG Phone Pro",
    images: [
      {
        url: "https://www.pgprophone.shop/images/review.jpg",
        width: 1200,
        height: 630,
        alt: "PG Phone - สมาร์ทโฟน Android ราคาสุดคุ้ม",
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
    images: ["https://www.pgprophone.shop/images/review.jpg"],
  },
};

// ✅ Structured Data (แยก script แต่ละอัน)
function StructuredData() {
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "PG-Phone",
    image: [
      "https://www.pgprophone.shop/images/review.jpg",
      "https://www.pgprophone.shop/images/review2.jpg",
    ],
    description:
      "PG Phone | มือถือราคาคุ้มค่า โปรโมชั่นแรง ส่งตรงถึงหน้าบ้าน ซื้อขายมือถือออนไลน์ ราคาดี ของแท้ 100% จัดส่งเร็ว สั่งซื้อง่าย",
    brand: {
      "@type": "Brand",
      name: "PG-Phone",
    },
    offers: {
      "@type": "Offer",
      url: "https://www.pgprophone.shop/",
      priceCurrency: "THB",
      price: "9900",
      priceValidUntil: "2025-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "PG-Phone",
        url: "https://www.pgprophone.shop",
        logo: "https://www.pgprophone.shop/img/logo.png",
      },
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PG Phone Pro",
    url: "https://www.pgprophone.shop",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.pgprophone.shop/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "หน้าแรก",
        item: "https://www.pgprophone.shop",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "สินค้า",
        item: "https://www.pgprophone.shop/products",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

export default function Page() {
  return (
    <>
      {/* ✅ Structured Data */}
      <StructuredData />

      {/* ✅ Meta tags เพิ่มเติม */}
      <meta
        name="google-site-verification"
        content="ryOmDGaWXKrwl4E9xiLHh2maGVlmpjzyFN8m9QfAyyM"
      />
      <link
        rel="shortcut icon"
        href="https://www.pgprophone.shop/favicon.ico"
        type="image/x-icon"
      />
      <link rel="canonical" href="https://www.pgprophone.shop" />

      {/* ✅ Layout */}
      <Header />
      <main className="container mx-auto px-4 py-6">
        <div className="text-center">
          <h3>PG-Phone มือถือราคาคุ้มค่า</h3>
          <div className="review">
            <img
              src="https://www.pgprophone.shop/images/review.jpg"
              alt="PG-Phone มือถือราคาคุ้มค่า"
              className="review-img"
              width="100%"
            />
          </div>
        </div>
        <hr />
        <Videos />
        <Sliders />
        <Pages />
        <Item />
      </main>

      <footer className="bg-gray-900 text-white text-center py-6 mt-10">
        <p>© 2025 PG Phone Pro | All Rights Reserved</p>
      </footer>
    </>
  );
}
