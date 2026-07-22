"use client";
import { useState } from "react";
export default function ArabicCopyButton({text}:{text:string}){const [done,setDone]=useState(false);return <button className="button secondary" onClick={async()=>{await navigator.clipboard.writeText(text);setDone(true);setTimeout(()=>setDone(false),1600)}}>{done?"تم النسخ":"نسخ الرد"}</button>}
