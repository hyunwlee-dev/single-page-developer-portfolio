import type { Metadata } from "next";
import "normalize.css";
import "./globals.css";
import { spaceGrotesk } from "@/app/ui/fonts";

const title = process.env.NEXT_PUBLIC_TITLE;
const description = process.env.NEXT_PUBLIC_DESCRIPTION;
const url = process.env.NEXT_PUBLIC_URL;
const ogi = process.env.NEXT_PUBLIC_OG_IMAGE;

export const metadata: Metadata = {
  title: {
    template: `%s | ${title}`,
    default: title || ''
  },
  icons: {
    icon: "/images/favicon32x32.png",
  },
  description: description,
  authors: {
    name: "hyunwlee",
  },
  keywords: ['Next.js', 'React', 'TypeScript'],
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    title: title,
    description: description,
    url: url,
    images: [ogi || ''],
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: [ogi || ''],
  },
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="ko">
      <body className={`${spaceGrotesk.className}`}>{children}</body>
    </html>
  );
}

