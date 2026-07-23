"use client";
import { useState } from "react";
import { trackEvent } from "@/lib/clientAnalytics";
export default function ArabicCopyButton({text,title="رد عربي"}:{text:string;title?:string}){const [done,setDone]=useState(false);return <button className="button secondary" onClick={async()=>{await navigator.clipboard.writeText(text);trackEvent("studio_reply_copied",{locale:"ar",reply_title:title});setDone(true);setTimeout(()=>setDone(false),1600)}}>{done?"تم النسخ":"نسخ الرد"}</button>}
