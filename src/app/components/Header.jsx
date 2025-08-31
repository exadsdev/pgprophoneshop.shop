"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const imgs = ["1.jpg", "1.gif", "2.jpg", "2.gif", "3.jpg", "3.gif", "4.jpg", "5.jpg", "6.jpg"];

export default function Header() {
  const [weburl, setWeburl] = useState("");
  const router = useRouter();

  useEffect(() => {

    const apiUrl = process.env.NEXT_PUBLIC_API_URLA?.replace(/\/$/, "") || ""; 

    if (!apiUrl) {
      console.error("NEXT_PUBLIC_API_URLA is not set in .env.local");
    }
    
    setWeburl(apiUrl);
  }, []);

  const Clickitem = () => {
    if (weburl) {
      window.open(weburl, "_blank");
    } else {
      console.error("Web URL is not set");
    }
  };

  return (
    <>
      <header id="header">
        <div onClick={Clickitem} className="Clickitem">
          <div className="item">
            {imgs.map((item) => (
              <div key={item} >
                <img
                  src={weburl ? `${weburl}/img/phone/${item}` : "/img/phone-1.jpg"}  
                  alt={item}
                  onError={(e) => {
                    e.target.onerror = null;  
                    e.target.src = "/img/phone-1.jpg";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
