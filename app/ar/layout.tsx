import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "كوبي ريبلاي — الرد المناسب جاهز للنسخ", template: "%s | كوبي ريبلاي" },
  description: "منصة عربية للردود الجاهزة والمهنية للمواقف اليومية والعمل وخدمة العملاء.",
  alternates: { canonical: "/ar", languages: { en: "/", ar: "/ar", "x-default": "/" } },
  openGraph: { locale: "ar_AE", alternateLocale: ["en_US"], siteName: "CopyReply" },
};

export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return <div className="arabic-site" dir="rtl" lang="ar">{children}</div>;
}
