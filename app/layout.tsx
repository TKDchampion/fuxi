import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.fuxilaw.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "伏曦法律事務所｜伏於法理，曦於正義",
    template: "%s｜伏曦法律事務所",
  },
  description:
    "伏曦法律事務所提供民事訴訟、家事訴訟、刑事辯護、刑事陪同偵查、非訟事件及企業常年法律顧問等專業服務。伏於法理之深處，曦於正義之將明；以法律為器，以理性為衡，陪伴每一位委託人走過艱難之法律道路。",
  keywords: [
    "伏曦法律事務所",
    "律師事務所",
    "民事訴訟",
    "家事訴訟",
    "刑事辯護",
    "刑事陪同偵查",
    "企業法律顧問",
    "非訟事件",
    "法律諮詢",
    "律師",
  ],
  authors: [{ name: "伏曦法律事務所" }],
  creator: "伏曦法律事務所",
  publisher: "伏曦法律事務所",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: BASE_URL,
    siteName: "伏曦法律事務所",
    title: "伏曦法律事務所｜伏於法理，曦於正義",
    description:
      "伏曦法律事務所提供民事訴訟、家事訴訟、刑事辯護、刑事陪同偵查、非訟事件及企業常年法律顧問等專業服務。以法律為器，以理性為衡，陪伴每一位委託人走過艱難之法律道路。",
    images: [
      {
        url: "/fuxi-photo.jpg",
        width: 1200,
        height: 630,
        alt: "伏曦法律事務所",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "伏曦法律事務所｜伏於法理，曦於正義",
    description:
      "伏曦法律事務所提供民事訴訟、家事訴訟、刑事辯護、刑事陪同偵查、非訟事件及企業常年法律顧問等專業服務。以法律為器，以理性為衡，陪伴每一位委託人走過艱難之法律道路。",
    images: ["/fuxi-photo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className={openSans.className}>
      <body>{children}</body>
    </html>
  );
}
