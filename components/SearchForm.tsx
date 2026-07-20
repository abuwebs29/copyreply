"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { trackEvent } from "@/lib/clientAnalytics";

export default function SearchForm(){
  const [q,setQ]=useState("");
  const router=useRouter();
  return <form className="searchbox" onSubmit={(event)=>{
    event.preventDefault();
    const query=q.trim();
    if(!query)return;
    trackEvent("search_submitted",{search_term:query});
    router.push(`/search?q=${encodeURIComponent(query)}`);
  }}><input aria-label="Search replies" value={q} onChange={event=>setQ(event.target.value)} placeholder="What do you need to reply to?"/><button className="button">Search replies</button></form>;
}
