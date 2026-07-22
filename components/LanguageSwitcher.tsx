"use client";

import Link from "next/link";
import { Languages } from "lucide-react";
import { usePathname } from "next/navigation";
import { localizedPath } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const arabic = pathname === "/ar" || pathname.startsWith("/ar/");
  const target = localizedPath(arabic ? "en" : "ar", pathname);
  const label = arabic ? "English" : "العربية";

  return (
    <Link
      className="language-switcher"
      href={target}
      hrefLang={arabic ? "en" : "ar"}
      onClick={() => {
        document.cookie = `copyreply-locale=${arabic ? "en" : "ar"}; path=/; max-age=31536000; samesite=lax`;
      }}
      aria-label={`Switch language to ${label}`}
    >
      <Languages size={17} aria-hidden="true" />
      <span>{label}</span>
    </Link>
  );
}
