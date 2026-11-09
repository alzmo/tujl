import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tujl.com"),
  title: "TUJL · Tech Updates, Just Latest",
  description: "科技更新，只看最新。来源可追溯的中英双语 AI 简报。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "TUJL · Tech Updates, Just Latest",
    description: "科技更新，只看最新。来源可追溯的中英双语 AI 简报。",
    images: [{ url: "/og.png", width: 1672, height: 941, alt: "TUJL · 把今天留给未来" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TUJL · Tech Updates, Just Latest",
    description: "科技更新，只看最新。来源可追溯的中英双语 AI 简报。",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
