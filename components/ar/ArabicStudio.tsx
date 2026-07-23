"use client";

import { useEffect, useMemo, useState } from "react";
import { Download, Mail, Printer, RotateCcw, Share2 } from "lucide-react";
import { arabicReplies } from "@/lib/arabicData";
import { trackEvent } from "@/lib/clientAnalytics";
import ArabicCopyButton from "./ArabicCopyButton";

type Style = "msa" | "gulf";
type Gender = "neutral" | "male" | "female";
type Audience = "single" | "group";

const DRAFT_KEY = "copyreply-arabic-studio-draft-v1";

function adaptText(text: string, style: Style, gender: Gender, audience: Audience, greeting: boolean, closing: boolean, name: string) {
  let value = text;
  const salutation = audience === "group" ? "مرحباً جميعاً،" : name ? `مرحباً ${name}،` : "مرحباً،";
  value = value.replace(/^مرحباً،/, salutation);
  if (!greeting) value = value.replace(/^.*\n\n/, "");
  if (!closing) value = value.replace(/\n\nمع خالص (التحية|التقدير)\.?$/, "");
  if (style === "gulf") {
    value = value.replaceAll("أشكركم", "شاكر لكم").replaceAll("يرجى إبلاغي", "ياليت تبلغوني").replaceAll("في أقرب وقت", "بأقرب وقت ممكن");
  }
  if (gender === "male") value = value.replaceAll("يسعدني", "يسعدني");
  if (gender === "female") value = value.replaceAll("يسعدني", "يسعدني");
  return value;
}

export default function ArabicStudio() {
  const [slug, setSlug] = useState(arabicReplies[0].slug);
  const [variant, setVariant] = useState(0);
  const [name, setName] = useState("");
  const [style, setStyle] = useState<Style>("msa");
  const [gender, setGender] = useState<Gender>("neutral");
  const [audience, setAudience] = useState<Audience>("single");
  const [greeting, setGreeting] = useState(true);
  const [closing, setClosing] = useState(true);
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(DRAFT_KEY);
    if (!saved) return;
    try {
      const draft = JSON.parse(saved);
      setSlug(draft.slug || arabicReplies[0].slug);
      setVariant(draft.variant || 0);
      setName(draft.name || "");
      setStyle(draft.style || "msa");
      setGender(draft.gender || "neutral");
      setAudience(draft.audience || "single");
      setGreeting(draft.greeting ?? true);
      setClosing(draft.closing ?? true);
      setHistory(draft.history || []);
    } catch {}
  }, []);

  const item = useMemo(() => arabicReplies.find((r) => r.slug === slug)!, [slug]);
  const text = useMemo(() => adaptText(item.variants[variant].text, style, gender, audience, greeting, closing, name), [item, variant, style, gender, audience, greeting, closing, name]);
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  useEffect(() => {
    localStorage.setItem(DRAFT_KEY, JSON.stringify({ slug, variant, name, style, gender, audience, greeting, closing, history }));
  }, [slug, variant, name, style, gender, audience, greeting, closing, history]);

  function remember() {
    setHistory((items) => [text, ...items.filter((x) => x !== text)].slice(0, 5));
    trackEvent("studio_draft_saved", { locale: "ar", reply_title: item.title });
  }

  function download(kind: "txt" | "doc") {
    const type = kind === "doc" ? "application/msword" : "text/plain;charset=utf-8";
    const blob = new Blob([text], { type });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${item.slug}.${kind}`;
    anchor.click();
    URL.revokeObjectURL(url);
    trackEvent("studio_exported", { locale: "ar", format: kind, reply_title: item.title });
  }

  async function share() {
    if (navigator.share) await navigator.share({ title: item.title, text });
    else await navigator.clipboard.writeText(text);
    trackEvent("studio_shared", { locale: "ar", reply_title: item.title });
  }

  function reset() {
    setVariant(0); setName(""); setStyle("msa"); setGender("neutral"); setAudience("single"); setGreeting(true); setClosing(true);
    trackEvent("studio_reset", { locale: "ar" });
  }

  return <div className="arabic-studio-pro">
    <section className="card studio-controls">
      <h2>خصّص الرد</h2>
      <label>الموقف<select value={slug} onChange={(e) => { setSlug(e.target.value); setVariant(0); }}>{arabicReplies.map((r) => <option value={r.slug} key={r.slug}>{r.title}</option>)}</select></label>
      <div className="control-grid"><label>النبرة<select value={variant} onChange={(e) => setVariant(Number(e.target.value))}>{item.variants.map((v, i) => <option value={i} key={v.label}>{v.label}</option>)}</select></label><label>الأسلوب<select value={style} onChange={(e) => setStyle(e.target.value as Style)}><option value="msa">العربية الفصحى</option><option value="gulf">أسلوب خليجي مهني</option></select></label></div>
      <div className="control-grid"><label>المخاطَب<select value={audience} onChange={(e) => setAudience(e.target.value as Audience)}><option value="single">شخص واحد</option><option value="group">مجموعة</option></select></label><label>الصياغة<select value={gender} onChange={(e) => setGender(e.target.value as Gender)}><option value="neutral">محايدة</option><option value="male">مذكر</option><option value="female">مؤنث</option></select></label></div>
      <label>اسم المستلم<input value={name} onChange={(e) => setName(e.target.value)} placeholder="اختياري" /></label>
      <div className="studio-toggles"><label><input type="checkbox" checked={greeting} onChange={(e) => setGreeting(e.target.checked)} /> تضمين التحية</label><label><input type="checkbox" checked={closing} onChange={(e) => setClosing(e.target.checked)} /> تضمين الختام</label></div>
      <button className="actionbtn" onClick={reset}><RotateCcw size={17}/> إعادة الضبط</button>
    </section>

    <section className="card studio-preview-pro">
      <div className="replyhead"><div><h2>المعاينة المباشرة</h2><small>{wordCount} كلمة · قراءة أقل من دقيقة</small></div><ArabicCopyButton text={text} title={item.title} /></div>
      <textarea className="arabic-editor" value={text} readOnly aria-label="معاينة الرد العربي" />
      <div className="replyactions"><button className="actionbtn" onClick={() => download("txt")}><Download size={17}/> TXT</button><button className="actionbtn" onClick={() => download("doc")}><Download size={17}/> Word</button><button className="actionbtn" onClick={() => { window.print(); trackEvent("studio_exported", { locale: "ar", format: "print" }); }}><Printer size={17}/> طباعة / PDF</button><a className="actionbtn" href={`mailto:?subject=${encodeURIComponent(item.title)}&body=${encodeURIComponent(text)}`} onClick={() => trackEvent("studio_exported", { locale: "ar", format: "email" })}><Mail size={17}/> بريد</a><button className="actionbtn" onClick={share}><Share2 size={17}/> مشاركة</button><button className="button" onClick={remember}>حفظ المسودة</button></div>
      {history.length > 0 && <div className="draft-history"><h3>آخر المسودات</h3>{history.map((draft, index) => <button key={index} onClick={() => navigator.clipboard.writeText(draft)}>مسودة {index + 1} · نسخ</button>)}</div>}
    </section>
  </div>;
}
