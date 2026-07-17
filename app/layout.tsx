import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export const metadata: Metadata={metadataBase:new URL("https://copyreply.com"),title:{default:"CopyReply — The Right Words, Ready to Copy",template:"%s | CopyReply"},description:"Find professional, friendly, polite, and confident replies for work, customers, social messages, invitations, and everyday conversations."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>}
