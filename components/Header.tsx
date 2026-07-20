import Link from "next/link";
import { MessageSquareText } from "lucide-react";
export default function Header(){return <header className="header"><div className="container nav"><Link href="/" className="brand"><span className="brandmark"><MessageSquareText size={21}/></span>CopyReply</Link><nav className="navlinks"><Link href="/#categories">Categories</Link><Link href="/studio">Reply Studio</Link><Link href="/saved">Saved</Link><Link href="/search">Search</Link><Link href="/about">About</Link></nav></div></header>}
