"use client";

import { useMemo, useState } from "react";
import { Copy, RotateCcw, Sparkles } from "lucide-react";
import type { ReplyItem } from "@/lib/data";

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
};

function firstSentence(text: string) {
  const match = text.match(/^.*?[.!?](?:\s|$)/);
  return (match?.[0] || text).trim();
}

function shorten(text: string, maxSentences: number) {
  const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text];
  return sentences.slice(0, maxSentences).join(" ").trim();
}

function personalize(text: string, state: FormState) {
  let result = text
    .replaceAll("[name]", state.recipientName || "[name]")
    .replaceAll("[recipient name]", state.recipientName || "[recipient name]")
    .replaceAll("[company]", state.company || "[company]")
    .replaceAll("[role]", state.jobTitle || "[role]")
    .replaceAll("[job title]", state.jobTitle || "[job title]")
    .replaceAll("[date]", state.date || "[date]");

  if (state.recipientName && !result.toLowerCase().startsWith("hi ") && !result.toLowerCase().startsWith("dear ")) {
    result = `Hi ${state.recipientName},\n\n${result}`;
  }
  if (state.extraDetail.trim()) result += `\n\n${state.extraDetail.trim()}`;
  if (state.senderName.trim()) result += `\n\nBest,\n${state.senderName.trim()}`;
  return result;
}

export default function ReplyStudio({ replies }: { replies: ReplyItem[] }) {
  const first = replies[0];
  const [state, setState] = useState<FormState>({
    replySlug: first.slug,
    tone: first.variants[0].label,
    length: "medium",
    recipientName: "",
    senderName: "",
    company: "",
    jobTitle: "",
    date: "",
    extraDetail: "",
  });
  const [copied, setCopied] = useState(false);

  const selectedReply = useMemo(
    () => replies.find((reply) => reply.slug === state.replySlug) || first,
    [replies, state.replySlug, first]
  );

  const toneOptions = selectedReply.variants.map((variant) => variant.label);

  const output = useMemo(() => {
    const selectedVariant = selectedReply.variants.find((variant) => variant.label === state.tone) || selectedReply.variants[0];
    let text = selectedVariant.text;
    if (state.length === "one-line") text = firstSentence(text);
    if (state.length === "short") text = shorten(text, 2);
    if (state.length === "detailed") {
      text = `${text}\n\nI appreciate your time and wanted to make sure my response is clear. Please let me know if you need any additional information from me.`;
    }
    return personalize(text, state);
  }, [selectedReply, state]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((current) => ({ ...current, [key]: value }));
  }

  function changeSituation(slug: string) {
    const next = replies.find((reply) => reply.slug === slug) || first;
    setState((current) => ({ ...current, replySlug: slug, tone: next.variants[0].label }));
  }

  async function copyOutput() {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  function reset() {
    setState({
      replySlug: first.slug,
      tone: first.variants[0].label,
      length: "medium",
      recipientName: "",
      senderName: "",
      company: "",
      jobTitle: "",
      date: "",
      extraDetail: "",
    });
  }

  return (
    <div className="studio-shell">
      <section className="studio-panel" aria-label="Reply customization controls">
        <div className="studio-section-title"><Sparkles size={18} /><h2>Customize your reply</h2></div>

        <label className="field-label" htmlFor="situation">Situation</label>
        <select id="situation" value={state.replySlug} onChange={(event) => changeSituation(event.target.value)}>
          {replies.map((reply) => <option value={reply.slug} key={reply.slug}>{reply.title}</option>)}
        </select>

        <div className="field-label">Tone</div>
        <div className="studio-options">
          {toneOptions.map((tone) => (
            <button type="button" key={tone} className={`tonechip ${state.tone === tone ? "active" : ""}`} onClick={() => update("tone", tone)}>{tone}</button>
          ))}
        </div>

        <div className="field-label">Length</div>
        <div className="studio-options">
          {(["one-line", "short", "medium", "detailed"] as Length[]).map((length) => (
            <button type="button" key={length} className={`tonechip ${state.length === length ? "active" : ""}`} onClick={() => update("length", length)}>{length === "one-line" ? "One sentence" : length[0].toUpperCase() + length.slice(1)}</button>
          ))}
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
      </section>

      <section className="studio-preview" aria-live="polite">
        <div className="studio-preview-top"><div><span className="pill">Live preview</span><h2>{selectedReply.title}</h2></div><button className="actionbtn" type="button" onClick={reset}><RotateCcw size={17}/> Reset</button></div>
        <div className="studio-output">{output}</div>
        <button className="button studio-copy" type="button" onClick={copyOutput}><Copy size={18}/>{copied ? "Copied!" : "Copy customized reply"}</button>
        <p className="studio-note">CopyReply customizes curated templates in your browser. Review names, dates, and facts before sending.</p>
      </section>
    </div>
  );
}
