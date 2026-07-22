import type { Metadata } from "next";
import Link from "next/link";
import { Briefcase, Headphones, Heart, MessageCircle, Sparkles, Users } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "الرد المناسب جاهز للنسخ",
  description: "ردود عربية واضحة ومهنية للعمل وخدمة العملاء والمناسبات والمحادثات اليومية.",
  alternates: { canonical: `${site.url}/ar`, languages: { en: site.url, ar: `${site.url}/ar`, "x-default": site.url } },
};

const categories = [
  { title: "العمل والمقابلات", text: "ردود مهنية للمقابلات والعروض الوظيفية والتواصل في بيئة العمل.", icon: Briefcase },
  { title: "خدمة العملاء", text: "ردود مهذبة للشكاوى والاسترجاع والتأخير وحل المشكلات.", icon: Headphones },
  { title: "الشكر والاعتذار", text: "عبارات مناسبة للشكر والاعتذار والتقدير بوضوح واحترام.", icon: Heart },
  { title: "الرسائل اليومية", text: "ردود سريعة للمحادثات الاجتماعية والمواقف المتكررة.", icon: MessageCircle },
  { title: "العملاء والمبيعات", text: "رسائل احترافية للمتابعة والعروض وبناء علاقات أفضل.", icon: Users },
];

export default function ArabicHome(){
  const schema = { "@context":"https://schema.org", "@type":"WebPage", name:"كوبي ريبلاي بالعربية", url:`${site.url}/ar`, inLanguage:"ar", isPartOf:{"@id":`${site.url}/#website`} };
  return <>
    <JsonLd data={schema}/>
    <section className="hero arabic-hero"><div className="container">
      <span className="eyebrow"><Sparkles size={15}/> النسخة العربية قيد التوسّع</span>
      <h1>اعثر على <span className="gradient">الرد المناسب</span> خلال ثوانٍ.</h1>
      <p className="lead">نبني مكتبة عربية عالية الجودة لردود العمل وخدمة العملاء والمناسبات والمحادثات اليومية، مع دعم كامل للكتابة من اليمين إلى اليسار.</p>
      <div className="heroactions"><Link className="button" href="/">استكشف المكتبة الإنجليزية الآن</Link></div>
      <div className="chips"><span className="chip">العربية الفصحى</span><span className="chip">واجهة RTL</span><span className="chip">SEO متعدد اللغات</span><span className="chip">بحث عربي قريباً</span></div>
    </div></section>
    <section className="section" id="arabic-categories"><div className="container"><div className="sectionhead"><div><h2>الأقسام العربية القادمة</h2><p>هذه البنية جاهزة لإضافة مكتبة الردود العربية في الإصدار التالي.</p></div></div><div className="grid">{categories.map(({title,text,icon:Icon})=><article className="card" key={title}><div className="iconbox"><Icon size={22}/></div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section"><div className="container"><div className="guide-cta"><div><span className="pill">Sprint 8.1</span><h3>أساس متعدد اللغات جاهز للتوسع</h3><p>تم تجهيز مسارات اللغة، اتجاه RTL، بيانات hreflang، خرائط الموقع، وحفظ تفضيل اللغة تمهيداً لمكتبة عربية كاملة.</p></div><Link className="button" href="/ar/about">عن النسخة العربية</Link></div></div></section>
  </>;
}
