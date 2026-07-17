"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function SearchForm(){const [q,setQ]=useState("");const router=useRouter();return <form className="searchbox" onSubmit={(e)=>{e.preventDefault();if(q.trim())router.push(`/search?q=${encodeURIComponent(q.trim())}`)}}><input aria-label="Search replies" value={q} onChange={e=>setQ(e.target.value)} placeholder="What do you need to reply to?"/><button className="button">Search replies</button></form>}
