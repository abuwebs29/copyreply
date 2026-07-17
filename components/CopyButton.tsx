"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
export default function CopyButton({text}:{text:string}){const [done,setDone]=useState(false);return <button className="copybtn" onClick={async()=>{await navigator.clipboard.writeText(text);setDone(true);setTimeout(()=>setDone(false),1600)}}>{done?<><Check size={15}/> Copied</>:<><Copy size={15}/> Copy</>}</button>}
