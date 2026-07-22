import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "عن كوبي ريبلاي بالعربية",
  description: "تعرف على خطة كوبي ريبلاي لتقديم مكتبة ردود عربية واضحة ومهنية.",
  alternates: { canonical: "/ar/about", languages: { en: "/about", ar: "/ar/about", "x-default": "/about" } },
};

export default function ArabicAbout(){return <div className="container contentpage"><div className="breadcrumb"><Link href="/ar">الرئيسية</Link> / من نحن</div><h1>عن كوبي ريبلاي بالعربية</h1><p>نجهّز تجربة عربية أصلية وليست ترجمة حرفية، مع لغة عربية فصحى واضحة وتصميم كامل من اليمين إلى اليسار.</p><p>ستبدأ المكتبة بمواقف العمل والمقابلات وخدمة العملاء والشكر والاعتذار، ثم تتوسع وفق احتياجات المستخدمين وبيانات البحث.</p></div>}
