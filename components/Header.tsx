"use client";

import Link from "next/link";
import { MessageSquareText } from "lucide-react";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header(){
  const pathname = usePathname() || "/";
  const arabic = pathname === "/ar" || pathname.startsWith("/ar/");
  return <header className="header"><div className="container nav">
    <Link href={arabic ? "/ar" : "/"} className="brand"><span className="brandmark"><MessageSquareText size={21}/></span>CopyReply</Link>
    <nav className="navlinks" aria-label={arabic ? "التنقل الرئيسي" : "Primary navigation"}>
      {arabic ? <>
        <Link href="/ar">الرئيسية</Link><Link href="/ar#arabic-categories">الأقسام</Link><Link href="/ar/studio">استوديو الردود</Link><Link href="/ar/guides">الأدلة</Link><Link href="/ar/search">البحث</Link><Link href="/ar/about">من نحن</Link>
      </> : <>
        <Link href="/#categories">Categories</Link><Link href="/studio">Reply Studio</Link><Link href="/guides">Guides</Link><Link href="/saved">Saved</Link><Link href="/search">Search</Link><Link href="/about">About</Link>
      </>}
    </nav>
    <LanguageSwitcher/>
  </div></header>
}
