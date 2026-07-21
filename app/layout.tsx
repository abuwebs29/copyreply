import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GA_ID = "G-SMP52V7Y3W";

export const metadata: Metadata={metadataBase:new URL("https://copyreply.com"),title:{default:"CopyReply — The Right Words, Ready to Copy",template:"%s | CopyReply"},description:"Find professional, friendly, polite, and confident replies for work, customers, social messages, invitations, and everyday conversations."};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body>
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
    <Script id="google-analytics" strategy="afterInteractive">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}');
    `}</Script>
    <Header/><main>{children}</main><Footer/>
  </body></html>
}
