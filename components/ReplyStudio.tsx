"use client";

import { useEffect, useMemo, useState } from "react";
import { Clock3, Copy, Heart, RotateCcw, Sparkles, Trash2 } from "lucide-react";
import type { ReplyItem } from "@/lib/data";
import { recordReplyCopy, trackEvent } from "@/lib/clientAnalytics";

type Length = "one-line" | "short" | "medium" | "detailed";

type FormState = {
  replySlug: string;
  tone: string;
  length: Length;
  recipientName: string;
  senderName: string;
  company: string;
  jobTitle: string;
  date: string;
  extraDetail: string;
  formality: number;
  intensity: number;
  includeGreeting: boolean;
  includeClosing: boolean;
  includeSignature: boolean;
  includeEmoji: boolean;
};

type HistoryItem = {
  id: string;
  title: string;
  output: string;
  state: FormState;
  savedAt: number;
  favorite: boolean;
};

const DRAFT_KEY = "copyreply-studio-draft-v2";
const HISTORY_KEY = "copyreply-studio-history-v2";
const MAX_HISTORY = 10;

function safeParse<T>(value: string | null, fallback: T): T {
  if (!value) return fallback;
  try { return JSON.parse(value) as T; } catch { return fallback; }
}

function firstSentence(text: string) {
  const match = text.match(/^.*?[.!?](?:\s|$)/);
  return (match?.[0] || text).trim();
}

function shorten(text: string, maxSentences: number) {
  const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text];
  return sentences.slice(0, maxSentences).join(" ").trim();
}

