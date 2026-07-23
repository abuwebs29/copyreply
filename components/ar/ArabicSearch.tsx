"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { arabicCategories, arabicReplies } from "@/lib/arabicData";
import { normalizeArabic } from "@/lib/arabic";
import { trackEvent } from "@/lib/clientAnalytics";

const synonyms: Record<string,string[]> = { وظيفة:["عمل","مقابلة","راتب"], اعتذار:["اسف","خطأ"], عميل:["زبون","خدمة"], اجتماع:["موعد","مقابلة"], شكر:["تقدير","امتنان"] };

export default function ArabicSearch(){
  const [q,setQ]=useState(""); const [category,setCategory]=useState("all");
  const results=useMemo(()=>{const n=normalizeArabic(q.trim());const expanded=[n,...Object.entries(synonyms).filter(([key])=>n.includes(normalizeArabic(key))).flatMap(([,items])=>items.map(normalizeArabic))].filter(Boolean);return arabicReplies.map(r=>{const hay=normalizeArabic(`${r.title} ${r.description} ${r.keywords.join(" ")} ${r.category}`);const score=expanded.reduce((sum,term)=>sum+(hay.includes(term)?(normalizeArabic(r.title).includes(term)?5:2):0),0);return {r,score}}).filter(({r,score})=>(!n||score>0)&&(category==="all"||r.categorySlug===category)).sort((a,b)=>b.score-a.score).slice(0,30).map(x=>x.r)},[q,category]);
  const suggestions=arabicReplies.filter(r=>normalizeArabic(r.title).includes(normalizeArabic(q))).slice(0,5);
  return <><div className="arabic-search-tools"><label className="searchbar"><input value={q} onChange={e=>setQ(e.target.value)} onBlur={()=>q&&trackEvent("search_submitted",{locale:"ar",query:q,results:results.length})} placeholder="ابحث عن موقف أو رسالة..." aria-label="البحث في الردود العربية" /></label><select value={category} onChange={e=>setCategory(e.target.value)} aria-label="تصفية حسب الفئة"><option value="all">كل الفئات</option>{arabicCategories.map(c=><option key={c.slug} value={c.slug}>{c.name}</option>)}</select></div>{q&&suggestions.length>0&&<div className="search-suggestions">{suggestions.map(s=><button key={s.slug} onClick={()=>setQ(s.title)}>{s.title}</button>)}</div>}<p>{results.length} نتيجة</p>{results.length?<div className="linkgrid">{results.map(r=><Link className="card" href={`/ar/reply/${r.slug}`} onClick={()=>trackEvent("search_result_clicked",{locale:"ar",query:q,reply_title:r.title})} key={r.slug}><span className="pill">{r.category}</span><h2>{r.title}</h2><p>{r.description}</p></Link>)}</div>:<div className="empty"><h2>لم نجد نتيجة مطابقة</h2><p>جرّب كلمة أقصر، أو اختر فئة مختلفة، أو استخدم استوديو الردود لإنشاء صياغة مناسبة.</p><Link className="button" href="/ar/studio">فتح الاستوديو</Link></div>}</>
}
