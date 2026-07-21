import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/lib/guides";
export const metadata:Metadata={title:"Communication Guides",description:"Practical guides for professional emails, interviews, customer service, freelancing, networking, and everyday replies.",alternates:{canonical:"/guides"}};
export default function GuidesPage(){return <><section className="pagehero"><div className="container"><div className="breadcrumb"><Link href="/">Home</Link> / Guides</div><h1>Communication Academy</h1><p>Practical, human-written guidance for clearer replies and stronger conversations.</p></div></section><main className="container guide-index"><div className="replygrid">{guides.map(g=><Link className="replycard" href={`/guides/${g.slug}`} key={g.slug}><span className="pill">{g.category}</span><h2>{g.title}</h2><p>{g.description}</p><span className="arrow">Read guide →</span></Link>)}</div></main></>}
