"use client";

import { useEffect, useMemo, useState } from "react";
import { Download, FilePlus2, Save, Trash2, WandSparkles } from "lucide-react";
import { categories } from "@/lib/data";

type Variant = { label: string; text: string };
type Draft = {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  categorySlug: string;
  situation: string;
  audience: string;
  keywords: string;
  variants: Variant[];
  faqs: { question: string; answer: string }[];
  status: "draft" | "review" | "ready";
  updatedAt: string;
};

const STORAGE_KEY = "copyreply.contentFactory.drafts.v1";
const blankDraft = (): Draft => ({
  id: crypto.randomUUID(), title: "", slug: "", description: "", category: "", categorySlug: "",
  situation: "", audience: "", keywords: "", variants: [
    { label: "Professional", text: "" }, { label: "Short", text: "" }, { label: "Warm", text: "" },
  ], faqs: [], status: "draft", updatedAt: new Date().toISOString(),
});

const slugify = (value: string) => value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export default function ContentFactory() {
  const [draft, setDraft] = useState<Draft>(() => blankDraft());
  const [drafts, setDrafts] = useState<Draft[]>([]);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    try { setDrafts(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")); } catch { setDrafts([]); }
  }, []);

  const issues = useMemo(() => {
    const list: string[] = [];
    if (draft.title.trim().length < 12) list.push("Use a descriptive title of at least 12 characters.");
    if (!draft.slug) list.push("Add a URL slug.");
    if (!draft.categorySlug) list.push("Choose a category.");
    if (draft.description.trim().length < 70) list.push("Meta description should be at least 70 characters.");
    if (draft.variants.filter(v => v.text.trim().length >= 30).length < 3) list.push("Add at least three useful reply variants.");
    if (draft.faqs.length < 3) list.push("Add at least three FAQs.");
    if (draft.keywords.split(",").filter(Boolean).length < 3) list.push("Add at least three comma-separated keywords.");
    return list;
  }, [draft]);

  function update<K extends keyof Draft>(key: K, value: Draft[K]) {
    setDraft(current => ({ ...current, [key]: value, updatedAt: new Date().toISOString() }));
  }

  function chooseCategory(slug: string) {
    const category = categories.find(item => item.slug === slug);
    setDraft(current => ({ ...current, categorySlug: slug, category: category?.name || "", updatedAt: new Date().toISOString() }));
  }

  function generateEditorialFields() {
    const title = draft.title || (draft.situation ? `Reply to ${draft.situation}` : "New Reply Topic");
    const audience = draft.audience || "the recipient";
    const situation = draft.situation || title.toLowerCase();
    setDraft(current => ({
      ...current,
      title,
      slug: current.slug || slugify(title),
      description: current.description || `Ready-to-copy replies for ${situation}, with professional, concise, and warm options you can customize for ${audience}.`,
      keywords: current.keywords || [situation, audience, "reply template", "message example"].join(", "),
      faqs: current.faqs.length ? current.faqs : [
        { question: `How should I reply to ${situation}?`, answer: "Acknowledge the message, answer the main point clearly, and use a tone that fits your relationship with the recipient." },
        { question: "Can I customize these replies?", answer: "Yes. Replace placeholders, add relevant context, and adjust the greeting and closing before sending." },
        { question: "Which tone should I choose?", answer: "Use the professional option for formal situations, the short option for quick responses, and the warm option when empathy or rapport matters." },
      ],
      updatedAt: new Date().toISOString(),
    }));
    setNotice("Editorial fields generated. Review every field before publishing.");
  }

  function saveDraft() {
    const next = [draft, ...drafts.filter(item => item.id !== draft.id)].slice(0, 100);
    setDrafts(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setNotice("Draft saved in this browser.");
  }

  function removeDraft(id: string) {
    const next = drafts.filter(item => item.id !== id);
    setDrafts(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    if (draft.id === id) setDraft(blankDraft());
  }

  function exportJson() {
    const payload = {
      slug: draft.slug,
      title: draft.title,
      description: draft.description,
      category: draft.category,
      categorySlug: draft.categorySlug,
      keywords: draft.keywords.split(",").map(x => x.trim()).filter(Boolean),
      variants: draft.variants.filter(v => v.label.trim() && v.text.trim()),
      faqs: draft.faqs,
      editorial: { situation: draft.situation, audience: draft.audience, status: draft.status },
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${draft.slug || "copyreply-draft"}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
    setNotice("JSON exported. Add it to the content data after editorial review.");
  }

  return (
    <main className="factory-shell">
      <header className="factory-header">
        <div><span className="eyebrow">Private editorial workspace</span><h1>Content Factory</h1><p>Create, validate, queue, and export production-ready reply topics.</p></div>
        <button className="button secondary" onClick={() => setDraft(blankDraft())}><FilePlus2 size={18}/> New draft</button>
      </header>

      {notice && <div className="factory-notice">{notice}</div>}

      <div className="factory-grid">
        <section className="factory-card factory-editor">
          <div className="factory-toolbar">
            <h2>Reply builder</h2>
            <button className="button" onClick={generateEditorialFields}><WandSparkles size={18}/> Generate framework</button>
          </div>

          <div className="factory-form-grid">
            <label>Title<input value={draft.title} onChange={e => update("title", e.target.value)} onBlur={() => !draft.slug && update("slug", slugify(draft.title))} /></label>
            <label>Slug<input value={draft.slug} onChange={e => update("slug", slugify(e.target.value))} /></label>
            <label>Category<select value={draft.categorySlug} onChange={e => chooseCategory(e.target.value)}><option value="">Select category</option>{categories.map(c => <option key={c.slug} value={c.slug}>{c.name}</option>)}</select></label>
            <label>Status<select value={draft.status} onChange={e => update("status", e.target.value as Draft["status"])}><option value="draft">Draft</option><option value="review">Needs review</option><option value="ready">Ready</option></select></label>
            <label>Situation<input value={draft.situation} onChange={e => update("situation", e.target.value)} placeholder="e.g. internship rejection" /></label>
            <label>Audience<input value={draft.audience} onChange={e => update("audience", e.target.value)} placeholder="e.g. recruiter" /></label>
          </div>
          <label>Description<textarea rows={3} value={draft.description} onChange={e => update("description", e.target.value)} /></label>
          <label>Keywords<input value={draft.keywords} onChange={e => update("keywords", e.target.value)} placeholder="keyword one, keyword two, keyword three" /></label>

          <h3>Reply variants</h3>
          {draft.variants.map((variant, index) => <div className="variant-editor" key={index}>
            <input aria-label={`Variant ${index + 1} label`} value={variant.label} onChange={e => update("variants", draft.variants.map((v, i) => i === index ? { ...v, label: e.target.value } : v))} />
            <textarea rows={4} aria-label={`Variant ${index + 1} text`} value={variant.text} onChange={e => update("variants", draft.variants.map((v, i) => i === index ? { ...v, text: e.target.value } : v))} />
          </div>)}

          <h3>FAQs</h3>
          {draft.faqs.map((faq, index) => <div className="faq-editor" key={index}>
            <input value={faq.question} onChange={e => update("faqs", draft.faqs.map((f, i) => i === index ? { ...f, question: e.target.value } : f))} />
            <textarea rows={2} value={faq.answer} onChange={e => update("faqs", draft.faqs.map((f, i) => i === index ? { ...f, answer: e.target.value } : f))} />
          </div>)}

          <div className="factory-actions">
            <button className="button" onClick={saveDraft}><Save size={18}/> Save draft</button>
            <button className="button secondary" disabled={issues.length > 0} onClick={exportJson}><Download size={18}/> Export JSON</button>
          </div>
        </section>

        <aside className="factory-sidebar">
          <section className="factory-card"><h2>Editorial score</h2><div className="score-ring">{Math.max(0, 100 - issues.length * 14)}</div>{issues.length ? <ul className="issue-list">{issues.map(issue => <li key={issue}>{issue}</li>)}</ul> : <p className="success-text">Ready for final editorial review and export.</p>}</section>
          <section className="factory-card"><h2>Search preview</h2><div className="search-preview"><div className="preview-url">copyreply.com/reply/{draft.slug || "your-slug"}</div><strong>{draft.title || "Your reply page title"} | CopyReply</strong><p>{draft.description || "Your meta description will appear here."}</p></div></section>
          <section className="factory-card"><h2>Publishing queue</h2>{drafts.length === 0 ? <p>No saved drafts yet.</p> : <div className="draft-list">{drafts.slice(0, 12).map(item => <div key={item.id} className="draft-row"><button onClick={() => setDraft(item)}><strong>{item.title || "Untitled draft"}</strong><span>{item.status} · {new Date(item.updatedAt).toLocaleDateString()}</span></button><button aria-label="Delete draft" onClick={() => removeDraft(item.id)}><Trash2 size={16}/></button></div>)}</div>}</section>
        </aside>
      </div>
    </main>
  );
}
