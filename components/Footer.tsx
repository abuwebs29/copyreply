"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer(){
  const pathname = usePathname() || "/";
  const arabic = pathname === "/ar" || pathname.startsWith("/ar/");
  return <footer className="footer"><div className="container footerinner">
    <div>© {new Date().getFullYear()} CopyReply. {arabic ? "الكلمات المناسبة، جاهزة للنسخ." : "The right words, ready to copy."}</div>
    <div className="footerlinks">{arabic ? <><Link href="/ar/about">من نحن</Link><Link href="/contact">تواصل معنا</Link><Link href="/privacy">الخصوصية</Link><Link href="/terms">الشروط</Link></> : <><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></>}</div>
  </div></footer>
}