function adjustFormality(text: string, level: number) {
  if (level >= 75) {
    return text
      .replace(/\bThanks\b/g, "Thank you")
      .replace(/\bHi\b/g, "Hello")
      .replace(/\bcan't\b/gi, "cannot")
      .replace(/\bwon't\b/gi, "will not")
      .replace(/\bI'd\b/g, "I would");
  }
  if (level <= 25) {
    return text
      .replace(/Thank you/gi, "Thanks")
      .replace(/I would/gi, "I'd")
      .replace(/cannot/gi, "can't")
      .replace(/will not/gi, "won't");
  }
  return text;
}

function applyIntensity(text: string, intensity: number) {
  if (intensity >= 75) return text.replace(/\bplease\b/gi, "please").replace(/\bI think\b/gi, "I believe");
  if (intensity <= 25) return text.replace(/!+/g, ".").replace(/\bvery\b/gi, "");
  return text;
}

function personalize(text: string, state: FormState) {
  let result = text
    .replaceAll("[name]", state.recipientName || "[name]")
    .replaceAll("[recipient name]", state.recipientName || "[recipient name]")
    .replaceAll("[company]", state.company || "[company]")
    .replaceAll("[role]", state.jobTitle || "[role]")
    .replaceAll("[job title]", state.jobTitle || "[job title]")
    .replaceAll("[date]", state.date || "[date]");

  result = adjustFormality(applyIntensity(result, state.intensity), state.formality).trim();

  if (state.includeGreeting) {
    const greeting = state.formality >= 70 ? "Hello" : "Hi";
    const name = state.recipientName || "there";
    if (!result.toLowerCase().startsWith("hi ") && !result.toLowerCase().startsWith("hello ") && !result.toLowerCase().startsWith("dear ")) {
      result = `${greeting} ${name},\n\n${result}`;
    }
  }

  if (state.extraDetail.trim()) result += `\n\n${state.extraDetail.trim()}`;
  if (state.includeEmoji) result += state.intensity >= 60 ? " 🙂" : " 👍";
  if (state.includeClosing) result += `\n\n${state.formality >= 70 ? "Kind regards," : "Best,"}`;
  if (state.includeSignature && state.senderName.trim()) result += `\n${state.senderName.trim()}`;
  return result;
}

function scoreText(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  const sentences = Math.max(1, (text.match(/[.!?]+/g) || []).length);
  const averageSentence = words.length / sentences;
  const professionalism = Math.max(45, Math.min(98, 86 - Math.max(0, averageSentence - 22) * 1.2 + (text.includes("please") ? 4 : 0)));
  const empathy = Math.max(35, Math.min(96, 48 + (/thank|appreciate|understand|sorry|glad/i.test(text) ? 28 : 0) + (/please|happy/i.test(text) ? 10 : 0)));
  const confidence = Math.max(40, Math.min(97, 58 + (/will|can|confirm|ready|available|believe/i.test(text) ? 24 : 0) - (/maybe|perhaps|I think/i.test(text) ? 12 : 0)));
  const readability = averageSentence <= 18 ? "Easy" : averageSentence <= 26 ? "Balanced" : "Dense";
  return { words: words.length, characters: text.length, readingTime: Math.max(1, Math.ceil(words.length / 200)), professionalism: Math.round(professionalism), empathy: Math.round(empathy), confidence: Math.round(confidence), readability };
}

function makeDefault(first: ReplyItem): FormState {
  return {
    replySlug: first.slug,
    tone: first.variants[0].label,
    length: "medium",
    recipientName: "",
    senderName: "",
    company: "",
    jobTitle: "",
    date: "",
    extraDetail: "",
    formality: 55,
    intensity: 50,
    includeGreeting: true,
    includeClosing: true,
    includeSignature: true,
    includeEmoji: false,
  };
}

export default function ReplyStudio({ replies }: { replies: ReplyItem[] }) {
  const first = replies[0];
  const [state, setState] = useState<FormState>(() => makeDefault(first));
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [copied, setCopied] = useState(false);
  const [draftReady, setDraftReady] = useState(false);

  useEffect(() => {
    const draft = safeParse<FormState | null>(localStorage.getItem(DRAFT_KEY), null);
    if (draft && replies.some((reply) => reply.slug === draft.replySlug)) setState({ ...makeDefault(first), ...draft });
    setHistory(safeParse<HistoryItem[]>(localStorage.getItem(HISTORY_KEY), []));
    setDraftReady(true);
  }, [first, replies]);

  useEffect(() => {
    if (!draftReady) return;
    const timer = window.setTimeout(() => localStorage.setItem(DRAFT_KEY, JSON.stringify(state)), 250);
    return () => window.clearTimeout(timer);
  }, [draftReady, state]);

  const selectedReply = useMemo(() => replies.find((reply) => reply.slug === state.replySlug) || first, [replies, state.replySlug, first]);
  const toneOptions = selectedReply.variants.map((variant) => variant.label);

  const output = useMemo(() => {
    const selectedVariant = selectedReply.variants.find((variant) => variant.label === state.tone) || selectedReply.variants[0];
    let text = selectedVariant.text;
    if (state.length === "one-line") text = firstSentence(text);
    if (state.length === "short") text = shorten(text, 2);
    if (state.length === "detailed") text = `${text}\n\nI appreciate your time and wanted to make sure my response is clear. Please let me know if you need any additional information from me.`;
    return personalize(text, state);
  }, [selectedReply, state]);

  const scores = useMemo(() => scoreText(output), [output]);
  const suggestion = scores.words > 120 ? "Consider shortening this reply for faster reading." : scores.empathy < 55 ? "Add a brief thank-you or acknowledgment to make the reply warmer." : scores.confidence < 55 ? "Use a clearer next step to make the message more decisive." : "This reply is clear, balanced, and ready for a final review.";

  function update<K extends keyof FormState>(key: K, value: FormState[K]) { setState((current) => ({ ...current, [key]: value })); }

  function changeSituation(slug: string) {
    const next = replies.find((reply) => reply.slug === slug) || first;
    setState((current) => ({ ...current, replySlug: slug, tone: next.variants[0].label }));
  }

  function persistHistory(next: HistoryItem[]) {
    setHistory(next);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
  }

  function saveSnapshot(favorite = false) {
    const item: HistoryItem = { id: `${Date.now()}-${selectedReply.slug}`, title: selectedReply.title, output, state, savedAt: Date.now(), favorite };
    persistHistory([item, ...history].slice(0, MAX_HISTORY));
    trackEvent("studio_draft_saved", { reply_slug: selectedReply.slug, favorite });
  }

  async function copyOutput() {
    await navigator.clipboard.writeText(output);
    recordReplyCopy(selectedReply.slug, selectedReply.title, `Studio: ${state.tone}`);
    trackEvent("studio_reply_copied", { reply_slug: selectedReply.slug, tone: state.tone, length: state.length });
    saveSnapshot(false);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  function loadHistory(item: HistoryItem) {
    setState({ ...makeDefault(first), ...item.state });
    trackEvent("studio_history_loaded", { reply_slug: item.state.replySlug });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toggleFavorite(id: string) { persistHistory(history.map((item) => item.id === id ? { ...item, favorite: !item.favorite } : item)); }
  function removeHistory(id: string) { persistHistory(history.filter((item) => item.id !== id)); }
  function clearHistory() { persistHistory([]); }

  function reset() {
    const next = makeDefault(first);
    setState(next);
    localStorage.removeItem(DRAFT_KEY);
    trackEvent("studio_reset");
  }

  return (
    <>
      <div className="studio-shell">
        <section className="studio-panel" aria-label="Reply customization controls">
          <div className="studio-section-title"><Sparkles size={18} /><h2>Customize your reply</h2></div>

          <label className="field-label" htmlFor="situation">Situation</label>
          <select id="situation" value={state.replySlug} onChange={(event) => changeSituation(event.target.value)}>
            {replies.map((reply) => <option value={reply.slug} key={reply.slug}>{reply.title}</option>)}
          </select>

          <div className="field-label">Tone</div>
          <div className="studio-options">{toneOptions.map((tone) => <button type="button" key={tone} className={`tonechip ${state.tone === tone ? "active" : ""}`} onClick={() => update("tone", tone)}>{tone}</button>)}</div>

          <div className="field-label">Length</div>
          <div className="studio-options">{(["one-line", "short", "medium", "detailed"] as Length[]).map((length) => <button type="button" key={length} className={`tonechip ${state.length === length ? "active" : ""}`} onClick={() => update("length", length)}>{length === "one-line" ? "One sentence" : length[0].toUpperCase() + length.slice(1)}</button>)}</div>

          <div className="studio-slider-grid">
            <label className="studio-slider"><span><b>Formality</b><em>{state.formality < 35 ? "Casual" : state.formality > 70 ? "Professional" : "Balanced"}</em></span><input type="range" min="0" max="100" value={state.formality} onChange={(event) => update("formality", Number(event.target.value))} /></label>
            <label className="studio-slider"><span><b>Tone intensity</b><em>{state.intensity < 35 ? "Gentle" : state.intensity > 70 ? "Strong" : "Moderate"}</em></span><input type="range" min="0" max="100" value={state.intensity} onChange={(event) => update("intensity", Number(event.target.value))} /></label>
          </div>

          <div className="field-label">Message elements</div>
          <div className="studio-toggle-grid">
            {([['includeGreeting','Greeting'],['includeClosing','Closing'],['includeSignature','Signature'],['includeEmoji','Emoji']] as Array<[keyof FormState,string]>).map(([key,label]) => <label className="studio-toggle" key={key}><input type="checkbox" checked={Boolean(state[key])} onChange={(event) => update(key, event.target.checked as never)} /><span>{label}</span></label>)}
          </div>

          <div className="studio-fields">
            <div><label className="field-label" htmlFor="recipient">Recipient name</label><input id="recipient" value={state.recipientName} onChange={(event) => update("recipientName", event.target.value)} placeholder="e.g. Sarah" /></div>
            <div><label className="field-label" htmlFor="sender">Your name</label><input id="sender" value={state.senderName} onChange={(event) => update("senderName", event.target.value)} placeholder="e.g. Alex" /></div>
            <div><label className="field-label" htmlFor="company">Company</label><input id="company" value={state.company} onChange={(event) => update("company", event.target.value)} placeholder="e.g. Acme Inc." /></div>
            <div><label className="field-label" htmlFor="jobtitle">Role or job title</label><input id="jobtitle" value={state.jobTitle} onChange={(event) => update("jobTitle", event.target.value)} placeholder="e.g. Marketing Manager" /></div>
            <div><label className="field-label" htmlFor="date">Date</label><input id="date" value={state.date} onChange={(event) => update("date", event.target.value)} placeholder="e.g. Monday, 10 June" /></div>
          </div>

          <label className="field-label" htmlFor="detail">Extra personal detail</label>
          <textarea id="detail" value={state.extraDetail} onChange={(event) => update("extraDetail", event.target.value)} placeholder="Add one useful detail, question, deadline, or next step." rows={4} />
          <p className="studio-autosave">Draft auto-saved in this browser.</p>
        </section>

        <section className="studio-preview" aria-live="polite">
          <div className="studio-preview-top"><div><span className="pill">Live preview</span><h2>{selectedReply.title}</h2></div><button className="actionbtn" type="button" onClick={reset}><RotateCcw size={17}/> Reset</button></div>
          <div className="studio-output">{output}</div>
          <div className="studio-metrics"><span><b>{scores.words}</b> words</span><span><b>{scores.characters}</b> characters</span><span><b>{scores.readingTime} min</b> read</span><span><b>{scores.readability}</b> readability</span></div>
          <div className="studio-score-grid">
            <div><span>Professionalism</span><strong>{scores.professionalism}</strong><i style={{ width: `${scores.professionalism}%` }} /></div>
            <div><span>Empathy</span><strong>{scores.empathy}</strong><i style={{ width: `${scores.empathy}%` }} /></div>
            <div><span>Confidence</span><strong>{scores.confidence}</strong><i style={{ width: `${scores.confidence}%` }} /></div>
          </div>
          <p className="studio-suggestion">{suggestion}</p>
          <div className="studio-preview-actions"><button className="button studio-copy" type="button" onClick={copyOutput}><Copy size={18}/>{copied ? "Copied!" : "Copy customized reply"}</button><button className="actionbtn studio-save" type="button" onClick={() => saveSnapshot(true)}><Heart size={17}/> Save version</button></div>
          <p className="studio-note">CopyReply customizes curated templates in your browser. Review names, dates, and facts before sending.</p>
        </section>
      </div>

      <section className="studio-history" aria-label="Recent Studio versions">
        <div className="studio-history-head"><div><span className="eyebrow">Local history</span><h2>Recent Studio versions</h2><p>Your latest customized replies stay on this device only.</p></div>{history.length > 0 && <button className="actionbtn" type="button" onClick={clearHistory}><Trash2 size={16}/> Clear history</button>}</div>
        {history.length === 0 ? <div className="studio-history-empty"><Clock3 size={24}/><p>Copied and saved versions will appear here.</p></div> : <div className="studio-history-grid">{history.map((item) => <article className="studio-history-card" key={item.id}><div><span>{new Date(item.savedAt).toLocaleString()}</span><button className={`studio-heart ${item.favorite ? "active" : ""}`} type="button" onClick={() => toggleFavorite(item.id)} aria-label="Toggle favorite"><Heart size={17}/></button></div><h3>{item.title}</h3><p>{item.output.replace(/\s+/g," ").slice(0,160)}{item.output.length > 160 ? "…" : ""}</p><footer><button className="actionbtn" type="button" onClick={() => loadHistory(item)}>Edit again</button><button className="studio-delete" type="button" onClick={() => removeHistory(item.id)}>Remove</button></footer></article>)}</div>}
      </section>
    </>
  );
}
