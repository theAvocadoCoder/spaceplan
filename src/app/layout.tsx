import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {NextIntlClientProvider} from 'next-intl';
import { getLocale, getMessages, getTranslations } from "next-intl/server";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {Provider} from '@/components/ui/provider'; 
import "./globals.css";
import styles from "./layout.module.css";
import QueryProviders from "./query-providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Meta");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NextIntlClientProvider messages={messages} locale={locale} timeZone="UTC">
          <QueryProviders>
            <Provider>
              <Header />
              <main className={styles.main}>
                { children }
              </main>
              <Footer />
            </Provider>
          </QueryProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
